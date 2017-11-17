var app = angular.module('selfApp', []);
app.controller('selfCtrl', function($scope, $http, $filter) {

	var msisdn = localStorage.getItem("msisdn");
	$scope.phoneNum = localStorage.getItem("msisdn");
	var telVal = localStorage.getItem("msisdn");
	var funId = localStorage.getItem("funId");
	var newTelVal = '';
    if(telVal.length > 0){
        for(var i = 0; i < telVal.length; i++){
            if(i < 3 || i >= telVal.length-3){
                newTelVal += telVal[i];
            }else{
                newTelVal += '*';
            }
        }
    }
	$scope.funId = funId;
	$scope.msisdn = newTelVal;

//	//手机输出格式监听
//	$scope.msisdnFormat=function(){
//		var nowMsidn = "";
//		for(var i=0;i<msisdn.length;i++){
//			if(i<3 || i>8){
//				nowMsidn += msisdn[i];
//			}else{
//				nowMsidn += "*";
//			}
//		}

//		$scope.msisdn=nowMsidn; 
//	}
//	$scope.msisdnFormat();
	
	$scope.getUserBasicInfo = function(){

		var url = "http://47.52.21.255:8180/fun/userCenter/userAction/getUserInfoById";
		var ajax = new ajaxClass($http, url, "POST");
		
		var provider = "0";
//		var funid = 'VNQO1RVA7QUM';
		var Key = "userKey"
		
		var md5EncryptStrig = "provider=" + provider + "&id=" + funId + Key;
		var encryption = hex_md5(md5EncryptStrig);


		
		ajax.data = $.param({
			provider:provider,
			id:funId,
			encryption:encryption
		});
		ajax.headers = {
			'Content-Type': 'application/x-www-form-urlencoded'
		};
		ajax.successCallback = function(res) {


			var resCode = res.data.status;
			$scope.pay ={
					payPass:'',
					msg:''
			};
			if(resCode == 10000) {
				$scope.UserBasicInfo = res.data;


//				
//				if($scope.UserBasicInfo.payPassword==''){
//					$scope.pay.payPass = "";
//					$scope.pay.msg="未设置"
//				}else{
//					$scope.pay.payPass = $scope.UserBasicInfo.payPassword;
//					$scope.pay.msg="修改"
//				}
				
			} else {

			}
		};
		ajax.failureCallback = function(res) {

		};
		ajax.requestData();
	}
	$scope.getUserBasicInfo();
	
	$scope.getUserInfoDetails = function() {

		var url = "http://47.52.21.255:8180/fun/usercenter/userViewDetailInfo";
		var ajax = new ajaxClass($http, url, "POST");

		var appId = localStorage.getItem("funId");
		var method = 'fun.uc.userviewdetail';
		var charset = 'utf-8';
		var funid = funId;
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
			
			$scope.email ={
					addr:'',
					msg:''
				}
			if(resCode == 10000) {
				$scope.centerUserInfo = res.data;


				
				if($scope.centerUserInfo.email==''){
					$scope.email.addr = "";
					$scope.email.msg="được cài đặt"
				}else{
					$scope.email.addr = $scope.centerUserInfo.email;
					$scope.email.msg="Thay đổi";
				}
			} else {

			}
		};
		ajax.failureCallback = function(res) {

		};
		ajax.requestData();
	}
	$scope.getUserInfoDetails();
	$scope.getUserInfoDetails=function(){
		var url = "http://47.52.21.255:8180/fun/usercenter/userViewDetailInfo";
//		var url = "http://47.52.21.255:8183/fun/trade/queryOrderList";
		var ajax = new ajaxClass($http, url, "POST");

		var appId = localStorage.getItem("funId");
		var method = 'fun.uc.userviewdetail';
		var charset = 'utf-8';
		var funid = localStorage.getItem("funId");
//		var msisdn = localStorage.getItem("msisdn");
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
		//		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

		// 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
		// get方式请求数据不需要设置表头header
		ajax.successCallback = function(res) {


			var resCode = res.data.code;

			if(resCode == 10000) {
				$scope.centerUserInfo = res.data;


				$scope.headimage = res.data.headimage;
				$('.img-phone').attr('src',$scope.headimage);
			} else {

			}
		};
		ajax.failureCallback = function(res) {

		};
		ajax.requestData();
}
	$scope.getUserInfoDetails();
})