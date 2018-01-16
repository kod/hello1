/* tcy -start-*/
if (!window.F) window.F = {};
/* tcy -end-*/

var app = angular.module("orderApp", []);
app.filter("priceFormat", function() {
    //可以注入依赖
    return F._priceFormat;
});

app.controller("orderCtrl", function($scope, $http, $filter, $sce) {
    $scope.msisdn = localStorage.getItem("msisdnFormat");

    $scope.cancelStatus = "1";
    $scope.payStatus = "1";
    $scope.orderStatus = "1";

    /*请求账单数据*/

    var query = F._hrefUtils.parse().query || {};

    //初始化账单请求参数
    $scope.reqPara = {
        status: query.status || "99999",
        page: query.page || "1",
        rows: "5"
    };

    var status_json = {
        99999: 0,
        10001: 1,
        30000: 2,
        30001: 3
    };

    function orderOperate(status) {
        status = +status;
        var result = [];
        switch (status) {
            case 10000: // 交易创建，等待买家付款
                result = [
                    {
                        name: "Quản lý đơn hàng",
                        type: "detail",
                        class: ""
                    },
                    {
                        name: "Thanh toán",
                        type: "pay",
                        class: ""
                    },
                    {
                        name: "Hủy",
                        type: "cancel",
                        class: ""
                    }
                ];
                break;
            case 30001: // 待评价
                result = [
                    {
                        name: "Quản lý đơn hàng",
                        type: "detail",
                        class: ""
                    },
                    {
                        name: "Đánh giá",
                        type: "review",
                        class: ""
                    }
                ];
                break;

            default:
                result = [
                    {
                        name: "Quản lý đơn hàng",
                        type: "detail",
                        class: ""
                    }
                ];
                break;
        }
        return result;
    }

    // $scope.orderOperate = orderOperate;

    // : 0,
    // 2: 1,
    // 5: 2,
    // 6: 3,

    $(".nav-item").removeClass("act");
    $(".nav-item")
        .eq(status_json[$scope.reqPara.status])
        .addClass("act");

    //上一页
    $scope.lastPage = function() {
        if ($scope.reqPara.page > 1) {
            $scope.reqPara.page--;
        }
        F._setUrl("page", $scope.reqPara.page);
    };

    //下一页
    $scope.nextPage = function() {
        if ($scope.reqPara.page < $scope.totalPage) {
            $scope.reqPara.page++;
        }
        F._setUrl("page", $scope.reqPara.page);
    };

    $scope.confirm = function() {
        var page = $("#gotoPage").val();
        $scope.reqPara.page = page;
    };

    //切换订单类型
    $scope.reqType = function(type) {
        // if (type != null) {
        //     $scope.reqPara = {
        //         status: type,
        //         page: '1',
        //         rows: '5'
        //     }
        // } else {
        //     $scope.reqPara = {
        //         status: "",
        //         page: '1',
        //         rows: '5'
        //     }
        // }

        var status = "status";
        var page = "1";
        var rows = "5";

        if (type != null) {
            status = type;
        }

        $scope.reqPara = {
            status: status,
            page: page,
            rows: rows
        };

        F._setUrl("page", "1");

        $("#gotoPage").val("1");
    };
    $scope.$watch("iptpage", function(n, o) {
        if (n < 1) {
            $scope.iptpage = 1;
        } else if (n > $scope.totalPage) {
            $scope.iptpage = $scope.totalPage;
        }
    });
    $scope.$watch(
        "reqPara",
        function(n, o) {
            if (n.page > 0) {
                if (n.page <= $scope.totalPage && n.rows <= $scope.count) {
                } else {
                    $scope.reqPara.page = o.page;
                    $scope.reqPara.rows = o.rows;
                }
            } else {
                $scope.reqPara.page = 1;
            }
            orderDetailsAjax(n.status, n.page, n.rows);
        },
        true
    );

    function orderDetailsAjax(status, page, rows) {
        if (!F._isLogin()) return false;

        var loading = new F._loading();
        loading.show();
        var url = F._queryOrderList_td;
        var ajax = new ajaxClass($http, url, "POST");

        var appid = localStorage.getItem("funId");
        var method = "fun.trade.queryList";
        var charset = "utf-8";
        var msisdn = localStorage.getItem("msisdn");
        var funId = localStorage.getItem("funId");
        $scope.funId = funId;
        $scope.msisdn = msisdn;
        var page = page;
        var rows = rows;
        var status = status;
        var Key = "tradeKey";

        var md5SigntypeStrig = "appid=" + appid + "&method=" + method + "&charset=" + charset + Key;
        var signtype = hex_md5(md5SigntypeStrig);

        var md5EncryptStrig = "funid=" + funId + "&page=" + page + "&rows=" + rows + "&status=" + status + Key;
        var encrypt = hex_md5(md5EncryptStrig);

        ajax.data = $.param({
            appid: appid,
            method: method,
            charset: "utf-8",
            signtype: signtype,
            encrypt: encrypt,
            timestamp: "2017-9-21 09:51:41",
            version: "2.0",
            funid: funId,
            page: page,
            rows: rows,
            status: status
        });

        ajax.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };

        ajax.successCallback = function(res) {
            loading.hide();
            function edit_for_status($scope, tradeStatus) {
                switch (tradeStatus) {
                    case "10000":
                        $scope.myHtml = "<span>" + F._tradeStatus(tradeStatus) + "</span>";
                        $scope.trustHtml = $sce.trustAsHtml($scope.myHtml);
                        $scope.orderList[i]["tradeStatusMsg"] = $scope.trustHtml;

                        $scope.orderList[i].operate = [
                            {
                                name: "Thông tin cụ thể về đơn hàng"
                            },
                            {
                                name: "Thanh toán",
                                type: "pay"
                            },
                            {
                                name: "Hủy",
                                type: "cancel"
                            }
                        ];
                        break;

                    case "10001":
                        $scope.myHtml = "<span>" + F._tradeStatus(tradeStatus) + "</span>";
                        $scope.trustHtml = $sce.trustAsHtml($scope.myHtml);
                        $scope.orderList[i]["tradeStatusMsg"] = $scope.trustHtml;
                        $scope.orderList[i].operate = [
                            {
                                name: "Thông tin cụ thể về đơn hàng"
                            }
                        ];
                        break;

                    case "10003": // 交易支付等待
                        $scope.myHtml = "<span>" + F._tradeStatus(tradeStatus) + "</span>";
                        $scope.trustHtml = $sce.trustAsHtml($scope.myHtml);
                        $scope.orderList[i]["tradeStatusMsg"] = $scope.trustHtml;
                        $scope.orderList[i].operate = [
                            {
                                name: "Thông tin cụ thể về đơn hàng"
                            }
                        ];
                        break;

                    case "20000":
                        $scope.myHtml = "<span>" + F._tradeStatus(tradeStatus) + "</span>";
                        $scope.trustHtml = $sce.trustAsHtml($scope.myHtml);
                        $scope.orderList[i]["tradeStatusMsg"] = $scope.trustHtml;
                        $scope.orderList[i].operate = [
                            {
                                name: "Thông tin cụ thể về đơn hàng"
                            }
                        ];
                        break;

                    case "20001":
                        $scope.myHtml = "<span>" + F._tradeStatus(tradeStatus) + "</span>";
                        $scope.trustHtml = $sce.trustAsHtml($scope.myHtml);
                        $scope.orderList[i]["tradeStatusMsg"] = $scope.trustHtml;
                        $scope.orderList[i].operate = [
                            {
                                name: "Thông tin cụ thể về đơn hàng"
                            }
                        ];
                        break;

                    case "20002":
                        $scope.myHtml = "<span>" + F._tradeStatus(tradeStatus) + "</span>";
                        $scope.trustHtml = $sce.trustAsHtml($scope.myHtml);
                        $scope.orderList[i]["tradeStatusMsg"] = $scope.trustHtml;
                        $scope.orderList[i].operate = [
                            {
                                name: "Thông tin cụ thể về đơn hàng"
                            }
                        ];
                        break;

                    case "30000":
                        $scope.myHtml = "<span>" + F._tradeStatus(tradeStatus) + "</span>";
                        $scope.trustHtml = $sce.trustAsHtml($scope.myHtml);
                        $scope.orderList[i]["tradeStatusMsg"] = $scope.trustHtml;
                        $scope.waitList = [];
                        $scope.waitList.push($scope.orderList[i]);
                        $scope.orderList[i].operate = [
                            {
                                name: "Thông tin sản phẩm"
                            }
                        ];
                        $("#shouhuoTip").css("display", "none");
                        $("#shouhuoTbody").css("display", "block");
                        break;

                    case "30001":
                        $scope.myHtml = "<span>" + F._tradeStatus(tradeStatus) + "</span>";
                        $scope.trustHtml = $sce.trustAsHtml($scope.myHtml);
                        $scope.orderList[i]["tradeStatusMsg"] = $scope.trustHtml;
                        $scope.orderList[i].operate = [
                            {
                                name: "Thông tin cụ thể về đơn hàng"
                            },
                            {
                                name: "Đánh giá",
                                type: "review"
                            }
                        ];
                        break;

                    case "30002":
                        $scope.myHtml = "<span>" + F._tradeStatus(tradeStatus) + "</span>";
                        $scope.trustHtml = $sce.trustAsHtml($scope.myHtml);
                        $scope.orderList[i]["tradeStatusMsg"] = $scope.trustHtml;
                        $scope.orderList[i].operate = [
                            {
                                name: "Thông tin cụ thể về đơn hàng"
                            }
                        ];
                        break;

                    case "40000":
                    case "40001":
                    case "40002":
                    case "40003":
                    case "40004":
                    case "40005":
                        $scope.myHtml = "<span>" + F._tradeStatus(tradeStatus) + "</span>";
                        $scope.trustHtml = $sce.trustAsHtml($scope.myHtml);
                        $scope.orderList[i]["tradeStatusMsg"] = $scope.trustHtml;
                        $scope.orderList[i].operate = [
                            {
                                name: "Thông tin cụ thể về đơn hàng"
                            }
                        ];
                        break;

                    default:
                        $scope.myHtml = "<span>" + F._tradeStatus(tradeStatus) + "</span>";
                        $scope.trustHtml = $sce.trustAsHtml($scope.myHtml);
                        $scope.orderList[i]["tradeStatusMsg"] = $scope.trustHtml;
                        break;
                }
            }

            var resCode = res.status;
            if (resCode == 200) {
                $scope.orderList = res.data.details;

                if ($scope.orderList.length == 0) {
                    $(".changePage").css("display", "none");
                    $(".no_list").css("display", "block");
                }

                $scope.count = res.data.count;

                $scope.totalPage = parseInt($scope.count / $scope.reqPara.rows);

                /*tcy -start-*/
                if ($scope.count % $scope.reqPara.rows !== 0) {
                    $scope.totalPage += 1;
                }
                /*tcy -end-*/

                if ($scope.orderList) {
                    // $scope.newOrderList = [];
                    for (var j = 0; j < $scope.orderList.length; j++) {
                        if (typeof $scope.orderList[j].goodsDetail != "undefined") {
                            var item = $scope.orderList[j];
                            item.orderOperate = orderOperate(item.tradeStatus);
                            // $scope.newOrderList.push(item);
                            // $scope.newOrderList[j] = $scope.orderList[j];
                            // var goodsDetailObj = $scope.orderList[j].goodsDetail; //数组对象goodsDetail的JSON解析成对象

                            // var price = goodsDetailObj.price;
                            // var creatData = goodsDetailObj.createTime;

                            // var imageUrl = goodsDetailObj.iconUrl;

                            // $scope.newOrderList[j]["imgUrl"] = imageUrl;
                            // $scope.newOrderList[j]["price"] = price;
                            // $scope.newOrderList[j]["creatData"] = creatData;
                        }
                    }

                    if (status == 0 || status == null || status == "99999") {
                        if ($scope.orderList.length == 0) {
                            $(".no_list").show();
                        } else {
                            $(".no_list").hide();
                            $(".changePage").show();
                            for (var i = 0; i < $scope.orderList.length; i++) {
                                $scope.orderStatus = [];
                                //$('.dpj').hide();

                                edit_for_status($scope, $scope.orderList[i].tradeStatus);
                            }
                        }
                    } else if (status == "10001") {
                        if ($scope.orderList.length == 0) {
                            $(".no_list").show();
                        } else {
                            $(".no_list").hide();
                            $(".changePage").show();
                            for (var i = 0; i < $scope.orderList.length; i++) {
                                $scope.orderStatus = [];

                                edit_for_status($scope, $scope.orderList[i].tradeStatus);
                            }
                        }
                    } else {
                        if ($scope.orderList.length == 0) {
                            $(".no_list").show();
                        } else {
                            $(".no_list").hide();
                            $(".changePage").show();
                            for (var i = 0; i < $scope.orderList.length; i++) {
                                $(".no_list").hide();
                                $scope.orderStatus = [];

                                edit_for_status($scope, $scope.orderList[i].tradeStatus);
                            }
                        }
                    }
                } else {
                    $scope.orderList = "No orders！";
                }
            } else {
                $(".changePage").css("display", "none");
            }
        };
        ajax.failureCallback = function(res) {
            $(".changePage").css("display", "none");
        };
        ajax.requestData();
    }

    $scope.getUserInfoDetails = function() {
        var url = F._userViewDetailInfo_uc;
        var ajax = new ajaxClass($http, url, "POST");

        var appId = localStorage.getItem("funId");
        var method = "fun.uc.userviewdetail";
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
        ajax.successCallback = function(res) {
            var resCode = res.data.code;

            if (resCode == 10000) {
                /*tcy -start-*/

                F.username = res.data.username;
                /*tcy -end-*/

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

    $scope.product = function(typeId, brandId) {
        gotoDetails(typeId, brandId);
    };

    function order_cancel(orderNo, tradeNo) {
        var loading = new F._loading();
        F._order_cancel(function(code) {
            if (!code) return false;

            loading.show();
            F._orderCancel(
                {
                    orderNo: orderNo,
                    tradeNo: tradeNo,
                    status: code
                },
                function(ret) {
                    loading.hide();
                    if (!ret) return false;
                    if (ret.code !== 10000) return false;

                    window.location.reload();
                }
            );
        });
    }

    $scope.order_func = function(type, orderNo, tradeNo, tradeStatus) {
        switch (type) {
            case "detail":
            case "pay":
                window.location.href = "./orderDetail.html?orderNo=" + orderNo + "&tradeNo=" + tradeNo;
                break;

            case "review":
                window.location.href = "./evaluate.html?orderNo=" + orderNo + "&tradeNo=" + tradeNo;
                break;

            case "cancel":
                order_cancel(orderNo, tradeNo);
                break;

            default:
                window.location.href = "./orderDetail.html?orderNo=" + orderNo + "&tradeNo=" + tradeNo;
                break;
        }
    };

    /* tcy 查看订单详情 -start- */
    $scope.openDetail = function(orderNo, tradeNo, typeId, brandId, tradeStatus, imgUrl, subject, key, type) {
        if (key > 0) {
            // 按钮
            switch (type) {
                case "cancel":
                    order_cancel(orderNo, tradeNo);
                    break;

                case "pay":
                    tradeStatus = tradeStatus + "";
                    if (tradeStatus === "6") {
                        // 评论
                        window.location.href = "./evaluate.html?orderNo=" + orderNo + "&tradeNo=" + tradeNo + "&typeId=" + typeId + "&brandId=" + brandId + "&imgUrl=" + imgUrl + "&subject=" + subject + "&username=" + F.username;
                        // window.open("./evaluate.html?orderNo=" + orderNo + "&tradeNo=" + tradeNo + "&typeId=" + typeId + "&brandId=" + brandId + "&imgUrl=" + imgUrl + "&subject=" + subject + "&username=" + F.username);
                    } else {
                        window.location.href = "./orderDetail.html?orderNo=" + orderNo + "&tradeNo=" + tradeNo + "&typeId=" + typeId + "&brandId=" + brandId;
                        // window.open("./orderDetail.html?orderNo=" + orderNo + "&tradeNo=" + tradeNo+ "&typeId=" + typeId+ "&brandId=" + brandId);
                    }
                    break;

                case "review":
                    window.location.href = "./evaluate.html?orderNo=" + orderNo + "&tradeNo=" + tradeNo + "&typeId=" + typeId + "&brandId=" + brandId + "&imgUrl=" + imgUrl + "&subject=" + subject + "&username=" + F.username;
                    break;

                default:
                    // TODO
                    break;
            }
        } else {
            // 详情
            tradeStatus = tradeStatus + "";
            if (tradeStatus === "6") {
                // 评论
                window.location.href = "./evaluate.html?orderNo=" + orderNo + "&tradeNo=" + tradeNo + "&typeId=" + typeId + "&brandId=" + brandId + "&imgUrl=" + imgUrl + "&subject=" + subject + "&username=" + F.username;
                // window.open("./evaluate.html?orderNo=" + orderNo + "&tradeNo=" + tradeNo + "&typeId=" + typeId + "&brandId=" + brandId + "&imgUrl=" + imgUrl + "&subject=" + subject + "&username=" + F.username);
            } else {
                window.location.href = "./orderDetail.html?orderNo=" + orderNo + "&tradeNo=" + tradeNo + "&typeId=" + typeId + "&brandId=" + brandId;
                // window.open("./orderDetail.html?orderNo=" + orderNo + "&tradeNo=" + tradeNo+ "&typeId=" + typeId+ "&brandId=" + brandId);
            }
        }
    };

    $scope.timeStrForm = F._timeStrForm;
    /* tcy 查看订单详情 -end- */

    //点击商品页面跳转详情
    function gotoDetails(typeId, brandId) {
        if (brandId != null && brandId != "" && typeId != null && typeId != "") {
            window.location.href = "./details.html?typeId=" + typeId + "&brandId=" + brandId;
            // window.open("./details.html?typeId=" + typeId + "&brandId=" + brandId)
        } else {
            window.location.href = "";
        }
    }
});
