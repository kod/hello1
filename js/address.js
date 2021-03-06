var app = angular.module("indexApp", []);
var loading = new F._loading();
app.controller("addCtrl", function($scope, $http, $filter) {

    $scope.edit_address = function(item) {
        return item.address + (item.division4thName ? ', ' : '') + item.division4thName + (item.division3rdName ? ', ' : '') + item.division3rdName + (item.division2ndName ? ', ' : '') + item.division2ndName
    }
    
    var loading = new F._loading();
    loading.show();
    // F._userAction_userViewAddr({}, function(ret) {
    //     loading.hide();
    //     if (!ret) return false;
    //     if (ret.code !== 10000) return false;

    //     $scope.addrlistData = [];
    //     $scope.addrlistData = ret.details;
    //     $scope.addrlistLength = ret.details.length;

    //     $scope.$watch("addrlistLength", function(n) {
    //         if (n > 5) {
    //             $(".addAddrli").css("display", "none");
    //         }
    //     });
    // });

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
            $scope.addrlistData = res.data.details;
            $scope.addrlistLength = res.data.details.length;

            $scope.$watch("addrlistLength", function(n) {
                if (n > 4) {
                    $(".addAddrli").css("display", "none");
                }
            });
        } else {
        }
    };
    ajax.failureCallback = function(res) {};
    ajax.requestData();
});

//  新增地址接口
app.controller("addressCtrl", function($scope, $http, $filter) {
    $scope.msisdn = localStorage.getItem("msisdnFormat");

    $scope.set_active = function(index) {
        // $('.site__main-item').removeClass('site__main-item_active');
        // $('.site__main-item').eq(index).addClass('site__main-item_active');
        // $('#names').val('');
        // $('#phone').val('');
        // $('#textarea').val('');
    };

    $scope.addppp = function(params) {
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

    $scope.getUserInfoDetails = function() {
        var url = F._userViewDetailInfo_uc;
        var ajax = new ajaxClass($http, url, "POST");

        var appId = localStorage.getItem("funId");
        var method = "fun.uc.userviewdetail";
        var charset = "utf-8";
        var funid = localStorage.getItem("funId");
        //      var msisdn = localStorage.getItem("msisdn");
        var msisdn = localStorage.getItem("msisdn");
        var Key = "userKey";

        var md5SigntypeStrig = "appId=" + appId + "&method=" + method + "&charset=" + charset + Key;
        var signType = hex_md5(md5SigntypeStrig);

        var md5EncryptStrig = "funid=" + funid + "&msisdn=" + msisdn + Key;
        var encrypt = hex_md5(md5EncryptStrig);

        ajax.data = $.param({
            appId: appId,
            method: method,
            charset: "utf-8",
            signType: signType,
            encrypt: encrypt,
            timestamp: "2017-09-06 11:30:50",
            version: "1.0",
            funid: funid,
            msisdn: msisdn
        });

        ajax.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        //      ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

        // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
        // get方式请求数据不需要设置表头header
        ajax.successCallback = function(res) {
            var resCode = res.data.code;

            if (resCode == 10000) {
                $scope.centerUserInfo = res.data;

                $scope.headimage = res.data.headimage;
                $(".img-phone").attr("src", $scope.headimage);
            } else {
            }
        };
        ajax.failureCallback = function(res) {};
        ajax.requestData();
    };
    $scope.getUserInfoDetails();

    //      默认地址
    $scope.moren = function(index, $id, $isdefault, $msisdn, $address, $username, division4th, division3rd, division2nd) {
        event.stopPropagation();
        if (!F._isLogin()) return false;

        if (!division2nd) {
            F._confirm("Gợi ý", "Địa chỉ này chưa đầy đủ", "tips", [
                {
                    name: "Sửa",
                    func: function() {
                        $('.site__m-i-r3-edit').eq(index).click();
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

                    // window.location.reload();
                }
            );
        }
    };

    //      修改地址
    // $scope.xiugai = function($id, $isdefault, $msisdn, $address, $username) {
    $scope.xiugai = function(params) {
        F._add_edit_address(params);
        // $("#names").val($username);

        // $("#phone").val($msisdn);
        // $("#textarea").val($address);

        // $(".rcone").show();
        // $(".rctwo").hide();
        // $scope.submit = function() {
        //     if (!F._isLogin()) return false;

        //     if ($("#errormsg").is(":hidden")) {
        //         var loading = new F._loading();
        //         loading.show();
        //         F._userAction_userModifyAddr(
        //             {
        //                 addrid: $id,
        //                 msisdn: $("#phone").val(),
        //                 address: $("#textarea").val(),
        //                 isdefault: $isdefault,
        //                 username: $("#names").val()
        //             },
        //             function(ret) {
        //                 loading.hide();
        //                 if (!ret) return false;
        //                 if (ret.code !== 10000) return false;

        //                 window.location.reload();
        //             }
        //         );
        //     }
        // };
    };
    //      删除地址
    $scope.remove = function($id) {
        if (!F._isLogin()) return false;

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
    $scope.$watch("phoneNum", function(newValue, oldValue) {});
});
