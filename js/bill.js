var app = angular.module("billApp", []);
app.filter('priceFormat', function() { //可以注入依赖
    return F._priceFormat;
});

app.controller("billCtrl", function($scope, $http, $filter) {

    // tcy -start-
    $scope.openbillDetail = function(orderNo, tradeNo, status, periods) {
        // window.location.href = "../../tcy/html/billDetail.html";
        window.location.href = "billDetail.html?orderNo=" + orderNo + "&tradeNo=" + tradeNo + "&periods=" + periods + "&period=" + F.period;
        localStorage.setItem('billDetailStatus', status);
        localStorage.setItem('billDetailPeriods', periods);
    }
    $scope.period_json = {
        10001: 'Chưa thanh toán',
        10002: 'Đã thanh toán',
        10007: 'Chưa thanh toán',
    }

    // tcy -end-

    var msisdn = localStorage.getItem("msisdn");
    var funId = localStorage.getItem("funId");
    $scope.funId = funId;
    $scope.msisdn = msisdn;
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
    //	$scope.getBillInfo = function(){
    //		var url = F._queryBillList_td;
    //		var ajax = new ajaxClass($http, url, "POST");
    //		
    //		var appid = "201610214622513";
    //		var method = "fun.trade.queryList";
    //		var charset = 'utf-8';
    //		var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    //		var version = "1.0"
    //		var funid = sessionStorage.getItem("funId")
    //		var page = "1"
    //		var rows = "5"
    //		var period = "3";
    //		var Key = 'settleKey'
    //		
    //		var md5SigntypeStrig = "appid=" + appid + "&method=" + method + "&charset=" + charset + Key;

    //		var signtype = hex_md5(md5SigntypeStrig);
    //		var md5EncryptStrig = "funid=" + funId + "&page=" + page + "&rows=" + rows + "&period=" + period +Key;

    //		var encrypt = hex_md5(md5EncryptStrig);

    //		
    //		ajax.data = $.param({		
    //			 appid : "201610214622513",
    //			 method : "fun.trade.queryList",
    //			 charset : 'utf-8',
    //			 signtype : signtype,
    //			 encrypt : encrypt,
    //			 timestamp : "2017-9-21 09:51:41",
    //			 version : "1.0",
    //			 funid : funId,
    //			 page : page,
    //			 rows : rows,
    //			 period : period,
    //			 Key : Key	
    //		});
    //		ajax.headers = {
    //			'Content-Type': 'application/x-www-form-urlencoded'
    //		};
    //		ajax.successCallback = function(res) {


    //			var resCode = res.status;
    //			if(resCode == 200) {
    //				
    //				$scope.UserBasicInfo = res.data.details;




    ////				
    ////				if($scope.UserBasicInfo.payPassword==''){
    ////					$scope.pay.payPass = "";
    ////					$scope.pay.msg="未设置"
    ////				}else{
    ////					$scope.pay.payPass = $scope.UserBasicInfo.payPassword;
    ////					$scope.pay.msg="修改"
    ////				}
    //				
    //			} else {
    //
    //			}
    //		};
    //		ajax.failureCallback = function(res) {
    //
    //		};
    //		ajax.requestData();
    //	}
    //	$scope.getBillInfo();

    //	$scope.getUserInfoDetails=function(){
    //		var url = F._userViewDetailInfo_uc;
    ////		var url = F._queryOrderList_td;
    //		var ajax = new ajaxClass($http, url, "POST");
    //
    //		var appId = localStorage.getItem("funId");
    //		var method = 'fun.uc.userviewdetail';
    //		var charset = 'utf-8';
    //		var funid = sessionStorage.getItem('funId');
    ////		var msisdn = localStorage.getItem("msisdn");
    //		var msisdn = sessionStorage.getItem("msisdn");
    //		var Key = 'userKey';
    //
    //		var md5SigntypeStrig = "appId=" + appId + "&method=" + method + "&charset=" + charset + Key;
    //		var signType = hex_md5(md5SigntypeStrig);

    //
    //		var md5EncryptStrig = "funid=" + funid + "&msisdn=" + msisdn + Key;
    //		var encrypt = hex_md5(md5EncryptStrig);

    //

    //		ajax.data = $.param({
    //			appId: appId,
    //			method: method,
    //			charset: 'utf-8',
    //			signType: signType,
    //			encrypt: encrypt,
    //			timestamp: '2017-09-06 11:30:50',
    //			version: '1.0',
    //			funid: funid,
    //			msisdn: msisdn
    //		});

    //		ajax.headers = {
    //			'Content-Type': 'application/x-www-form-urlencoded'
    //		};
    //		//		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

    //		// 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    //		// get方式请求数据不需要设置表头header
    //		ajax.successCallback = function(res) {


    //			var resCode = res.data.code;
    //
    //			if(resCode == 10000) {
    //				$scope.centerUserInfo = res.data;


    //				$scope.headimage = res.data.headimage;
    //			} else {
    //
    //			}
    //		};
    //		ajax.failureCallback = function(res) {
    //
    //		};
    //		ajax.requestData();
    //}
    //	$scope.getUserInfoDetails();

    //			/*下一页*/
    //		$scope.nextPage = function() {
    //			//			currentPage++;

    //			//			$scope.nowPage = currentPage;
    //			//			reqAajx(currentPage);
    //			if($scope.nowPage <= $scope.totalPage - 4) {
    //				$scope.nowPage++;
    //			} else if($scope.nowPage == $scope.totalPage - 3) {
    //				$scope.nowPage++;
    //				$(".deleteli").addClass("delete")
    //			} else {
    //				$scope.nowPage;
    //			}
    //			reqAjax($scope.nowPage);
    //		}
    //		/*上一页*/
    //		$scope.lastPage = function() {
    //			$(".deleteli").removeClass("delete");
    //			if($scope.nowPage > 1) {
    //				$scope.nowPage--;
    //			} else {
    //				$scope.nowPage;
    //			}
    //			reqAjax($scope.nowPage);
    //		}
    //		//跳转当前页
    //		$scope.gotoPage = function(num) {

    //			currentPage = num;
    //			reqAjax(currentPage);
    //		}



    var query = F._hrefUtils.parse().query || {};

    //初始化账单请求数据
    $scope.reqPara = {
        period: query.status || '1',
        page: query.page || '1',
        rows: '5'
    }

    var status_json = {
        1: 0,
        2: 1,
        3: 2,
        4: 3,
        5: 4,
    };


    $('.nav-item').removeClass('act');
    $('.nav-item').eq(status_json[$scope.reqPara.period]).addClass('act');


    //切换账单类型    period参数
    $scope.reqType = function(type) {
        $scope.reqPara = {
            period: type,
            page: '1',
            rows: '5'
        }
        F._setUrl('page', '1');

        $('#gotoPage').val("1");
    }

    //上一页
    $scope.lastPage = function() {
        if ($scope.reqPara.page > 1) {
            $scope.reqPara.page--;
            $('#nextPagebtn').css({
                'background': '#0075F6'
            }).attr('disabled', false)
            F._setUrl('page', $scope.reqPara.page);
        }
    }

    //下一页
    $scope.nextPage = function() {
        if ($scope.reqPara.page < $scope.totalPage) {
            $scope.reqPara.page++;
            $('#lastPagebtn').css({
                'background': '#0075F6'
            }).attr('disabled', false)
            F._setUrl('page', $scope.reqPara.page);
        }
    }
    $scope.confirm = function() {
        var page = $("#gotoPage").val();
        $scope.reqPara.page = page;
    }
    //		$scope.$watch('reqPara',function(n,o){
    //		if(n.page>0){
    //			if(n.page<=$scope.totalPage&&n.rows<=$scope.count){

    //			}else{
    //				$scope.reqPara.page=o.page;
    //				$scope.reqPara.rows=o.rows;
    //			}
    //		}else{
    //			$scope.reqPara.page=1;
    //		}
    //		reqBill(n.status,n.page,n.rows);
    //	},true);
    $scope.$watch('iptpage', function(n, o) {
        if (n < 1) {
            $scope.iptpage = 1;
        } else if (n > $scope.totalPage) {
            $scope.iptpage = $scope.totalPage;
        }

    })
    //监听reqPara账单属性  发生改变请求Ajax
    $scope.$watch('reqPara', function(n, o) {
        if (n.page > 0) {
            if (n.page <= $scope.totalPage && n.rows <= $scope.rows) {

            } else {
                $scope.reqPara.page = o.page;
                $scope.reqPara.rows = o.rows;
            }
        } else {
            $scope.reqPara.page = 1;
        }
        reqBill(n.period, n.page, n.rows);
    }, true)


    /*请求账单*/
    function reqBill(period, page, rows) {
        /*tcy -start-*/
        F.period = period;
        /*tcy -end-*/

        var url = F._queryBillList_td;
        var ajax = new ajaxClass($http, url, "POST");

        var appid = "201610214622513";
        var method = "fun.trade.queryList";
        var charset = 'utf-8';
        var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
        var version = "1.0"
        var funid = localStorage.getItem("funId")
        var page = page;
        var rows = rows;
        var period = period;
        var Key = 'settleKey'

        var md5SigntypeStrig = "appid=" + appid + "&method=" + method + "&charset=" + charset + Key;

        var signtype = hex_md5(md5SigntypeStrig);
        var md5EncryptStrig = "funid=" + funId + "&page=" + page + "&rows=" + rows + "&period=" + period + Key;

        var encrypt = hex_md5(md5EncryptStrig);


        ajax.data = $.param({
            appid: "201610214622513",
            method: "fun.trade.queryList",
            charset: 'utf-8',
            signtype: signtype,
            encrypt: encrypt,
            timestamp: "2017-9-21 09:51:41",
            version: "1.0",
            funid: funId,
            page: page,
            rows: rows,
            period: period,
            Key: Key
        });
        ajax.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        ajax.successCallback = function(res) {



            $('.repay').css("display", 'none');
            var resCode = res.data.code;
            if (resCode == 10000 || resCode == 10005) {
                if (period == 2) {
                    $scope.tdname = "ppop"
                } else if (period == 3) {
                    $scope.tdname = "ppop"
                } else if (period == 4) {
                    $scope.tdname = ""
                } else if (period == 1) {
                    $scope.tdname = ""
                }

                $scope.billList = res.data.details;


                if ($scope.billList.length == 0) {
                    $("table").css("display", 'none');
                    $(".changePage").css("display", 'none');
                    $(".no_list").css("display", "block")

                } else {
                    $("table").css("display", 'block');
                    $(".changePage").css("display", 'block');
                    $(".no_list").css("display", "none")
                }

                //					$scope.huankuan=function($id,$periods,$interest,$principal){
                //						alert($id+"+"+$periods+"+"+$interest+"+"+$principal);
                //					}

                $scope.rows = res.data.rows;

                $scope.totalPage = parseInt($scope.rows / $scope.reqPara.rows);

                /*tcy -start-*/
                if ($scope.rows % $scope.reqPara.rows !== 0) {
                    $scope.totalPage += 1;
                }
                /*tcy -end-*/

                if ($scope.totalPage == 0) {
                    $scope.totalPage = 1;
                    $("#nextPagebtn").attr("disabled", true);
                    $("#nextPagebtn").css("background", "#d7d7d7");
                    $("#lastPagebtn").attr("disabled", true);
                    $("#lastPagebtn").css("background", "#d7d7d7");
                } else if ($scope.totalPage == 1) {
                    $("#nextPagebtn").attr("disabled", true);
                    $("#nextPagebtn").css("background", "#d7d7d7");
                    $("#lastPagebtn").attr("disabled", true);
                    $("#lastPagebtn").css("background", "#d7d7d7");
                } else {
                    if (page <= 1) {
                        $("#lastPagebtn").attr("disabled", true);
                        $("#lastPagebtn").css("background", "#d7d7d7");
                        $("#nextPagebtn").attr("disabled", false);
                        $("#nextPagebtn").css("background", "#0075F6");
                    } else if (page >= $scope.totalPage) {
                        $("#nextPagebtn").attr("disabled", true);
                        $("#nextPagebtn").css("background", "#d7d7d7");
                        $("#lastPagebtn").attr("disabled", false);
                        $("#lastPagebtn").css("background", "#0075F6");
                    }
                }

            } else if (resCode == 10002 || resCode == 10003 || resCode == 10004 || resCode == 10007) {
                if (period == 2) {
                    $scope.tdname = "ppop"
                } else if (period == 3) {
                    $scope.tdname = "ppop"
                } else if (period == 4) {
                    $scope.tdname = ""
                } else if (period == 1) {
                    $scope.tdname = ""
                }

                $scope.billLists = res.data.details;


                if ($scope.billLists.length == 0) {
                    $("table").css("display", 'none');
                    $(".changePage").css("display", 'none');
                    $(".no_list").css("display", "block")

                } else {
                    $("table").css("display", 'block');
                    $(".changePage").css("display", 'block');
                    $(".no_list").css("display", "none")
                }

                $scope.rows = res.data.rows;


                $scope.totalPage = parseInt($scope.rows / $scope.reqPara.rows);

                /*tcy -start-*/
                if ($scope.rows % $scope.reqPara.rows !== 0) {
                    $scope.totalPage += 1;
                }
                /*tcy -end-*/

                if ($scope.totalPage == 1) {
                    $("#nextPagebtn").attr("disabled", true);
                    $("#nextPagebtn").css("background", "#d7d7d7");
                    $("#lastPagebtn").attr("disabled", true);
                    $("#lastPagebtn").css("background", "#d7d7d7");
                } else {
                    if (page <= 1) {
                        $("#lastPagebtn").attr("disabled", true);
                        $("#lastPagebtn").css("background", "#d7d7d7");
                        $("#nextPagebtn").attr("disabled", false);
                        $("#nextPagebtn").css("background", "#0075F6");
                    } else if (page >= $scope.totalPage) {
                        $("#nextPagebtn").attr("disabled", true);
                        $("#nextPagebtn").css("background", "#d7d7d7");
                        $("#lastPagebtn").attr("disabled", false);
                        $("#lastPagebtn").css("background", "#0075F6");
                    }
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
})