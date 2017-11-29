//轮播

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
var swiper = new Swiper('#hot_banner', {

    paginationClickable: true,
    longSwipesRatio: 0.3,
    touchRatio: 1,
    autoplay: 4000,
    observer: true, //修改swiper自己或子元素时, 自动初始化swiper
    observeParents: true, //修改swiper的父元素时, 自动初始化swiper
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
});
var swiper = new Swiper('#iphone_banner', {

    paginationClickable: true,
    longSwipesRatio: 0.3,
    touchRatio: 1,
    autoplay: 4000,
    observer: true, //修改swiper自己或子元素时, 自动初始化swiper
    observeParents: true, //修改swiper的父元素时, 自动初始化swiper
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
});
var swiper = new Swiper('#game_banner', {

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
var swiper = new Swiper('#brand_banner', {

    paginationClickable: true,
    longSwipesRatio: 0.3,
    touchRatio: 1,
    autoplay: 4000,
    observer: true, //修改swiper自己或子元素时, 自动初始化swiper
    observeParents: true, //修改swiper的父元素时, 自动初始化swiper
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
});
//请求数据
var app = angular.module('computerApp', []);
app.filter('priceFormat', function() { //可以注入依赖
    return F._priceFormat;
});

//banner数据请求接口	  
app.controller('computerCtrl', function($scope, $http) {
    var url = F._initTopComputer_cp;
    var ajax = new ajaxClass($http, url, "GET");

    var data = {
        appid: '0',
        method: 'fun.computer.topad',
        charset: 'utf-8',
        signtype: '',
        encrypt: '',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        typeid: '2',
        pagesize: '5',
        currentpage: '1'
    };
    ajax.params = getMd5Code(data, "commodityKey");

    ajax.successCallback = function(res) {


        var status = res.status;

        var resData = res.data.computerltopadinfo;
        if (status == 200) {
            $scope.cptBanner = resData; //banner数据

        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//爆款推荐数据请求接口	  
app.controller('hotProductCtrl', function($scope, $http) {
    var url = F._initNewComputer_di;
    var ajax = new ajaxClass($http, url, "GET");

    var data = {
        appid: '110',
        method: 'fun.computer.newest',
        charset: 'utf-8',
        signtype: '',
        encrypt: '',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        typeid: '2',
        pagesize: '5',
        currentpage: '1'
    };
    ajax.params = getMd5Code(data, "commodityKey");

    ajax.successCallback = function(res) {

        var status = res.status;


        var resData = res.data.computernewest;
        if (status == 200) {
            var a;
            var b;
            var classfyinfo = {};
            for (a = 0; a < resData.length; a++) {
                if (!classfyinfo['_sub_top']) classfyinfo['_sub_top'] = [];
                if (!classfyinfo['_sub_bottom']) classfyinfo['_sub_bottom'] = [];
                if (!classfyinfo['_total']) classfyinfo['_total'] = 0;
                if (!classfyinfo['_pos1']) classfyinfo['_pos1'] = 0;
                if (!classfyinfo['_pos2']) classfyinfo['_pos2'] = 0;
                if (!classfyinfo['_pos3']) classfyinfo['_pos3'] = 0;

                if (classfyinfo['_total'] < 7) {
                    classfyinfo['_total'] += 1;
                    switch (resData[a].position) {
                        case 1:
                            if (classfyinfo['_pos1'] < 2) {
                                classfyinfo['_pos1'] += 1;
                                classfyinfo['_sub_top'].push(resData[a]);
                            }
                            break;

                        case 2:
                            if (classfyinfo['_pos2'] < 3) {
                                classfyinfo['_pos2'] += 1;
                                classfyinfo['_sub_top'].push(resData[a]);
                            }
                            break;

                        default: // 默认为3
                            if (classfyinfo['_pos3'] < 5) {
                                classfyinfo['_pos3'] += 1;
                                classfyinfo['_sub_bottom'].push(resData[a]);
                            }
                            break;
                    }
                }
            }
            $scope.newComputer = classfyinfo;
            $scope.product = function(typeId, brandId) {


                // return false;
                gotoDetails(typeId, brandId);
            }
            return false;

            $scope.hotOne = [];
            $scope.hotTwo = [];
            $scope.hotThree = [];

            if (resData.length != 0) {
                $('#one').show();
                for (var i = 0; i < resData.length; i++) {
                    if (resData[i].position == 1) {
                        $scope.hotOne.push(resData[i]);
                        if ($scope.hotOne.length > 1) {
                            $("#hot_banner .dt-swiper-prev,#hot_banner .dt-swiper-next").show()
                        } else {
                            $("#hot_banner .dt-swiper-prev,#hot_banner .dt-swiper-next").hide()
                        }
                    } else if (resData[i].position == 2) {
                        $scope.hotTwo.push(resData[i]);
                    } else if (resData[i].position == 3) {
                        $scope.hotThree.push(resData[i]);
                    }
                }

                $scope.product = function(typeId, brandId) {
                    gotoDetails(typeId, brandId);
                }
            } else {
                $('#one').hide();
            }
        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//苹果专区数据请求接口	  
app.controller('iphoneProductCtrl', function($scope, $http) {
    var url = F._initAdAppleComputer_di;
    var ajax = new ajaxClass($http, url, "GET");

    var data = {
        appid: '110',
        method: 'fun.computer.apple.ad',
        charset: 'utf-8',
        signtype: '',
        encrypt: '',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        typeid: '2',
        pagesize: '5',
        currentpage: '1'
    };
    ajax.params = getMd5Code(data, "commodityKey"); //格式化ajax请求数据   commodityKey->表示系统类型

    ajax.successCallback = function(res) {

        var status = res.status;

        var resData = res.data.computerappleadinfo;
        if (status == 200) {
            var a;
            var b;
            var classfyinfo = {};
            for (a = 0; a < resData.length; a++) {
                if (!classfyinfo['_sub_top']) classfyinfo['_sub_top'] = [];
                if (!classfyinfo['_sub_bottom']) classfyinfo['_sub_bottom'] = [];
                if (!classfyinfo['_total']) classfyinfo['_total'] = 0;
                if (!classfyinfo['_pos1']) classfyinfo['_pos1'] = 0;
                if (!classfyinfo['_pos2']) classfyinfo['_pos2'] = 0;
                if (!classfyinfo['_pos3']) classfyinfo['_pos3'] = 0;

                if (classfyinfo['_total'] < 7) {
                    classfyinfo['_total'] += 1;
                    switch (resData[a].position) {
                        case 1:
                            if (classfyinfo['_pos1'] < 1) {
                                classfyinfo['_pos1'] += 1;
                                classfyinfo['_sub_top'].push(resData[a]);
                            }
                            break;

                        case 2:
                            if (classfyinfo['_pos2'] < 1) {
                                classfyinfo['_pos2'] += 1;
                                classfyinfo['_sub_top'].push(resData[a]);
                            }
                            break;

                        default: // 默认为3
                            if (classfyinfo['_pos3'] < 6) {
                                classfyinfo['_pos3'] += 1;
                                classfyinfo['_sub_bottom'].push(resData[a]);
                            }
                            break;
                    }
                }
            }
            $scope.AdAppleComputer = classfyinfo;
            $scope.product = function(typeId, brandId) {
                gotoDetails(typeId, brandId);
            }
            return false;

            //$scope.hotProduct = resData;//banner数据


            $scope.iphoneOne = [];
            $scope.iphoneTwo = [];
            $scope.iphoneThree = [];
            var tt = [];
            if (resData.length != 0) {
                $('#two_ipone').show();
                for (var i = 0; i < resData.length; i++) {

                    if (resData[i].position == 1) {
                        $scope.iphoneOne.push(resData[i]);
                        if ($scope.iphoneOne.length > 1) {
                            $("#iphone_banner .dt-swiper-prev,#iphone_banner .dt-swiper-next").show()
                        } else {
                            $("#iphone_banner .dt-swiper-prev,#iphone_banner .dt-swiper-next").hide()
                        }
                    } else if (resData[i].position == 2) {
                        tt.push(resData[i]);
                        $scope.iphoneTwo = tt.slice(1);
                    } else {
                        $scope.iphoneThree.push(resData[i]);
                    }
                }
                $scope.product = function(typeId, brandId) {
                    gotoDetails(typeId, brandId);
                }
            } else {
                $('#two_ipone').hide();
            }

        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//游戏本专区数据请求接口	  
app.controller('gameProductCtrl', function($scope, $http) {
    var url = F._initAdGameComputer_di;
    var ajax = new ajaxClass($http, url, "GET");

    var data = {
        appid: '110',
        method: 'fun.computer.game.ad',
        charset: 'utf-8',
        signtype: '',
        encrypt: '',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        typeid: '2',
        pagesize: '5',
        currentpage: '1'
    };
    ajax.params = getMd5Code(data, "commodityKey"); //格式化ajax请求数据   commodityKey->表示系统类型

    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        var status = res.status;

        var resData = res.data.computergameadinfo;
        if (status == 200) {
            var a;
            var b;
            var classfyinfo = {};
            for (a = 0; a < resData.length; a++) {
                if (!classfyinfo['_sub_top']) classfyinfo['_sub_top'] = [];
                if (!classfyinfo['_sub_bottom']) classfyinfo['_sub_bottom'] = [];
                if (!classfyinfo['_total']) classfyinfo['_total'] = 0;
                if (!classfyinfo['_pos1']) classfyinfo['_pos1'] = 0;
                if (!classfyinfo['_pos2']) classfyinfo['_pos2'] = 0;
                if (!classfyinfo['_pos3']) classfyinfo['_pos3'] = 0;

                if (classfyinfo['_total'] < 7) {
                    classfyinfo['_total'] += 1;
                    switch (resData[a].position) {
                        case 1:
                            if (classfyinfo['_pos1'] < 1) {
                                classfyinfo['_pos1'] += 1;
                                classfyinfo['_sub_top'].push(resData[a]);
                            }
                            break;

                        case 2:
                            if (classfyinfo['_pos2'] < 1) {
                                classfyinfo['_pos2'] += 1;
                                classfyinfo['_sub_top'].push(resData[a]);
                            }
                            break;

                        default: // 默认为3
                            if (classfyinfo['_pos3'] < 6) {
                                classfyinfo['_pos3'] += 1;
                                classfyinfo['_sub_bottom'].push(resData[a]);
                            }
                            break;
                    }
                }
            }
            $scope.AdGameComputer = classfyinfo;
            $scope.product = function(typeId, brandId) {
                gotoDetails(typeId, brandId);
            }
            return false;

            $scope.gameOne = [];
            $scope.gameTwo = [];
            $scope.gameThree = [];
            var tt = [];
            if (resData.length != 0) {
                $('#three_ipone').show();
                for (var i = 0; i < resData.length; i++) {
                    if (resData[i].position == 1) {
                        $scope.gameOne.push(resData[i]);
                        if ($scope.gameOne.length > 1) {
                            $("#game_banner .dt-swiper-prev,#game_banner .dt-swiper-next").show()
                        } else {
                            $("#game_banner .dt-swiper-prev,#game_banner .dt-swiper-next").hide()
                        }
                    } else if (resData[i].position == 2) {
                        tt.push(resData[i]);
                        $scope.gameTwo = tt.slice(1);
                    } else {
                        $scope.gameThree.push(resData[i]);
                    }
                }
                $scope.product = function(typeId, brandId) {
                    gotoDetails(typeId, brandId);
                }
            } else {
                $('#three_ipone').hide();
            }
        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//平板电脑专区数据请求接口	  
app.controller('ipadProductCtrl', function($scope, $http) {
    var url = F._initAdTabletComputer_di;
    var ajax = new ajaxClass($http, url, "GET");

    var data = {
        appid: '110',
        method: 'fun.computer.tablet.ad',
        charset: 'utf-8',
        signtype: '',
        encrypt: '',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        typeid: '2',
        pagesize: '5',
        currentpage: '1'
    };
    ajax.params = getMd5Code(data, "commodityKey");
    ajax.successCallback = function(res) {

        var status = res.status;

        var resData = res.data.computertabletadinfo;
        if (status == 200) {
            var a;
            var b;
            var classfyinfo = {};
            for (a = 0; a < resData.length; a++) {
                if (!classfyinfo['_sub_top']) classfyinfo['_sub_top'] = [];
                if (!classfyinfo['_sub_bottom']) classfyinfo['_sub_bottom'] = [];
                if (!classfyinfo['_total']) classfyinfo['_total'] = 0;
                if (!classfyinfo['_pos1']) classfyinfo['_pos1'] = 0;
                if (!classfyinfo['_pos2']) classfyinfo['_pos2'] = 0;
                if (!classfyinfo['_pos3']) classfyinfo['_pos3'] = 0;

                if (classfyinfo['_total'] < 7) {
                    classfyinfo['_total'] += 1;
                    switch (resData[a].position) {
                        case 1:
                            if (classfyinfo['_pos1'] < 1) {
                                classfyinfo['_pos1'] += 1;
                                classfyinfo['_sub_top'].push(resData[a]);
                            }
                            break;

                        case 2:
                            if (classfyinfo['_pos2'] < 1) {
                                classfyinfo['_pos2'] += 1;
                                classfyinfo['_sub_top'].push(resData[a]);
                            }
                            break;

                        default: // 默认为3
                            if (classfyinfo['_pos3'] < 6) {
                                classfyinfo['_pos3'] += 1;
                                classfyinfo['_sub_bottom'].push(resData[a]);
                            }
                            break;
                    }
                }
            }
            $scope.adTabletComputer = classfyinfo;
            $scope.product = function(typeId, brandId) {
                gotoDetails(typeId, brandId);
            }
            return false;

            //$scope.hotProduct = resData;//banner数据


            $scope.ipadOne = [];
            $scope.ipadTwo = [];
            $scope.ipadThree = [];
            var tt = [];
            if (resData.length != 0) {
                $('#four_ipone').show();
                for (var i = 0; i < resData.length; i++) {
                    if (resData[i].position == 1) {
                        $scope.ipadOne.push(resData[i]);
                        if ($scope.ipadOne.length > 1) {
                            $("#ipad_banner .dt-swiper-prev,#ipad_banner .dt-swiper-next").show()
                        } else {
                            $("#ipad_banner .dt-swiper-prev,#ipad_banner .dt-swiper-next").hide()
                        }
                    } else if (resData[i].position == 2) {
                        tt.push(resData[i]);
                        $scope.ipadTwo = tt.slice(1);
                    } else {
                        $scope.ipadThree.push(resData[i]);
                    }
                }
                $scope.product = function(typeId, brandId) {
                    gotoDetails(typeId, brandId);
                }
            } else {
                $('#four_ipone').hide();
            }
        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//品牌专区专区数据请求接口	  
app.controller('brandProductCtrl', function($scope, $http) {
    F._initTopComputer({}, function(ret) {
        if (!ret) return false;

        var digNav = ret.classfyinfo;
        $scope.nav = digNav; //导航		

        var url = F._initAdClassfyComputer_di;
        var ajax = new ajaxClass($http, url, "GET");

        var data = {
            appid: '0',
            method: 'fun.computer.classfy.ad',
            charset: 'utf-8',
            signtype: '',
            encrypt: '',
            timestamp: '2017-09-06 11:30:50',
            version: '1.0',
            typeid: '2',
            pagesize: '5',
            currentpage: '1'
        };
        ajax.params = getMd5Code(data, "commodityKey");
        ajax.successCallback = function(res) {
            var status = res.status;
            var resData = res.data.computerclassfyproadinfo;
            // var digNav = res.data.computerclassfyadinfo;
            $scope.addItem = function(i) {}
            if (status == 200) {
                // $scope.nav = digNav; //导航

                $scope.pg = [];
                for (var i = 0; i < resData.length; i++) {


                    if (resData[i].classfyId == 31) {

                        $scope.pg[i] = resData[i];

                    }
                }

                $scope.brandOne = [];
                $scope.brandTwo = [];
                for (var i = 0; i < $scope.pg.length; i++) {
                    if ($scope.pg[i].position == 1) {
                        $scope.brandOne.push($scope.pg[i]);
                    } else if ($scope.pg[i].position == 2) {
                        $scope.brandTwo.push($scope.pg[i]);
                    }
                }

                $scope.product = function(typeId, brandId) {
                    gotoDetails(typeId, brandId);
                }
            }


        };
        ajax.failureCallback = function(res) {

        };
        ajax.requestData();


    });
})

function gotoDetails(typeId, brandId) {
    if (typeId != "" && brandId != "") {
        window.location.href = "details_iphone.html?typeId=" + typeId + "&brandId=" + brandId;
        // window.open("details_iphone.html?typeId=" + typeId + "&brandId=" + brandId);
    } else {
        window.location.href = "";
    }
}

app.controller("computerController", function($scope) {
    $scope.gotoMore = function(brandId, classifyId) {
        if (brandId != "" && brandId != "") {
            window.location.href = "more.html?brandId=" + brandId + "&classifyId=" + classifyId + "&brandAct=2";
        } else {
            alert("Sản phẩm không tồn tại！");
            window.location.href = "";
        }
    }
    $scope.gotoMore2 = function(classifyId) {
        window.location.href = "more.html?brandId=" + "" + "&classifyId=" + classifyId + "&brandAct=2&parent_id=2";

    }
})