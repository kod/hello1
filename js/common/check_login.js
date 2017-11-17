/*判断是否登录*/

$(function($) {
    var funId = localStorage.getItem("funId");
    if (funId == "" || funId == null) {
        window.location.href = "login.html";
    }
})