////截取Url里面的参数   
//function GetRequest() {
//	var url = location.search; //获取url中"?"符后的字串  
//	var theRequest = new Object();
//	if(url.indexOf("?") != -1) {
//		var str = url.substr(1);
//		//alert(str);  
//		strs = str.split("&");
//		for(var i = 0; i < strs.length; i++) {
//			theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]); //获取中文参数转码<span style="font-family: Arial, Helvetica, sans-serif;">decodeURI</span>, （unescape只针对数字, 中文乱码)  
//		}
//	}
//	return theRequest;
//}
//$(function() {
//	//通过url取数  
//	var request = new Object();
//	request = GetRequest();
//	var price = request['price'];
//	var buyNum = request['buyNum'];
//	var fenqiNum = request['fenqiNum'];
//	var total = parseFloat(price) * parseInt(buyNum);
//
//});

var app = angular.module("payApp", []);
app.filter('priceFormat', function() { //可以注入依赖
    return F._priceFormat;
});

app.controller("payCtrl", function($scope, $http, $filter) {
    $scope.price = sessionStorage.getItem('price');
    $scope.num = sessionStorage.getItem('buyNum');
    $scope.info = sessionStorage.getItem('productInfo');
    $scope.imgUrl = sessionStorage.getItem('imgUrl');
    $scope.fenqiNum = sessionStorage.getItem('fenqiNum');
    $("#fenqiNum" + $scope.fenqiNum).addClass("b_active");
    $scope.paymentNum = sessionStorage.getItem('paymentNum');
    $scope.goodsDetail = sessionStorage.getItem('goodsDetail');

    F.price = $scope.price;
    F.num = $scope.num;
    F.info = $scope.info;
    F.imgUrl = $scope.imgUrl;
    F.fenqiNum = $scope.fenqiNum;
    F.paymentNum = $scope.paymentNum;
    F.goodsDetail = $scope.goodsDetail;

    $scope.$watch('paymentNum', function(newValue, oldValue) {

        F.paymentNum = newValue;
        if (newValue == '1.0') {
            $(".fenqiNumBtn button").attr("disabled", true).addClass('actives')
        } else {
            if ($(".fenqiNumBtn button:last-child").is('.b_active') == false) {
                $(".fenqiNumBtn button:last-child").removeClass('b_active');

            } else {
                $(".fenqiNumBtn button:last-child").addClass('b_active');

            }
            $(".fenqiNumBtn button").attr("disabled", false).removeClass('actives')
            fenqiAjax($scope.price, newValue, $scope.fenqiNum);
        }
    });
    $scope.paymentNumChange = function(num) {
        if (num == 1.0) {
            $('.moneryIcon,.installment').hide();

            $(".fenqiNumBtn button").attr("disabled", true).addClass('actives')
            $scope.resPrice = $scope.price;
            $scope.paymentNum = num;
            F.paymentNum = num;
        } else {
            $('.moneryIcon,.installment').show();

            $(".fenqiNumBtn button").attr("disabled", false).removeClass('actives')
            $scope.paymentNum = num;
            F.paymentNum = num;
            fenqiAjax($scope.price, num, $scope.fenqiNum);
        }
    }

    $scope.fenqi = function(num) {
        $scope.fenqiNum = num;
        F.fenqiNum = num;
    }

    $scope.$watch('fenqiNum', function(newValue, oldValue) {
        fenqiAjax($scope.price, $scope.paymentNum, newValue);
    }, true);

    //	获取分期金额信息接口
    function fenqiAjax(totalamounts, payrate, repaymentmonths) {
        var url = F._returnMoney_im;
        var ajax = new ajaxClass($http, url, "POST");

        var appid = localStorage.getItem("funId") || '';
        var method = 'fun.trade.returnMoney';
        var charset = 'utf-8';
        var totalamounts = totalamounts;
        var repaymentmonths = repaymentmonths;
        var payrate = payrate;
        var Key = 'settleKey';

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
            timestamp: '2016-09-21 03:07:50',
            version: '1.0',
            totalamounts: totalamounts,
            repaymentmonths: repaymentmonths,
            payrate: payrate
        });
        ajax.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        ajax.successCallback = function(res) {

            if (res.data.code == 10000) {
                if (payrate == '1.0') {
                    $scope.resPrice = $scope.price;
                } else {
                    $scope.resPrice = res.data.details[detailsArrayString][0].interest + res.data.details[detailsArrayString][0].principal;
                }


                //	分期金额
                $('.tables tbody').html('');
                $scope.information = function() {
                    $('.tables tbody').html('');
                    var fenqi = JSON.stringify(res.data.details);
                    for (i = 1; i < res.data.details[detailsArrayString].length + 1; i++) {
                        $('.tables tbody').append("<tr><td>" + i + " Số kỳ</td><td>" + F._priceFormat(res.data.details[detailsArrayString][i - 1].principal) + " VND</td><td>" + F._priceFormat(res.data.details[detailsArrayString][i - 1].interest) + " VND</td></tr>");
                    }
                }
            }

        };
        ajax.failureCallback = function(res) {

        };
        ajax.requestData();
    }
})




//地址address请求
app.controller('addCtrl', function($scope, $http, $filter) {
    var loading = new F._loading();
    loading.show();
    F._userAction_userViewAddr({}, function(ret) {
        loading.hide();
        if (!ret) return false;
        if (ret.code !== 10000) return false;

        $scope.addrlistData = [];
        $scope.addrlistData = ret.details;
        $scope.addrlistLength = ret.details.length;

        $scope.$watch("addrlistLength", function(n) {
            if (n > 4) {
                $(".addAddrli").css('display', 'none');
            }
        })

    });


    var url = F._userAction_userViewAddr_uc;
    var ajax = new ajaxClass($http, url, "POST");
    var appId = localStorage.getItem("funId");
    var method = 'fun.uc.userviewaddr';
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
        charset: charset,
        signType: signType,
        encrypt: encrypt,
        timestamp: '2016-09-21 03:07:50',
        version: '1.0',
        funid: funid,
        msisdn: msisdn
    });
    ajax.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    ajax.successCallback = function(res) {
        loading.hide();

        var status = res.status;

        if (res.data.code == 10000) {

            $scope.addrlistData = [];

            for (var i = 0; i < res.data.details.length; i++) {
                if (res.data.details[i].isdefault === 'Y') {
                    F.address = res.data.details[i].address;
                    F.msisdn = res.data.details[i].msisdn;
                    F.username = res.data.details[i].username;
                    $scope.addrlistData_index = i;
                }
            }

            $scope.addrlistData = res.data.details;
            $scope.addrlistLength = res.data.details.length;

            $scope.$watch("addrlistLength", function(n) {

                if (n > 4) {
                    $(".addAddrli").css('display', 'none');
                }
            })
            $scope.name = function() {
                event.stopPropagation();
            }
            $scope.msisdn = function() {
                event.stopPropagation();
            }
            $scope.address = function() {
                event.stopPropagation();
            }
            $scope.mm = function($event) {
                $event.stopPropagation();
                if ($($event.target).parent().is('.act') == true) {
                    $('.address li.act').removeClass('acf');
                    $($event.target).parent().removeClass('actt');
                    $('.address .li').removeClass('actt');
                } else {
                    $('.address li.act').addClass('acf');
                    $('.address .li').removeClass('actt');
                    $($event.target).parent().addClass('actt');
                    $('.address .li').find('.default').html('Địa chỉ mặc định');
                    $($event.target).parent().find('.default').html('√');
                }

            }
        }
    };
    ajax.failureCallback = function(res) {
        loading.hide();
    };
    var loading = new F._loading();
    loading.show();
    ajax.requestData();
})
//	新增地址接口
app.controller('addressCtrl', function($scope, $http, $filter) {
    $scope.addppp = function() {
        $('#names').val('');
        $('#phone').val('');
        $('#textarea').val('');
        $('.rcone').hide();
        $('.rctwo').show();
        $scope.submits = function() {
            event.stopPropagation();
            var na = $('#names').val();
            var ph = $('#phone').val();
            var ta = $('#textarea').val();

            if (ta.length == 0 || na.length == 0 || ph.length == 0) {
                $('#errormsg').show();
                $('#errormsg').html('Tên và số điện thoại không được để trống');
            } else {
                if (F._submits_ing) return false;
                F._submits_ing = true;

                $('#errormsg').hide();
                $('#errormsg').html('');

                var loading = new F._loading();
                loading.show();
                F._userAction_userAddAddr({
                    msisdn: $('#phone').val(),
                    address: $('#textarea').val(),
                    isdefault: 'Y',
                    username: $('#names').val(),
                }, function(ret) {
                    loading.hide();
                    F._submits_ing = false;
                    if (!ret) return false;

                    if (ret.code === 10000) history.go(0);
                });
            }
        }
    }

    //	默认地址
    $scope.moren = function($id, $isdefault, $msisdn, $address, $username) {
        event.stopPropagation();
        if (confirm("Xác nhận cài đặt địa chỉ nhận hàng mặc định？")) {

            var loading = new F._loading();
            loading.show();
            F._userAction_userModifyAddr({
                addrid: $id,
                msisdn: $msisdn,
                address: $address,
                isdefault: 'Y',
                username: $username,
            }, function(ret) {
                loading.hide();
                if (!ret) return false;
                if (ret.code !== 10000) return false;

                window.location.reload();
            });
        }
    }

    $scope.set_active = function(index, msisdn, address, username) {
        F.address = address;
        F.msisdn = msisdn;
        F.username = username;

        $('.site__main-item').removeClass('site__main-item_active');
        $('.site__main-item').eq(index).addClass('site__main-item_active');
    }

    //	修改地址
    $scope.xiugai = function($id, $isdefault, $msisdn, $address, $username) {
        $('#errormsg').hide();
        $('#errormsg').html('');
        $('#names').val($username);
        $('#phone').val($msisdn);
        $('#textarea').val($address);

        $('.rcone').show();
        $('.rctwo').hide();
        $scope.submit = function() {
            if ($("#errormsg").is(":hidden")) {

                var loading = new F._loading();
                loading.show();
                F._userAction_userModifyAddr({
                    addrid: $id,
                    msisdn: $('#phone').val(),
                    address: $('#textarea').val(),
                    isdefault: $isdefault,
                    username: $('#names').val(),
                }, function(ret) {
                    loading.hide();
                    if (!ret) return false;
                    if (ret.code !== 10000) return false;

                    window.location.reload();
                });
            }
        }
    }
    //  删除地址
    $scope.remove = function($id) {
        event.stopPropagation();
        if (confirm("Xác nhận xóa địa chỉ?")) {

            var loading = new F._loading();
            loading.show();
            F._userAction_userDelAddrs({
                adds: $id,
            }, function(ret) {
                loading.hide();
                if (!ret) return false;
                if (ret.code !== 10000) return false;
                window.location.reload();
            });
        }
    }


    $scope.phoneNum = "";
    $scope.$watch('phoneNum', function(newValue, oldValue) {
        if (!isNaN(newValue)) {
            if (newValue.toString().length < 20) {
                $scope.phoneNum = newValue;
            } else {
                $scope.phoneNum = oldValue
            }
        } else {
            $scope.phoneNum = "";
        }
    })

})