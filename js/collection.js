//数据请求
var app = angular.module("indexApp", []);
app.filter("priceFormat", function() {
    //可以注入依赖
    return F._priceFormat;
});

//	用户收藏接口
app.controller("collectionCtrl", function($scope, $http, $filter) {
    var msisdn = localStorage.getItem("msisdn");
    var funId = localStorage.getItem("funId");
    $scope.funId = funId;
    $scope.msisdn = msisdn;

    $scope.p_pernum = 8;
    //变量
    $scope.currentpage = 1;
    $scope.totalPage = 0;
    $scope.pages = [];

    /*下一页*/
    $scope.nextPage = function(currentpage) {
        currentpage++;

        F._setUrl("page", currentpage);
        $scope.nowPage = currentpage;
        _get(currentpage, $scope.p_pernum);
        $("#lastPagebtn")
            .css({
                background: "#0075F6"
            })
            .attr("disabled", false);
    };
    /*上一页*/
    $scope.lastPage = function(currentpage) {
        currentpage--;
        F._setUrl("page", currentpage);
        $scope.nowPage = currentpage;
        _get(currentpage, $scope.p_pernum);
        $("#nextPagebtn")
            .css({
                background: "#0075F6"
            })
            .attr("disabled", false);
    };
    F.loading = new F._loading();
    var _get = function(page, size, callback) {
        if (!F._isLogin()) return false;

        console.log(page);
        console.log(size);

        F.loading.show();
        var url = F._userGetCollection_uc + "?status=0&page=" + page + "&size=" + size;
        var ajax = new ajaxClass($http, url, "POST");
        var appId = localStorage.getItem("funId");
        var method = "fun.uc.getcollection";
        var charset = "utf-8";
        var Key = "userKey";

        var pagesize = size;
        var currentpage = page;

        var md5SigntypeStrig = "appId=" + appId + "&method=" + method + "&charset=" + charset + Key;
        var signType = hex_md5(md5SigntypeStrig);

        var md5EncryptStrig = "funid=" + funId + "&msisdn=" + msisdn + "&pagesize=" + pagesize + "&currentpage=" + currentpage + Key;
        var encrypt = hex_md5(md5EncryptStrig);

        ajax.data = $.param({
            appId: appId,
            method: method,
            charset: charset,
            signType: signType,
            encrypt: encrypt,
            timestamp: "2016-09-21 03:07:50",
            version: "1.0",
            funid: funId,
            msisdn: msisdn,
            pagesize: pagesize,
            currentpage: currentpage
        });
        ajax.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        //			ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

        // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
        // get方式请求数据不需要Cài đặt表头header
        ajax.successCallback = function(res) {
            F.loading.hide();
            var status = res.status;

            var collData = res.data.details;
            if (status == 200) {
                $scope.totalnumber = res.data.totalnumber;

                $scope.nowPage = currentpage;
                $scope.totalPage = res.data.totalpage;

                if ($scope.totalPage == 1) {
                    $("#nextPagebtn").attr("disabled", true);
                    $("#nextPagebtn").css("background", "#d7d7d7");
                    $("#lastPagebtn").attr("disabled", true);
                    $("#lastPagebtn").css("background", "#d7d7d7");
                } else {
                    if (currentpage <= 1) {
                        $("#lastPagebtn").attr("disabled", true);
                        $("#lastPagebtn").css("background", "#d7d7d7");
                        $("#nextPagebtn").attr("disabled", false);
                        $("#nextPagebtn").css("background", "#0075F6");
                    } else if (currentpage >= $scope.totalPage) {
                        $("#nextPagebtn").attr("disabled", true);
                        $("#nextPagebtn").css("background", "#d7d7d7");
                        $("#lastPagebtn").attr("disabled", false);
                        $("#lastPagebtn").css("background", "#0075F6");
                    }
                }

                if (collData == "" && collData == 0) {
                    $(".over").hide();
                    $(".no_list").show();
                    $(".pagination").hide();
                } else {
                    $(".over").show();
                    $(".no_list").hide();
                    $(".pagination").show();
                    // if (page == 1) {
                    //     $scope.collList = collData.slice(0, 8);
                    // } else if (page == 2) {
                    //     $scope.collList = collData.slice(8, 16);
                    // } else if (page == 3) {
                    //     $scope.collList = collData.slice(16, 24);
                    // } else if (page == 4) {
                    //     $scope.collList = collData.slice(24, 32);
                    // } else if (page == 5) {
                    //     $scope.collList = collData.slice(32, 40);
                    // } else {
                    //     $scope.collList = collData.slice(40, 48);
                    // }
                    // $scope.length = collData.length;

                    $scope.currentpage = page;
                    // $scope.totalPage = Math.ceil($scope.length / $scope.p_pernum);
                    // reloadPno();
                    // callback();

                    var overlist = [];
                    var overlist_id = [];
                    for (i = 0; i < collData.length; i++) {
                        var listid = collData[i];

                        overlist_id.push(collData[i].brandId);
                        overlist.push(listid);
                    }
                    $scope.collList = overlist;
                    F.overlist_id = overlist_id;
                    console.log(F.overlist_id);

                    //	   点击单个取消收藏
                    var listgood = [];

                    $scope.chooseid = function(idlist, $event) {
                        if ($($event.target).is(":checked")) {
                            listgood.push(idlist);
                            $("#selectAll").attr("checked", false);
                            //$(".list_good[type='checkbox']").attr("checked",'true')
                            //$('#selectAll').attr("checked",'true');
                        } else {
                            var removeItem = idlist;
                            listgood = $.grep(listgood, function(value) {
                                return value != removeItem;
                            });
                        }

                        if (listgood.length == overlist.length) {
                            document.getElementById("selectAll").checked = true;
                        } else {
                            document.getElementById("selectAll").checked = false;
                        }

                        if (listgood.length == 0) {
                            $(".over button").attr("disabled", true);
                        } else {
                            $(".over button").attr("disabled", false);
                        }
                    };
                    $scope.clearsc = function() {
                        var brand_id = [];
                        if (!F._isLogin()) return false;
                        if (confirm("OK để xóa？")) {
                            var index = 0;
                            $(".list_goodone").each(function() {
                                var self = $(this);
                                if (self.prop("checked")) brand_id.push(F.overlist_id[index]);
                                index += 1;
                            });
                            console.log(brand_id);
                            brand_id = brand_id.join(",");
                            // return false;

                            var url = F._userCancelCollection_uc;
                            var ajax = new ajaxClass($http, url, "POST");
                            var appId = localStorage.getItem("funId");
                            var method = "fun.uc.cancelcollection";
                            var charset = "utf-8";
                            var funid = localStorage.getItem("funId");
                            var msisdn = localStorage.getItem("msisdn");

                            // var brand_id = listgood[r];

                            var Key = "userKey";

                            var md5SigntypeStrig = "appId=" + appId + "&method=" + method + "&charset=" + charset + Key;
                            var signType = hex_md5(md5SigntypeStrig);

                            var md5EncryptStrig = "funid=" + funid + "&msisdn=" + msisdn + "&brand_id=" + brand_id + Key;
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
                                msisdn: msisdn,
                                brand_id: brand_id
                            });
                            ajax.headers = {
                                "Content-Type": "application/x-www-form-urlencoded"
                            };
                            //		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

                            // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
                            // get方式请求数据不需要Cài đặt表头header
                            ajax.successCallback = function(res) {
                                var status = res.status;

                                var collData = res.data.details;
                                if (status == 200) {
                                    localStorage.setItem("funId=" + funId + "brandId=" + brand_id, 0);
                                    location.reload();
                                } else {
                                }
                            };
                            ajax.failureCallback = function(res) {};
                            ajax.requestData();
                        } else {
                        }
                    };

                    //	   点击单个取消收藏结束
                    //	   点击全选 取消收藏

                    $scope.overlistgood = function() {
                        $(".list_goodone").attr("checked", true);
                        return false;
                        if ($("#selectAll").is(":checked")) {
                            overlist = [];
                            for (i = 0; i < $scope.collList.length; i++) {
                                var listid = $scope.collList[i].brandId;
                                overlist.push(listid);
                            }
                            $(".list_goodone").hide();
                            $(".list_goodover").show();

                            Array.prototype.unique = function() {
                                var re = [this[0]];
                                for (var i = 1; i < this.length; i++) {
                                    if (this[i] !== re[re.length - 1]) {
                                        re.push(this[i]);
                                    }
                                }
                                return re;
                            };
                            overlist.unique();

                            $scope.chooseids = function(idlist, $event) {
                                if ($($event.target).is(":checked")) {
                                    overlist.push(idlist);
                                } else {
                                    $("#selectAll").attr("checked", false);
                                    var removeItem = idlist;
                                    overlist = $.grep(overlist, function(value) {
                                        return value != removeItem;
                                    });
                                }

                                if ($scope.collList.length == overlist.length) {
                                    document.getElementById("selectAll").checked = true;
                                } else {
                                    document.getElementById("selectAll").checked = false;
                                }

                                if (overlist.length == 0) {
                                    $(".over button").attr("disabled", true);
                                    $(".list_goodone").show();
                                    $(".list_goodover").hide();
                                    $(".list_good").attr("checked", false);
                                } else {
                                    $(".over button").attr("disabled", false);
                                }
                            };

                            // $scope.clearsc = function() {
                            //     if (confirm("Xác nhận xóa?")) {

                            //         for (var r = 0; r < overlist.length; r++) {
                            //             var url = F._userCancelCollection_uc;
                            //             var ajax = new ajaxClass($http, url, "POST");
                            //             var appId = localStorage.getItem("funId");
                            //             var method = "fun.uc.cancelcollection";
                            //             var charset = "utf-8";
                            //             var funid = "VNQO1RVA7QUM";
                            //             var msisdn = localStorage.getItem("msisdn");
                            //             var brand_id = overlist[r];
                            //             var Key = "userKey";

                            //             var md5SigntypeStrig = "appId=" + appId + "&method=" + method + "&charset=" + charset + Key;
                            //             var signType = hex_md5(md5SigntypeStrig);

                            //             var md5EncryptStrig = "funid=" + funid + "&msisdn=" + msisdn + "&brand_id=" + brand_id + Key;
                            //             var encrypt = hex_md5(md5EncryptStrig);

                            //             ajax.data = $.param({
                            //                 appId: appId,
                            //                 method: method,
                            //                 charset: charset,
                            //                 signType: signType,
                            //                 encrypt: encrypt,
                            //                 timestamp: "2016-09-21 03:07:50",
                            //                 version: "1.0",
                            //                 funid: funid,
                            //                 msisdn: msisdn,
                            //                 brand_id: brand_id
                            //             });
                            //             ajax.headers = {
                            //                 "Content-Type": "application/x-www-form-urlencoded"
                            //             };
                            //             //		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

                            //             // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
                            //             // get方式请求数据不需要Cài đặt表头header
                            //             ajax.successCallback = function(res) {
                            //                 var status = res.status;

                            //                 var collData = res.data.details;
                            //                 if (status == 200) {
                            //                     localStorage.setItem("funId=" + funId + "brandId=" + brand_id, 0);
                            //                     // location.reload();
                            //                 } else {
                            //                 }
                            //             };
                            //             ajax.failureCallback = function(res) {};
                            //             //location.reload();
                            //             ajax.requestData();
                            //         }
                            //     } else {
                            //     }
                            //     //					   		location.reload();
                            // };
                        } else {
                            $(".list_goodone").show();

                            listgood.length = 0;
                            $(".list_goodover").hide();
                        }
                    };

                    //	   点击全选 取消收藏结束
                }
            }
        };
        ajax.failureCallback = function(res) {};
        ajax.requestData();
    };
    _get($scope.currentpage, $scope.p_pernum, function() {});
    //首页
    $scope.p_index = function() {
        $scope.load_page(1);
        $("#selectAll").attr("checked", false);
    };
    //尾页
    $scope.p_last = function() {
        $scope.load_page($scope.totalPage);
        $("#selectAll").attr("checked", false);
    };
    //加载某一页
    $scope.load_page = function(page) {
        _get(page, $scope.p_pernum, function() {});
        $("#selectAll").attr("checked", false);
    };
    //初始化页码
    var reloadPno = function() {
        $scope.pages = calculateIndexes($scope.currentpage, $scope.totalPage, 8);
    };
    //分页算法
    var calculateIndexes = function(current, length, displayLength) {
        var indexes = [];
        var start = Math.round(current - displayLength / 2);
        var end = Math.round(current + displayLength / 2);
        if (start <= 1) {
            start = 1;
            end = start + displayLength - 1;
            if (end >= length - 1) {
                end = length - 1;
            }
        }
        if (end >= length - 1) {
            end = length;
            start = end - displayLength + 1;
            if (start <= 1) {
                start = 1;
            }
        }
        for (var i = start; i <= end; i++) {
            indexes.push(i);
        }
        return indexes;
    };

    $scope.getUserInfoDetails = function() {
        var url = F._userViewDetailInfo_uc;
        var ajax = new ajaxClass($http, url, "POST");

        var appId = localStorage.getItem("funId");
        var method = "fun.uc.userviewdetail";
        var charset = "utf-8";
        var funid = localStorage.getItem("funId");
        //		var msisdn = localStorage.getItem("msisdn");
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
        //		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

        // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
        // get方式请求数据不需要Cài đặt表头header
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

    $scope.product = function(typeId, brandId, id) {
        gotoDetails(typeId, brandId, id);
    };

    // //点击商品页面跳转详情
    // function gotoDetails(typeId, brandId) {
    //     if (brandId != null && brandId != "" && typeId != null && typeId != "") {
    //         window.location.href = "./details.html?typeId=" + typeId + "&brandId=" + brandId;
    //         // window.open("./details.html?typeId=" + typeId + "&brandId=" + brandId)
    //     } else {
    //         window.location.href = "";
    //     }
    // }
});
