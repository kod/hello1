if (!window.F) window.F = {};

// F._IP = "http://47.52.21.255";
// F._IP = "http://47.52.106.165";
F._IP = "http://192.168.1.100";
F._createFullPayOrder_td = F._IP + ":8183/fun/trade/full/createFullPayOrder"; // 创建全额订单
F._FullPaymentOrder_td = F._IP + ":8183/fun/trade/full/FullPaymentOrder"; // 支付全额订单
F._payOrder_td = F._IP + ":8183/fun/trade/payOrder"; // 支付（分期）订单
F._createOrder_td = F._IP + ":8183/fun/trade/createOrder"; // 创建（分期）订单
F._batchCreateOrder_td = F._IP + ":8183/fun/trade/batchCreateOrder"; // 批量订单-创建
F._batchPayment_td = F._IP + ":8183/fun/trade/batchPayment"; // 批量订单-支付
F._queryOrder_td = F._IP + ":8183/fun/trade/queryOrder"; // 订单查询
F._inquiryBill_td = F._IP + ":8184/fun/trade/inquiryBill"; // 查询账单信息
F._queryBillList_td = F._IP + ":8184/fun/trade/queryBillList"; //
F._createNormalOrder_td = F._IP + ":8183/fun/trade/createNormalOrder"; // 创建还款订单
F._payNormalOrder_td = F._IP + ":8183/fun/trade/payNormalOrder"; // 支付还款订单
F._queryOrderList_td = F._IP + ":8183/fun/trade/queryOrderList"; //
F._orderCancel_td = F._IP + ":8183/fun/trade/orderCancel"; // 取消订单
F._findOrderDetails_td = F._IP + ":8183/fun/trade/findOrderDetails"; // 订单详细信息查询
F._userAddDetailInfo_uc = F._IP + ":8180/fun/usercenter/userAddDetailInfo"; // 修改用户信息
F._userViewDetailInfo_uc = F._IP + ":8180/fun/usercenter/userViewDetailInfo"; // 获取用户详细信息
F._getSchoolInfo_uc = F._IP + ":8180/fun/usercenter/getSchoolInfo"; // 获取学校列表
F._userAction_otp_uc = F._IP + ":8180/fun/userCenter/userAction/otp"; // 发送短信
F._userAction_login_uc = F._IP + ":8180/fun/userCenter/userAction/login"; // 用户登入
F._userAction_changePassword_uc = F._IP + ":8180/fun/userCenter/userAction/changePassword"; // 重置密码
F._userAction_modifyPayPassword_uc = F._IP + ":8180/fun/userCenter/userAction/modifyPayPassword"; // 修改交易密码
F._userAction_checkPayPasword_uc = F._IP + ":8180/fun/userCenter/userAction/checkPayPasword"; // 修改交易密码
F._userAction_userAddAddr_uc = F._IP + ":8180/fun/usercenter/userAddAddr"; // 地址-添加
F._userAction_userModifyAddr_uc = F._IP + ":8180/fun/usercenter/userModifyAddr"; // 地址-修改
F._userAction_userDelAddrs_uc = F._IP + ":8180/fun/usercenter/userDelAddrs"; // 地址-删除
F._userAction_userViewAddr_uc = F._IP + ":8180/fun/usercenter/userViewAddr"; // 地址-列表
F._userAction_register_uc = F._IP + ":8180/fun/userCenter/userAction/register"; // 注册
F._userAction_getUserInfoById_uc = F._IP + ":8180/fun/userCenter/userAction/getUserInfoById"; //
F._userCancelCollection_uc = F._IP + ":8180/fun/usercenter/userCancelCollection"; // 取消收藏
// F._userAddCollection_uc = F._IP + ":8180/fun/usercenter/userAddCollection"; // 添加收藏
F._userBatchCollection_uc = F._IP + ":8180/fun/usercenter/userBatchCollection"; // 批量添加收藏
F._userGetCollection_uc = F._IP + ":8180/fun/usercenter/userGetCollection"; // 获取收藏列表
F._initTopComputer_cp = F._IP + ":8185/fun/computer/initTopComputer"; // 获取电脑banner广告
F._initNewCellphone_cp = F._IP + ":8185/fun/cellphone/initNewCellphone"; //
F._initAdCellphone_cp = F._IP + ":8185/fun/cellphone/initAdCellphone"; //
F._initTopCellphone_cp = F._IP + ":8185/fun/cellphone/initTopCellphone"; //
F._initAdAppleComputer_di = F._IP + ":8185/fun/computer/initAdAppleComputer"; //
F._initAdGameComputer_di = F._IP + ":8185/fun/computer/initAdGameComputer"; //
F._initAdTabletComputer_di = F._IP + ":8185/fun/computer/initAdTabletComputer"; //
F._initAdClassfyComputer_di = F._IP + ":8185/fun/computer/initAdClassfyComputer"; //
F._initNewComputer_di = F._IP + ":8185/fun/computer/initNewComputer"; //
F._initTopDigital_di = F._IP + ":8185/fun/digital/initTopDigital"; //
F._initNewDigital_di = F._IP + ":8185/fun/digital/initNewDigital"; //
F._initAdDigital_di = F._IP + ":8185/fun/digital/initAdDigital"; //
F._addEvaluation_cd = F._IP + ":8185/fun/commodity/addEvaluation"; // 添加评价
F._findProducts_cd = F._IP + ":8185/fun/commodity/findProducts"; // 商品搜索
F._getProductDetailInfo_cd = F._IP + ":8185/fun/commodity/getProductDetailInfo"; // 获取产品详情
F._getEvaluationInfo_cd = F._IP + ":8185/fun/commodity/getEvaluationInfo"; // 获取评论
F._getNewestInfo_cd = F._IP + ":8185/fun/commodity/getNewestInfo"; //
F._getAdverstInfo_cd = F._IP + ":8185/fun/commodity/getAdverstInfo"; //
F._getClassfyInfo_cd = F._IP + ":8185/fun/commodity/getClassfyInfo"; //
F._getAllProductInfo_cd = F._IP + ":8185/fun/commodity/getAllProductInfo"; //
F._getScreenInfo_cd = F._IP + ":8185/fun/commodity/getScreenInfo"; //
F._getPromotionInfo_cd = F._IP + ":8185/fun/commodity/getPromotionInfo"; // 促销商品列表
F._cart_gate_cd = F._IP + ":8185/fun/commodity/cart/gate"; // 购物车-添加
F._cart_remove_cd = F._IP + ":8185/fun/commodity/cart/remove"; // 购物车-删除
F._cart_changeNum_cd = F._IP + ":8185/fun/commodity/cart/changeNum"; // 购物车-更新商品数量
F._cart_getInfo_cd = F._IP + ":8185/fun/commodity/cart/getInfo"; // 购物车列表
F._uploadFiles_uf = F._IP + ":8180/fun/userfile/uploadFiles"; // 上传用户头像
F._collectFiles_uf = F._IP + ":8180/fun/userfile/collectFiles"; // 用户评论上传图片
F._returnMoney_im = F._IP + ":8184/fun/installment/returnMoney"; //

F._phoneExpr = /^[0-9]{8,11}$/; //手机号
F._pwdExpr = /^.{8,20}$/; // 密码
F._codeExpr = /^[0-9]{6}$/; // 验证码
F._payPwdeExpr = /^[0-9]{6}$/; // 交易码
F._PhoneExpr = /Android|iPhone|iPad/; // 是否为手机
F._cardMaxNumber = 10; // 单间商品，最多购买件数
// 1111111111111111

F._winWidth = document.documentElement.clientWidth; //window的宽度
F._winHeight = document.documentElement.clientHeight; //window的高度

F._signType_MD5 = function(appId, method, charset, Key, lowerCase) {
    var md5SigntypeStrig = "";
    // 默认大写
    if (lowerCase) {
        md5SigntypeStrig += "appid=" + appId;
    } else {
        md5SigntypeStrig += "appId=" + appId;
    }
    md5SigntypeStrig += "&method=" + method;
    md5SigntypeStrig += "&charset=" + charset;
    md5SigntypeStrig += Key;
    return md5(md5SigntypeStrig);
};

F._encrypt_MD5 = function(params, Key) {
    var i;
    var md5EncryptStrig = "";
    for (i = 0; i < params.length; i++) {
        md5EncryptStrig += "&" + params[i].key + "=" + params[i].value;
    }
    md5EncryptStrig = md5EncryptStrig.slice(1);
    md5EncryptStrig += Key;
    return md5(md5EncryptStrig);
};

// 订单详细信息查询
F._findOrderDetails = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "tradeKey";

    var appId = "0";
    var method = "fun.trade.findOrderDetails";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "2.0";
    var funid = localStorage.getItem("funId");
    var orderno = params.orderno;
    var tradeno = params.tradeno;

    var signType = F._signType_MD5(appId, method, charset, Key, true);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "funid",
                value: funid
            },
            {
                key: "orderno",
                value: orderno
            },
            {
                key: "tradeno",
                value: tradeno
            }
        ],
        Key
    );

    var data = {
        appid: appId,
        method: method,
        charset: charset,
        signtype: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        funid: funid,
        orderno: orderno,
        tradeno: tradeno
    };

    $.ajax({
        type: "POST",
        url: F._findOrderDetails_td,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "Đặt hàng thất bại", "tips", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 收藏-可批量添加
F._userBatchCollection = function(params, callback) {
    if (!F._isLogin()) return false;
    var Key = "userKey";

    var appId = "0";
    var method = "fun.uc.addcollection";
    var charset = "utf-8";
    var timestamp = (+new Date() + "").slice(3);
    var version = "2.0";

    var funid = localStorage.getItem("funId");
    var brandids = params.brandids;

    var signType = F._signType_MD5(appId, method, charset, Key, true);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "funid",
                value: funid
            },
            {
                key: "brandids",
                value: brandids
            }
        ],
        Key
    );

    var data = {
        appid: appId,
        method: method,
        charset: charset,
        signtype: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        funid: funid,
        brandids: brandids
    };

    $.ajax({
        type: "POST",
        url: F._userBatchCollection_uc,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "error", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 购物车-列表
F._cart_getInfo = function(params, callback) {
    if (!F._isLogin()) return false;
    var Key = "commodityKey";

    var appId = "0";
    var method = "fun.cart.query";
    var charset = "utf-8";
    var timestamp = (+new Date() + "").slice(3);
    var version = "2.0";

    var funid = localStorage.getItem("funId");

    var signType = F._signType_MD5(appId, method, charset, Key, true);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "funid",
                value: funid
            }
        ],
        Key
    );

    var data = {
        appid: appId,
        method: method,
        charset: charset,
        signtype: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        funid: funid
    };

    $.ajax({
        type: "POST",
        url: F._cart_getInfo_cd,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "error", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 购物车-更新商品数量
F._cart_changeNum = function(params, callback) {
    if (!F._isLogin()) return false;
    var Key = "commodityKey";

    var appId = "0";
    var method = "fun.cart.change";
    var charset = "utf-8";
    var timestamp = (+new Date() + "").slice(3);
    var version = "2.0";

    var cartitemid = params.cartitemid;
    var quetity = params.quetity;
    var funid = localStorage.getItem("funId");

    var signType = F._signType_MD5(appId, method, charset, Key, true);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "funid",
                value: funid
            },
            {
                key: "cartitemid",
                value: cartitemid
            },
            {
                key: "quetity",
                value: quetity
            }
        ],
        Key
    );

    var data = {
        appid: appId,
        method: method,
        charset: charset,
        signtype: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        funid: funid,
        cartitemid: cartitemid,
        quetity: quetity
    };

    $.ajax({
        type: "POST",
        url: F._cart_changeNum_cd,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "error", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 购物车-删除
F._cart_remove = function(params, callback) {
    if (!F._isLogin()) return false;
    var Key = "commodityKey";

    var appId = "0";
    var method = "fun.cart.remove";
    var charset = "utf-8";
    var timestamp = (+new Date() + "").slice(3);
    var version = "2.0";

    var cartitemids = params.cartitemids;
    var orderno = params.orderno;
    var funid = localStorage.getItem("funId");

    var signType = F._signType_MD5(appId, method, charset, Key, true);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "funid",
                value: funid
            },
            {
                key: "cartitemids",
                value: cartitemids
            },
            {
                key: "orderno",
                value: orderno
            }
        ],
        Key
    );

    var data = {
        appid: appId,
        method: method,
        charset: charset,
        signtype: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        funid: funid,
        cartitemids: cartitemids,
        orderno: orderno
    };

    $.ajax({
        type: "POST",
        url: F._cart_remove_cd,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "error", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 购物车-添加
F._cart_gate = function(params, callback) {
    if (!F._isLogin()) return false;
    var Key = "commodityKey";

    var appId = "0";
    var method = "fun.cart.gate";
    var charset = "utf-8";
    var timestamp = (+new Date() + "").slice(3);
    var version = "2.0";

    var cartitems = params.cartitems;
    var funid = localStorage.getItem("funId");

    var signType = F._signType_MD5(appId, method, charset, Key, true);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "funid",
                value: funid
            },
            {
                key: "cartitems",
                value: cartitems
            }
        ],
        Key
    );

    var data = {
        appid: appId,
        method: method,
        charset: charset,
        signtype: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        funid: funid,
        cartitems: cartitems
    };

    $.ajax({
        type: "POST",
        url: F._cart_gate_cd,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "error", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

F._orderCancel = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "tradeKey";
    var appId = localStorage.getItem("funId");
    var method = "fun.trade.orderCancel";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "2.0";

    var funid = localStorage.getItem("funId");
    var orderNo = params.orderNo;
    var tradeNo = params.tradeNo;
    var status = params.status;

    var signType = F._signType_MD5(appId, method, charset, Key, true);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "funid",
                value: funid
            },
            {
                key: "orderno",
                value: orderNo
            },
            {
                key: "tradeno",
                value: tradeNo
            },
            {
                key: "status",
                value: status
            }
        ],
        Key
    );

    var data = {
        appid: appId,
        method: method,
        charset: charset,
        signtype: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        funid: funid,
        orderno: orderNo,
        tradeno: tradeNo,
        status: status
    };

    $.ajax({
        type: "POST",
        url: F._orderCancel_td,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);
            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "Lấy thông tin đơn hàng thất bại", "tips", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 促销商品
F._getPromotionInfo = function(params, callback) {
    var Key = "commodityKey";

    var appId = "";
    var method = "fun.promotion.query";
    var charset = "utf-8";
    var timestamp = (+new Date() + "").slice(3);
    var version = "2.0";

    var typeid = params.typeid;
    var classfyid = params.classfyid;
    var position = params.position;
    var pagesize = params.pagesize;
    var currentpage = params.currentpage;

    var signType = F._signType_MD5(appId, method, charset, Key, true);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "typeid",
                value: typeid
            },
            {
                key: "classfyid",
                value: classfyid
            },
            {
                key: "position",
                value: position
            },
            {
                key: "pagesize",
                value: pagesize
            },
            {
                key: "currentpage",
                value: currentpage
            }
        ],
        Key
    );

    var data = {
        appid: appId,
        method: method,
        charset: charset,
        signtype: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        typeid: typeid,
        classfyid: classfyid,
        position: position,
        pagesize: pagesize,
        currentpage: currentpage
    };

    $.ajax({
        type: "GET",
        url: F._getPromotionInfo_cd,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "error", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 显示分期金额信息
F._returnMoney = function(params, callback) {
    var Key = "settleKey";

    var appId = localStorage.getItem("funId");
    var method = "fun.trade.returnMoney";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "1.0";

    var totalamounts = params.totalamounts;
    var repaymentmonths = params.repaymentmonths;
    var payrate = params.payrate;

    var signType = F._signType_MD5(appId, method, charset, Key, true);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "totalamounts",
                value: totalamounts
            },
            {
                key: "repaymentmonths",
                value: repaymentmonths
            },
            {
                key: "payrate",
                value: payrate
            }
        ],
        Key
    );

    var data = {
        appid: appId,
        method: method,
        charset: charset,
        signtype: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        totalamounts: totalamounts,
        repaymentmonths: repaymentmonths,
        payrate: payrate
    };

    $.ajax({
        type: "POST",
        url: F._returnMoney_im,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "error", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 收货地址列表
F._userAction_userViewAddr = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "userKey";

    var appId = localStorage.getItem("funId");
    var method = "fun.uc.userviewaddr";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "1.0";

    var funid = localStorage.getItem("funId");
    var msisdn = localStorage.getItem("msisdn");

    var signType = F._signType_MD5(appId, method, charset, Key, false);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "funid",
                value: funid
            },
            {
                key: "msisdn",
                value: msisdn
            }
        ],
        Key
    );

    var data = {
        appId: appId,
        method: method,
        charset: charset,
        signType: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        msisdn: msisdn,
        funid: funid
    };

    $.ajax({
        type: "POST",
        url: F._userAction_userViewAddr_uc,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "error", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 删除收货地址
F._userAction_userDelAddrs = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "userKey";

    var appId = localStorage.getItem("funId");
    var method = "fun.uc.userDelAddrs";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "1.0";

    var adds = params.adds;
    var funid = localStorage.getItem("funId");

    var signType = F._signType_MD5(appId, method, charset, Key, true);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "funid",
                value: funid
            },
            {
                key: "adds",
                value: adds
            }
        ],
        Key
    );

    var data = {
        appid: appId,
        method: method,
        charset: charset,
        signtype: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        adds: adds,
        funid: funid
    };

    $.ajax({
        type: "POST",
        url: F._userAction_userDelAddrs_uc,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.code) {
                case 10000:
                    break;

                case 40020:
                    F._confirm("Gợi ý", "Có thể thêm tối đã 5 địa chỉ nhận hàng", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "error", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 编辑收货地址
F._userAction_userModifyAddr = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "userKey";

    var appId = localStorage.getItem("funId");
    var method = "fun.uc.usermodifyaddr";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "1.0";

    var addrid = params.addrid;
    var funid = localStorage.getItem("funId");
    var msisdn = params.msisdn;
    var address = params.address;
    var isdefault = params.isdefault;
    var username = params.username;

    var signType = F._signType_MD5(appId, method, charset, Key, false);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "addrid",
                value: addrid
            },
            {
                key: "funid",
                value: funid
            },
            {
                key: "msisdn",
                value: msisdn
            },
            {
                key: "address",
                value: address
            },
            {
                key: "isdefault",
                value: isdefault
            },
            {
                key: "username",
                value: username
            }
        ],
        Key
    );

    var data = {
        appId: appId,
        method: method,
        charset: charset,
        signType: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        addrid: addrid,
        funid: funid,
        msisdn: msisdn,
        address: address,
        isdefault: isdefault,
        username: username
    };

    $.ajax({
        type: "POST",
        url: F._userAction_userModifyAddr_uc,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.code) {
                case 10000:
                    break;

                case 40020:
                    F._confirm("Gợi ý", "Có thể thêm tối đã 5 địa chỉ nhận hàng", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "error", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 添加收货地址
F._userAction_userAddAddr = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "userKey";

    var appId = localStorage.getItem("funId");
    var method = "fun.uc.useraddaddr";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "1.0";

    var funid = localStorage.getItem("funId");
    var msisdn = params.msisdn;
    var address = params.address;
    var isdefault = params.isdefault;
    var username = params.username;

    var signType = F._signType_MD5(appId, method, charset, Key, false);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "funid",
                value: funid
            },
            {
                key: "msisdn",
                value: msisdn
            },
            {
                key: "address",
                value: address
            },
            {
                key: "isdefault",
                value: isdefault
            },
            {
                key: "username",
                value: username
            }
        ],
        Key
    );

    var data = {
        appId: appId,
        method: method,
        charset: charset,
        signType: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        funid: funid,
        msisdn: msisdn,
        address: address,
        isdefault: isdefault,
        username: username
    };

    $.ajax({
        type: "POST",
        url: F._userAction_userAddAddr_uc,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.code) {
                case 10000:
                    break;

                case 40020:
                    F._confirm("Gợi ý", "Có thể thêm tối đã 5 địa chỉ nhận hàng", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "error", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 获取收藏接口
F._userGetCollection = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "userKey";

    var appId = localStorage.getItem("funId");
    var method = "fun.uc.getcollection";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "1.0";

    var funid = localStorage.getItem("funId");
    var msisdn = params.msisdn;
    var pagesize = params.pagesize;
    var currentpage = params.currentpage;

    var signType = F._signType_MD5(appId, method, charset, Key, false);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "funid",
                value: funid
            },
            {
                key: "msisdn",
                value: msisdn
            },
            {
                key: "pagesize",
                value: pagesize
            },
            {
                key: "currentpage",
                value: currentpage
            }
        ],
        Key
    );

    var data = {
        appId: appId,
        method: method,
        charset: charset,
        signType: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        funid: funid,
        msisdn: msisdn,
        pagesize: pagesize,
        currentpage: currentpage
    };

    $.ajax({
        type: "POST",
        url: F._userGetCollection_uc,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "error", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 商品搜索
F._findProducts = function(params, callback) {
    var Key = "commodityKey";

    var appId = localStorage.getItem("funId") || "";
    var method = "fun.find.finding";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "1.0";
    var funid = localStorage.getItem("funId") || "";
    var findcontent = params.findcontent;
    var pagesize = params.pagesize;
    var currentpage = params.currentpage;

    var signType = F._signType_MD5(appId, method, charset, Key, true);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "funid",
                value: funid
            },
            {
                key: "findcontent",
                value: findcontent
            },
            {
                key: "pagesize",
                value: pagesize
            },
            {
                key: "currentpage",
                value: currentpage
            }
        ],
        Key
    );

    var data = {
        appid: appId,
        method: method,
        charset: charset,
        signtype: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        funid: funid,
        findcontent: findcontent,
        pagesize: pagesize,
        currentpage: currentpage
    };

    $.ajax({
        type: "GET",
        url: F._url_join(F._findProducts_cd, data),
        // data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "error", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 注册
F._userAction_register = function(params, callback) {
    var Key = "userKey";

    var provider = params.provider || "0";
    var msisdn = params.msisdn;
    var username = params.username;
    var password = params.password;
    var payPassword = params.payPassword;
    var otp = params.otp;
    var check = params.check;
    var appid = params.appid;

    var md5EncryptStrig = "";
    md5EncryptStrig += "provider=" + provider;
    md5EncryptStrig += "&msisdn=" + msisdn;
    md5EncryptStrig += "&username=" + username;
    md5EncryptStrig += "&password=" + password;
    md5EncryptStrig += "&payPassword=" + payPassword;
    md5EncryptStrig += "&otp=" + otp;
    md5EncryptStrig += "&check=" + check;
    md5EncryptStrig += "&appid=" + appid;
    md5EncryptStrig += Key;
    var encrypt = md5(md5EncryptStrig);

    var data = {
        provider: provider,
        msisdn: msisdn,
        username: username,
        password: password,
        payPassword: payPassword,
        otp: otp,
        check: check,
        appid: appid,
        encryption: encrypt
    };

    $.ajax({
        type: "POST",
        url: F._userAction_register_uc,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.status) {
                case 10000:
                    break;

                case 70002:
                    F._confirm("Gợi ý", "Mã xác nhận SMS không đúng", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 60052:
                    F._confirm("Gợi ý", "Chứng minh thư đã được đăng ký", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 60050:
                    F._confirm("Gợi ý", "Người dùng không tồn tại", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 50008:
                    F._confirm("Gợi ý", "Mã thẻ tồn tại", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 50010:
                    F._confirm("Gợi ý", "Mã thẻ đã quá hạn sử dụng", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 50009:
                    F._confirm("Gợi ý", "Mã thẻ tồn tại", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 50015:
                    F._confirm("Gợi ý", "Mã thẻ đã bị thu hồi", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 50020:
                    F._confirm("Gợi ý", "Yêu cầu thất bại", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "error", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 添加评论
F._addEvaluation = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "commodityKey";

    var appId = localStorage.getItem("funId");
    var method = "fun.evaluation.add";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "2.0";

    var funid = localStorage.getItem("funId");
    var msisdn = localStorage.getItem("msisdn");
    var username = localStorage.getItem("username");
    var order_no = params.orderNo;
    var trade_no = params.tradeNo;
    var comments = params.comments;

    var signType = F._signType_MD5(appId, method, charset, Key, false);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "funid",
                value: funid
            },
            {
                key: "msisdn",
                value: msisdn
            },
            {
                key: "username",
                value: username
            },
            {
                key: "trade_no",
                value: trade_no
            },
            {
                key: "order_no",
                value: order_no
            },
            {
                key: "comments",
                value: comments
            }
        ],
        Key
    );

    var data = {
        appId: appId,
        method: method,
        charset: charset,
        signType: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        funid: funid,
        msisdn: msisdn,
        username: username,
        trade_no: trade_no,
        order_no: order_no,
        comments: comments
    };

    $.ajax({
        type: "POST",
        url: F._addEvaluation_cd,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "Nhận xét không thành công", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 重置密码
F._userAction_changePassword = function(params, callback) {
    var Key = "userKey";

    var provider = params.provider || "0";
    var msisdn = params.msisdn;
    var password = params.password;
    var otp = params.otp;

    var md5EncryptStrig = "";
    md5EncryptStrig += "provider=" + provider;
    md5EncryptStrig += "&msisdn=" + msisdn;
    md5EncryptStrig += "&password=" + password;
    md5EncryptStrig += "&otp=" + otp;
    md5EncryptStrig += Key;
    var encrypt = md5(md5EncryptStrig);

    var data = {
        provider: provider,
        msisdn: msisdn,
        password: password,
        otp: otp,
        encryption: encrypt
    };

    $.ajax({
        type: "POST",
        url: F._userAction_changePassword_uc,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);
            switch (ret.status) {
                case 10000:
                    break;

                case 40000:
                    F._confirm("Gợi ý", "Mã xác nhận SMS không đúng", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 60050:
                    F._confirm("Gợi ý", "Người dùng không tồn tại", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 50008:
                    F._confirm("Gợi ý", "Số thẻ tồn tại", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 50010:
                    F._confirm("Gợi ý", "Mã thẻ đã quá hạn sử dụng", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 50020:
                    F._confirm("Gợi ý", "Yêu cầu thất bại", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "error", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 修改交易密码
F._userAction_modifyPayPassword = function(params, callback) {
    var Key = "userKey";

    var provider = params.provider || "0";
    var msisdn = params.msisdn;
    var paypassword = params.paypassword;
    var otp = params.otp;

    var md5EncryptStrig = "";
    md5EncryptStrig += "provider=" + provider;
    md5EncryptStrig += "&msisdn=" + msisdn;
    md5EncryptStrig += "&paypassword=" + paypassword;
    md5EncryptStrig += "&otp=" + otp;
    md5EncryptStrig += Key;
    var encrypt = md5(md5EncryptStrig);

    var data = {
        provider: provider,
        msisdn: msisdn,
        paypassword: paypassword,
        otp: otp,
        encryption: encrypt
    };

    $.ajax({
        type: "POST",
        url: F._userAction_modifyPayPassword_uc,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);
            switch (ret.status) {
                case 10000:
                    break;

                case 40000:
                    F._confirm("Gợi ý", "Mã xác nhận SMS không đúng", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 60050:
                    F._confirm("Gợi ý", "Người dùng không tồn tại", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 50008:
                    F._confirm("Gợi ý", "Số thẻ tồn tại", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 50010:
                    F._confirm("Gợi ý", "Mã thẻ đã quá hạn sử dụng", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 50020:
                    F._confirm("Gợi ý", "Yêu cầu thất bại", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "error", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 判断交易密码
F._userAction_checkPayPasword = function(params, callback) {
    var Key = "userKey";

    var provider = params.provider || "0";
    var msisdn = params.msisdn;
    var paypassword = params.paypassword;

    var md5EncryptStrig = "";
    md5EncryptStrig += "provider=" + provider;
    md5EncryptStrig += "&msisdn=" + msisdn;
    md5EncryptStrig += "&paypassword=" + paypassword;
    md5EncryptStrig += Key;
    var encrypt = md5(md5EncryptStrig);

    var data = {
        provider: provider,
        msisdn: msisdn,
        paypassword: paypassword,
        encryption: encrypt
    };

    $.ajax({
        type: "POST",
        url: F._userAction_checkPayPasword_uc,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 查询账单信息
F._inquiryBill = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "settleKey";
    var appId = localStorage.getItem("funId");
    var method = "fun.trade.inquiryBill";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "1.0";
    var notifyUrlBg = "";
    var useraccount = "";

    var orderNo = params.orderNo;
    var tradeNo = params.tradeNo;

    var signType = F._signType_MD5(appId, method, charset, Key, false);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "orderNo",
                value: orderNo
            },
            {
                key: "tradeNo",
                value: tradeNo
            },
            {
                key: "useraccount",
                value: useraccount
            }
        ],
        Key
    );

    var data = {
        appId: appId,
        method: method,
        charset: charset,
        signType: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        notifyUrlBg: notifyUrlBg,
        orderNo: orderNo,
        tradeNo: tradeNo,
        useraccount: useraccount
    };

    $.ajax({
        type: "POST",
        url: F._inquiryBill_td,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);
            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "Lấy thông tin hóa đơn thất bại", "tips", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

F._queryOrder = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "tradeKey";
    var appId = localStorage.getItem("funId");
    var method = "fun.trade.query";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "2.0";

    var orderNo = params.orderNo;
    var tradeNo = params.tradeNo;

    var signType = F._signType_MD5(appId, method, charset, Key, false);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "orderNo",
                value: orderNo
            },
            {
                key: "tradeNo",
                value: tradeNo
            }
        ],
        Key
    );

    var data = {
        appId: appId,
        method: method,
        charset: charset,
        signType: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        orderNo: orderNo,
        tradeNo: tradeNo
    };

    $.ajax({
        type: "POST",
        url: F._queryOrder_td,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);
            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "Lấy thông tin đơn hàng thất bại", "tips", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 用户评论上传图片
F._collectFiles = function(data, callback) {
    $.ajax({
        url: F._collectFiles_uf,
        type: "POST",
        processData: false,
        contentType: false,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);
            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "Tải lên thất bại", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 上传用户头像
F._uploadFilesUser = function(data, callback) {
    $.ajax({
        url: F._uploadFiles_uf,
        type: "POST",
        processData: false,
        contentType: false,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);
            switch (ret.code) {
                case 10000:
                    // TODO
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "Tải lên thất bại", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            callback(false);
        }
    });
};

// 获取电脑banner广告
F._initTopComputer = function(params, callback) {
    var Key = "commodityKey";
    var appId = "0";
    var method = "fun.computer.topad";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "1.0";

    var typeid = params.typeid || "2";
    var pagesize = params.pagesize || "5";
    var currentpage = params.currentpage || "1";

    var signType = F._signType_MD5(appId, method, charset, Key, false);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "typeid",
                value: typeid
            },
            {
                key: "pagesize",
                value: pagesize
            },
            {
                key: "pagesize",
                value: pagesize
            },
            {
                key: "currentpage",
                value: currentpage
            }
        ],
        Key
    );

    var data = {
        appid: appId,
        method: method,
        charset: charset,
        signtype: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        typeid: typeid,
        pagesize: pagesize,
        currentpage: currentpage
    };

    $.ajax({
        type: "GET",
        url: F._url_join(F._initTopComputer_cp, data),
        // data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);
        },
        error: function(ret) {
            callback(false);
        }
    });
};

// 用户登入
F._userAction_login = function(params, callback) {
    var Key = "userKey";

    var provider = "0";
    var msisdn = params.msisdn;
    var password = params.password || "";
    var otp = params.otp || "";
    var appid = params.appid || "";

    var md5EncryptStrig = "";
    md5EncryptStrig += "provider=" + provider;
    md5EncryptStrig += "&msisdn=" + msisdn;
    md5EncryptStrig += "&password=" + password;
    md5EncryptStrig += "&otp=" + otp;
    md5EncryptStrig += "&appid=" + appid;
    md5EncryptStrig += Key;
    var encrypt = md5(md5EncryptStrig);

    var data = {
        provider: provider,
        msisdn: msisdn,
        password: password,
        otp: otp,
        appid: appid,
        encryption: encrypt
    };

    var loading = new F._loading();
    loading.show();
    $.ajax({
        type: "POST",
        url: F._userAction_login_uc,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);

            loading.hide();
            switch (ret.status) {
                case 10000:
                    // function createLoginSssion(funId, msisdn) {
                    //     sessionStorage.setItem("funId", funId);
                    //     localStorage.setItem("funId", funId);
                    //     localStorage.setItem("msisdn", msisdn);
                    //     localStorage.setItem("validTime", +new Date() + 7 * 24 * 60 * 60 * 1000);
                    // }

                    sessionStorage.setItem("funId", ret.result);
                    localStorage.setItem("funId", ret.result);
                    localStorage.setItem("msisdn", ret.msisdn);
                    localStorage.setItem("validTime", +new Date() + 7 * 24 * 60 * 60 * 1000);

                    // createLoginSssion(ret.result, ret.msisdn);

                    F._userViewDetailInfo({}, function(ret) {
                        if (ret.data.username) localStorage.setItem("username", ret.data.username);

                        var hrefUtils_parse = F._hrefUtils.parse();
                        F.query = hrefUtils_parse.query;

                        if (hrefUtils_parse.path.slice(-10, -1) !== "login.htm") return false;

                        if (F.query) {
                            switch (F.query.from) {
                                case "register":
                                    window.location.href = "../index.html";
                                    break;

                                case "confirm":
                                    window.location.href = "../index.html";
                                    break;

                                default:
                                    window.history.go(-1);
                                    break;
                            }
                        } else {
                            window.history.go(-1);
                        }
                    });

                    break;

                case 60050:
                    if (data.otp) {
                        // 验证码登录
                        window.location.href = "./register.html?msisdn=" + data.msisdn + "&otp=" + data.otp;
                    } else {
                        F._confirm("Gợi ý", "Tên đăng nhập hoặc mật khẩu không hợp lệ", "error", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);
                    }
                    break;

                case 70002:
                    F._confirm("Gợi ý", "Mã xác nhận SMS không đúng", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "Tên đăng nhập hoặc mật khẩu không hợp lệ", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
            callback(ret);
        },
        error: function(ret) {
            callback(false);
        }
    });
};

// 发送短信
F._userAction_otp = function(params, callback) {
    var Key = "userKey";

    var provider = "0";
    var msisdn = params.msisdn;
    var type = params.type || "1";

    var md5EncryptStrig = "";
    md5EncryptStrig += "provider=" + provider;
    md5EncryptStrig += "&msisdn=" + msisdn;
    md5EncryptStrig += "&type=" + type;
    md5EncryptStrig += Key;
    var encrypt = md5(md5EncryptStrig);

    var data = {
        provider: provider,
        msisdn: msisdn,
        type: type,
        encryption: encrypt
    };

    $.ajax({
        type: "POST",
        url: F._userAction_otp_uc,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);
            switch (ret.status) {
                case 10000:
                    // TODO
                    break;

                case 70001:
                    F._confirm("Gợi ý", "Không thể gửi", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 70002:
                    F._confirm("Gợi ý", "Không thể gửi", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 70003:
                    F._confirm("Gợi ý", "Không thể gửi", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "Không thể gửi", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            callback(false);
        }
    });
};

// 批量订单-创建
F._batchCreateOrder = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "tradeKey";

    var appId = "0";
    var method = "fun.trade.batchCreateOrder";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "2.0";
    var funid = localStorage.getItem("funId");
    var orderdetails = params.orderdetails;
    var msisdn = params.msisdn;
    var address = params.address;
    var username = params.username;
    var remark = params.remark;

    var signType = F._signType_MD5(appId, method, charset, Key, true);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "funid",
                value: funid
            },
            {
                key: "orderdetails",
                value: orderdetails
            },
            {
                key: "msisdn",
                value: msisdn
            },
            {
                key: "address",
                value: address
            },
            {
                key: "username",
                value: username
            },
            {
                key: "remark",
                value: remark
            }
        ],
        Key
    );

    var data = {
        appid: appId,
        method: method,
        charset: charset,
        signtype: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        funid: funid,
        orderdetails: orderdetails,
        msisdn: msisdn,
        address: address,
        username: username,
        remark: remark
    };

    $.ajax({
        type: "POST",
        url: F._batchCreateOrder_td,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.code) {
                case 10000:
                    break;

                case 60001:
                    F._confirm("Gợi ý", "Đã hết hàng", "tips", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);

                    break;

                case 60005:
                    // 订单已创建
                    F._confirm("Gợi ý", "Đơn hàng đã được xác lập, vui lòng tới trang đơn hàng của tôi để thanh toán", "tips", [
                        {
                            name: "Thanh toán",
                            func: function() {
                                window.location.href = "./order.html";
                            }
                        }
                    ]);
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "Đặt hàng thất bại", "tips", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 批量订单-支付
F._batchPayment = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "tradeKey";

    var appId = "0";
    var method = "fun.trade.batchPayment";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "2.0";
    var funid = localStorage.getItem("funId");
    // var orderdetails = params.orderdetails;
    var payway = params.payway;
    var paypassword = params.paypassword;
    var orderno = params.orderno;
    var tradeno = params.tradeno;

    var signType = F._signType_MD5(appId, method, charset, Key, true);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "funid",
                value: funid
            },
            {
                key: "orderno",
                value: orderno
            },
            {
                key: "tradeno",
                value: tradeno
            },
            {
                key: "payway",
                value: payway
            },
            {
                key: "paypassword",
                value: paypassword
            }
        ],
        Key
    );

    var data = {
        appid: appId,
        method: method,
        charset: charset,
        signtype: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        funid: funid,
        // orderdetails: orderdetails,
        orderno: orderno,
        tradeno: tradeno,
        payway: payway,
        paypassword: paypassword
    };

    var loading = new F._loading();
    if (payway == "1") {
        $.ajax({
            type: "POST",
            url: F._batchPayment_td,
            data: data,
            success: function(ret) {
                ret = JSON.parse(ret);
                callback(ret);

                switch (ret.code) {
                    case 10000:
                        // window.location.href = './successPay.html';
                        break;

                    case 40005: // 信息未完善
                        F._confirm("Gợi ý", "Bạn chưa hoàn thiện thông tin chi tiết, vui lòng hoàn thiện trước", "tips", [
                            {
                                name: "Để sau",
                                func: function() {}
                            },
                            {
                                name: "Hoàn thiện ngay",
                                func: function() {
                                    // getSchoolInfo_addInfo();
                                }
                            }
                        ]);

                        break;

                    case 50010: // 订单过期
                        F._confirm("Gợi ý", "Đơn hàng đã quá hạn", "tips", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);

                        break;

                    case 40008: // Số dư không đủ
                        F._confirm("Gợi ý", "Số dư không đủ", "tips", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);

                        break;

                    case 50006: // 用户被加入黑名单
                        F._confirm("Gợi ý", "Người dùng đã bị thêm vào danh sách đen, xin hãy liên hệ chăm sóc khách hang", "tips", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);

                        break;

                    case 60051: // 交易密码错误
                        F._confirm("Gợi ý", "Mật mã giao dịch sai", "tips", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);
                        break;

                    default:
                        $("#loading").remove();
                        F._confirm("Gợi ý", "Thanh toán thất bại", "tips", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);
                        break;
                }
            },
            error: function(ret) {
                console.error("request error");
                callback(false);
            }
        });
    } else {
        loading.hide();
        if (params._noConfirm) {
            var full_confirm = F._confirm("Gợi ý", "Môi trường của bạn an toàn và bạn có thể yên tâm thanh toán", "success", [
                {
                    name: "Thanh toán",
                    func: function() {
                        window.open(F._url_joint(F._batchPayment_td, data));
                        full_confirm.close();
                        F._confirm("Gợi ý", "", "tips", [
                            {
                                name: "Thanh toán thất bại",
                                func: function() {
                                    window.location.href = "../index.html";
                                }
                            },
                            {
                                name: "Thanh toán thành công",
                                func: function() {
                                    window.location.href = "./order.html";
                                }
                            }
                        ]);
                    }
                }
            ]);
        } else {
            var full_confirm = F._confirm("Gợi ý", "Đơn hàng được khởi tạo thành công", "success", [
                {
                    name: "Thanh toán",
                    func: function() {
                        window.open(F._url_joint(F._batchPayment_td, data));
                        full_confirm.close();
                        F._confirm("Gợi ý", "", "tips", [
                            {
                                name: "Thanh toán thất bại",
                                func: function() {
                                    window.location.href = "../index.html";
                                }
                            },
                            {
                                name: "Thanh toán thành công",
                                func: function() {
                                    window.location.href = "./order.html";
                                }
                            }
                        ]);
                    }
                }
            ]);
        }
    }
};

// 创建（全额）订单
F._fullOrderCreate = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "tradeKey";

    var appId = localStorage.getItem("funId");
    var method = "fun.trade.full.createOrder";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "1.0";

    var orderno = (function() {
        var mydate = new Date();
        return appId + mydate.getDay() + mydate.getHours() + mydate.getMinutes() + mydate.getSeconds() + mydate.getMilliseconds() + Math.round(Math.random() * 10000);
    })();
    var funid = localStorage.getItem("funId");
    var totalamount = params.totalamount;
    var orgamount = params.orgamount;
    var advance = params.advance;
    var payrate = params.payrate;
    var repaymentmonth = params.repaymentmonth;
    var currency = "VND";
    var subject = params.subject;
    var goodsdetail = params.goodsdetail;
    var timeoutexpress = params.timeoutexpress;
    var msisdn = params.msisdn;
    var address = params.address;
    var username = params.username;
    var remark = params.remark || "";
    var number = params.number;

    var signType = F._signType_MD5(appId, method, charset, Key, true);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "orderno",
                value: orderno
            },
            {
                key: "funid",
                value: funid
            },
            {
                key: "totalamount",
                value: totalamount
            },
            {
                key: "orgamount",
                value: orgamount
            },
            {
                key: "advance",
                value: advance
            },
            {
                key: "payrate",
                value: payrate
            },
            {
                key: "repaymentmonth",
                value: repaymentmonth
            },
            {
                key: "currency",
                value: currency
            },
            {
                key: "subject",
                value: subject
            },
            {
                key: "goodsdetail",
                value: goodsdetail
            },
            {
                key: "timeoutexpress",
                value: timeoutexpress
            },
            {
                key: "msisdn",
                value: msisdn
            },
            {
                key: "address",
                value: address
            },
            {
                key: "username",
                value: username
            },
            {
                key: "remark",
                value: remark
            },
            {
                key: "number",
                value: number
            }
        ],
        Key
    );

    var data = {
        appid: appId,
        method: method,
        charset: charset,
        signtype: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        orderno: orderno,
        funid: funid,
        totalamount: totalamount,
        orgamount: orgamount,
        advance: advance,
        payrate: payrate,
        repaymentmonth: repaymentmonth,
        currency: currency,
        subject: subject,
        goodsdetail: goodsdetail,
        timeoutexpress: timeoutexpress,
        msisdn: msisdn,
        address: address,
        username: username,
        remark: remark,
        number: number
    };
    $.ajax({
        type: "POST",
        url: F._createFullPayOrder_td,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);
            switch (ret.code) {
                case 10000:
                    break;

                case 60001:
                    F._confirm("Gợi ý", "Đã hết hàng", "tips", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);

                    break;

                case 60005:
                    // 订单已创建
                    F._confirm("Gợi ý", "Đơn hàng đã được xác lập, vui lòng tới trang đơn hàng của tôi để thanh toán", "tips", [
                        {
                            name: "Thanh toán",
                            func: function() {
                                window.location.href = "./order.html";
                            }
                        }
                    ]);
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "Đặt hàng thất bại", "tips", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 支付（全额）订单
F._orderFullPay = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "tradeKey";

    var appId = localStorage.getItem("funId");
    var method = "fun.trade.full.pay";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "1.0";
    var orderno = params.orderNo;
    var tradeno = params.tradeNo;
    var advance = params.advance;
    var payway = params.payway;
    var paypassword = params.paypassword || "";

    var signType = F._signType_MD5(appId, method, charset, Key, true);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "orderno",
                value: orderno
            },
            {
                key: "tradeno",
                value: tradeno
            },
            {
                key: "advance",
                value: advance
            },
            {
                key: "payway",
                value: payway
            },
            {
                key: "paypassword",
                value: paypassword
            }
        ],
        Key
    );

    var data = {
        appid: appId,
        method: method,
        charset: charset,
        signtype: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        orderno: orderno,
        tradeno: tradeno,
        advance: advance,
        payway: payway,
        paypassword: paypassword
    };

    var loading = new F._loading();
    if (payway == "1") {
        $.ajax({
            type: "POST",
            url: F._FullPaymentOrder_td,
            data: data,
            success: function(ret) {
                ret = JSON.parse(ret);
                callback(ret);

                switch (ret.code) {
                    case 10000:
                        // window.location.href = './successPay.html';
                        break;

                    case 40005: // 信息未完善
                        F._confirm("Gợi ý", "Bạn chưa hoàn thiện thông tin chi tiết, vui lòng hoàn thiện trước", "tips", [
                            {
                                name: "Để sau",
                                func: function() {}
                            },
                            {
                                name: "Hoàn thiện ngay",
                                func: function() {
                                    // getSchoolInfo_addInfo();
                                }
                            }
                        ]);

                        break;

                    case 50010: // 订单过期
                        F._confirm("Gợi ý", "Đơn hàng đã quá hạn", "tips", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);

                        break;

                    case 40008: // Số dư không đủ
                        F._confirm("Gợi ý", "Số dư không đủ", "tips", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);

                        break;

                    case 50006: // 用户被加入黑名单
                        F._confirm("Gợi ý", "Người dùng đã bị thêm vào danh sách đen, xin hãy liên hệ chăm sóc khách hang", "tips", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);

                        break;

                    case 60051: // 交易密码错误
                        F._confirm("Gợi ý", "Mật mã giao dịch sai", "tips", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);
                        break;

                    default:
                        $("#loading").remove();
                        F._confirm("Gợi ý", "Thanh toán thất bại", "tips", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);
                        break;
                }
            },
            error: function(ret) {
                console.error("request error");
                callback(false);
            }
        });
    } else {
        loading.hide();
        if (params._noConfirm) {
            var full_confirm = F._confirm("Gợi ý", "Môi trường của bạn an toàn và bạn có thể yên tâm thanh toán", "success", [
                {
                    name: "Thanh toán",
                    func: function() {
                        window.open(F._url_joint(F._FullPaymentOrder_td, data));
                        full_confirm.close();
                        F._confirm("Gợi ý", "", "tips", [
                            {
                                name: "Thanh toán thất bại",
                                func: function() {
                                    window.location.href = "../index.html";
                                }
                            },
                            {
                                name: "Thanh toán thành công",
                                func: function() {
                                    window.location.href = "./order.html";
                                }
                            }
                        ]);
                    }
                }
            ]);
        } else {
            var full_confirm = F._confirm("Gợi ý", "Đơn hàng được khởi tạo thành công", "success", [
                {
                    name: "Thanh toán",
                    func: function() {
                        window.open(F._url_joint(F._FullPaymentOrder_td, data));
                        full_confirm.close();
                        F._confirm("Gợi ý", "", "tips", [
                            {
                                name: "Thanh toán thất bại",
                                func: function() {
                                    window.location.href = "../index.html";
                                }
                            },
                            {
                                name: "Thanh toán thành công",
                                func: function() {
                                    window.location.href = "./order.html";
                                }
                            }
                        ]);
                    }
                }
            ]);
        }
    }
};

// 创建（分期）订单
F._createOrder = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "tradeKey";
    var appId = localStorage.getItem("funId");
    var method = "fun.trade.create";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "1.0";
    var notifyUrlBg = "notifyUrlBg";
    var timeoutExpress = "86400";
    var currency = "VND";
    var remark = "nothing";
    var orderNo = (function() {
        var mydate = new Date();
        return appId + mydate.getDay() + mydate.getHours() + mydate.getMinutes() + mydate.getSeconds() + mydate.getMilliseconds() + Math.round(Math.random() * 10000);
    })();
    var funid = localStorage.getItem("funId");
    var totalAmount = params.totalAmount;
    var orgAmount = params.orgAmount;
    var advance = params.advance;
    var payRate = params.payRate;
    var repaymentMonth = params.repaymentMonth;
    var subject = params.subject;
    var goodsDetail = params.goodsDetail;
    var msisdn = params.msisdn;
    var address = params.address;
    var username = params.username;
    var number = params.number;

    var signType = F._signType_MD5(appId, method, charset, Key, false);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "orderNo",
                value: orderNo
            },
            {
                key: "funid",
                value: funid
            },
            {
                key: "totalAmount",
                value: totalAmount
            },
            {
                key: "orgAmount",
                value: orgAmount
            },
            {
                key: "advance",
                value: advance
            },
            {
                key: "payRate",
                value: payRate
            },
            {
                key: "repaymentMonth",
                value: repaymentMonth
            },
            {
                key: "currency",
                value: currency
            },
            {
                key: "subject",
                value: subject
            },
            {
                key: "goodsDetail",
                value: goodsDetail
            },
            {
                key: "timeoutExpress",
                value: timeoutExpress
            },
            {
                key: "msisdn",
                value: msisdn
            },
            {
                key: "address",
                value: address
            },
            {
                key: "username",
                value: username
            },
            {
                key: "remark",
                value: remark
            },
            {
                key: "number",
                value: number
            }
        ],
        Key
    );

    var data = {
        appId: appId,
        method: method,
        charset: charset,
        signType: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        notifyUrlBg: notifyUrlBg,
        orderNo: orderNo,
        funid: funid,
        totalAmount: totalAmount,
        orgAmount: orgAmount,
        advance: advance,
        payRate: payRate,
        repaymentMonth: repaymentMonth,
        currency: currency,
        subject: subject,
        goodsDetail: goodsDetail,
        timeoutExpress: timeoutExpress,
        msisdn: msisdn,
        address: address,
        username: username,
        remark: remark,
        number: number
    };

    $.ajax({
        type: "POST",
        url: F._createOrder_td,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);
            switch (ret.code) {
                case 10000:
                    break;

                case 60001:
                    F._confirm("Gợi ý", "Đã hết hàng", "tips", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);

                    break;

                case 40000:
                    // 加密错误
                    F._confirm("Gợi ý", "Đặt hàng thất bại", "tips", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 50020:
                    // http调用错误
                    F._confirm("Gợi ý", "Đặt hàng thất bại", "tips", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                case 60005:
                    // 订单已创建
                    F._confirm("Gợi ý", "Đơn hàng đã được xác lập, vui lòng tới trang đơn hàng của tôi để thanh toán", "tips", [
                        {
                            name: "Thanh toán",
                            func: function() {
                                window.location.href = "./order.html";
                            }
                        }
                    ]);
                    break;

                case 50000:
                    // 系统运行错误 (表示创建错误)
                    F._confirm("Gợi ý", "Đặt hàng thất bại", "tips", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "Đặt hàng thất bại", "tips", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 支付（分期）订单
F._payOrder = function(params, callback) {
    if (!F._isLogin()) return false;

    var appId = localStorage.getItem("funId");
    var method = "fun.trade.pay";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "1.0";
    var Key = "tradeKey";
    var currency = "VND";
    var subject = "repayment";
    var timeoutExpress = params.timeoutExpress; // 半个小时
    var totalAmount = params.totalAmount; // 总金额
    var orderNo = params.orderNo;
    var tradeNo = params.tradeNo;
    var advance = params.advance;
    var payRate = params.payRate;
    var repaymentMonth = params.repaymentMonth;
    var prepay = params.prepay;
    var payway = params.payway;
    var paypassword = params.paypassword || "";

    var signType = F._signType_MD5(appId, method, charset, Key, false);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "orderNo",
                value: orderNo
            },
            {
                key: "tradeNo",
                value: tradeNo
            },
            {
                key: "totalAmount",
                value: totalAmount
            },
            {
                key: "advance",
                value: advance
            },
            {
                key: "payRate",
                value: payRate
            },
            {
                key: "repaymentMonth",
                value: repaymentMonth
            },
            {
                key: "prepay",
                value: prepay
            },
            {
                key: "payway",
                value: payway
            },
            {
                key: "paypassword",
                value: paypassword
            }
        ],
        Key
    );

    var data = {
        appId: appId,
        method: method,
        charset: charset,
        signType: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        orderNo: orderNo,
        tradeNo: tradeNo,
        totalAmount: totalAmount,
        advance: advance,
        payRate: payRate,
        repaymentMonth: repaymentMonth,
        prepay: prepay,
        payway: payway,
        paypassword: paypassword
    };

    var loading = new F._loading();
    if (payway == "1") {
        $.ajax({
            type: "POST",
            url: F._payOrder_td,
            data: data,
            success: function(ret) {
                ret = JSON.parse(ret);
                callback(ret);
                switch (ret.code) {
                    case 10000:
                        // F.is_submit = true;
                        // window.location.href = './successPay.html';
                        break;

                    case 40005: // 信息未完善
                        F._confirm("Gợi ý", "Bạn chưa hoàn thiện thông tin chi tiết, vui lòng hoàn thiện trước", "tips", [
                            {
                                name: "Để sau",
                                func: function() {}
                            },
                            {
                                name: "Hoàn thiện ngay",
                                func: function() {
                                    // getSchoolInfo_addInfo();
                                }
                            }
                        ]);
                        break;

                    case 50010: // 订单过期
                        F._confirm("Gợi ý", "Đơn hàng đã quá hạn", "tips", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);
                        break;

                    case 40008: // Số dư không đủ
                        F._confirm("Gợi ý", "Số dư không đủ", "tips", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);
                        break;

                    case 40060: // 学校不支持分期
                        F._confirm("Gợi ý", "Trường của bạn không hỗ trợ chương trình trả góp, bạn vui lòng thanh toán toàn bộ", "tips", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);
                        break;

                    case 50006: // 用户被加入黑名单
                        F._confirm("Gợi ý", "Người dùng đã bị thêm vào danh sách đen, xin hãy liên hệ chăm sóc khách hang", "tips", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);
                        break;

                    case 60051: // 交易密码错误
                        F._confirm("Gợi ý", "Mật mã giao dịch sai", "tips", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);
                        break;

                    default:
                        $("#loading").remove();
                        F._confirm("Gợi ý", "Thanh toán thất bại", "error", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);
                        break;
                }
            },
            error: function(ret) {
                console.error("request error");
                callback(false);
            }
        });
    } else {
        loading.hide();
        if (params._noConfirm) {
            var full_confirm = F._confirm("Gợi ý", "Môi trường của bạn an toàn và bạn có thể yên tâm thanh toán", "success", [
                {
                    name: "Thanh toán",
                    func: function() {
                        window.open(F._url_joint(F._payOrder_td, data));
                        full_confirm.close();
                        F._confirm("Gợi ý", "", "tips", [
                            {
                                name: "Thanh toán thất bại",
                                func: function() {
                                    window.location.href = "../index.html";
                                }
                            },
                            {
                                name: "Thanh toán thành công",
                                func: function() {
                                    window.location.href = "./order.html";
                                }
                            }
                        ]);
                    }
                }
            ]);
        } else {
            var full_confirm = F._confirm("Gợi ý", "Đơn hàng được khởi tạo thành công", "success", [
                {
                    name: "Thanh toán",
                    func: function() {
                        window.open(F._url_joint(F._payOrder_td, data));
                        full_confirm.close();
                        F._confirm("Gợi ý", "", "tips", [
                            {
                                name: "Thanh toán thất bại",
                                func: function() {
                                    window.location.href = "../index.html";
                                }
                            },
                            {
                                name: "Thanh toán thành công",
                                func: function() {
                                    window.location.href = "./order.html";
                                }
                            }
                        ]);
                    }
                }
            ]);
        }
    }
};

// 创建（还款）订单
F._createNormalOrder = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "tradeKey";

    var appId = localStorage.getItem("funId");
    var method = "fun.trade.createnormal";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "1.0";
    var notifyUrlBg = "";
    var orderNo = (function() {
        var mydate = new Date();
        return appId + mydate.getDay() + mydate.getHours() + mydate.getMinutes() + mydate.getSeconds() + mydate.getMilliseconds() + Math.round(Math.random() * 10000);
    })();
    var funid = localStorage.getItem("funId");
    var totalAmount = params.totalAmount; // 总金额
    var currency = params.currency;
    var subject = params.subject;
    var repaymentMonth = params.repaymentMonth;
    var goodsDetail = params.goodsDetail;
    var timeoutExpress = params.timeoutExpress;
    var orderNo1 = params.orderNo1;
    var tradeNo1 = params.tradeNo1;

    var signType = F._signType_MD5(appId, method, charset, Key, false);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "orderNo",
                value: orderNo
            },
            {
                key: "funid",
                value: funid
            },
            {
                key: "totalAmount",
                value: totalAmount
            },
            {
                key: "currency",
                value: currency
            },
            {
                key: "subject",
                value: subject
            },
            {
                key: "repaymentMonth",
                value: repaymentMonth
            },
            {
                key: "goodsDetail",
                value: goodsDetail
            },
            {
                key: "timeoutExpress",
                value: timeoutExpress
            },
            {
                key: "orderNo1",
                value: orderNo1
            },
            {
                key: "tradeNo1",
                value: tradeNo1
            }
        ],
        Key
    );

    var data = {
        appId: appId,
        method: method,
        charset: charset,
        signType: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        notifyUrlBg: notifyUrlBg,
        orderNo: orderNo,
        funid: funid,
        totalAmount: totalAmount,
        currency: currency,
        subject: subject,
        repaymentMonth: repaymentMonth,
        goodsDetail: goodsDetail,
        timeoutExpress: timeoutExpress,
        orderNo1: orderNo1,
        tradeNo1: tradeNo1
    };

    $.ajax({
        type: "POST",
        url: F._createNormalOrder_td,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);

            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "Đơn hàng được khởi tạo thất bại", "tips", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 支付（还款）订单
F._payNormalOrder = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "tradeKey";

    var appId = localStorage.getItem("funId");
    var method = "fun.trade.paynormal";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "1.0";
    var orderNo = params.orderNo;
    var tradeNo = params.tradeNo;
    var repaymentMonth = params.repaymentMonth;
    var totalAmount = params.amount;
    var payway = params.payWay;
    var paypassword = params.paypassword || "";

    var signType = F._signType_MD5(appId, method, charset, Key, false);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "orderNo",
                value: orderNo
            },
            {
                key: "tradeNo",
                value: tradeNo
            },
            {
                key: "repaymentMonth",
                value: repaymentMonth
            },
            {
                key: "totalAmount",
                value: totalAmount
            },
            {
                key: "payway",
                value: payway
            },
            {
                key: "paypassword",
                value: paypassword
            }
        ],
        Key
    );

    // var md5EncryptStrig = "";
    // md5EncryptStrig += "orderNo=" + orderNo;
    // md5EncryptStrig += "&tradeNo=" + tradeNo;
    // md5EncryptStrig += "&repaymentMonth=" + repaymentMonth;
    // md5EncryptStrig += "&totalAmount=" + totalAmount;
    // md5EncryptStrig += "&payway=" + payway;
    // md5EncryptStrig += "&paypassword=" + paypassword;
    // md5EncryptStrig += Key;
    // var encrypt = md5(md5EncryptStrig);

    var data = {
        appId: appId,
        method: method,
        charset: charset,
        signType: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        orderNo: orderNo,
        tradeNo: tradeNo,
        repaymentMonth: repaymentMonth,
        totalAmount: totalAmount,
        payway: payway,
        paypassword: paypassword
    };
    if (payway == "1") {
        $.ajax({
            type: "POST",
            url: F._payNormalOrder_td,
            data: data,
            success: function(ret) {
                ret = JSON.parse(ret);
                callback(ret);

                switch (ret.code) {
                    case 10000:
                        break;

                    case 60051: // 交易密码错误
                        F._confirm("Gợi ý", "Mật mã giao dịch sai", "tips", [
                            {
                                name: "Xác nhận",
                                func: function() {}
                            }
                        ]);
                        break;

                    default:
                        $("#loading").remove();
                        window.location.href = "./errorPay.html";
                        break;
                }
            },
            error: function(ret) {
                console.error("request error");
                callback(false);
            }
        });
    } else {
        var loading = new F._loading();
        loading.hide();
        if (params._noConfirm) {
            var full_confirm = F._confirm("Gợi ý", "Môi trường của bạn an toàn và bạn có thể yên tâm thanh toán", "success", [
                {
                    name: "Thanh toán",
                    func: function() {
                        window.open(F._url_join(F._payNormalOrder_td, data));
                        full_confirm.close();
                        F._confirm("Gợi ý", "", "tips", [
                            {
                                name: "Thanh toán thất bại",
                                func: function() {
                                    window.location.href = "../index.html";
                                }
                            },
                            {
                                name: "Thanh toán thành công",
                                func: function() {
                                    window.location.href = "./bill.html";
                                }
                            }
                        ]);
                    }
                }
            ]);
        } else {
            var full_confirm = F._confirm("Gợi ý", "Đơn hàng được khởi tạo thành công", "success", [
                {
                    name: "Thanh toán",
                    func: function() {
                        window.open(F._url_join(F._payNormalOrder_td, data));
                        full_confirm.close();
                        F._confirm("Gợi ý", "", "tips", [
                            {
                                name: "Thanh toán thất bại",
                                func: function() {
                                    window.location.href = "../index.html";
                                }
                            },
                            {
                                name: "Thanh toán thành công",
                                func: function() {
                                    window.location.href = "./bill.html";
                                }
                            }
                        ]);
                    }
                }
            ]);
        }
    }
};

// 修改/添加用户详细信息
F._userAddDetailInfo = function(params, callback) {
    if (!F._isLogin()) return false;

    var Key = "userKey";
    var appId = localStorage.getItem("funId");
    var method = "fun.uc.useradddetail";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);

    var version = "1.0";

    var username = params.username;
    var funid = localStorage.getItem("funId");
    var sex = params.sex;
    var identification = params.identification;
    var address = params.address;
    var email = params.email;
    var collegename = params.collegename;
    var collegeaddr = params.collegeaddr;
    var department = params.department;
    var specialty = params.specialty;
    var degree = params.degree;
    var admissiontime = params.admissiontime;
    var graduationtime = params.graduationtime;
    var connectusername1 = params.connectusername1;
    var connectusermsisdn1 = params.connectusermsisdn1;
    var connectuserrelation1 = params.connectuserrelation1;
    var connectuseridentification1 = params.connectuseridentification1;
    var connectusername2 = params.connectusername2;
    var connectusermsisdn2 = params.connectusermsisdn2;
    var connectuserrelation2 = params.connectuserrelation2;
    var connectuseridentification2 = params.connectuseridentification2;
    var connectusername3 = params.connectusername3;
    var connectusermsisdn3 = params.connectusermsisdn3;
    var connectuserrelation3 = params.connectuserrelation3;
    var connectuseridentification3 = params.connectuseridentification3;
    var headimage = params.headimage;
    var birthday = params.birthday;

    var signType = F._signType_MD5(appId, method, charset, Key, false);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "username",
                value: username
            },
            {
                key: "funid",
                value: funid
            },
            {
                key: "birthday",
                value: birthday
            },
            {
                key: "identification",
                value: identification
            },
            {
                key: "address",
                value: address
            },
            {
                key: "email",
                value: email
            },
            {
                key: "connectusername1",
                value: connectusername1
            },
            {
                key: "connectusermsisdn1",
                value: connectusermsisdn1
            },
            {
                key: "connectuserrelation1",
                value: connectuserrelation1
            },
            {
                key: "connectuseridentification1",
                value: connectuseridentification1
            },
            {
                key: "connectusername2",
                value: connectusername2
            },
            {
                key: "connectusermsisdn2",
                value: connectusermsisdn2
            },
            {
                key: "connectuserrelation2",
                value: connectuserrelation2
            },
            {
                key: "connectuseridentification2",
                value: connectuseridentification2
            },
            {
                key: "connectusername3",
                value: connectusername3
            },
            {
                key: "connectusermsisdn3",
                value: connectusermsisdn3
            },
            {
                key: "connectuserrelation3",
                value: connectuserrelation3
            },
            {
                key: "connectuseridentification3",
                value: connectuseridentification3
            },
            {
                key: "collegeaddr",
                value: collegeaddr
            },
            {
                key: "collegename",
                value: collegename
            },
            {
                key: "degree",
                value: degree
            },
            {
                key: "headimage",
                value: headimage
            },
            {
                key: "sex",
                value: sex
            },
            {
                key: "department",
                value: department
            },
            {
                key: "specialty",
                value: specialty
            },
            {
                key: "admissiontime",
                value: admissiontime
            },
            {
                key: "graduationtime",
                value: graduationtime
            }
        ],
        Key
    );

    var data = {
        appId: appId,
        method: method,
        charset: charset,
        signType: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        username: username,
        funid: funid,
        birthday: birthday,
        identification: identification,
        address: address,
        email: email,
        connectusername1: connectusername1,
        connectusermsisdn1: connectusermsisdn1,
        connectuserrelation1: connectuserrelation1,
        connectuseridentification1: connectuseridentification1,
        connectusername2: connectusername2,
        connectusermsisdn2: connectusermsisdn2,
        connectuserrelation2: connectuserrelation2,
        connectuseridentification2: connectuseridentification2,
        connectusername3: connectusername3,
        connectusermsisdn3: connectusermsisdn3,
        connectuserrelation3: connectuserrelation3,
        connectuseridentification3: connectuseridentification3,
        collegeaddr: collegeaddr,
        collegename: collegename,
        degree: degree,
        headimage: headimage,
        sex: sex,
        department: department,
        specialty: specialty,
        admissiontime: admissiontime,
        graduationtime: graduationtime
    };

    $.ajax({
        type: "POST",
        url: F._userAddDetailInfo_uc,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            callback(ret);
            switch (ret.code) {
                case 10000:
                    break;

                default:
                    $("#loading").remove();
                    F._confirm("Gợi ý", "error", "error", [
                        {
                            name: "Xác nhận",
                            func: function() {}
                        }
                    ]);
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 获取用户详细信息
F._userViewDetailInfo = function(params, callback) {
    var appId = localStorage.getItem("funId");
    var method = "fun.uc.userviewdetail";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "1.0";
    var Key = "userKey";
    var funid = localStorage.getItem("funId");

    var signType = F._signType_MD5(appId, method, charset, Key, false);

    var md5SigntypeStrig = "";
    md5SigntypeStrig += "appId=" + appId;
    md5SigntypeStrig += "&method=" + method;
    md5SigntypeStrig += "&charset=" + charset;
    md5SigntypeStrig += Key;
    var signType = md5(md5SigntypeStrig);

    var md5EncryptStrig = "";
    md5EncryptStrig += "funid=" + funid;
    md5EncryptStrig += "&msisdn=" + "";
    md5EncryptStrig += Key;
    var encrypt = md5(md5EncryptStrig);

    var data = {
        appId: appId,
        method: method,
        charset: charset,
        timestamp: timestamp,
        version: version,
        Key: Key,
        funid: funid,
        msisdn: "",
        signType: signType,
        encrypt: encrypt
    };

    $.ajax({
        type: "POST",
        url: F._userViewDetailInfo_uc,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);

            var is_fullInfo = true;
            switch (ret.code) {
                case 10000:
                    if (ret.identification.length === 0) {
                        is_fullInfo = false;
                    }

                    if (ret.address.length === 0) {
                        is_fullInfo = false;
                    }

                    if (ret.connectusername1.length === 0) {
                        is_fullInfo = false;
                    }

                    if (ret.connectusermsisdn1.length === 0) {
                        is_fullInfo = false;
                    }

                    if (ret.connectuserrelation1.length === 0) {
                        is_fullInfo = false;
                    }

                    if (ret.connectuseridentification1.length === 0) {
                        is_fullInfo = false;
                    }

                    if (ret.collegeaddr.length === 0) {
                        is_fullInfo = false;
                    }

                    if (ret.collegename.length === 0) {
                        is_fullInfo = false;
                    }

                    if (ret.birthday.length === 0) {
                        is_fullInfo = false;
                    }

                    if (is_fullInfo === false) {
                        callback({
                            status: false,
                            data: ret
                        });
                    } else {
                        callback({
                            status: true,
                            data: ret
                        });
                    }
                    break;

                case 40000:
                    callback({
                        status: false,
                        data: {}
                    });
                    break;

                default:
                    $("#loading").remove();
                    callback({
                        status: false,
                        data: {}
                    });
                    break;
            }
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 获取学校数据
F._getSchoolInfo = function(params, callback) {
    var Key = "userKey";
    var appId = localStorage.getItem("funId");
    var method = "fun.uc.getschoolinfo";
    var charset = "utf-8";
    var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
    var version = "1.0";

    var notifyurlbg = "";
    var name = params.name || ""; // 默认查全部

    var signType = F._signType_MD5(appId, method, charset, Key, true);

    var encrypt = F._encrypt_MD5(
        [
            {
                key: "name",
                value: name
            }
        ],
        Key
    );

    var data = {
        appid: appId,
        method: method,
        charset: charset,
        signtype: signType,
        encrypt: encrypt,
        timestamp: timestamp,
        version: version,
        notifyurlbg: notifyurlbg,
        name: name
    };

    $.ajax({
        type: "POST",
        url: F._getSchoolInfo_uc,
        data: data,
        success: function(ret) {
            ret = JSON.parse(ret);
            function edit_details(array) {
                var index;
                var result = [];
                for (index = 0; index < array.length; index++) {
                    if (array[index].staging !== 2) {
                        result.push(array[index]);
                    }
                }
                return result;
            }
            ret.details = edit_details(ret.details);
            callback(ret);
        },
        error: function(ret) {
            console.error("request error");
            callback(false);
        }
    });
};

// 22222222222222
F._run_accordionMenu = function(jQuery, data, callback) {
    function edit_demoListItem(array) {
        var index;
        var support_str = "";
        var nosupport_str = "";
        var result = "";

        for (index = 0; index < array.length; index++) {
            if (array[index].staging !== 2) {
                if (array[index].staging === 1) {
                    support_str += '<li class="demo-list-item demo-list-item_support" data-id="' + array[index].id + '" data-name="' + array[index].name + '"><a href="javascript:;">' + array[index].name + "</a></li>";
                } else {
                    nosupport_str += '<li class="demo-list-item demo-list-item_nosupport" data-id="' + array[index].id + '" data-name="' + array[index].name + '"><a href="javascript:;">' + array[index].name + "</a></li>";
                }
            }
        }
        result = support_str + nosupport_str;
        return result;
    }
    var html = '<div class="jquery-accordion-menu-content">\
            <div id="jquery-accordion-menu" class="jquery-accordion-menu red">\
                <div class="jquery-accordion-menu-header" id="form">\
                        <div class="jquery-accordion-menu-header-close">+</div>\
                </div>\
                <ul id="demo-list">' + edit_demoListItem(data) + "</ul>\
            </div>\
        </div>";

    $("body").append(html);

    $(".demo-list-item").on("click", function() {
        var self = $(this);
        var is_support = self.hasClass("demo-list-item_support");
        var id = self.data("id");
        var name = self.data("name");
        callback({
            id: id,
            name: name,
            is_support: is_support
        });
        is_support && $(".jquery-accordion-menu-content").remove();
    });

    $(".jquery-accordion-menu-header-close").on("click", function() {
        $(".jquery-accordion-menu-content").remove();
    });

    jQuery("#jquery-accordion-menu").jqueryAccordionMenu();
    (function($) {
        $.expr[":"].Contains = function(a, i, m) {
            return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
        };
        function filterList(header, list) {
            var form = $("<form>").attr({
                    class: "filterform",
                    action: "#"
                }),
                input = $("<input>").attr({
                    class: "filterinput",
                    type: "text",
                    placeholder: "Tìm kiếm"
                });
            $(form)
                .append(input)
                .appendTo(header);
            $(input)
                .change(function() {
                    var filter = $(this).val();
                    if (filter) {
                        $matches = $(list)
                            .find("a:Contains(" + filter + ")")
                            .parent();
                        $("li", list)
                            .not($matches)
                            .slideUp();
                        $matches.slideDown();
                    } else {
                        $(list)
                            .find("li")
                            .slideDown();
                    }
                    return false;
                })
                .keyup(function() {
                    $(this).change();
                });
        }
        $(function() {
            filterList($("#form"), $("#demo-list"));
        });
    })(jQuery);

    //顶部导航切换
    $("#demo-list li").click(function() {
        $("#demo-list li.active").removeClass("active");
        $(this).addClass("active");
    });
};

F._checkValidLogin = function() {
    var validTime = localStorage.getItem("validTime");
    if (validTime) {
        if (+validTime <= +new Date()) {
            // Invalid
            localStorage.clear();
        }
    }
};

F._hrefUtils = (function(loc) {
    var utils = {
        convertQs: function(qs) {
            var qs = qs || loc.search.substring(1);
            if (!qs) return null;
            var qsArr = qs.split(/&/),
                qsPar = {};
            for (var i = 0; i < qsArr.length; i++) {
                if (qsArr[i]) {
                    var nm = qsArr[i].split(/=/);
                    qsPar[decodeURIComponent(nm[0])] = decodeURIComponent(nm[1] || "");
                }
            }
            return qsPar;
        }
    };

    function parse(url) {
        var i;
        var url = url || loc.href;
        var regExp = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
        var names = ["url", "scheme", "slash", "host", "port", "path", "query", "hash"];
        var result = regExp.exec(url);
        var result_format = {};

        for (i = 0; i < names.length; i += 1) {
            result_format[names[i]] = result[i];
        }
        result_format.query = utils.convertQs(result_format.query);

        return result_format;
    }

    return {
        parse: parse
    };
})(location);

function header_add() {
    var dot_str = is_dot_for_index();
    var html_str = '\
        <div class="header__nav">\
            <div class="header__nav-main">\
                <div class="header__n-m-left header__n-m-left_login">\
                    <div class="header__n-m-l-item1">Xin chào, </div>\
                    <div class="header__n-m-l-item2">\
                        <div class="">\
                            <span class="header__n-m-l-i2-iphone" id="userMsisdn"></span>\
                            <span class="header__n-m-l-i2-arrow"></span>\
                        </div>\
                        <div class="userLogin-info">\
                            <div class="userLogin-info__top col-xs-24">\
                                <div class="userLogin-info__top-face" style="background-image: url(' + dot_str + './img/37.png);"></div>\
                                <div class="userLogin-info__top-order">\
                                    <p style="margin-bottom: 10px;">\
                                        <a href="' + dot_str + './html/order.html" class="userLogin-info__t-r-item1">Đơn hàng của tôi</a>\
                                    </p>\
                                    <p>\
                                        <a href="' + dot_str + './html/bill.html" class="userLogin-info__t-r-item2">Hóa đơn của tôi</a>\
                                    </p>\
                                </div>\
                            </div>\
                            <div class="userLogin-info__bottom col-xs-24">\
                                <div class="userLogin-info__bottom-button" onclick="userQuit()">đăng xuất</div>\
                            </div>\
                        </div>\
                    </div>\
                    <a href="' + dot_str + './html/center.html" class="header__n-m-l-item3">Trung tâm cá nhân</a>\
                </div>\
                <div class="header__n-m-left header__n-m-left_nologin">\
                    <a href="' + dot_str + './html/login.html" class="header__n-m-l-login">Đăng nhập</a>\
                    <a href="' + dot_str + './html/register.html" class="header__n-m-l-reg">Đăng ký</a>\
                </div>\
                <div class="header__n-m-right">\
                    <a href="' + dot_str + './index.html" class="header__n-m-home">BUYOO Trang chủ</a>\
                    <!-- <a href="' + dot_str + './html/buyflowIntro.html" class="header__n-m-help">Mua hàng bằng cách nào</a> -->\
                    <!-- <a href="' + dot_str + './html/buyIntro.html" class="header__n-m-help">Trung tâm hỗ trợ</a> -->\
                </div>\
            </div>\
        </div>\
        <div class="header__content">\
            <div class="header__content-main">\
                <div class="header__c-m-logo">\
                    <a href="' + dot_str + './index.html" class="header__c-m-l-img" style="background-image: url(' + dot_str + './img/LOGO2.jpg);"></a>\
                </div>\
                <div class="header__c-m-search">\
                    <input type="text" class="header__c-m-s-input" id="findIpt" onkeydown="F._entersearch()" placeholder="Vui lòng nhập từ khóa tìm kiếm">\
                    <span class="header__c-m-s-button" onclick="F._gotoFind()" style="background-image: url(' + dot_str + './img/search_logo.png);"></span>\
                </div>\
                <div class="header__c-m-cart" onclick="window.location.href=\'' + dot_str + './html/cart.html\'">\
                    <span class="header__c-m-c-icon" style="background-image: url(' + dot_str + './img/2389463949327.png);"></span>\
                    <span class="header__c-m-c-text">Giỏ hàng</span>\
                    <span class="header__c-m-c-number">0</span>\
                </div>\
            </div>\
        </div>';

    $("#header").html(html_str);

    function set_avatar() {
        var username = null;

        username = localStorage.getItem("username");
        if (!username) username = localStorage.getItem("msisdn");
        $("#userMsisdn").html(center_char_encrypt(username));

        F._userViewDetailInfo({}, function(ret) {
            if (ret.data.headimage) {
                $(".userLogin-info__top-face")
                    .eq(0)
                    .css("background-image", "url(" + ret.data.headimage + ")");
            }
        });

        $(".header__nav-main").addClass("header__nav-main_login");
    }

    function set_cart_num(num) {
        $(".header__c-m-c-number").html(num);
        if (num > 0) {
            $(".header__c-m-c-icon").css("background-image", 'url("' + dot_str + './img/89247239874.png")');
        } else {
            $(".header__c-m-c-icon").css("background-image", 'url("' + dot_str + './img/2389463949327.png")');
        }
    }

    function calc_num(array) {
        var index;
        var num = 0;
        for (index = 0; index < array.length; index++) {
            num += array[index].quantity;
        }
        return num;
    }

    function set_unlogin_cart_num() {
        localStorage.getItem("cart") || localStorage.setItem("cart", "[]");
        var cart = JSON.parse(localStorage.getItem("cart"));

        set_cart_num(calc_num(cart));
    }

    F._checkValidLogin();
    if (localStorage.getItem("funId")) {
        set_avatar();
        F._cart_getInfo({}, function(ret) {
            if (!ret) return false;
            if (ret.code !== 10000) return false;
            set_cart_num(calc_num(ret.cartitems));
        });
    } else {
        set_unlogin_cart_num();
    }
}

function footer_add() {
    var dot_str = is_dot_for_index();
    var html_str = '\
        <div class="footer__top col-xs-24">\
            <div class="footer__top-main">\
                <div class="footer__t-m-item col-xs-24">\
                    <div class="footer__t-m-i-left col-xs-5">\
                        <span class="footer__t-m-i-l-img footer__t-m-i-l-img0"></span>\
                    </div>\
                    <div class="footer__t-m-i-right col-xs-19">\
                        <div class="footer__t-m-i-r-title">Chất lượng hoàn hảo</div>\
                        <div class="footer__t-m-i-r-desc">100% được cấp phép</div>\
                    </div>\
                </div>\
                <div class="footer__t-m-item">\
                    <div class="footer__t-m-i-left col-xs-5">\
                        <span class="footer__t-m-i-l-img footer__t-m-i-l-img1"></span>\
                    </div>\
                    <div class="footer__t-m-i-right col-xs-19">\
                        <div class="footer__t-m-i-r-title">Trung tâm an ninh</div>\
                        <div class="footer__t-m-i-r-desc">Giao hàng tận tay</div>\
                    </div>\
                </div>\
                <div class="footer__t-m-item">\
                    <div class="footer__t-m-i-left col-xs-5">\
                        <span class="footer__t-m-i-l-img footer__t-m-i-l-img2"></span>\
                    </div>\
                    <div class="footer__t-m-i-right col-xs-19">\
                        <div class="footer__t-m-i-r-title">Thủ tục đơn giản</div>\
                        <div class="footer__t-m-i-r-desc">Có thể trả góp với thẻ sinh viên</div>\
                    </div>\
                </div>\
                <div class="footer__t-m-item">\
                    <div class="footer__t-m-i-left col-xs-5">\
                        <span class="footer__t-m-i-l-img footer__t-m-i-l-img3"></span>\
                    </div>\
                    <div class="footer__t-m-i-right col-xs-19">\
                        <div class="footer__t-m-i-r-title">Thanh toán dễ dàng</div>\
                        <div class="footer__t-m-i-r-desc">Ngồi nhà thanh toán trực tuyến</div>\
                    </div>\
                </div>\
                <div class="footer__t-m-item">\
                    <div class="footer__t-m-i-left col-xs-5">\
                        <span class="footer__t-m-i-l-img footer__t-m-i-l-img4"></span>\
                    </div>\
                    <div class="footer__t-m-i-right col-xs-19">\
                        <div class="footer__t-m-i-r-title">Cung cấp độc quyền</div>\
                        <div class="footer__t-m-i-r-desc">Dịch vụ bảo hành tốt nhất</div>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="footer__bottom2 col-xs-24">\
            <div class="footer__bottom2-main">\
                <div class="footer__b2-m-row1">\
                    <div class="footer__b2-m-r1-title col-xs-24">Thông tin</div>\
                    <ul class="footer__b2-m-r1-main col-xs-24">\
                        <a href="' + dot_str + './html/about.html" target="_blank" class="footer__b2-m-r1-m-item col-xs-24">Về chúng tôi</a>\
                        <a href="' + dot_str + './html/join.html" target="_blank" class="footer__b2-m-r1-m-item col-xs-24">Tuyển dụng</a>\
                    </ul>\
                </div>\
                <div class="footer__b2-m-row2">\
                    <div class="footer__b2-m-r2-title col-xs-24">Giúp đỡ</div>\
                    <ul class="footer__b2-m-r2-main col-xs-24">\
                        <a href="' + dot_str + './html/buyflowIntro.html" target="_blank" class="footer__b2-m-r2-m-item col-xs-24">Mua hàng bằng cách nào</a>\
                        <a href="' + dot_str + './html/buyIntro.html" target="_blank" class="footer__b2-m-r2-m-item col-xs-24">Trung tâm hỗ trợ</a>\
                        </ul>\
                </div>\
                <div class="footer__b2-m-row3">\
                    <div class="footer__b2-m-r3-title col-xs-24">Phương thức thanh toán</div>\
                    <ul class="footer__b2-m-r3-main col-xs-24">\
                        <li class="footer__b2-m-r3-m-item col-xs-24">\
                            <img src="' + dot_str + './img/230948342309.png" alt="" class="footer__b2-m-r3-m-i-img">\
                            <img src="' + dot_str + './img/pay_napas.png" alt="" class="footer__b2-m-r3-m-i-img">\
                        </li>\
                    </ul>\
                </div>\
                <div class="footer__b2-m-row5">\
                    <div class="footer__b2-m-r5-title col-xs-24">TẢI APP BUYOO</div>\
                    <ul class="footer__b2-m-r5-main col-xs-24">\
                        <li class="footer__b2-m-r5-m-item col-xs-24">\
                            <a href="https://play.google.com/store/apps/details?id=com.store.creditstore" class="footer__b2-m-r5-m-i-img" target="_blank" style="background-image: url(' + dot_str + './img/o23874238947.png);"></a>\
                        </li>\
                        <li class="footer__b2-m-r5-m-item col-xs-24">\
                            <img src="' + dot_str + './img/2837298347.png" alt="" class="footer__b2-m-r5-m-i-img">\
                        </li>\
                    </ul>\
                </div>\
                <div class="footer__b2-m-row7 col-xs-24">\
                <div class="footer__b2-m-r7-left col-xs-18">\
                <div class="footer__b2-m-r7-l-item1">\
                    <div class="footer__b2-m-r7-l-i1-top">Kết nối với chúng tôi</div>\
                    <a href="mailto:service@buyoo.asia" class="footer__b2-m-r7-l-i1-bottom">service@buyoo.asia</a>\
                </div>\
                <div class="footer__b2-m-r7-l-item2">\
                    <div class="footer__b2-m-r7-l-i2-top">hợp tác thương mại</div>\
                    <a href="mailto:business.vn@buyoo.asia" class="footer__b2-m-r7-l-i2-bottom">business.vn@buyoo.asia</a>\
                </div>\
                <div class="footer__b2-m-r7-l-item3">\
                    <div class="footer__b2-m-r7-l-row2">\
                        <a href="https://www.facebook.com/Buyoo.vn" target="_blank" class="footer__b2-m-r7-l-r2-app" style="background-image: url(' + dot_str + './img/29476021983473.png)"></a>\
                    </div>\
                </div>\
            </div>\
            <div class="footer__b2-m-r7-right col-xs-6">\
                <a href="http://online.gov.vn/WebsiteDisplay.aspx?DocId=38418" target="_blank" class="footer__b2-m-r7-r-img" style="background-image: url(' + dot_str + './img/780689798.png);"></a>\
                    </div>\
                </div>\
                <div class="footer__b2-m-row6 col-xs-24">\
                    <div class="footer__b2-m-r6-left col-xs-12">Copyright &copy; 2017 Buyoo. All Rights Reserved</div>\
                    <div class="footer__b2-m-r6-right col-xs-12">\
                        Liên hệ chăm sóc khách hàng: <span class="footer__b2-m-r6-r-tel">1900 555506</span>\
                    </div>\
                </div>\
            </div>\
        </div>';

    $("#footer").html(html_str);
}

function openforapp_add() {
    var appVersion = window.navigator.appVersion;
    // function isPhone(appVersion) {
    //     return F._PhoneExpr.test(appVersion);
    // }

    function isAndroid(appVersion) {
        return /Android/.test(appVersion);
    }

    function isIOS(appVersion) {
        return /iPhone|iPad/.test(appVersion);
    }

    var dot_str = is_dot_for_index();
    var html_str = '\
    <div class="openforapp">\
        <div class="openforapp__left">\
            <div class="openforapp__left-close">\
                <img src="' + dot_str + './img/icon-close.png" alt="close" class="openforapp__l-c-img">\
            </div>\
            <div class="openforapp__left-app">\
                <div class="openforapp__l-a-logo">\
                    <img src="' + dot_str + './img/ICON_72.png" alt="logo" class="openforapp__l-a-l-img">\
                </div>\
                <div class="openforapp__l-a-text">\
                    <div class="openforapp__l-a-t-top">Mở App BUYOO</div>\
                </div>\
            </div>\
        </div>\
        <div class="openforapp__right">Mở ngay bây giờ</div>\
    </div>';

    if (F._PhoneExpr.test(appVersion)) {
        $("body").prepend(html_str);
        $(".openforapp__left-close").on("click", function() {
            $(".openforapp").remove();
        });
        $(".openforapp__right").on("click", function() {
            window.location.href = "buyoovn://www.orangecpp.com:80/mypath?key=mykey";
        });
    }
}

F._gotoFind = function() {
    var findcontent = $("#findIpt").val();
    if (findcontent != "") {
        window.location.href = is_dot_for_index() + "./html/search.html?findcontent=" + findcontent;
    }
};

F._entersearch = function() {
    var event = window.event || arguments.callee.caller.arguments[0];
    if (event.keyCode == 13) {
        F._gotoFind();
    }
};

F._edit_support_school = function(id, array) {
    id = +id;
    var index;
    var result = true;
    for (index = 0; index < array.length; index++) {
        if (array[index].id === id) {
            if (array[index].staging === 0) result = false;
        }
    }
    return result;
};

F._order_cancel = function(callback) {
    var html_str = '\
        <div class="order-cancel" id="order-cancel">\
            <div class="order-cancel__main">\
                <div class="order-cancel__main-title col-xs-24">\
                    <div class="order-cancel__m-t-left">Lựa chọn lý do hủy đơn hàng</div>\
                    <div class="order-cancel__m-t-right">\
                        <span class="order-cancel__m-t-r-close"></span>\
                    </div>\
                </div>\
                <div class="order-cancel__m-t-bottom col-xs-24">\
                    <div class="order-cancel__m-t-b-row1 col-xs-24">\
                        <div class="order-cancel__m-t-b-r1-left">\
                            <img src="../img/tishi.png" alt="icon" class="order-cancel__m-t-b-r1-l-icon">\
                        </div>\
                        <div class="order-cancel__m-t-b-r1-right">\
                            <div class="order-cancel__m-t-b-r1-r-row1">Sau khi đơn hàng được hủy sẽ không thể khôi phục lại</div>\
                            <div class="order-cancel__m-t-b-r1-r-row2">nếu đơn hàng này sử dụng phiếu ưu đãi... cũng sẽ không được trả lại</div>\
                        </div>\
                    </div>\
                    <div class="order-cancel__m-t-b-row2 col-xs-24">\
                        <div class="order-cancel__m-t-b-r2-item" data-code="40001">Thao tác sai ( lựa chọn mặt hàng, viết địa chỉ... sai)</div>\
                        <div class="order-cancel__m-t-b-r2-item" data-code="40002">Đặt trùng đơn hàng / đơn hàng sai</div>\
                        <div class="order-cancel__m-t-b-r2-item" data-code="40003">Giá ở các kênh khác càng thấp hơn</div>\
                        <div class="order-cancel__m-t-b-r2-item" data-code="40004">Lựa chọn số lần trả góp sai</div>\
                        <div class="order-cancel__m-t-b-r2-item" data-code="40005">Không muốn mua nữa</div>\
                    </div>\
                    <div class="order-cancel__m-t-b-row3 col-xs-24">\
                        <div class="order-cancel__m-t-b-r3-main col-xs-24">\
                            <div class="order-cancel__m-t-b-r3-m-left">\
                                <span class="order-cancel__m-t-b-r3-m-l-text">Hủy</span>\
                            </div>\
                            <div class="order-cancel__m-t-b-r3-m-right">\
                                <span class="order-cancel__m-t-b-r3-m-r-text">Xác nhận</span>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>';

    $("body").append(html_str);

    $(".order-cancel__m-t-b-r2-item").on("click", function() {
        var self = $(this);
        $(".order-cancel__m-t-b-r2-item").removeClass("order-cancel__m-t-b-r2-item_active");
        self.addClass("order-cancel__m-t-b-r2-item_active");
    });

    $(".order-cancel__m-t-b-r3-m-l-text").on("click", function() {
        $("#order-cancel").remove();
    });

    $(".order-cancel__m-t-r-close").on("click", function() {
        $("#order-cancel").remove();
    });

    $(".order-cancel__m-t-b-r3-m-r-text").on("click", function() {
        var result = "";
        $(".order-cancel__m-t-b-r2-item").each(function() {
            var self = $(this);
            if (self.hasClass("order-cancel__m-t-b-r2-item_active")) {
                result = self.data("code");
            }
        });
        callback(result);
    });
};

// 加密中间字符
function center_char_encrypt(str) {
    var i;
    var result = "";
    if (str.length > 0) {
        for (i = 0; i < str.length; i++) {
            if (i < 3 || i >= str.length - 3) {
                result += str[i];
            } else {
                result += "*";
            }
        }
    }
    return result;
}

F._setUrl = function(key, value) {
    function joint(data) {
        var str = "";
        for (i in data) {
            str += "&" + i + "=" + data[i];
        }
        return str.slice(1);
    }

    var parse = F._hrefUtils.parse();
    parse.query = parse.query || {};
    parse.query[key] = value;
    var url = "/" + parse.path + "?" + joint(parse.query);

    history.pushState(
        {
            url: url,
            title: document.title
        },
        document.title,
        url
    );
};

/**
 * 当前页是否为index.html
 */
function is_index() {
    var parse = F._hrefUtils.parse() || {};
    var file_name = parse.path.slice(-10, -1);
    var result = false;
    if (parse.path.slice(-5, -1) === ".htm") {
        if (parse.path.slice(-10, -1) === "index.htm") {
            result = true;
        }
    } else {
        result = true;
    }
    return result;
}

function is_dot_for_index() {
    return is_index() ? "" : ".";
}

// 打开商品详情
function gotoDetails(typeId, brandId, id, discount, orgPrice) {
    discount = 100 - parseInt(discount) || "";
    orgPrice = orgPrice || "";
    id = id || "";

    /* function is_index() {
        var parse = F._hrefUtils.parse() || {};
        var file_name = parse.path.slice(-10, -1);
        var result = '.';
        if (parse.path.slice(-5, -1) === '.htm') {
            if (parse.path.slice(-10, -1) === 'index.htm') {
                result = '';
            }
        } else {
            result = '';
        }
        return result;
    } */

    if (typeId != "" && brandId != "") {
        // window.open("./html/details.html?typeId=" + typeId + "&brandId=" + brandId);
        window.location.href = is_dot_for_index() + "./html/details.html?typeId=" + typeId + "&brandId=" + brandId + "&id=" + id;
    } else {
        window.location.href = "";
    }
}

/*主页退出*/
function userQuit() {
    if (confirm("Xác nhận thoát")) {
        localStorage.clear();
        window.location.href = "";
    }
}

F._verify_wait = function(params) {
    function extend(def_params, params) {
        var i;

        function type(obj) {
            var i;
            var str = {}.toString.call(obj);
            var str_length = {}.toString.call(obj).length;
            for (i = 0; i < str_length; i += 1) {
                if (str[i] === " ") {
                    return str.slice(i + 1, -1).toLowerCase();
                }
            }
            return str;
        }

        for (i in params) {
            if (params.hasOwnProperty(i)) {
                if (def_params[i] !== undefined && type(params[i]) === "object") {
                    extend(def_params[i], params[i]);
                } else {
                    def_params[i] = params[i];
                }
            }
        }
    }

    var def_params = {
        time: 60,
        isVue: false,
        target: undefined // e.g. '#verify_text'
    };
    extend(def_params, params);
    def_params.time = parseInt(def_params.time);
    var verify_sending = true; //验证码发送中

    function verify_sending_change(status) {
        verify_sending = !!status;
    }

    function verify_sending_status() {
        return verify_sending;
    }

    function countDownFunc(_time) {
        if (!verify_sending) _time = -1;

        if (_time >= 0) {
            if (def_params.isVue) {
                F.vue.verify_text = _time + " s";
            } else {
                $(def_params.target).html(_time + " s");
            }
            _time -= 1;
            setTimeout(function() {
                countDownFunc(_time);
            }, 1000);
        } else {
            if (def_params.isVue) {
                F.vue.verify_text = "gửi lại";
            } else {
                $(def_params.target).html("gửi lại");
            }

            verify_sending = false;
        }
    }
    countDownFunc(def_params.time);

    return {
        verify_sending_status: verify_sending_status,
        verify_sending_change: verify_sending_change
    };
};

F._isLogin = function() {
    if (!localStorage.getItem("funId")) {
        window.location.href = "login.html";
        return false;
    } else {
        return true;
    }
};

/**
 * 金额格式化
 * @Author   taichiyi
 * @DateTime 2017-11-10
 * @param    {number/string}   price      待格式化的金额
 * @param    {number}          interval   间隔位数, 默认为3
 * @param    {string}          separator  分隔符/分节符, 默认为","
 * @return   {string}                     格式化后的金额
 */
F._priceFormat = function(price, separator, interval) {
    price = parseInt(price);
    price = price === price ? price + "" : "";
    separator = separator || ",";
    interval = interval || 3;
    var i;
    var result = "";
    var price_length = price.length;
    var quotient = parseInt(price_length / interval);
    var module = price_length % interval;

    if (quotient) {
        for (i = quotient; i > 0; i -= 1) {
            result = separator + price.slice(module + interval * (i - 1), module + interval * i) + result;
        }
        if (module === 0) {
            result = result.slice(1);
        } else {
            result = price.slice(0, module) + result;
        }
    } else {
        result = price;
    }
    return result;
};

// 把参数拼接到url上
F._url_joint = function(url, params) {
    url += "?";
    var i;
    var params_str = "";
    for (i in params) {
        params_str += "&" + i + "=" + params[i];
    }
    url += params_str.slice(1);
    return url;
};

F._url_join = function(url, params) {
    var i;
    url += "?";
    var params_str = "";
    for (i in params) {
        params_str += "&" + i + "=" + params[i];
    }
    url += params_str.slice(1);
    return url;
};

// 提示框类
F._confirm = function(title, text, type, button) {
    this.title = title || "";
    this.text = text || "";

    this.new_date = +new Date();
    this.new_date_plus = this.new_date + 100 + "";
    this.new_date += "";
    this.random_id = this.new_date.slice(8, -1);
    this.mask_id = this.new_date.slice(2, -2);
    this.mask_index = "1" + this.new_date.slice(2, -2);
    this.confirm_index = "1" + this.new_date_plus.slice(2, -2);
    this.button0_text = "";
    this.button1_text = "";
    this.func0 = function() {};
    this.func1 = function() {};
    this.button_left_display = "inline-block";
    this.button_right_display = "inline-block";

    this.background_image_tips = "data:image/png;base64,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";
    this.background_image_error = "data:image/png;base64,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";
    this.background_image_success = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAIAAAC3ytZVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyNjg2REIyRDY4NzZFNzExOUM1N0IyNzkxNDcwOEIzQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNEE4RDVBRTk3OTMxMUU3OTI0MEE5N0FCMTAzNDc0MyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNEE4RDVBRDk3OTMxMUU3OTI0MEE5N0FCMTAzNDc0MyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M0IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMjRDMzFFQzM2NzdFNzExQTNFQ0M2MUJFOTM0OEZBRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNjg2REIyRDY4NzZFNzExOUM1N0IyNzkxNDcwOEIzQiIvPiA8L3JkZjpEZXNjcmlwdGlv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";
    this.background_image_url = "";

    if (button.length === 1) {
        this.button_left_display = "none";
        this.button1_text = button[0].name;
        this.func1 = button[0].func;
    } else {
        this.button0_text = button[0].name;
        this.button1_text = button[1].name;
        this.func0 = button[0].func;
        this.func1 = button[1].func;
    }

    var random_id = this.random_id;
    var func0 = this.func0;
    var func1 = this.func1;

    function close() {
        $("#mask" + random_id + "").remove();
        $("#confirm" + random_id + "").remove();
    }

    switch (type) {
        case "error":
            this.background_image_url = this.background_image_error;
            break;

        case "success":
            this.background_image_url = this.background_image_success;
            break;

        case "tips":
            this.background_image_url = this.background_image_tips;
            break;

        default:
            this.background_image_url = this.background_image_tips;
            break;
    }

    this.mark_html = '<div class="mask" id="mask' + this.random_id + '" style="z-index: ' + this.mask_index + ';display: block;"></div>';
    this.confirm_html = '\
    <div class="confirm" id="confirm' + this.random_id + '" style="z-index: ' + this.confirm_index + ';display: block;">\
        <div class="confirm__main">\
            <div class="alert__b-m-title col-xs-24">\
                <span class="alert__b-m-t-text alert__b-m-t-text_confirm">' + this.title + '</span>\
                <span class="alert__b-m-t-close" id="close' + this.random_id + '"></span>\
            </div>\
            <div class="confirm__b-m-body col-xs-24">\
                <span class="confirm__b-m-b-img" style="background-image: url(' + this.background_image_url + ');"></span>\
                <div class="confirm__b-m-b-text">' + this.text + '</div>\
                <div class="confirm__b-m-b-operate">\
                    <span class="confirm__b-m-b-o-left" id="item-left' + this.random_id + '" style="display:' + this.button_left_display + '">' + this.button0_text + '</span>\
                    <span class="confirm__b-m-b-o-right" id="item-right' + this.random_id + '" style="display:' + this.button_right_display + '">' + this.button1_text + "</span>\
                </div>\
            </div>\
        </div>\
    </div>";

    $("body").append(this.mark_html);
    $("body").append(this.confirm_html);

    $("#item-left" + random_id + "").one("click", function() {
        func0();
        close();
    });
    $("#item-right" + random_id + "").one("click", function() {
        func1();
        close();
    });
    $("#close" + random_id + "").one("click", function() {
        close();
    });

    return {
        close: close
    };
};

F._loading = function() {
    var loading_html = '\
    <div class="loading" id="loading" style="display: block;">\
        <img src="../img/dd.gif" class="loading__img">\
    </div>';

    // if ($('.loading').length === 0) {
    //     show();
    // }

    function show() {
        if ($(".loading").length === 0) {
            $("body").append(loading_html);
        }
    }

    function hide() {
        $("#loading").remove();
        // $('#loading').hide();
    }

    return {
        show: show,
        hide: hide
    };
};

// 交易密码
F._payPwd_open = function(callback) {
    var html = '\
    <div class="pay-pwd_wrap" id="pay-pwd_wrap">\
        <div class="pay-pwd">\
            <div class="pay-pwd__top col-xs-24">\
                <div class="pay-pwd__top-left col-xs-12">Vui lòng nhập mã giao dịch</div>\
                <div class="pay-pwd__top-right col-xs-12">\
                    <span class="pay-pwd__t-r-close"></span>\
                </div>\
            </div>\
            <div class="pay-pwd__bottom col-xs-24">\
                <div class="pay-pwd__bottom-row5 col-xs-24">Mật mã giao dịch</div>\
                <div class="pay-pwd__bottom-row1 col-xs-24">\
                    <!-- <div class="pay-pwd__b-r1-left">\
                        <span class="">Mật mã giao dịch</span>\
                    </div> -->\
                    <div class="pay-pwd__b-r1-right">\
                        <input type="password" class="pay-pwd__b-r1-r-input" maxlength="6" placeholder="Vui lòng nhập mã giao dịch">\
                    </div>\
                </div>\
                <div class="pay-pwd__bottom-row2 col-xs-24">\
                    <span class="pay-pwd__b-r2-text" onclick="payPwd_forget()">Quên mã giao dịch</span>\
                </div>\
                <div class="pay-pwd__bottom-row4 col-xs-24">\
                    <span class="pay-pwd__b-r4-text">Mật mã giao dịch sai</span>\
                </div>\
                <div class="pay-pwd__bottom-row3 col-xs-24">\
                    <span class="pay-pwd__b-r3-button">Xác nhận</span>\
                </div>\
            </div>\
        </div>\
    </div>';
    $("body").append(html);

    function submit() {
        var input_val = $(".pay-pwd__b-r1-r-input").val();
        if (input_val.length !== 6) {
            $(".pay-pwd__b-r4-text").show();
            return false;
        } else {
            $(".pay-pwd__b-r4-text").hide();
        }
        callback(input_val);
    }

    $(".pay-pwd__t-r-close").one("click", function() {
        var self = $(this);
        $("#pay-pwd_wrap").remove();
    });

    $("body").keydown(function(e) {
        var curKey = e.which;
        if (curKey == "13") {
            //keyCode=13是回车键
            submit();
        }
    });

    // 忘记密码
    $(".pay-pwd__b-r2-text").on("click", function() {
        window.open("./back_id.html?phoneNum=" + F.msisdn + "&from=payPwd");
    });

    // 提交
    $(".pay-pwd__b-r3-button").on("click", function() {
        submit();
    });
};

F._baseinfo = function(data, userInfo) {
    function get_birthday(val) {
        var result = "";

        var nD = new Date(val);
        var year = nD.getFullYear();
        var month = nD.getMonth() + 1;
        var date = nD.getDate();

        month < 10 && (month = "0" + month);
        date < 10 && (date = "0" + date);

        result = year + "-" + month + "-" + date;

        return result;
    }

    var username = userInfo.username || "";
    var sex = userInfo.sex === "1" ? "Nam" : "Nữ";
    var identification = userInfo.identification || "";
    var address = userInfo.address || "";
    var email = userInfo.email || "";
    var collegename = userInfo.collegename || "";
    var collegeaddr = userInfo.collegeaddr || "";
    var department = userInfo.department || "";
    var specialty = userInfo.specialty || "";
    var degree = userInfo.degree || "";
    var birthday = get_birthday(userInfo.birthday);
    var admissiontime = userInfo.admissiontime ? userInfo.admissiontime.slice(0, 7) : "";
    var graduationtime = userInfo.graduationtime ? userInfo.graduationtime.slice(0, 7) : "";

    var headimage = userInfo.headimage || "";

    var connectusername = "";
    var connectusermsisdn = "";
    var connectuserrelation = "";
    var connectuseridentification = "";
    var collegename__list = "";
    var contact_order;
    var connect_json = {
        connectusername1: userInfo.connectusername1 || "",
        connectusermsisdn1: userInfo.connectusermsisdn1 || "",
        connectuserrelation1: userInfo.connectuserrelation1 || "",
        connectuseridentification1: userInfo.connectuseridentification1 || "",

        connectusername2: userInfo.connectusername2 || "",
        connectusermsisdn2: userInfo.connectusermsisdn2 || "",
        connectuserrelation2: userInfo.connectuserrelation2 || "",
        connectuseridentification2: userInfo.connectuseridentification2 || "",

        connectusername3: userInfo.connectusername3 || "",
        connectusermsisdn3: userInfo.connectusermsisdn3 || "",
        connectuserrelation3: userInfo.connectuserrelation3 || "",
        connectuseridentification3: userInfo.connectuseridentification3 || ""
    };

    var school_id_name_json = {};

    function init(data) {
        var i;
        var collegename_html = "";

        for (i = 0; i < data.length; i++) {
            collegename_html += '<li class="actionsheet__list-item js_collegename" data-collegename="' + data[i].id + '" data-staging="' + data[i].staging + '">' + data[i].name + "</li>";
            school_id_name_json[data[i].id] = data[i].name;
            if (!collegename) collegename = data[i].id;
        }
        // collegename = school_id_name_json[collegename];
        collegename__list = collegename_html;
    }

    init(data);

    var alert__baseinfo_main_height = document.documentElement.clientHeight * 0.924;

    var baseinfo_html =
        '\
    <div class="alert__baseinfo" style="display: block;" id="alert__baseinfo">\
        <div class="alert__baseinfo-main" style="height: ' +
        alert__baseinfo_main_height +
        'px">\
            <div class="alert__b-m-title col-xs-24">\
                <span class="alert__b-m-t-text">Điền thông tin cá nhân</span>\
                <span class="alert__b-m-t-close" id="baseinfo_hide"></span>\
            </div>\
            <div class="alert__b-m-content col-xs-24">\
                <div class="alert__b-m-body col-xs-24">\
                    <div class="alert__b-m-b-row1 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Họ tên <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <input type="text" class="alert__b-m-b-r1-r-input" placeholder="Vui lòng nhập Họ tên" id="MO__username" value="' +
        username +
        '">\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row2 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Giới tính <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r2-right col-xs-16">\
                            <div class="actionsheet actionsheet-row2">\
                                <span class="actionsheet__left js_sex" id="MO__sex">' +
        sex +
        '</span>\
                                <span class="actionsheet__right js_sex">\
                                    <span class="actionsheet__right-arrow"></span>\
                                </span>\
                                <div class="actionsheet__list">\
                                    <li class="actionsheet__list-item js_sex" data-sex="Nam">Nam</li>\
                                    <li class="actionsheet__list-item js_sex" data-sex="Nữ">Nữ</li>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row3 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Số chứng minh thư <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <input type="text" class="alert__b-m-b-r1-r-input" placeholder="Vui lòng nhập Số chứng minh thư" id="MO__identification" value="' +
        identification +
        '" oninput="/^[0-9]*$/.test(this.value) ? this.setAttribute(\'data-on-val\', this.value) : this.value = this.getAttribute(\'data-on-val\');" data-on-val="">\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row4 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Nơi ở <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r2-right col-xs-16">\
                            <!-- <div class="alert__b-m-b-r4-top col-xs-24">\
                                    <div class="actionsheet">\
                                        <span class="actionsheet__left">请选择省</span>\
                                        <span class="actionsheet__right">\
                                            <span class="actionsheet__right-arrow"></span>\
                                        </span>\
                                        <div class="actionsheet__list">\
                                            <li class="actionsheet__list-item">Nam</li>\
                                            <li class="actionsheet__list-item">Nữ</li>\
                                        </div>\
                                    </div>\
                                    <div class="actionsheet">\
                                        <span class="actionsheet__left">请选择市</span>\
                                        <span class="actionsheet__right">\
                                            <span class="actionsheet__right-arrow"></span>\
                                        </span>\
                                        <div class="actionsheet__list">\
                                            <li class="actionsheet__list-item">Nam</li>\
                                            <li class="actionsheet__list-item">Nữ</li>\
                                        </div>\
                                    </div>\
                                    <div class="actionsheet">\
                                        <span class="actionsheet__left">请选择区</span>\
                                        <span class="actionsheet__right">\
                                            <span class="actionsheet__right-arrow"></span>\
                                        </span>\
                                        <div class="actionsheet__list">\
                                            <li class="actionsheet__list-item">Nam</li>\
                                            <li class="actionsheet__list-item">Nữ</li>\
                                        </div>\
                                    </div>\
                                </div> -->\
                            <div class="alert__b-m-b-r4-bottom col-xs-24">\
                                <textarea class="alert__b-m-b-r4-b-textarea" placeholder="Vui lòng bổ sung địa chỉ cụ thể, ví dụ như tên đường, số nhà,số tầng và số phòng" id="MO__address">' +
        address +
        '</textarea>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row5 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Địa chỉ thư điện tử <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <input type="email" class="alert__b-m-b-r1-r-input" placeholder="Vui lòng nhập Địa chỉ thư điện tử" id="MO__email" value="' +
        email +
        '">\
                        </div>\
                    </div>\
                </div>\
                <div class="alert__b-m-body col-xs-24">\
                    <div class="alert__b-m-b-row6 col-xs-24 ' +
        (connect_json.connectuseridentification1 ? "alert__b-m-b-row6_active" : "") +
        '">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Người liên lạc 1 <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <input type="text" class="alert__b-m-b-r1-r-input" placeholder="" id="connectusername1" value="' +
        (connect_json.connectuseridentification1 ? connect_json.connectuseridentification1 : "") +
        '">\
                            <span class="alert__b-m-b-r1-r-add js_contact_show" data-contact="1">Nhấp để thêm người liên lạc</span>\
                            <span class="alert__b-m-b-r1-r-modify js_contact_show" data-contact="1">Sửa ></span>\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row6 col-xs-24 ' +
        (connect_json.connectusername2 ? "alert__b-m-b-row6_active" : "") +
        '">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Người liên lạc 2 <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <input type="text" class="alert__b-m-b-r1-r-input" placeholder="" id="connectusername2" value="' +
        (connect_json.connectusername2 ? connect_json.connectusername2 : "") +
        '">\
                            <span class="alert__b-m-b-r1-r-add js_contact_show" data-contact="2">Nhấp để thêm người liên lạc</span>\
                            <span class="alert__b-m-b-r1-r-modify js_contact_show" data-contact="2">Sửa ></span>\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row6 col-xs-24 ' +
        (connect_json.connectusername3 ? "alert__b-m-b-row6_active" : "") +
        '">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Người liên lạc 3 <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <input type="text" class="alert__b-m-b-r1-r-input" placeholder="" id="connectusername3" value="' +
        (connect_json.connectusername3 ? connect_json.connectusername3 : "") +
        '">\
                            <span class="alert__b-m-b-r1-r-add js_contact_show" data-contact="3">Nhấp để thêm người liên lạc</span>\
                            <span class="alert__b-m-b-r1-r-modify js_contact_show" data-contact="3">Sửa ></span>\
                        </div>\
                    </div>\
                </div>\
                <div class="alert__b-m-body col-xs-24">\
                    <div class="alert__b-m-b-row7 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Tốt nghiệp trường <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r2-right col-xs-16">\
                            <div class="actionsheet actionsheet-collegename">\
                                <span class="actionsheet__left js_collegename" data-collegename="" id="MO__collegename">' +
        school_id_name_json[collegename] +
        '</span>\
                                <span class="actionsheet__right js_collegename" data-collegename="">\
                                    <span class="actionsheet__right-arrow"></span>\
                                </span>\
                                <div class="actionsheet__list">' +
        collegename__list +
        '</div>\
                            </div>\
                        </div>\
                        <div class="alert__b-m-b-row33 col-xs-24" id="alert__b-m-b-row33">\
                            Bạn học thân mến, tạm thời chúng tôi chỉ thực hiện thanh toán trả góp tại những trường đại học có trong danh sách, những trường đại học không thể chọn được vì nhân lực công ty chúng tôi có hạn nên tạm thời chưa thể thanh toán, nhưng bạn có thể lựa chọn thanh toán toàn bộ. Nếu có thắc mắc gì, xin hãy để lại lời nhắn trên facebook. Cám ơn sự ủng hộ của bạn.\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row7 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Địa chỉ trường <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <input type="text" class="alert__b-m-b-r1-r-input" placeholder="Vui lòng nhập Địa chỉ trường" id="MO__collegeaddr" value="' +
        collegeaddr +
        '">\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row7 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Khoa <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <input type="text" class="alert__b-m-b-r1-r-input" placeholder="Vui lòng nhập Khoa" id="MO__department" value="' +
        department +
        '">\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row7 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Chuyên ngành <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <input type="text" class="alert__b-m-b-r1-r-input" placeholder="Vui lòng nhập Chuyên ngành" id="MO__specialty" value="' +
        specialty +
        '">\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row8 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Học vị <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r2-right col-xs-16">\
                            <div class="actionsheet actionsheet-degree">\
                                <span class="actionsheet__left js_degree" data-degree="" id="MO__degree">' +
        degree +
        '</span>\
                                <span class="actionsheet__right js_degree" data-degree="">\
                                    <span class="actionsheet__right-arrow"></span>\
                                </span>\
                                <div class="actionsheet__list">\
                                    <li class="actionsheet__list-item js_degree" data-degree="Sau tiến sĩ">Sau tiến sĩ</li>\
                                    <li class="actionsheet__list-item js_degree" data-degree="Tiến sĩ">Tiến sĩ</li>\
                                    <li class="actionsheet__list-item js_degree" data-degree="Thạc sĩ">Thạc sĩ</li>\
                                    <li class="actionsheet__list-item js_degree" data-degree="Cử nhân">Cử nhân</li>\
                                    <li class="actionsheet__list-item js_degree" data-degree="Chính quy">Chính quy</li>\
                                    <li class="actionsheet__list-item js_degree" data-degree="Cao đẳng">Cao đẳng</li>\
                                    <li class="actionsheet__list-item js_degree" data-degree="Trung học phổ thông">Trung học phổ thông</li>\
                                    <li class="actionsheet__list-item js_degree" data-degree="Trung học cơ sở">Trung học cơ sở</li>\
                                    <li class="actionsheet__list-item js_degree" data-degree="Tiểu học">Tiểu học</li>\
                                    <li class="actionsheet__list-item js_degree" data-degree="Quan hệ">Quan hệ</li>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row11 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Ngày Sinh <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r2-right col-xs-16">\
                            <div class="actionsheet alert__b-m-b-r11-birthday">\
                                <span class="actionsheet__left"><input type="date" id="MO__birthday" value="' +
        birthday +
        '"></span>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row9 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Khoảng thời gian học <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r2-right col-xs-16">\
                            <div class="actionsheet alert__b-m-b-r9-startyear">\
                                <span class="actionsheet__left"><input type="month" id="MO__admissiontime" value="' +
        admissiontime +
        '"></span>\
                            </div>\
                            <span class="alert__b-m-b-r9-line">-</span>\
                            <div class="actionsheet alert__b-m-b-r9-endyear">\
                                <span class="actionsheet__left"><input type="month" id="MO__graduationtime" value="' +
        graduationtime +
        '"></span>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row10 col-xs-24">* Nếu đang đi học thì không cần điền thời gian tốt nghiệp</div>\
                </div>\
                <div class="alert__b-m-footer col-xs-24">\
                    <span class="alert__b-m-f-button" id="submit_baseinfo">Xác nhận tồn tại</span>\
                </div>\
            </div>\
        </div>\
    </div>';

    // 选择性别
    function sex_select(val) {
        if (val) {
            sex = val;
        }

        var actionsheet_handle = $(".actionsheet-row2");
        if (actionsheet_handle.hasClass("actionsheet_active")) {
            actionsheet_handle.removeClass("actionsheet_active");
        } else {
            actionsheet_handle.addClass("actionsheet_active");
        }
        $("#MO__sex").html(val);
    }

    // 选择关系
    function relation_select(val) {
        if (val) {
            connectusernamen = val;
            $("#input_relation").html(val);
        }

        var actionsheet_handle = $(".actionsheet-relation");
        if (actionsheet_handle.hasClass("actionsheet_active")) {
            actionsheet_handle.removeClass("actionsheet_active");
        } else {
            actionsheet_handle.addClass("actionsheet_active");
        }
    }

    // 选择学历
    function degree_select(val) {
        if (val) {
            degree = val;
            $("#MO__degree").html(val);
        }

        var actionsheet_handle = $(".actionsheet-degree");
        if (actionsheet_handle.hasClass("actionsheet_active")) {
            actionsheet_handle.removeClass("actionsheet_active");
        } else {
            actionsheet_handle.addClass("actionsheet_active");
        }
    }

    // 选择学校
    function collegename_select(val, staging) {
        F._run_accordionMenu(jQuery, data, function(ret) {
            if (ret.is_support) {
                $("#MO__collegename").html(ret.name);
                collegename = ret.id;
            }
        });
        return false;

        // staging = +staging;
        // if (val) {
        //     $("#MO__collegename").html(school_id_name_json[val]);
        //     collegename = val;
        // }

        // if (staging === staging) {
        //     if (staging === 1) {
        //         $("#alert__b-m-b-row33").hide();
        //     } else {
        //         $("#alert__b-m-b-row33").show();
        //     }
        // }

        // var actionsheet_handle = $(".actionsheet-collegename");
        // if (actionsheet_handle.hasClass("actionsheet_active")) {
        //     actionsheet_handle.removeClass("actionsheet_active");
        // } else {
        //     actionsheet_handle.addClass("actionsheet_active");
        // }
    }

    // 联系人 - 添加
    function alert__contact_show(order) {
        contact_order = order + "";

        var input_username = "";
        var input_msisdn = "";
        var input_relation = "";
        var input_identification = "";

        var input_identification_display = contact_order === "1" ? "inline-block" : "none";
        var relation_display = contact_order === "1" ? "none" : "block";

        function submit_alert__contact(username, msisdn, relation, identification) {
            if (!username.length) {
                alert("Vui lòng nhập Họ tên");
                return false;
            }

            if (!msisdn.length) {
                alert("Vui lòng nhập Số điện thoại");
                return false;
            }

            if (!relation.length) {
                alert("Vui lòng chọn mối quan hệ");
                return false;
            }

            if (!identification.length && contact_order === "1") {
                alert("Bắt buộc phải cài đặt số chứng minh thư của người liên hệ đầu tiên");
                return false;
            }

            connect_json["connectusername" + contact_order] = username;
            connect_json["connectusermsisdn" + contact_order] = msisdn;
            connect_json["connectuserrelation" + contact_order] = relation;
            connect_json["connectuseridentification" + contact_order] = identification;

            $("#connectusername" + contact_order).val(username);
            $(".alert__b-m-b-row6")
                .eq(+contact_order - 1)
                .addClass("alert__b-m-b-row6_active");

            alert__contact_hide();
        }

        if (connect_json["connectusername" + contact_order]) {
            input_username = connect_json["connectusername" + contact_order];
            input_msisdn = connect_json["connectusermsisdn" + contact_order];
            input_relation = connect_json["connectuserrelation" + contact_order];
            input_identification = connect_json["connectuseridentification" + contact_order];
        } else {
            input_username = "";
            input_msisdn = "";
            input_relation = "";
            input_identification = "";
        }

        var contact_html = '\
        <div class="alert__contact" style="display: block;" id="alert__contact">\
            <div class="alert__contact-main">\
                <div class="alert__b-m-title col-xs-24">\
                    <span class="alert__b-m-t-text alert__b-m-t-text_confirm">提示</span>\
                    <span class="alert__b-m-t-close" id="alert__contact_hide"></span>\
                </div>\
                <div class="alert__contact-body col-xs-24">\
                    <div class="alert__c-b-row1 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Họ tên <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-11">\
                            <input type="text" class="alert__b-m-b-r1-r-input" placeholder="Vui lòng nhập Họ tên" style="width: 100%;" value="' + input_username + '" id="input_username">\
                        </div>\
                    </div>\
                    <div class="alert__c-b-row2 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Số điện thoại <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-11">\
                            <input type="tel" class="alert__b-m-b-r1-r-input" placeholder="Vui lòng nhập Số điện thoại" style="width: 100%;" value="' + input_msisdn + '" id="input_msisdn">\
                        </div>\
                    </div>\
                    <div class="alert__c-b-row3 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Quan hệ <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r2-right col-xs-11">\
                            <div class="actionsheet actionsheet-relation">\
                                <span class="actionsheet__left js_relation" data-relation="" id="input_relation">' + input_relation + '</span>\
                                <span class="actionsheet__right js_relation" data-relation="">\
                                    <span class="actionsheet__right-arrow"></span>\
                                </span>\
                                <div class="actionsheet__list">\
                                    <li class="actionsheet__list-item js_relation" data-relation="Bố">Bố</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Chú bác">Chú bác</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Anh em">Anh em</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Ông nội">Ông nội</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Bà nội">Bà nội</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Cô">Cô</li>\
                                    <li class="actionsheet__list-item js_relation" data-relation="Mẹ">Mẹ</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Cậu">Cậu</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Chị em">Chị em</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Ông ngoại">Ông ngoại</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Bà ngoại">Bà ngoại</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Dì">Dì</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Vợ/chồng">Vợ/chồng</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Bạn trai/bạn gái">Bạn trai/bạn gái</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Bạn cùng phòng">Bạn cùng phòng</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Bạn thân">Bạn thân</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Thầy cô giáo/ sếp">Thầy cô giáo/ sếp</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Bạn học/ đồng nghiệp">Bạn học/ đồng nghiệp</li>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="alert__c-b-row4 col-xs-24" style="display:' + input_identification_display + ';">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Số chứng minh thư <span class="alert__b-m-b-r1-l-requery" style="display:' + input_identification_display + ';">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-11">\
                            <input type="text" class="alert__b-m-b-r1-r-input" placeholder="Vui lòng nhập Số chứng minh thư" style="width: 100%;" value="' + input_identification + '" id="input_identification" oninput="/^[0-9]*$/.test(this.value) ? this.setAttribute(\'data-on-val\', this.value) : this.value = this.getAttribute(\'data-on-val\');" data-on-val="">\
                        </div>\
                    </div>\
                    <div class="alert__c-b-row5">\
                        <div class="alert__b-m-footer col-xs-24" id="submit_alert__contact">\
                            <span class="alert__b-m-f-button">Xác nhận thông tin chính xác và lưu</span>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>';

        $("body").append('<div class="mask-contact" style="display: block;" id="mask-contact"></div>');
        $("body").append(contact_html);

        $(".js_relation").on("click", function() {
            var self = $(this);
            relation_select(self.data("relation"));
        });

        $("#alert__contact_hide").on("click", function() {
            alert__contact_hide();
        });

        $("#submit_alert__contact").on("click", function() {
            var self = $(this);
            var input_username = $("#input_username").val();
            var input_msisdn = $("#input_msisdn").val();
            var input_relation = $("#input_relation").html();
            var input_identification = $("#input_identification").val() || "";
            submit_alert__contact(input_username, input_msisdn, input_relation, input_identification);
        });
    }

    function alert__contact_hide() {
        $("#alert__contact").remove();
        $("#mask-contact").remove();
    }

    var show = function() {
        $("body").append(baseinfo_html);
        $("body").append('<div class="baseinfo__mask" id="baseinfo__mask"></div>');

        if (F._edit_support_school(collegename, data)) {
            $("#alert__b-m-b-row33").hide();
        } else {
            $("#alert__b-m-b-row33").show();
        }

        $(".js_sex").on("click", function() {
            var self = $(this);
            sex_select(self.data("sex"));
        });

        $(".js_degree").on("click", function() {
            var self = $(this);
            degree_select(self.data("degree"));
        });

        $(".js_contact_show").on("click", function() {
            var self = $(this);
            alert__contact_show(self.data("contact"));
        });

        $(".js_collegename").on("click", function() {
            var self = $(this);
            collegename_select(self.data("collegename"), self.data("staging"));
        });

        $("#baseinfo_hide").on("click", function() {
            var self = $(this);
            hide();
        });
    };

    var hide = function() {
        $("#alert__baseinfo").remove();
        $("#baseinfo__mask").remove();
    };

    var submit = function(callback) {
        username = $("#MO__username").val();
        sex = sex;
        identification = $("#MO__identification").val();
        address = $("#MO__address").val();
        email = $("#MO__email").val();
        collegename = collegename + "";
        collegeaddr = $("#MO__collegeaddr").val();
        department = $("#MO__department").val();
        specialty = $("#MO__specialty").val();
        degree = degree;
        admissiontime = $("#MO__admissiontime").val();
        graduationtime = $("#MO__graduationtime").val();
        birthday = $("#MO__birthday").val();
        // connectusername1 = connectusername1;
        // connectusermsisdn1 = connectusermsisdn1;
        // connectuserrelation1 = connectuserrelation1;
        // connectuseridentification1 = connectuseridentification1;
        // connectusername2 = connectusername2;
        // connectusermsisdn2 = connectusermsisdn2;
        // connectuserrelation2 = connectuserrelation2;
        // connectuseridentification2 = connectuseridentification2;
        // connectusername3 = connectusername3;
        // connectusermsisdn3 = connectusermsisdn3;
        // connectuserrelation3 = connectuserrelation3;
        // connectuseridentification3 = connectuseridentification3;
        headimage = headimage;

        if (!username.length) {
            alert("Vui lòng nhập Họ tên");
            return false;
        }

        if (!sex.length) {
            alert("Vui lòng nhập Giới tính");
            return false;
        }

        if (!identification.length) {
            alert("Vui lòng nhập Số chứng minh thư");
            return false;
        }

        if (!address.length) {
            alert("Vui lòng nhập Nơi ở");
            return false;
        }

        if (!email.length) {
            alert("Vui lòng nhập Địa chỉ thư điện tử");
            return false;
        }

        if (!/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(email)) {
            alert("Địa chỉ thư điện tử sai");
            return false;
        }

        if (!(connect_json.connectuseridentification1 && connect_json.connectuseridentification1.length)) {
            alert("Vui lòng Người liên lạc 1");
            return false;
        }

        if (!(connect_json.connectusername2 && connect_json.connectusername2.length)) {
            alert("Vui lòng Người liên lạc 2");
            return false;
        }

        if (!(connect_json.connectusername3 && connect_json.connectusername3.length)) {
            alert("Vui lòng Người liên lạc 3");
            return false;
        }

        if (!collegename.length) {
            alert("Vui lòng nhập Tốt nghiệp trường");
            return false;
        }

        if (!collegeaddr.length) {
            alert("Vui lòng nhập Địa chỉ trường");
            return false;
        }

        if (!department.length) {
            alert("Vui lòng nhập Khoa");
            return false;
        }

        if (!specialty.length) {
            alert("Vui lòng nhập Chuyên ngành");
            return false;
        }

        if (!degree.length) {
            alert("Vui lòng nhập Học vị");
            return false;
        }

        if (!admissiontime.length) {
            alert("Vui lòng nhập Thời gian nhập học");
            return false;
        }

        if (!birthday.length) {
            alert("Vui lòng nhập Ngày Sinh");
            return false;
        }

        // if (!graduationtime.length) {
        //     alert('Vui lòng nhập Thời gian tốt nghiệp');
        //     return false;
        // }

        if (graduationtime) {
            if (parseInt(admissiontime.slice(0, 4)) >= parseInt(graduationtime.slice(0, 4))) {
                alert("Khoảng thời gian học sai");
                return false;
            }
            admissiontime = admissiontime + "-11 11:11:11";
            graduationtime = graduationtime + "-11 11:11:11";
        } else {
            admissiontime = admissiontime + "-11 11:11:11";
        }

        callback({
            username: username,
            sex: sex === "Nam" ? "1" : "2",
            identification: identification,
            address: address,
            email: email,
            collegename: collegename,
            collegeaddr: collegeaddr,
            department: department,
            specialty: specialty,
            degree: degree,
            admissiontime: admissiontime,
            graduationtime: graduationtime,
            connectusername1: connect_json.connectusername1,
            connectusermsisdn1: connect_json.connectusermsisdn1,
            connectuserrelation1: connect_json.connectuserrelation1,
            connectuseridentification1: connect_json.connectuseridentification1,
            connectusername2: connect_json.connectusername2,
            connectusermsisdn2: connect_json.connectusermsisdn2,
            connectuserrelation2: connect_json.connectuserrelation2,
            connectuseridentification2: connect_json.connectuseridentification2,
            connectusername3: connect_json.connectusername3,
            connectusermsisdn3: connect_json.connectusermsisdn3,
            connectuserrelation3: connect_json.connectuserrelation3,
            connectuseridentification3: connect_json.connectuseridentification3,
            headimage: headimage,
            birthday: birthday
        });
    };

    return {
        show: show,
        hide: hide,
        submit: submit
    };
};

/* 时间戳格式化(时间戳默认为unix-10位数)
 * 
 * -model:
 *  1:0000-00-00
 *  2:0000-00-00 00:00 (默认)
 *  3:0000-00-00 00:00:00
 *  4:人性化显示-1{
 *     当天: 00:00
 *     昨天: 昨天 00:00
 *     昨天以前: 0月-0日 00:00
 *     一年前: 0000年-0月-0日 00:00
 *   }     
 *  5:人性化显示-2{
 *     当天: 00:00
 *     昨天: 昨天
 *     昨天以前: 0月-0日
 *     一年前: 00/00/00
 *   }     
 *  6:0000.00.00
 */
F._timeStrForm = function(str, model, unUnix) {
    var reStr = ""; //返回值
    var monthFormat; //月格式化
    var dateFormat; //日格式化
    var hourFormat; //时格式化
    var minuteFormat; //分格式化
    var secondFormat; //秒格式化

    var nDNow; //现在的时间戳
    var yearNow; //现在的年份
    var monthNow; //现在的月份
    var dateNow; //现在的天数
    var hourNow; //现在的小时
    var minuteNow; //现在的分钟
    var secondNow; //现在的秒数

    var dayDiff; // 相差几天
    var monthDiff; // 相差几年
    var yearDiff; // 相差几年

    if (!str) {
        //默认为当前时间戳
        str = parseInt(+new Date() / 1000);
    }

    if (!unUnix) {
        // 时间戳默认为unix
        str = str + "000";
    }

    // 不为数字,转为数字
    if (typeof str !== "number") {
        str = Number(str);
    }

    var nD = new Date(str);
    var year = nD.getFullYear();
    var month = nD.getMonth() + 1;
    var date = nD.getDate();
    var hour = nD.getHours();
    var minute = nD.getMinutes();
    var second = nD.getSeconds();

    monthFormat = month;
    dateFormat = date;
    hourFormat = hour;
    minuteFormat = minute;
    secondFormat = second;

    monthFormat < 10 && (monthFormat = "0" + monthFormat);
    dateFormat < 10 && (dateFormat = "0" + dateFormat);
    hourFormat < 10 && (hourFormat = "0" + hourFormat);
    minuteFormat < 10 && (minuteFormat = "0" + minuteFormat);
    secondFormat < 10 && (secondFormat = "0" + secondFormat);

    switch (model) {
        case 1:
            reStr = year + "-" + monthFormat + "-" + dateFormat;
            break;

        case 2:
            reStr = year + "-" + monthFormat + "-" + dateFormat + " " + hourFormat + ":" + minuteFormat;
            break;

        case 3:
            reStr = year + "-" + monthFormat + "-" + dateFormat + " " + hourFormat + ":" + minuteFormat + ":" + secondFormat;
            break;

        case 4:
            nDNow = new Date();
            yearNow = nDNow.getFullYear();
            monthNow = nDNow.getMonth() + 1;
            dateNow = nDNow.getDate();
            hourNow = nDNow.getHours();
            minuteNow = nDNow.getMinutes();
            secondNow = nDNow.getSeconds();

            dayDiff = dateNow - date; // 相差几天
            monthDiff = monthNow - month; // 相差几年
            yearDiff = yearNow - year; // 相差几年

            if (yearDiff === 0) {
                // 今年发的
                if (monthDiff === 0) {
                    //这个月发的
                    if (dayDiff === 0) {
                        // 今天发的
                        reStr = hourFormat + ":" + minuteFormat;
                    } else if (dayDiff === 1) {
                        // 昨天发的
                        reStr = "昨天 " + hourFormat + ":" + minuteFormat;
                    } else if (dayDiff === 2) {
                        //前天发的
                        reStr = "前天 " + hourFormat + ":" + minuteFormat;
                    } else {
                        reStr = month + "月" + date + "日 " + hourFormat + ":" + minuteFormat;
                    }
                } else {
                    //不是这个月发的
                    reStr = month + "月" + date + "日 " + hourFormat + ":" + minuteFormat;
                }
            } else {
                // 非今年发的
                reStr = year + "年" + month + "月" + date + "日 " + hourFormat + ":" + minuteFormat;
            }
            break;

        case 5:
            nDNow = new Date();
            yearNow = nDNow.getFullYear();
            monthNow = nDNow.getMonth() + 1;
            dateNow = nDNow.getDate();
            hourNow = nDNow.getHours();
            minuteNow = nDNow.getMinutes();
            secondNow = nDNow.getSeconds();

            dayDiff = dateNow - date; // 相差几天
            monthDiff = monthNow - month; // 相差几年
            yearDiff = yearNow - year; // 相差几年

            // 格式化 年份
            year = (year + "*").slice(-3, -1);

            if (yearDiff === 0) {
                // 今年发的
                if (monthDiff === 0) {
                    //这个月发的
                    if (dayDiff === 0) {
                        // 今天发的
                        reStr = hourFormat + ":" + minuteFormat;
                    } else if (dayDiff === 1) {
                        // 昨天发的
                        reStr = "昨天";
                    } else if (dayDiff === 2) {
                        //前天发的
                        reStr = "前天";
                    } else {
                        reStr = month + "月" + date + "日";
                    }
                } else {
                    //不是这个月发的
                    reStr = month + "月" + date + "日";
                }
            } else {
                // 非今年发的
                reStr = year + "/" + month + "/" + date + "/";
            }
            break;

        case 6:
            reStr = year + "." + monthFormat + "." + dateFormat;
            break;

        case 7:
            reStr = year + "/" + monthFormat + "/" + dateFormat;
            break;

        default:
            reStr = year + "-" + monthFormat + "-" + dateFormat + " " + hourFormat + ":" + minuteFormat;
            break;
    }

    return reStr;
};

// 3333333333333333

header_add();
footer_add();
openforapp_add();
