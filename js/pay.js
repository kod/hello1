var app = angular.module("payApp", []);
app.filter("priceFormat", function() {
    //可以注入依赖
    return F._priceFormat;
});

app.controller("payCtrl", function($scope, $http, $filter) {
    F.query = F._hrefUtils.parse().query || {};
    if (F.query && F.query.from === "cart") {
        $scope.isToCart = true;
        F.isToCart = true;
    } else {
        $scope.isToCart = false;
        F.isToCart = false;
    }

    F.LS__data = $scope.LS__data = JSON.parse(sessionStorage.getItem("pay_cart_data"));
    F.subject = $scope.subject = F.LS__data[0].subject;
    F.goodsDetail = $scope.goodsDetail = F.LS__data[0].detail;
    F.fenqiNum = $scope.fenqiNum = F.isToCart ? 12 : +sessionStorage.getItem("fenqiNum");
    F.paymentNum = $scope.paymentNum = F.isToCart ? "0.5" : sessionStorage.getItem("paymentNum") + "";

    function calc_allTotalData(array) {
        var i;
        var index;
        var result = {
            totalAmount: 0,
            orgPrice: 0
        };
        for (index = 0; index < array.length; index++) {
            result.totalAmount += array[index].totalAmount * array[index].quantity;
            result.orgPrice += array[index].orgPrice * array[index].quantity;
        }
        return result;
    }

    var allTotalData_result = calc_allTotalData(F.LS__data);
    $scope.totalamount = F.totalamount = allTotalData_result.totalAmount;
    $scope.orgPrice = F.orgPrice = allTotalData_result.orgPrice;

    // F.is_product_multi = F.LS__data.length > 1;

    // $("#fenqiNum" + $scope.fenqiNum).addClass("b_active");

    $scope.$watch("paymentNum", function(newValue, oldValue) {
        F.paymentNum = newValue;
        F.vue.paymentNum = +newValue;
        if (newValue == "1.0") {
            F.fenqiNum = $scope.fenqiNum = 0;

            $(".fenqiNumBtn button")
                .attr("disabled", true)
                .addClass("actives");
        } else {
            if (oldValue == "1.0") F.fenqiNum = $scope.fenqiNum = F.isToCart ? 12 : +sessionStorage.getItem("fenqiNum");

            if ($(".fenqiNumBtn button:last-child").is(".b_active") == false) {
                $(".fenqiNumBtn button:last-child").removeClass("b_active");
            } else {
                $(".fenqiNumBtn button:last-child").addClass("b_active");
            }
            $(".fenqiNumBtn button")
                .attr("disabled", false)
                .removeClass("actives");
            fenqiAjax($scope.totalamount, newValue, $scope.fenqiNum);
        }
    });
    $scope.paymentNumChange = function(num) {
        num = num + "";
        if (num == "1.0") {
            $(".moneryIcon,.installment").hide();

            $(".fenqiNumBtn button")
                .attr("disabled", true)
                .addClass("actives");
            $scope.resPrice = $scope.totalamount;
            $scope.paymentNum = num;
            F.paymentNum = num;
        } else {
            $(".moneryIcon,.installment").show();

            $(".fenqiNumBtn button")
                .attr("disabled", false)
                .removeClass("actives");
            $scope.paymentNum = num;
            F.paymentNum = num;
            setTimeout(() => {
                fenqiAjax($scope.totalamount, num, $scope.fenqiNum);
            }, 300);
        }
    };

    $scope.fenqi = function(num) {
        $scope.fenqiNum = num;
        F.fenqiNum = num;
    };

    $scope.$watch(
        "fenqiNum",
        function(newValue, oldValue) {
            fenqiAjax($scope.totalamount, $scope.paymentNum, newValue);
        },
        true
    );

    //	获取分期金额信息接口
    function fenqiAjax(totalamounts, payrate, repaymentmonths) {
        var url = F._returnMoney_im;
        var ajax = new ajaxClass($http, url, "POST");

        var appid = localStorage.getItem("funId") || "";
        var method = "fun.trade.returnMoney";
        var charset = "utf-8";
        var totalamounts = totalamounts;
        var repaymentmonths = repaymentmonths;
        var payrate = payrate;
        var Key = "settleKey";

        var detailsArrayString = totalamounts + "_" + repaymentmonths + "_" + payrate;

        var md5SigntypeStrig = "appid=" + appid + "&method=" + method + "&charset=" + charset + Key;
        var signType = hex_md5(md5SigntypeStrig);

        var md5EncryptStrig = "totalamounts=" + totalamounts + "&repaymentmonths=" + repaymentmonths + "&payrate=" + payrate + Key;
        var encrypt = hex_md5(md5EncryptStrig);

        ajax.data = $.param({
            appid: appid,
            method: method,
            charset: charset,
            signtype: signType,
            encrypt: encrypt,
            timestamp: "2016-09-21 03:07:50",
            version: "1.0",
            totalamounts: totalamounts,
            repaymentmonths: repaymentmonths,
            payrate: payrate
        });
        ajax.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };

        ajax.successCallback = function(res) {
            if (res.data.code == 10000) {
                if (payrate == "1.0") {
                    $scope.resPrice = $scope.totalamount;
                } else {
                    $scope.resPrice = res.data.details[detailsArrayString][0].interest + res.data.details[detailsArrayString][0].principal;
                }

                //	分期金额
                $(".tables tbody").html("");
                var information = function() {
                    $(".tables tbody").html("");
                    var fenqi = JSON.stringify(res.data.details);
                    for (i = 1; i < res.data.details[detailsArrayString].length + 1; i++) {
                        $(".tables tbody").append("<tr><td>" + i + " Số kỳ</td><td>" + F._priceFormat(res.data.details[detailsArrayString][i - 1].principal) + " VND</td><td>" + F._priceFormat(res.data.details[detailsArrayString][i - 1].interest) + " VND</td></tr>");
                    }
                };
                information();
                $scope.information = information;
            }
        };
        ajax.failureCallback = function(res) {};
        ajax.requestData();
    }
    $scope.fenqiAjax = fenqiAjax;
    $scope.gotoDetails = gotoDetails;
});

//地址address请求
app.controller("addCtrl", function($scope, $http, $filter) {
    // F._userAction_userViewAddr({}, function(ret) {
    //     loading.hide();
    //     if (!ret) return false;
    //     if (ret.code !== 10000) return false;

    //     $scope.addrlistData = [];
    //     $scope.addrlistData = ret.details;
    //     $scope.addrlistLength = ret.details.length;

    //     $scope.$watch("addrlistLength", function(n) {
    //         if (n > 4) {
    //             $(".addAddrli").css("display", "none");
    //         }
    //     });
    // });

    $scope.edit_address = function(item) {
        return item.address + (item.division4thName ? ', ' : '') + item.division4thName + (item.division3rdName ? ', ' : '') + item.division3rdName + (item.division2ndName ? ', ' : '') + item.division2ndName
    }
    
    if (!localStorage.getItem("funId")) return false;

    var loading = new F._loading();
    loading.show();
    var url = F._userAction_userViewAddr_uc;
    var ajax = new ajaxClass($http, url, "POST");
    var appId = localStorage.getItem("funId");
    var method = "fun.uc.userviewaddr";
    var charset = "utf-8";
    var funid = localStorage.getItem("funId");
    var msisdn = localStorage.getItem("msisdn");
    var Key = "userKey";

    var md5SigntypeStrig = "appId=" + appId + "&method=" + method + "&charset=" + charset + Key;
    var signType = hex_md5(md5SigntypeStrig);

    var md5EncryptStrig = "funid=" + funid + "&msisdn=" + msisdn + Key;
    var encrypt = hex_md5(md5EncryptStrig);

    ajax.data = $.param({
        appId: appId,
        method: method,
        charset: charset,
        signType: signType,
        encrypt: encrypt,
        timestamp: "2016-09-21 03:07:50",
        version: "1.0",
        funid: funid,
        msisdn: msisdn
    });
    ajax.headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    };

    ajax.successCallback = function(res) {
        loading.hide();

        var status = res.status;

        if (res.data.code == 10000) {
            $scope.addrlistData = [];

            for (var i = 0; i < res.data.details.length; i++) {
                if (res.data.details[i].isdefault === "Y" && res.data.details[i].division2ndName) {
                    // F.address = res.data.details[i].address;

                    F.address = res.data.details[i].address;
                    F.address_id = res.data.details[i].id;
                    F.division4thName = res.data.details[i].division4thName;
                    F.division3rdName = res.data.details[i].division3rdName;
                    F.division2ndName = res.data.details[i].division2ndName;
                    F.division4thCode = res.data.details[i].division4thCode;
                    F.division3rdCode = res.data.details[i].division3rdCode;
                    F.division2ndCode = res.data.details[i].division2ndCode;
                    
                    // F.division2ndName = res.data.details[i].division2ndName;
                    // F.address = res.data.details[i].address + ", " + res.data.details[i].division4thName + ", " + res.data.details[i].division3rdName + ", " + res.data.details[i].division2ndName;
                    F.msisdn = res.data.details[i].msisdn;
                    F.username = res.data.details[i].username;
                    $scope.addrlistData_index = i;
                }
            }

            $scope.addrlistData = F.addrlistData = res.data.details;
            $scope.addrlistLength = res.data.details.length;

            $scope.$watch("addrlistLength", function(n) {
                if (n > 4) {
                    $(".addAddrli").css("display", "none");
                }
            });
            $scope.name = function() {
                event.stopPropagation();
            };
            $scope.msisdn = function() {
                event.stopPropagation();
            };
            $scope.address = function() {
                event.stopPropagation();
            };
            $scope.mm = function($event) {
                $event.stopPropagation();
                if (
                    $($event.target)
                        .parent()
                        .is(".act") == true
                ) {
                    $(".address li.act").removeClass("acf");
                    $($event.target)
                        .parent()
                        .removeClass("actt");
                    $(".address .li").removeClass("actt");
                } else {
                    $(".address li.act").addClass("acf");
                    $(".address .li").removeClass("actt");
                    $($event.target)
                        .parent()
                        .addClass("actt");
                    $(".address .li")
                        .find(".default")
                        .html("Địa chỉ mặc định");
                    $($event.target)
                        .parent()
                        .find(".default")
                        .html("√");
                }
            };
        }
    };
    ajax.failureCallback = function(res) {
        loading.hide();
    };
    var loading = new F._loading();
    loading.show();
    ajax.requestData();
});
//	新增地址接口
app.controller("addressCtrl", function($scope, $http, $filter) {
    $scope.addppp = function(params) {
        if (!localStorage.getItem("funId")) {
            F._confirm("Gợi ý", "Vui lòng đăng nhập", "tips", [
                {
                    name: "Xác nhận",
                    func: function() {
                        window.location.href = "login.html";
                    }
                }
            ]);
            return false;
        }

        F._add_edit_address({
            id: "",
            isdefault: "",
            msisdn: "",
            address: "",
            username: "",
            districts_id: "",
            provinces_id: "",
            wards_id: ""
        });
    };

    // $scope.addppp = function() {
    //     $("#names").val("");
    //     $("#phone").val("");
    //     $("#textarea").val("");
    //     $(".rcone").hide();
    //     $(".rctwo").show();
    //     $scope.submits = function() {
    //         event.stopPropagation();
    //         var na = $("#names").val();
    //         var ph = $("#phone").val();
    //         var ta = $("#textarea").val();

    //         if (ta.length == 0 || na.length == 0 || ph.length == 0) {
    //             $("#errormsg").show();
    //             $("#errormsg").html("Tên và số điện thoại không được để trống");
    //         } else {
    //             if (F._submits_ing) return false;
    //             F._submits_ing = true;

    //             $("#errormsg").hide();
    //             $("#errormsg").html("");

    //             var loading = new F._loading();
    //             loading.show();
    //             F._userAction_userAddAddr(
    //                 {
    //                     msisdn: $("#phone").val(),
    //                     address: $("#textarea").val(),
    //                     isdefault: "Y",
    //                     username: $("#names").val()
    //                 },
    //                 function(ret) {
    //                     loading.hide();
    //                     F._submits_ing = false;
    //                     if (!ret) return false;

    //                     if (ret.code === 10000) history.go(0);
    //                 }
    //             );
    //         }
    //     };
    // };

    //	默认地址
    $scope.moren = function(index, $id, $isdefault, $msisdn, $address, $username, division4th, division3rd, division2nd) {
        event.stopPropagation();
        if (!F._isLogin()) return false;

        if (!division2nd) {
            F._confirm("Gợi ý", "Địa chỉ này chưa đầy đủ", "tips", [
                {
                    name: "Sửa",
                    func: function() {
                        $(".site__m-i-r3-edit")
                            .eq(index)
                            .click();
                    }
                }
            ]);
            return false;
        }

        if (confirm("Xác nhận cài đặt địa chỉ nhận hàng mặc định？")) {
            var loading = new F._loading();
            loading.show();
            F._userAction_userModifyAddr(
                {
                    addrid: $id,
                    msisdn: $msisdn,
                    address: $address,
                    isdefault: "Y",
                    username: $username,
                    division2nd: division2nd,
                    division3rd: division3rd,
                    division4th: division4th
                },
                function(ret) {
                    loading.hide();
                    if (!ret) return false;
                    if (ret.code !== 10000) return false;

                    window.location.reload();
                }
            );
        }
    };

    $scope.set_active = function(index, msisdn, item, username, id) {
        // if (!item.division2ndName) {
        //     F._confirm("Gợi ý", "Địa chỉ này chưa đầy đủ", "tips", [
        //         {
        //             name: "Sửa",
        //             func: function() {
        //                 setTimeout(function() {
        //                     $(".site__m-i-r3-edit")
        //                         .eq(index)
        //                         .click();
        //                 }, 1000);
        //             }
        //         }
        //     ]);
        //     return false;
        // }

        F.address_id = id;
        F.address = item.address;
        F.division4thName = item.division4thName;
        F.division3rdName = item.division3rdName;
        F.division2ndName = item.division2ndName;
        F.division4thCode = item.division4thCode;
        F.division3rdCode = item.division3rdCode;
        F.division2ndCode = item.division2ndCode;
        
        // F.division2ndName = item.division2ndName;
        // F.address = item.address + ", " + item.division4thName + ", " + item.division3rdName + ", " + item.division2ndName;
        F.msisdn = msisdn;
        F.username = username;

        $(".site__main-item").removeClass("site__main-item_active");
        $(".site__main-item")
            .eq(index)
            .addClass("site__main-item_active");
    };

    $scope.xiugai = function(params) {
        F._add_edit_address(params);
    };

    //	修改地址
    // $scope.xiugai = function($id, $isdefault, $msisdn, $address, $username) {
    //     $("#errormsg").hide();
    //     $("#errormsg").html("");
    //     $("#names").val($username);
    //     $("#phone").val($msisdn);
    //     $("#textarea").val($address);

    //     $(".rcone").show();
    //     $(".rctwo").hide();
    //     $scope.submit = function() {
    //         if ($("#errormsg").is(":hidden")) {
    //             var loading = new F._loading();
    //             loading.show();
    //             F._userAction_userModifyAddr(
    //                 {
    //                     addrid: $id,
    //                     msisdn: $("#phone").val(),
    //                     address: $("#textarea").val(),
    //                     isdefault: $isdefault,
    //                     username: $("#names").val()
    //                 },
    //                 function(ret) {
    //                     loading.hide();
    //                     if (!ret) return false;
    //                     if (ret.code !== 10000) return false;

    //                     window.location.reload();
    //                 }
    //             );
    //         }
    //     };
    // };

    //  删除地址
    $scope.remove = function($id) {
        event.stopPropagation();
        if (confirm("Xác nhận xóa địa chỉ?")) {
            var loading = new F._loading();
            loading.show();
            F._userAction_userDelAddrs(
                {
                    adds: $id
                },
                function(ret) {
                    loading.hide();
                    if (!ret) return false;
                    if (ret.code !== 10000) return false;
                    window.location.reload();
                }
            );
        }
    };

    $scope.phoneNum = "";
    $scope.$watch("phoneNum", function(newValue, oldValue) {
        if (!isNaN(newValue)) {
            if (newValue.toString().length < 20) {
                $scope.phoneNum = newValue;
            } else {
                $scope.phoneNum = oldValue;
            }
        } else {
            $scope.phoneNum = "";
        }
    });
});
