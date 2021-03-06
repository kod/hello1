if (!window.F) window.F = {};

F._DEUBUG = true;

F._VERSION = '2.9.11';
console.log('version ' + F._VERSION);

F._IP_255 = F._DEUBUG ? 'http://14.162.145.248:' : '';
F._IP_191 = F._DEUBUG ? 'http://14.162.145.248:' : '';
F._port_81 = F._DEUBUG ? '8181' : 'https://payment.buyoo.vn';
F._port_80 = F._DEUBUG ? '8180' : 'https://uc.buyoo.vn';
F._port_83 = F._DEUBUG ? '8183' : 'https://trade.buyoo.vn';
F._port_84 = F._DEUBUG ? '8184' : 'https://settlement.buyoo.vn';
F._port_85 = F._DEUBUG ? '8185' : 'https://commodity.buyoo.vn';
F._port_87 = F._DEUBUG ? '8187' : 'https://market.buyoo.vn';
F._createDisOrder_td = F._IP_191 + F._port_83 + '/fun/trade/createDisOrder'; // 创建订单(先审核 后付款)
F._payDisOrder_td = F._IP_191 + F._port_83 + '/fun/trade/payDisOrder'; // 支付订单(先审核 后付款)
F._queryOrder_td = F._IP_191 + F._port_83 + '/fun/trade/queryOrder'; // 订单查询
F._inquiryBill_td = F._IP_191 + F._port_84 + '/fun/trade/inquiryBill'; // 查询账单信息
F._queryBillList_td = F._IP_191 + F._port_84 + '/fun/trade/queryBillList'; //
F._createNormalOrder_td = F._IP_191 + F._port_83 + '/fun/trade/createNormalOrder'; // 创建还款订单
F._payNormalOrder_td = F._IP_191 + F._port_83 + '/fun/trade/payNormalOrder'; // 支付还款订单
F._queryOrderList_td = F._IP_191 + F._port_83 + '/fun/trade/queryOrderList'; //
F._orderCancel_td = F._IP_191 + F._port_83 + '/fun/trade/orderCancel'; // 取消订单
F._findOrderDetails_td = F._IP_191 + F._port_83 + '/fun/trade/findOrderDetails'; // 订单详细信息查询
F._userAddDetailInfo_uc = F._IP_191 + F._port_80 + '/fun/usercenter/userAddDetailInfo'; // 修改用户信息
F._userViewDetailInfo_uc = F._IP_191 + F._port_80 + '/fun/usercenter/userViewDetailInfo'; // 获取用户详细信息
F._getSchoolInfo_uc = F._IP_191 + F._port_80 + '/fun/usercenter/getSchoolInfo'; // 获取学校列表
F._userAction_otp_uc = F._IP_191 + F._port_80 + '/fun/userCenter/userAction/otp'; // 发送短信
F._userAction_login_uc = F._IP_191 + F._port_80 + '/fun/userCenter/userAction/login'; // 用户登入
F._userAction_changePassword_uc = F._IP_191 + F._port_80 + '/fun/userCenter/userAction/changePassword'; // 重置密码
F._userAction_modifyPayPassword_uc = F._IP_191 + F._port_80 + '/fun/userCenter/userAction/modifyPayPassword'; // 修改交易密码
F._userAction_checkPayPasword_uc = F._IP_191 + F._port_80 + '/fun/userCenter/userAction/checkPayPasword'; // 修改交易密码
F._userAction_userAddAddr_uc = F._IP_191 + F._port_80 + '/fun/usercenter/userAddAddr'; // 地址-添加
F._userAction_userModifyAddr_uc = F._IP_191 + F._port_80 + '/fun/usercenter/userModifyAddr'; // 地址-修改
F._userAction_userDelAddrs_uc = F._IP_191 + F._port_80 + '/fun/usercenter/userDelAddrs'; // 地址-删除
F._userAction_userViewAddr_uc = F._IP_191 + F._port_80 + '/fun/usercenter/userViewAddr'; // 地址-列表
F._userAction_register_uc = F._IP_191 + F._port_80 + '/fun/userCenter/userAction/register'; // 注册
F._userAction_getUserInfoById_uc = F._IP_191 + F._port_80 + '/fun/userCenter/userAction/getUserInfoById'; //
F._userCancelCollection_uc = F._IP_191 + F._port_80 + '/fun/usercenter/userCancelCollection'; // 取消收藏
F._userBatchCollection_uc = F._IP_191 + F._port_80 + '/fun/usercenter/userBatchCollection'; // 批量添加收藏
F._userGetCollection_uc = F._IP_191 + F._port_80 + '/fun/usercenter/userGetCollection'; // 获取收藏列表
F._getCityInfos_uc = F._IP_191 + F._port_80 + '/fun/usercenter/getCityInfos'; // 省市区(行政区获取)
F._receiveVoucher_uc = F._IP_191 + F._port_80 + '/fun/usercenter/receiveVoucher'; // 领取优惠券
F._getVoucherList_uc = F._IP_191 + F._port_80 + '/fun/usercenter/getVoucherList'; // 我的优惠券
F._judgeVoucher_uc = F._IP_191 + F._port_80 + '/fun/usercenter/judgeVoucher'; // 下单时，可用优惠券
F._initTopComputer_cp = F._IP_255 + F._port_85 + '/fun/computer/initTopComputer'; // 获取电脑banner广告
F._initNewCellphone_cp = F._IP_255 + F._port_85 + '/fun/cellphone/initNewCellphone'; //
F._initAdCellphone_cp = F._IP_255 + F._port_85 + '/fun/cellphone/initAdCellphone'; //
F._initTopCellphone_cp = F._IP_255 + F._port_85 + '/fun/cellphone/initTopCellphone'; //
F._initAdAppleComputer_di = F._IP_255 + F._port_85 + '/fun/computer/initAdAppleComputer'; //
F._initAdGameComputer_di = F._IP_255 + F._port_85 + '/fun/computer/initAdGameComputer'; //
F._initAdTabletComputer_di = F._IP_255 + F._port_85 + '/fun/computer/initAdTabletComputer'; //
F._initAdClassfyComputer_di = F._IP_255 + F._port_85 + '/fun/computer/initAdClassfyComputer'; //
F._initNewComputer_di = F._IP_255 + F._port_85 + '/fun/computer/initNewComputer'; //
F._initTopDigital_di = F._IP_255 + F._port_85 + '/fun/digital/initTopDigital'; //
F._initNewDigital_di = F._IP_255 + F._port_85 + '/fun/digital/initNewDigital'; //
F._initAdDigital_di = F._IP_255 + F._port_85 + '/fun/digital/initAdDigital'; //
F._addEvaluation_cd = F._IP_255 + F._port_85 + '/fun/commodity/addEvaluation'; // 添加评价
F._findProducts_cd = F._IP_255 + F._port_85 + '/fun/commodity/findProducts'; // 商品搜索
F._getProductDetailInfo_cd = F._IP_255 + F._port_85 + '/fun/commodity/getProductDetailInfo'; // 获取产品详情
F._getEvaluationInfo_cd = F._IP_255 + F._port_85 + '/fun/commodity/getEvaluationInfo'; // 获取评论
F._getNewestInfo_cd = F._IP_255 + F._port_85 + '/fun/commodity/getNewestInfo'; //
F._getAdverstInfo_cd = F._IP_255 + F._port_85 + '/fun/commodity/getAdverstInfo'; //
F._getAdverstTopInfo_cd = F._IP_255 + F._port_85 + '/fun/commodity/getAdverstTopInfo'; // 首页banner广告
F._getClassfyInfo_cd = F._IP_255 + F._port_85 + '/fun/commodity/getClassfyInfo'; //
F._getAllProductInfo_cd = F._IP_255 + F._port_85 + '/fun/commodity/getAllProductInfo'; //
F._getScreenInfo_cd = F._IP_255 + F._port_85 + '/fun/commodity/getScreenInfo'; //
F._getPromotionInfo_cd = F._IP_255 + F._port_85 + '/fun/commodity/getPromotionInfo'; // 促销商品列表
F._cart_gate_cd = F._IP_255 + F._port_85 + '/fun/commodity/cart/gate'; // 购物车-添加
F._cart_remove_cd = F._IP_255 + F._port_85 + '/fun/commodity/cart/remove'; // 购物车-删除
F._cart_changeNum_cd = F._IP_255 + F._port_85 + '/fun/commodity/cart/changeNum'; // 购物车-更新商品数量
F._cart_getInfo_cd = F._IP_255 + F._port_85 + '/fun/commodity/cart/getInfo'; // 购物车列表
F._getHTML_cd = F._IP_255 + F._port_85 + '/fun/commodity/getHTML'; //
F._merge_getInfo_cd = F._IP_255 + F._port_85 + '/fun/commodity/merge/getInfo'; // 拼单列表
F._merge_getDetail_cd = F._IP_255 + F._port_85 + '/fun/commodity/merge/getDetail'; // 拼单详情
F._getPhoneRecharge_cd = F._IP_255 + F._port_85 + '/fun/virtual/getPhoneRecharge'; // 获取运营商信息(手机充值)
F._getProvidersCard_cd = F._IP_255 + F._port_85 + '/fun/virtual/getProvidersCard'; // 获取运营商信息(充值卡)
F._getProvidersValue_cd = F._IP_255 + F._port_85 + '/fun/virtual/getProvidersValue'; // 获取运营商信息(电话卡)
F._get3GProvidersCard_cd = F._IP_255 + F._port_85 + '/fun/virtual/get3GProvidersCard'; // 获取流量卡列表
F._epayCheckSoftpin_cd = F._IP_255 + F._port_81 + '/fun/payMentGateWay/epay/epayCheckSoftpin'; // 查询充值卡密
F._getPayooOrderInfo_op = F._IP_255 + F._port_81 + '/fun/offlinePayments/getPayooOrderInfo'; // 查询充值卡密
F._market_getVoucher_cd = F._IP_191 + F._port_87 + '/fun/market/getVoucher'; // 优惠券领取列表
F._uploadFiles_uf = F._IP_191 + F._port_80 + '/fun/userfile/uploadFiles'; // 上传用户头像
F._collectFiles_uf = F._IP_191 + F._port_80 + '/fun/userfile/collectFiles'; // 用户评论上传图片
F._returnMoney_im = F._IP_191 + F._port_84 + '/fun/installment/returnMoney'; //

F._phoneExpr = /^[0-9]{8,11}$/; //手机号
F._pwdExpr = /^.{8,20}$/; // 密码
F._codeExpr = /^[0-9]{6}$/; // 验证码
F._payPwdeExpr = /^[0-9]{6}$/; // 交易码
F._isPhoneExpr = /Android|iPhone|iPad/; // 是否为手机
F._cardMaxNumber = 10; // 单间商品，最多购买件数
F._INSTALLMENT_MIN_VALUE = 7240000;
F._INSTALLMENT_MAX_VALUE = 14500000;
F._IMAGE_QUALITY = 70; // 0-100

F._tradeStatus = function(code) {
  code = +code;
  var result = 'Giao dịch đã bị hủy';

  switch (code) {
    case 10000:
      result = 'Đang chờ thanh toán';
      break;

    case 10003:
      result = 'Ngân hàng đang xử lý';
      break;

    case 10004:
      // 新流程，待审核
      result = 'Chờ xét duyệt';
      break;

    case 20000:
      result = 'Đóng';
      break;

    case 20001:
      result = 'Hoàn thành';
      break;

    case 20002:
      result = 'Từ chối giao dịch';
      break;

    case 20003:
      result = 'Giao dịch thất bại';
      break;

    case 30000:
      result = 'Chờ giao hàng';
      break;

    case 30001:
      result = 'Chờ đánh giá';
      break;

    case 30002:
      result = 'Giao dịch hoàn thành';
      break;

    case 40000:
    case 40001:
    case 40002:
    case 40003:
    case 40004:
    case 40005:
      result = 'Giao dịch đã bị hủy';
      break;

    default:
      result = 'Lỗi chưa xác định';
      break;
  }

  return result;
};

F._google_store = 'https://play.google.com/store/apps/details?id=com.store.creditstore'; // 谷歌应用商店
F._app_store = ''; // 苹果应用商店

// icon
F._image_tips = 'data:image/png;base64,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';
F._image_error = 'data:image/png;base64,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';
F._image_success = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAIAAAC3ytZVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyNjg2REIyRDY4NzZFNzExOUM1N0IyNzkxNDcwOEIzQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNEE4RDVBRTk3OTMxMUU3OTI0MEE5N0FCMTAzNDc0MyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNEE4RDVBRDk3OTMxMUU3OTI0MEE5N0FCMTAzNDc0MyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M0IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMjRDMzFFQzM2NzdFNzExQTNFQ0M2MUJFOTM0OEZBRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNjg2REIyRDY4NzZFNzExOUM1N0IyNzkxNDcwOEIzQiIvPiA8L3JkZjpEZXNjcmlwdGlv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';
F._image_process = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1RjhDMjUzM0NBODBFNzExQkEwRThCRTcxOEZGOTNCNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowOUE0QTNCNUYxRTUxMUU3OTdDOThEODRCMUZGOUNBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowOUE0QTNCNEYxRTUxMUU3OTdDOThEODRCMUZGOUNBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M0IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMjdBQzE5NDY3RUZFNzExQTBEOThGMDA4QTI5OThGMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RjhDMjUzM0NBODBFNzExQkEwRThCRTcxOEZGOTNCNiIvPiA8L3JkZjpEZXNjcmlwdGlv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';
F._def_avatar = 'data:img/jpg;base64,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';

// 1111111111111111

F._consolelog = function(params) {
  F._DEUBUG && console.log(params);
};

F._consoledir = function(params) {
  F._DEUBUG && console.dir(params);
};

F._winWidth = document.documentElement.clientWidth; //window的宽度
F._winHeight = document.documentElement.clientHeight; //window的高度

F._signType_MD5 = function(appId, method, charset, Key, lowerCase) {
  var md5SigntypeStrig = '';
  // 默认大写
  if (lowerCase) {
    md5SigntypeStrig += 'appid=' + appId;
  } else {
    md5SigntypeStrig += 'appId=' + appId;
  }
  md5SigntypeStrig += '&method=' + method;
  md5SigntypeStrig += '&charset=' + charset;
  md5SigntypeStrig += Key;
  return md5(md5SigntypeStrig);
};

F._encrypt_MD5 = function(params, Key) {
  var i;
  var md5EncryptStrig = '';
  for (i = 0; i < params.length; i++) {
    md5EncryptStrig += '&' + params[i].key + '=' + params[i].value;
  }
  md5EncryptStrig = md5EncryptStrig.slice(1);
  md5EncryptStrig += Key;
  return md5(md5EncryptStrig);
};

// 查询充值卡密
F._epayCheckSoftpin = function(params, callback) {
  var Key = 'paymentKey';

  var appId = '0';
  var method = 'fun.pay.epayCheckSoftpin';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var funid = params.funid || '';
  var tradeNo = params.tradeNo || '';
  var orderNo = params.orderNo || '';

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'tradeNo',
        value: tradeNo
      },
      {
        key: 'orderNo',
        value: orderNo
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
    tradeNo: tradeNo,
    orderNo: orderNo
  };

  $.ajax({
    type: 'POST',
    url: F._epayCheckSoftpin_cd,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};


// (线下支付)查询订单信息
F._getPayooOrderInfo = function(params, callback) {
  var Key = 'paymentKey';

  var appId = '0';
  var method = 'fun.pay.offline.query';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var funid = localStorage.getItem('funId');
  var tradeNo = params.tradeNo || '';
  var orderNo = params.orderNo || '';

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'orderno',
        value: orderNo
      },
      {
        key: 'tradeno',
        value: tradeNo
      },
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
    tradeno: tradeNo
  };

  $.ajax({
    type: 'POST',
    url: F._getPayooOrderInfo_op,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          // F._confirm('Gợi ý', 'error', 'error', [
          //   {
          //     name: 'Xác nhận',
          //     func: function() {}
          //   }
          // ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 获取流量卡列表
F._get3GProvidersCard = function(params, callback) {
  var Key = 'commodityKey';

  var appId = '0';
  var method = 'fun.virtual.getProvidersCard';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  // var encrypt = F._encrypt_MD5(
  //   [
  //     {
  //       key: 'providerName',
  //       value: providerName
  //     },
  //     {
  //       key: 'providerCode',
  //       value: providerCode
  //     }
  //   ],
  //   Key
  // );

  var data = {
    appid: appId,
    method: method,
    charset: charset,
    signtype: signType,
    encrypt: '',
    timestamp: timestamp,
    version: version,
  };

  $.ajax({
    type: 'POST',
    url: F._get3GProvidersCard_cd,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 获取运营商信息(充值卡面值)
F._getProvidersValue = function(params, callback) {
  var Key = 'commodityKey';

  var appId = '0';
  var method = 'fun.virtual.getProvidersValue';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.1';

  var providerName = params.providerName || '';
  var providerCode = params.providerCode || '';
  var providerType = params.providerType || '';

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'providerName',
        value: providerName
      },
      {
        key: 'providerCode',
        value: providerCode
      },
      {
        key: 'providerType',
        value: providerType
      },
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
    providerName: providerName,
    providerCode: providerCode,
    providerType: providerType
  };

  $.ajax({
    type: 'POST',
    url: F._getProvidersValue_cd,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 获取运营商信息(充值卡)
F._getProvidersCard = function(params, callback) {
  var Key = 'commodityKey';

  var appId = '0';
  var method = 'fun.virtual.getProvidersCard';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var msisdn = params.msisdn || '';

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5([], Key);

  var data = {
    appid: appId,
    method: method,
    charset: charset,
    signtype: signType,
    encrypt: encrypt,
    timestamp: timestamp,
    version: version
  };

  $.ajax({
    type: 'POST',
    url: F._getProvidersCard_cd,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 获取运营商信息(手机充值)
F._getPhoneRecharge = function(params, callback) {
  var Key = 'commodityKey';

  var appId = '0';
  var method = 'fun.virtual.getPhoneRecharge';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var msisdn = params.msisdn || '';

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'msisdn',
        value: msisdn
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
    msisdn: msisdn
  };

  $.ajax({
    type: 'POST',
    url: F._getPhoneRecharge_cd,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 下单时，可用的优惠券
F._judgeVoucher = function(params, callback) {
  var Key = 'userKey';

  var appId = '0';
  var method = 'fun.usercenter.judgeVoucher';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var funid = params.funid || '';
  var products = params.products || '';
  var currentpage = params.currentpage || '1';
  var pagesize = params.pagesize || '100';

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'products',
        value: products
      },
      {
        key: 'currentpage',
        value: currentpage
      },
      {
        key: 'pagesize',
        value: pagesize
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
    products: products,
    currentpage: currentpage,
    pagesize: pagesize
  };

  $.ajax({
    type: 'POST',
    url: F._judgeVoucher_uc,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 我的优惠券
F._getVoucherList = function(params, callback) {
  var Key = 'userKey';

  var appId = '0';
  var method = 'fun.usercenter.getVoucher';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var funid = params.funid || '';
  var vouchertype = params.vouchertype || '';
  var typeid = params.typeid || '';
  var brandid = params.brandid || '';
  var productid = params.productid || '';
  var cardno = params.cardno || '';
  var status = params.status !== undefined ? params.status : '1';
  var currentpage = params.currentpage || '1';
  var pagesize = params.pagesize || '100';

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'vouchertype',
        value: vouchertype
      },
      {
        key: 'typeid',
        value: typeid
      },
      {
        key: 'brandid',
        value: brandid
      },
      {
        key: 'productid',
        value: productid
      },
      {
        key: 'cardno',
        value: cardno
      },
      {
        key: 'status',
        value: status
      },
      {
        key: 'currentpage',
        value: currentpage
      },
      {
        key: 'pagesize',
        value: pagesize
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
    vouchertype: vouchertype,
    typeid: typeid,
    brandid: brandid,
    productid: productid,
    cardno: cardno,
    status: status,
    currentpage: currentpage,
    pagesize: pagesize
  };

  $.ajax({
    type: 'POST',
    url: F._getVoucherList_uc,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 领取优惠券
F._receiveVoucher = function(params, callback) {
  var Key = 'userKey';

  var appId = '0';
  var method = 'fun.usercenter.receiveVoucher';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var funid = params.funid || '';
  var voucherid = params.voucherid || '';

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'voucherid',
        value: voucherid
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
    voucherid: voucherid
  };

  $.ajax({
    type: 'POST',
    url: F._receiveVoucher_uc,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 卡券领取列表
F._market_getVoucher = function(params, callback) {
  var Key = 'marketKey';

  var appId = '0';
  var method = 'fun.market.getVoucher';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var vouchertype = params.vouchertype || '';
  var funid = params.funid || '';
  var typeid = params.typeid || '';
  var brandid = params.brandid || '';
  var productid = params.productid || '';
  var currentpage = params.currentpage || '1';
  var pagesize = params.pagesize || '100';

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'vouchertype',
        value: vouchertype
      },
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'typeid',
        value: typeid
      },
      {
        key: 'brandid',
        value: brandid
      },
      {
        key: 'productid',
        value: productid
      },
      {
        key: 'currentpage',
        value: currentpage
      },
      {
        key: 'pagesize',
        value: pagesize
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
    vouchertype: vouchertype,
    funid: funid,
    typeid: typeid,
    brandid: brandid,
    productid: productid,
    currentpage: currentpage,
    pagesize: pagesize
  };

  $.ajax({
    type: 'POST',
    url: F._market_getVoucher_cd,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 拼单列表
F._merge_getInfo = function(params, callback) {
  var Key = 'commodityKey';

  var appId = '0';
  var method = 'fun.merge.query';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var typeid = params.typeid || '0';
  var classfyid = params.classfyid || '0';
  var position = params.position || '0';
  var pagesize = params.pagesize || '4';
  var currentpage = params.currentpage || '1';

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'typeid',
        value: typeid
      },
      {
        key: 'classfyid',
        value: classfyid
      },
      {
        key: 'position',
        value: position
      },
      {
        key: 'pagesize',
        value: pagesize
      },
      {
        key: 'currentpage',
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
    type: 'POST',
    url: F._merge_getInfo_cd,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 拼单详情
F._merge_getDetail = function(params, callback) {
  var Key = 'commodityKey';

  var appId = '0';
  var method = 'fun.merge.detail';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var brandid = params.brandid || '0';

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'brandid',
        value: brandid
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
    brandid: brandid
  };

  $.ajax({
    type: 'POST',
    url: F._merge_getDetail_cd,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 查询用户基本信息
F._userAction_getUserInfoById = function(params, callback) {
  if (!F._isLogin()) return false;

  var Key = 'userKey';
  var provider = '0';
  var id = localStorage.getItem('funId');

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'provider',
        value: provider
      },
      {
        key: 'id',
        value: id
      }
    ],
    Key
  );

  var data = {
    provider: provider,
    id: id,
    encryption: encrypt
  };

  $.ajax({
    type: 'POST',
    url: F._userAction_getUserInfoById_uc,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.status) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 获取省市区
F._getCityInfos = function(params, callback) {
  if (!F._isLogin()) return false;

  var Key = 'userKey';

  var appId = localStorage.getItem('funId');
  var method = 'fun.uc.getCityInfos';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var pid = params.pid;

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'pid',
        value: pid
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
    pid: pid
  };

  $.ajax({
    type: 'POST',
    url: F._getCityInfos_uc,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 订单详细信息查询
F._findOrderDetails = function(params, callback) {
  if (!F._isLogin()) return false;

  var Key = 'tradeKey';

  var appId = '0';
  var method = 'fun.trade.findOrderDetails';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';
  var funid = localStorage.getItem('funId');
  var orderno = params.orderno;
  var tradeno = params.tradeno;

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'orderno',
        value: orderno
      },
      {
        key: 'tradeno',
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
    type: 'POST',
    url: F._findOrderDetails_td,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'Đặt hàng thất bại', 'tips', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 收藏-可批量添加
F._userBatchCollection = function(params, callback) {
  if (!F._isLogin()) return false;
  var Key = 'userKey';

  var appId = '0';
  var method = 'fun.uc.addcollection';
  var charset = 'utf-8';
  var timestamp = (+new Date() + '').slice(3);
  var version = '2.0';

  var funid = localStorage.getItem('funId');
  var brandids = params.brandids;

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'brandids',
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
    type: 'POST',
    url: F._userBatchCollection_uc,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 购物车-列表
F._cart_getInfo = function(params, callback) {
  if (!F._isLogin()) return false;
  var Key = 'commodityKey';

  var appId = '0';
  var method = 'fun.cart.query';
  var charset = 'utf-8';
  var timestamp = (+new Date() + '').slice(3);
  var version = '2.0';

  var funid = localStorage.getItem('funId');

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
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
    type: 'POST',
    url: F._cart_getInfo_cd,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 购物车-更新商品数量
F._cart_changeNum = function(params, callback) {
  if (!F._isLogin()) return false;
  var Key = 'commodityKey';

  var appId = '0';
  var method = 'fun.cart.change';
  var charset = 'utf-8';
  var timestamp = (+new Date() + '').slice(3);
  var version = '2.0';

  var cartitemid = params.cartitemid;
  var quetity = params.quetity;
  var funid = localStorage.getItem('funId');

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'cartitemid',
        value: cartitemid
      },
      {
        key: 'quetity',
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
    type: 'POST',
    url: F._cart_changeNum_cd,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 购物车-删除
F._cart_remove = function(params, callback) {
  if (!F._isLogin()) return false;
  var Key = 'commodityKey';

  var appId = '0';
  var method = 'fun.cart.remove';
  var charset = 'utf-8';
  var timestamp = (+new Date() + '').slice(3);
  var version = '2.0';

  var cartitemids = params.cartitemids;
  var orderno = params.orderno;
  var funid = localStorage.getItem('funId');

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'cartitemids',
        value: cartitemids
      },
      {
        key: 'orderno',
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
    type: 'POST',
    url: F._cart_remove_cd,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 购物车-添加
F._cart_gate = function(params, callback) {
  if (!F._isLogin()) return false;
  var Key = 'commodityKey';

  var appId = '0';
  var method = 'fun.cart.gate';
  var charset = 'utf-8';
  var timestamp = (+new Date() + '').slice(3);
  var version = '2.0';

  var cartitems = params.cartitems;
  var funid = localStorage.getItem('funId');

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'cartitems',
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
    type: 'POST',
    url: F._cart_gate_cd,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

F._orderCancel = function(params, callback) {
  if (!F._isLogin()) return false;

  var Key = 'tradeKey';
  var appId = localStorage.getItem('funId');
  var method = 'fun.trade.orderCancel';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var funid = localStorage.getItem('funId');
  var orderNo = params.orderNo;
  var tradeNo = params.tradeNo;
  var status = params.status;

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'orderno',
        value: orderNo
      },
      {
        key: 'tradeno',
        value: tradeNo
      },
      {
        key: 'status',
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
    type: 'POST',
    url: F._orderCancel_td,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);
      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'Lấy thông tin đơn hàng thất bại', 'tips', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 促销商品
F._getPromotionInfo = function(params, callback) {
  var Key = 'commodityKey';

  var appId = '';
  var method = 'fun.promotion.query';
  var charset = 'utf-8';
  var timestamp = (+new Date() + '').slice(3);
  var version = '2.0';

  var typeid = params.typeid;
  var classfyid = params.classfyid;
  var position = params.position;
  var pagesize = params.pagesize;
  var currentpage = params.currentpage;

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'typeid',
        value: typeid
      },
      {
        key: 'classfyid',
        value: classfyid
      },
      {
        key: 'position',
        value: position
      },
      {
        key: 'pagesize',
        value: pagesize
      },
      {
        key: 'currentpage',
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
    type: 'GET',
    url: F._getPromotionInfo_cd,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 显示分期金额信息
F._returnMoney = function(params, callback) {
  var Key = 'settleKey';

  var appId = localStorage.getItem('funId') || '';
  var method = 'fun.trade.returnMoney';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '1.0';

  var totalamounts = params.totalamounts;
  var repaymentmonths = params.repaymentmonths;
  var payrate = params.payrate;

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'totalamounts',
        value: totalamounts
      },
      {
        key: 'repaymentmonths',
        value: repaymentmonths
      },
      {
        key: 'payrate',
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
    type: 'POST',
    url: F._returnMoney_im,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 收货地址列表
F._userAction_userViewAddr = function(params, callback) {
  if (!F._isLogin()) return false;

  var Key = 'userKey';

  var appId = localStorage.getItem('funId');
  var method = 'fun.uc.userviewaddr';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '1.0';

  var funid = localStorage.getItem('funId');
  var msisdn = localStorage.getItem('msisdn');

  var signType = F._signType_MD5(appId, method, charset, Key, false);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'msisdn',
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
    type: 'POST',
    url: F._userAction_userViewAddr_uc,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 删除收货地址
F._userAction_userDelAddrs = function(params, callback) {
  if (!F._isLogin()) return false;

  var Key = 'userKey';

  var appId = localStorage.getItem('funId');
  var method = 'fun.uc.userDelAddrs';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '1.0';

  var adds = params.adds;
  var funid = localStorage.getItem('funId');

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'adds',
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
    type: 'POST',
    url: F._userAction_userDelAddrs_uc,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        case 40020:
          F._confirm('Gợi ý', 'Có thể thêm tối đã 5 địa chỉ nhận hàng', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 编辑收货地址
F._userAction_userModifyAddr = function(params, callback) {
  if (!F._isLogin()) return false;

  var Key = 'userKey';

  var appId = localStorage.getItem('funId');
  var method = 'fun.uc.usermodifyaddr';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var addrid = params.addrid;
  var funid = localStorage.getItem('funId');
  var msisdn = params.msisdn;
  var address = params.address;
  var isdefault = params.isdefault;
  var username = params.username;
  var division1st = params.division1st || '1';
  var division2nd = params.division2nd || '0';
  var division3rd = params.division3rd || '0';
  var division4th = params.division4th || '0';
  var division5th = params.division5th || '0';
  var division6th = params.division6th || '0';

  var signType = F._signType_MD5(appId, method, charset, Key, false);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'addrid',
        value: addrid
      },
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'msisdn',
        value: msisdn
      },
      {
        key: 'address',
        value: address
      },
      {
        key: 'isdefault',
        value: isdefault
      },
      {
        key: 'username',
        value: username
      },
      {
        key: 'division1st',
        value: division1st
      },
      {
        key: 'division2nd',
        value: division2nd
      },
      {
        key: 'division3rd',
        value: division3rd
      },
      {
        key: 'division4th',
        value: division4th
      },
      {
        key: 'division5th',
        value: division5th
      },
      {
        key: 'division6th',
        value: division6th
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
    username: username,
    division1st: division1st,
    division2nd: division2nd,
    division3rd: division3rd,
    division4th: division4th,
    division5th: division5th,
    division6th: division6th
  };

  $.ajax({
    type: 'POST',
    url: F._userAction_userModifyAddr_uc,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        case 40020:
          F._confirm('Gợi ý', 'Có thể thêm tối đã 5 địa chỉ nhận hàng', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 添加收货地址
F._userAction_userAddAddr = function(params, callback) {
  if (!F._isLogin()) return false;

  var Key = 'userKey';

  var appId = localStorage.getItem('funId');
  var method = 'fun.uc.useraddaddr';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var funid = localStorage.getItem('funId');
  var msisdn = params.msisdn;
  var address = params.address;
  var isdefault = params.isdefault;
  var username = params.username;
  var division1st = params.division1st || '1';
  var division2nd = params.division2nd || '0';
  var division3rd = params.division3rd || '0';
  var division4th = params.division4th || '0';
  var division5th = params.division5th || '0';
  var division6th = params.division6th || '0';

  var signType = F._signType_MD5(appId, method, charset, Key, false);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'msisdn',
        value: msisdn
      },
      {
        key: 'address',
        value: address
      },
      {
        key: 'isdefault',
        value: isdefault
      },
      {
        key: 'username',
        value: username
      },
      {
        key: 'division1st',
        value: division1st
      },
      {
        key: 'division2nd',
        value: division2nd
      },
      {
        key: 'division3rd',
        value: division3rd
      },
      {
        key: 'division4th',
        value: division4th
      },
      {
        key: 'division5th',
        value: division5th
      },
      {
        key: 'division6th',
        value: division6th
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
    username: username,
    division1st: division1st,
    division2nd: division2nd,
    division3rd: division3rd,
    division4th: division4th,
    division5th: division5th,
    division6th: division6th
  };

  $.ajax({
    type: 'POST',
    url: F._userAction_userAddAddr_uc,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        case 40020:
          F._confirm('Gợi ý', 'Có thể thêm tối đã 5 địa chỉ nhận hàng', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 获取收藏接口
F._userGetCollection = function(params, callback) {
  if (!F._isLogin()) return false;

  var Key = 'userKey';

  var appId = localStorage.getItem('funId');
  var method = 'fun.uc.getcollection';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '1.0';

  var funid = localStorage.getItem('funId');
  var msisdn = params.msisdn;
  var pagesize = params.pagesize;
  var currentpage = params.currentpage;

  var signType = F._signType_MD5(appId, method, charset, Key, false);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'msisdn',
        value: msisdn
      },
      {
        key: 'pagesize',
        value: pagesize
      },
      {
        key: 'currentpage',
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
    type: 'POST',
    url: F._userGetCollection_uc,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 商品搜索
F._findProducts = function(params, callback) {
  var Key = 'commodityKey';

  var appId = localStorage.getItem('funId') || '';
  var method = 'fun.find.finding';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '1.0';
  var funid = localStorage.getItem('funId') || '';
  var findcontent = params.findcontent;
  var pagesize = params.pagesize;
  var currentpage = params.currentpage;

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'findcontent',
        value: findcontent
      },
      {
        key: 'pagesize',
        value: pagesize
      },
      {
        key: 'currentpage',
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
    type: 'GET',
    url: F._url_join(F._findProducts_cd, data),
    // data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 注册
F._userAction_register = function(params, callback) {
  var Key = 'userKey';

  var provider = params.provider || '0';
  var msisdn = params.msisdn;
  var username = params.username;
  var password = params.password;
  var payPassword = params.payPassword;
  var otp = params.otp;
  var check = params.check;
  var appid = params.appid;

  var md5EncryptStrig = '';
  md5EncryptStrig += 'provider=' + provider;
  md5EncryptStrig += '&msisdn=' + msisdn;
  md5EncryptStrig += '&username=' + username;
  md5EncryptStrig += '&password=' + password;
  md5EncryptStrig += '&payPassword=' + payPassword;
  md5EncryptStrig += '&otp=' + otp;
  md5EncryptStrig += '&check=' + check;
  md5EncryptStrig += '&appid=' + appid;
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
    type: 'POST',
    url: F._userAction_register_uc,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.status) {
        case 10000:
          break;

        case 70002:
          F._confirm('Gợi ý', 'Mã xác nhận SMS không đúng', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 60052:
          F._confirm('Gợi ý', 'Chứng minh thư đã được đăng ký', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 60050:
          F._confirm('Gợi ý', 'Người dùng không tồn tại', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 50008:
          F._confirm('Gợi ý', 'Tài khoản đã đăng kí, vui lòng đăng nhập để sử dụng.', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 50010:
          F._confirm('Gợi ý', 'Mã thẻ đã quá hạn sử dụng', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 50009:
          F._confirm('Gợi ý', 'Mã thẻ tồn tại', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 50015:
          F._confirm('Gợi ý', 'Mã thẻ đã bị thu hồi', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 50020:
          F._confirm('Gợi ý', 'Yêu cầu thất bại', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 添加评论
F._addEvaluation = function(params, callback) {
  if (!F._isLogin()) return false;

  var Key = 'commodityKey';

  var appId = localStorage.getItem('funId');
  var method = 'fun.evaluation.add';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var funid = localStorage.getItem('funId');
  var msisdn = localStorage.getItem('msisdn');
  var username = localStorage.getItem('username') || localStorage.getItem('msisdn');
  var order_no = params.orderNo;
  var trade_no = params.tradeNo;
  var comments = params.comments;

  var signType = F._signType_MD5(appId, method, charset, Key, false);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'msisdn',
        value: msisdn
      },
      {
        key: 'username',
        value: username
      },
      {
        key: 'trade_no',
        value: trade_no
      },
      {
        key: 'order_no',
        value: order_no
      },
      {
        key: 'comments',
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
    type: 'POST',
    url: F._addEvaluation_cd,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'Nhận xét không thành công', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 重置密码
F._userAction_changePassword = function(params, callback) {
  var Key = 'userKey';

  var provider = params.provider || '0';
  var msisdn = params.msisdn;
  var password = params.password;
  var otp = params.otp;

  var md5EncryptStrig = '';
  md5EncryptStrig += 'provider=' + provider;
  md5EncryptStrig += '&msisdn=' + msisdn;
  md5EncryptStrig += '&password=' + password;
  md5EncryptStrig += '&otp=' + otp;
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
    type: 'POST',
    url: F._userAction_changePassword_uc,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);
      switch (ret.status) {
        case 10000:
          break;

        case 40000:
          F._confirm('Gợi ý', 'Mã xác nhận SMS không đúng', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 60050:
          F._confirm('Gợi ý', 'Người dùng không tồn tại', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 50008:
          F._confirm('Gợi ý', 'Số thẻ tồn tại', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 50010:
          F._confirm('Gợi ý', 'Mã thẻ đã quá hạn sử dụng', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 50020:
          F._confirm('Gợi ý', 'Yêu cầu thất bại', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 修改交易密码
F._userAction_modifyPayPassword = function(params, callback) {
  var Key = 'userKey';

  var provider = params.provider || '0';
  var msisdn = params.msisdn;
  var paypassword = params.paypassword;
  var otp = params.otp;

  var md5EncryptStrig = '';
  md5EncryptStrig += 'provider=' + provider;
  md5EncryptStrig += '&msisdn=' + msisdn;
  md5EncryptStrig += '&paypassword=' + paypassword;
  md5EncryptStrig += '&otp=' + otp;
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
    type: 'POST',
    url: F._userAction_modifyPayPassword_uc,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);
      switch (ret.status) {
        case 10000:
          break;

        case 40000:
          F._confirm('Gợi ý', 'Mã xác nhận SMS không đúng', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 60050:
          F._confirm('Gợi ý', 'Người dùng không tồn tại', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 50008:
          F._confirm('Gợi ý', 'Số thẻ tồn tại', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 50010:
          F._confirm('Gợi ý', 'Mã thẻ đã quá hạn sử dụng', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 50020:
          F._confirm('Gợi ý', 'Yêu cầu thất bại', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 判断交易密码
F._userAction_checkPayPasword = function(params, callback) {
  var Key = 'userKey';

  var provider = params.provider || '0';
  var msisdn = params.msisdn;
  var paypassword = params.paypassword;

  var md5EncryptStrig = '';
  md5EncryptStrig += 'provider=' + provider;
  md5EncryptStrig += '&msisdn=' + msisdn;
  md5EncryptStrig += '&paypassword=' + paypassword;
  md5EncryptStrig += Key;
  var encrypt = md5(md5EncryptStrig);

  var data = {
    provider: provider,
    msisdn: msisdn,
    paypassword: paypassword,
    encryption: encrypt
  };

  $.ajax({
    type: 'POST',
    url: F._userAction_checkPayPasword_uc,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 查询账单信息
F._inquiryBill = function(params, callback) {
  if (!F._isLogin()) return false;

  var Key = 'settleKey';
  var appId = localStorage.getItem('funId');
  var method = 'fun.trade.inquiryBill';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '1.0';
  var notifyUrlBg = '';
  var useraccount = '';

  var orderNo = params.orderNo;
  var tradeNo = params.tradeNo;

  var signType = F._signType_MD5(appId, method, charset, Key, false);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'orderNo',
        value: orderNo
      },
      {
        key: 'tradeNo',
        value: tradeNo
      },
      {
        key: 'useraccount',
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
    type: 'POST',
    url: F._inquiryBill_td,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);
      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'Lấy thông tin hóa đơn thất bại', 'tips', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

F._queryOrder = function(params, callback) {
  if (!F._isLogin()) return false;

  var Key = 'tradeKey';
  var appId = localStorage.getItem('funId');
  var method = 'fun.trade.query';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var orderNo = params.orderNo;
  var tradeNo = params.tradeNo;

  var signType = F._signType_MD5(appId, method, charset, Key, false);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'orderNo',
        value: orderNo
      },
      {
        key: 'tradeNo',
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
    type: 'POST',
    url: F._queryOrder_td,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);
      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'Lấy thông tin đơn hàng thất bại', 'tips', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 用户评论上传图片
F._collectFiles = function(data, callback) {
  $.ajax({
    url: F._collectFiles_uf,
    type: 'POST',
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
          $('#loading').remove();
          F._confirm('Gợi ý', 'Tải lên thất bại', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 上传用户头像
F._uploadFilesUser = function(data, callback) {
  $.ajax({
    url: F._uploadFiles_uf,
    type: 'POST',
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
          $('#loading').remove();
          F._confirm('Gợi ý', 'Tải lên thất bại', 'error', [
            {
              name: 'Xác nhận',
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
  var Key = 'commodityKey';
  var appId = '0';
  var method = 'fun.computer.topad';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '1.0';

  var typeid = params.typeid || '2';
  var pagesize = params.pagesize || '5';
  var currentpage = params.currentpage || '1';

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'typeid',
        value: typeid
      },
      {
        key: 'pagesize',
        value: pagesize
      },
      {
        key: 'currentpage',
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
    type: 'GET',
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
  var Key = 'userKey';

  var provider = '0';
  var msisdn = params.msisdn;
  var password = params.password || '';
  var otp = params.otp || '';
  var appid = params.appid || '';

  var md5EncryptStrig = '';
  md5EncryptStrig += 'provider=' + provider;
  md5EncryptStrig += '&msisdn=' + msisdn;
  md5EncryptStrig += '&password=' + password;
  md5EncryptStrig += '&otp=' + otp;
  md5EncryptStrig += '&appid=' + appid;
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
    type: 'POST',
    url: F._userAction_login_uc,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      localStorage.setItem('userType', '');
      loading.hide();
      switch (ret.status) {
        case 10000:
          sessionStorage.setItem('funId', ret.result);
          localStorage.setItem('funId', ret.result);
          localStorage.setItem('msisdn', ret.msisdn);
          localStorage.setItem('userType', ret.userType);
          localStorage.setItem('validTime', +new Date() + 7 * 24 * 60 * 60 * 1000);

          F._localToServer(function() {
            F._userViewDetailInfo({}, function(ret) {
              if (ret.data.username) {
                localStorage.setItem('username', ret.data.username);
              } else {
                localStorage.setItem('username', '');
              }

              var hrefUtils_parse = F._hrefUtils.parse();
              F.query = hrefUtils_parse.query;

              if (hrefUtils_parse.path.slice(-10, -1) !== 'login.htm') return false;

              if (F.query) {
                switch (F.query.from) {
                  case 'register':
                    window.location.href = '../index.html';
                    break;

                  case 'confirm':
                    window.location.href = '../index.html';
                    break;

                  default:
                    window.history.go(-1);
                    break;
                }
              } else {
                window.history.go(-1);
              }
            });
          });

          break;

        case 60050:
          if (data.otp) {
            // 验证码登录
            window.location.href = './register.html?msisdn=' + data.msisdn + '&otp=' + data.otp;
          } else {
            F._confirm('Gợi ý', 'Tên đăng nhập hoặc mật khẩu không hợp lệ', 'error', [
              {
                name: 'Xác nhận',
                func: function() {}
              }
            ]);
          }
          break;

        case 70002:
          F._confirm('Gợi ý', 'Mã xác nhận SMS không đúng', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'Tên đăng nhập hoặc mật khẩu không hợp lệ', 'error', [
            {
              name: 'Xác nhận',
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
  var Key = 'userKey';

  var provider = '0';
  var msisdn = params.msisdn;
  var type = params.type || '1';

  var md5EncryptStrig = '';
  md5EncryptStrig += 'provider=' + provider;
  md5EncryptStrig += '&msisdn=' + msisdn;
  md5EncryptStrig += '&type=' + type;
  md5EncryptStrig += Key;
  var encrypt = md5(md5EncryptStrig);

  var data = {
    provider: provider,
    msisdn: msisdn,
    type: type,
    encryption: encrypt
  };

  $.ajax({
    type: 'POST',
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
          F._confirm('Gợi ý', 'Không thể gửi', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 70002:
          F._confirm('Gợi ý', 'Không thể gửi', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 70003:
          F._confirm('Gợi ý', 'Không thể gửi', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'Không thể gửi', 'error', [
            {
              name: 'Xác nhận',
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

// 新流程订单-创建
F._createDisOrder = function(params, callback) {
  if (!F._isLogin()) return false;

  var Key = 'tradeKey';

  var appId = '0';
  var method = 'fun.trade.createDisOrder';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.1';

  var funid = localStorage.getItem('funId');
  var orderdetails = JSON.stringify(params.orderdetails);
  var remark = params.remark || '';
  var ordertype = params.ordertype;
  var mergeinfo = params.mergeinfo || '';
  var addrid = params.addrid;

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'orderdetails',
        value: orderdetails
      },
      {
        key: 'remark',
        value: remark
      },
      {
        key: 'ordertype',
        value: ordertype
      },
      {
        key: 'mergeinfo',
        value: mergeinfo
      },
      {
        key: 'addrid',
        value: addrid
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
    remark: remark,
    ordertype: ordertype,
    mergeinfo: mergeinfo,
    addrid: addrid
  };

  $.ajax({
    type: 'POST',
    url: F._createDisOrder_td,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        case 40000:
          // 加密错误
          F._confirm('Gợi ý', 'Đặt hàng thất bại', 'tips', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
        case 40005: // 信息未完善
          F._confirm('Gợi ý', 'Bạn chưa hoàn thiện thông tin chi tiết, vui lòng hoàn thiện trước', 'tips', [
            {
              name: 'Để sau',
              func: function() {}
            },
            {
              name: 'Hoàn thiện ngay',
              func: function() {
                // getSchoolInfo_addInfo();
              }
            }
          ]);

          break;

        case 50000:
          // 系统运行错误 (表示创建错误)
          F._confirm('Gợi ý', 'Đặt hàng thất bại', 'tips', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 50020:
          // http调用错误
          F._confirm('Gợi ý', 'Đặt hàng thất bại', 'tips', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 60001:
          F._confirm('Gợi ý', 'Đã hết hàng', 'tips', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;

        case 60005:
          // 订单已创建
          F._confirm('Gợi ý', 'Đơn hàng đã được xác lập, vui lòng tới trang đơn hàng của tôi để thanh toán', 'tips', [
            {
              name: 'Thanh toán',
              func: function() {
                window.location.href = './order.html';
              }
            }
          ]);
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'Đặt hàng thất bại', 'tips', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 新流程订单-支付
F._payDisOrder = function(params, callback) {
  if (!F._isLogin()) return false;

  var Key = 'tradeKey';

  var appId = '0';
  var method = 'fun.trade.payDisOrder';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '2.0';

  var funid = localStorage.getItem('funId');
  var orderno = params.orderno;
  var tradeno = params.tradeno;
  var payway = params.payway;
  var paypassword = params.paypassword;

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'orderno',
        value: orderno
      },
      {
        key: 'tradeno',
        value: tradeno
      },
      {
        key: 'payway',
        value: payway
      },
      {
        key: 'paypassword',
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
    orderno: orderno,
    tradeno: tradeno,
    payway: payway,
    paypassword: paypassword
  };

  var loading = new F._loading();
  if (payway == '1' || payway == '5') {
    $.ajax({
      type: 'POST',
      url: F._payDisOrder_td,
      data: data,
      success: function(ret) {
        ret = JSON.parse(ret);
        callback(ret);

        switch (ret.code) {
          case 10000:
            // window.location.href = './successPay.html';
            break;

          case 40005: // 信息未完善
            F._confirm('Gợi ý', 'Bạn chưa hoàn thiện thông tin chi tiết, vui lòng hoàn thiện trước', 'tips', [
              {
                name: 'Để sau',
                func: function() {}
              },
              {
                name: 'Hoàn thiện ngay',
                func: function() {
                  // getSchoolInfo_addInfo();
                }
              }
            ]);

            break;

          case 50010: // 订单过期
            F._confirm('Gợi ý', 'Đơn hàng đã quá hạn', 'tips', [
              {
                name: 'Xác nhận',
                func: function() {}
              }
            ]);

            break;

          case 40008: // Số dư không đủ
            F._confirm('Gợi ý', 'Số dư không đủ', 'tips', [
              {
                name: 'Xác nhận',
                func: function() {}
              }
            ]);

            break;

          case 50006: // 用户被加入黑名单
            F._confirm('Gợi ý', 'Người dùng đã bị thêm vào danh sách đen, xin hãy liên hệ chăm sóc khách hang', 'tips', [
              {
                name: 'Xác nhận',
                func: function() {}
              }
            ]);

            break;

          case 60051: // 交易密码错误
            F._confirm('Gợi ý', 'Mật mã giao dịch sai', 'tips', [
              {
                name: 'Xác nhận',
                func: function() {}
              }
            ]);
            break;

          default:
            $('#loading').remove();
            F._confirm('Gợi ý', 'Thanh toán thất bại', 'tips', [
              {
                name: 'Xác nhận',
                func: function() {}
              }
            ]);
            break;
        }
      },
      error: function(ret) {
        console.error('request error');
        callback(false);
      }
    });
  } else {
    loading.hide();
    if (params._noConfirm) {
      var full_confirm = F._confirm('Gợi ý', 'Môi trường của bạn an toàn và bạn có thể yên tâm thanh toán', 'success', [
        {
          name: 'Thanh toán',
          func: function() {
            window.open(F._url_joint(F._payDisOrder_td, data));
            full_confirm.close();
            F._confirm('Gợi ý', '', 'tips', [
              {
                name: 'Thanh toán thất bại',
                func: function() {
                  window.location.href = '../index.html';
                }
              },
              {
                name: 'Thanh toán thành công',
                func: function() {
                  window.location.href = './order.html';
                }
              }
            ]);
          }
        }
      ]);
    } else {
      var full_confirm = F._confirm('Gợi ý', 'Đơn hàng được khởi tạo thành công', 'success', [
        {
          name: 'Thanh toán',
          func: function() {
            window.open(F._url_joint(F._payDisOrder_td, data));
            full_confirm.close();
            F._confirm('Gợi ý', '', 'tips', [
              {
                name: 'Thanh toán thất bại',
                func: function() {
                  window.location.href = '../index.html';
                }
              },
              {
                name: 'Thanh toán thành công',
                func: function() {
                  window.location.href = './order.html';
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

  var Key = 'tradeKey';

  var appId = localStorage.getItem('funId');
  var method = 'fun.trade.createnormal';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '1.0';
  var notifyUrlBg = '';
  var orderNo = (function() {
    var mydate = new Date();
    return appId + mydate.getDay() + mydate.getHours() + mydate.getMinutes() + mydate.getSeconds() + mydate.getMilliseconds() + Math.round(Math.random() * 10000);
  })();
  var funid = localStorage.getItem('funId');
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
        key: 'orderNo',
        value: orderNo
      },
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'totalAmount',
        value: totalAmount
      },
      {
        key: 'currency',
        value: currency
      },
      {
        key: 'subject',
        value: subject
      },
      {
        key: 'repaymentMonth',
        value: repaymentMonth
      },
      {
        key: 'goodsDetail',
        value: goodsDetail
      },
      {
        key: 'timeoutExpress',
        value: timeoutExpress
      },
      {
        key: 'orderNo1',
        value: orderNo1
      },
      {
        key: 'tradeNo1',
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
    type: 'POST',
    url: F._createNormalOrder_td,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);

      switch (ret.code) {
        case 10000:
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'Đơn hàng được khởi tạo thất bại', 'tips', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 支付（还款）订单
F._payNormalOrder = function(params, callback) {
  if (!F._isLogin()) return false;

  var Key = 'tradeKey';

  var appId = localStorage.getItem('funId');
  var method = 'fun.trade.paynormal';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '1.0';
  var orderNo = params.orderNo;
  var tradeNo = params.tradeNo;
  var repaymentMonth = params.repaymentMonth;
  var totalAmount = params.amount;
  var payway = params.payWay;
  var paypassword = params.paypassword || '';

  var signType = F._signType_MD5(appId, method, charset, Key, false);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'orderNo',
        value: orderNo
      },
      {
        key: 'tradeNo',
        value: tradeNo
      },
      {
        key: 'repaymentMonth',
        value: repaymentMonth
      },
      {
        key: 'totalAmount',
        value: totalAmount
      },
      {
        key: 'payway',
        value: payway
      },
      {
        key: 'paypassword',
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
  if (payway == '1') {
    $.ajax({
      type: 'POST',
      url: F._payNormalOrder_td,
      data: data,
      success: function(ret) {
        ret = JSON.parse(ret);
        callback(ret);

        switch (ret.code) {
          case 10000:
            break;

          case 60051: // 交易密码错误
            F._confirm('Gợi ý', 'Mật mã giao dịch sai', 'tips', [
              {
                name: 'Xác nhận',
                func: function() {}
              }
            ]);
            break;

          default:
            $('#loading').remove();
            window.location.href = './errorPay.html';
            break;
        }
      },
      error: function(ret) {
        console.error('request error');
        callback(false);
      }
    });
  } else {
    var loading = new F._loading();
    loading.hide();
    if (params._noConfirm) {
      var full_confirm = F._confirm('Gợi ý', 'Môi trường của bạn an toàn và bạn có thể yên tâm thanh toán', 'success', [
        {
          name: 'Thanh toán',
          func: function() {
            window.open(F._url_join(F._payNormalOrder_td, data));
            full_confirm.close();
            F._confirm('Gợi ý', '', 'tips', [
              {
                name: 'Thanh toán thất bại',
                func: function() {
                  window.location.href = '../index.html';
                }
              },
              {
                name: 'Thanh toán thành công',
                func: function() {
                  window.location.href = './bill.html';
                }
              }
            ]);
          }
        }
      ]);
    } else {
      var full_confirm = F._confirm('Gợi ý', 'Đơn hàng được khởi tạo thành công', 'success', [
        {
          name: 'Thanh toán',
          func: function() {
            window.open(F._url_join(F._payNormalOrder_td, data));
            full_confirm.close();
            F._confirm('Gợi ý', '', 'tips', [
              {
                name: 'Thanh toán thất bại',
                func: function() {
                  window.location.href = '../index.html';
                }
              },
              {
                name: 'Thanh toán thành công',
                func: function() {
                  window.location.href = './bill.html';
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

  var Key = 'userKey';
  var appId = localStorage.getItem('funId');
  var method = 'fun.uc.useradddetail';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);

  var version = '1.0';

  var username = params.username;
  var funid = localStorage.getItem('funId');
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
        key: 'username',
        value: username
      },
      {
        key: 'funid',
        value: funid
      },
      {
        key: 'birthday',
        value: birthday
      },
      {
        key: 'identification',
        value: identification
      },
      {
        key: 'address',
        value: address
      },
      {
        key: 'email',
        value: email
      },
      {
        key: 'connectusername1',
        value: connectusername1
      },
      {
        key: 'connectusermsisdn1',
        value: connectusermsisdn1
      },
      {
        key: 'connectuserrelation1',
        value: connectuserrelation1
      },
      {
        key: 'connectuseridentification1',
        value: connectuseridentification1
      },
      {
        key: 'connectusername2',
        value: connectusername2
      },
      {
        key: 'connectusermsisdn2',
        value: connectusermsisdn2
      },
      {
        key: 'connectuserrelation2',
        value: connectuserrelation2
      },
      {
        key: 'connectuseridentification2',
        value: connectuseridentification2
      },
      {
        key: 'connectusername3',
        value: connectusername3
      },
      {
        key: 'connectusermsisdn3',
        value: connectusermsisdn3
      },
      {
        key: 'connectuserrelation3',
        value: connectuserrelation3
      },
      {
        key: 'connectuseridentification3',
        value: connectuseridentification3
      },
      {
        key: 'collegeaddr',
        value: collegeaddr
      },
      {
        key: 'collegename',
        value: collegename
      },
      {
        key: 'degree',
        value: degree
      },
      {
        key: 'headimage',
        value: headimage
      },
      {
        key: 'sex',
        value: sex
      },
      {
        key: 'department',
        value: department
      },
      {
        key: 'specialty',
        value: specialty
      },
      {
        key: 'admissiontime',
        value: admissiontime
      },
      {
        key: 'graduationtime',
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
    type: 'POST',
    url: F._userAddDetailInfo_uc,
    data: data,
    success: function(ret) {
      ret = JSON.parse(ret);
      callback(ret);
      switch (ret.code) {
        case 10000:
          if (username) {
            localStorage.setItem('username', username);
          } else {
            localStorage.setItem('username', '');
          }
          break;

        default:
          $('#loading').remove();
          F._confirm('Gợi ý', 'error', 'error', [
            {
              name: 'Xác nhận',
              func: function() {}
            }
          ]);
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 获取用户详细信息
F._userViewDetailInfo = function(params, callback) {
  var appId = localStorage.getItem('funId');
  var method = 'fun.uc.userviewdetail';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '1.0';
  var Key = 'userKey';
  var funid = localStorage.getItem('funId');

  var signType = F._signType_MD5(appId, method, charset, Key, false);

  var md5SigntypeStrig = '';
  md5SigntypeStrig += 'appId=' + appId;
  md5SigntypeStrig += '&method=' + method;
  md5SigntypeStrig += '&charset=' + charset;
  md5SigntypeStrig += Key;
  var signType = md5(md5SigntypeStrig);

  var md5EncryptStrig = '';
  md5EncryptStrig += 'funid=' + funid;
  md5EncryptStrig += '&msisdn=' + '';
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
    msisdn: '',
    signType: signType,
    encrypt: encrypt
  };

  $.ajax({
    type: 'POST',
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

          if (ret.connectusername2.length === 0) {
            is_fullInfo = false;
          }

          if (ret.connectusermsisdn2.length === 0) {
            is_fullInfo = false;
          }

          if (ret.connectuserrelation2.length === 0) {
            is_fullInfo = false;
          }

          if (ret.connectusername3.length === 0) {
            is_fullInfo = false;
          }

          if (ret.connectusermsisdn3.length === 0) {
            is_fullInfo = false;
          }

          if (ret.connectuserrelation3.length === 0) {
            is_fullInfo = false;
          }

          // if (ret.connectuseridentification1.length === 0) {
          //     is_fullInfo = false;
          // }

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
          $('#loading').remove();
          callback({
            status: false,
            data: {}
          });
          break;
      }
    },
    error: function(ret) {
      console.error('request error');
      callback(false);
    }
  });
};

// 获取学校数据
F._getSchoolInfo = function(params, callback) {
  var Key = 'userKey';
  var appId = localStorage.getItem('funId');
  var method = 'fun.uc.getschoolinfo';
  var charset = 'utf-8';
  var timestamp = F._timeStrForm(parseInt(+new Date() / 1000), 3);
  var version = '1.0';

  var notifyurlbg = '';
  var name = params.name || ''; // 默认查全部

  var signType = F._signType_MD5(appId, method, charset, Key, true);

  var encrypt = F._encrypt_MD5(
    [
      {
        key: 'name',
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
    type: 'POST',
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
      console.error('request error');
      callback(false);
    }
  });
};

// 22222222222222
F._downPayment = function(price) {
  var changeDisplay = function(array) {
    var index;
    for (index = 0; index < 6; index++) {
      if (array.indexOf(index) === -1) {
        $('.selectoption' + index).remove();
      } else {
        $('.selectoption' + index).show();
      }
    }
  };

  price = parseInt(price);
  
  if (price === 0) return false;

  if (F._INSTALLMENT_MIN_VALUE >= price) {
    changeDisplay([0, 1, 2, 3, 4, 5]);
  } else if (F._INSTALLMENT_MAX_VALUE <= price) {
    changeDisplay([0, 5]);
  } else {
    value = (price - F._INSTALLMENT_MIN_VALUE) / price * 100;
    if (0 < value && value <= 10) {
      changeDisplay([0, 1, 2, 3, 4, 5]);
    }
    if (10 < value && value <= 20) {
      changeDisplay([0, 2, 3, 4, 5]);
    }
    if (20 < value && value <= 30) {
      changeDisplay([0, 3, 4, 5]);
    }
    if (30 < value && value <= 40) {
      changeDisplay([0, 4, 5]);
    }
    if (40 < value && value <= 50) {
      changeDisplay([0, 5]);
    }
  }
};

F._get_coupon = function(id, status) {
  var loading = new F._loading();
  if (!status) return false;
  if (!localStorage.getItem('funId')) {
    F._confirm('Gợi ý', 'Vui lòng đăng nhập', 'tips', [
      {
        name: 'Xác nhận',
        func: function() {
          window.location.href = 'login.html';
        }
      }
    ]);
    return false;
  }

  loading.show();
  F._receiveVoucher(
    {
      funid: localStorage.getItem('funId'),
      voucherid: id
    },
    function(ret) {
      loading.hide();
      if (!ret) return false;
      if (ret.code !== 10000) return false;
      F._confirm('Gợi ý', 'Nhận voucher thành công', 'success', [
        {
          name: 'Xác nhận',
          func: function() {
            location.reload();
          }
        }
      ]);
    }
  );
};

F._get_status = function(status, num) {
  // num：剩余
  var text;
  var status;
  if (status === 0) {
    // 已领取
    text = 'Đã nhận';
    status = false;
  } else {
    switch (num) {
      case 0:
        text = 'Đã hết';
        status = false;
        break;

      default:
        text = 'Sử dụng ngay lập tức';
        status = true;
        break;
    }
  }

  return {
    text: text,
    status: status
  };
};

F._create_orderno = function(funid) {
  var mydate = new Date();
  return funid + mydate.getDay() + mydate.getHours() + mydate.getMinutes() + mydate.getSeconds() + mydate.getMilliseconds() + Math.round(Math.random() * 10000);
};

F._is_initPaypassword = function(callback) {
  F._userAction_getUserInfoById({}, function(ret) {
    if (!ret) return false;
    if (ret.status !== 10000) return false;

    // 返回true: 已设置
    callback(ret.details.initPassword !== 0);
  });
};

// 本地购物车上传到服务器
F._localToServer = function(callback) {
  localStorage.getItem('cart') || localStorage.setItem('cart', '[]');
  var cartitems = JSON.parse(localStorage.getItem('cart'));
  F._cart_gate(
    {
      cartitems: localStorage.getItem('cart')
    },
    function(ret) {
      callback();
      if (!ret) return false;
      if (ret.code !== 10000) return false;

      localStorage.setItem('cart', '[]');
    }
  );
};

F._add_edit_address = function(params) {
  var is_modify = !!params.id;
  var loading = new F._loading();

  function edit_address(data) {
    var provinces_data = data.provinces_data || [];
    var districts_data = data.districts_data || [];
    var wards_data = data.wards_data || [];
    var def_option_item = '<option value="0">Lựa chọn</option>';

    function edit_provinces_option(data) {
      var i;
      var result = def_option_item;
      for (i = 0; i < data.length; i++) {
        result += '<option class="provinces-item" value="' + data[i].id + '" data-pid="' + data[i].id + '">' + data[i].name + '</option>';
      }
      return result;
    }
    function edit_districts_option(data) {
      var i;
      var result = def_option_item;
      for (i = 0; i < data.length; i++) {
        result += '<option class="districts-item" value="' + data[i].id + '" data-pid="' + data[i].id + '">' + data[i].name + '</option>';
      }
      return result;
    }
    function edit_wards_option(data) {
      var i;
      var result = def_option_item;
      for (i = 0; i < data.length; i++) {
        result += '<option class="wards-item" value="' + data[i].id + '" data-pid="' + data[i].id + '">' + data[i].name + '</option>';
      }
      return result;
    }
    var html_str = '\
        <div class="modal fade" id="myModal123" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
            <div class="modal-dialog">\
                <div class="modal-content">\
                    <div class="modal-header">\
                        <div class="left">Địa chỉ nhận hàng</div>\
                        <div class="right" data-dismiss="modal" ng-blur="phoneNum=\'\'"><span class="alert__b-m-t-close"></span></div>\
                    </div>\
                    <div class="modal-body">\
                        <span>Tên *</span>\
                        <input type="name" name="" id="names" value="' + params.username + '" placeholder="Vui lòng nhập tên người nhận hàng" />\
                        <br />\
                        <span style="padding-top:0px;">Địa chỉ nhận hàng * (tầng, số nhà, đường)</span>\
                        <input type="text" name="" id="textarea" placeholder="" value="' + params.address + '">\
                        <br />\
                        <span>Tỉnh/Thành phố *</span>\
                        <select name="" id="division2nd">\
                            ' + def_option_item + '\
                        </select>\
                        <br />\
                        <span>Quận/huyện *</span>\
                        <select name="" id="division3rd">\
                            ' + def_option_item + '\
                        </select>\
                        <br />\
                        <span>Phường, xã</span>\
                        <select name="" id="division4th">\
                            ' + def_option_item + '\
                        </select>\
                        <br />\
                        <span>Số điện thoại *</span>\
                        <input type="text" ng-model="phoneNum" name="" id="phone" value="' + params.msisdn + '" placeholder="Vui lòng nhập số điện thoại" maxlength="20" oninput="/^[0-9]*$/.test(this.value) ? this.setAttribute(\'data-on-val\', this.value) : this.value = this.getAttribute(\'data-on-val\');" data-on-val="">\
                        <br />\
                        <!--<div class="area">\
                            <div class="left">\
                                <span>Địa chỉ cụ thể</span>\
                            </div>\
                            <div class="left areatext">\
                                <textarea name="" id="" rows="" cols="" placeholder="Vui lòng bổ sung địa chỉ cụ thể, ví dụ như tên đường, số nhà,số tầng và số phòng"></textarea>\
                            </div>\
                        </div>-->\
                        <h4 id="errormsg" class="errormsg"><img src="../img/tishi.png"><small>Tên và số điện thoại không được để trống....</small></h4>\
                        <i class="rc rcone" ng-click="submit()" style="cursor: pointer;display: none;">Xác nhận thông tin chính xác và lưu</i>\
                        <i class="rc rctwo" style="cursor: pointer;" id="add-address-submit">Xác nhận thông tin chính xác và lưu</i>\
                    </div>\
                </div>\
            </div>\
        </div>';

    $('body').append(html_str);

    $('#division2nd').html(edit_provinces_option(provinces_data));
    $('#division3rd').html(edit_districts_option(districts_data));
    $('#division4th').html(edit_wards_option(wards_data));

    $('#division2nd').val(params.division2nd);
    $('#division3rd').val(params.division3rd);
    $('#division4th').val(params.division4th);

    $('#myModal123-label').click();

    $('.modal-dialog').on('click', function(event) {
      event.stopPropagation();
    });

    $('.alert__b-m-t-close').on('click', function() {
      $('#myModal123').click();
    });

    $('#myModal123').on('click', function() {
      setTimeout(function() {
        $('#myModal123').remove();
        $('.modal-backdrop').remove();
      }, 500);
    });

    $('#division2nd').on('change', function() {
      $('#division4th').html(def_option_item);
      var self = $(this);
      var id = self.val();
      if (!id || id === '0') {
        $('#division3rd').html(def_option_item);
        return false;
      }
      loading.show();
      F._getCityInfos(
        {
          pid: id
        },
        function(ret) {
          loading.hide();
          if (!ret) return false;
          if (ret.code !== 10000) return false;

          $('#division3rd').html(edit_districts_option(ret.details));
        }
      );
    });

    $('#division3rd').on('change', function() {
      var self = $(this);
      var id = self.val();
      if (!id || id === '0') {
        $('#division4th').html(def_option_item);
        return false;
      }
      loading.show();
      F._getCityInfos(
        {
          pid: id
        },
        function(ret) {
          loading.hide();
          if (!ret) return false;
          if (ret.code !== 10000) return false;
          $('#division4th').html(edit_wards_option(ret.details));
          $('#division4th').on('change', function() {
            var self = $(this);
            var id = self.val();
            if (!id) return false;
          });
        }
      );
    });

    $('#add-address-submit').on('click', function() {
      submits();
    });

    var submits = function() {
      if (!F._isLogin()) return false;

      var name = $('#names').val();
      var phone = $('#phone').val();
      var textarea = $('#textarea').val();
      var division2nd = $('#division2nd').val() + '';
      var division3rd = $('#division3rd').val() + '';
      var division4th = $('#division4th').val() + '';

      if (name.length < 2) {
        $('#errormsg small').html('Tên sai');
        $('#errormsg').show();
        return false;
      }

      if (textarea.length < 1) {
        $('#errormsg small').html('Địa chỉ nhận hàng sai');
        $('#errormsg').show();
        return false;
      }

      if (!division2nd || division2nd === '0') {
        $('#errormsg small').html('Tỉnh/Thành phố sai');
        $('#errormsg').show();
        return false;
      }

      if (!division3rd || division3rd === '0') {
        $('#errormsg small').html('Quận/huyện sai');
        $('#errormsg').show();
        return false;
      }

      if (!division4th) {
        $('#errormsg small').html('Phường, xã sai');
        $('#errormsg').show();
        return false;
      }

      if (!F._phoneExpr.test(phone)) {
        $('#errormsg small').html('Số điện thoại sai');
        $('#errormsg').show();
        return false;
      }

      $('#errormsg').hide();
      $('#errormsg small').html('');

      var loading = new F._loading();
      loading.show();

      if (is_modify) {
        F._userAction_userModifyAddr(
          {
            addrid: params.id,
            msisdn: phone,
            address: textarea,
            isdefault: params.isdefault,
            username: name,
            division2nd: division2nd,
            division3rd: division3rd,
            division4th: division4th
          },
          function(ret) {
            loading.hide();
            if (!ret) return false;
            if (ret.code !== 10000) return false;

            window.location.reload();
          }
        );
      } else {
        F._userAction_userAddAddr(
          {
            msisdn: phone,
            address: textarea,
            isdefault: 'Y',
            username: name,
            division2nd: division2nd,
            division3rd: division3rd,
            division4th: division4th
          },
          function(ret) {
            loading.hide();

            if (!ret) return false;

            if (ret.code === 10000) window.location.reload();
          }
        );
      }
    };

    $('.rcone').hide();
    $('.rctwo').show();
  }

  loading.show();

  var all_data = {};
  var request_length = is_modify && params.division2nd ? 3 : 1; //请求个数

  F._getCityInfos(
    {
      pid: '1'
    },
    function(ret) {
      loading.hide();
      if (!ret) return false;
      if (ret.code !== 10000) return false;
      all_data.provinces_data = ret.details;
      all_loaded();
    }
  );

  if (is_modify && params.division2nd) {
    F._getCityInfos(
      {
        pid: params.division2nd
      },
      function(ret) {
        loading.hide();
        if (!ret) return false;
        if (ret.code !== 10000) return false;
        all_data.districts_data = ret.details;
        all_loaded();
      }
    );
    F._getCityInfos(
      {
        pid: params.division3rd
      },
      function(ret) {
        loading.hide();
        if (!ret) return false;
        if (ret.code !== 10000) return false;
        all_data.wards_data = ret.details;
        all_loaded();
      }
    );
  }

  function all_loaded() {
    if (Object.keys(all_data).length === request_length) {
      edit_address(all_data);
      loading.hide();
    }
  }
};

F._get_birth_day = function(val) {
  var nD = new Date(val);
  var year = nD.getFullYear();
  var month = nD.getMonth() + 1;
  var date = nD.getDate();

  month < 10 && (month = '0' + month);
  date < 10 && (date = '0' + date);

  return {
    year: year,
    month: month,
    date: date
  };
};

F._day_options_produce_htmlStr = function() {
  var i;
  var result = '';
  for (i = 1; i < 32; i++) {
    i < 10 && (i = '0' + i);
    result += '<option value="' + i + '">' + i + '</option>';
  }
  return result;
};

F._month_options_produce_htmlStr = function() {
  var i;
  var result = '';
  for (i = 1; i < 13; i++) {
    i < 10 && (i = '0' + i);
    result += '<option value="' + i + '">' + i + '</option>';
  }
  return result;
};

F._year_options_produce_htmlStr = function(val) {
  val = val || 0;
  var i;
  var result = '';
  var year_now = new Date().getFullYear() + val;
  for (i = year_now; i > 1900 - 1; i--) {
    result += '<option value="' + i + '">' + i + '</option>';
  }
  return result;
};

F._run_accordionMenu = function(jQuery, data, callback) {
  function edit_demoListItem(array) {
    var index;
    var support_str = '';
    var nosupport_str = '';
    var result = '';

    for (index = 0; index < array.length; index++) {
      if (array[index].staging !== 2) {
        if (array[index].staging === 1) {
          support_str += '<li class="demo-list-item demo-list-item_support" data-id="' + array[index].id + '" data-name="' + array[index].name + '"><a href="javascript:;">' + array[index].name + '</a></li>';
        } else {
          nosupport_str += '<li class="demo-list-item demo-list-item_nosupport" data-id="' + array[index].id + '" data-name="' + array[index].name + '"><a href="javascript:;">' + array[index].name + '</a></li>';
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
                <ul id="demo-list">' + edit_demoListItem(data) + '</ul>\
            </div>\
        </div>';

  $('body').append(html);

  $('.demo-list-item').on('click', function() {
    var self = $(this);
    var is_support = self.hasClass('demo-list-item_support');
    var id = self.data('id');
    var name = self.data('name');
    callback({
      id: id,
      name: name,
      is_support: is_support
    });
    is_support && $('.jquery-accordion-menu-content').remove();
  });

  $('.jquery-accordion-menu-header-close').on('click', function() {
    $('.jquery-accordion-menu-content').remove();
  });

  jQuery('#jquery-accordion-menu').jqueryAccordionMenu();
  (function($) {
    $.expr[':'].Contains = function(a, i, m) {
      return (a.textContent || a.innerText || '').toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };
    function filterList(header, list) {
      var form = $('<form>').attr({
          class: 'filterform',
          action: '#'
        }),
        input = $('<input>').attr({
          class: 'filterinput',
          type: 'text',
          placeholder: 'Tìm kiếm'
        });
      $(form)
        .append(input)
        .appendTo(header);
      $(input)
        .change(function() {
          var filter = $(this).val();
          if (filter) {
            $matches = $(list)
              .find('a:Contains(' + filter + ')')
              .parent();
            $('li', list)
              .not($matches)
              .slideUp();
            $matches.slideDown();
          } else {
            $(list)
              .find('li')
              .slideDown();
          }
          return false;
        })
        .keyup(function() {
          $(this).change();
        });
    }
    $(function() {
      filterList($('#form'), $('#demo-list'));
    });
  })(jQuery);

  //顶部导航切换
  $('#demo-list li').click(function() {
    $('#demo-list li.active').removeClass('active');
    $(this).addClass('active');
  });
};

F._checkValidLogin = function() {
  var validTime = localStorage.getItem('validTime');
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
          qsPar[decodeURIComponent(nm[0])] = decodeURIComponent(nm[1] || '');
        }
      }
      return qsPar;
    }
  };

  function parse(url) {
    var i;
    var url = url || loc.href;
    var regExp = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];
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
                                <div class="userLogin-info__top-face" style="background-image: url(' + F._def_avatar + ');"></div>\
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
                    <a href="' + dot_str + './html/' + (localStorage.getItem('userType') === '1' ? 'personal' : 'oneself') + '.html" class="header__n-m-l-item3">Trung tâm cá nhân</a>\
                </div>\
                <div class="header__n-m-left header__n-m-left_nologin">\
                    <a href="' + dot_str + './html/login.html" class="header__n-m-l-login">Đăng nhập</a>\
                    <a href="' + dot_str + './html/register.html" class="header__n-m-l-reg">Đăng ký</a>\
                </div>\
                <div class="header__n-m-right">\
                    <a href="' + dot_str + './" class="header__n-m-home">BUYOO Trang chủ</a>\
                    <!-- <a href="' + dot_str + './html/buyflowIntro.html" class="header__n-m-help">Mua hàng bằng cách nào</a> -->\
                    <!-- <a href="' + dot_str + './html/buyIntro.html" class="header__n-m-help">Trung tâm hỗ trợ</a> -->\
                    <!-- <a href="' + dot_str + './html/paystep.html" class="header__n-m-help">Cách thanh toán và thanh toán nợ</a> -->\
                </div>\
            </div>\
        </div>\
        <div class="header__content">\
            <div class="header__content-main">\
                <div class="header__c-m-logo">\
                    <a href="' + dot_str + './" class="header__c-m-l-img" style="background-image: url(' + dot_str + './img/LOGO2.jpg);"></a>\
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

  $('#header').html(html_str);

  function set_avatar() {
    var username = null;

    username = localStorage.getItem('username');
    if (!username) username = localStorage.getItem('msisdn');
    $('#userMsisdn').html(center_char_encrypt(username, localStorage.getItem('username')));

    F._userViewDetailInfo({}, function(ret) {
      if (ret.data.headimage) {
        $('.userLogin-info__top-face')
          .eq(0)
          .css('background-image', 'url(' + ret.data.headimage + ')');
      }
    });

    $('.header__nav-main').addClass('header__nav-main_login');
  }

  function set_cart_num(num) {
    $('.header__c-m-c-number').html(num);
    if (num > 0) {
      $('.header__c-m-c-icon').css('background-image', 'url("' + dot_str + './img/89247239874.png")');
    } else {
      $('.header__c-m-c-icon').css('background-image', 'url("' + dot_str + './img/2389463949327.png")');
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
    localStorage.getItem('cart') || localStorage.setItem('cart', '[]');
    var cart = JSON.parse(localStorage.getItem('cart'));

    set_cart_num(calc_num(cart));
  }

  F._checkValidLogin();
  if (localStorage.getItem('funId')) {
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
                        <a href="' + dot_str + './html/paystep.html" target="_blank" class="footer__b2-m-r2-m-item col-xs-24">Cách thanh toán và thanh toán nợ</a>\
                        </ul>\
                </div>\
                <div class="footer__b2-m-row3">\
                    <div class="footer__b2-m-r3-title col-xs-24">Phương thức thanh toán</div>\
                    <ul class="footer__b2-m-r3-main col-xs-24">\
                        <li class="footer__b2-m-r3-m-item col-xs-24">\
                            <img src="' + dot_str + './img/230948342309.png" alt="" class="footer__b2-m-r3-m-i-img">\
                            <img src="' + dot_str + './img/pay_napas.png" alt="" class="footer__b2-m-r3-m-i-img">\
                            <img src="' + dot_str + './img/d9824394239.png" alt="" class="footer__b2-m-r3-m-i-img">\
                        </li>\
                    </ul>\
                </div>\
                <div class="footer__b2-m-row5">\
                    <div class="footer__b2-m-r5-title col-xs-24">TẢI APP BUYOO</div>\
                    <ul class="footer__b2-m-r5-main col-xs-24">\
                        <li class="footer__b2-m-r5-m-item col-xs-24">\
                            <a href="' + dot_str + './html/downloadApp.html?type=android" class="footer__b2-m-r5-m-i-img" target="_blank" style="background-image: url(' + dot_str + './img/o23874238947.png);"></a>\
                            <!-- <img src="' + dot_str + './img/o23874238947.png" alt="" class="footer__b2-m-r5-m-i-img"> -->\
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
                    <div class="footer__b2-m-r6-left col-xs-7">Copyright &copy; ' + new Date().getFullYear() + ' Buyoo. All Rights Reserved</div>\
                    <div class="footer__b2-m-r6-middle col-xs-9">Địa chỉ: 5 Floor, 345 Kim Mã, Ngọc Khánh, Ba Đình, Hà Nội, Viet Nam</div>\
                    <div class="footer__b2-m-r6-right col-xs-7">\
                        Liên hệ chăm sóc khách hàng: <span class="footer__b2-m-r6-r-tel">1900 555506</span>\
                    </div>\
                </div>\
            </div>\
        </div>';

  $('#footer').html(html_str);
}

function openforapp_add() {
  var appVersion = window.navigator.appVersion;

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

  if (F._isPhoneExpr.test(appVersion)) {
    $('body').prepend(html_str);
    $('.openforapp').css('width', F._winWidth + 'px');
    $('.openforapp__left-close').on('click', function() {
      $('.openforapp').remove();
    });
    $('.openforapp__right').on('click', function() {
      var url_str = '';
      var parse = F._hrefUtils.parse();
      if (parse.path.slice(-12, -1) === 'details.htm') {
        url_str = 'buyoovn://buyoo.vn/details.html?typeId=' + parse.query.typeId + '&brandId=' + parse.query.brandId + '&id=' + parse.query.id + '';
      } else {
        url_str = 'buyoovn://buyoo.vn/';
      }
      // if (isIOS()) {
      //     url_str = F._app_store;
      // } else {
      //     url_str = F._google_store;
      // }
      window.location.href = url_str;

      setTimeout(function() {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.store.creditstore';
      }, 1000);
    });
  }
}

F._is_mobile = function() {
  var appVersion = window.navigator.appVersion;
  return /Android|iPhone|iPad/.test(appVersion);
};

F._gotoFind = function() {
  var findcontent = $('#findIpt').val();
  if (findcontent != '') {
    window.location.href = is_dot_for_index() + './html/search.html?findcontent=' + findcontent;
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

  $('body').append(html_str);

  $('.order-cancel__m-t-b-r2-item').on('click', function() {
    var self = $(this);
    $('.order-cancel__m-t-b-r2-item').removeClass('order-cancel__m-t-b-r2-item_active');
    self.addClass('order-cancel__m-t-b-r2-item_active');
  });

  $('.order-cancel__m-t-b-r3-m-l-text').on('click', function() {
    $('#order-cancel').remove();
  });

  $('.order-cancel__m-t-r-close').on('click', function() {
    $('#order-cancel').remove();
  });

  $('.order-cancel__m-t-b-r3-m-r-text').on('click', function() {
    var result = '';
    $('.order-cancel__m-t-b-r2-item').each(function() {
      var self = $(this);
      if (self.hasClass('order-cancel__m-t-b-r2-item_active')) {
        result = self.data('code');
      }
    });
    callback(result);
  });
};

// 加密中间字符
function center_char_encrypt(str, username) {
  var i;
  var result = '';
  function is_phoneNum(str) {
    str = parseInt(str, 10);
    return str === str;
  }

  if (!username) {
    if (str.length > 0) {
      for (i = 0; i < str.length; i++) {
        if (i < 3 || i >= str.length - 4) {
          result += str[i];
        } else {
          result += '*';
        }
      }
    }
  } else {
    var array = str.split(' ');
    var length = Math.ceil(array.length / 2);
    var index;
    for (index = 0; index < array.length; index++) {
      if (index < length) {
        result += '*';
      } else {
        result += array[index];
      }
    }
  }

  return result;
}

F._setUrl = function(key, value) {
  function joint(data) {
    var str = '';
    for (i in data) {
      str += '&' + i + '=' + data[i];
    }
    return str.slice(1);
  }

  var parse = F._hrefUtils.parse();
  parse.query = parse.query || {};
  parse.query[key] = value;
  var url = '/' + parse.path + '?' + joint(parse.query);

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
  if (parse.path.slice(-5, -1) === '.htm') {
    if (parse.path.slice(-10, -1) === 'index.htm') {
      result = true;
    }
  } else {
    result = true;
  }
  return result;
}

function is_dot_for_index() {
  return is_index() ? '' : '.';
}

// 打开商品详情
function gotoDetails(typeId, brandId, id, discount, orgPrice) {
  discount = 100 - parseInt(discount) || '';
  orgPrice = orgPrice || '';
  id = id || '';

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

  if (typeId != '' && brandId != '') {
    // window.open("./html/details.html?typeId=" + typeId + "&brandId=" + brandId);
    window.location.href = is_dot_for_index() + './html/details.html?typeId=' + typeId + '&brandId=' + brandId + '&id=' + id;
  } else {
    window.location.href = '';
  }
}

/*主页退出*/
function userQuit() {
  if (confirm('Xác nhận thoát')) {
    localStorage.clear();
    window.location.href = '';
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
        if (str[i] === ' ') {
          return str.slice(i + 1, -1).toLowerCase();
        }
      }
      return str;
    }

    for (i in params) {
      if (params.hasOwnProperty(i)) {
        if (def_params[i] !== undefined && type(params[i]) === 'object') {
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
        F.vue.verify_text = _time + ' s';
      } else {
        $(def_params.target).html(_time + ' s');
      }
      _time -= 1;
      setTimeout(function() {
        countDownFunc(_time);
      }, 1000);
    } else {
      if (def_params.isVue) {
        F.vue.verify_text = 'gửi lại';
      } else {
        $(def_params.target).html('gửi lại');
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
  if (!localStorage.getItem('funId')) {
    window.location.href = 'login.html';
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
  price = price === price ? price + '' : '';
  separator = separator || ',';
  interval = interval || 3;
  var i;
  var result = '';
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
  url += '?';
  var i;
  var params_str = '';
  for (i in params) {
    params_str += '&' + i + '=' + params[i];
  }
  url += params_str.slice(1);
  return url;
};

F._url_join = function(url, params) {
  var i;
  url += '?';
  var params_str = '';
  for (i in params) {
    params_str += '&' + i + '=' + params[i];
  }
  url += params_str.slice(1);
  return url;
};

// 提示框类
F._confirm = function(title, text, type, button) {
  this.title = title || '';
  this.text = text || '';

  this.new_date = +new Date();
  this.new_date_plus = this.new_date + 100 + '';
  this.new_date += '';
  this.random_id = this.new_date.slice(8, -1);
  this.mask_id = this.new_date.slice(2, -2);
  this.mask_index = '1' + this.new_date.slice(2, -2);
  this.confirm_index = '1' + this.new_date_plus.slice(2, -2);
  this.button0_text = '';
  this.button1_text = '';
  this.func0 = function() {};
  this.func1 = function() {};
  this.button_left_display = 'inline-block';
  this.button_right_display = 'inline-block';

  this.background_image_tips = F._image_tips;
  this.background_image_error = F._image_error;
  this.background_image_success = F._image_success;
  this.background_image_url = '';

  if (button.length === 1) {
    this.button_left_display = 'none';
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
    $('#mask' + random_id + '').remove();
    $('#confirm' + random_id + '').remove();
  }

  switch (type) {
    case 'error':
      this.background_image_url = this.background_image_error;
      break;

    case 'success':
      this.background_image_url = this.background_image_success;
      break;

    case 'tips':
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
                    <span class="confirm__b-m-b-o-right" id="item-right' + this.random_id + '" style="display:' + this.button_right_display + '">' + this.button1_text + '</span>\
                </div>\
            </div>\
        </div>\
    </div>';

  $('body').append(this.mark_html);
  $('body').append(this.confirm_html);

  $('#item-left' + random_id + '').one('click', function() {
    func0();
    close();
  });
  $('#item-right' + random_id + '').one('click', function() {
    func1();
    close();
  });
  $('#close' + random_id + '').one('click', function() {
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
    if ($('.loading').length === 0) {
      $('body').append(loading_html);
    }
  }

  function hide() {
    $('#loading').remove();
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
  $('body').append(html);

  $('.pay-pwd__b-r1-r-input').focus();

  function submit() {
    var input_val = $('.pay-pwd__b-r1-r-input').val();
    if (input_val.length !== 6) {
      $('.pay-pwd__b-r4-text').show();
      return false;
    } else {
      $('.pay-pwd__b-r4-text').hide();
    }
    callback(input_val);
  }

  $('.pay-pwd__t-r-close').one('click', function() {
    var self = $(this);
    $('#pay-pwd_wrap').remove();
  });

  $('body').keydown(function(e) {
    var curKey = e.which;
    if (curKey == '13') {
      //keyCode=13是回车键
      submit();
    }
  });

  // 忘记密码
  $('.pay-pwd__b-r2-text').on('click', function() {
    window.open('./back_id.html?phoneNum=' + F.msisdn + '&from=payPwd');
  });

  // 提交
  $('.pay-pwd__b-r3-button').on('click', function() {
    submit();
  });
};

F._baseinfo = function(data, userInfo) {
  function get_birthday(val) {
    var result = '';

    var nD = new Date(val);
    var year = nD.getFullYear();
    var month = nD.getMonth() + 1;
    var date = nD.getDate();

    month < 10 && (month = '0' + month);
    date < 10 && (date = '0' + date);

    result = year + '-' + month + '-' + date;

    return result;
  }

  var username = userInfo.username || '';
  var sex = userInfo.sex === '1' ? 'Nam' : 'Nữ';
  var identification = userInfo.identification || '';
  var address = userInfo.address || '';
  var email = userInfo.email || '';
  var collegename = userInfo.collegename || '';
  var collegeaddr = userInfo.collegeaddr || '';
  var department = userInfo.department || '';
  var specialty = userInfo.specialty || '';
  var degree = userInfo.degree || '';
  var birthday = get_birthday(userInfo.birthday);
  var admissiontime = userInfo.admissiontime ? userInfo.admissiontime.slice(0, 7) : '';
  var graduationtime = userInfo.graduationtime ? userInfo.graduationtime.slice(0, 7) : '';

  var get_birth_day = F._get_birth_day(userInfo.birthday);

  var headimage = userInfo.headimage || '';

  var connectusername = '';
  var connectusermsisdn = '';
  var connectuserrelation = '';
  var connectuseridentification = '';
  var collegename__list = '';
  var contact_order;
  var connect_json = {
    connectusername1: userInfo.connectusername1 || '',
    connectusermsisdn1: userInfo.connectusermsisdn1 || '',
    connectuserrelation1: userInfo.connectuserrelation1 || '',
    connectuseridentification1: userInfo.connectuseridentification1 || '',

    connectusername2: userInfo.connectusername2 || '',
    connectusermsisdn2: userInfo.connectusermsisdn2 || '',
    connectuserrelation2: userInfo.connectuserrelation2 || '',
    connectuseridentification2: userInfo.connectuseridentification2 || '',

    connectusername3: userInfo.connectusername3 || '',
    connectusermsisdn3: userInfo.connectusermsisdn3 || '',
    connectuserrelation3: userInfo.connectuserrelation3 || '',
    connectuseridentification3: userInfo.connectuseridentification3 || ''
  };

  var day_options_produce = F._day_options_produce_htmlStr();
  var month_options_produce = F._month_options_produce_htmlStr();
  var year_options_produce = F._year_options_produce_htmlStr();

  var admissiontime_year = admissiontime.slice(0, 4);
  var admissiontime_month = admissiontime.slice(5, 7);

  var admissiontime_year = admissiontime.slice(0, 4);
  var admissiontime_month = admissiontime.slice(5, 7);

  var graduationtime_year = graduationtime.slice(0, 4);
  var graduationtime_month = graduationtime.slice(5, 7);

  var school_id_name_json = {};

  function init(data) {
    var i;
    var collegename_html = '';

    for (i = 0; i < data.length; i++) {
      collegename_html += '<li class="actionsheet__list-item js_collegename" data-collegename="' + data[i].id + '" data-staging="' + data[i].staging + '">' + data[i].name + '</li>';
      school_id_name_json[data[i].id] = data[i].name;
      // if (!collegename) collegename = data[i].id; // 默认值
    }
    // collegename = school_id_name_json[collegename];
    collegename__list = collegename_html;
  }

  init(data);

  var school_name = school_id_name_json[collegename] || '';

  var alert__baseinfo_main_height = document.documentElement.clientHeight * 0.924;

  var baseinfo_html = '\
    <div class="alert__baseinfo" style="display: block;" id="alert__baseinfo">\
        <div class="alert__baseinfo-main" style="height: ' + alert__baseinfo_main_height + 'px">\
            <div class="alert__b-m-title col-xs-24">\
                <span class="alert__b-m-t-text">Điền thông tin cá nhân</span>\
                <span class="alert__b-m-t-close" id="baseinfo_hide"></span>\
            </div>\
            <div class="alert__b-m-content col-xs-24">\
                <div class="alert__b-m-body col-xs-24">\
                    <div class="alert__b-m-b-row1 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Họ tên <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <input type="text" class="alert__b-m-b-r1-r-input" placeholder="Vui lòng nhập Họ tên" id="MO__username" value="' + username + '">\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row2 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Giới tính <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r2-right col-xs-16">\
                            <div class="actionsheet actionsheet-row2">\
                                <span class="actionsheet__left js_sex" id="MO__sex">' + sex + '</span>\
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
                    <div class="alert__b-m-b-row11 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Ngày Sinh <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r2-right col-xs-16">\
                            <div class="actionsheet alert__b-m-b-r11-birthday">\
                                <select name="" class="alert__b-m-b-r11-b-select" id="birthday-day">\
                                    <option value="">Ngày</option>' + day_options_produce + '\
                                </select>\
                                <select name="" class="alert__b-m-b-r11-b-select" id="birthday-month">\
                                    <option value="">Tháng</option>' + month_options_produce + '\
                                </select>\
                                <select name="" class="alert__b-m-b-r11-b-select" id="birthday-year">\
                                    <option value="">Năm</option>' + year_options_produce + '\
                                </select>\
                                <!-- <span class="actionsheet__left"><input type="date" id="MO__birthday" value="' + birthday + '"></span> -->\
                            </div>\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row3 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Số chứng minh thư <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <input type="text" class="alert__b-m-b-r1-r-input" placeholder="Vui lòng nhập Số chứng minh thư" id="MO__identification" ' + (identification ? 'disabled' : '') + ' value="' + identification + '" oninput="/^[0-9]*$/.test(this.value) ? this.setAttribute(\'data-on-val\', this.value) : this.value = this.getAttribute(\'data-on-val\');" data-on-val="">\
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
                                <textarea class="alert__b-m-b-r4-b-textarea" placeholder="Vui lòng bổ sung địa chỉ cụ thể, ví dụ như tên đường, số nhà,số tầng và số phòng" id="MO__address">' + address + '</textarea>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row5 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Địa chỉ thư điện tử <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <input type="email" class="alert__b-m-b-r1-r-input" placeholder="Vui lòng nhập Địa chỉ thư điện tử" id="MO__email" value="' + email + '">\
                        </div>\
                    </div>\
                </div>\
                <div class="alert__b-m-body col-xs-24">\
                    <div class="alert__b-m-b-row6 col-xs-24 ' + (connect_json.connectusername1 ? 'alert__b-m-b-row6_active' : '') + '">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Người liên lạc 1 <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <!-- <input type="text" class="alert__b-m-b-r1-r-input" placeholder="" id="connectusername1" value="' + (connect_json.connectusername1 ? connect_json.connectusername1 : '') + '"> -->\
                            <span class="alert__b-m-b-r1-r-input js_contact_show" data-contact="1" id="connectusername1">' + (connect_json.connectusername1 ? connect_json.connectusername1 : '') + '</span>\
                            <span class="alert__b-m-b-r1-r-add js_contact_show" data-contact="1">Nhấp để thêm người liên lạc</span>\
                            <span class="alert__b-m-b-r1-r-modify js_contact_show" data-contact="1">Sửa ></span>\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row6 col-xs-24 ' + (connect_json.connectusername2 ? 'alert__b-m-b-row6_active' : '') + '">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Người liên lạc 2 <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <!-- <input type="text" class="alert__b-m-b-r1-r-input" placeholder="" id="connectusername2" value="' + (connect_json.connectusername2 ? connect_json.connectusername2 : '') + '"> -->\
                            <span class="alert__b-m-b-r1-r-input js_contact_show" data-contact="2" id="connectusername2">' + (connect_json.connectusername2 ? connect_json.connectusername2 : '') + '</span>\
                            <span class="alert__b-m-b-r1-r-add js_contact_show" data-contact="2">Nhấp để thêm người liên lạc</span>\
                            <span class="alert__b-m-b-r1-r-modify js_contact_show" data-contact="2">Sửa ></span>\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row6 col-xs-24 ' + (connect_json.connectusername3 ? 'alert__b-m-b-row6_active' : '') + '">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Người liên lạc 3 <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <!-- <input type="text" class="alert__b-m-b-r1-r-input" placeholder="" id="connectusername3" value="' + (connect_json.connectusername3 ? connect_json.connectusername3 : '') + '"> -->\
                            <span class="alert__b-m-b-r1-r-input js_contact_show" data-contact="3" id="connectusername3">' + (connect_json.connectusername3 ? connect_json.connectusername3 : '') + '</span>\
                            <span class="alert__b-m-b-r1-r-add js_contact_show" data-contact="3">Nhấp để thêm người liên lạc</span>\
                            <span class="alert__b-m-b-r1-r-modify js_contact_show" data-contact="3">Sửa ></span>\
                        </div>\
                    </div>\
                </div>\
                <div class="alert__b-m-body col-xs-24">\
                    <div class="alert__b-m-b-row7 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Đang học trường <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r2-right col-xs-16">\
                            <div class="actionsheet actionsheet-collegename">\
                                <span class="actionsheet__left js_collegename" data-collegename="" id="MO__collegename">' + school_name + '</span>\
                                <span class="actionsheet__right js_collegename" data-collegename="">\
                                    <span class="actionsheet__right-arrow"></span>\
                                </span>\
                                <div class="actionsheet__list">' + collegename__list + '</div>\
                            </div>\
                        </div>\
                        <div class="alert__b-m-b-row33 col-xs-24" id="alert__b-m-b-row33">\
                            * Bạn học thân mến, tạm thời chúng tôi chỉ thực hiện thanh toán trả góp tại những trường đại học có trong danh sách, những trường đại học không thể chọn được vì nhân lực công ty chúng tôi có hạn nên tạm thời chưa thể thanh toán, nhưng bạn có thể lựa chọn thanh toán toàn bộ. Nếu có thắc mắc gì, xin hãy để lại lời nhắn trên facebook. Cám ơn sự ủng hộ của bạn.\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row7 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Địa chỉ trường <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <input type="text" class="alert__b-m-b-r1-r-input" placeholder="Vui lòng nhập Địa chỉ trường" id="MO__collegeaddr" value="' + collegeaddr + '">\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row7 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Khoa <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <input type="text" class="alert__b-m-b-r1-r-input" placeholder="Vui lòng nhập Khoa" id="MO__department" value="' + department + '">\
                        </div>\
                    </div>\
                    <div class="alert__b-m-b-row7 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Chuyên ngành <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r1-right col-xs-16">\
                            <input type="text" class="alert__b-m-b-r1-r-input" placeholder="Vui lòng nhập Chuyên ngành" id="MO__specialty" value="' + specialty + '">\
                        </div>\
                    </div>\
                    <!-- <div class="alert__b-m-b-row8 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Học vị <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r2-right col-xs-16">\
                            <div class="actionsheet actionsheet-degree">\
                                <span class="actionsheet__left js_degree" data-degree="" id="MO__degree">' + degree + '</span>\
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
                    </div> -->\
                    <div class="alert__b-m-b-row9 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Khoảng thời gian học <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r2-right col-xs-16">\
                            <select name="" class="alert__b-m-b-r9-select" id="sctime-ac-m" style="color: #333;">\
                                <option value="">Tháng</option>' + month_options_produce + '\
                            </select>\
                            <select name="" class="alert__b-m-b-r9-select" id="sctime-ac" style="color: #333;">\
                                <option value="">Năm</option>' + year_options_produce + '\
                            </select>\
                            <span style="vertical-align: middle">Đến</span>\
                            <select name="" class="alert__b-m-b-r9-select" id="sctime-ov-m" style="color: #333;">\
                                <option value="">Tháng</option>' + month_options_produce + '\
                            </select>\
                            <select name="" class="alert__b-m-b-r9-select" id="sctime-ov" style="color: #333;">\
                                <option value="">Năm</option>' + F._year_options_produce_htmlStr(5) + '\
                            </select>\
                        </div>\
                        <!-- <div class="alert__b-m-b-row10 col-xs-24" style="padding-top: 5px;">* Nếu đang đi học thì không cần điền thời gian tốt nghiệp</div> -->\
                    </div>\
                </div>\
                <div class="alert__b-m-footer col-xs-24">\
                    <span class="alert__b-m-f-button" id="submit_baseinfo">Xác nhận thông tin</span>\
                </div>\
            </div>\
        </div>\
    </div>';

  // 选择性别
  function sex_select(val) {
    if (val) {
      sex = val;
    }

    var actionsheet_handle = $('.actionsheet-row2');
    if (actionsheet_handle.hasClass('actionsheet_active')) {
      actionsheet_handle.removeClass('actionsheet_active');
    } else {
      actionsheet_handle.addClass('actionsheet_active');
    }
    $('#MO__sex').html(val);
  }

  // 选择关系
  function relation_select(val) {
    if (val) {
      connectusernamen = val;
      $('#input_relation').html(val);
    }

    var actionsheet_handle = $('.actionsheet-relation');
    if (actionsheet_handle.hasClass('actionsheet_active')) {
      actionsheet_handle.removeClass('actionsheet_active');
    } else {
      actionsheet_handle.addClass('actionsheet_active');
    }
  }

  // 选择学历
  function degree_select(val) {
    if (val) {
      degree = val;
      $('#MO__degree').html(val);
    }

    var actionsheet_handle = $('.actionsheet-degree');
    if (actionsheet_handle.hasClass('actionsheet_active')) {
      actionsheet_handle.removeClass('actionsheet_active');
    } else {
      actionsheet_handle.addClass('actionsheet_active');
    }
  }

  // 选择学校
  function collegename_select(val, staging) {
    F._run_accordionMenu(jQuery, data, function(ret) {
      if (ret.is_support) {
        $('#MO__collegename').html(ret.name);
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
    contact_order = order + '';

    var input_username = '';
    var input_msisdn = '';
    var input_relation = '';
    var input_identification = '';

    var input_identification_display = contact_order === '1' ? 'inline-block' : 'none';
    var relation_display = contact_order === '1' ? 'none' : 'block';
    var parent_display = contact_order !== '1' ? 'none' : 'block';

    function submit_alert__contact(username, msisdn, relation, identification) {
      identification = identification || '';

      if (!username.length) {
        alert('Vui lòng nhập Họ tên');
        return false;
      }

      if (username.split(' ').length < 2) {
        alert('Họ tên sai');
        return false;
      }

      if (!msisdn.length) {
        alert('Vui lòng nhập Số điện thoại');
        return false;
      }

      if (!relation.length) {
        alert('Vui lòng chọn mối quan hệ');
        return false;
      }

      // 身份证选填
      // if (!identification.length && contact_order === "1") {
      //     alert("Bắt buộc phải cài đặt số chứng minh thư của người liên hệ đầu tiên");
      //     return false;
      // }

      connect_json['connectusername' + contact_order] = username;
      connect_json['connectusermsisdn' + contact_order] = msisdn;
      connect_json['connectuserrelation' + contact_order] = relation;
      connect_json['connectuseridentification' + contact_order] = identification;

      $('#connectusername' + contact_order).html(username);
      $('.alert__b-m-b-row6')
        .eq(+contact_order - 1)
        .addClass('alert__b-m-b-row6_active');

      alert__contact_hide();
    }

    if (connect_json['connectusername' + contact_order]) {
      input_username = connect_json['connectusername' + contact_order];
      input_msisdn = connect_json['connectusermsisdn' + contact_order];
      input_relation = connect_json['connectuserrelation' + contact_order];
      input_identification = connect_json['connectuseridentification' + contact_order];
    } else {
      input_username = '';
      input_msisdn = '';
      input_relation = '';
      input_identification = '';
    }

    var contact_html = '\
        <div class="alert__contact" style="display: block;" id="alert__contact">\
            <div class="alert__contact-main">\
                <div class="alert__b-m-title col-xs-24">\
                    <span class="alert__b-m-t-text alert__b-m-t-text_confirm">Người liên lạc ' + contact_order + '</span>\
                    <span class="alert__b-m-t-close" id="alert__contact_hide"></span>\
                </div>\
                <div class="alert__contact-body col-xs-24">\
                    <div class="alert__c-b-row3 col-xs-24">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Quan hệ <span class="alert__b-m-b-r1-l-requery">*</span></div>\
                        <div class="alert__b-m-b-r2-right col-xs-11">\
                            <div class="actionsheet actionsheet-relation">\
                                <span class="actionsheet__left js_relation" data-relation="" id="input_relation">' + input_relation + '</span>\
                                <span class="actionsheet__right js_relation" data-relation="">\
                                    <span class="actionsheet__right-arrow"></span>\
                                </span>\
                                <div class="actionsheet__list">\
                                    <li class="actionsheet__list-item js_relation" style="display:' + parent_display + ';" data-relation="Bố">Bố</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + parent_display + ';" data-relation="Mẹ">Mẹ</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Bạn trai / bạn gái">Bạn trai / bạn gái</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Bạn cùng phòng">Bạn cùng phòng</li>\
                                    <li class="actionsheet__list-item js_relation" style="display:' + relation_display + ';" data-relation="Bạn học">Bạn học</li>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
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
                    <div class="alert__c-b-row4 col-xs-24" style="display:' + input_identification_display + ';">\
                        <div class="alert__b-m-b-r1-left col-xs-8">Số chứng minh thư <span class="alert__b-m-b-r1-l-requery" style="display:' + input_identification_display + ';"></span></div>\
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

    $('body').append('<div class="mask-contact" style="display: block;" id="mask-contact"></div>');
    $('body').append(contact_html);

    $('.js_relation').on('click', function() {
      var self = $(this);
      relation_select(self.data('relation'));
    });

    $('#alert__contact_hide').on('click', function() {
      alert__contact_hide();
    });

    $('#submit_alert__contact').on('click', function() {
      var self = $(this);
      var input_username = $('#input_username').val();
      var input_msisdn = $('#input_msisdn').val();
      var input_relation = $('#input_relation').html();
      var input_identification = $('#input_identification').val() || '';
      submit_alert__contact(input_username, input_msisdn, input_relation, input_identification);
    });
  }

  function alert__contact_hide() {
    $('#alert__contact').remove();
    $('#mask-contact').remove();
  }

  var show = function() {
    $('body').append(baseinfo_html);
    $('body').append('<div class="baseinfo__mask" id="baseinfo__mask"></div>');

    $('#birthday-year').val(get_birth_day.year || '');
    $('#birthday-month').val(get_birth_day.month || '');
    $('#birthday-day').val(get_birth_day.date || '');

    $('#sctime-ov-m').val(graduationtime_month);
    $('#sctime-ov').val(graduationtime_year);

    $('#sctime-ac-m').val(admissiontime_month);
    $('#sctime-ac').val(admissiontime_year);

    // if (F._edit_support_school(collegename, data)) {
    //     $("#alert__b-m-b-row33").hide();
    // } else {
    //     $("#alert__b-m-b-row33").show();
    // }

    $('.js_sex').on('click', function() {
      var self = $(this);
      sex_select(self.data('sex'));
    });

    $('.js_degree').on('click', function() {
      var self = $(this);
      degree_select(self.data('degree'));
    });

    $('.js_contact_show').on('click', function() {
      var self = $(this);
      alert__contact_show(self.data('contact'));
    });

    $('.js_collegename').on('click', function() {
      var self = $(this);
      collegename_select(self.data('collegename'), self.data('staging'));
    });

    $('#baseinfo_hide').on('click', function() {
      var self = $(this);
      hide();
    });
  };

  var hide = function() {
    $('#alert__baseinfo').remove();
    $('#baseinfo__mask').remove();
  };

  var submit = function(callback) {
    function get_admissiontime() {
      var result = '';
      var admissiontime_month = $('#sctime-ac-m').val();
      var admissiontime_year = $('#sctime-ac').val();
      if (admissiontime_month && admissiontime_year) {
        result = admissiontime_year + '-' + admissiontime_month;
      }
      return result;
    }

    function get_graduationtime() {
      var result = '';
      var graduationtime_month = $('#sctime-ov-m').val();
      var graduationtime_year = $('#sctime-ov').val();
      if (graduationtime_month && graduationtime_year) {
        result = graduationtime_year + '-' + graduationtime_month;
      }
      return result;
    }

    function get_birthday() {
      var result = '';
      // 处理生日
      var birthdayDay = $('#birthday-day').val();
      var birthdayMonth = $('#birthday-month').val();
      var birthdayYear = $('#birthday-year').val();

      if (birthdayDay && birthdayMonth && birthdayYear) {
        result = birthdayYear + '-' + birthdayMonth + '-' + birthdayDay;
      }
      return result;
    }

    username = $('#MO__username').val();
    sex = sex;
    identification = $('#MO__identification').val();
    address = $('#MO__address').val();
    email = $('#MO__email').val();
    collegename = collegename + '';
    collegeaddr = $('#MO__collegeaddr').val();
    department = $('#MO__department').val();
    specialty = $('#MO__specialty').val();
    degree = degree;
    admissiontime = get_admissiontime();
    graduationtime = get_graduationtime();
    // admissiontime = $("#MO__admissiontime").val();
    // graduationtime = $("#MO__graduationtime").val();
    birthday = get_birthday();
    // birthday = $("#MO__birthday").val();
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
      alert('Vui lòng nhập Họ tên');
      return false;
    }

    if (username.split(' ').length < 2) {
      alert('Họ tên sai');
      return false;
    }

    if (!sex.length) {
      alert('Vui lòng nhập Giới tính');
      return false;
    }

    if (!identification.length) {
      alert('Vui lòng nhập Số chứng minh thư');
      return false;
    }

    if (!address.length) {
      alert('Vui lòng nhập Nơi ở');
      return false;
    }

    if (!email.length) {
      alert('Vui lòng nhập Địa chỉ thư điện tử');
      return false;
    }

    if (!/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(email)) {
      alert('Địa chỉ thư điện tử sai');
      return false;
    }

    // if (!(connect_json.connectuseridentification1 && connect_json.connectuseridentification1.length)) {
    //     alert("Vui lòng Người liên lạc 1");
    //     return false;
    // }

    if (!(connect_json.connectusername1 && connect_json.connectusername1.length)) {
      alert('Vui lòng Người liên lạc 1');
      return false;
    }

    if (!(connect_json.connectusermsisdn1 && connect_json.connectusermsisdn1.length)) {
      alert('Vui lòng Người liên lạc 1');
      return false;
    }

    if (!(connect_json.connectuserrelation1 && connect_json.connectuserrelation1.length)) {
      alert('Vui lòng Người liên lạc 1');
      return false;
    }

    if (!(connect_json.connectusername2 && connect_json.connectusername2.length)) {
      alert('Vui lòng Người liên lạc 2');
      return false;
    }

    if (!(connect_json.connectusermsisdn2 && connect_json.connectusermsisdn2.length)) {
      alert('Vui lòng Người liên lạc 2');
      return false;
    }

    if (!(connect_json.connectuserrelation2 && connect_json.connectuserrelation2.length)) {
      alert('Vui lòng Người liên lạc 2');
      return false;
    }

    if (!(connect_json.connectusername3 && connect_json.connectusername3.length)) {
      alert('Vui lòng Người liên lạc 3');
      return false;
    }

    if (!(connect_json.connectusermsisdn3 && connect_json.connectusermsisdn3.length)) {
      alert('Vui lòng Người liên lạc 3');
      return false;
    }

    if (!(connect_json.connectuserrelation3 && connect_json.connectuserrelation3.length)) {
      alert('Vui lòng Người liên lạc 3');
      return false;
    }

    if (!collegename.length) {
      alert('Vui lòng nhập Đang học trường');
      return false;
    }

    if (!collegeaddr.length) {
      alert('Vui lòng nhập Địa chỉ trường');
      return false;
    }

    if (!department.length) {
      alert('Vui lòng nhập Khoa');
      return false;
    }

    if (!specialty.length) {
      alert('Vui lòng nhập Chuyên ngành');
      return false;
    }

    // if (!degree.length) {
    //   alert('Vui lòng nhập Học vị');
    //   return false;
    // }

    if (!admissiontime.length) {
      alert('Vui lòng nhập Thời gian nhập học');
      return false;
    }

    if (!birthday.length) {
      alert('Vui lòng nhập Ngày Sinh');
      return false;
    }

    // if (!graduationtime.length) {
    //     alert('Vui lòng nhập Thời gian tốt nghiệp');
    //     return false;
    // }

    if (graduationtime) {
      if (parseInt(admissiontime.slice(0, 4)) >= parseInt(graduationtime.slice(0, 4))) {
        alert('Khoảng thời gian học sai');
        return false;
      }
      admissiontime = admissiontime + '-11 11:11:11';
      graduationtime = graduationtime + '-11 11:11:11';
    } else {
      admissiontime = admissiontime + '-11 11:11:11';
    }

    callback({
      username: username,
      sex: sex === 'Nam' ? '1' : '2',
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
  var reStr = ''; //返回值
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
    str = str + '000';
  }

  // 不为数字,转为数字
  if (typeof str !== 'number') {
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

  monthFormat < 10 && (monthFormat = '0' + monthFormat);
  dateFormat < 10 && (dateFormat = '0' + dateFormat);
  hourFormat < 10 && (hourFormat = '0' + hourFormat);
  minuteFormat < 10 && (minuteFormat = '0' + minuteFormat);
  secondFormat < 10 && (secondFormat = '0' + secondFormat);

  switch (model) {
    case 1:
      reStr = year + '-' + monthFormat + '-' + dateFormat;
      break;

    case 2:
      reStr = year + '-' + monthFormat + '-' + dateFormat + ' ' + hourFormat + ':' + minuteFormat;
      break;

    case 3:
      reStr = year + '-' + monthFormat + '-' + dateFormat + ' ' + hourFormat + ':' + minuteFormat + ':' + secondFormat;
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
            reStr = hourFormat + ':' + minuteFormat;
          } else if (dayDiff === 1) {
            // 昨天发的
            reStr = '昨天 ' + hourFormat + ':' + minuteFormat;
          } else if (dayDiff === 2) {
            //前天发的
            reStr = '前天 ' + hourFormat + ':' + minuteFormat;
          } else {
            reStr = month + '月' + date + '日 ' + hourFormat + ':' + minuteFormat;
          }
        } else {
          //不是这个月发的
          reStr = month + '月' + date + '日 ' + hourFormat + ':' + minuteFormat;
        }
      } else {
        // 非今年发的
        reStr = year + '年' + month + '月' + date + '日 ' + hourFormat + ':' + minuteFormat;
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
      year = (year + '*').slice(-3, -1);

      if (yearDiff === 0) {
        // 今年发的
        if (monthDiff === 0) {
          //这个月发的
          if (dayDiff === 0) {
            // 今天发的
            reStr = hourFormat + ':' + minuteFormat;
          } else if (dayDiff === 1) {
            // 昨天发的
            reStr = '昨天';
          } else if (dayDiff === 2) {
            //前天发的
            reStr = '前天';
          } else {
            reStr = month + '月' + date + '日';
          }
        } else {
          //不是这个月发的
          reStr = month + '月' + date + '日';
        }
      } else {
        // 非今年发的
        reStr = year + '/' + month + '/' + date + '/';
      }
      break;

    case 6:
      reStr = year + '.' + monthFormat + '.' + dateFormat;
      break;

    case 7:
      reStr = year + '/' + monthFormat + '/' + dateFormat;
      break;

    case 8:
      reStr = dateFormat + '/' + monthFormat + '/' + year;
      break;

    default:
      reStr = year + '-' + monthFormat + '-' + dateFormat + ' ' + hourFormat + ':' + minuteFormat;
      break;
  }

  return reStr;
};

// 3333333333333333

header_add();
footer_add();
openforapp_add();
