//page3动画
function fs(obj){
        obj.value = "";
    }
function jingyuan(){
        swiper.slideNext();
    }
function f2(){
    $('.index3_main_in').css('display','block');
    $('.index3_main_in').addClass('index3_main_rotate');
    $('.index3_zhezhao').css('display','block');
    $('.index3_zhezhao').css('opacity','0');
    $('.index3_main_in_img').css('display','block');
    showbtn3();
    showbtn4();
    showzhezhao();
}
//page3样式消失
function unshowbtn3(){
    $('.section3 span').hide();
    $('.section3 span').removeClass();
    $('.index3_main_in_img').css('display','none');
    $('.index3_main_in_img').removeClass('index3_yudi_scale');
    $('.index3_zhezhao').css('display','none');
    $('.index3_zhezhao').css('opacity','0');
    $('.index3_anniu').css('opacity','0');
    $('.index3_anniu')[0].style.zIndex="-1";
    $('.index3_anniu').removeClass('index3_anniu_rotate');
    $('.section3 span').removeClass('imgFilter');
    $('.index3_main div').removeClass('index3_anniu_in_scales');
    $('.index3_main_in').removeClass('index_anniu_dis');
    $('.index3_main_in_img').removeClass('index_anniu_dis');
    //5 ge tu biao he anniu
    $('.index3_hou_logo').css('opacity','0');
    $('.index3_hou_logo').css('zIndex','1');
    $('.index3_hou_logo').removeClass('index3_anniu_in_scales');
    $('.index3_shi').css('opacity','0');
    $('.index3_shi').removeClass('index3_shi_scale');
    $('.index3_ren').css('opacity','0');
    $('.index3_ren').removeClass('index3_ren_scale');
    $('.index3_wu').css('opacity','0');
    $('.index3_wu').removeClass('index3_wu_scale');
    $('.index3_di').css('opacity','0');
    $('.index3_di').removeClass('index3_di_scale');
    $('.index3_zuzhi').css('opacity','0');
    $('.index3_zuzhi').removeClass('index3_zuzhi_scale');
    //去除浮动效果
    $('.index3_ren_pic').removeClass('index3_ren_pic_frames');
    $('.index3_wu_pic').removeClass('index3_wu_pic_frames');
    $('.index3_di_pic').removeClass('index3_di_pic_frames');
    $('.index3_shi_pic').removeClass('index3_shi_pic_frames');
    $('.index3_zuzhi_pic').removeClass('index3_zuzhi_pic_frames');
}
//点击求助 一按键释放汗水 遮罩消失 
function f3(){
    //按钮瞬间放大效果
    $('.index3_anniu').addClass('index3_anniu_rotate') ;
    //遮罩消失
    $('.index3_zhezhao').animate({opacity:0},500,'linear')
    f3a = setTimeout(function(){
        //span添加模糊类
        $('.section3 span').addClass('imgFilter');
        //旋转logo 移除旋转效果 
        $('.index3_main div').removeClass('index3_main_rotate');
        //
        $('.index3_main div').addClass('index3_anniu_in_scales');
        //遮罩消失
        $('.index3_zhezhao').css('display','none');
        //
        disspan();
        f4();
        //span消失后出现 框
        f5();
        clearTimeout(f3a);
    },1000)
    f3b = setTimeout(function(){
        //span收拢消失 2s
        $('.section3 span').css('display','none');
        $('.index3_main_in_img').css('display','none');
        clearTimeout(f3b);
    },2500)
}
//span回放消失
function disspan(){
    //算出中心点的坐标点x,y
    var k = parseInt($('body').css('fontSize'));
    var x = $(window).width()/2;
    var y = $(window).height()/2;
    //要运动的span
    var len = $('.section3')[0].getElementsByTagName('span').length;
    for(var i=0;i<len;i++){    
        var $thisSpan =  $('.section3 span:eq('+i+')') ;
        var spanX = parseInt($thisSpan.css('left'));
        var spanY = parseInt($thisSpan.css('top'));
        $thisSpan.removeClass();
        if(spanX < x && spanY < y){
            $thisSpan.addClass('index3_allspan_topleft') ;
        }
        else if( spanX > x && spanY < y ){
            $thisSpan.addClass('index3_allspan_topright') ;
        }
        else if( spanX < x && spanY > y ){
            $thisSpan.addClass('index3_allspan_bottomleft') ;
        }
        else if( spanX > x && spanY > y ){
            $thisSpan.addClass('index3_allspan_bottomright') ;
        }
    }

}

function f4(){
    var f4a = null;
    //span隐藏
    //后logo图案 跟随span变小 消失
    $('.index3_main_in').addClass('index_anniu_dis');
    //汗滴消失
    $('.index3_main_in_img').addClass('index_anniu_dis');
    a = setTimeout(function(){
        $('.index3_main_in').css('display','none');
        //$('.index3_main_in_img').css('display','none');
        clearTimeout(f4a)
    },2000)
}
//5个带线图标出现
function f5(){
    var toNextTime = 1;
    var a = setTimeout(function(){
        $('.index3_hou_logo').css('opacity','1');
        $('.index3_hou_logo').addClass('index3_hou_scale');
        $('.index3_ren').css('opacity','1');
        $('.index3_ren').addClass('index3_ren_scale');
        $('.index3_di').css('opacity','1');
        $('.index3_di').addClass('index3_di_scale');
        $('.index3_shi').css('opacity','1');
        $('.index3_shi').addClass('index3_shi_scale');
        $('.index3_wu').css('opacity','1');
        $('.index3_wu').addClass('index3_wu_scale');
        $('.index3_zuzhi').css('opacity','1');
        $('.index3_zuzhi').addClass('index3_zuzhi_scale');
        clearTimeout(a);
    },2000) 
    //logo 放大缩小
    var g = setTimeout(function(){
        $('.index3_hou_logo').css('zIndex','4');
        $('.index3_hou_logo').removeClass('index3_hou_scale');
        $('.index3_hou_logo').addClass('index3_anniu_in_scales');
        //加浮动效果
        $('.index3_ren_pic').addClass('index3_ren_pic_frames');
        $('.index3_wu_pic').addClass('index3_wu_pic_frames');
        $('.index3_di_pic').addClass('index3_di_pic_frames');
        $('.index3_shi_pic').addClass('index3_shi_pic_frames');
        $('.index3_zuzhi_pic').addClass('index3_zuzhi_pic_frames');
        clearTimeout(g);
    },2300)
    var k = setTimeout(function(){
        toNextTime = 2;
        if(toNextTime == 2){
            swiper.slideNext();
            toNextTime = 1;
        }
        clearTimeout(k);
    },7200)
}
//第一页动画效果 几个小图标出现
function showbtn(){
    var a=b=c=d=e=f=g=i=j=k=null ;
    j = setTimeout(function(){
        $('.index1_btns').addClass('index1_footer_btn_move');
        $('.index1_logo').addClass('index1_footer_logo_move');
        clearTimeout(j);
    },4500)
    i = setTimeout(function(){
        $('.index1_top_info img:eq(7)').animate({opacity:1,
            },2500,"linear")
        clearTimeout(i);
    },4000)
    b = setTimeout(function(){
        $('.index1_top_info img:eq(4)').css('display','block');
        $('.index1_top_info img:eq(4)').addClass('index1_top_img2_move');
        clearTimeout(b);
    },1800)
    c = setTimeout(function(){
        $('.index1_top_info img:eq(2)').css('display','block');
        $('.index1_top_info img:eq(2)').addClass('index1_top_img1_move');
        clearTimeout(c);
    },1200)
    k = setTimeout(function(){
        $('.index1_top_info img:eq(0)').css('display','block');
        $('.index1_top_info img:eq(0)').addClass('index1_top_img1_move');
        clearTimeout(k);
    },2000)
    d = setTimeout(function(){
        $('.index1_top_info img:eq(6)').css('display','block');
        $('.index1_top_info img:eq(6)').addClass('index1_top_img2_move');
        clearTimeout(d);
    },2600)
    e = setTimeout(function(){
        $('.index1_top_info img:eq(1)').css('display','block');
        $('.index1_top_info img:eq(1)').addClass('index1_top_img2_move');
         clearTimeout(e);
    },3000)
    f = setTimeout(function(){
        $('.index1_top_info img:eq(5)').css('display','block');
        $('.index1_top_info img:eq(5)').addClass('index1_top_img2_move');
         clearTimeout(f);
    },3200)
    g = setTimeout(function(){
        $('.index1_top_info img:eq(3)').css('display','block');
        $('.index1_top_info img:eq(3)').addClass('index1_top_img2_move');
         clearTimeout(g);
    },3400)
}
//第一页离开之后动画效果消失
function unshowbtn(){
    $('.index1_btns').removeClass('index1_footer_btn_move');
    $('.index1_logo').removeClass('index1_footer_logo_move');
    $('.index1_top_info img:eq(7)').css('opacity','0');
    for(var i=0;i<7;i++){
        $('.index1_top_info img:eq('+i+')').css('display','none');
        $('.index1_top_info img:eq('+i+')').removeClass();
    }
}

//第二页动画效果
function showbtn2(){
    var a=b=c=null ;
    $('.index2_btns_in').hide();
    $('.index2_btns > img').hide();
    $('.index2_top').css('opacity','0');
    a = setTimeout(function(){
        $('.index2_top').animate({opacity:1,
            },500,"linear");
        b = setTimeout(function(){
            $('.index2_btns > img').show();
            clearTime([a,b,c]) ;
        },800)
        //$('.index2_btns_in').addClass('index2_btns_rotate');
        
        $('.index2_btns_in').fadeIn(1500);
           
    },700) 
}
//取消第二页的效果
function unshowbtn2(){
    $('.index2_btns_in').hide();
    $('.index2_btns > img').hide();
    $('.index2_top').css('opacity','0');
}
//page3动画样式
function showbtn3(){
    var a=null;
    $('.section3 span').hide(); 
    var a = setTimeout(function(){
        showspan(17);
        $('.index3_main_in_img').addClass('index3_yudi_scale');    
        clearTimeout(a);
    },800)
}
//多个span同时出现动画
function showbtn4(){
    var a=b=c=d=e=null;
    a = setTimeout(function(){
        showmoresapn([17,25,39]);
        clearTimeout(a) ;
    },3400) 
    b = setTimeout(function(){
        showmoresapn([18,26,38,36]);
        clearTimeout(b) ;
    },4000)
    c = setTimeout(function(){
        showmoresapn([19,24,30,35,31]);
        clearTimeout(c) ;
    },4500)
    d = setTimeout(function(){
        showmoresapn([20,28,22,32,37]);
        clearTimeout(d) ;
    },5000)
    e = setTimeout(function(){
        showmoresapn([21,27,29,23,33,34]);
        clearTimeout(e) ;
    },5400)
}
//多个span出现后 出现遮罩 
function showzhezhao(){
    var a =null;
    a = setTimeout(function(){$('.index3_zhezhao').animate({opacity:1,},2000,'linear');$('.index3_anniu').animate({opacity:1,},2000,'linear');$('.index3_anniu')[0].style.zIndex="114"},5900);  
}
//清除延时器
function clearTime(arr){
    for(var i=0;i<arr.length;i++){
        clearTimeout(arr[i]);
    }
}
//获得随机数
function randomNum(Min,Max){
    var Range = Max - Min;
    var Rand = Math.random();   
    var num = Min + Math.round(Rand * Range);
    return num;
}
//page3少数span出现动画样式
function showspan(num){
    var z = new Object();
    for(var i=0;i<num;i++){
        var q = i*60;
        q = q >1000?1000:q ;
        var a = i*(1000-q);
        var f = null;
        z.index = i ;
        f = setTimeout("tospan("+z.index+")",a);
    }
}
//page3多数span出现动画样式
function showmoresapn(arr){
    //22个
    for(var i=0;i<arr.length;i++){
        tospan(arr[i]) ;
    }
}
//span随机添加动画样式
function tospan(k){
    var b = randomNum(1,3);
    var classname = "index3_span_in" + b ;
    $('.section3 span:eq('+k+')').show();
    $('.section3 span:eq('+k+')').addClass(classname);
}
//小车动画效果
function xiaoche(obj){
    $('.index13_three').hide();
    $('.section7 > img:eq(1)').removeClass('index13_car_move');
    $('.index13_to_next').hide();
    $('.index13_poi').hide();
    $('.index13_car').addClass('index13_car_move');

    a = setTimeout(function(){
         $('.index13_to_next').addClass('index13_tonext_moves');
         $('.index13_poi').slideDown(1500);
         clearTimeout(a);
    },2000)
    b = setTimeout(function(){
        $('.index13_three').slideDown(1200);
        $('.index13_to_next').show();
        clearTimeout(b);
    },4000)
}
//小车效果消失
function misxiaoche(){
    $('.section7 > img:eq(1)').removeClass('index13_car_move');
    $('.index13_to_next').hide();
    $('.index13_poi').hide();
    $('.index13_three').hide();
}
function f13(){
    $('.index13_to_next2').hide();
    var a = setTimeout(function(){
         $('.index13_to_next2').show();
         $('.index13_to_next2').addClass('index13_tonext_moves');
         clearTimeout(a);
    },2500)
}
/////////////////////////////////////////////点击按钮A

//打开地图页面 地图首先消失
function fhide(){
    $('.index4_info_ditu').hide();
}
//下拉文字 效果
function getbg(){
    //文字框 隐藏
    var a = setTimeout(function(){
        //下拉框出现
        $('.index12_inner').slideDown(1200);
        clearTimeout(a);    
    },800)
      //下拉框出现后 1.2s推送图标加动画效果
    var c = setTimeout(function(){
        $('.index12_button13').addClass('index3_a_scale');
        clearTimeout(c);
    },2000)    
}
//移除下拉框效果
function disgetbg(){
     $('.index12_inner').hide();
     $('.index12_button13').removeClass('index3_a_scale');
}
//微信端检测
// function is_weixin(){  
//     var ua = navigator.userAgent.toLowerCase();  
//     if( ua.indexOf('micromessenger') > -1 ) {  
//         return true; 
//     }
//     else{  
//            return false;
//         }  
// }
//ios safari 
// function is_saf(){
//     var ua = navigator.userAgent.toLowerCase();  
//     if( ua.indexOf('safari') > -1 && ua.indexOf('iphone') > -1){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
//QQ内置浏览器
// function is_qqinner(){
//     var ua = navigator.userAgent.toLowerCase();
//     if( ua.indexOf('pixel') > -1 && ua.indexOf('qq') > -1){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
//百度
function is_baidu(){
    var ua = navigator.userAgent.toLowerCase();
    if( ua.indexOf('baidu') > -1 && ua.indexOf('baiduboxapp') == -1 ){
        return true;
    }
    else{
        return false;
    }
}
//UC
function is_uc(){
    var ua = navigator.userAgent.toLowerCase();
    if( ua.indexOf('ucbrowser') > -1){
        return true;
    }
    else{
        return false;
    }
}
function is_qq(){
    var ua = navigator.userAgent.toLowerCase();
    if( ua.indexOf('mqqbrowser') > -1 && ua.indexOf('pixel') < 0 && ua.indexOf('micromessenger') < 0){
        return true;
    }
    else{
        return false;
    }
}
function is_sogou(){
     var ua = navigator.userAgent.toLowerCase();
     if( ua.indexOf('sogoumse') > -1){
        return true;
     }
     else{
        return false;
     }
}
function is_liebao(){
    var ua = navigator.userAgent.toLowerCase();
    if( ua.indexOf('liebao') > -1){
        return true ;
    }
    else{
        return false ;
    }
}


var onenum = 1 ;
var currentNum = 'e' ;
var currentNum2 = 'e' ;
var currentClass = 'a' ;
//在加一个判断条件，只有动画完毕后才允许点击其他按钮
var xianYiA = 1;
var xianYiB = 1;
var xianYiC = 1;
//嫌疑人AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
function fa(num){  
    //下部圈隐藏
    if(num != currentNum2 && xianYiA == 1){
        xianYiB = 2;
        xianYiC = 2;
        //下部的圈隐藏
        $('.index_span4').hide();
        //路线隐藏
        $('.index4_luxian_inner').hide();
        $('.index4_luxian_inner2').hide();
        $('.index4_luxian_inner3').hide();
        $('.index4_luxian_inner4').hide();
        //瞬间变大效果
        changeBig('.index4_aa_aa','a');
        //logo消失等效果
        onedis();
        //地图出现
        hideditu('a','./images/index4_2a.png','#00b4ed','./images/img9-ditu@2x.png');
        //移除按钮效果
        $('.index_btns').removeClass('index3_a_scale');
        //使用对应的圈 和 放大效果 在hide地图地图下拉时执行 时间为1s
        var ctimer = setTimeout(function(){
            $('.index_span2').show();
            $('.index_span2').css('background','url(./images/img9-quan@2x.png) no-repeat');
            $('.index_span2').css('background-size','cover');
            $('.index_span2').addClass('index3_a_scale');
            clearTimeout(ctimer);
        },1000)
        //底部两条路线先隐藏
        $('.index4_luxian_inner2').hide();
        $('.index4_luxian_inner3').hide();
        $('.index4_luxian_inner4').hide();
        //使用对应的路线图 并下拉出现
        $('.index4_luxian1').attr('src','./images/line2@a.png');

        var atimer = setTimeout(function(){
            $('.index4_luxian_inner').stop().slideDown(3000);
            clearTimeout(atimer);
        },1500)
        var btimer = setTimeout(function(){
            xianYiB = 1;
            xianYiC = 1;
            clearTimeout(btimer);
        },2500)
        currentNum2 = num ;
    }
}
//嫌疑人BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
function fb(num){
    if(num != currentNum2 && xianYiB == 1){
        xianYiA = 2;
        xianYiC = 2
        //去掉嫌疑人a 圈的效果
        $('.index_span2').hide(); 
        $('.index_span4').hide();   
        //瞬间变大效果
        changeBig('.index4_bb_bb','b');
        //执行一次
        onedis();
        //调用当前地图
        hideditu('b','./images/index4_2b.png','#ed5b9f','./images/img10-ditu@2x.png');
        //移除按钮效果
        $('.index_btns').removeClass('index3_a_scale');
        //嫌疑A 地图路线 隐藏 
        $('.index4_luxian_inner').hide();
        //嫌疑b两条路线全部隐藏
        $('.index4_luxian_inner2').hide();
        $('.index4_luxian_inner3').hide();
        $('.index4_luxian_inner4').hide();
        $('.index4_luxian4').attr('src','./images/line2bot.png');
        //定时器1S后 向下的路线出现
        var a = setTimeout(function(){
            $('.index4_luxian_inner3').stop().slideDown(1000);
            //使用对应的圈 和 放大效果 
            $('.index_span2').css('background','url(./images/img10-quan@2x.png) no-repeat');
            $('.index_span2').css('background-size','cover');
            $('.index_span2').show();
            $('.index_span2').addClass('index3_a_scale');
            clearTimeout(a);
        },1700)
        //停顿1s后 乙地再返回甲地 向上收起 中间出现 在下层
        var c = setTimeout(function(){
            $('.index_span2').hide();
            $('.index4_luxian_inner2').show();
            $('.index4_luxian_inner3').hide()
            $('.index4_luxian_inner2').css('z-index','5');
            $('.index4_luxian_inner2').stop().slideUp(1000);
            $('.index4_luxian_inner4').show();
            $('.index_span4').css('background','url(./images/img10-quan@2x.png) no-repeat');
            $('.index_span4').css('background-size','cover');
            $('.index_span4').show();
            $('.index_span4').addClass('index3_a_scale');
            clearTimeout(c) ;
        },3700)
        //回到甲地后 
        var d = setTimeout(function(){
            $('.index_span4').hide();
            $('.index4_luxian_inner2').css('z-index','0');
            $('.index4_luxian4').attr('src','./images/final.png');
            xianYiA = 1 ;
            xianYiC = 1;
        },5000)
        currentNum2 = num ;
    }
}
function fc(num){
    if(num != currentNum2 && xianYiC == 1){
        xianYiA = 2;
        xianYiB = 2;
        //瞬间变大
        changeBig('.index4_cc_cc','c');
        //所有路线隐藏
        $('.index4_luxian_inner').hide();
        $('.index4_luxian_inner2').hide();
        $('.index4_luxian_inner3').hide();
        $('.index4_luxian_inner4').hide();
        //执行一次
        onedis();
        hideditu('c','./images/index4_2c.png','#f3982d','./images/img11-ditu@2x.png');
        //按钮提示
        $('.index_btns').addClass('index3_a_scale');
        //圈2隐藏 圈4出现
        var atimer = setTimeout(function(){
            $('.index_span2').hide();
            $('.index_span4').show();
            $('.index_span4').css('background','url(./images/img11-quan@2x.png) no-repeat');
            $('.index_span4').css('background-size','cover');
            $('.index_span4').addClass('index3_a_scale');
            clearTimeout(atimer);
            $('.index4_luxian_inner2').show();
            $('.index4_luxian_inner2').css('z-index','5')
            $('.index4_luxian4').attr('src','./images/line2@c.png');
            $('.index4_luxian_inner4').show();
        },1000)
        //c路线出现
        var btimer = setTimeout(function(){
            $('.index4_luxian_inner2').stop().slideUp(1000);
            clearTimeout(btimer);
        },2000)
        var ctimer = setTimeout(function(){
            xianYiA = 1;
            xianYiB = 1;
        },3000)
        currentNum2 = num ;
    }
}
//每次点击时 有一个瞬间放大效果 0.3s 后移出放大效果,obj2外圈出现并有一个放大效果
function changeBig(obj,num){
    if(num != currentClass ){
        $(obj).addClass('index3_big_scales');
        currentClass = num ;
    }
    var a = setTimeout(function(){
        $(obj).removeClass('index3_big_scales');
    },300)
    //移出所有外圈背景
    // $('.index4_aa_2').css('background','none');
    // $('.index4_bb_2').css('background','none');
    // $('.index4_cc_2').css('background','none');
    //移出所有外圈放大效果
    // $('.index4_aa_2').removeClass('index3_a_scale');
    // $('.index4_bb_2').removeClass('index3_a_scale');
    // $('.index4_cc_2').removeClass('index3_a_scale');
    //展示点击当前按钮背景 和 放大 效果
    // $(obj2).addClass('index3_a_scale');
    // $(obj2).css({'background':'url(./images/anniu/2'+num+'out.png) no-repeat','background-size':'cover'})
    // 外圈出现并放大的效果
}
//给按钮执行一次的事件
function onedis(){
    if( onenum == 1 ){
        $('.index4_logo').css('display','none');
        //外圈的半圆形 和 大半圆变小
        $('.index4_foot').addClass('index3_foot_scale');
        $('.index4_foot2').addClass('index3_foot_scale');
        //小圈的背景图消失
        $('.index4_foot').css('background','none');
        //关系图右移
        $('.index4_guanxi').css('left','0.4rem');
        //+1
        onenum = 2;
    }
}
//判断 a,b,c是否是正在显示的地图 若是则不消失 弱不是则消失
function hideditu(num,pai,color,ditu){
    if(num != currentNum){
        //不是当前嫌犯的地图 就执行动画效果
        //先移出放大效果 透明度为0
        $('.index4_info_pai img').removeClass('index3_b_scales');
        $('.index4_info_pai img').css('opacity','0');

        $('.index4_ditu').attr('src',ditu)
        $('.index4_info_ditu').stop().slideUp(300);
        //牌子开始显示
        var a = setTimeout(function(){
            //嫌犯瞬间放大效果； 用时1S
            $('.index4_info_pai img').attr('src',pai);
            $('.index4_info_pai img').css('opacity','1');
            $('.index4_info_pai img').addClass('index3_b_scales');
        },500)
        var b = setTimeout(function(){
            $('.index3_b_scales img').removeClass('index3_b_scales');
            //地图下拉
            $('.index4_info_ditu').stop().slideDown(700);
            //当前文字颜色
            $('.index4_info_ditu span').css('color',color);
        },1000)
        //赋值给当前 地图 第二次点击当前地图时不发生效果
        currentNum = num ;
    }
}

//提交判断
function tijiao(){
    var userVal = $('.uservals').val();
    var danweiVal = $('.danweivals').val();
    var telVal = $('.telvals').val();
    var telphone = /^([0]{1}[0-9]{2,3})[0-9]{7,8}$/;
    var mobphone = /^[1]{1}[0-9]{10}$/ ;
    var arr=['温馨提醒！<br/>请填写必填信息','温馨提醒！<br/>您的联系方式不正确','提交成功，<br/>我们会尽快与您联系!','提交失败,<br/>服务器繁忙,请稍候再试!']

    //如果必填信息没填 提示填写
        if((userVal == "" || danweiVal == "" || telVal == "") || 
                (userVal == "必填" || danweiVal =="必填" || telVal =="必填")
            )
        {
            $('.alerts_info').html(arr[0]);   
        }
        else{
            //验证电话号码
            if( mobphone.test(telVal) || telphone.test(telVal) ){
                   $.post('http://101.200.165.119:8080/admin/user/add.action',$('form').serialize(),function(msg){
                        if(msg.success){
                            $('.alerts_info').html(arr[2]);
                            //清除input框内的值 防止重复提交
                            var num = $('input').size();
                            for( var i = 0 ; i < num ; i++ ){
                                $('input:eq('+i+')').val('');
                            }
                            $('.uservals').val('必填');
                            $('.danweivals').val('必填');
                            $('.telvals').val('必填');
                        }else{
                            //号码不正确
                            $('.alerts_info').html(arr[3]);
                        }
                    },'json')
            }
            else{   
                $('.alerts_info').html(arr[1]);
            }
        }     
    $('.alerts').css('display','block');
    $('.alerts').addClass('index3_b_scales');
    var k = setTimeout(function(){
        $('.alerts').hide();
        clearTimeout(k);
    },2000)
}


