//轮播图
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
var swiper = new Swiper('#dzjy_banner', {

    paginationClickable: true,
    longSwipesRatio: 0.3,
    touchRatio: 1,
    autoplay: 4000,
    observer: true, //修改swiper自己或子元素时, 自动初始化swiper
    observeParents: true, //修改swiper的父元素时, 自动初始化swiper
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
});
var swiper = new Swiper('#zncd_banner', {

    paginationClickable: true,
    longSwipesRatio: 0.3,
    touchRatio: 1,
    autoplay: 4000,
    observer: true, //修改swiper自己或子元素时, 自动初始化swiper
    observeParents: true, //修改swiper的父元素时, 自动初始化swiper
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
});
var swiper = new Swiper('#dwyx_banner', {

    paginationClickable: true,
    longSwipesRatio: 0.3,
    touchRatio: 1,
    autoplay: 4000,
    observer: true, //修改swiper自己或子元素时, 自动初始化swiper
    observeParents: true, //修改swiper的父元素时, 自动初始化swiper
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
});
var swiper = new Swiper('#gdws_banner', {

    paginationClickable: true,
    longSwipesRatio: 0.3,
    touchRatio: 1,
    autoplay: 4000,
    observer: true, //修改swiper自己或子元素时, 自动初始化swiper
    observeParents: true, //修改swiper的父元素时, 自动初始化swiper
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
});
var swiper = new Swiper('#ssyy_banner', {

    paginationClickable: true,
    longSwipesRatio: 0.3,
    touchRatio: 1,
    autoplay: 4000,
    observer: true, //修改swiper自己或子元素时, 自动初始化swiper
    observeParents: true, //修改swiper的父元素时, 自动初始化swiper
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
});
//页面请求
var app = angular.module('digitalApp', []);
app.filter('priceFormat', function() { //可以注入依赖
    return F._priceFormat;
});

//banner数据请求接口	  
app.controller('digitalCtrl', function($scope, $http) {
    var url = F._initTopDigital_di;
    var ajax = new ajaxClass($http, url, "GET");

    var data = {
        appid: '0',
        method: 'fun.digital.topad',
        charset: 'utf-8',
        signtype: '',
        encrypt: '',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        typeid: '5',
        pagesize: '5',
        currentpage: '1'
    };
    ajax.params = getMd5Code(data, "commodityKey"); //格式化ajax请求数据   commodityKey->表示系统类型

    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {


        var status = res.status;

        var resData = res.data.digitaltopadinfo;
        var chooseData = res.data.subclassfyinfo;
        $scope.thirdclassData = res.data.thirdclassfyinfo;
        $scope.chooseclassData = res.data.thirdclassfyinfo;

        var resCode = res.data.code;
        if (resCode == 10000) {
            $scope.dtlBanner = resData; //banner数据
            $scope.choose = chooseData; //二级请求接口	 
            //默认元素

            $scope.classDefault = function(id) {

                $scope.defaultId = id;

                $scope.thirdclassDataShowDefault = [];

                for (var i = 0; i < $scope.thirdclassData.length; i++) {
                    if ($scope.thirdclassData[i].subClassfyId == id) {
                        $scope.thirdclassDataShowDefault.push($scope.thirdclassData[i]);
                    } else {}
                }
                if ($scope.thirdclassDataShowDefault.length == 0) {
                    $scope.thirdclassDataShowDefault = [{
                        name: "Không tìm thấy sản phẩm phù hợp！"
                    }]
                }


            }
            $scope.classDefault(this.id);

            //鼠标移上元素触发事件
            $scope.mouseEnter = "";
            $scope.mouseenter = function(id) {

                $scope.id = id;
                $scope.mouseEnter = id;
                var nowId = "category_open" + id;

                $("#category_open" + id).css("display", "block");
                //$("#category_open"+id).css("background","#000");

                $scope.thirdclassDataShow = [];

                for (var i = 0; i < $scope.thirdclassData.length; i++) {
                    if ($scope.thirdclassData[i].subClassfyId == id) {
                        $scope.thirdclassDataShow.push($scope.thirdclassData[i]);
                    } else {}
                }
                if ($scope.thirdclassDataShow.length == 0) {
                    $scope.thirdclassDataShow = [{
                        name: "Không tìm thấy sản phẩm phù hợp！"
                    }];
                }



            }
            //鼠标移出触发事件
            $scope.mouseleave = function(id) {
                $scope.mouseEnter = "";
                var nowId = "category_open" + id;
                $("#category_open" + id).css("display", "none");
            }

            $scope.gotoMore = function(id) {
                if (id) {
                    window.location.href = "more.html?id=" + id;
                }
            }
        } else {
            //请求失败代码区域
        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();


    $scope.gotoMore2 = function(classifyId) {

        if (classifyId != "") {
            window.location.href = "more.html?brandId=" + "" + "&classifyId=" + classifyId + "&brandAct=3&parent_id=5";
        } else {
            alert("Sản phẩm không tồn tại！");
            window.location.href = "";
        }
    }

})
//精选推荐请求接口	 
app.controller('tuijianCtrl', function($scope, $http) {
    var url = F._initNewDigital_di;
    var ajax = new ajaxClass($http, url, "GET");

    var data = {
        appid: '110',
        method: 'fun.digital.newest',
        charset: 'utf-8',
        signtype: '',
        encrypt: '',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        typeid: '5',
        pagesize: '5',
        currentpage: '1'
    };
    ajax.params = getMd5Code(data, "commodityKey"); //格式化ajax请求数据   commodityKey->表示系统类型

    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        var status = res.status;

        var jinxuanData = res.data.digitalnewest;
        if (status == 200) {

            $scope.jinxuan = jinxuanData; //banner数据

            $scope.product = function(typeId, brandId) {
                gotoDetails(typeId, brandId);
            }

        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})
//时尚影音请求接口
app.controller('productCtrl', function($scope, $http) {
    var url = F._initAdDigital_di;
    var ajax = new ajaxClass($http, url, "GET");

    var data = {
        appid: '110',
        method: 'fun.digital.ads',
        charset: 'utf-8',
        signtype: '',
        encrypt: '',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        typeid: '5',
        pagesize: '8',
        currentpage: '1'
    };
    ajax.params = getMd5Code(data, "commodityKey"); //格式化ajax请求数据   commodityKey->表示系统类型

    // 表单方式传递数据或者可以使用在url后面加？limit=11这样的形式传递
    // get方式请求数据不需要设置表头header
    ajax.successCallback = function(res) {

        if (!window.F) window.F = {};

        var a;
        var b;
        var ret = res.data;

        if (ret.code !== 10000) {
            alert('error');
            return false;
        }

        F.subclassfyinfo = ret.subclassfyinfo;
        F.digitaladinfo = ret.digitaladinfo;

        for (a = 0; a < F.digitaladinfo.length; a++) {
            for (b = 0; b < F.subclassfyinfo.length; b++) {
                if (F.digitaladinfo[a].subClassfyId === F.subclassfyinfo[b].id) {
                    if (!F.subclassfyinfo[b]['_sub_top']) F.subclassfyinfo[b]['_sub_top'] = [];
                    if (!F.subclassfyinfo[b]['_sub_bottom']) F.subclassfyinfo[b]['_sub_bottom'] = [];
                    if (!F.subclassfyinfo[b]['_total']) F.subclassfyinfo[b]['_total'] = 0;
                    if (!F.subclassfyinfo[b]['_pos1']) F.subclassfyinfo[b]['_pos1'] = 0;
                    if (!F.subclassfyinfo[b]['_pos2']) F.subclassfyinfo[b]['_pos2'] = 0;
                    if (!F.subclassfyinfo[b]['_pos3']) F.subclassfyinfo[b]['_pos3'] = 0;

                    if (F.subclassfyinfo[b]['_total'] < 7) {
                        F.subclassfyinfo[b]['_total'] += 1;
                        switch (F.digitaladinfo[a].position) {
                            case 1:
                                if (F.subclassfyinfo[b]['_pos1'] < 2) {
                                    F.subclassfyinfo[b]['_pos1'] += 1;
                                    F.subclassfyinfo[b]['_sub_top'].push(F.digitaladinfo[a]);
                                }
                                break;

                            case 2:
                                if (F.subclassfyinfo[b]['_pos2'] < 3) {
                                    F.subclassfyinfo[b]['_pos2'] += 1;
                                    F.subclassfyinfo[b]['_sub_top'].push(F.digitaladinfo[a]);
                                }
                                break;

                            default: // 默认为3
                                if (F.subclassfyinfo[b]['_pos3'] < 5) {
                                    F.subclassfyinfo[b]['_pos3'] += 1;
                                    F.subclassfyinfo[b]['_sub_bottom'].push(F.digitaladinfo[a]);
                                }
                                break;
                        }
                    }
                }
            }
        }

        $scope.Products = F.subclassfyinfo;
        $scope.ppq = ret.classfyinfo; //品牌墙
        $scope.product = function(typeId, brandId) {
            gotoDetails(typeId, brandId);
        }
        return false;




        var status = res.status;

        var productData = res.data.digitaladinfo;
        var ppqData = res.data.classfyinfo;
        $scope.listgoodData = res.data.subclassfyinfo;
        if (status == 200) {

            $scope.faison = []; //时尚影音
            $scope.onefaison = [];
            $scope.twofaison = [];
            $scope.threefaison = [];
            $scope.onesmart = []; //智能穿戴
            $scope.twosmart = [];
            $scope.threesmart = [];
            $scope.oneperipherals = []; //高端外设
            $scope.twoperipherals = [];
            $scope.threeperipherals = [];
            $scope.onegame = []; //电玩游戏
            $scope.twogame = [];
            $scope.threegame = [];
            $scope.onestudy = []; //电子教育
            $scope.twostudy = [];
            $scope.threestudy = [];

            $scope.ppq = ppqData; //品牌墙



            for (var i = 0; i < productData.length; i++) {
                if (productData[i].subClassfyId == $scope.listgoodData[4].id) {
                    //	           			$scope.faison.push(productData[i]);
                    $scope.names = $scope.listgoodData[4].name;
                    if (productData[i].position == 1) {
                        $scope.onefaison.push(productData[i]);
                        if ($scope.onefaison.length > 1) {
                            $("#ssyy_banner .dt-swiper-prev,#ssyy_banner .dt-swiper-next").show()
                        } else {
                            $("#ssyy_banner .dt-swiper-prev,#ssyy_banner .dt-swiper-next").hide()
                        }

                    } else if (productData[i].position == 2) {
                        $scope.twofaison.push(productData[i]);
                        if ($scope.twofaison.length == 0) {
                            $('.shuam_five .bigs').hide();
                            $('.shuam_five').hide();
                            $('.rigt6').hide();
                        } else {
                            $('.shuam_five .bigs').show();
                            $('.shuam_five').show();
                            $('.rigt6').show();
                        }
                    } else {
                        $scope.threefaison.push(productData[i]);
                    }
                } else if (productData[i].subClassfyId == $scope.listgoodData[2].id) {
                    $scope.named = $scope.listgoodData[2].name;
                    if (productData[i].position == 1) {
                        $scope.onesmart.push(productData[i]);
                        if ($scope.onesmart.length > 1) {
                            $("#zncd_banner .dt-swiper-prev,#zncd_banner .dt-swiper-next").show()
                        } else {
                            $("#zncd_banner .dt-swiper-prev,#zncd_banner .dt-swiper-next").hide()
                        }
                    } else if (productData[i].position == 2) {
                        $scope.twosmart.push(productData[i]);
                        if ($scope.twosmart.length == 0) {
                            $('.shuam_three .bigs').hide();
                            $('.shuam_three').hide();
                            $('.rigt3').hide();
                        } else {
                            $('.shuam_three .bigs').show();
                            $('.shuam_three').show();
                            $('.rigt3').show();
                        }
                    } else {

                        $scope.threesmart.push(productData[i]);
                    }
                } else if (productData[i].subClassfyId == $scope.listgoodData[3].id) {
                    $scope.namef = $scope.listgoodData[3].name;
                    if (productData[i].position == 1) {
                        $scope.oneperipherals.push(productData[i]);
                        if ($scope.oneperipherals.length > 1) {
                            $("#gdws_banner .dt-swiper-prev,#gdws_banner .dt-swiper-next").show()
                        } else {
                            $("#gdws_banner .dt-swiper-prev,#gdws_banner .dt-swiper-next").hide()
                        }

                    } else if (productData[i].position == 2) {
                        $scope.twoperipherals.push(productData[i]);
                        if ($scope.twoperipherals.length == 0) {
                            $('.shuam_four .bigs').hide();
                            $('.shuam_four').hide();
                            $('.rigt5').hide();
                        } else {
                            $('.shuam_four .bigs').show();
                            $('.shuam_four').show();
                            $('.rigt5').show();
                        }
                    } else {
                        $scope.threeperipherals.push(productData[i]);
                    }
                } else if (productData[i].subClassfyId == $scope.listgoodData[0].id) {
                    $scope.nameg = $scope.listgoodData[0].name;
                    if (productData[i].position == 1) {
                        $scope.onegame.push(productData[i]);
                        if ($scope.onegame.length > 1) {
                            $("#dwyx_banner .dt-swiper-prev,#dwyx_banner .dt-swiper-next").show()
                        } else {
                            $("#dwyx_banner .dt-swiper-prev,#dwyx_banner .dt-swiper-next").hide()
                        }

                    } else if (productData[i].position == 2) {
                        $scope.twogame.push(productData[i]);
                        if ($scope.twogame.length == 0) {
                            $('.shuam_one .bigs').hide();
                            $('.shuam_one').hide();
                            $('.rigt4').hide();
                        } else {
                            $('.shuam_one .bigs').show();
                            $('.shuam_one').show();
                            $('.rigt4').show();
                        }
                    } else {
                        $scope.threegame.push(productData[i]);
                    }

                } else if (productData[i].subClassfyId == $scope.listgoodData[1].id) {
                    $scope.nameh = $scope.listgoodData[1].name;
                    if (productData[i].position == 1) {
                        $scope.onestudy.push(productData[i]);
                        if ($scope.onestudy.length > 1) {
                            $("#dzjy_banner .dt-swiper-prev,#dzjy_banner .dt-swiper-next").show()
                        } else {
                            $("#dzjy_banner .dt-swiper-prev,#dzjy_banner .dt-swiper-next").hide()
                        }

                    } else if (productData[i].position == 2) {
                        $scope.twostudy.push(productData[i]);
                        if ($scope.twostudy.length == 0) {
                            $('.shuam_two .bigs').hide();
                            $('.shuam_two').hide();
                            $('.rigt2').hide();
                        } else {
                            $('.shuam_two .bigs').show();
                            $('.shuam_two').show();
                            $('.rigt2').show();
                        }

                    } else {
                        $scope.threestudy.push(productData[i]);

                    }
                }
            }
            $scope.product = function(typeId, brandId) {
                gotoDetails(typeId, brandId);
            }
        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
})

function gotoDetails(typeId, brandId) {
    if (typeId != "" && brandId != "") {
        window.location.href = "details.html?typeId=" + typeId + "&brandId=" + brandId;
        // window.open("details.html?typeId=" + typeId + "&brandId=" + brandId);
    } else {
        window.location.href = "";
    }
}
app.controller("shumaCtrl", function($scope) {
    $scope.gotoMore = function(brandId, classifyId) {
        if (brandId != "" && classifyId != "") {
            window.location.href = "more.html?brandId=" + brandId + "&classifyId=" + classifyId + "&brandAct=3";
        } else {
            alert("Sản phẩm không tồn tại！");
            window.location.href = "";
        }
    }
    $scope.gotoMore1 = function(classifyId) {
        if (classifyId != "") {
            window.location.href = "more.html?brandId=" + "&classifyId=" + classifyId + "&brandAct=3";
        } else {
            alert("Sản phẩm không tồn tại！");
            window.location.href = "";
        }
    }
})