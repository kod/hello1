var app = angular.module('selfApp', []);
app.controller('selfCtrl', function($scope, $http, $filter) {

    // 获取学校名单
    function loadData_getSchoolInfo(params, callback) {
        var loading = new F._loading();

        if (callback === undefined) callback = params;

        var Key = 'userKey';
        var appid = localStorage.getItem("funId");
        var method = "fun.uc.getschoolinfo";
        var charset = 'utf-8';
        var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
        var version = '1.0';

        var notifyurlbg = '';
        var name = '';

        var md5SigntypeStrig = '';
        md5SigntypeStrig += "appid=" + appid;
        md5SigntypeStrig += "&method=" + method;
        md5SigntypeStrig += "&charset=" + charset;
        md5SigntypeStrig += Key;

        var signtype = md5(md5SigntypeStrig);

        var md5EncryptStrig = '';
        md5EncryptStrig += "name=" + name;
        // md5EncryptStrig += "&tradeNo=" + tradeNo;
        md5EncryptStrig += Key;

        var encrypt = md5(md5EncryptStrig);

        var data = {
            appid: appid,
            method: method,
            charset: charset,
            signtype: signtype,
            encrypt: encrypt,
            timestamp: timestamp,
            version: version,
            notifyurlbg: notifyurlbg,
            name: name,
        };

        loading.show();
        $.ajax({
            type: "POST",
            url: F._getSchoolInfo_uc,
            data: data,
            success: function(data) {

                var result = JSON.parse(data);

                loading.hide();

                switch (result.code) {
                    case 10000:
                        callback(result);
                        break;

                    default:
                        alert('request error');
                        break;
                }
            },
            error: function(ret) {
                loading.hide();

            },
        });
    }

    function userAddDetailInfo(data) {
        console.dir(data);
        var loading = new F._loading();
        loading.show();
        F._userAddDetailInfo(data, function(ret) {
            loading.hide();
            if (!ret) return false;

            switch (ret.code) {
                case 10000:
                    window.location.reload();
                    break;

                default:

                    break;
            }
        });
    }

    var msisdn = localStorage.getItem("msisdn");
    $scope.phoneNum = localStorage.getItem("msisdn");
    var telVal = localStorage.getItem("msisdn");
    var funId = localStorage.getItem("funId");
    var newTelVal = '';
    if (telVal.length > 0) {
        for (var i = 0; i < telVal.length; i++) {
            if (i < 3 || i >= telVal.length - 3) {
                newTelVal += telVal[i];
            } else {
                newTelVal += '*';
            }
        }
    }
    $scope.funId = funId;
    $scope.msisdn = newTelVal;


    $scope.getUserInfoDetails = function() {
        var url = F._userViewDetailInfo_uc;
        //      var url = F._queryOrderList_td;
        var ajax = new ajaxClass($http, url, "POST");

        var appId = localStorage.getItem("funId");
        var method = 'fun.uc.userviewdetail';
        var charset = 'utf-8';
        var funid = localStorage.getItem("funId");
        //      var msisdn = localStorage.getItem("msisdn");
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

            if (resCode == 10000) {

                $scope.centerUserInfo = res.data;


                $scope.headimage = res.data.headimage;
                F.headimage = $scope.headimage;
                $('.img-phone').attr('src', $scope.headimage);

                $('#g_name').val(res.data.username);

                if (res.data.sex == 1) {
                    $('#g_sex').val(1)
                } else {
                    $('#g_sex').val(2)
                }
                if (res.data.identification.length === 0) {
                    $('#g_identification').val('');
                    $('#g_identification').css('background-color', '#fff');
                } else {
                    $('#g_identification').val(res.data.identification)
                    $('#g_identification').attr('disabled', true)
                    $('#g_identification').css('background-color', '#eee');
                }
                $('textarea').val(res.data.address);
                $('#g_email').val(res.data.email);
                $('#g_cname1').val(res.data.connectusername1);
                if (res.data.connectusername1 == 0 && res.data.connectusername1 == null) {
                    $('.addperons').show();
                    $('.in1').hide();
                } else {
                    $('.addperons').hide();
                    $('.in1').show();
                    $('#g_cname1').val(res.data.connectusername1)
                }
                if (res.data.connectusername2 == 0 && res.data.connectusername2 == null) {
                    $('.addperon1').show();
                    $('.in2').hide();
                } else {
                    $('.addperon1').hide();
                    $('.in2').show();
                    $('#g_cname2').val(res.data.connectusername2)
                }
                if (res.data.connectusername3 == 0 && res.data.connectusername3 == null) {
                    $('.addperon2').show();
                    $('.in3').hide();
                } else {
                    $('.addperon2').hide();
                    $('.in3').show();
                    $('#g_cname3').val(res.data.connectusername3)
                }
                $('#per1_name').val(res.data.connectusername1);
                $('#per1_phone').val(res.data.connectusermsisdn1);
                $('#per1_gx').val(res.data.connectuserrelation1);
                $('#per1_id').val(res.data.connectuseridentification1);
                $('#per2_name').val(res.data.connectusername2);
                $('#per2_phone').val(res.data.connectusermsisdn2);
                $('#per2_gx').val(res.data.connectuserrelation2);
                $('#per2_id').val(res.data.connectuseridentification2);
                $('#per3_name').val(res.data.connectusername3);
                $('#per3_phone').val(res.data.connectusermsisdn3);
                $('#per3_gx').val(res.data.connectuserrelation3);
                $('#per3_id').val(res.data.connectuseridentification3);
                $('#g_byyx').val(res.data.collegename);
                $('#g_xxdz').val(res.data.collegeaddr);
                $('#g_yx').val(res.data.department);
                $('#g_zy').val(res.data.specialty);
                $('#degree').val(res.data.degree);
                var timesup = res.data.admissiontime;
                //              var ii=timesup.replace(/(\d{4})-(\d{2})-(\d{2})/g,'$1');
                if (timesup) {
                    var ii = timesup.slice(0, 4);
                    $('#sctime-ac').val(ii);
                    var tt = timesup.slice(5, 7);
                    $('#sctime-ac-m').val(tt);
                    //              $('.timesup').val(res.data.admissiontime);
                    //              $('.timescl').val(res.data.graduationtime);
                    var timescl = res.data.graduationtime;
                    if (timescl == 0 && timescl == '' && timescl == undefined) {
                        $('#sctime-ov-m').val('');
                        $('#sctime-ov').val('');
                    } else {
                        var oo = timescl.slice(0, 4);
                        $('#sctime-ov').val(oo);
                        var vv = timescl.slice(5, 7);
                        $('#sctime-ov-m').val(vv);
                    }
                }
            } else {

            }
        };
        ajax.failureCallback = function(res) {

        };
        ajax.requestData();
    }


    loadData_getSchoolInfo(function(ret) {

        $scope.schoolList = ret.details;
        $scope.getUserInfoDetails();
    });



    $('#submit').click(function() {
        var num = $('#sctime-ac').val();
        var thiss = $('#sctime-ov').val();
        var sctime_ac_m = $('#sctime-ac-m').val();
        var sctime_ov_m = $('#sctime-ov-m').val();

        $('#tis').hide();
        $('#submit').attr('disabled', false)

        if (num && sctime_ac_m.length === 0) {
            $('#tis').show();
            return false;
        }

        if (thiss && sctime_ov_m.length === 0) {
            $('#tis').show();
            return false;
        }

        if (thiss && !num) {
            $('#tis').show();
            return false;
        }

        if (num && thiss && (+num >= +thiss)) {
            $('#tis').show();
            return false;
        }

        var g_name = $('#g_name').val();
        var sexs = $('#g_sex').val();
        if (sexs == 1) {
            var sex = 1;
        } else {
            var sex = 2;
        }
        var g_identification = $('#g_identification').val();
        var textarea = $('textarea').val();
        var g_email = $('#g_email').val();
        var g_cname1 = $('#g_cname1').val();
        var g_cname2 = $('#g_cname2').val();
        var g_cname3 = $('#g_cname3').val();
        var per1_name = $('#per1_name').val();
        var per1_phone = $('#per1_phone').val();
        var per1_gx = $('#per1_gx').val() || '';
        var per1_id = $('#per1_id').val();
        var per2_name = $('#per2_name').val();
        var per2_phone = $('#per2_phone').val();
        var per2_gx = $('#per2_gx').val() || '';
        var per2_id = $('#per2_id').val();
        var per3_name = $('#per3_name').val();
        var per3_phone = $('#per3_phone').val();
        var per3_gx = $('#per3_gx').val() || '';
        var per3_id = $('#per3_id').val();
        var g_byyx = $('#g_byyx').val();
        var g_xxdz = $('#g_xxdz').val();
        var g_yx = $('#g_yx').val();
        var g_zy = $('#g_zy').val();
        var degree = $('#degree').val();

        var ii = $('#sctime-ac').val();
        if (ii) {
            var tt = $('#sctime-ac-m').val();
            var timesup = ii + "-" + tt + '-11 11:11:11';
            var oo = $('#sctime-ov').val();
            var vv = $('#sctime-ov-m').val();
            if (oo) {
                var timescl = oo + "-"+ vv + '-11 11:11:11';
            } else {
                var timescl = '';
            }
        } else {
            var timesup = '';
            var timescl = '';
        }
        userAddDetailInfo({
            username: g_name,
            sex: sex,
            identification: g_identification,
            address: textarea,
            email: g_email,
            collegename: g_byyx || '',
            collegeaddr: g_xxdz,
            department: g_yx,
            specialty: g_zy,
            degree: degree || '',
            admissiontime: timesup,
            graduationtime: timescl,
            connectusername1: g_cname1,
            connectusermsisdn1: per1_phone,
            connectuserrelation1: per1_gx,
            connectuseridentification1: per1_id,
            connectusername2: g_cname2,
            connectusermsisdn2: per2_phone,
            connectuserrelation2: per2_gx,
            connectuseridentification2: per2_id,
            connectusername3: g_cname3,
            connectusermsisdn3: per3_phone,
            connectuserrelation3: per3_gx,
            connectuseridentification3: per3_id,
            headimage: F.headimage,
        });
    })
})