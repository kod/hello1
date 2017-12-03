// /*登录初始化*/
// $(function($) {
//     var funId = localStorage.getItem("funId");
//     var telVal = localStorage.getItem("msisdn");

//     if (funId == "" || funId == null) {
//         $(".noLogin").css("display", "inline-block");
//         $(".userLogin").css("display", "none");
//         $("#login").html("Đăng nhập");
//         $("#signup").html("Đăng ký");
//     } else {
//         var newTelVal = '';
//         if (telVal.length > 0) {
//             for (var i = 0; i < telVal.length; i++) {
//                 if (i < 3 || i >= telVal.length - 3) {
//                     newTelVal += telVal[i];
//                 } else {
//                     newTelVal += '*';
//                 }
//             }
//         }
//         msisdn = newTelVal;
//         $(".noLogin").css("display", "none");
//         $(".userLogin").css("display", "inline-block");
//         $("#userMsisdn").html(" &nbsp" + msisdn);
//         $("#quit").html("Trung tâm cá nhân");
//         $('#userLogin-info__bottom-button').html('đăng xuất');
//         // $("#quit").html("đăng xuất");
//     }
// });

// /*主页退出*/
// function userQuit() {
//     if (confirm("Xác nhận thoát")) {
//         localStorage.clear();
//         window.location.href = "";
//     }
// }
// /*个人中心退出*/
// function centerQuit() {
//     if (confirm("Xác nhận thoát")) {
//         localStorage.clear();
//         window.location.href = "./login.html";
//     }
// }