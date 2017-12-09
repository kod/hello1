/*登录session*/
function createLoginSssion(funId, msisdn) {
    if (window.localStorage) {
        sessionStorage.setItem("funId", funId);
        localStorage.setItem("funId", funId);
        localStorage.setItem("msisdn", msisdn);
        localStorage.setItem("validTime", +new Date() + 7*24*60*60*1000);

        //		sessionStorage.setItem("userName",userName);
        //		sessionStorage.setItem("userNick",userNick);
    } else {
        //		Cookie.write("funId", funId);	
    }
}

function msisdnFormatSession(msisdn) {
    if (window.sessionStorage) {
        var nowMsidn = '';
        //		sessionStorage.setItem("msisdn",msisdn);	
        for (var i = 0; i < msisdn.length; i++) {
            if (i < 3 || i > 8) {
                nowMsidn += msisdn[i];
            } else {
                nowMsidn += "*";
            }
        }

        sessionStorage.setItem("msisdnFormat", nowMsidn);
    } else {
        //		Cookie.write("msisdnFormat", msisdn);	
    }

}

/*支付session*/
function payInfo(userId, imgUrl, productInfo, buyNum, price, fenqiNum, paymentNum, goodsDetail) {
    if (window.sessionStorage) {
        sessionStorage.setItem("userId", userId);
        sessionStorage.setItem("imgUrl", imgUrl);
        sessionStorage.setItem("productInfo", productInfo);
        sessionStorage.setItem("buyNum", buyNum);
        sessionStorage.setItem("price", price);
        sessionStorage.setItem("fenqiNum", fenqiNum);
        sessionStorage.setItem("paymentNum", paymentNum);
        sessionStorage.setItem("goodsDetail", JSON.stringify(goodsDetail));

    } else {
        //		Cookie.write("funId", funId);	
    }

}

/*用户浏览记录*/

function userScanSession(res) {
    if (window.localStorage) {
        localStorage.setItem("userScanJson", res);
    }
}