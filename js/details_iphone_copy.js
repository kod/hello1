/*Jquery*/
$(".clickLi").on("click", function() {
    $(".clickLi").each(function() {
        $(this).removeClass("act")
    });
    $(this).addClass("act")

});

/*Angular*/

var nowTypeId = "5";

var app = angular.module('detailsApp', []);
app.filter('priceFormat', function() { //可以注入依赖
    return F._priceFormat;
});

//截取Url里面的参数   
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串  
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        //alert(str);  
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

var request = new Object();
request = GetRequest();

var typeId = request['typeId'];
var brandId = request['brandId'];


//详情页面数据请求接口      
app.controller('detailsCtrl', function($scope, $http, $filter) {

    var funId = localStorage.getItem("funId");

    if (funId) {
        F._userGetCollection({
            msisdn: localStorage.getItem("msisdn"),
        }, function(ret) {
            if (!ret) return false;

            if (ret.code !== 10000) return false;

            var collData = ret.details;

            if (collData == 0 || collData == null || collData == '' || collData == undefined) {

                localStorage.setItem('funId=' + funId + 'brandId=' + brandId, 0)
            } else {
                localStorage.setItem('funId=' + funId + 'brandId=' + brandId, 0);
                for (var i = 0; i < collData.length; i++) {

                    var brandid = collData[i].brandId;

                    if (brandId == brandid) {

                        localStorage.setItem('funId=' + funId + 'brandId=' + brandId, 1);
                    } else {

                    }
                }

            }
        });
    }

    $scope.a = "18";
    //ajax
    var url = F._getProductDetailInfo_cd;
    var ajax = new ajaxClass($http, url, "GET");

    var data = {
        appid: '2016102146225135',
        method: 'fun.brand.query',
        charset: 'utf-8',
        signtype: '',
        encrypt: '',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        brand_id: brandId
    };
    ajax.params = getMd5Code(data, "commodityKey");

    ajax.successCallback = function(res) {
        /*tcy*/
        var colorChange = function(item, image) {
            if (!image) return false;
            $('.swiper-slide-img').eq(0).css('background-image','url('+ image +')')
            swiper.slideTo(0);

            if ($scope.propertiesDetail[0].image == "") {
                $scope.nowProductDetail[1] = item.id;
            } else {
                $scope.nowProductDetail[0] = item.id;
            }  

            getPrice($scope.nowProductDetail);
            $scope.nowUrl = item.image;

            $scope.nowOneInfo = item.value;

            $(".swiper-slide").css('transform', 'translate3d(0px, 0px, 0px)').css('opacity', '1')
            $(".swiper-slide:nth-child(1) img").attr('src', item.image).parent().addClass('swiper-slide-active').css('transform', 'translate3d(0px, 0px, 0px)').css('opacity', '1');
        }
        /*tcy*/

        var brandDetail = res.data.brand_detail;
        var productDetail = res.data.product_detail;
        var propertiesDetail = res.data.properties_detail;
        var resCode = res.data.code;

        if (resCode == 10000) {

            //创建用户浏览记录session
            var funId = localStorage.getItem("funId");
            var sc_status = localStorage.getItem('funId=' + funId + 'brandId=' + brandId);

            if (sc_status == null || sc_status == 0) {
                $("#shoucangImg").attr("src", "../img/sc (1).jpg");
            } else {
                $("#shoucangImg").attr("src", "../img/sc_ok.jpg");
            }

            var productDetailObj = res.data.product_detail[0];
            if (productDetailObj != undefined) {
                if (window.localStorage) {
                    var funid = localStorage.getItem("funId");
                    userScanLocalStorage(funid, productDetailObj);
                }
            }

            userScanSession(JSON.stringify(productDetailObj));
            $scope.brandDetail = brandDetail;
            $scope.productDetail = productDetail;
            $scope.shoucang = brandDetail.name;
            $scope.type_id = brandDetail.typeId;
            for (var i = 0; i < $scope.productDetail.length; i++) {

                var propertiesIds_str = productDetail[i].propertiesIds;
                if (isNaN(propertiesIds_str)) {
                    var propertiesIds_array = propertiesIds_str.split("-");
                    if (propertiesIds_array.length == 2) {
                        $scope.productDetail[i].fpropertiesIds = propertiesIds_array[0];
                        $scope.productDetail[i].spropertiesIds = propertiesIds_array[1];
                    } else if (propertiesIds_array.length == 3) {
                        $scope.productDetail[i].fpropertiesIds = propertiesIds_array[0];
                        $scope.productDetail[i].spropertiesIds = propertiesIds_array[1];
                        $scope.productDetail[i].tpropertiesIds = propertiesIds_array[2];
                    }
                } else {
                    var propertiesIds_array = propertiesIds_str;
                    $scope.productDetail[i].fpropertiesIds = propertiesIds_array;
                }
            }


            $scope.propertiesDetail = propertiesDetail;

            if ($scope.productDetail.length > 0) {
                //产品属性判断 1显示电脑  2其他产品
                if ($scope.productDetail.length > 0) {
                    var productDetailPropertiesIds = $scope.productDetail[0].propertiesIds;
                    var propertiesIdsNum = productDetailPropertiesIds.split("-");

                } else {
                    var propertiesIdsNum = [1];
                }

                switch (propertiesIdsNum.length) {
                    case 1:

                        $("#diannao").css("display", "block");
                        $("#shouji").css("display", "none");
                        $("#two").css("display", "none");

                        $scope.nowProductDetail = propertiesIdsNum[0];
                        $scope.nowProductClass = [];
                        $scope.f = propertiesIdsNum[0];
                        for (var i = 0; i < $scope.productDetail.length; i++) {


                            if ($scope.productDetail[i].typeId == typeId) {
                                $scope.nowProductClass.push($scope.productDetail[i]);
                            }
                        }

                        initPrice($scope.nowProductDetail);
                        $scope.getImgUrls = function() {
                            var url = $scope.nowProductClass[0].imageUrls;
                            var resUrl = url.split("|");
                            $scope.imgUrls = [];
                            for (var i = 0; i < resUrl.length; i++) { //resUrl.length
                                $scope.imgUrls.push(resUrl[i]);
                                if (i == 5) {
                                    break;
                                }
                            }
                            if (resUrl.length > 4) {
                                $('.swiper-pagination').addClass('otherswiper');
                            } else {
                                $('.swiper-pagination').removeClass('otherswiper');
                            }

                        }
                        $scope.getImgUrls();
                        $scope.classify = function(obj) {

                            return true;
                        }

                        //颜色按钮点击事件
                        $scope.colorChange = colorChange;

                        $scope.change = function(item) {
                            $scope.nowProductDetail[0] = item.id;

                            getPrice($scope.nowProductDetail);

                            $scope.nowUrl = item.image;
                            $scope.nowOneInfo = item.value;
                            $scope.nowTwoInfo = "";
                            $scope.nowThreeInfo = "";
                            $(".swiper-slide").css('transform', 'translate3d(0px, 0px, 0px)').css('opacity', '1')
                            $(".swiper-slide:nth-child(1) img").attr('src', item.image).parent().addClass('swiper-slide-active').css('transform', 'translate3d(0px, 0px, 0px)').css('opacity', '1');
                        }


                        break;

                    case 2:

                        $("#diannao").css("display", "none");
                        $("#shouji").css("display", "none");
                        $("#two").css("display", "block");

                        $scope.propertiesDetailName = [];

                        var propertiesIds = $scope.productDetail[0].propertiesIds;

                        //alert(propertiesIds);
                        var propertiesIdsArray = propertiesIds.split('-');

                        for (var i = 0; i < propertiesIdsArray.length; i++) {
                            for (var j = 0; j < $scope.propertiesDetail.length; j++) {
                                if (propertiesIdsArray[i] == $scope.propertiesDetail[j].id) {
                                    //alert($scope.propertiesDetail[j].name);
                                    $scope.propertiesDetailName.push($scope.propertiesDetail[j].name);
                                }
                            }
                        }
                        $scope.propertiesDetails = [];
                        $scope.propertiesDetailss = [];
                        for (var t = 0; t < $scope.propertiesDetail.length; t++) {
                            //alert($scope.propertiesDetail[t].name);
                            if ($scope.propertiesDetail[t].name == $scope.propertiesDetailName[0]) {
                                //alert($scope.propertiesDetailName[0])
                                $scope.propertiesDetails.push($scope.propertiesDetail[t]);
                            } else if ($scope.propertiesDetail[t].name == $scope.propertiesDetailName[1]) {
                                $scope.propertiesDetailss.push($scope.propertiesDetail[t]);

                            }

                        }
                        if ($scope.propertiesDetail[0].image == "") {
                            $('.pob').show();
                            $('.pob-in').hide();
                            $('.pobb').show();
                            $('.pobb-in').hide();
                            $('.ppob').hide();
                            $('.ppobb').hide();
                            $scope.f = propertiesIdsArray[1];
                            $scope.s = propertiesIdsArray[0];

                        } else {
                            $('.pob-in').show();
                            $('.pob').hide();
                            $('.pobb-in').show();
                            $('.pobb').hide();
                            $('.ppob').hide();
                            $('.ppobb').hide();
                            $scope.f = propertiesIdsArray[0];
                            $scope.s = propertiesIdsArray[1];
                            //$scope.propertiesDetail = propertiesDetail;
                        }
                        if ($scope.propertiesDetailName[1] == $scope.propertiesDetail[0].name) {
                            $('.ppob').show()
                            $('.pob-in').hide();
                            $('.pob').hide();
                            $('.ppobb').show()
                            $('.pobb-in').hide();
                            $('.pobb').hide();
                            $scope.f = propertiesIdsArray[0];
                            $scope.s = propertiesIdsArray[1];
                        }

                        $scope.nowProductDetail = propertiesIdsArray;



                        $scope.nowProductClass = [];
                        for (var i = 0; i < $scope.productDetail.length; i++) {
                            if ($scope.productDetail[i].typeId == typeId) {
                                $scope.nowProductClass.push($scope.productDetail[i]);
                            }
                        }


                        initPrice(propertiesIds);
                        //轮播图ImageUrl
                        $scope.getImgUrls = function() {
                            var url = $scope.nowProductClass[0].imageUrls;
                            var resUrl = url.split("|");
                            $scope.imgUrls = [];
                            for (var i = 0; i < resUrl.length; i++) { //resUrl.length
                                $scope.imgUrls.push(resUrl[i]);
                                if (i == 5) {
                                    break;
                                }
                            }
                            if (resUrl.length > 4) {
                                $('.swiper-pagination').addClass('otherswiper');
                            } else {
                                $('.swiper-pagination').removeClass('otherswiper');
                            }

                        }
                        $scope.getImgUrls();

                        $scope.sizeChanges = function(item) {
                            $scope.nowProductDetail[1] = item.id;
                            getPrice($scope.nowProductDetail);
                            $scope.nowUrl = item.image;
                            $scope.nowOneInfo = item.value;
                        }
                        //颜色按钮点击事件
                        $scope.colorChange = colorChange;

                        $scope.colorChanges = function(item, image) {
                            if (!image) return false;
                            $('.swiper-slide-img').eq(0).css('background-image','url('+ image +')')
                            swiper.slideTo(0);

                            $scope.nowProductDetail[0] = item.id;
                            getPrice($scope.nowProductDetail);

                            $scope.nowTwoInfo = item.value;
                            $scope.nowThreeInfo = "";
                            $scope.nowUrl = item.image;

                            $scope.nowOneInfo = item.value;

                            $(".swiper-slide").css('transform', 'translate3d(0px, 0px, 0px)').css('opacity', '1')
                            $(".swiper-slide:nth-child(1) img").attr('src', item.image).parent().addClass('swiper-slide-active').css('transform', 'translate3d(0px, 0px, 0px)').css('opacity', '1');

                        }
                        //内存按钮点击事件
                        $scope.sizeChange = function(item) {
                            if ($scope.propertiesDetail[0].image == "") {
                                $scope.nowProductDetail[0] = item.id;
                            } else {
                                $scope.nowProductDetail[1] = item.id;
                            }

                            getPrice($scope.nowProductDetail);

                            $scope.nowTwoInfo = item.value;
                            $scope.nowThreeInfo = "";
                        }


                        break;

                    case 3:

                        $("#shouji").css("display", "block");
                        $("#diannao").css("display", "none");
                        $("#two").css("display", "none");


                        $scope.propertiesDetailName = [];

                        var propertiesIds = $scope.productDetail[0].propertiesIds;


                        var propertiesIdsArray = propertiesIds.split('-');

                        $scope.f = propertiesIdsArray[0];
                        $scope.s = propertiesIdsArray[1];
                        $scope.t = propertiesIdsArray[2];


                        for (var i = 0; i < propertiesIdsArray.length; i++) {
                            for (var j = 0; j < $scope.propertiesDetail.length; j++) {
                                if (propertiesIdsArray[i] == $scope.propertiesDetail[j].id) {
                                    $scope.propertiesDetailName.push($scope.propertiesDetail[j].name);
                                }
                            }
                        }
                        $scope.propertiesDetails = [];
                        $scope.propertiesDetailss = [];
                        $scope.propertiesDetailsss = [];
                        for (var t = 0; t < $scope.propertiesDetail.length; t++) {

                            if ($scope.propertiesDetail[t].name == $scope.propertiesDetailName[0]) {
                                $scope.propertiesDetails.push($scope.propertiesDetail[t]);
                            } else if ($scope.propertiesDetail[t].name == $scope.propertiesDetailName[1]) {
                                $scope.propertiesDetailss.push($scope.propertiesDetail[t]);
                            } else if ($scope.propertiesDetail[t].name == $scope.propertiesDetailName[2]) {
                                $scope.propertiesDetailsss.push($scope.propertiesDetail[t]);

                            }
                        }



                        var initProduct_propertiesIds = $scope.productDetail[0].propertiesIds;



                        $scope.nowProductDetail = [];
                        $scope.nowProductDetail = initProduct_propertiesIds.split("-");


                        //遍历相同类型的产品 type_id
                        $scope.nowProductClass = [];
                        for (var i = 0; i < $scope.productDetail.length; i++) {
                            if ($scope.productDetail[i].typeId == typeId) {
                                $scope.nowProductClass.push($scope.productDetail[i]);
                            }
                        }



                        var initProduct_propertiesIds = $scope.productDetail[0].propertiesIds;


                        //                  initPrice(initProduct_propertiesIds);

                        initPrice(initProduct_propertiesIds);
                        //轮播图ImageUrl
                        $scope.getImgUrls = function() {
                            var url = $scope.nowProductClass[0].imageUrls;
                            var resUrl = url.split("|");
                            $scope.imgUrls = [];
                            for (var i = 0; i < resUrl.length; i++) { //resUrl.length
                                $scope.imgUrls.push(resUrl[i]);
                                if (i == 5) {
                                    break;
                                }
                            }

                            if (resUrl.length > 4) {
                                $('.swiper-pagination').addClass('otherswiper');
                            } else {
                                $('.swiper-pagination').removeClass('otherswiper');
                            }

                        }
                        $scope.getImgUrls();
                        //颜色按钮点击事件

                        $scope.colorChange = function(item) {
                            color(item);
                        }

                        function color(obj) {

                            //              $scope.nowProductDetail[0] = item.id;
                            $scope.nowProductDetail[0] = obj.id;
                            getPrice($scope.nowProductDetail);
                            $scope.nowUrl = obj.image;
                            $scope.nowOneInfo = obj.value;
                            $(".swiper-slide").css('transform', 'translate3d(0px, 0px, 0px)').css('opacity', '1')
                            $(".swiper-slide:nth-child(1) img").attr('src', obj.image).parent().addClass('swiper-slide-active').css('transform', 'translate3d(0px, 0px, 0px)').css('opacity', '1');
                        }

                        //内存按钮点击事件
                        $scope.sizeChange = function(item) {
                            $scope.nowProductDetail[1] = item.id;

                            getPrice($scope.nowProductDetail);
                            $scope.nowTwoInfo = item.desc;
                        }
                        //运营商点击事件
                        $scope.telcoChange = function(item) {
                            $scope.nowProductDetail[2] = item.id;


                            getPrice($scope.nowProductDetail);
                            $scope.nowThreeInfo = item.value;

                        }

                        break;

                    case 4:
                        break;
                    default:
                        // TODO
                        break;
                }

                function getPrice(item) {

                    //数组转化为字符串
                    if (isNaN(item)) {
                        var str = item.join("-");
                        var nowPropertiesIds = str.split(",");

                    } else {
                        var nowPropertiesIds = item;

                    }

                    //输出价格

                    for (var i = 0; i < $scope.nowProductClass.length; i++) {

                        if (nowPropertiesIds == $scope.nowProductClass[i].propertiesIds) {
                            window.__goodsDetail = $scope.nowProductClass[i];
                            $('.vnd').show();
                            $scope.price = $scope.nowProductClass[i].price;
                            $scope.numbers = $scope.nowProductClass[i].numbers;

                            break;
                        } else {
                            $scope.price = "Đã hết hàng";
                            $scope.numbers = "0";
                            $('.vnd').hide();
                        }
                    }

                }

                function initPrice(item) {


                    if (isNaN(item)) {
                        var str = item;
                        var nowPropertiesIds = str.split(",");
                        var initPropertiesIdsArray = str.split("-");

                        if (initPropertiesIdsArray.length == 2) {

                            twoPropertiesIds();
                        } else if (initPropertiesIdsArray.length == 3) {

                            threePropertiesIds();
                        }
                    } else {
                        var nowPropertiesIds = item;

                        onePropertiesIds();
                    }

                    function threePropertiesIds() {

                        for (var i = 0; i < $scope.propertiesDetail.length; i++) {
                            if (initPropertiesIdsArray[0] == $scope.propertiesDetail[i].id) {

                                $scope.nowUrl = $scope.propertiesDetail[i].image;
                                $scope.nowOneInfo = $scope.propertiesDetail[i].value;
                            }
                            if (initPropertiesIdsArray[1] == $scope.propertiesDetail[i].id) {
                                $scope.nowTwoInfo = $scope.propertiesDetail[i].value;
                            }
                            if (initPropertiesIdsArray[2] == $scope.propertiesDetail[i].id) {
                                $scope.nowThreeInfo = $scope.propertiesDetail[i].value;
                            }
                        }
                    }

                    function twoPropertiesIds() {
                        if ($scope.propertiesDetail[0].image == "") {
                            for (var i = 0; i < $scope.propertiesDetail.length; i++) {
                                if (initPropertiesIdsArray[1] == $scope.propertiesDetail[i].id) {
                                    $scope.nowUrl = $scope.propertiesDetail[i].image;
                                    $scope.nowOneInfo = $scope.propertiesDetail[i].value;
                                }
                                if (initPropertiesIdsArray[0] == $scope.propertiesDetail[i].id) {
                                    $scope.nowTwoInfo = $scope.propertiesDetail[i].value;
                                }
                            }
                        } else {
                            for (var i = 0; i < $scope.propertiesDetail.length; i++) {
                                if (initPropertiesIdsArray[0] == $scope.propertiesDetail[i].id) {
                                    $scope.nowUrl = $scope.propertiesDetail[i].image;
                                    $scope.nowOneInfo = $scope.propertiesDetail[i].value;
                                }
                                if (initPropertiesIdsArray[1] == $scope.propertiesDetail[i].id) {
                                    $scope.nowTwoInfo = $scope.propertiesDetail[i].value;
                                }
                            }
                        }
                        if ($scope.propertiesDetailName[1] == $scope.propertiesDetail[0].name) {
                            for (var i = 0; i < $scope.propertiesDetail.length; i++) {
                                if (initPropertiesIdsArray[1] == $scope.propertiesDetail[i].id) {
                                    $scope.nowUrl = $scope.propertiesDetail[i].image;
                                    $scope.nowOneInfo = $scope.propertiesDetail[i].value;
                                }
                                if (initPropertiesIdsArray[0] == $scope.propertiesDetail[i].id) {
                                    $scope.nowTwoInfo = $scope.propertiesDetail[i].value;
                                }
                            }
                        }
                        $scope.nowThreeInfo = "";
                    }

                    function onePropertiesIds() {
                        for (var i = 0; i < $scope.propertiesDetail.length; i++) {
                            if (item == $scope.propertiesDetail[i].id) {
                                $scope.nowUrl = $scope.propertiesDetail[i].image;
                                $scope.nowOneInfo = $scope.propertiesDetail[i].value;
                            }
                        }
                        $scope.nowTwoInfo = "";
                        $scope.nowThreeInfo = "";
                    }



                    for (var i = 0; i < $scope.nowProductClass.length; i++) {

                        if (nowPropertiesIds == $scope.nowProductClass[i].propertiesIds) {
                            $('.vnd').show();
                            window.__goodsDetail = $scope.nowProductClass[i];
                            $scope.price = $scope.nowProductClass[i].price;
                            $scope.numbers = $scope.nowProductClass[i].numbers;
                            break;
                        } else {
                            $scope.price = "Đã hết hàng";
                            $scope.numbers = "0";
                            $('.vnd').hide();
                        }
                    }

                    $scope.shoucangClick = function() {
                        if (!F._isLogin()) return false;

                        var funId = localStorage.getItem("funId");
                        var sc_status = localStorage.getItem('funId=' + funId + 'brandId=' + brandId);
                        $('#shoucang').show();
                        if (sc_status == null || sc_status == 0) {

                            var msisdn_s = localStorage.getItem('msisdn');
                            if (funId == null || funId == "") {
                                window.location.href = "login.html"
                            } else {
                                var url = F._userAddCollection_uc;
                                var ajax = new ajaxClass($http, url, "POST");
                                var appId = "110";
                                var method = 'fun.uc.addcollection';
                                var charset = 'utf-8';
                                var funid = funId;

                                var msisdn = msisdn_s;
                                //              var funid = "VNQO1RVA7QUM";
                                //              var msisdn = localStorage.getItem("msisdn");

                                var brand_id = brandId;
                                var brand_name = $scope.shoucang;
                                var brand_desc = $scope.shoucang;
                                var type_id = $scope.type_id;
                                var brand_image = $scope.nowUrl;

                                var brand_price = $scope.price;
                                var Key = 'userKey';

                                var md5SigntypeStrig = "appId=" + appId + "&method=" + method + "&charset=" + charset + Key;
                                var signType = hex_md5(md5SigntypeStrig);


                                var md5EncryptStrig = "funid=" + funid + "&msisdn=" + msisdn + "&type_id=" + type_id + "&brand_id=" + brand_id + "&brand_name=" + brand_name + "&brand_desc=" + brand_desc + "&brand_image=" + brand_image + "&brand_price=" + brand_price + Key;
                                var encrypt = md5(md5EncryptStrig);


                                ajax.data = $.param({
                                    appId: appId,
                                    method: method,
                                    charset: charset,
                                    signType: signType,
                                    encrypt: encrypt,
                                    timestamp: '2016-09-21 03:07:50',
                                    version: '1.0',
                                    funid: funid,
                                    msisdn: msisdn,
                                    type_id: type_id,
                                    brand_id: brand_id,
                                    brand_desc: brand_desc,
                                    brand_name: brand_name,
                                    brand_image: brand_image,
                                    brand_price: brand_price

                                });
                                ajax.headers = {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                };

                                ajax.successCallback = function(res) {
                                    $('#shoucang').hide();


                                    if (res.data.code = 10000) {
                                        $("#shoucangImg").attr("src", "../img/sc_ok.jpg");
                                        localStorage.setItem('funId=' + funId + 'brandId=' + brandId, 1);
                                    }
                                };
                                ajax.failureCallback = function(res) {};
                                ajax.requestData();
                            }
                        } else {

                            var url = F._userCancelCollection_uc;
                            var ajax = new ajaxClass($http, url, "POST");
                            var appId = "110";
                            var method = 'fun.uc.cancelcollection';
                            var charset = 'utf-8';
                            var funid = localStorage.getItem("funId");
                            var msisdn = localStorage.getItem('msisdn');

                            var brand_id = brandId;
                            var Key = 'userKey';

                            var md5SigntypeStrig = "appId=" + appId + "&method=" + method + "&charset=" + charset + Key;
                            var signType = hex_md5(md5SigntypeStrig);


                            var md5EncryptStrig = "funid=" + funid + "&msisdn=" + msisdn + "&brand_id=" + brand_id + Key;
                            var encrypt = md5(md5EncryptStrig);


                            ajax.data = $.param({
                                appId: appId,
                                method: method,
                                charset: charset,
                                signType: signType,
                                encrypt: encrypt,
                                timestamp: '2016-09-21 03:07:50',
                                version: '1.0',
                                funid: funid,
                                msisdn: msisdn,
                                brand_id: brand_id,
                            });
                            ajax.headers = {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            };

                            ajax.successCallback = function(res) {
                                $('#shoucang').hide();


                                if (res.data.code = 10000) {
                                    localStorage.setItem('funId=' + funId + 'brandId=' + brandId, 0);
                                    $("#shoucangImg").attr("src", "../img/sc (1).jpg")
                                }
                            };
                            ajax.failureCallback = function(res) {

                            };
                            ajax.requestData();
                        }
                    }
                }

            } else {
                alert("Đã hết hàng")
                window.location.href = document.referrer;
            }
        } else {
            //返回码错误
        }
    };
    ajax.failureCallback = function(res) {};
    ajax.requestData();



}); //controllr

/*获取评论接口*/
app.controller("commentCtrls", function($scope, $http, $filter) {

    var appId = localStorage.getItem("funId");
    var method = "fun.evaluation.query";
    var charset = "utf-8";
    var brand_id = brandId;
    var msisdn = "";

    var pagesize = "5";
    var currentPage = "1";
    var Key = "commodityKey";
    var currentPage = currentPage;

    var md5SigntypeStrig = "appId=" + appId + "&method=" + method + "&charset=" + charset + Key;
    var signType = hex_md5(md5SigntypeStrig);


    var md5EncryptStrig = "brand_id=" + brand_id + "&msisdn=" + msisdn + "&pagesize=" + pagesize + "&currentPage=" + currentPage + Key;
    var encrypt = hex_md5(md5EncryptStrig);




    var url = F._getEvaluationInfo_cd;
    var ajax = new ajaxClass($http, url, "GET");

    ajax.params = {
        appId: appId,
        method: method,
        charset: charset,
        signType: signType,
        encrypt: encrypt,
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        brand_id: brand_id,
        msisdn: msisdn,
        pagesize: pagesize,
        currentPage: currentPage
    };
    //      ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

    ajax.successCallback = function(res) {



        var resCode = res.data.code;
        var detail = res.data.detail;

        if (resCode == 10000) {
            $(".top-fen").css("display", "block");


            $scope.totalNumber = res.data.totalNumber;

            //$scope.userComment = detail;



        } else {
            $("#page").css("display", "none");
        }
    }
    ajax.failureCallback = function(res) {};
    ajax.requestData();


})
app.filter('reverse', function() { //可以注入依赖
    return function(text) {
        //alert(text.length);
        var newTelVal = '';
        if (text.length <= 2) {
            for (var i = 0; i < text.length; i++) {
                if (i < 0 || i >= text.length) {
                    newTelVal += text[i];
                } else {
                    newTelVal += '*';
                }
            }
            text = newTelVal;
            return text.split("").join("");
        } else if (text.length > 2 && text.length < 6) {
            for (var i = 0; i < text.length; i++) {
                if (i < 1 || i >= text.length) {
                    newTelVal += text[i];
                } else {
                    newTelVal += '*';
                }
            }
            text = newTelVal;
            return text.split("").join("");
        } else {
            for (var i = 0; i < text.length; i++) {
                if (i < 1 || i >= text.length - 1) {
                    newTelVal += text[i];
                } else {
                    newTelVal += '*';
                }
            }
            text = newTelVal;
            return text.split("").join("");
        }
        //  return text.split("").reverse().join("*");
    }
});

app.controller("commentCtrl", function($scope, $http, $filter) {

    $scope.nowPage = 1;
    var appId = localStorage.getItem("funId");
    var method = "fun.evaluation.query";
    var charset = "utf-8";
    var brand_id = brandId;
    var msisdn = "";
    var pagesize = "5";
    var currentPage = "1";
    var Key = "commodityKey";

    var currentPage = currentPage;

    var md5SigntypeStrig = "appId=" + appId + "&method=" + method + "&charset=" + charset + Key;
    var signType = hex_md5(md5SigntypeStrig);


    var md5EncryptStrig = "brand_id=" + brand_id + "&msisdn=" + msisdn + "&pagesize=" + pagesize + "&currentPage=" + currentPage + Key;
    var encrypt = hex_md5(md5EncryptStrig);




    var url = F._getEvaluationInfo_cd;
    var ajax = new ajaxClass($http, url, "GET");

    ajax.params = {
        appId: appId,
        method: method,
        charset: charset,
        signType: signType,
        encrypt: encrypt,
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        brand_id: brand_id,
        msisdn: msisdn,
        pagesize: pagesize,
        currentPage: currentPage
    };
    //      ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

    ajax.successCallback = function(res) {



        var resCode = res.data.code;
        var detail = res.data.detail;

        if (resCode == 10000) {
            $(".top-fen").css("display", "block");
            $scope.userComment = detail;
            if ($scope.userComment.length > 0) {




                $scope.average = res.data.average;
                if (res.data.average == 0) {
                    $('#xinxin').append('');
                } else if (res.data.average < 1 && res.data.average > 0) {
                    $('#xinxin').append("<img src='../img/f (9).jpg' alt='' />");
                } else if (res.data.average == 1) {
                    $('#xinxin').append("<img src='../img/f (8).jpg' alt='' />");
                } else if (res.data.average < 2 && res.data.average > 1) {
                    $('#xinxin').append("<img src='../img/f (8).jpg' alt='' /> <img src='../img/f (9).jpg' alt='' />");
                } else if (res.data.average == 2) {
                    $('#xinxin').append("<img src='../img/f (8).jpg' alt='' /> <img src='../img/f (8).jpg' alt='' />");
                } else if (res.data.average < 3 && res.data.average > 2) {
                    $('#xinxin').append("<img src='../img/f (8).jpg' alt='' /> <img src='../img/f (8).jpg' alt='' /> <img src='../img/f (9).jpg' alt='' />");
                } else if (res.data.average == 3) {
                    $('#xinxin').append("<img src='../img/f (8).jpg' alt='' /> <img src='../img/f (8).jpg' alt='' /> <img src='../img/f (8).jpg' alt='' />");
                } else if (res.data.average < 4 && res.data.average > 3) {
                    $('#xinxin').append("<img src='../img/f (8).jpg' alt='' /> <img src='../img/f (8).jpg' alt='' /> <img src='../img/f (8).jpg' alt='' /> <img src='../img/f (9).jpg' alt='' />");
                } else if (res.data.average == 4) {
                    $('#xinxin').append("<img src='../img/f (8).jpg' alt='' /> <img src='../img/f (8).jpg' alt='' /> <img src='../img/f (8).jpg' alt='' /> <img src='../img/f (8).jpg' alt='' />");
                } else if (res.data.average < 5 && res.data.average > 4) {
                    $('#xinxin').append("<img src='../img/f (8).jpg' alt='' /> <img src='../img/f (8).jpg' alt='' /> <img src='../img/f (8).jpg' alt='' /> <img src='../img/f (8).jpg' alt='' /> <img src='../img/f (9).jpg' alt='' />");
                } else {
                    $('#xinxin').append("<img src='../img/f (8).jpg' alt='' /> <img src='../img/f (8).jpg' alt='' /> <img src='../img/f (8).jpg' alt='' /> <img src='../img/f (8).jpg' alt='' /> <img src='../img/f (8).jpg' alt='' />");

                }

                //$scope.totalNumber = res.data.totalNumber;
                //$scope.totalPage = res.data.totalPage;                
            } else {
                $("#page").css("display", "none");
                $scope.totalNumber = 0;
                $(".top-fen").css("display", "none");
                $(".top-nolist").css("display", "block");
            }
        } else {
            $("#page").css("display", "none");
        }
    }
    ajax.failureCallback = function(res) {};
    ajax.requestData();





})

app.controller("commentCtrlcomm", function($scope, $http, $filter) {

    $scope.nowPage = 1;
    var appId = localStorage.getItem("funId");
    var method = "fun.evaluation.query";
    var charset = "utf-8";
    var brand_id = brandId;
    var msisdn = "";
    var pagesize = "5";
    var currentPage = "1";
    var Key = "commodityKey";

    reqAjax(1); //页面加载获取数据
    /*下一页*/
    $scope.nextPage = function() {
        currentPage++;

        $scope.nowPage = currentPage;
        reqAjax(currentPage);
        $('#lastPagebtn').css({
            'background': '#0075F6'
        }).attr('disabled', false)
    }
    /*上一页*/
    $scope.lastPage = function() {
        currentPage--;

        $scope.nowPage = currentPage;
        reqAjax(currentPage);

        $('#nextPagebtn').css({
            'background': '#0075F6'
        }).attr('disabled', false)
    }
    //跳转当前页
    $scope.gotoPage = function(num) {

        currentPage = num;
        reqAjax(currentPage);
    }


    function reqAjax(currentPage) {

        var currentPage = currentPage;

        var md5SigntypeStrig = "appId=" + appId + "&method=" + method + "&charset=" + charset + Key;
        var signType = hex_md5(md5SigntypeStrig);


        var md5EncryptStrig = "brand_id=" + brand_id + "&msisdn=" + msisdn + "&pagesize=" + pagesize + "&currentPage=" + currentPage + Key;
        var encrypt = hex_md5(md5EncryptStrig);




        var url = F._getEvaluationInfo_cd;
        var ajax = new ajaxClass($http, url, "GET");

        ajax.params = {
            appId: appId,
            method: method,
            charset: charset,
            signType: signType,
            encrypt: encrypt,
            timestamp: '2017-09-06 11:30:50',
            version: '1.0',
            brand_id: brand_id,
            msisdn: msisdn,
            pagesize: pagesize,
            currentPage: currentPage
        };
        //      ajax.params  = getMd5Code(data,"commodityKey");//格式化ajax请求数据   commodityKey->表示系统类型

        ajax.successCallback = function(res) {



            var resCode = res.data.code;
            var detail = res.data.detail;

            if (resCode == 10000) {
                $scope.userComment = detail;

                if ($scope.userComment.length > 0) {
                    for (var i = 0; i < $scope.userComment.length; i++) {
                        //$scope.user=$scope.userComment[i].score;
                        var url = $scope.userComment[i].imageUrls;
                        var resUrl = url.split("|");
                        $scope.userComment[i].userImg = [];

                        for (var j = 0; j < resUrl.length; j++) {
                            var imgObj = {
                                'urlName': "urlName",
                                url: resUrl[j]
                            }
                            $scope.userComment[i].userImg.push(imgObj);
                        }
                    }





                    $scope.average = res.data.average;

                    //$scope.totalNumber = res.data.totalNumber;
                    $scope.totalPage = res.data.totalPage;

                    if ($scope.totalPage == 1) {
                        $("#nextPagebtn").attr("disabled", true);
                        $("#nextPagebtn").css("background", "#d7d7d7");
                        $("#lastPagebtn").attr("disabled", true);
                        $("#lastPagebtn").css("background", "#d7d7d7");
                    } else {
                        if (currentPage <= 1) {
                            $("#lastPagebtn").attr("disabled", true);
                            $("#lastPagebtn").css("background", "#d7d7d7");
                            $("#nextPagebtn").attr("disabled", false);
                            $("#nextPagebtn").css("background", "#0075F6");
                        } else if (currentPage >= $scope.totalPage) {
                            $("#nextPagebtn").attr("disabled", true);
                            $("#nextPagebtn").css("background", "#d7d7d7");
                            $("#lastPagebtn").attr("disabled", false);
                            $("#lastPagebtn").css("background", "#0075F6");
                        }
                    }
                } else {
                    $("#page").css("display", "none");
                    $scope.totalNumber = 0;
                    $(".top_comm").css("display", "none");
                    $(".top-nolist").css("display", "block");
                }
            } else {
                $("#page").css("display", "none");
            }
        }
        ajax.failureCallback = function(res) {};
        ajax.requestData();
    }


    $scope.changePic = function($event) {
        var img = $event.srcElement || $event.target;
        angular.element("#bigimage")[0].src = img.src;
        angular.element("#js-imgview")[0].style.display = "block";
        angular.element("#js-imgview-mask")[0].style.display = "block";
    }
    $scope.closePic = function() {

        angular.element("#js-imgview")[0].style.display = "none";
        angular.element("#js-imgview-mask")[0].style.display = "none";

    }


})

//app.filter('ttnumber', function() { //可以注入依赖
//      
//      return function(text) {
//          var overlists=$('#people .li').size();
//        for(var t=0;t<overlists;t++){
//          if(text<1){
//              
//              //$('.ttt').css("display","none")
//              $(".tt0").css("display","block");
//              
//          }else if(text==1){
//              //$('.ttt').css("display","none")
//              $(".tt1").css("display","block");
//              
//              
//          }else if(text>1&&text<2){
//              //$('.ttt').css("display","none")
//              $(".tt2").css("display","block");
//              
//              
//          }else if(text==2){
//              //$('.ttt').css("display","none")
//              $(".tt3").css("display","block");
//              
//              
//          }else if(text>2&&text<3){
//              //$('.ttt').css("display","none")
//              $(".tt4").css("display","block");
//              
//              
//          }else if(text==3){
//              //$('.ttt').css("display","none")
//              $(".tt5").css("display","block");
//              
//          }else if(text>3&&text<4){
//              //$('.ttt').css("display","none")
//              $(".tt6").css("display","block");
//              
//          }else if(text==4){
//              //$('.ttt').css("display","none")
//              $(".tt7").css("display","block");
//              
//              
//          }else if(text>4&&text<5){
//              //$('.ttt').css("display","none")
//              $(".tt8").css("display","block");
//              
//              
//          }else{
//              //$('.ttt').css("display","none")
//              $(".tt9").css("display","block");   
//              
//          }
//       }
//      }
//})


//获取收藏接口
app.controller('collcetionCtrl', function($scope, $http, $filter) {

})
app.controller('instalmentCtrl', function($scope, $http, $filter) {

    $scope.paymentNum = "0.5";

    $scope.$watch('paymentNum', function(newValue, oldValue) {

        if (newValue == 1.0) {
            $(".fenqiNumBtn button").attr("disabled", true).addClass('actives')
            $('.moneryIcon').hide();
            $scope.resPrice = $scope.price;
        } else {
            if ($(".fenqiNumBtn button:last-child").is('.b_active') == false) {

                $(".fenqiNumBtn button:last-child").removeClass('b_active');

            } else {
                $(".fenqiNumBtn button:last-child").addClass('b_active');

            }

            $(".fenqiNumBtn button").attr("disabled", false).removeClass('actives')
            $('.moneryIcon').show();
            fenqiAjax($scope.price, newValue, $scope.fenqiNum);
        }
    }, true);

    $scope.fenqiNum = "12";
    $scope.fenqi = function(num) {
        $scope.fenqiNum = num;

        var price = $scope.price;

    }
    $scope.$watch('fenqiNum', function(newValue, oldValue) {

        fenqiAjax($scope.price, $scope.paymentNum, newValue);

    }, true);
    $scope.$watch('price', function(newValue, oldValue) {

        fenqiAjax(newValue, $scope.paymentNum, $scope.fenqiNum);
    }, true);

    //  获取分期金额信息接口
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
        var encrypt = md5(md5EncryptStrig);




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
                if (payrate == 1.0) {

                    $scope.resPrice = $scope.price;
                } else {
                    $scope.resPrice = res.data.details[detailsArrayString][0].interest + res.data.details[detailsArrayString][0].principal;
                }


                //  分期金额
                $('table tbody').html('');
                $scope.information = function() {
                    $('table tbody').html('');
                    var fenqi = JSON.stringify(res.data.details);
                    for (i = 1; i < res.data.details[detailsArrayString].length + 1; i++) {
                        $('table tbody').append("<tr><td>" + i + " Số kỳ</td><td>" + F._priceFormat(res.data.details[detailsArrayString][i - 1].principal) + " VND</td><td>" + F._priceFormat(res.data.details[detailsArrayString][i - 1].interest) + " VND</td></tr>");
                    }
                }
            }
        };
        ajax.failureCallback = function(res) {

        };
        ajax.requestData();
    }

    $scope.gotoPay = function() {
        var fenqiNum = $scope.fenqiNum;
        var price = $scope.price;
        var paymentNum = $scope.paymentNum;
        var buyNum = 1;

        var imgUrl = $scope.nowUrl;
        var productInfo = $scope.brandDetail.name + " " + $scope.nowOneInfo + " " + $scope.nowTwoInfo + " " + $scope.nowThreeInfo;


        if (!isNaN(price) && price > 0 && fenqiNum != "" && !isNaN(price)) {
            var funId = localStorage.getItem("funId");
            if (funId != "" && funId != null) {
                payInfo('1', imgUrl, productInfo, buyNum, price, fenqiNum, paymentNum, window.__goodsDetail);
                window.location.href = "pay.html";
            } else {
                window.location.href = "login.html";
            }
        } else {
            //alert("请选择商品类型!");
        }
    }
})