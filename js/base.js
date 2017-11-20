$(function() {
    //详情页
    //收藏
    $('#sc').click(function() {
        //ajax请求
        $.ajax({
            type: 'POST',
            url: '/index.php?r=product/add-pro/',
            data: {
                brandId: brandId
            },
            success: function(data) {
                if (data.status != 200) {
                    $('#messge').html(data.msg);
                    $('#messge').fadeToggle();
                    $('#messge').fadeToggle(1000);
                } else {
                    $('#messge').html(data.msg);
                    $('#messge').fadeToggle();
                    $('#messge').fadeToggle(1000);
                    $('#sc').text('Đã sưu tập');
                }
            },
            dataType: 'json'
        });
    });
    //弹出层
    /**
     ifDrag: 是否拖拽
     dragLimit: 拖拽限制范围
     */
    $('#popup').popup({
        ifDrag: false,
        dragLimit: false
    });
    //获取评论信息
    $("#pagelist li.ajax").click(function() {
        if ($(this).hasClass('on')) {
            return false;
        }
        $('#pagelist li.ajax').removeClass('on').addClass('page');
        $(this).addClass('on');
        var page = $(this).attr('data');
        //ajax请求
        $.ajax({
            type: 'POST',
            url: '/index.php?r=product/get-message/',
            data: {
                brandId: brandId,
                fun_id: fun_id,
                currentPage: page
            },
            success: function(data) {
                if (data.status == 200) {

                    $('#pageContent').html(data.list);
                }
            },
            dataType: 'json'
        });
    });
    //---购买
    $("#buyNow").click(function() {
        //获取数据
        var buy_num_now = parseInt($('.buy_num').val()); //数量
        var buy_num_price = parseFloat($('.jg').text()); //价格
        var total = buy_num_now * buy_num_price;
        var funid = 1;
        var totalAmount = parseFloat(total);
        var orgAmount = 0.00;
        var sfbl_num = parseInt($("#gu_sfbl").val());
        var payRate = parseFloat(sfbl_num / 100);
        var advance = parseFloat(totalAmount * payRate);
        var subject = $('#json_desc').text();
        var goodsId = $('#pid').val();
        var repaymentMonth = $('.fq span.on').attr('data');


        //ajax请求
        $.ajax({
            type: 'POST',
            url: '/index.php?r=product/create-order/',
            data: {
                funid: funid,
                totalAmount: totalAmount,
                orgAmount: orgAmount,
                advance: advance,
                payRate: payRate,
                repaymentMonth: repaymentMonth,
                subject: subject,
                goodsId: goodsId
            },
            success: function(data) {
                if (data.status == 1) {
                    location.reload();
                }
            },
            dataType: 'json'
        });

    });
    $('#nav_lan li').click(function() {
        var index = $(this).index();
        if (index != 4) {
            $('#nav_lan li').removeClass('on');
            $(this).addClass('on');
            $('#nav_detail .info_content').hide();
            $('#nav_detail .info_content:eq(' + index + ')').show();
        }
    });
    //***buynum
    $('.buy_jian').click(function() {
        var buy_num_now = parseInt($('.buy_num').val());
        var buy_num_kkc = parseInt($('.kkc').text());
        var new_num = buy_num_now - 1;
        if (new_num < 1) {
            new_num = 1
        }
        $('.buy_num').val(new_num);
        fqyw();
    });
    $('.buy_jia').click(function() {
        var buy_num_now = parseInt($('.buy_num').val());
        var buy_num_kkc = parseInt($('.kkc').text());
        var new_num = buy_num_now + 1;
        if (new_num > buy_num_kkc) {
            new_num = buy_num_kkc
        }
        $('.buy_num').val(new_num);
        fqyw();
    });
    $('.fq span').click(function() {
        $('.fq span').removeClass('on');
        $('.fq span').addClass('bb');
        $('.fq span:eq(0)').removeClass('bb');
        $(this).addClass('on');
        //业务
        fqyw();

    });
    $('#gu_sfbl').change(function() {
        fqyw();
    });

    function fqyw() {
        var buy_num_now = parseInt($('.buy_num').val());
        var buy_num_price = parseFloat($('.jg').text());
        //var fq_num = parseInt($(this).attr('data'));
        var fq_num = parseInt($('.fq span.on').attr('data'));
        var sfbl_num = parseInt($("#gu_sfbl").val());
        var total = buy_num_now * buy_num_price;

        total = total - total * (sfbl_num / 100);

        var yg = 0.00;
        if (fq_num == 0) {
            yg = 0.00
        } else {
            yg = total / fq_num;
        }
        yg = Math.floor(yg * 100) / 100
        $('.ygjg').text(yg);

        //tab显示
        var tabHtml = '<table class="table-bill"><tbody>';
        for (var i = 1; i <= fq_num; i++) {
            tabHtml += '<tr><td>' + i + 'Dàn dựng</td><td>' + yg + 'VND</td></tr>';
        }
        tabHtml += '</tbody></table>';

        $("#table-scroll").html(tabHtml);

    }
    $('.version .bbc span').click(function() {
        var q = $(this).parent('.bbc');

        q.find('span').removeClass('on');
        q.find('span').addClass('bb');
        $(this).addClass('on');

        //切换商品
        var dogoodPar = $('.version .bbc').find('span.on');
        var parS = '';
        dogoodPar.each(function(index, el) {
            parS += $(this).attr('data') + '-'


        });

        changeGoods(parS);
        fqyw();

    });

    //商品的切换函数
    function changeGoods(parS) {

        var newGoods = goodList[parS];
        if (typeof(newGoods) == "undefined") {
            //库存
            $('#json_kc').html(0);
            var subid = $('#json_submit a').attr('id');
            if (subid == 'buyNow') {
                $('#json_submit a').attr('id', 'nono');
            }
            $('#json_submit a').attr('style', 'background:#666666');
        } else {
            $('#json_submit a').attr('style', '');
            var subid2 = $('#json_submit a').attr('id');
            if (subid2 == 'nono') {
                $('#json_submit a').attr('id', 'buyNow');
            }
            //产品id
            $('#pid').val(newGoods['id']);
            //标题
            $('#navtitle,#json_name').html(newGoods['name']);
            //描述
            $('#json_desc').html(newGoods['desc']);
            //价格
            $('#json_jg').html(newGoods['price']);
            //库存
            $('#json_kc').html(newGoods['numbers']);
            //包装
            $('#json_packageList').html(newGoods['packageList']);
            //第一张图片 d_p
            $('#d_p').attr('src', newGoods['firstImg']);
            //图片导航 imgnav
            $('#imgnav').html(newGoods['navImg']);
        }
    }


    $(document).on("mouseover", "#imgnav img", function() {
        var imgUrl = $(this).attr('title');
        $('#imgnav img').removeClass('on');
        $(this).addClass('on');
        $('#d_p').attr('src', imgUrl);
    });

    /*$('#imgnav span').mouseover(function(){
		var imgUrl = $(this).attr('title');
        $('#imgnav span').removeClass('on');
		$(this).addClass('on');
        $('#d_p').attr('src',imgUrl);
	});*/
    //退出
    $("#logout").click(function() {
        $.ajax({
            type: 'POST',
            url: '/index.php?r=user/logout/',
            data: {},
            success: function(data) {
                if (data.status == 1) {
                    location.reload();
                }
            },
            dataType: 'json'
        });
    });
    //商品样式
    $(".sub_category_1").mouseover(function() {
        $(this).addClass('sub_category_1on');
    });
    $(".sub_category_1").mouseout(function() {
        $(this).removeClass('sub_category_1on');
    });
    //index banner 
    $(function() {
        $('#silder').imgSilder({
            s_width: '100%',
            s_height: 440,
            is_showTit: false,
            s_times: 10000,
            css_link: '/assets/css/index_img.css'
        });
    });
    //设置input边框样式
    $(".r_from input,#login_content input").focus(function() {
        /* Act on the event */
        $(this).addClass('on');
        var thisval = $(this).val();
        if (thisval == 'Số điện thoại' || thisval == 'Mật khẩu phải chứa ít nhất 6 ký tự bao gồm cả chữ và số' || thisval == 'Khác với mật khẩu đăng nhập' || thisval == 'Mật mã') {
            $(this).val('');
        }
        if (thisval == 'Mật khẩu phải chứa ít nhất 6 ký tự bao gồm cả chữ và số' || thisval == 'Khác với mật khẩu đăng nhập' || thisval == 'Mật mã') {
            $(this).attr('type', 'password');
        }
    });
    $(".r_from input").blur(function() {
        /* Act on the event */
        $(this).removeClass('on');
    });

    //注册提交判断
    $("#submit").click(function() {
        var tel = $('#tel').val();
        var telCode = $('#telCode').val();
        var pwd = $('#pwd').val();
        var pwd2 = $('#pwd2').val();
        var xy = $('input[name="xy"]').prop("checked");
        if (tel == 'Số điện thoại') {
            tel = '';
        }
        if (pwd == 'Mật khẩu phải chứa ít nhất 6 ký tự bao gồm cả chữ và số') {
            pwd = '';
        }
        if (pwd2 == 'Khác với mật khẩu đăng nhập') {
            pwd2 = '';
        }
        if (xy == false) {
            getMsg('Đồng ý với điều khoản của Buyoo', 1);
            return false;
            //$('#errormsg').append('Đồng ý với điều khoản của Buyoo');
        } else if (tel == '') {
            getMsg('Số điện thoại không được để trống', 1);
            $("#tel")[0].focus();
            $("#tel").addClass('error');
            return false;
        } else if (telCode == '') {
            getMsg('Mã xác minh qua điện thoại không được để trống', 1);
            $("#telCode")[0].focus();
            $("#telCode").addClass('error');
            return false;
        } else if (pwd == '' || pwd.length < 6 || pwd.length > 16) {

            $("#pwd")[0].focus();
            $("#pwd").addClass('error');
        } else if (pwd2 == '' || pwd.length < 6 || pwd.length > 16) {
            getMsg('Mật mã giao dịch không được để trống', 1);
            $("#pwd2")[0].focus();
            return false;
        } else if (pwd == pwd2) {
            getMsg('Mật mã giao dịch và mật mã đăng nhập không được giống nhau', 1);
            return false;
        }

    });
    //	//回车登录
    //  $("body").keydown(function(e) {
    //      var curKey = e.which;
    //      if (curKey == "13") {//keyCode=13是回车键
    //          $('#pay_submit').click();
    //      }
    //  });
    //  //登录判断
    //  $('#pay_submit').click(function(){
    //  	var tel = $('#tel').val();
    //  	var pwd = $('#pwd').val();
    //  	if(tel == 'Số điện thoại / 邮箱'){
    //			tel = '';
    //		}
    //		if(pwd == '密码'){
    //			pwd = '';
    //		}
    //		if(tel == ''){
    //			getMsg('Số điện thoại không được để trống',2);
    //			$("#tel")[0].focus();
    //			$("#tel").addClass('error');
    //			return false;
    //		}
    //		if(pwd.length > 16 || pwd.length < 6){
    //			getMsg('密码位数不对',2);
    //			$("#pwd")[0].focus();
    //			$("#pwd").addClass('error');
    //			return false;
    //		}
    //			
    //
    //  });


    //设置协议状态
    $("#xy").click(function() {
        var xy = $('input[name="xy"]').prop("checked");
        $('input[name="xy"]').prop("checked", xy);
    });

    //提示信息
    function getMsg(msg, type) {
        var html = '<img src="../img/tishi.png" />';
        html += msg;
        if (type == 1) {
            $('#errormsg').show();
            $('#errormsg').html(html);
        } else {
            $('#errormsg2').show();
            $('#errormsg2').html(html);
        }

    }
    //到计数60s
    function Countdown(timer) {
        //var timer = 60;
        var html = '';
        if (timer >= 1) {
            timer -= 1;
            if (timer <= 0) {
                html = "Gửi lại";
                $('#djs').attr('data', 'off');
                $('#djs').removeClass('bg1');
                $('#djs').attr('disabled', false).css('background', '#0075f6')
            } else {
                // html = timer + 's后重新获得';
                html = 'Gửi sau ' + timer + ' giây';
            }

            $("#djs").html(html);
            setTimeout(function() {
                Countdown(timer);
            }, 1000);
        }
    }
})