var app = angular.module("moreApp", []);
app.filter('priceFormat', function() { //可以注入依赖
    return F._priceFormat;
});
F.query = F._hrefUtils.parse().query;
F.currentPage = F.query.page || 1;

app.controller("moreCtrl", function($scope, $http) {

    /*tcy -start-*/
    F.parse = F._hrefUtils.parse();
    F.parent_id = '0';
    F.classfy_id = '0';
    F.sub_classfy_id = '0';
    F.third_classfy_id = '0';
    F.pagesize = '8';

    function getAllProductInfo(params, callback) {

        var loading = new F._loading();

        if (params.parent_id !== undefined) F.parent_id = params.parent_id;
        if (params.classfy_id !== undefined) F.classfy_id = params.classfy_id;
        if (params.sub_classfy_id !== undefined) F.sub_classfy_id = params.sub_classfy_id;
        if (params.third_classfy_id !== undefined) F.third_classfy_id = params.third_classfy_id;
        if (params.pagesize !== undefined) F.pagesize = params.pagesize;
        if (!params.currentPage) F.currentPage = 1;

        params.parent_id = F.parent_id;
        params.classfy_id = params.classfy_id ? params.classfy_id : F.classfy_id;
        params.sub_classfy_id = params.sub_classfy_id ? params.sub_classfy_id : F.sub_classfy_id;
        params.third_classfy_id = params.third_classfy_id ? params.third_classfy_id : F.third_classfy_id;
        params.pagesize = params.pagesize ? params.pagesize : F.pagesize;
        params.currentPage = params.currentPage ? params.currentPage : F.currentPage;


        if (!params._noPage) {
            F._setUrl('page', params.currentPage);
            F._setUrl('classifyId', params.classfy_id);
            F._setUrl('brandAct', params.parent_id);
        }


        var Key = 'commodityKey';

        var appId = localStorage.getItem("funId");
        var method = "fun.product.query";
        var charset = 'utf-8';
        var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
        var version = '1.0';

        var parent_id = params.parent_id;
        var classfy_id = params.classfy_id;
        var sub_classfy_id = params.sub_classfy_id;
        var third_classfy_id = params.third_classfy_id;
        var pagesize = params.pagesize;
        var currentPage = params.currentPage;

        var md5SigntypeStrig = '';
        md5SigntypeStrig += "appId=" + appId;
        md5SigntypeStrig += "&method=" + method;
        md5SigntypeStrig += "&charset=" + charset;
        md5SigntypeStrig += Key;
        var signType = md5(md5SigntypeStrig);

        var md5EncryptStrig = '';
        md5EncryptStrig += "parent_id=" + parent_id;
        md5EncryptStrig += "&classfy_id=" + classfy_id;
        md5EncryptStrig += "&sub_classfy_id=" + sub_classfy_id;
        md5EncryptStrig += "&third_classfy_id=" + third_classfy_id;
        md5EncryptStrig += "&pagesize=" + pagesize;
        md5EncryptStrig += "&currentPage=" + currentPage;
        md5EncryptStrig += Key;
        var encrypt = md5(md5EncryptStrig);

        var data = {
            appId: appId,
            method: method,
            charset: charset,
            signType: signType,
            encrypt: encrypt,
            timestamp: timestamp,
            version: version,
            parent_id: parent_id,
            classfy_id: classfy_id,
            sub_classfy_id: sub_classfy_id,
            third_classfy_id: third_classfy_id,
            pagesize: pagesize,
            currentPage: currentPage,
        };

        loading.show();
        $.ajax({
            type: "GET",
            url: F._url_join(F._getAllProductInfo_cd, data),
            // data: data,
            success: function(data) {
                loading.hide();

                var result = JSON.parse(data);

                var res = result;

                switch (result.code) {
                    case 10000:
                        var resCode = res.code;
                        $scope.nowProduct = res.details;
                        $scope.rows = res.rows;
                        $scope.nowProduct.number = $scope.nowProduct.length;
                        var priceStrings = FqPriceArray($scope.nowProduct);
                        fenqiAjax(priceStrings, 0.5, 12);

                        $scope.nowPage = currentPage;
                        $scope.totalPage = res.totalPage;
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

                        if ($scope.nowProduct.length > 0) {
                            for (var i = 0; i < $scope.nowProduct.length; i++) {
                                var imgUrls = $scope.nowProduct[i].imageUrls;
                                var imgUrlsArray = imgUrls.split("|");
                                $scope.nowProduct[i].image = imgUrlsArray[0];
                            }

                            $scope.noProductTip = "";
                        } else {
                            $scope.noProductTip = "Tạm thời chưa có sản phẩm nào!";
                        }

                        break;

                    default:

                        break;
                }
            },
            error: function(ret) {
                loading.hide();

            },
        });
    }
    $scope.getAllProductInfo = getAllProductInfo;

    function changeProductType(index) {
        F.parent_id = index;
        getAllProductInfo({
            classfy_id: '0',
            sub_classfy_id: '0',
            third_classfy_id: '0',
        });
    }
    $scope.changeProductType = changeProductType;

    window.setTimeout(function() {
        F._consolelog(111111);
        $('.category1-row1-item').on('click', function() {
            $('.category1-row1-item').removeClass('category1-row1-item_active');
            $(this).addClass('category1-row1-item_active');
        });

        $('.category1-row2-item').on('click', function() {
            $('.category1-row2-item').removeClass('category1-row2-item_active');
            $(this).addClass('category1-row2-item_active');
        });

        $('.category2-row1-item').on('click', function() {
            $('.category2-row1-item').removeClass('category2-row1-item_active');
            $(this).addClass('category2-row1-item_active');
        });

        $('.category2-row2-item').on('click', function() {
            $('.category2-row2-item').removeClass('category2-row2-item_active');
            $(this).addClass('category2-row2-item_active');
        });

        $('.category3-row1-item').on('click', function() {
            $('.category3-row1-item').removeClass('category3-row1-item_active');
            $(this).addClass('category3-row1-item_active');
        });

        $('.category3-row2-item').on('click', function() {
            $('.category3-row2-item').removeClass('category3-row2-item_active');
            $(this).addClass('category3-row2-item_active');
        });
    }, 700);

    /*tcy -end-*/


    //截取Url里面的参数   
    function GetRequest() {
        var url = location.search; //获取url中"?"符后的字串  
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            //alert(str);  
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]); //获取中文参数转码<span style="font-family: Arial, Helvetica, sans-serif;">decodeURI</span>, （unescape只针对数字, 中文乱码)  
            }
        }
        return theRequest;
    }


    var request = new Object();
    request = GetRequest();

    var brandId = request['brandId'];
    var classifyId = request['classifyId'];
    var parent_id_request = request['parent_id'] || '';

    /*tcy -start-*/
    F.classfy_id = classifyId;
    F.parent_id = brandId;
    /*tcy -end-*/

    if (classifyId == null || classifyId == 0) {
        $('.listover a:first-child').addClass('actt')
    }

    overlistshow(brandId, classifyId, '');

    function overlistshow(brandId, classifyId, brandAct) {
        $scope.navId = classifyId;

        $scope.nowProduct = [];
        var appId = localStorage.getItem("funId");
        var method = "fun.product.query";
        var charset = "utf-8";
        var parent_id = brandId;
        var classfy_id = classifyId;
        var sub_classfy_id = brandAct;
        var third_classfy_id = "";
        var pagesize = "8";
        var currentPage = "1";
        var Key = "commodityKey";

        getAllProductInfo({
            currentPage: F.currentPage,
            _noPage: true,
        }); //页面加载获取数据
        /*下一页*/
        $scope.nextPage = function() {
            // currentPage++;

            // $scope.nowPage = currentPage;
            // getAllProductInfo(currentPage);

            /*tcy -start-*/

            F.currentPage = +F.currentPage;

            F.currentPage += 1;
            $scope.nowPage = F.currentPage;
            getAllProductInfo({
                currentPage: F.currentPage,
            });
            /*tcy -end-*/

            $('#lastPagebtn').css({
                'background': '#0075F6'
            }).attr('disabled', false)
        }
        /*上一页*/
        $scope.lastPage = function() {
            // currentPage--;

            // $scope.nowPage = currentPage;
            // getAllProductInfo(currentPage);

            /*tcy -start-*/


            F.currentPage = +F.currentPage;

            F.currentPage -= 1;
            $scope.nowPage = F.currentPage;
            getAllProductInfo({
                currentPage: F.currentPage,
            });
            /*tcy -end-*/

            $('#nextPagebtn').css({
                'background': '#0075F6'
            }).attr('disabled', false)
        }

        $scope.confirm = function() {
            var currentPage = $("#importPage").val();
            if (currentPage >= $scope.totalPage) {
                currentPage = $scope.totalPage;
            } else if (currentPage <= 1) {
                currentPage = 1;
            } else {
                $scope.nowPage = currentPage;
            }
            getAllProductInfo({
                currentPage: currentPage
            });
            $('#nextPagebtn').css({
                'background': '#0075F6'
            }).attr('disabled', false)
            $('#lastPagebtn').css({
                'background': '#0075F6'
            }).attr('disabled', false)
        }

        /*ajax请求接口*/
        function reqAajx(currentPage) {
            var currentPage = currentPage;

            var md5SigntypeStrig = "appId=" + appId + "&method=" + method + "&charset=" + charset + Key;
            var signType = md5(md5SigntypeStrig);


            var md5EncryptStrig = "parent_id=" + parent_id_request + "&classfy_id=" + classfy_id + "&sub_classfy_id=" + sub_classfy_id + "&third_classfy_id=" + third_classfy_id + "&pagesize=" + pagesize + "&currentPage=" + currentPage + Key;
            var encrypt = md5(md5EncryptStrig);




            /*获取商品信息接口*/
            var url = F._getAllProductInfo_cd;
            var ajax = new ajaxClass($http, url, "GET");
            ajax.params = {
                    appId: appId,
                    method: method,
                    charset: charset,
                    signType: signType,
                    encrypt: encrypt,
                    timestamp: '2017-09-06 11:30:50',
                    version: '1.0',
                    parent_id: parent_id_request,
                    classfy_id: classfy_id,
                    sub_classfy_id: '',
                    third_classfy_id: '',
                    pagesize: pagesize,
                    currentPage: currentPage,
                },

                ajax.successCallback = function(res) {




                    var resCode = res.data.code;
                    if (resCode == 10000) {

                        $scope.nowProduct = res.data.details;
                        $scope.rows = res.data.rows;

                        $scope.nowProduct.number = $scope.nowProduct.length;
                        //					var price = $scope.nowProduct.price;
                        var priceStrings = FqPriceArray($scope.nowProduct);


                        fenqiAjax(priceStrings, 0.5, 12);


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


                        if ($scope.nowProduct.length > 0) {

                            for (var i = 0; i < $scope.nowProduct.length; i++) {
                                var imgUrls = $scope.nowProduct[i].imageUrls;
                                var imgUrlsArray = imgUrls.split("|");
                                $scope.nowProduct[i].image = $scope.nowProduct[i].iconUrl;
                                // $scope.nowProduct[i].image = imgUrlsArray[0];
                            }


                            $scope.noProductTip = "";
                        } else {
                            $scope.noProductTip = "Tạm thời chưa có sản phẩm nào!"
                        }

                    }
                };
            ajax.failureCallback = function(res) {};
            ajax.requestData();
        }
    }
    // 1           1      id
    $scope.gotoMore2 = function(classifyId, brandAct, subclassfyid, $event) {
        $('.listover a').removeClass('actt');
        $('.listin a:first-child').removeClass('actt');
        $($event.target).parent().addClass('actt');


        //		if(classifyId != "") {
        //window.location.href = "more.html?brandId=" + "" + "&classifyId=" + classifyId+ "&brandAct=" + brandAct;
        overlistshow(classifyId, brandAct, subclassfyid);
        $scope.nowPage = 1;
        //		} else {
        //			alert("商品不存在！");
        //			window.location.href = "";
        //		}		
    } // 1           1      id
    $scope.gotoMore2s = function(classifyId, brandAct, $event) {
        //$('.listover a').removeClass('actt');
        $('.listin a').removeClass('actt');
        $($event.target).parent().addClass('actt');
        $scope.brandAct = brandAct;
        brandId = "";
        $scope.classifyId = classifyId;
        //		if(classifyId != "") {
        //window.location.href = "more.html?brandId=" + "" + "&classifyId=" + classifyId+ "&brandAct=" + brandAct;
        overlistshow(brandId, $scope.classifyId, $scope.brandAct);
        $scope.nowPage = 1;
        //		} else {
        //			alert("商品不存在！");
        //			window.location.href = "";
        //		}		
    }
    $scope.gotoMore3 = function(classifyId, brandAct, $event) {
        //$('.listover a').removeClass('actt');

        $($event.target).addClass('actt');

        $scope.brandAct = brandAct;
        //if(classifyId != "") {
        //window.location.href = "more.html?brandId=" + "" + "&classifyId=" + classifyId+ "&brandAct=" + brandAct;
        overlistshow(brandId, classifyId);
        $scope.nowPage = 1;

        //		} else {
        //			alert("商品不存在！");
        //			window.location.href = "";
        //		}		
    }
    $scope.gotoMores = function(classifyId, brandId, brandAct) {
        $('.listin a:first-child').removeClass('actt');
        $('.listover a').removeClass('actt');
        $('.hot_brand .listover a:first-child').removeClass('actt');
        $('.hot_brand.act .listover a:first-child').addClass('actt');
        //window.location.href = "more.html?brandId=" + "" + "&classifyId=" + classifyId+ "&brandAct=" + brandAct;
        overlistshow(classifyId, brandId, brandAct);
        $scope.nowPage = 1;
    }
    $scope.gotoMoress = function(classifyId, brandId, brandAct) {
        $('.listin a').removeClass('actt');
        $('.hot_brand .listin a:first-child').removeClass('actt');
        $('.hot_brand.act .listin a:first-child').addClass('actt');
        $('.listover a:first-child').removeClass('actt');
        //window.location.href = "more.html?brandId=" + "" + "&classifyId=" + classifyId+ "&brandAct=" + brandAct;
        overlistshow(classifyId, brandId, brandAct);
        $scope.nowPage = 1;
    }


    function FqPriceArray(obj) {
        var str = []; //取得price
        for (var i = 0; i < obj.length; i++) {
            str.push(obj[i].price);
        }
        var newStr = []; //去重
        for (var i = 0; i < str.length; i++) {
            if (newStr.indexOf(str[i]) == -1) newStr.push(str[i]);
        }



        return newStr.toString();
    }

    //	shuamaAjax();
    function shoujimore() {
        var url = F._getScreenInfo_cd;
        var ajax = new ajaxClass($http, url, "GET");
        ajax.params = {
            appid: '110',
            method: 'fun.screen.query',
            charset: 'utf-8',
            signtype: '6b8a17c7ae8e1e48564392fba1d4ca77',
            encrypt: 'c26e8ca94314369ad72cd0778a1185eb',
            timestamp: '2017-09-06 11:30:50',
            version: '1.0',
            typeid: '1',
        };

        ajax.successCallback = function(res) {


            var status = res.status;


            var chooseData = res.data.classfyinfo;
            var chooseDatas = res.data.subclassfyinfo;
            var resCode = res.data.code;
            if (resCode == 10000) {
                $scope.shoujimore = chooseData;
                $scope.ppq = chooseDatas;


                //$scope.choose = chooseData; //二级请求接口	  
            }
        }
        ajax.failureCallback = function(res) {

        };
        ajax.requestData();
    }
    shoujimore();

    function diannaomore() {
        var url = F._getScreenInfo_cd;
        var ajax = new ajaxClass($http, url, "GET");
        ajax.params = {
            appid: '110',
            method: 'fun.screen.query',
            charset: 'utf-8',
            signtype: '6b8a17c7ae8e1e48564392fba1d4ca77',
            encrypt: '5dc109e5b5752b56f60c265d405500fc',
            timestamp: '2017-09-06 11:30:50',
            version: '1.0',
            typeid: '2',
        };

        ajax.successCallback = function(res) {


            var status = res.status;


            var chooseData = res.data.classfyinfo;
            var chooseDatas = res.data.subclassfyinfo;
            var resCode = res.data.code;
            if (resCode == 10000) {
                $scope.diannaomore = chooseData;
                $scope.nav = chooseDatas;

                //$scope.choose = chooseData; //二级请求接口	  
            }
        }
        ajax.failureCallback = function(res) {

        };
        ajax.requestData();
    }
    diannaomore();

    function shumamore() {
        var url = F._getScreenInfo_cd;
        var ajax = new ajaxClass($http, url, "GET");
        ajax.params = {
            appid: '110',
            method: 'fun.screen.query',
            charset: 'utf-8',
            signtype: '6b8a17c7ae8e1e48564392fba1d4ca77',
            encrypt: '835de5d7ca0f5a65713dea61e6836abd',
            timestamp: '2017-09-06 11:30:50',
            version: '1.0',
            typeid: '5',
        };

        ajax.successCallback = function(res) {

            var status = res.status;


            var chooseData = res.data.classfyinfo;
            var chooseDatas = res.data.subclassfyinfo;
            var resCode = res.data.code;
            if (resCode == 10000) {
                $scope.shumamore = chooseData;
                $scope.choose = chooseDatas;

                //$scope.choose = chooseData; //二级请求接口	  
            }
        }
        ajax.failureCallback = function(res) {

        };
        ajax.requestData();
    }
    shumamore();
    /*分期*/
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
                for (var item in res.data.details) {
                    //alert(item);
                    var a = parseInt(item);

                    for (var i = 0; i < $scope.nowProduct.length; i++) {
                        if (a == $scope.nowProduct[i].price) {
                            $scope.nowProduct[i][a] = res.data.details[item];
                            //alert(res.data.details[item][0].interest)
                            $scope.nowProduct[i].fenqiPrice = res.data.details[item][0].interest + res.data.details[item][0].principal; //res.data.details[item][0].interest+
                        }
                    }

                }

            }
        };
        ajax.failureCallback = function(res) {

        };
        ajax.requestData();
    }

    //排序
    $scope.orderType = "price";
    $scope.Porder = ""; //价格排序
    $scope.Norder = ""; //销量排序

    $scope.changeOrder = function(type) {
        $scope.orderType = type;
        if (type == "price") {
            if ($scope.Porder == "") {
                $scope.Porder = "-";
            } else {
                $scope.Porder = "";
            }
        } else if (type == "numbers") {
            if ($scope.Norder == "") {
                $scope.Norder = "-";
            } else {
                $scope.Norder = "";
            }
        }
    }

    $scope.brandAct = request['brandAct'];;
    $scope.product = gotoDetails;
    // $scope.product = function(typeId, brandId) {
    //     gotoDetails(typeId, brandId);
    // }




    //获取用户浏览记录
    function showUserScan() {
        var funid = localStorage.getItem("funId");
        var userScanJson = getUserHistoryScan(funid);

        $scope.userScanObj = [];
        if (userScanJson != null) {
            for (var i = 0; i < userScanJson.length; i++) {
                $scope.userScanObj.push(JSON.parse(userScanJson[i]));
                var imgUrlsStr = userScanJson[i];
                var imgUrlObj = JSON.parse(imgUrlsStr);
                var imgUrls = imgUrlObj.imageUrls;
                var imgUrlsArray = imgUrls.split("|");
                $scope.userScanObj[i].imgUrl = imgUrlObj.iconUrl;
                // $scope.userScanObj[i].imgUrl = imgUrlsArray[0];
            }

            $scope.showuserScanObj = $scope.userScanObj.splice(0, 6);
        } else {
            $("#lastScan").css("display", "none");
        }


    }
    showUserScan();


})



// //点击商品页面跳转详情
// function gotoDetails(typeId, brandId) {


//     if (brandId != null && brandId != "" && typeId != null && typeId != "") {
//         window.location.href = "details.html?typeId=" + typeId + "&brandId=" + brandId;
//         // window.open("details.html?typeId=" + typeId + "&brandId=" + brandId);

//     } else {
//         // window.location.href = "";
//     }
// }

