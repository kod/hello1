var app = angular.module('phoneApp', []);
app.filter('priceFormat', function() { //可以注入依赖
    return F._priceFormat;
});

//新品首发数据请求接口	  
app.controller('newProductCtrl', function($scope, $http) {

    var url = F._initNewCellphone_cp;
    var ajax = new ajaxClass($http, url, "GET");
    var data = {
        appid: '110',
        method: 'fun.cellphone.newest',
        charset: 'utf-8',
        signtype: '',
        encrypt: '',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        typeid: '1',
        pagesize: '5',
        currentpage: '1'
    };
    ajax.params = getMd5Code(data, "commodityKey"); //格式化ajax请求数据   commodityKey->表示系统类型

    ajax.successCallback = function(res) {

        var status = res.status;
        //      $scope.gridOptions = res.data;

        var resData = res.data.cellphonenewest;
        if (status == 200) {
            //          $scope.newProduct = resData.slice(0,4);//新品首发数据
            $scope.newProduct = resData;
            $scope.product = function(typeId, brandId) {
                gotoDetails(typeId, brandId);
            }
        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();
});

//手机基础数据请求接口	  
app.controller('allPhoneCtrl', function($scope, $http, $compile) {
    var url = F._initAdCellphone_cp;
    var ajax = new ajaxClass($http, url, "GET");
    ajax.params = {
        appid: '110',
        method: 'fun.cellphone.ads',
        charset: 'utf-8',
        signtype: "b1859837aad8522f2214f1b2ad927f76",
        encrypt: 'aa36cb4ce585a7cc53297dc067717f83',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        typeid: '1',
        pagesize: '8',
        currentpage: '1'
    };

    ajax.successCallback = function(res) {
        if (!window.F) window.F = {};

        var a;
        var b;
        var ret = res.data;

        if (ret.code !== 10000) {
            alert('error');
            return false;
        }

        F.classfyinfo = ret.classfyinfo;
        F.cellphoneadinfo = ret.cellphoneadinfo;

        for (a = 0; a < F.cellphoneadinfo.length; a++) {
            for (b = 0; b < F.classfyinfo.length; b++) {
                if (F.cellphoneadinfo[a].classfyId === F.classfyinfo[b].id) {
                    if (!F.classfyinfo[b]['_sub_top']) F.classfyinfo[b]['_sub_top'] = [];
                    if (!F.classfyinfo[b]['_sub_bottom']) F.classfyinfo[b]['_sub_bottom'] = [];
                    if (!F.classfyinfo[b]['_total']) F.classfyinfo[b]['_total'] = 0;
                    if (!F.classfyinfo[b]['_pos1']) F.classfyinfo[b]['_pos1'] = 0;
                    if (!F.classfyinfo[b]['_pos2']) F.classfyinfo[b]['_pos2'] = 0;
                    if (!F.classfyinfo[b]['_pos3']) F.classfyinfo[b]['_pos3'] = 0;

                    if (F.classfyinfo[b]['_total'] < 7) {
                        F.classfyinfo[b]['_total'] += 1;
                        switch (F.cellphoneadinfo[a].position) {
                            case 1:
                                if (F.classfyinfo[b]['_pos1'] < 2) {
                                    F.classfyinfo[b]['_pos1'] += 1;
                                    F.classfyinfo[b]['_sub_top'].push(F.cellphoneadinfo[a]);
                                }
                                break;

                            case 2:
                                if (F.classfyinfo[b]['_pos2'] < 3) {
                                    F.classfyinfo[b]['_pos2'] += 1;
                                    F.classfyinfo[b]['_sub_top'].push(F.cellphoneadinfo[a]);
                                }
                                break;

                            default: // 默认为3
                                if (F.classfyinfo[b]['_pos3'] < 5) {
                                    F.classfyinfo[b]['_pos3'] += 1;
                                    F.classfyinfo[b]['_sub_bottom'].push(F.cellphoneadinfo[a]);
                                }
                                break;
                        }
                    }
                }
            }
        }

        $scope.Products = F.classfyinfo;
    };
    ajax.failureCallback = function(res) {};
    ajax.requestData();
});


//品牌墙数据请求接口	  
app.controller('ppqPhoneCtrl', function($scope, $http) {
    var url = F._initAdCellphone_cp;
    var ajax = new ajaxClass($http, url, "GET");
    ajax.params = {
            appid: '110',
            method: 'fun.cellphone.ads',
            charset: 'utf-8',
            signtype: "b1859837aad8522f2214f1b2ad927f76",
            encrypt: 'aa36cb4ce585a7cc53297dc067717f83',
            timestamp: '2017-09-06 11:30:50',
            version: '1.0',
            typeid: '1',
            pagesize: '8',
            currentpage: '1'
        },

        ajax.successCallback = function(res) {

            var status = res.status;
            //      $scope.gridOptions = res.data;

            var resDataOther = res.data.classfyinfo;
            var resCode = res.data.code;
            var reqJson = JSON.stringify(resDataOther);

            if (resCode == 10000) {
                $scope.ppq = resDataOther; //品牌墙



            } else {

            }
        };
    ajax.failureCallback = function(res) {};
    ajax.requestData();

});

function gotoDetails(typeId, brandId) {
    if (typeId != "" && brandId != "") {
        window.location.href = "details.html?typeId=" + typeId + "&brandId=" + brandId;
        // window.open("details.html?typeId=" + typeId + "&brandId=" + brandId);
    } else {
        window.location.href = "";
    }
}
app.controller("cellCtrl", function($scope, $http) {
    var url = F._initTopCellphone_cp;
    var ajax = new ajaxClass($http, url, "GET");
    var data = {
        appid: '0',
        method: 'fun.cellphone.topad',
        charset: 'utf-8',
        signtype: '',
        encrypt: '',
        timestamp: '2017-09-06 11:30:50',
        version: '1.0',
        typeid: '1',
        pagesize: '5',
        currentpage: '1'
    };
    ajax.params = getMd5Code(data, "commodityKey");

    ajax.successCallback = function(res) {


        var status = res.status;

        var resData = res.data.topadinfo;
        if (status == 200) {
            $scope.cptphone = resData; //banner数据

            $scope.product = function(typeId, brandId) {
                gotoDetails(typeId, brandId);
            }
        } else {

        }
    };
    ajax.failureCallback = function(res) {

    };
    ajax.requestData();

    $scope.gotoMore = function(brandId, classifyId) {
        if (brandId != "" && brandId != "") {
            window.location.href = "more.html?brandId=" + brandId + "&classifyId=" + classifyId + "&brandAct=1";
        } else {
            alert("Sản phẩm không tồn tại！");
            window.location.href = "";
        }
    }
    $scope.gotoMore2 = function(classifyId) {
        if (classifyId != "") {
            window.location.href = "more.html?brandId=" + "" + "&classifyId=" + classifyId + "&brandAct=1&parent_id=1";
        } else {
            alert("Sản phẩm không tồn tại！");
            window.location.href = "";
        }
    }
    $scope.gotoMore1 = function(classifyId) {
        if (classifyId != "") {
            window.location.href = "more.html?brandId=" + "&classifyId=" + classifyId + "&brandAct=1";
        } else {
            alert("Sản phẩm không tồn tại！");
            window.location.href = "";
        }
    }
})

// function gotoFind() {
//     var findcontent = $("#findIpt").val();
//     if (findcontent != "") {
//         window.location.href = "search.html?findcontent=" + findcontent;
//     }
// }