// 	//正则截取url参数
// 	(function($) {
//			$.getUrlParam = function(name) {
//				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
//				var r = window.location.search.substr(1).match(reg);
//				if(r != null) return unescape(r[2]);
//				return null;
//			}
//		})(jQuery);
//		var brandId = $.getUrlParam("brandId");
//		var typeId = $.getUrlParam("brandId");
		var nowTypeId = "1";

	var app = angular.module('detailsApp', []);
  
	//详情页面数据请求接口	  
	app.controller('detailsCtrl', function($scope, $http) {
		
		
		//ajax
		var url = F._getProductDetailInfo_cd;
    	var ajax = new ajaxClass($http,url,"GET");
// 		ajax.params = {
//						appid:'110',
//						method:'fun.cellphone.newest',
//						charset:'utf-8',
//						signtype:"5bd0f94e43fb03bbd30dc6be5107d844",
//						encrypt:'4da4224a06337b9564da736a1adfa7c9',
//						timestamp:'2017-09-06 11:30:50',
//						version:'1.0',
//						typeid:'1',
//						pagesize:'5',
//						currentpage:'1'
//					},
		var data = {
			appid:'2016102146225135',
			method:'fun.brand.query',
			charset:'utf-8',
			signtype:'',
			encrypt:'',
			timestamp:'2017-09-06 11:30:50',
			version:'1.0',
			brand_id:'1'
		};
		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

    	// 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    	// get方式请求数据不需要设置表头header
    	ajax.successCallback = function(res){

    	var brandDetail = res.data.brand_detail;
    	var productDetail = res.data.product_detail;
    	var propertiesDetail = res.data.properties_detail;
        var resCode = res.data.code;
        
    	if(resCode == 10000){
    		$scope.brandDetail = brandDetail;
    		$scope.productDetail = productDetail;
    		$scope.propertiesDetail = propertiesDetail;
    		

    		$scope.nowProductDetail= ["0","0","0"];
//  		$scope.price = "50000";

    		//轮播图ImageUrl
    		$scope.getImgUrls = function(){
    			var url = productDetail[0].imageUrls;
    			var resUrl = url.split("|");
    			$scope.imgUrls=[];
    			for(var i=0;i<resUrl.length;i++){
    				$scope.imgUrls.push(resUrl[i]);
    			}

    		}
    		$scope.getImgUrls();
    		//颜色过滤
    		$scope.classifyColor=function(obj){
    			if(obj.name=="color"){
    				return true;
    			}
    			return false;
    		}
    		//颜色按钮点击事件
    		$scope.colorChange=function(item){

//  			$scope.nowProductDetail[0] = item.id;
				$scope.nowProductDetail[0] = item.id;
    			getPrice($scope.nowProductDetail);
    			$("#slide img").attr('src',item.image)
    		}
    		
    		//内存过滤
    		$scope.classifySize=function(obj){
    			if(obj.name=="size"){
    				return true;
    			}
    			return false;
    		}
    		
    		//内存按钮点击事件
    		$scope.sizeChange=function(item){
    			$scope.nowProductDetail[1] = item.id;

    			getPrice($scope.nowProductDetail);
    		}
    		//运营商过滤
    		$scope.classifyTelco=function(obj){
    			if(obj.name=="telco"){
    				return true;
    			}
    			return false;
    		}
    		//运营商点击事件
    		$scope.telcoChange=function(item){
				$scope.nowProductDetail[2] = item.id;


    				getPrice($scope.nowProductDetail);
    			
    		}
    		
    		function getPrice(item){

    			//数组转化为字符串
    			var str = item.join("-");
    			var nowPropertiesIds = str.split(",");
    			    			
//  			var keepGoing = true;
//  			angular.forEach($scope.productDetail,function(data){

//  				if(keepGoing){
//  					if(nowPropertiesIds == data.propertiesIds){
//							$("#price").html(data.price);
////							var fenqiNum = $("#fenqiNumIpt").val();
////							var fenqiPrice = parseFloat(data.price)/fenqiNum;
////							$("#fenqiPrice").html(fenqiPrice);
//							re
//							keepGoing = false;
//						}else{
//							$("#price").html("没有库存！");


//							
//						}
//  				}
//					
//  			});


				for(var i = 0 ;i<$scope.productDetail.length;i++){

					if(nowPropertiesIds == $scope.productDetail[i].propertiesIds){
						$scope.price = $scope.productDetail[i].price;
						break;
					}else{
						$scope.price = 0;
					}
				}

    		};
    	}else{
    		//返回码错误
    	}
   	 };
   	 ajax.failureCallback = function(res){
   	 };
    	ajax.requestData();
    	$scope.fenqiNum=function(num){
			$scope.fenqiNum.num = num;

		};
    	
      	
	});//controllr

	/*获取评论接口*/
	app.controller("commentCtrl",function($scope,$http){
		
		var url = F._getEvaluationInfo_cd;
    	var ajax = new ajaxClass($http,url,"GET");
		
		
		ajax.params = {
			appId:'110',
			method:'fun.evaluation.query',
			charset:'utf-8',
			signType:'2419eedd1cb57c40fcab10c0edc04dbe',
			encrypt:'b36f18019e5d8638b1490426213db140',
			timestamp:'2017-09-06 11:30:50',
			version:'1.0',
			brand_id:'2',
			msisdn:'',
			pagesize:"10",
			currentPage:'1'
		};
//		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型
		
		ajax.successCallback = function(res){

    		
    		var resCode = res.data.code;
    		var detail = res.data.detail;
    		
	    	if(resCode == 10000){
	 			
	 		
	 			
	    		$scope.userComment = detail;
	    		for(var i = 0;i<$scope.userComment.length;i++){
	    			var url = $scope.userComment[i].imageUrls;
	    			var resUrl = url.split("|");
	    			$scope.userComment[i].userImg =[];

	    			for(var j = 0;j<resUrl.length;j++){
	    				var imgObj = {
	    					'urlName':"urlName",
	    					url:resUrl[j]
	    				}
		  				$scope.userComment[i].userImg.push(imgObj);		
	    			}
	    		}
	    		
	    		



	    		$scope.average = res.data.average;
//	    		for(var i = 0;i<$scope.userComment.length;i++){
//	    			
//	    			

//	    		}
	    		
//	    	//评论图片ImageUrl
//  		$scope.userCommentImgUrls = function(){
//  			
//  			var resUrl = url.split("|");
//  			$scope.imgUrls=[];
//  			

//  		}
//  		$scope.userCommentImgUrls();
	    		
	    	}
		}
		
		ajax.failureCallback = function(res){
   	 };
    	ajax.requestData();
	})
