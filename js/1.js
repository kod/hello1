//正则截取url参数

var app = angular.module("duanxinOptAPP", []);
app.controller("duanxinOptCtrl", function($scope,$http,$filter) {
	
	(function($) {
	$.getUrlParam = function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;
	}
	$scope.msisdn = $('#phoneNum').val();

	})(jQuery);
		
	$scope.duanxinOpt = function() {
		var phoneNum = $("#phoneNum").val();
		
		if(phoneNum!=0){
			$("#tip").text("");
			
			if (F.verify_wait && F.verify_wait.verify_sending_status()) return false;

			F.verify_wait = new F._verify_wait({
			    time: 120,
			    target: '#sText',
			    // isVue: true,
			});
			F.verify_wait.verify_sending_change(true);

			F._userAction_otp({
			    msisdn: $('#phoneNum').val(),
			}, function(ret) {
                if (ret.status !== 10000) {
                    F.verify_wait.verify_sending_change(false);
                }
			});

		}else{
			$('#tip').show();
			$('#tip').html('Vui lòng nhập số điện thoại...');
		}
	}
	//下一步
		$('.submit').click(function(){
			var msisdn = $("#phoneNum").val();
			var yzmId = $("#yzmId").val();
			if(yzmId==0){
				$("#tip").show().text("Vui lòng nhập mã xác nhận！")
			}else{
				if(yzmId!=null&&yzmId!="" && msisdn!=""){
					var url = location.search; //获取url中"?"符后的字串  
					if(url.indexOf("?")!= -1) {
						window.location.href="./confirm.html?yzmId="+yzmId+"&msisdn="+msisdn+"&xiug";
					}else{
						window.location.href="./confirm.html?yzmId="+yzmId+"&msisdn="+msisdn;
					}
					
				}else{
					$("#tip").show().text(" Số điện thoại không được để trống！")
				}
			}
		})
})