var app = angular.module('centerMainApp', []);

app.controller('centerMainCtrl', function($scope, $http, $filter) {
	
//	msisdnFormatSession(msisdn);
	$scope.msisdn = localStorage.getItem("msisdnFormat");
	var  telVal= localStorage.getItem("msisdn");
	
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
   $scope.funId  = newTelVal;
	
	//手机输出格式监听
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
	$scope.getUserInfoDetails=function(){
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


			if(resCode == 10000) {
				$scope.centerUserInfo = res.data;



				$scope.headimage = res.data.headimage;

				$('.img-phone').attr('src',$scope.headimage);
				var address=res.data.address;
				var admissiontime=res.data.admissiontime;
				var collegeaddr=res.data.collegeaddr;
				var collegename=res.data.collegename;
				var con1=res.data.connectusermsisdn1;
				var con2=res.data.connectusermsisdn2;
				var con3=res.data.connectusermsisdn3;
				var conn1=res.data.connectusername1;
				var conn2=res.data.connectusername2;
				var conn3=res.data.connectusername3;
				var conne1=res.data.connectuserrelation1;
				var conne2=res.data.connectuserrelation2;
				var conne3=res.data.connectuserrelation3;
				var degree=res.data.degree;
				var department=res.data.department;
				var email=res.data.email;
				var headimage=res.data.headimage;
				var sex=res.data.sex;
				var specialty=res.data.specialty;
				var identification=res.data.identification;
				var username=res.data.username;
				// if(address==0||admissiontime==0||collegeaddr==0||con1==0||con2==0||con2==0||conn1==0||conn2==0||conn3==0||conne1==0||conne2==0||conne3==0||degree==0||department==0||email==0||headimage==0||sex==0||specialty==0||identification==0||username==0){













				if (identification.length === 0 || address.length === 0 || conn1.length === 0 || con1.length === 0 || conne1.length === 0 || collegeaddr.length === 0 || collegename.length === 0) {

					$('.personal>a>img').attr('src','../img/center (3).jpg');
					$('.personal .img-bgs').find('span').html('Thông tin cá nhân của bạn chưa được cài đặt');
				}else{
					$('.personal>a>img').attr('src','../img/center.png');
					$('.personal .img-bgs').find('span').html('Thông tin cá nhân của bạn đã được cài đặt');
				}
				
			} else {

			}
		};
		ajax.failureCallback = function(res) {

		};
		ajax.requestData();
	}
	$scope.getUserInfoDetails();
})