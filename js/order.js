/* tcy -start-*/
if (!window.F) window.F = {};
/* tcy -end-*/

var app = angular.module('orderApp', []);
app.filter('priceFormat', function() { //可以注入依赖
    return F._priceFormat;
});

app.controller('orderCtrl', function($scope, $http, $filter, $sce) {

    $scope.msisdn = localStorage.getItem("msisdnFormat");

    $scope.cancelStatus = '1';
    $scope.payStatus = '1';
    $scope.orderStatus = '1';

    /*请求账单数据*/

    //初始化账单请求参数
    $scope.reqPara = {
        status: '',
        page: '1',
        rows: '5'
    }

    //上一页
    $scope.lastPage = function() {
        if ($scope.reqPara.page > 1) {
            $scope.reqPara.page--;
        }
    }

    //下一页
    $scope.nextPage = function() {
        if ($scope.reqPara.page < $scope.totalPage) {
            $scope.reqPara.page++;
        }
    }

    $scope.confirm = function() {
        var page = $("#gotoPage").val();
        $scope.reqPara.page = page;
    }

    //切换订单类型
    $scope.reqType = function(type) {
        if (type != null) {
            $scope.reqPara = {
                status: type,
                page: '1',
                rows: '5'
            }
        } else {
            $scope.reqPara = {
                status: "",
                page: '1',
                rows: '5'
            }
        }

        $('#gotoPage').val("1");
    }
    $scope.$watch('iptpage', function(n, o) {
        if (n < 1) {
            $scope.iptpage = 1;
        } else if (n > $scope.totalPage) {
            $scope.iptpage = $scope.totalPage;
        }

    })
    $scope.$watch('reqPara', function(n, o) {
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
    }, true);

    function orderDetailsAjax(status, page, rows) {
    	if (!F._isLogin()) return false;

        var url = F._queryOrderList_td;
        var ajax = new ajaxClass($http, url, "POST");

        var appid = localStorage.getItem("funId");
        var method = 'fun.trade.queryList';
        var charset = 'utf-8';
        var msisdn = localStorage.getItem("msisdn");
        var funId = localStorage.getItem("funId");
        $scope.funId = funId;
        $scope.msisdn = msisdn;
        var page = page;
        var rows = rows;
        var status = status;
        var Key = 'tradeKey';

        var md5SigntypeStrig = "appid=" + appid + "&method=" + method + "&charset=" + charset + Key;
        var signtype = hex_md5(md5SigntypeStrig);


        var md5EncryptStrig = "funid=" + funId + "&page=" + page + "&rows=" + rows + "&status=" + status + Key;
        var encrypt = hex_md5(md5EncryptStrig);



        ajax.data = $.param({
            appid: appid,
            method: method,
            charset: 'utf-8',
            signtype: signtype,
            encrypt: encrypt,
            timestamp: '2017-9-21 09:51:41',
            version: '1.0',
            funid: funId,
            page: page,
            rows: rows,
            status: status
        });

        ajax.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        ajax.successCallback = function(res) {



            var resCode = res.status;
            if (resCode == 200) {

                $scope.orderList = res.data.details;

                if ($scope.orderList.length == 0) {
                    $(".changePage").css("display", 'none');
                    $(".no_list").css("display", "block")
                }

                $scope.count = res.data.count;


                $scope.totalPage = parseInt($scope.count / $scope.reqPara.rows);

                /*tcy -start-*/
                if ($scope.count % $scope.reqPara.rows !== 0) {
                    $scope.totalPage += 1;
                }
                /*tcy -end-*/


                if ($scope.orderList) {
                    $scope.newOrderList = [];
                    for (var j = 0; j < $scope.orderList.length; j++) {
                        if (typeof($scope.orderList[j].goodsDetail) != 'undefined') {

                            $scope.newOrderList[j] = $scope.orderList[j];
                            var goodsDetailObj = $scope.orderList[j].goodsDetail; //数组对象goodsDetail的JSON解析成对象



                            var price = goodsDetailObj.price;
                            var creatData = goodsDetailObj.createTime;
                            var imageUrls = goodsDetailObj.imageUrls; //得到imageUrls
                            var imageUrlArray = imageUrls.split("|"); //截取imageUrls
                            var imageUrl = imageUrlArray[0];



                            $scope.newOrderList[j]['imgUrl'] = imageUrl;
                            $scope.newOrderList[j]['price'] = price;
                            $scope.newOrderList[j]['creatData'] = creatData;
                        } else {

                        }
                    }



                    if (status == 0 || status == null || status == '') {
                        if ($scope.orderList.length == 0) {
                            $('.no_list').show();
                        } else {
                            $('.no_list').hide();
                            $('.changePage').show();
                            for (var i = 0; i < $scope.orderList.length; i++) {
                                $scope.orderStatus = [];
                                //$('.dpj').hide();
                                if ($scope.orderList[i].tradeStatus == 0) {
                                    //$scope.orderList[i]['tradeStatusMsg']='Đang chờ thanh toán';
                                    $scope.myHtml = "<span>Đang chờ thanh toán</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;


                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 1) {
                                    //$scope.orderList[i]['tradeStatusMsg']='Đóng';
                                    $scope.myHtml = "<span>Đóng</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 2) {
                                    $scope.myHtml = "<span>Đang xử lí</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    //	$scope.orderList[i]['tradeStatusMsg']='Đang xử lí';
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 3) {
                                    //$scope.orderList[i]['tradeStatusMsg']='Hoàn thành';
                                    $scope.myHtml = "<span>Hoàn thành</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 6) {
                                    $scope.myHtml = "<span>Đang chờ đánh giá</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }, {
                                        "name": "Đánh giá"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 7) {
                                    //$scope.orderList[i]['tradeStatusMsg']='Giao dịch hoàn thành';
                                    $scope.myHtml = "<span>Giao dịch hoàn thành</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 4) {
                                    //$scope.orderList[i]['tradeStatusMsg']='Từ chối giao dịch';
                                    $scope.myHtml = "<span>Từ chối giao dịch</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 5) {
                                    $scope.myHtml = "<span>Chờ giao hàng</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    //$scope.orderList[i]['tradeStatusMsg']='Chờ giao hàng';
                                    $scope.waitList = [];
                                    $scope.waitList.push($scope.orderList[i]);
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin sản phẩm"
                                    }];
                                    $('#shouhuoTip').css("display", 'none');
                                    $('#shouhuoTbody').css("display", 'block');
                                } else {
                                    $scope.myHtml = "<span>Lỗi chưa xác định</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    //$scope.orderList[i]['tradeStatusMsg']='Lỗi chưa xác định';
                                }
                            }
                        }
                    } else if (status == 2) {
                        if ($scope.orderList.length == 0) {
                            $('.no_list').show();

                        } else {
                            $('.no_list').hide();
                            $('.changePage').show();
                            for (var i = 0; i < $scope.orderList.length; i++) {
                                $scope.orderStatus = [];
                                if ($scope.orderList[i].tradeStatus == 0) {
                                    //$scope.orderList[i]['tradeStatusMsg']='Đang chờ thanh toán';
                                    $scope.myHtml = "<span>Đang chờ thanh toán</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;


                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 1) {
                                    //$scope.orderList[i]['tradeStatusMsg']='Đóng';
                                    $scope.myHtml = "<span>Đóng</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 2) {
                                    //$scope.orderList[i]['tradeStatusMsg']='Đang xử lí';
                                    $scope.myHtml = "<span>Đang xử lí</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 3) {
                                    //$scope.orderList[i]['tradeStatusMsg']='Hoàn thành';
                                    $scope.myHtml = "<span>Hoàn thành</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 7) {
                                    $scope.myHtml = "<span>Giao dịch hoàn thành</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    //$scope.orderList[i]['tradeStatusMsg']='Giao dịch hoàn thành';
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }, {
                                        "name": "Dịch vụ sau khi mua"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 6) {
                                    //$scope.orderList[i]['tradeStatusMsg']="Đang chờ đánh giá";
                                    $scope.myHtml = "<span>Đang chờ đánh giá</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }, {
                                        "name": "Đánh giá"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 4) {
                                    //$scope.orderList[i]['tradeStatusMsg']='Từ chối giao dịch';
                                    $scope.myHtml = "<span>Từ chối giao dịch</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 5) {
                                    //	$scope.orderList[i]['tradeStatusMsg']='Chờ giao hàng';
                                    $scope.myHtml = "<span>Chờ giao hàng</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.waitList = [];
                                    $scope.waitList.push($scope.orderList[i]);
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                    $('#shouhuoTip').css("display", 'none');
                                    $('#shouhuoTbody').css("display", 'block');
                                } else {
                                    $scope.myHtml = "<span>Lỗi chưa xác định</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    //$scope.orderList[i]['tradeStatusMsg']='Lỗi chưa xác định';
                                }
                            }
                        }
                    } else {
                        if ($scope.orderList.length == 0) {
                            $('.no_list').show();
                        } else {
                            $('.no_list').hide();
                            $('.changePage').show();
                            for (var i = 0; i < $scope.orderList.length; i++) {
                                $('.no_list').hide();
                                $scope.orderStatus = [];
                                if ($scope.orderList[i].tradeStatus == 0) {
                                    //$scope.orderList[i]['tradeStatusMsg']='Đang chờ thanh toán';
                                    $scope.myHtml = "<span>Đang chờ thanh toán</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;


                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin sản phẩm"
                                    }, {
                                        "name": "Thanh toán"
                                    }, {
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 1) {
                                    //$scope.orderList[i]['tradeStatusMsg']='Đóng';
                                    $scope.myHtml = "<span>Đóng</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 2) {
                                    //$scope.orderList[i]['tradeStatusMsg']='Đang xử lí';
                                    $scope.myHtml = "<span>Đang xử lí</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin sản phẩm"
                                    }, {
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 3) {
                                    //$scope.orderList[i]['tradeStatusMsg']='Hoàn thành';
                                    $scope.myHtml = "<span>Hoàn thành</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 7) {
                                    //$scope.orderList[i]['tradeStatusMsg']='Giao dịch hoàn thành';
                                    $scope.myHtml = "<span>Giao dịch hoàn thành</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }, {
                                        "name": "Dịch vụ sau khi mua"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 6) {
                                    //$scope.orderList[i]['tradeStatusMsg']="Đang chờ đánh giá";
                                    $scope.myHtml = "<span>Đang chờ đánh giá</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }, {
                                        "name": "Đánh giá"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 4) {
                                    //$scope.orderList[i]['tradeStatusMsg']='Từ chối giao dịch';
                                    $scope.myHtml = "<span>Từ chối giao dịch</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                } else if ($scope.orderList[i].tradeStatus == 5) {
                                    //$scope.orderList[i]['tradeStatusMsg']='Chờ giao hàng';
                                    $scope.myHtml = "<span>Chờ giao hàng</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                    $scope.waitList = [];
                                    $scope.waitList.push($scope.orderList[i]);
                                    $scope.orderList[i].operate = [{
                                        "name": "Thông tin cụ thể về đơn hàng"
                                    }];
                                    $('#shouhuoTip').css("display", 'none');
                                    $('#shouhuoTbody').css("display", 'block');
                                } else {
                                    //$scope.orderList[i]['tradeStatusMsg']='Lỗi chưa xác định';
                                    $scope.myHtml = "<span>Lỗi chưa xác định</span>";
                                    $scope.trustHtml = $sce.trustAsHtml($scope.myHtml)
                                    $scope.orderList[i]['tradeStatusMsg'] = $scope.trustHtml;
                                }
                            }
                        }
                    }


                } else {
                    $scope.orderList = "没有订单！";
                }



            } else {
                $(".changePage").css("display", 'none');
            }
        };
        ajax.failureCallback = function(res) {
            $(".changePage").css("display", 'none');
        };
        ajax.requestData();
    }
    $scope.getUserInfoDetails = function() {
        var url = F._userViewDetailInfo_uc;
        var ajax = new ajaxClass($http, url, "POST");

        var appId = localStorage.getItem("funId");
        var method = 'fun.uc.userviewdetail';
        var charset = 'utf-8';
        var funid = localStorage.getItem("funId");
        var msisdn = localStorage.getItem("msisdn");
        var Key = 'userKey';

        var md5SigntypeStrig = "appId=" + appId + "&method=" + method + "&charset=" + charset + Key;
        var signType = hex_md5(md5SigntypeStrig);


        var md5EncryptStrig = "funid=" + funid + "&msisdn=" + msisdn + Key;
        var encrypt = hex_md5(md5EncryptStrig);



        ajax.data = $.param({
            appId: appId,
            method: method,
            charset: 'utf-8',
            signType: signType,
            encrypt: encrypt,
            timestamp: '2017-09-06 11:30:50',
            version: '1.0',
            funid: funid,
            msisdn: msisdn
        });

        ajax.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        ajax.successCallback = function(res) {


            var resCode = res.data.code;

            if (resCode == 10000) {

                /*tcy -start-*/

                F.username = res.data.username;
                /*tcy -end-*/

                $scope.centerUserInfo = res.data;


                $scope.headimage = res.data.headimage;
                $('.img-phone').attr('src', $scope.headimage);
            } else {

            }
        };
        ajax.failureCallback = function(res) {

        };
        ajax.requestData();
    }
    $scope.getUserInfoDetails();


    $scope.product = function(typeId, brandId) {
        gotoDetails(typeId, brandId);
    }

    /* tcy 查看订单详情 -start- */
    $scope.openDetail = function(orderNo, tradeNo, typeId, brandId, tradeStatus, imgUrl, subject) {
        tradeStatus = tradeStatus + '';
        if (tradeStatus === '6') { // 评论
            window.location.href = "./evaluate.html?orderNo=" + orderNo + "&tradeNo=" + tradeNo + "&typeId=" + typeId + "&brandId=" + brandId + "&imgUrl=" + imgUrl + "&subject=" + subject + "&username=" + F.username;
            // window.open("./evaluate.html?orderNo=" + orderNo + "&tradeNo=" + tradeNo + "&typeId=" + typeId + "&brandId=" + brandId + "&imgUrl=" + imgUrl + "&subject=" + subject + "&username=" + F.username);
        } else {
            window.location.href = "./orderDetail.html?orderNo=" + orderNo + "&tradeNo=" + tradeNo + "&typeId=" + typeId + "&brandId=" + brandId;
            // window.open("./orderDetail.html?orderNo=" + orderNo + "&tradeNo=" + tradeNo+ "&typeId=" + typeId+ "&brandId=" + brandId);
        }
    }

    $scope.timeStrForm = F._timeStrForm;
    /* tcy 查看订单详情 -end- */

    //点击商品页面跳转详情
    function gotoDetails(typeId, brandId) {
        if (brandId != null && brandId != "" && typeId != null && typeId != "") {
            window.location.href = "./details_iphone.html?typeId=" + typeId + "&brandId=" + brandId;
            // window.open("./details_iphone.html?typeId=" + typeId + "&brandId=" + brandId)
        } else {
            window.location.href = "";
        }
    }

})