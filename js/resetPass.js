//正则截取url参数

var app = angular.module("duanxinOptAPP", []);
app.controller("duanxinOptCtrl", function($scope, $http, $filter) {

    // (function($) {
    //     $.getUrlParam = function(name) {
    //         var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //         var r = window.location.search.substr(1).match(reg);
    //         if (r != null) return unescape(r[2]);
    //         return null;
    //     }
    //     $scope.msisdn = $.getUrlParam("phoneNum");

    // })(jQuery);
    $("#phoneNum").bind("input propertychange", function() {
        var phone = +$("#phoneNum").val();
        if (phone && F._phoneExpr.test(phone)) {
            $('#tip').hide();
            $('.text button').attr('disabled', false).css('background', '#0075f6')

        } else {
            $('#tip').show();
            $('#tip').html('Định dạng số điện thoại không đúng...');
            $('.text button').attr('disabled', true).css('background', '#ddd')

        }
        // if (phone != $scope.msisdn) {
        //     $('#tip').show();
        //     $('#tip').html('Số điện thoại không khớp...');
        //     $('.text button').attr('disabled', true).css('background', '#ddd')
        // } else if (phone == $scope.msisdn) {
        //     $('#tip').hide();
        //     $('.text button').attr('disabled', false).css('background', '#0075f6')
        // }
    })

    $scope.duanxinOpt = function() {
        var phoneNum = $("#phoneNum").val();

        if (phoneNum != 0) {
            $("#tip").text("");
            // //验证码定时器
            // var time = setInterval(function() {
            //     b()
            // }, 1000);
            // var s = 60

            // function b() {
            //     s--;
            //     $("#nowSecond").html(s);
            //     $(".sText").html(" Gửi lại sau giây");
            //     $(".timeBtn").attr("disabled", true).css("background", "#cccccc");
            //     if (s == 0) {
            //         $("#nowSecond").html("");
            //         $(".sText").html("Vui lòng gửi lại  tin nhắn có chứa mã xác nhận");
            //         $(".timeBtn").attr("disabled", false);
            //         $(".timeBtn").css("background", "#0075F6");
            //         clearInterval(time);
            //     }
            // }

            if (F.verify_wait && F.verify_wait.verify_sending_status()) return false;

            F.verify_wait = new F._verify_wait({
                time: 120,
                target: '#sText',
                // isVue: true,
            });
            F.verify_wait.verify_sending_change(true);

            F._userAction_otp({
                msisdn: phoneNum,
            }, function(ret) {
                if (ret.status !== 10000) {
                    F.verify_wait.verify_sending_change(false);
                }
            });
        } else {
            $('#tip').show();
            $('#tip').html('Vui lòng nhập số điện thoại...');
        }
    }
    //下一步
    $('.submit').click(function() {
        F.query = F._hrefUtils.parse().query;


        // var msisdn = F.query.phoneNum;
        var msisdn = $("#phoneNum").val();
        var yzmId = $("#yzmId").val();
        if (yzmId == 0) {
            $("#tip").show().text("Vui lòng nhập mã xác nhận！")
        } else {
            if (yzmId != null && yzmId != "" && msisdn != "") {
                F.parse = F._hrefUtils.parse();
                switch (F.parse.query.from) {
                    case 'oneself':
                        window.location.href = "confirm.html?yzmId=" + yzmId + "&msisdn=" + msisdn + "&xiug";
                        break;
                
                    case 'payPwd':
                        window.location.href = "payPwdConfirm.html?yzmId=" + yzmId + "&msisdn=" + msisdn + "&xiug";
                        break;
                
                    default:
                        // TODO
                        break;
                }

                // var url = location.search; //获取url中"?"符后的字串  
                // if (url.indexOf("?") != -1) {
                //     window.location.href = "confirm.html?yzmId=" + yzmId + "&msisdn=" + msisdn + "&xiug";
                // } else {
                //     window.location.href = "confirm.html?yzmId=" + yzmId + "&msisdn=" + msisdn;
                // }

            } else {
                $("#tip").show().text(" Số điện thoại không được để trống！")
            }
        }
    })
})