var is_dev=true;
log=function(a){if(is_dev&&window.console){if(typeof(a)!=="string"&&typeof(a)!=="number"&&window.console.dir){window.console.dir(a)
}else{if(window.console.log){window.console.log(a)
}}}};
require.config({waitSeconds:120});
spaced_cli={};
spaced_cli.is_admin=0;
spaced_cli.run={};
spaced_cli.run.init=function(){this.$update_style=$('<style id="core_style"></style>');
$("head").append(this.$update_style);
this.is_touch="ontouchstart" in window;
this.is_mobile=function(){return/(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent)
};
this.is_desktop=function(){return !/(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent)
};
this.old_innerWidth=$(window).width();
this.resize();
spaced_cli.block.init();
spaced_cli.stat.init();
spaced_cli.policy.init();
spaced_cli.pay.init();
$(window).on("resize.core",this.resize);
setTimeout(this.resize,500);
$("body script:not([src])").each(function(){var a=$(this).html();
if(a.indexOf("lptracker.ru")!==-1){$("body .container-list").find(".phone").addClass("lptracker_phone")
}})
};
spaced_cli.run.resize=function(){var a=$(window).width();
var b=$(window).height();
spaced_cli.run.old_innerWidth=a;
if($.browser.msie&&$.browser.version<9){spaced_cli.run.$update_style.replaceWith($('<style id="core_style">html body { min-height: '+b+"px; }</style>"))
}else{spaced_cli.run.$update_style.html("@media (min-height:"+b+"px) and (max-height:"+(b+1)+"px) { html body { min-height: "+b+"px; } }")
}spaced_cli.image.resize()
};
spaced_cli.policy={init:function(){$("a.policy").on("click",$.proxy(function(){this.show()
},this))
},show:function(){$(".policy_window").show().after('<div class="modal_overlay"></div>');
$(".policy_window a.close, .modal_overlay").off("click.policy").on("click.policy",$.proxy(function(){this.close()
},this));
this.height_fix();
$(window).on("resize.policy",this.height_fix)
},height_fix:function(){var a=parseInt($(".policy_window").height(),10);
$(".policy_window .policy_data").height(a-60)
},close:function(){$(".policy_window").hide();
$(".modal_overlay").remove()
}};
$(document).ready(function(a){spaced_cli.run.init()
});
spaced_cli.image={load_list:{},resize:function(){this.update_all()
},update_all:function(b){var a;
if(b&&b.jquery){a=b.find("img[data-img-name]")
}else{if(typeof(b)==="string"){a=$(b).find("img[data-img-name]")
}else{a=$("img[data-img-name]")
}}a.each($.proxy(function(d,c){this.update($(c))
},this))
},update:function(b){var a=this.get_meta(b);
if(a.id<1){return
}if(this.load_list[a.path+a.name+a.rotate]&&this.load_list[a.path+a.name+a.rotate]>=a.width){a.width=this.load_list[a.path+a.name+a.rotate]
}else{this.load_list[a.path+a.name+a.rotate]=a.width
}var c=this.get_url(a);
if(b.attr("src")!=c){b.attr("src",c)
}},get_meta:function(b){var a=b.attr("data-file-id");
if(!a){a=b.attr("data-img-id")
}return{id:a,name:b.attr("data-img-name"),rotate:b.attr("data-rotate"),is_quadrate:b.attr("data-is-quadrate"),width:this.get_width(b.parent().width())}
},get_url:function(a){var b=a.id;
if(a.rotate&&(a.rotate==90||a.rotate==180||a.rotate==270)){b+="_r"+a.rotate
}if(a.is_quadrate=="true"){b+="_q"+a.width
}else{b+="_"+a.width
}return"/img/"+b+"/"+a.name
},get_width:function(b){if(window.devicePixelRatio&&window.devicePixelRatio>1){b=b*parseFloat(window.devicePixelRatio)
}var a;
if(b<=75){a=75
}else{if(b<=150){a=150
}else{if(b<=300){a=300
}else{if(b<=600){a=600
}else{if(b<=900){a=900
}else{if(b<=1200){a=1200
}else{if(b<=1800){a=1800
}else{if(b<=2500){a=2500
}}}}}}}}return a
}};
spaced_cli.video_bg={init:function(a,b){if(b.type!="youtube"||typeof(b.id)!=="string"||b.id.length<1){return
}if(spaced_cli.run.is_mobile()){return
}if(a.data("video_bg_played")){if(b.id==a.data("video_bg_played")){return
}else{this.destroy(a)
}}a.data("video_bg_played",b.id);
require(["/_s/lib/jquery/youtubebackground/jquery.youtubebackground.js"],$.proxy(function(){a.YTPlayer({videoId:b.id})
},this))
},destroy:function(a){if(a.data("ytPlayer")){a.data("ytPlayer").destroy()
}a.removeData("video_bg_played")
}};
spaced_cli.form={list:{},create:function(a){this.list[a.id]=new spaced_cli.form.Form(a);
return this.list[a.id]
}};
spaced_cli.form.Form=function(a){this.o=a;
this.create()
};
spaced_cli.form.Form.prototype={o:{},create:function(){if(this.o.modal){this.$data=$('<div class="modal_form"></div>')
}else{this.$data=this.o.block.find(this.o.form);
this.bind()
}},show:function(){var a=this.o.block.find(this.o.form).eq(0).clone();
if(this.o.name){a.find('input[name="name"]').val(this.o.name)
}this.$data.html(a);
spaced_cli.modal.show({width:350,padding:0,data:this.$data});
spaced_cli.modal.$window.attr("data-id",this.o.block.attr("data-id")).attr("data-b-id",this.o.block.attr("data-b-id"));
this.bind()
},update:function(){if($(".modal_form").length<1){return
}var a=this.o.block.find(this.o.form).eq(0).clone();
this.$data.html(a);
spaced_cli.modal.set_data(this.$data);
this.bind()
},bind:function(){this.$form=this.$data.find("form").eq(0);
if(this.$form.length<1){return
}var a=$('<input type="hidden" name="jsform" value="'+parseInt((100*373*12+712),10)+'">');
this.$form.prepend(a).prepend('<input type="hidden" name="p_id" value="'+spaced_cli.p_id+'">');
this.$form.find(".form_field_submit").on("click",$.proxy(function(){this.$form.submit()
},this));
this.$form.on("submit",$.proxy(function(b){if(!this.validation()){return false
}if(typeof(FormData)!=="undefined"){this.send_formdata()
}else{if(this.$form.find('input[type="file"]').length<1){this.send_ajax()
}else{return true
}}return false
},this))
},send_formdata:function(){var b=new FormData(this.$form.get(0));
b.append("is_ajax","true");
this.$form.get(0).reset();
this.$form.parent().parent().addClass("submitting");
var a=$.ajax({url:this.$form.attr("action"),type:"POST",dataType:"json",processData:false,contentType:false,data:b,xhr:$.proxy(function(){var c=$.ajaxSettings.xhr();
if(c.upload){}return c
},this)});
a.done($.proxy(function(c){setTimeout($.proxy(function(){this.$form.parent().parent().addClass("submit-ok step-1");
setTimeout($.proxy(function(){this.$form.parent().parent().addClass("submit-ok step-2");
setTimeout($.proxy(function(){this.$form.parent().parent().addClass("submit-ok step-3");
setTimeout($.proxy(function(){this.$form.parent().parent().removeClass("submitting submit-ok step-1 step-2 step-3");
this.$form.get(0).reset();
c.send_formdata=true;
if(typeof c.pay!=="undefined"){this.pay=c.pay
}this.show_done()
},this),1000)
},this),300)
},this),400)
},this),500)
},this));
a.fail($.proxy(function(c){this.$form.parent().parent().removeClass("submitting")
},this))
},send_ajax:function(){var b=this.$form.serialize();
this.$form.get(0).reset();
var a=$.ajax({url:this.$form.attr("action"),type:"POST",dataType:"json",data:b+"&is_ajax=true"});
a.done($.proxy(function(c){this.$form.get(0).reset();
c.send_ajax=true;
if(typeof c.pay!=="undefined"){this.pay=c.pay
}this.show_done()
},this));
a.fail($.proxy(function(c){},this))
},validation:function(){var a=true;
this.$form.find("div[data-type]").each(function(d,i){var b=$(i);
var g=b.attr("data-type");
var c=(b.attr("data-is-required")=="true");
var h,j;
b.removeClass("is_error");
h=b.find("input,textarea,select");
if($.inArray(g,["text","textarea","email","phone"])!=-1){j=$.trim(h.val())
}else{if(g=="file"){j=h.get(0).files
}}try{if(c&&typeof(j)!=="undefined"&&j.length<1){throw"Поле должно быть заполнено"
}if(g=="email"&&h.attr("data-check")=="email"&&j.length>0){var k=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Zа-яёА-ЯЁ\-0-9]+\.)+[a-zA-Zа-яёА-ЯЁ]{2,}))$/;
if(!k.test(j)){b.addClass("is_error");
b.find(".error").text("Некорректный адрес электронной почты");
a=false
}}if(g=="phone"&&h.attr("data-check")=="phone"&&j.length>0){if(/[^0-9+\(\)\-\s]/.test(j)){throw"Поле должно содержать только цифры"
}else{var e=j.replace(/[^0-9]/g,"");
if(e.length<5){throw"Минимальная длина - 5 цифр"
}}}}catch(f){b.addClass("is_error");
b.find(".error").text(f);
a=false
}});
return a
},show_done:function(){spaced_cli.stat.reach_goal("order_done");
try{var d=this.$form.find('input[name="goal"]').val();
if(typeof d!=="undefined"&&d!==""){spaced_cli.stat.reach_goal(d)
}}catch(f){}try{var b=this.$form.find('textarea[name="goal_html"]').val();
if(typeof b!=="undefined"&&b.trim()!==""){var g=document.write;
document.write=function(h){$("body:eq(0)").append(h)
};
$("body:eq(0)").append('<div style="display:none">'+b+"</div>");
setTimeout(function(){document.write=g
},10000)
}}catch(f){}if(this.$form.find('input[name="action"]').val()=="pay"&&typeof this.pay!=="undefined"&&this.pay!==null){if(this.pay.pay_link.length>0){var e=window.location.origin+window.location.pathname+"?pay_id="+this.pay.pay_id+"&h="+this.pay.pay_hash;
try{history.pushState(null,null,e);
setTimeout(function(){spaced_cli.pay.init()
},200)
}catch(f){setTimeout(function(){document.location=e
},500)
}return
}}if(this.$form.find('input[name="action"]').val()=="redirect"){var a=this.$form.find('input[name="action_redirect"]').val();
if(a.length>0){setTimeout(function(){document.location=a
},500)
}return
}var c=this.o.block.find(this.o.form_done).eq(0).clone();
this.$done_data=$('<div class="modal_form_done"></div>');
this.$done_data.html(c);
this.modal_done=spaced_cli.modal.show({width:350,padding:0,data:this.$done_data});
spaced_cli.modal.$window.attr("data-id",this.o.block.attr("data-id")).attr("data-b-id",this.o.block.attr("data-b-id"))
},set_name:function(a){this.o.name=a
},send_log:function(a,b){return false
}};
spaced_cli.pay={options:{},pay_id:false,h:false,paymodal:false,types:[],init:function(){var a=this.uriParams();
if(typeof a.pay_id!=="undefined"){this.pay_id=a.pay_id;
this.h=a.h
}if(typeof a.pay_status!=="undefined"){try{history.pushState(null,null,window.location.pathname)
}catch(b){}if(a.pay_status=="success"){this.showSuccessAlert()
}if(a.pay_status=="fail"){this.showFailAlert()
}return false
}this.getBill(this.pay_id,this.h)
},getBill:function(a,b){if(typeof a==="undefined"||a===false){return
}$.ajax({url:"/mod/pay/ajax/?act=payData",type:"GET",dataType:"json",data:{pay_id:a,hash:b}}).done($.proxy(function(c){if(c.status===0){return false
}this.types=c.pay.support_types;
if(c.pay.pay_status==2){this.showAllreadyPayed(c.pay)
}else{if(this.cashonly()){this.showCashInstruction(c.pay)
}else{this.showBillForm(c)
}}},this))
},showBillForm:function(c){var e='<div class="overview"><div class="summ">Сумма к оплате <span>'+c.pay.pay_sum+' <i class="r" title="руб."><span>руб.</span></i></span></div>';
if(c.pay.pay_desc.length>1){e=e+'<div class="comment"> '+c.pay.pay_desc+" .</div>"
}e=e+'</div><div class="pay_modal_data"><div class="fields"><div class="select_pay_method" style="display:none"><div class="title">Выберите способ оплаты</div><div class="list clear"></div><div class="show-all"><a href="#show_all">Показать все способы оплаты</a></div></div></div><div class="submit"> <a href="#" class="submit disabled">Перейти к оплате</a> </div>';
$paymodal=$(e);
var b=0;
for(var a in this.types){if(typeof this.types[a].name!="undefined"){var d='<label data-type="'+a+'" title="'+this.types[a].name+'"><i></i><div class="value"><input type="radio" name="form[pay_method]" value="'+a+'"></div><span>'+this.types[a].name+"</span></label>";
$paymodal.find(".list").append(d);
b++
}}if(this.types.length===0){$paymodal.find(".select_pay_method").remove();
$paymodal.find(".submit").remove()
}if(b<=8){$paymodal.find(".show-all a").hide()
}if(b<=4){$paymodal.find(".select_pay_method .list").css({height:"120px"})
}$paymodal.find(".select_pay_method").on("mousewheel DOMMouseScroll",function(f){var h=f.originalEvent,g=h.wheelDelta||-h.detail;
this.scrollTop+=(g<0?1:-1)*30;
f.preventDefault()
});
$paymodal.find("a.submit").on("click",$.proxy(function(h){var g=$paymodal.find(".list input:checked").val();
if(typeof g==="undefined"){alert("Выберите способ оплаты");
return false
}if(g=="cash"){this.showCashInstruction();
return false
}var f="/mod/pay/?pay_type="+g+"&pay_id="+this.pay_id+"&h="+this.h;
$(h.currentTarget).attr("href",f);
$paymodal.find("a.submit").hide();
$paymodal.find(".select_pay_method").hide().after('<div class="loading">Загрузка...</div>')
},this));
$paymodal.find(".show-all a").on("click",$.proxy(function(f){$paymodal.find(".select_pay_method .list").addClass("show-all");
$(f.currentTarget).hide();
return false
},this));
this.modal.show("bill","Оплата счёта № "+c.pay.pay_id,$paymodal);
setTimeout(function(){$(".select_pay_method").show()
},100)
},cashonly:function(){var a=function(d){var c=0,b;
for(b in d){if(d.hasOwnProperty(b)){c++
}}return c
};
if(a(this.types)==1&&typeof this.types.cash!=="undefined"){return true
}return false
},showCashInstruction:function(){var a='<div class="thanks"><i></i>Спасибо за заказ!</div><div class="cash-instruction">'+this.types.cash.instruction+"</div>";
this.modal.hide();
this.modal.show("cash","",$(a));
$.ajax({url:"/mod/pay/ajax/?act=selectCash",type:"GET",dataType:"json",data:{pay_id:this.pay_id,hash:this.h}}).done($.proxy(function(b){},this))
},showAllreadyPayed:function(c){var b="";
if(c.pay_time_done!="0"){b=c.pay_time_done
}var a='<div class="status"><i></i>Счёт был оплачен<span class="date">'+b+'</span></div><div class="summary"><label>Сумма к оплате:</label><span class="summ">'+c.pay_sum+' <i class="rur"><span>руб.</span></i></span><label>Способ оплаты:</label><span>'+c.pay_method_name+"</span>";
if(c.pay_desc.length>1){a=a+"<label>Комментарий:</label><span>"+c.pay_desc+"</span>"
}a=a+"</div>";
this.modal.show("payed","Оплата счёта № "+c.pay_id,$(a))
},showSuccessAlert:function(){spaced_cli.stat.reach_goal("pay_done");
var a='<div class="alert-pay-success"><i></i><h4>Оплата прошла успешно</h4></div>';
this.modal.show("success","",a)
},showFailAlert:function(){var a='<div class="alert-pay-fail"><i></i><h4>Ошибка при оплате</h4><p>Попробуйте позже или выберите другой способ оплаты</p>';
if(this.pay_id){var b="/?pay_id="+this.pay_id+"&h="+this.h;
a=a+'<a href="'+b+'" class="submit">Попробовать ещё раз</a>'
}a=a+"</div>";
this.modal.show("fail","",a)
},modal:{show:function(c,b,a){$modal=$('<div class="pay_modal" data-type="'+c+'"><div class="pay_modal_title"><div class="title"><i></i><span>'+b+'</span></div><a href="#cancel" class="cancel">&times;</a></div><div class="modal-content"></div></div></div>');
$modal.find(".modal-content").append(a);
$modal.find("a.cancel").on("click",$.proxy(function(d){this.hide();
return false
},this));
$("body").addClass("pay_overlay_blur").append('<div class="pay_overlay"></div>').append($modal);
$("html, body").animate({scrollTop:0});
setTimeout(function(){var d=($(window).height()-$(".pay_modal").height())/2;
if(d<10){d=50
}$(".pay_modal").css({top:d+"px"})
},200)
},hide:function(){$(".pay_modal").remove();
$(".pay_overlay").remove();
$("body").removeClass("pay_overlay_blur")
}},uriParams:function(){try{return JSON.parse('{"'+decodeURI(location.search.substring(1)).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')
}catch(a){return false
}}};
spaced_cli.modal={show:function(a){if(this.$window){this.$window.remove()
}this.$window=$('<div class="modal ext_b_block"></div>');
this.$window.html('<a class="close"></a>').append(a.data);
if(a.width){this.$window.css("width",a.width)
}if(a.height){this.$window.css("height",a.height)
}if(typeof(a.padding)!=="undefined"){this.$window.css("padding",a.padding)
}$("body").addClass("show_modal_overlay").append(this.$window).append('<div class="modal_overlay"></div>');
this.update_position();
if(spaced_cli.run.is_mobile()){if(screen.width<725){$("body").css({maxWidth:"100%",width:"100%",minWidth:"10px",overflow:"hidden"});
$(".editor_preview").hide();
$(".container-list").hide();
$("head").append('<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1,  maximum-scale=1"/>')
}}this.$window.on("click","a.close",$.proxy(function(){this.$window.remove();
$("body div.modal_overlay").remove();
$("body").removeClass("show_modal_overlay");
if(spaced_cli.run.is_mobile()&&screen.width<725){$('head meta[name="viewport"]').remove();
var b="device-width";
if($(window).width()<1000){b=1000
}$("head").append('<meta name="viewport" content="width='+b+'"/>');
$(".container-list").show();
$(".editor_preview").show();
$("body").css({maxWidth:"auto",width:"auto",minWidth:"980px",overflow:"inherit"})
}},this));
setTimeout($.proxy(function(){this.update_position()
},this),2000)
},set_data:function(a){this.$window.html('<a class="close"></a>').append(a);
this.update_position()
},update_position:function(){this.$window.css("position","fixed").css("top","50%").css("left","50%").css("margin-left","-"+(this.$window.outerWidth()/2)+"px").css("margin-top","-"+(this.$window.outerHeight()/2)+"px")
}};
spaced_cli.menu=function(){this.options={menu:".menu",srollSpeed:400,topOffset:1};
this.items=[];
this.menu_floating=false;
this.clickInit=false;
this.block_params={};
this.init=function(a,c){this.$block=c;
if(typeof a.menu!=="undefined"){this.options.menu=a.menu
}if(typeof a.srollSpeed!=="undefined"){this.options.srollSpeed=a.srollSpeed
}if(typeof a.topOffset!=="undefined"){this.options.topOffset=a.topOffset
}this.getItems();
if(spaced_cli.is_admin===0&&!spaced_cli.run.is_mobile()){this.menu_floating=false;
var b=this.$block.find('input[name="menu_floating"]').val();
if(b=="true"||b==1){this.menu_floating=true
}}this.getBlockParams();
if(this.menu_floating){if(this.block_params.top===0&&this.options.topOffset<10){this.fixBlock()
}else{this.floatingHelper()
}}else{this.realeseBlock()
}if(!this.clickInit){this.clickInit=true;
this.clickScroll()
}};
this.getBlockParams=function(){var a=this.$block.height();
if(a===0){a=this.$block.data("height");
if(a===0){a=120
}}else{this.$block.data("height",a)
}this.block_params.height=a;
this.block_params.top=this.$block.offset().top
};
this.getItems=function(){this.$block.find(this.options.menu+" a").each($.proxy(function(c,e){var f={el:$(e),type:"link",href:"",anchor:{top:0,el:false}};
var b=f.el.attr("href");
var a=b.split("#");
d=a[1];
f.href=b;
if(d!==""&&(a[0]===""||a[0]==window.location.pathname||a[0]==window.location.href||a[0]==window.location.origin)){var d=$('a[name="'+d+'"]');
if(d.length>0){f.type="anchor";
f.anchor={el:d,top:d.offset().top}
}}this.items[b]=f
},this));
this.activeItem()
};
this.clickScroll=function(){this.$block.find(this.options.menu+" a").click($.proxy(function(c){var b=$(c.currentTarget).attr("href");
if(this.items[b].type=="anchor"){var a=this.items[b].anchor.el.offset().top;
if(this.menu_floating){a=a-this.block_params.height+10
}$("html,body").animate({scrollTop:a+"px"},400,$.proxy(function(){this.activeItem()
},this))
}},this))
};
this.activeItem=function(){var e=false;
var a=99999999;
for(var b in this.items){var c=this.items[b];
if(c.type=="anchor"&&this.menu_floating){var d=c.anchor.top-this.block_params.height-$(window).height()/2.5;
if($(window).scrollTop()>d&&a>$(window).scrollTop()-d){a=$(window).scrollTop()-d;
e=c.el
}}else{if(c.type=="link"&&!e){if(c.href==window.location.href||c.href==window.location.pathname+window.location.search||c.href==window.location.origin+window.location.pathname+window.location.search){e=c.el
}}}}this.$block.find(this.options.menu+" a").removeClass("active");
if(e){e.addClass("active")
}};
this.floating=function(){if(this.menu_floating&&$(window).scrollTop()>this.block_params.top+this.options.topOffset){setTimeout($.proxy(function(){this.fixBlock()
},this),100)
}else{this.realeseBlock()
}this.activeItem()
};
this.fixBlock=function(){var a=this.$block;
if(!a.hasClass("floating")){a.addClass("floating").css({marginBottom:this.block_params.height+"px"}).find(".container").css({height:this.block_params.height+"px"})
}};
this.realeseBlock=function(){var a=this.$block;
if(a.hasClass("floating")){a.removeClass("floating").css({marginBottom:"0px"}).find(".container").css({height:"auto"})
}};
this.floatingHelper_timeout=false;
this.floatingHelper=function(){clearTimeout(this.floatingHelper_timeout);
if(this.menu_floating){this.floatingHelper_timeout=setTimeout($.proxy(function(){this.floating();
this.floatingHelper()
},this),200)
}}
};
spaced_cli.stat={u_id:0,time:0,init:function(){var a=this.get_cookie("user_id");
if(a){return
}var b=this.get_cookie("f_uid");
if(b){this.u_id=b;
this.user_visit()
}else{this.user_create()
}},reach_goal:function(a,d){d=typeof d!=="undefined"?d:{};
if(!spaced_cli.is_admin){try{if(spaced_cli.yandex_id){var c=setInterval(function(){if(typeof Ya==="undefined"||typeof(Ya._metrika.counter)!=="object"){return false
}clearInterval(c);
Ya._metrika.counter.reachGoal(a,d)
},50)
}if(typeof(ga)==="function"){ga("send","event",a,"send")
}}catch(b){}}},get_cookie:function(a){var b="; "+document.cookie;
var c=b.split("; "+a+"=");
if(c.length==2){return c.pop().split(";").shift()
}else{return false
}},set_cookie:function(c,d){var b=new Date();
var a=b.getTime()+(3*365*24*60*60*1000);
document.cookie=c+"="+escape(d)+"; path=/; domain=."+document.location.hostname+";  expires="+(new Date(a))
},get_utm:function(){var b=(function(d){if(d===""){return{}
}var c={};
for(var e=0;
e<d.length;
++e){var f=d[e].split("=");
if(f.length!=2){continue
}c[f[0]]=decodeURIComponent(f[1].replace(/\+/g," "))
}return c
})(window.location.search.substr(1).split("&"));
var a={};
$.each(b,function(c,d){if(c.substring(0,4)=="utm_"){a[c]=d
}});
if(document.referrer){a.url=document.referrer
}return a
},user_create:function(){var a=$.ajax({url:"/mod/stat/",type:"POST",dataType:"json",data:{s_id:spaced_cli.s_id,group_id:spaced_cli.group_id,p_id:spaced_cli.p_id,utm_data:this.get_utm()}});
a.done($.proxy(function(b){if(typeof(b)=="object"&&b!==null&&b.u_id){this.set_cookie("f_uid",b.u_id);
this.u_id=b.u_id
}else{log("cookie не установлена");
log(b)
}},this))
},user_visit:function(){var a=$.ajax({url:"/mod/stat/visit/",type:"POST",dataType:"json",data:{s_id:spaced_cli.s_id,group_id:spaced_cli.group_id,p_id:spaced_cli.p_id,u_id:this.u_id}});
a.done($.proxy(function(b){if(b.v_id){}else{log("cookie визита не установлена");
log(b)
}},this))
}};
spaced_cli.block={data:{},css_loaded:{},block_default:{js:[],css:[],load_css:function(a){if(spaced_cli.block.css_loaded[a]){return
}$("body").append('<link href="'+a+'" rel="stylesheet" type="text/css" media="all">');
spaced_cli.block.css_loaded[a]=true
},_on_init:function(){if(this.css.length>0){$.each(this.css,$.proxy(function(a,b){this.load_css(b)
},this))
}if(this.js.length>0){require(this.js,$.proxy(function(){this.is_init=true;
this.on_init()
},this))
}else{this.is_init=true;
this.on_init()
}this.fancy_box_bind();
if(this.$block.is("[data-video-bg]")){spaced_cli.video_bg.init(this.$block,this.$block.data("video-bg"))
}require(["/_s/lib/ie/svg4everybody.js"],$.proxy(function(){svg4everybody({polyfill:true})
},this))
},_on_update:function(){if(this.js.length>0){require(this.js,$.proxy(function(){this.on_update()
},this))
}else{this.on_update()
}this.fancy_box_bind()
},fancy_box_bind:function(){if(this.$block.find(".img_popup").length>0){this.load_css("/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.css");
require(["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.pack.js"],$.proxy(function(){this.$block.find(".img_popup").each($.proxy(function(d,b){var c=$(b);
if(!c.is("[data-fancybox-group]")){c.attr("data-fancybox-group","img_group_"+this.id);
var a=false;
if(!c.is("a[href]")){if(c.is("[data-img-popup]")){a=c.attr("data-img-popup")
}else{return
}}c.fancybox({type:"image",href:a,openEffect:"fade",closeEffect:"fade",nextEffect:"fade",prevEffect:"fade",helpers:{title:{type:"inside"}}})
}},this))
},this))
}},_on_msg:function(b,a){if(b=="video_bg_update"){spaced_cli.video_bg.init(this.$block,a)
}if(b=="video_bg_destroy"){spaced_cli.video_bg.destroy(this.$block,a)
}},on_init:function(){},on_update:function(){this.on_init()
},on_msg:function(a){log(a)
}},init:function(){$(window).on("spaced_block_add",$.proxy(function(c,b){if(b.id<1){return
}var a=$('.b_block[data-id="'+parseInt(b.id)+'"]');
this.bind(a)
},this));
$(window).on("spaced_block_render",$.proxy(function(c,b){if(b.id<1){return
}var a=$('.b_block[data-id="'+parseInt(b.id)+'"]');
var d=a.data("_core_block");
if(typeof(d)==="undefined"){return
}if(typeof(d._on_update)==="function"){d._on_update()
}},this));
$(window).on("spaced_block_msg",$.proxy(function(c,b){if(b.id<1){return
}var a=$('.b_block[data-id="'+parseInt(b.id)+'"]');
var d=a.data("_core_block");
if(typeof(d)==="undefined"){return
}d._on_msg(b.msg,b.data);
d.on_msg(b.msg)
},this));
$(".b_block").each($.proxy(function(c,b){var a=$(b);
this.bind(a)
},this))
},bind:function(a){var b=a.attr("data-b-id");
if(!this.data[b]||a.data("_core_block")){return
}var c=new this.data[b](a);
if(typeof(c)!=="object"){return
}a.data("_core_block",c);
c._on_init()
},update:function(a){var b=a.data("_core_block");
if(typeof(b)==="undefined"){return
}if(typeof(b._on_update)==="function"){b._on_update()
}},register:function(b,c){if(!b){log("Приложение должно иметь уникальный номер")
}c.block_id=b;
spaced_cli.block.data[b]=function(d){this.$block=d;
this.data=this.$block.data("json");
this.id=this.$block.attr("data-id")
};
var a=$.extend(true,{},this.block_default);
spaced_cli.block.data[b].prototype=$.extend(true,{},a,c)
}};
spaced_cli.timer={list:{},create:function(a){this.list[a.id]=new spaced_cli.timer.Timer(a);
return this.list[a.id]
}};
spaced_cli.timer.Timer=function(a){this.o=a;
this.create()
};
spaced_cli.timer.Timer.prototype={o:{},create:function(){var e=$(this.o.block).find(this.o.item);
var d=e.data("time");
var f=new Date();
if(d.type=="date"){var b=d.my.toString().split(".");
this.final_date=new Date(b[1],parseInt(b[0],10)-1,d.d,d.h,d.m)
}else{if(d.type=="monthly"){this.final_date=new Date(f.getFullYear(),f.getMonth(),d.d,d.h,d.m);
if(f.getTime()>this.final_date.getTime()){this.final_date=new Date(f.getFullYear(),f.getMonth()+1,d.d,d.h,d.m)
}if(parseInt(d.d,10)!=this.final_date.getDate()){this.final_date.setDate(0);
if(f.getTime()>this.final_date.getTime()){this.final_date=new Date(this.final_date.getFullYear(),this.final_date.getMonth()+2,0,d.h,d.m)
}}}else{if(d.type=="weekly"){var a=parseInt(f.getDate(),10)-parseInt(f.getDay(),10)+parseInt(d.dw,10);
this.final_date=new Date(f.getFullYear(),f.getMonth(),a,d.h,d.m);
if(f.getTime()>this.final_date.getTime()){this.final_date.setDate(this.final_date.getDate()+7)
}}else{if(d.type=="daily"){this.final_date=new Date(f.getFullYear(),f.getMonth(),f.getDate(),d.h,d.m);
if(f.getTime()>this.final_date.getTime()){this.final_date.setDate(this.final_date.getDate()+1)
}}else{this.final_date=new Date();
this.final_date.setMonth(this.final_date.getMonth()+1,15)
}}}}this.item_d_1=e.find(".d [data-value]").eq(0);
this.item_d_2=e.find(".d [data-value]").eq(1);
this.item_d_3=e.find(".d [data-value]").eq(2);
this.item_h_1=e.find(".h [data-value]").eq(0);
this.item_h_2=e.find(".h [data-value]").eq(1);
this.item_m_1=e.find(".m [data-value]").eq(0);
this.item_m_2=e.find(".m [data-value]").eq(1);
this.item_s_1=e.find(".s [data-value]").eq(0);
this.item_s_2=e.find(".s [data-value]").eq(1);
this.last_offset={d:undefined,h:undefined,m:undefined,s:undefined};
if(!spaced_cli.is_admin&&this.final_date.getTime()<new Date().getTime()){$(this.o.block).hide()
}else{this.start()
}},update:function(){this.second_left=this.final_date.getTime()-new Date().getTime();
this.second_left=Math.ceil(this.second_left/1000);
this.second_left=this.second_left<0?0:this.second_left;
this.offset={d:Math.floor(this.second_left/60/60/24),h:Math.floor(this.second_left/60/60)%24,m:Math.floor(this.second_left/60)%60,s:this.second_left%60};
if(this.last_offset.d!=this.offset.d){var e=this.offset.d.toString().split("");
if(e.length<2){e.unshift(0)
}if(e.length<3){e.unshift(0)
}this.item_d_1.attr("data-value",e[0]).text(e[0]);
this.item_d_2.attr("data-value",e[1]).text(e[1]);
this.item_d_3.attr("data-value",e[2]).text(e[2])
}if(this.last_offset.h!=this.offset.h){var c=this.offset.h.toString().split("");
if(c.length<2){c.unshift(0)
}this.item_h_1.attr("data-value",c[0]).text(c[0]);
this.item_h_2.attr("data-value",c[1]).text(c[1])
}if(this.last_offset.m!=this.offset.m){var a=this.offset.m.toString().split("");
if(a.length<2){a.unshift(0)
}this.item_m_1.attr("data-value",a[0]).text(a[0]);
this.item_m_2.attr("data-value",a[1]).text(a[1])
}if(this.last_offset.s!=this.offset.s){var b=this.offset.s.toString().split("");
if(b.length<2){b.unshift(0)
}this.item_s_1.attr("data-value",b[0]).text(b[0]);
this.item_s_2.attr("data-value",b[1]).text(b[1])
}this.last_offset=this.offset;
if(this.second_left<0){this.stop();
return
}},start:function(){if(this.interval!==null){clearInterval(this.interval)
}this.update();
this.interval=setInterval($.proxy(function(){this.update()
},this),200)
},stop:function(){clearInterval(this.interval);
this.interval=null
}};
spaced_cli.block.register(2,{on_init:function(){this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_done_show":this.form.show_done();
break
}}});
spaced_cli.block.register(4,{on_init:function(){this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"});
this.$block.find(".form_btn a").on("click",$.proxy(function(b){this.$block.find("input.item-data").remove();
var d=$('<input class="item-data" type="hidden" name="form[1000]" value="">').val($(b.currentTarget).closest(".item").find(".name").text());
this.$block.find("div.form .form_fields").prepend('<input class="item-data" type="hidden" name="type[1000]" value="hidden">').prepend('<input class="item-data" type="hidden" name="vars[1000]" value="Услуга">').prepend(d);
var a=$(b.currentTarget).closest(".item").find(".price").text();
this.$block.find("div.form .form_fields").append('<input class="item-data" type="hidden" name="pay[price]" value="'+a+'">');
var c=$(b.currentTarget).closest(".item").find(".name").text();
this.$block.find("div.form .form_fields").append('<input class="item-data" type="hidden" name="pay[desc]" value="'+c+'">');
this.form.show()
},this))
},on_msg:function(a){switch(a){case"form_show":this.form.show();
break;
case"form_update":this.form.update();
break;
case"form_done_show":this.form.show_done();
break
}}});
spaced_cli.block.register(6,{js:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.pack.js"],css:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.css"],on_init:function(){this.fancybox()
},fancybox:function(){this.$block.find(".item .img").each($.proxy(function(c,b){var a=$(b);
a.attr("data-fancybox-group","gallery_"+this.id);
a.fancybox({type:"image",openEffect:"fade",closeEffect:"fade",nextEffect:"fade",prevEffect:"fade",helpers:{title:{type:"inside"}}})
},this))
}});
spaced_cli.block.register(7,{});
spaced_cli.block.register(9,{js:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],on_init:function(){var a=this;
var c=a.$block.find(".item_list").hasClass("slidered");
if(c){var b=a.$block.find(".slider");
a.row=1;
a.slider=slider=b.lightSlider({item:a.row,slideMargin:0,useCSS:true,cssEasing:"ease-in-out",speed:600,adaptiveHeight:true,loop:false,auto:false,pause:4000,pauseOnHover:true,enableDrag:false,pager:false,controls:false,onAfterSlide:function(){a.$block.data("slide_count",a.slider.getCurrentSlideCount()-1)
}});
a.controlKeys("#prev-9, #next-9")
}},controlKeys:function(b){var a=this;
var c=a.$block.find(".slider");
$(b).click(function(){var d=$(this);
clearTimeout(d.data("timeout"));
var e=setTimeout(function(){var f=c.find(".row-holder").length-1;
var g=a.slider.getCurrentSlideCount()-1;
var h;
if(d.hasClass("prev")){h=(g-a.row)<0?f:g-a.row;
a.slider.goToSlide(h)
}else{h=(g+a.row)>f?0:g+a.row;
a.slider.goToSlide(h)
}},250);
d.data("timeout",e)
})
},on_msg:function(d){var a=this;
var c=a.$block.find(".slider");
var b=a.$block.find(".item_list").hasClass("slidered");
if(b){setTimeout(function(){var e=+a.$block.data("slide_count")||0;
if(d==="add"){a.slider.goToSlide(e+a.row)
}else{if(d==="remove"){a.slider.goToSlide((e-a.row<0)?0:e-a.row)
}else{if(d==="change"){clearTimeout(c.data("change"));
c.data("change",setTimeout(function(){a.slider.refresh()
},100))
}else{c.addClass("noanimate");
a.slider.goToSlide(e);
setTimeout(function(){c.removeClass("noanimate")
},500)
}}}},500)
}}});
spaced_cli.block.register(10,{js:["http://api-maps.yandex.ru/2.1/?lang=ru_RU"],on_init:function(){this.$map=this.$block.find("[data-map]").eq(0);
this.map_data=this.$map.data("map");
ymaps.ready($.proxy(function(){this.show_map()
},this))
},show_map:function(){if(typeof(this.map)!=="undefined"){this.map.destroy()
}this.map=new ymaps.Map(this.$map.get(0),{center:this.map_data.center,zoom:this.map_data.zoom,controls:["zoomControl","fullscreenControl"],behaviors:["default","scrollZoom"],type:"yandex#map"});
var a;
this.map.behaviors.disable("scrollZoom");
$(this.$map).off("mouseenter.map_scroll").on("mouseenter.map_scroll",$.proxy(function(b){a=window.setTimeout($.proxy(function(){this.map.behaviors.enable("scrollZoom")
},this),700)
},this));
$(this.$map).off("mouseleave.map_scroll").on("mouseleave.map_scroll",$.proxy(function(b){if(a){window.clearTimeout(a);
this.map.behaviors.disable("scrollZoom")
}},this));
this.update_places()
},update_places:function(){this.map.geoObjects.removeAll();
if(typeof(this.map_data.marker)==="undefined"){this.map_data.marker="/_app/block/10/mark_blue.png"
}$.each(this.map_data.places,$.proxy(function(c,a){if(typeof(a.color)==="undefined"){a.color="blue"
}var b=new ymaps.Placemark(a.coords,{balloonContent:a.address},{iconLayout:"default#image",iconImageHref:"/_app/block/10/mark_"+a.color+".png",iconImageSize:[50,50],iconImageOffset:[-25,-50]});
this.map.geoObjects.add(b)
},this))
}});
spaced_cli.block.register(13,{form_is_init:false,on_init:function(){this.$block.find("a.btn").on("click",$.proxy(function(a){if($.inArray($(a.currentTarget).attr("data-action"),["link","file"])!==-1){return true
}else{this.form_init();
this.form.show()
}},this))
},form_init:function(){this.form_is_init=true;
this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_show":if(!this.form_is_init){this.form_init()
}this.form.show();
break;
case"form_update":if(this.form_is_init){this.form.update()
}break;
case"form_done_show":if(this.form_is_init){this.form.show_done()
}break
}}});
spaced_cli.block.register(14,{form_is_init:false,on_init:function(){this.$block.find("a.btn").on("click",$.proxy(function(a){if($.inArray($(a.currentTarget).attr("data-action"),["link","file"])!==-1){return true
}else{this.form_init();
this.form.show()
}},this))
},form_init:function(){this.form_is_init=true;
this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_show":if(!this.form_is_init){this.form_init()
}this.form.show();
break;
case"form_update":if(this.form_is_init){this.form.update()
}break;
case"form_done_show":if(this.form_is_init){this.form.show_done()
}break
}}});
spaced_cli.block.register(15,{form_is_init:false,on_init:function(){this.$block.find("a.btn").on("click",$.proxy(function(a){if($.inArray($(a.currentTarget).attr("data-action"),["link","file"])!==-1){return true
}else{this.form_init();
this.form.show()
}},this))
},form_init:function(){this.form_is_init=true;
this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_show":if(!this.form_is_init){this.form_init()
}this.form.show();
break;
case"form_update":if(this.form_is_init){this.form.update()
}break;
case"form_done_show":if(this.form_is_init){this.form.show_done()
}break
}}});
spaced_cli.block.register(16,{form_is_init:false,on_init:function(){this.$block.find("a.btn").on("click",$.proxy(function(a){if($.inArray($(a.currentTarget).attr("data-action"),["link","file"])!==-1){return true
}else{this.form_init();
this.form.show()
}},this))
},form_init:function(){this.form_is_init=true;
this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_show":if(!this.form_is_init){this.form_init()
}this.form.show();
break;
case"form_update":if(this.form_is_init){this.form.update()
}break;
case"form_done_show":if(this.form_is_init){this.form.show_done()
}break
}}});
spaced_cli.block.register(17,{form_is_init:false,on_init:function(){this.$block.find("a.btn").on("click",$.proxy(function(a){if($.inArray($(a.currentTarget).attr("data-action"),["link","file"])!==-1){return true
}else{this.form_init();
this.form.show()
}},this))
},form_init:function(){this.form_is_init=true;
this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_show":if(!this.form_is_init){this.form_init()
}this.form.show();
break;
case"form_update":if(this.form_is_init){this.form.update()
}break;
case"form_done_show":if(this.form_is_init){this.form.show_done()
}break
}}});
spaced_cli.block.register(22,{});
spaced_cli.block.register(23,{});
spaced_cli.block.register(24,{on_init:function(){this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"});
this.$block.find(".form_btn a").on("click",$.proxy(function(b){this.$block.find("input.item-data").remove();
var f=$('<input class="item-data" type="hidden" name="form[1000]" value="">').val($(b.currentTarget).closest(".item").find(".name").text());
this.$block.find("div.form .form_fields").prepend('<input class="item-data" type="hidden" name="type[1000]" value="hidden">').prepend('<input class="item-data" type="hidden" name="vars[1000]" value="Услуга">').prepend(f);
var d=$(b.currentTarget).closest(".item").find(".price").clone();
d.find("span").remove();
var a=d.text();
this.$block.find("div.form .form_fields").append('<input class="item-data" type="hidden" name="pay[price]" value="'+a+'">');
var c=$(b.currentTarget).closest(".item").find(".name").text();
this.$block.find("div.form .form_fields").append('<input class="item-data" type="hidden" name="pay[desc]" value="'+c+'">');
this.form.show()
},this))
},on_msg:function(a){switch(a){case"form_show":this.form.show();
break;
case"form_update":this.form.update();
break;
case"form_done_show":this.form.show_done();
break
}}});
spaced_cli.block.register(25,{on_init:function(){this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"});
this.$block.find(".form_btn a").on("click",$.proxy(function(b){this.$block.find("input.item-data").remove();
var f=$('<input class="item-data" type="hidden" name="form[1000]" value="">').val($(b.currentTarget).closest(".item").find(".name").text());
this.$block.find("div.form .form_fields").prepend('<input class="item-data" type="hidden" name="type[1000]" value="hidden">').prepend('<input class="item-data" type="hidden" name="vars[1000]" value="Услуга">').prepend(f);
var d=$(b.currentTarget).closest(".item").find(".price").clone();
d.find("span").remove();
var a=d.text();
this.$block.find("div.form .form_fields").append('<input class="item-data" type="hidden" name="pay[price]" value="'+a+'">');
var c=$(b.currentTarget).closest(".item").find(".name").text();
this.$block.find("div.form .form_fields").append('<input class="item-data" type="hidden" name="pay[desc]" value="'+c+'">');
this.form.show()
},this))
},on_msg:function(a){switch(a){case"form_show":this.form.show();
break;
case"form_update":this.form.update();
break;
case"form_done_show":this.form.show_done();
break
}}});
spaced_cli.block.register(26,{on_init:function(){this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"});
this.$block.find(".form_btn a").on("click",$.proxy(function(b){this.$block.find("input.item-data").remove();
var f=$('<input class="item-data" type="hidden" name="form[1000]" value="">').val($(b.currentTarget).closest(".item").find(".name").text());
this.$block.find("div.form .form_fields").prepend('<input class="item-data" type="hidden" name="type[1000]" value="hidden">').prepend('<input class="item-data" type="hidden" name="vars[1000]" value="Услуга">').prepend(f);
var d=$(b.currentTarget).closest(".item").find(".price").clone();
d.find("span").remove();
var a=d.text();
this.$block.find("div.form .form_fields").append('<input class="item-data" type="hidden" name="pay[price]" value="'+a+'">');
var c=$(b.currentTarget).closest(".item").find(".name").text();
this.$block.find("div.form .form_fields").append('<input class="item-data" type="hidden" name="pay[desc]" value="'+c+'">');
this.form.show()
},this))
},on_msg:function(a){switch(a){case"form_show":this.form.show();
break;
case"form_update":this.form.update();
break;
case"form_done_show":this.form.show_done();
break
}}});
spaced_cli.block.register(27,{on_init:function(){this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"});
this.$block.find(".form_btn a").on("click",$.proxy(function(b){this.$block.find("input.item-data").remove();
var f=$('<input class="item-data" type="hidden" name="form[1000]" value="">').val($(b.currentTarget).closest(".item").find(".name").text());
this.$block.find("div.form .form_fields").prepend('<input class="item-data" type="hidden" name="type[1000]" value="hidden">').prepend('<input class="item-data" type="hidden" name="vars[1000]" value="Услуга">').prepend(f);
var d=$(b.currentTarget).closest(".item").find(".price").clone();
d.find("span").remove();
var a=d.text();
this.$block.find("div.form .form_fields").append('<input class="item-data" type="hidden" name="pay[price]" value="'+a+'">');
var c=$(b.currentTarget).closest(".item").find(".name").text();
this.$block.find("div.form .form_fields").append('<input class="item-data" type="hidden" name="pay[desc]" value="'+c+'">');
this.form.show()
},this))
},on_msg:function(a){switch(a){case"form_show":this.form.show();
break;
case"form_update":this.form.update();
break;
case"form_done_show":this.form.show_done();
break
}}});
spaced_cli.block.register(28,{on_init:function(){this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"});
this.$block.find(".form_btn a").on("click",$.proxy(function(b){this.$block.find("input.item-data").remove();
var f=$('<input class="item-data" type="hidden" name="form[1000]" value="">').val($(b.currentTarget).closest(".item").find(".name").text());
this.$block.find("div.form .form_fields").prepend('<input class="item-data" type="hidden" name="type[1000]" value="hidden">').prepend('<input class="item-data" type="hidden" name="vars[1000]" value="Услуга">').prepend(f);
var d=$(b.currentTarget).closest(".item").find(".price").clone();
d.find("span").remove();
var a=d.text();
this.$block.find("div.form .form_fields").append('<input class="item-data" type="hidden" name="pay[price]" value="'+a+'">');
var c=$(b.currentTarget).closest(".item").find(".name").text();
this.$block.find("div.form .form_fields").append('<input class="item-data" type="hidden" name="pay[desc]" value="'+c+'">');
this.form.show()
},this))
},on_msg:function(a){switch(a){case"form_show":this.form.show();
break;
case"form_update":this.form.update();
break;
case"form_done_show":this.form.show_done();
break
}}});
spaced_cli.block.register(29,{on_init:function(){this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_done_show":this.form.show_done();
break
}}});
spaced_cli.block.register(30,{on_init:function(){this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_done_show":this.form.show_done();
break
}}});
spaced_cli.block.register(31,{on_init:function(){this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_done_show":this.form.show_done();
break
}}});
spaced_cli.block.register(38,{});
spaced_cli.block.register(39,{});
spaced_cli.block.register(41,{on_init:function(){this.timer=spaced_cli.timer.create({id:this.id,block:this.$block,item:"div.timer"})
},on_msg:function(a){}});
spaced_cli.block.register(42,{on_init:function(){this.timer=spaced_cli.timer.create({id:this.id,block:this.$block,item:"div.timer"})
},on_msg:function(a){}});
spaced_cli.block.register(43,{on_init:function(){this.timer=spaced_cli.timer.create({id:this.id,block:this.$block,item:"div.timer"});
this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_done_show":this.form.show_done();
break
}}});
spaced_cli.block.register(44,{on_init:function(){this.timer=spaced_cli.timer.create({id:this.id,block:this.$block,item:"div.timer"});
this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_done_show":this.form.show_done();
break
}}});
spaced_cli.block.register(45,{on_init:function(){this.$block.on("mouseover mouseout",".item",$.proxy(function(d){var b=$(d.currentTarget);
var a=b.find(".overlay");
var c=75+15;
if(this.$block.find(".item_list").hasClass("hide_desc")){c=50+15
}if(d.type=="mouseover"){b.addClass("hover");
a.css("height",c+parseInt(a.find(".img_text").outerHeight())+"px")
}else{b.removeClass("hover");
a.attr("style","")
}},this))
},on_msg:function(c){var d=this.$block.find(".item.hover");
if(d.length>0){var b=75+15;
if(this.$block.find(".item_list").hasClass("hide_desc")){b=50+15
}var a=d.find(".overlay");
a.css("height",b+parseInt(a.find(".img_text").outerHeight())+"px")
}}});
spaced_cli.block.register(46,{js:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.pack.js"],css:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.css"],on_init:function(){this.fancybox()
},fancybox:function(){this.$block.find(".item a.img_big").each($.proxy(function(c,b){var a=$(b);
a.attr("data-fancybox-group","gallery_"+this.id);
a.fancybox({type:"image",openEffect:"fade",closeEffect:"fade",nextEffect:"fade",prevEffect:"fade",helpers:{title:{type:"inside"}}})
},this))
}});
spaced_cli.block.register(47,{js:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.pack.js"],css:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.css"],on_init:function(){this.fancybox()
},fancybox:function(){this.$block.find(".item a.img_big").each($.proxy(function(c,b){var a=$(b);
a.attr("data-fancybox-group","gallery_"+this.id);
a.fancybox({type:"image",openEffect:"fade",closeEffect:"fade",nextEffect:"fade",prevEffect:"fade",helpers:{title:{type:"inside"}}})
},this))
}});
spaced_cli.block.register(48,{js:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.pack.js","/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.js"],css:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.css"],on_init:function(){function c(){var f=window,d="inner";
if(!("innerWidth" in window)){d="client";
f=document.documentElement||document.body
}return{width:f[d+"Width"],height:f[d+"Height"]}
}var a=c();
var b=this.$block.find(".slider").flexbeSlider({controls:true,pager:true,slideMove:3,slideMargin:0,slideWidth:(a.width>=1200)?370:293});
$(window).on("resize",function(){a=c();
b.setSettings({slideMargin:0,slideWidth:(a.width>=1200)?370:293})
});
this.fancybox()
},fancybox:function(){this.$block.find(".item a.img_big").each($.proxy(function(c,b){var a=$(b);
a.attr("data-fancybox-group","gallery_"+this.id);
a.fancybox({type:"image",openEffect:"fade",closeEffect:"fade",nextEffect:"fade",prevEffect:"fade",helpers:{title:{type:"inside"}}})
},this))
}});
spaced_cli.block.register(49,{js:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.pack.js"],css:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.css"],on_init:function(){this.size_render();
this.fancybox()
},fancybox:function(){this.$block.find(".item a.img").each($.proxy(function(c,b){var a=$(b);
a.attr("data-fancybox-group","gallery_"+this.id);
a.fancybox({type:"image",openEffect:"fade",closeEffect:"fade",nextEffect:"fade",prevEffect:"fade",helpers:{title:{type:"inside"}}})
},this))
},size_render:function(){var g=this.$block.find(".item_list");
var d={item:".item",cols:3,margin:10,resizable:true};
function c(h){var i=g.find(".preview_img > img");
var j=i.length;
if(j==0){h()
}i.each(function(l,k){var m=new Image();
m.onload=function(n){j--;
if(j==0){h()
}h()
};
m.onerror=function(n){j--;
if(j==0){h()
}};
m.src=$(k).attr("src")
})
}function e(){g.css("position","relative");
var m=0;
var p,h,j,q,k,l,n=[];
k=parseInt(d.cols||3);
p=g.find(d.item);
h=g.outerWidth();
j=parseInt(d.margin||0);
q=parseInt(h/k)-j;
if(k==1){l=-j/2
}else{l=(h%(q+j))/2
}for(var o=0;
o<k;
o++){n.push(-j/2)
}p.each(function(t,u){var s=$(u);
var r=$.inArray(Math.min.apply(Math,n),n);
s.css({width:q,position:"absolute",margin:j/2,top:n[r]+j/2,left:(q+j)*r+l});
n[r]+=s.outerHeight()+j;
if(m<n[r]){m=n[r]
}});
g.css("height",m+parseInt(j/2))
}e();
c(function(){setTimeout(e,200)
});
if(d.resizable){var b=$(window).on("resize",function(){e()
});
g.on("remove",b.unbind)
}var f=0;
var a=setInterval(function(){e();
f++;
if(f>=50){clearInterval(a)
}},1000)
}});
spaced_cli.block.register(50,{js:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.pack.js"],css:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.css"],on_init:function(){this.$block.find(".item a.big_img").each($.proxy(function(c,b){var a=$(b);
a.attr("data-fancybox-group","gallery_"+this.id);
a.fancybox({type:"image",openEffect:"fade",closeEffect:"fade",nextEffect:"fade",prevEffect:"fade",helpers:{title:{type:"inside"}}})
},this))
}});
spaced_cli.block.register(51,{js:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.pack.js"],css:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.css"],on_init:function(){this.$block.find(".item a.big_img").each($.proxy(function(c,b){var a=$(b);
a.attr("data-fancybox-group","gallery_"+this.id);
a.fancybox({type:"image",openEffect:"fade",closeEffect:"fade",nextEffect:"fade",prevEffect:"fade",helpers:{title:{type:"inside"}}})
},this))
}});
spaced_cli.block.register(52,{js:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.pack.js"],css:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.css"],on_init:function(){this.$block.find(".item a.big_img").each($.proxy(function(c,b){var a=$(b);
a.attr("data-fancybox-group","gallery_"+this.id);
a.fancybox({type:"image",openEffect:"fade",closeEffect:"fade",nextEffect:"fade",prevEffect:"fade",helpers:{title:{type:"inside"}}})
},this))
}});
spaced_cli.block.register(53,{js:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.pack.js"],css:["/_s/lib/jquery/fancybox/2.1.0/jquery.fancybox.css"],on_init:function(){this.$block.find(".item a.big_img").each($.proxy(function(c,b){var a=$(b);
a.attr("data-fancybox-group","gallery_"+this.id);
a.fancybox({type:"image",openEffect:"fade",closeEffect:"fade",nextEffect:"fade",prevEffect:"fade",helpers:{title:{type:"inside"}}})
},this))
}});
spaced_cli.block.register(63,{form_is_init:false,on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block);
this.$block.find("a.btn").on("click",$.proxy(function(a){if($.inArray($(a.currentTarget).attr("data-action"),["link","file"])!==-1){return true
}else{this.form_init();
this.form.show()
}},this))
},form_init:function(){this.form_is_init=true;
this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_show":if(!this.form_is_init){this.form_init()
}this.form.show();
break;
case"form_update":if(this.form_is_init){this.form.update()
}break;
case"form_done_show":if(this.form_is_init){this.form.show_done()
}break
}}});
spaced_cli.block.register(64,{on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400,topOffset:100},this.$block)
}});
spaced_cli.block.register(65,{form_is_init:false,on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400,topOffset:1},this.$block);
this.$block.find("a.btn").on("click",$.proxy(function(a){if($.inArray($(a.currentTarget).attr("data-action"),["link","file"])!==-1){return true
}else{this.form_init();
this.form.show()
}},this))
},form_init:function(){this.form_is_init=true;
this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_show":if(!this.form_is_init){this.form_init()
}this.form.show();
break;
case"form_update":if(this.form_is_init){this.form.update()
}break;
case"form_done_show":if(this.form_is_init){this.form.show_done()
}break
}}});
spaced_cli.block.register(66,{form_is_init:false,on_init:function(){var a=this.$block.find(".menu");
var b=a.find("li").length;
if(b<5){a.css({position:"relative",top:"23px"})
}if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block);
this.$block.find("a.btn").on("click",$.proxy(function(c){if($.inArray($(c.currentTarget).attr("data-action"),["link","file"])!==-1){return true
}else{this.form_init();
this.form.show()
}},this))
},form_init:function(){this.form_is_init=true;
this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_show":if(!this.form_is_init){this.form_init()
}this.form.show();
break;
case"form_update":if(this.form_is_init){this.form.update()
}break;
case"form_done_show":if(this.form_is_init){this.form.show_done()
}break
}}});
spaced_cli.block.register(67,{on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block)
}});
spaced_cli.block.register(68,{on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block)
},on_msg:function(a){}});
spaced_cli.block.register(69,{on_init:function(){if(spaced_cli.run.is_mobile()){this.$block.find(".parallax").removeClass("parallax")
}}});
spaced_cli.block.register(70,{js:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],on_init:function(){var a=this;
var c=a.$block.find(".item_list").hasClass("slidered");
if(c){var b=a.$block.find(".slider");
a.slider=slider=b.lightSlider({item:2,slideMargin:50,useCSS:true,cssEasing:"ease-in-out",speed:600,adaptiveHeight:true,loop:false,auto:false,pause:4000,pauseOnHover:true,enableDrag:false,pager:false,controls:false,onAfterSlide:function(){a.$block.data("slide_count",a.slider.getCurrentSlideCount())
}});
$("#prev-75, #next-75").click(function(){var d=$(this);
clearTimeout(d.data("timeout"));
var e=setTimeout(function(){var h=2;
var f=b.find(".item").length-1;
var g=a.slider.getCurrentSlideCount()-(h-1);
var i;
if(d.hasClass("prev")){i=(g-h)<0?f:g-h;
if(i%2){--i
}a.slider.goToSlide(i)
}else{i=(g+h)>f?0:g+h;
a.slider.goToSlide(i)
}},250);
d.data("timeout",e)
})
}a.fixHeight()
},on_msg:function(c){var a=this;
if(a.slider){var b=a.$block.find(".slider");
setTimeout(function(){var d=2;
var e=a.$block.data("slide_count")||0;
if(e%2){--e
}if(c==="add"){a.slider.goToSlide(+e+d)
}else{if(c==="remove"){a.slider.goToSlide(+e-d)
}else{if(c==="change"){clearTimeout(b.data("change"));
b.data("change",setTimeout(function(){a.fixHeight();
a.slider.refresh()
},200))
}else{b.addClass("noanimate");
a.slider.goToSlide(e);
setTimeout(function(){b.removeClass("noanimate")
},500)
}}}},500)
}},fixHeight:function(){var h=this;
var g={};
var a;
var c=h.$block.find(".item");
c.each(function(){g[this.offsetTop]=g[this.offsetTop]||[];
g[this.offsetTop].push(this)
});
for(var f in g){var j=g[f];
var d=0;
$(".item_data",j).css("min-height",0);
if(j.length<=1){continue
}for(var b=0;
b<j.length;
b++){var e=$(".item_data",j[b]).outerHeight();
d=(d<e)?e:d
}$(".item_data",j).css("min-height",d)
}}});
spaced_cli.block.register(71,{js:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],on_init:function(){var a=this;
var b=a.$block.find(".slider");
a.slider=b.lightSlider({item:1,slideMargin:0,useCSS:true,adaptiveHeight:true,loop:true,auto:b.data("slideshow"),pause:4000,pauseOnHover:true,enableDrag:false,prevHtml:'<div class="button"></div>',nextHtml:'<div class="button"></div>',onAfterSlide:function(){a.$block.data("slide_count",a.slider.getCurrentSlideCount())
}})
},on_msg:function(c){var a=this;
if(a.slider){var b=a.$block.find(".slider");
setTimeout(function(){var e=1;
var f=a.$block.data("slide_count")||0;
var d=b.find(".lslide").length;
if(c==="add"){a.slider.goToSlide(d)
}else{if(c==="remove"){a.slider.goToSlide(+f-e)
}else{if(c==="change"){}else{b.addClass("noanimate");
a.slider.goToSlide(f);
setTimeout(function(){b.removeClass("noanimate")
},500)
}}}},500)
}}});
spaced_cli.block.register(72,{js:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],on_init:function(){var a=this;
var b=a.$block.find(".slider");
a.slider=b.lightSlider({item:1,slideMargin:0,useCSS:true,adaptiveHeight:true,loop:true,auto:b.data("slideshow"),pause:4000,pauseOnHover:true,enableDrag:false,prevHtml:'<div class="button"></div>',nextHtml:'<div class="button"></div>',onAfterSlide:function(){a.$block.data("slide_count",a.slider.getCurrentSlideCount())
}})
},on_msg:function(c){var a=this;
if(a.slider){var b=a.$block.find(".slider");
setTimeout(function(){var e=1;
var f=a.$block.data("slide_count")||0;
var d=b.find(".lslide").length;
if(c==="add"){a.slider.goToSlide(d)
}else{if(c==="remove"){a.slider.goToSlide(+f-e)
}else{if(c==="change"){}else{b.addClass("noanimate");
a.slider.goToSlide(f);
setTimeout(function(){b.removeClass("noanimate")
},500)
}}}},500)
}}});
spaced_cli.block.register(73,{css:["/_s/css/land/socials.css"],on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block)
}});
spaced_cli.block.register(74,{on_init:function(){this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_done_show":this.form.show_done();
break
}}});
spaced_cli.block.register(75,{js:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],css:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.css"],on_init:function(){var a=this;
a.row=1;
var c=a.$block.find(".item_list").hasClass("slidered");
if(c&!spaced_cli.is_admin){var b=a.$block.find(".slider");
a.slider=b.lightSlider({item:a.row,slideMargin:0,useCSS:true,cssEasing:"ease-in-out",speed:1000,adaptiveHeight:true,mode:"fade",loop:true,enableDrag:false,pager:true,controls:false,onBeforeSlide:function(){var e=a.slider.getCurrentSlideCount();
a.$block.data("slide_count",e);
var d=a.$block.find(".slider_pager");
if(e%2){d.removeClass("odd")
}else{d.addClass("odd")
}}});
b.data("slider",a.slider);
a.slideShow();
a.fixHeight()
}},slideShow:function(){var a=this;
var b={};
var d=a.$block.find(".slider");
var c=d.parents(".item_list");
b.init=function(){var f=[$(document).scrollTop(),$(document).scrollTop()+$(window).height()];
var e=[c.offset().top,c.offset().top+c.height()];
if(a.inRange(e,f)){b.startSlideshow();
b.onHover()
}else{b.stopSlideshow()
}};
b.startSlideshow=function(){if(!d.data("playTimeout")){d.data("playTimeout",setInterval(function(){a.slider.goToNextSlide()
},5000))
}};
b.stopSlideshow=function(){clearInterval(d.data("playTimeout"));
d.data("playTimeout","")
};
b.onHover=function(){d.off("hover");
d.hover(function(){b.stopSlideshow()
},function(){b.startSlideshow()
})
};
$(document).on("scroll",function(){b.init()
});
b.init()
},inRange:function(c,a){for(var b=c[0];
b<=c[1];
b++){if(b>=a[0]&&b<=a[1]){return true
}}return false
},fixHeight:function(){var b=this;
var a=[];
var f;
var g=b.$block.find(".item");
var d=0;
g.each(function(){a.push(this)
});
$(".item_data",a).css("height",0);
for(var c=0;
c<a.length;
c++){var e=$(".item_data",a[c]).outerHeight();
d=(d<e)?e:d
}$(".item_data",a).css("height",d)
},on_msg:function(a){}});
spaced_cli.block.register(76,{js:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],css:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.css"],on_init:function(){var a=this;
a.row=1;
var b=a.$block.find(".slider");
a.slider=b.lightSlider({item:a.row,slideMargin:0,useCSS:true,cssEasing:"ease-in-out",speed:400,adaptiveHeight:true,mode:"slide",loop:false,enableDrag:false,pager:false,controls:true,onSliderLoad:function(){a.setPager()
},onBeforeSlide:function(){a.setPager()
},onAfterSlide:function(){a.$block.data("slide_count",a.slider.getCurrentSlideCount()-1)
}});
a.controlKeys("#prev-76, #next-76");
a.pagerClick(".page-item")
},controlKeys:function(b){var a=this;
var c=a.$block.find(".slider");
$(b).click(function(){var d=$(this);
clearTimeout(d.data("timeout"));
var e=setTimeout(function(){var f=c.find(".item.slide-item").length-1;
var g=a.slider.getCurrentSlideCount()-1;
var h;
if(d.hasClass("prev")){h=(g-a.row)<0?f:g-a.row;
a.slider.goToSlide(h)
}else{h=(g+a.row)>f?0:g+a.row;
a.slider.goToSlide(h)
}},250);
d.data("timeout",e)
})
},setPager:function(){var a=this;
var b=a.$block.find(".slider");
var c=a.slider.getCurrentSlideCount();
$(".slider-pager .page-item").removeClass("active");
$(".slider-pager .page-item[data-item-id="+c+"]").addClass("active")
},pagerClick:function(b){var a=this;
$(b).on("click",function(){var c=$(this).data("itemId")-1;
a.slider.goToSlide(c)
})
},on_msg:function(c){var a=this;
if(a.slider){var b=a.$block.find(".slider");
setTimeout(function(){var e=+a.$block.data("slide_count")||0;
var d=b.find(".lslide").length;
if(c==="add"){a.slider.goToSlide(e+a.row)
}else{if(c==="remove"){a.slider.goToSlide((e-a.row<0)?0:e-a.row)
}else{if(c==="change"){a.slider.refresh()
}else{b.addClass("noanimate");
a.slider.goToSlide(e);
setTimeout(function(){b.removeClass("noanimate")
},500)
}}}},500)
}}});
spaced_cli.block.register(77,{js:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],css:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.css"],on_init:function(){var a=this;
a.row=1;
var b=a.$block.find(".slider");
a.slider=b.lightSlider({item:a.row,slideMargin:0,useCSS:true,cssEasing:"ease-in-out",speed:400,adaptiveHeight:true,mode:"slide",loop:false,enableDrag:false,pager:false,controls:true,onSliderLoad:function(){a.setPager()
},onBeforeSlide:function(){a.setPager()
},onAfterSlide:function(){a.$block.data("slide_count",a.slider.getCurrentSlideCount()-1)
}});
a.controlKeys("#prev-77, #next-77");
a.pagerClick(".page-item")
},controlKeys:function(b){var a=this;
var c=a.$block.find(".slider");
$(b).click(function(){var d=$(this);
clearTimeout(d.data("timeout"));
var e=setTimeout(function(){var f=c.find(".item").length-1;
var g=a.slider.getCurrentSlideCount()-1;
var h;
if(d.hasClass("prev")){h=(g-a.row)<0?f:g-a.row;
a.slider.goToSlide(h)
}else{h=(g+a.row)>f?0:g+a.row;
a.slider.goToSlide(h)
}},250);
d.data("timeout",e)
})
},setPager:function(){var a=this;
var b=a.$block.find(".slider");
var c=a.slider.getCurrentSlideCount();
$(".slider-pager .page-item").removeClass("active");
$(".slider-pager .page-item[data-item-id="+c+"]").addClass("active")
},pagerClick:function(b){var a=this;
$(b).on("click",function(){var c=$(this).data("itemId")-1;
a.slider.goToSlide(c)
})
},on_msg:function(c){var a=this;
if(a.slider){var b=a.$block.find(".slider");
setTimeout(function(){var e=+a.$block.data("slide_count")||0;
var d=b.find(".lslide").length;
if(c==="add"){a.slider.goToSlide(e+a.row)
}else{if(c==="remove"){a.slider.goToSlide((e-a.row<0)?0:e-a.row)
}else{if(c==="change"){a.slider.refresh()
}else{b.addClass("noanimate");
a.slider.goToSlide(e);
setTimeout(function(){b.removeClass("noanimate")
},500)
}}}},500)
}}});
spaced_cli.block.register(78,{js:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],css:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.css"],on_init:function(){var a=this;
a.row=1;
var b=a.$block.find(".slider");
a.slider=slider=b.lightSlider({item:a.row,slideMargin:0,useCSS:true,cssEasing:"ease-in-out",speed:400,adaptiveHeight:true,mode:"slide",loop:false,enableDrag:false,pager:false,controls:true,onAfterSlide:function(){a.$block.data("slide_count",a.slider.getCurrentSlideCount()-1)
}});
a.controlKeys("#prev-78, #next-78")
},controlKeys:function(b){var a=this;
var c=a.$block.find(".slider");
$(b).click(function(){var d=$(this);
clearTimeout(d.data("timeout"));
var e=setTimeout(function(){var f=c.find(".item").length-1;
var g=a.slider.getCurrentSlideCount()-1;
var h;
if(d.hasClass("prev")){h=(g-a.row)<0?f:g-a.row;
a.slider.goToSlide(h)
}else{h=(g+a.row)>f?0:g+a.row;
a.slider.goToSlide(h)
}},250);
d.data("timeout",e)
})
},on_msg:function(c){var a=this;
if(a.slider){var b=a.$block.find(".slider");
setTimeout(function(){var e=+a.$block.data("slide_count")||0;
var d=b.find(".lslide").length;
if(c==="add"){a.slider.goToSlide(e+a.row)
}else{if(c==="remove"){a.slider.goToSlide((e-a.row<0)?0:e-a.row)
}else{if(c==="change"){a.slider.refresh()
}else{b.addClass("noanimate");
a.slider.goToSlide(e);
setTimeout(function(){b.removeClass("noanimate")
},500)
}}}},500)
}}});
spaced_cli.block.register(79,{js:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],css:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.css"],on_init:function(){var a=this;
a.row=1;
var b=a.$block.find(".slider");
a.slider=slider=b.lightSlider({item:a.row,slideMargin:0,useCSS:true,cssEasing:"ease-in-out",speed:400,adaptiveHeight:true,mode:"slide",loop:false,enableDrag:false,pager:false,controls:true,onAfterSlide:function(){a.$block.data("slide_count",a.slider.getCurrentSlideCount()-1)
}});
a.controlKeys("#prev-79, #next-79")
},controlKeys:function(b){var a=this;
var c=a.$block.find(".slider");
$(b).click(function(){var d=$(this);
clearTimeout(d.data("timeout"));
var e=setTimeout(function(){var f=c.find(".item").length-1;
var g=a.slider.getCurrentSlideCount()-1;
var h;
if(d.hasClass("prev")){h=(g-a.row)<0?f:g-a.row;
a.slider.goToSlide(h)
}else{h=(g+a.row)>f?0:g+a.row;
a.slider.goToSlide(h)
}},250);
d.data("timeout",e)
})
},on_msg:function(c){var a=this;
if(a.slider){var b=a.$block.find(".slider");
setTimeout(function(){var e=+a.$block.data("slide_count")||0;
var d=b.find(".lslide").length;
if(c==="add"){a.slider.goToSlide(e+a.row)
}else{if(c==="remove"){a.slider.goToSlide((e-a.row<0)?0:e-a.row)
}else{if(c==="change"){a.slider.refresh()
}else{b.addClass("noanimate");
a.slider.goToSlide(e);
setTimeout(function(){b.removeClass("noanimate")
},500)
}}}},500)
}}});
spaced_cli.block.register(80,{css:["/_s/css/land/socials.css"],on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block)
}});
spaced_cli.block.register(81,{css:["/_s/css/land/socials.css"],on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block)
}});
spaced_cli.block.register(82,{css:["/_s/css/land/socials.css"],on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block)
}});
spaced_cli.block.register(83,{css:["/_s/css/land/socials.css"],on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block)
}});
spaced_cli.block.register(84,{css:["/_s/css/land/socials.css"],on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block)
}});
spaced_cli.block.register(85,{css:["/_s/css/land/socials.css"],on_init:function(){}});
spaced_cli.block.register(86,{css:["/_s/css/land/socials.css"],on_init:function(){}});
spaced_cli.block.register(87,{css:["/_s/css/land/socials.css"],on_init:function(){}});
spaced_cli.block.register(88,{css:["/_s/css/land/socials.css"],on_init:function(){}});
spaced_cli.block.register(89,{css:["/_s/css/land/socials.css"],on_init:function(){}});
spaced_cli.block.register(90,{css:["/_s/css/land/socials.css"],on_init:function(){}});
spaced_cli.block.register(91,{form_is_init:false,on_init:function(){this.$block.find("a.btn").on("click",$.proxy(function(a){if($.inArray($(a.currentTarget).attr("data-action"),["link","file"])!==-1){return true
}else{this.form_init();
this.form.show()
}},this))
},form_init:function(){this.form_is_init=true;
this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_show":if(!this.form_is_init){this.form_init()
}this.form.show();
break;
case"form_update":if(this.form_is_init){this.form.update()
}break;
case"form_done_show":if(this.form_is_init){this.form.show_done()
}break
}}});
spaced_cli.block.register(92,{form_is_init:false,on_init:function(){this.$block.find("a.btn").on("click",$.proxy(function(a){if($.inArray($(a.currentTarget).attr("data-action"),["link","file"])!==-1){return true
}else{this.form_init();
this.form.show()
}},this))
},form_init:function(){this.form_is_init=true;
this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_show":if(!this.form_is_init){this.form_init()
}this.form.show();
break;
case"form_update":if(this.form_is_init){this.form.update()
}break;
case"form_done_show":if(this.form_is_init){this.form.show_done()
}break
}}});
spaced_cli.block.register(93,{form_is_init:false,on_init:function(){this.$block.find("a.btn").on("click",$.proxy(function(a){if($.inArray($(a.currentTarget).attr("data-action"),["link","file"])!==-1){return true
}else{this.form_init();
this.form.show()
}},this))
},form_init:function(){this.form_is_init=true;
this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_show":if(!this.form_is_init){this.form_init()
}this.form.show();
break;
case"form_update":if(this.form_is_init){this.form.update()
}break;
case"form_done_show":if(this.form_is_init){this.form.show_done()
}break
}}});
spaced_cli.block.register(94,{on_init:function(){this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_done_show":this.form.show_done();
break
}}});
spaced_cli.block.register(95,{on_init:function(){this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_done_show":this.form.show_done();
break
}}});
spaced_cli.block.register(96,{on_init:function(){this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_done_show":this.form.show_done();
break
}}});
spaced_cli.block.register(97,{form_is_init:false,on_init:function(){this.$block.find("a.btn").on("click",$.proxy(function(a){if($.inArray($(a.currentTarget).attr("data-action"),["link","file"])!==-1){return true
}else{this.form_init();
this.form.show()
}},this))
},form_init:function(){this.form_is_init=true;
this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_show":if(!this.form_is_init){this.form_init()
}this.form.show();
break;
case"form_update":if(this.form_is_init){this.form.update()
}break;
case"form_done_show":if(this.form_is_init){this.form.show_done()
}break
}}});
spaced_cli.block.register(98,{form_is_init:false,on_init:function(){this.$block.find("a.btn").on("click",$.proxy(function(a){if($.inArray($(a.currentTarget).attr("data-action"),["link","file"])!==-1){return true
}else{this.form_init();
this.form.show()
}},this))
},form_init:function(){this.form_is_init=true;
this.form=spaced_cli.form.create({modal:true,id:this.id,block:this.$block,form:"div.form",form_done:"div.form_done"})
},on_msg:function(a){switch(a){case"form_show":if(!this.form_is_init){this.form_init()
}this.form.show();
break;
case"form_update":if(this.form_is_init){this.form.update()
}break;
case"form_done_show":if(this.form_is_init){this.form.show_done()
}break
}}});