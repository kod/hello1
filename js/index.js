var swiper = new Swiper('#index_banner', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    longSwipesRatio: 0.3,
    touchRatio: 1,
    autoplay: 4000,
    observer: true, //修改swiper自己或子元素时, 自动初始化swiper
    observeParents: true, //修改swiper的父元素时, 自动初始化swiper
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
});
var swiper = new Swiper('#new_banner', {

    paginationClickable: true,
    longSwipesRatio: 0.3,
    touchRatio: 1,
    autoplay: 4000,

    observer: true, //修改swiper自己或子元素时, 自动初始化swiper
    observeParents: true, //修改swiper的父元素时, 自动初始化swiper
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
});
var swiper = new Swiper('#phone_banner', {

    paginationClickable: true,
    longSwipesRatio: 0.3,
    touchRatio: 1,
    autoplay: 4000,

    observer: true, //修改swiper自己或子元素时, 自动初始化swiper
    observeParents: true, //修改swiper的父元素时, 自动初始化swiper
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
});
var swiper = new Swiper('#ipad_banner', {

    paginationClickable: true,
    longSwipesRatio: 0.3,
    touchRatio: 1,
    autoplay: 4000,

    observer: true, //修改swiper自己或子元素时, 自动初始化swiper
    observeParents: true, //修改swiper的父元素时, 自动初始化swiper
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
});
var swiper = new Swiper('#smart_banner', {

    paginationClickable: true,
    longSwipesRatio: 0.3,
    touchRatio: 1,
    autoplay: 4000,

    observer: true, //修改swiper自己或子元素时, 自动初始化swiper
    observeParents: true, //修改swiper的父元素时, 自动初始化swiper
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
});

function gotoFind() {
    var findcontent = $("#findIpt").val();
    if (findcontent != "") {
        window.location.href = "./html/search.html?findcontent=" + findcontent;
    }
}

//数据请求
var app = angular.module('indexApp', []);
app.filter('priceFormat', function() { //可以注入依赖
    return F._priceFormat;
});

//新品首发左边数据请求接口	 
//	app.controller('indexCtrl', function($scope) {
////			var user = sessionStorage.getItem("funid");
////			var msisdn = sessionStorage.getItem("msisdn");
////			if(msisdn!="" && user!=""){
////				$scope.msisdn=msisdn;
////				$scope.funid=user;
////			}else{
////				$scope.msisdn="登录";
////			}
//
//		
//	});
app.controller("indexCtrl", function($scope, $http, $filter) {
    //	$scope.msisdn="";
    //	var user = sessionStorage.getItem("funId");


    //	var msisdn = sessionStorage.getItem("msisdn");
    //	if(msisdn!="" && user!="" && msisdn!= null && user!=null){
    //		$scope.msisdn=msisdn;
    //		$scope.funid=user;
    //	}else{
    //		$scope.msisdn="";
    //	}
    
    $scope.product = function(typeId, brandId) {
        gotoDetails(typeId, brandId);
    }

    $scope.gotoMore = function(classifyId, brandAct) {
        if (classifyId != "") {
            window.location.href = "./html/more.html?brandId=" + "" + "&classifyId=" + classifyId + "&brandAct=" + brandAct;
        } else {
            alert("Sản phẩm không tồn tại！");
            window.location.href = "";
        }
    }
})
app.controller('newleftCtrl', function($scope, $http, $filter) {

    var url = "http://47.52.21.255:8185/fun/commodity/getNewestInfo";
    var ajax = new ajaxClass($http, url, "POST");

    ajax.data = $.param({
        appId: '',
        method: 'fun.newest.query',
        charset: 'UTF-8',
        signType: '232d3721d7461bdfc771ce28408ce7c9',
        encrypt: '78badee7d1d29269b9afb5389aee6d11',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        type_id: '0',
        classfy_id: '0',
        position: '1',
        pagesize: '5',
        currentPage: '1'
    });
    ajax.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    //		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        var status = res.status;

        var leftData = res.data.details;
        if (status == 200) {

            $scope.leftUrl = leftData; //banner数据



        } else {

        }

    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();


})
//新品首发中间数据请求接口	
app.controller('newcenterCtrl', function($scope, $http, $filter) {
    var url = "http://47.52.21.255:8185/fun/commodity/getNewestInfo";
    var ajax = new ajaxClass($http, url, "POST");

    ajax.data = $.param({
        appId: '',
        method: 'fun.newest.query',
        charset: 'UTF-8',
        signType: '232d3721d7461bdfc771ce28408ce7c9',
        encrypt: '1e2219033472ece44d402fb6ddabb06d',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        type_id: '0',
        classfy_id: '0',
        position: '2',
        pagesize: '5',
        currentPage: '1'
    });
    ajax.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    //		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        var status = res.status;

        var centerData = res.data.details;
        if (status == 200) {
            $scope.center = centerData //
            if ($scope.center.length > 1) {
                $("#new_banner .dt-swiper-prev,#new_banner .dt-swiper-next").show()
            } else {
                $("#new_banner .dt-swiper-prev,#new_banner .dt-swiper-next").hide()
            }
            //banner数据


        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//新品首发下边数据请求接口
app.controller('newbottomCtrl', function($scope, $http, $filter) {
    var url = "http://47.52.21.255:8185/fun/commodity/getNewestInfo";
    var ajax = new ajaxClass($http, url, "POST");

    ajax.data = $.param({
        appId: '',
        method: 'fun.newest.query',
        charset: 'UTF-8',
        signType: '232d3721d7461bdfc771ce28408ce7c9',
        encrypt: '0e17895845c4f18373a539247a855426',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        type_id: '0',
        classfy_id: '0',
        position: '3',
        pagesize: '5',
        currentPage: '1'
    });
    ajax.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    //		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        var status = res.status;

        var bottomData = res.data.details;
        if (status == 200) {
            $scope.bottom = bottomData //
            //banner数据


        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//手机通讯左边数据请求接口
app.controller('phoneleftCtrl', function($scope, $http) {
    var url = "http://47.52.21.255:8185/fun/commodity/getAdverstInfo";
    var ajax = new ajaxClass($http, url, "GET");

    ajax.params = {
        appId: '110',
        method: 'fun.adverst.query',
        charset: 'utf-8',
        signType: '2032a9f6733d8d7c9a53a63078314714',
        encrypt: 'f32010216f44f5c5eeb6484692896804',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        type_id: '1',
        classfy_id: '0',
        position: '1',
        pagesize: '5',
        currentPage: '1'
    };

    //		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        var status = res.status;

        var leftData = res.data.details;
        if (status == 200) {
            $scope.phoneleftUrl = leftData;
            //banner数据


        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//手机通讯中间数据请求接口
app.controller('phonecenterCtrl', function($scope, $http) {
    var url = "http://47.52.21.255:8185/fun/commodity/getAdverstInfo";
    var ajax = new ajaxClass($http, url, "GET");

    ajax.params = {
        appId: '110',
        method: 'fun.adverst.query',
        charset: 'utf-8',
        signType: '2032a9f6733d8d7c9a53a63078314714',
        encrypt: 'a03f98acb81ab1783a014c9c0f062098',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        type_id: '1',
        classfy_id: '0',
        position: '2',
        pagesize: '5',
        currentPage: '1'
    };

    //		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        var status = res.status;

        var leftData = res.data.details;
        if (status == 200) {
            $scope.phonecenterUrl = leftData;
            if ($scope.phonecenterUrl.length > 1) {
                $("#phone_banner .dt-swiper-prev,#phone_banner .dt-swiper-next").show()
            } else {
                $("#phone_banner .dt-swiper-prev,#phone_banner .dt-swiper-next").hide()
            }
            //banner数据


        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//手机通讯下边数据请求接口
app.controller('phonebottomCtrl', function($scope, $http) {
    var url = "http://47.52.21.255:8185/fun/commodity/getAdverstInfo";
    var ajax = new ajaxClass($http, url, "GET");

    ajax.params = {
        appId: '110',
        method: 'fun.adverst.query',
        charset: 'utf-8',
        signType: '2032a9f6733d8d7c9a53a63078314714',
        encrypt: '5c8c8e8cf994df3e121d8ec49374727e',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        type_id: '1',
        classfy_id: '0',
        position: '3',
        pagesize: '3',
        currentPage: '1'
    };

    //		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        var status = res.status;

        var leftData = res.data.details;
        if (status == 200) {
            $scope.phonebottom = leftData;
            //banner数据


        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//电脑平板左边数据请求接口
app.controller('ipadleftCtrl', function($scope, $http) {
    var url = "http://47.52.21.255:8185/fun/commodity/getAdverstInfo";
    var ajax = new ajaxClass($http, url, "GET");

    ajax.params = {
        appId: '110',
        method: 'fun.adverst.query',
        charset: 'utf-8',
        signType: '2032a9f6733d8d7c9a53a63078314714',
        encrypt: '0c29b31644576d1c2d272c4bb17f19eb',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        type_id: '2',
        classfy_id: '0',
        position: '1',
        pagesize: '1',
        currentPage: '1'
    };
    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        var status = res.status;

        var leftData = res.data.details;
        if (status == 200) {
            $scope.ipadleftUrl = leftData;
            //banner数据


        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//电脑平板中间数据请求接口
app.controller('ipadcenterCtrl', function($scope, $http) {
    var url = "http://47.52.21.255:8185/fun/commodity/getAdverstInfo";
    var ajax = new ajaxClass($http, url, "GET");

    ajax.params = {
        appId: '110',
        method: 'fun.adverst.query',
        charset: 'utf-8',
        signType: '2032a9f6733d8d7c9a53a63078314714',
        encrypt: 'ca0a87cbd4ca8742cd312e251531d024',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        type_id: '2',
        classfy_id: '0',
        position: '2',
        pagesize: '5',
        currentPage: '1'
    };

    //		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        var status = res.status;

        var leftData = res.data.details;
        if (status == 200) {
            $scope.ipadcenterUrl = leftData;
            if ($scope.ipadcenterUrl.length > 1) {
                $("#ipad_banner .dt-swiper-prev,#ipad_banner .dt-swiper-next").show()
            } else {
                $("#ipad_banner .dt-swiper-prev,#ipad_banner .dt-swiper-next").hide()
            }
            //banner数据


        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//电脑平板下边数据请求接口
app.controller('ipadbottomCtrl', function($scope, $http) {
    var url = "http://47.52.21.255:8185/fun/commodity/getAdverstInfo";
    var ajax = new ajaxClass($http, url, "GET");

    ajax.params = {
        appId: '110',
        method: 'fun.adverst.query',
        charset: 'utf-8',
        signType: '2032a9f6733d8d7c9a53a63078314714',
        encrypt: '3a01f74e209a16344471e8c3f533aeb4',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        type_id: '2',
        classfy_id: '0',
        position: '3',
        pagesize: '3',
        currentPage: '1'
    };

    //		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        var status = res.status;

        var leftData = res.data.details;
        if (status == 200) {
            $scope.ipadbottom = leftData;
            //banner数据


        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//智能数码左边数据请求接口
app.controller('smartleftCtrl', function($scope, $http) {
    var url = "http://47.52.21.255:8185/fun/commodity/getAdverstInfo";
    var ajax = new ajaxClass($http, url, "GET");

    ajax.params = {
        appId: '110',
        method: 'fun.adverst.query',
        charset: 'utf-8',
        signType: '2032a9f6733d8d7c9a53a63078314714',
        encrypt: '23e0e8fc58b859e7fc157e00292d2faa',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        type_id: '5',
        classfy_id: '0',
        position: '1',
        pagesize: '1',
        currentPage: '1'
    };
    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        var status = res.status;

        var leftData = res.data.details;
        if (status == 200) {
            $scope.smartleftUrl = leftData;
            //banner数据


        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//智能数码中间数据请求接口
app.controller('smartcenterCtrl', function($scope, $http) {
    var url = "http://47.52.21.255:8185/fun/commodity/getAdverstInfo";
    var ajax = new ajaxClass($http, url, "GET");

    ajax.params = {
        appId: '110',
        method: 'fun.adverst.query',
        charset: 'utf-8',
        signType: '2032a9f6733d8d7c9a53a63078314714',
        encrypt: '81d00032c7f85a46a8d64d21f1bc39df',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        type_id: '5',
        classfy_id: '0',
        position: '2',
        pagesize: '5',
        currentPage: '1'
    };

    //		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        var status = res.status;

        var leftData = res.data.details;
        if (status == 200) {
            $scope.smartcenterUrl = leftData;
            if ($scope.smartcenterUrl.length > 1) {
                $("#smart_banner .dt-swiper-prev,#smart_banner .dt-swiper-next").show()
            } else {
                $("#smart_banner .dt-swiper-prev,#smart_banner .dt-swiper-next").hide()
            }
            //banner数据


        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//智能数码下边数据请求接口
app.controller('smartbottomCtrl', function($scope, $http) {
    var url = "http://47.52.21.255:8185/fun/commodity/getAdverstInfo";
    var ajax = new ajaxClass($http, url, "GET");

    ajax.params = {
        appId: '110',
        method: 'fun.adverst.query',
        charset: 'utf-8',
        signType: '2032a9f6733d8d7c9a53a63078314714',
        encrypt: 'd26e7855ae2dfe2b6584f058baead679',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        type_id: '5',
        classfy_id: '0',
        position: '3',
        pagesize: '3',
        currentPage: '1'
    };

    //		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        var status = res.status;

        var leftData = res.data.details;
        if (status == 200) {
            $scope.smartbottom = leftData;
            //banner数据


        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//手机通讯品牌数据请求接口
app.controller('phonebrandCtrl', function($scope, $http) {
    var url = "http://47.52.21.255:8185/fun/commodity/getClassfyInfo";
    var ajax = new ajaxClass($http, url, "GET");

    ajax.params = {
        appId: '110',
        method: 'fun.classfy.query',
        charset: 'utf-8',
        signType: 'c2b68aa7f3f6e7cce2d48ba8b25245c0',
        encrypt: '65bcb8266e9dba190c358e263f7d40b0',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        type_id: '1',
        pagesize: '10',
        currentPage: '1'
    };

    //		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        var status = res.status;

        var leftData = res.data.details;
        if (status == 200) {
            $scope.phonebrand = leftData;
            //banner数据



        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//电脑平板品牌数据请求接口
app.controller('ipadbrandCtrl', function($scope, $http) {
    var url = "http://47.52.21.255:8185/fun/commodity/getClassfyInfo";
    var ajax = new ajaxClass($http, url, "GET");

    ajax.params = {
        appId: '110',
        method: 'fun.classfy.query',
        charset: 'utf-8',
        signType: 'c2b68aa7f3f6e7cce2d48ba8b25245c0',
        encrypt: 'd2bcbf29fd5d97db24c33ff9bffc581c',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        type_id: '2',
        pagesize: '10',
        currentPage: '1'
    };

    //		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        var status = res.status;

        var leftData = res.data.details;
        if (status == 200) {
            $scope.ipadbrand = leftData;
            //banner数据


        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//智能数码品牌数据请求接口
app.controller('smartbrandCtrl', function($scope, $http) {
    var url = "http://47.52.21.255:8185/fun/commodity/getClassfyInfo";
    var ajax = new ajaxClass($http, url, "GET");

    ajax.params = {
        appId: '110',
        method: 'fun.classfy.query',
        charset: 'utf-8',
        signType: 'c2b68aa7f3f6e7cce2d48ba8b25245c0',
        encrypt: 'ab328b2089449dead96cd017bafdd32d',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        type_id: '5',
        pagesize: '10',
        currentPage: '1'
    };

    //		ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        var status = res.status;

        var leftData = res.data.details;
        if (status == 200) {
            $scope.smartbrand = leftData;
            //banner数据


        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})



function gotoDetails(typeId, brandId) {
    if (typeId != "" && brandId != "") {
        // window.open("./html/details_iphone.html?typeId=" + typeId + "&brandId=" + brandId);
        window.location.href = "./html/details_iphone.html?typeId=" + typeId + "&brandId=" + brandId;
    } else {
        window.location.href = "";
    }
}