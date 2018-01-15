<a name="1.0.0"></a>
# [1.0.0](https://gitee.com/bingfurong/WebStore/compare/v2.3.0-alpha...v1.0.0) (2018-01-15)


### Bug Fixes

* 修复用昵称为姓名时，*号显示不正确问题 ([f3d3819](https://gitee.com/bingfurong/WebStore/commits/f3d3819))
* 处理下架的情况 ([519eef1](https://gitee.com/bingfurong/WebStore/commits/519eef1))
* **thispage:** 地址显示的兼容处理 ([9aa7007](https://gitee.com/bingfurong/WebStore/commits/9aa7007))



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



