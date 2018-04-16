<a name="1.0.0"></a>
# [1.0.0](https://gitee.com/bingfurong/WebStore/compare/2.7.0-alpha.1...1.0.0) (2018-04-04)


### Bug Fixes

* 创建还款订单，totalAmount字段应该传当期账单金额，而不是商品总价 ([a8de7f8](https://gitee.com/bingfurong/WebStore/commits/a8de7f8))
* 商品详情页面，如果是虚拟商品则不能转跳到商品详情 ([81ccf54](https://gitee.com/bingfurong/WebStore/commits/81ccf54))
* 我的订单列表，如果是虚拟商品，点击商品则不转跳到详情 ([b078688](https://gitee.com/bingfurong/WebStore/commits/b078688))


### Features

* 把订单详情所需参数通过url传给支付成功页面 ([ec54948](https://gitee.com/bingfurong/WebStore/commits/ec54948))
* 支付成功页面，如果是虚拟商品，则转跳到商品详情 ([3bc27b5](https://gitee.com/bingfurong/WebStore/commits/3bc27b5))



<a name="2.7.0-alpha.1"></a>
# [2.7.0-alpha.1](https://gitee.com/bingfurong/WebStore/compare/v2.6.0...2.7.0-alpha.1) (2018-04-03)


### Bug Fixes

* 修复APP端，全款订单分期数却为12，导致的问题 ([b7d3897](https://gitee.com/bingfurong/WebStore/commits/b7d3897))
* 领券中心，没有优惠券时显示相应的文字 ([0e31108](https://gitee.com/bingfurong/WebStore/commits/0e31108))


### Features

* 完成充值功能，待进一步测试 ([6eb7a20](https://gitee.com/bingfurong/WebStore/commits/6eb7a20))
* 显示优惠金额 ([d793fdd](https://gitee.com/bingfurong/WebStore/commits/d793fdd))



<a name="2.6.0"></a>
# [2.6.0](https://gitee.com/bingfurong/WebStore/compare/v2.5.1-alpha...v2.6.0) (2018-03-29)


### Bug Fixes

* 修复购物车下单优惠金额计算错误问题 ([da2a38e](https://gitee.com/bingfurong/WebStore/commits/da2a38e))
* 修改为合适的标题 ([286c023](https://gitee.com/bingfurong/WebStore/commits/286c023))
* 多了个字母 ([2044780](https://gitee.com/bingfurong/WebStore/commits/2044780))
* **changes:** 修复全款下单任需完整信息验证问题 ([2db6ed8](https://gitee.com/bingfurong/WebStore/commits/2db6ed8))
* **changes:** 修复点击按钮无法返回首页问题 ([99daed1](https://gitee.com/bingfurong/WebStore/commits/99daed1))
* **changes:** 修复路径错误问题 ([e4db4f1](https://gitee.com/bingfurong/WebStore/commits/e4db4f1))
* **changes:** 添加一个账单状态 ([f7afe8f](https://gitee.com/bingfurong/WebStore/commits/f7afe8f))
* **index.html:** 二维码链接生成错误问题 ([af7d25a](https://gitee.com/bingfurong/WebStore/commits/af7d25a))
* **index.html:** 修改价格显示字段 ([1f1f86c](https://gitee.com/bingfurong/WebStore/commits/1f1f86c))
* **this:** 修复首页"支付引导"遮挡电话问题 ([5b59c4c](https://gitee.com/bingfurong/WebStore/commits/5b59c4c))


### Features

* 优惠券已完成初步测试 ([0013c38](https://gitee.com/bingfurong/WebStore/commits/0013c38))
* 使用优惠券功能完成80% ([53bbecc](https://gitee.com/bingfurong/WebStore/commits/53bbecc))
* 完成优惠券功能（初步测试通过） ([4b6cf20](https://gitee.com/bingfurong/WebStore/commits/4b6cf20))
* 添加团购帮助，替换翻译，更新版本号 ([0352266](https://gitee.com/bingfurong/WebStore/commits/0352266))
* 添加首付10%的选项 ([11ecc06](https://gitee.com/bingfurong/WebStore/commits/11ecc06))
* 网银支付测试页面 ([5ae0d18](https://gitee.com/bingfurong/WebStore/commits/5ae0d18))



<a name="2.5.1-alpha"></a>
## [2.5.1-alpha](https://gitee.com/bingfurong/WebStore/compare/v2.5.0...v2.5.1-alpha) (2018-02-03)


### Bug Fixes

* 修复下分期订单时未判断第二、三联系人的信息 ([1a0769b](https://gitee.com/bingfurong/WebStore/commits/1a0769b))
* 版权时间由写死改为写活(new Date()).getFullYear() ([4d8571a](https://gitee.com/bingfurong/WebStore/commits/4d8571a))
* **changes:** 修复购物车下单失败问题 ([1b3c8ab](https://gitee.com/bingfurong/WebStore/commits/1b3c8ab))
* **changes:** 修改翻译和状态码 ([8197ab0](https://gitee.com/bingfurong/WebStore/commits/8197ab0))
* **order.html:** 订单列表中，点击拼单的订单，转跳到错误页面 ([96dfb95](https://gitee.com/bingfurong/WebStore/commits/96dfb95))



<a name="2.5.0"></a>
# [2.5.0](https://gitee.com/bingfurong/WebStore/compare/v2.5.0-beta...v2.5.0) (2018-02-02)


### Bug Fixes

* **changs:** 未加入是否为全款判断，导致询问交易密码问题 ([5e10ddb](https://gitee.com/bingfurong/WebStore/commits/5e10ddb))



<a name="2.5.0-beta"></a>
# [2.5.0-beta](https://gitee.com/bingfurong/WebStore/compare/v2.5.0-alpha...v2.5.0-beta) (2018-02-01)


### Bug Fixes

* **changes:** 修复，未完善资料时，完善后。使用了旧接口下单 ([05f0aa5](https://gitee.com/bingfurong/WebStore/commits/05f0aa5))
* **changes:** 修复分期订单，每期金额显示错误问题 ([d6053fe](https://gitee.com/bingfurong/WebStore/commits/d6053fe))
* **evaluate:** 修复图片过大上传失败问题 ([151611a](https://gitee.com/bingfurong/WebStore/commits/151611a))



<a name="2.5.0-alpha"></a>
# [2.5.0-alpha](https://gitee.com/bingfurong/WebStore/compare/v2.4.2...v2.5.0-alpha) (2018-02-01)


### Features

* **changes:** 完成拼单，初步测试通过 ([029f1e3](https://gitee.com/bingfurong/WebStore/commits/029f1e3))
* **changes:** 完成新下单流程，通过初步测试 ([c74d2f9](https://gitee.com/bingfurong/WebStore/commits/c74d2f9))
* **changes:** 新流程（完成50%） ([83b21b9](https://gitee.com/bingfurong/WebStore/commits/83b21b9))



<a name="2.4.2"></a>
## [2.4.2](https://gitee.com/bingfurong/WebStore/compare/v2.4.1...v2.4.2) (2018-01-29)


### Features

* **changes:** 写完首页拼单页面(差一些边边角角) ([e832ec9](https://gitee.com/bingfurong/WebStore/commits/e832ec9))
* **changes:** 写活首页拼单功能 ([a3347d0](https://gitee.com/bingfurong/WebStore/commits/a3347d0))



<a name="2.4.1"></a>
## [2.4.1](https://gitee.com/bingfurong/WebStore/compare/v2.4.0...v2.4.1) (2018-01-23)


### Bug Fixes

* 点击底部导航，跳转到Google Play ([7e7f2a9](https://gitee.com/bingfurong/WebStore/commits/7e7f2a9))



<a name="2.4.0"></a>
# [2.4.0](https://gitee.com/bingfurong/WebStore/compare/v2.4.0-alpha...v2.4.0) (2018-01-22)


### Bug Fixes

* **changes:** 添加设备判断 ([066ca41](https://gitee.com/bingfurong/WebStore/commits/066ca41))


### Features

* 开启移动端打开APP提示 ([9095f47](https://gitee.com/bingfurong/WebStore/commits/9095f47))



<a name="2.4.0-alpha"></a>
# [2.4.0-alpha](https://gitee.com/bingfurong/WebStore/compare/v2.3.3...v2.4.0-alpha) (2018-01-19)


### Bug Fixes

* **changes:** 电脑端隐藏按钮 ([64f2d58](https://gitee.com/bingfurong/WebStore/commits/64f2d58))


### Features

* **changs:** 添加APP里JS调用Android关闭窗口功能 ([aba6fdf](https://gitee.com/bingfurong/WebStore/commits/aba6fdf))



<a name="2.3.3"></a>
## [2.3.3](https://gitee.com/bingfurong/WebStore/compare/v2.3.1...v2.3.3) (2018-01-19)



<a name="2.3.1"></a>
## [2.3.1](https://gitee.com/bingfurong/WebStore/compare/v2.3.0...v2.3.1) (2018-01-18)



<a name="2.3.0"></a>
# [2.3.0](https://gitee.com/bingfurong/WebStore/compare/v2.3.0-beta...v2.3.0) (2018-01-18)



<a name="2.3.0-beta"></a>
# [2.3.0-beta](https://gitee.com/bingfurong/WebStore/compare/v2.3.0-alpha...v2.3.0-beta) (2018-01-18)


### Bug Fixes

* 修复用户名为空无法保存问题 ([e2ea938](https://gitee.com/bingfurong/WebStore/commits/e2ea938))
* 修复用昵称为姓名时，*号显示不正确问题 ([f3d3819](https://gitee.com/bingfurong/WebStore/commits/f3d3819))
* 处理下架的情况 ([519eef1](https://gitee.com/bingfurong/WebStore/commits/519eef1))
* 添加真实姓名的正确性判断 ([96bc1a2](https://gitee.com/bingfurong/WebStore/commits/96bc1a2))
* **changes:** 在手机上显示过大 ([a7e164f](https://gitee.com/bingfurong/WebStore/commits/a7e164f))
* **changes:** 完善全选问题 ([d5660c4](https://gitee.com/bingfurong/WebStore/commits/d5660c4))
* **changes:** 购物车中下架商品能被选中，数量能修改问题 ([84a2bdb](https://gitee.com/bingfurong/WebStore/commits/84a2bdb))
* **order.html:** 时间本地化显示 ([9ab96d0](https://gitee.com/bingfurong/WebStore/commits/9ab96d0))
* **thispage:** 地址显示的兼容处理 ([9aa7007](https://gitee.com/bingfurong/WebStore/commits/9aa7007))


### Features

* **cart.html:** 购物车列表如有折扣，则显示折扣 ([b1c0371](https://gitee.com/bingfurong/WebStore/commits/b1c0371))



<a name="2.3.0-alpha"></a>
# [2.3.0-alpha](https://gitee.com/bingfurong/WebStore/compare/v2.2.0...v2.3.0-alpha) (2018-01-11)


### Bug Fixes

* **editaddress:** 编辑收货地址导致省市区信息丢失问题 ([b2178d7](https://gitee.com/bingfurong/WebStore/commits/b2178d7))



<a name="2.2.0"></a>
# [2.2.0](https://gitee.com/bingfurong/WebStore/compare/v2.1.2...v2.2.0) (2018-01-10)


### Bug Fixes

* **cart:** 修复注册后自动登录没有把本地购物车加入到该登录账目 ([79188c8](https://gitee.com/bingfurong/WebStore/commits/79188c8))



<a name="2.1.2"></a>
## [2.1.2](https://gitee.com/bingfurong/WebStore/compare/v2.1.1...v2.1.2) (2018-01-10)


### Bug Fixes

* **pay.html:** 修复没有填写父母身份证号码时，无法提交问题 ([77c2563](https://gitee.com/bingfurong/WebStore/commits/77c2563))



<a name="2.1.1"></a>
## [2.1.1](https://gitee.com/bingfurong/WebStore/compare/v2.1.0...v2.1.1) (2018-01-09)


### Bug Fixes

* 修复一个问题和调整联系人信息显示先后顺序 ([b32f192](https://gitee.com/bingfurong/WebStore/commits/b32f192))
* **addinfo:** 添加完联系人后，没有显示联系人名称 ([fb992bf](https://gitee.com/bingfurong/WebStore/commits/fb992bf))
* **address:** 修复点击添加地址，没有弹出表单问题 ([fadd04a](https://gitee.com/bingfurong/WebStore/commits/fadd04a))


### Features

* 添加友盟统计 ([95e2dc8](https://gitee.com/bingfurong/WebStore/commits/95e2dc8)), closes [#IH862](https://gitee.com/bingfurong/WebStore/issues/IH862)
* **$browser:** onUrlChange event (popstate/hashchange/polling) ([3b1611b](https://gitee.com/bingfurong/WebStore/commits/3b1611b))
* **address:** 修改省市区字段 ([e1cda5c](https://gitee.com/bingfurong/WebStore/commits/e1cda5c))
* **commit message:** 添加辅助编写commit message功能 ([4e1b369](https://gitee.com/bingfurong/WebStore/commits/4e1b369))
* **statistics:** 添加统计事件 ([da63322](https://gitee.com/bingfurong/WebStore/commits/da63322))


### BREAKING CHANGES

* **address:** 接口返回和提交的字段有变化

    Before:

      provincesName
      provincesCode
      districtsName
      districtsCode
      wardsName
      wardsCode

    After:

    + division1stName
    + division1stCode
      division2ndName
      division2ndCode
      division3rdName
      division3rdCode
      division4thName
      division4thCode
    + division5thName
    + division5thCode
    + division6thName
    + division6thCode



<a name="2.1.0"></a>
# [2.1.0](https://gitee.com/bingfurong/WebStore/compare/v2.0.6...v2.1.0) (2018-01-05)



<a name="2.0.6"></a>
## [2.0.6](https://gitee.com/bingfurong/WebStore/compare/v2.0.0...v2.0.6) (2018-01-05)



<a name="2.0.0"></a>
# [2.0.0](https://gitee.com/bingfurong/WebStore/compare/v1.0.0...v2.0.0) (2017-12-27)



<a name="1.0.0"></a>
# 1.0.0 (2017-12-20)



