"use strict";function initSwiper(){new Swiper(".swiper-container",{direction:"horizontal",loop:!0,autoplay:{disableOnInteraction:!1},speed:800,observer:!0,observeParents:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".right-arrow",prevEl:".left-arrow"}})}function globalScroll(o){windowTop=$(window).scrollTop();var t;t=windowTop>oldTop?"down":"up",windowTop>100?($("header").hide(),$(".quick-nav").show()):($("header").show(),$(".quick-nav").hide()),$("[data-scroll]").each(function(o,i){var n=$(i);windowTop+height>=n.offset().top&&n.addClass("active").find("*").addClass("active"),"up"==t?n.find("*").removeClass("down").addClass("up"):n.find("*").removeClass("up").addClass("down")}),oldTop=windowTop}var windowTop=0,oldTop=0,height,width,scrollDistance=0;$(function(){function o(){height=$(window).height(),o=$("body").width();var o=$(window).width();o<768&&$.browser.mobile?$("[data-src].m-show").each(function(o,t){$(t).attr("src",$(t).data("src"))}):($("[data-src].pc-show").each(function(o,t){$(t).attr("src",$(t).data("src"))}),$("[data-pc-bg]").each(function(o,t){$(t).css({"background-image":"url('"+$(t).data("pc-bg")+"')"})})),$("[data-font-size]").css("font-size",o/2560*100),setTimeout(function(){window.notFontSize||$("*:not([data-not-font-size])").each(function(){var o=$(this);parseInt(o.css("fontSize"))<12&&o.css({"font-size":"12px"})})})}$("#nav-btn").on("click",function(){return $(this).toggleClass("act"),$("#nav").toggleClass("show"),$("html, body").hasClass("scroll-lock")?$("html, body").removeClass("scroll-lock").scrollTop(scrollDistance):(scrollDistance=$(window).scrollTop(),$("html, body").addClass("scroll-lock").css("top",-scrollDistance)),!1}),$("body").click(function(){$("#nav-btn").removeClass("act"),$("#nav").removeClass("show"),$("html, body").hasClass("scroll-lock")&&$("html, body").removeClass("scroll-lock").scrollTop(scrollDistance)}),$("#nav>ul>li").hover(function(){$(this).find("ul").length>0&&("Аксессуары"===$(this).find("a").eq(0).text()?($(".second-nav-bg").show().css({height:"170px"}),$(this).find("ul").stop().animate({height:200})):($(".second-nav-bg").show(),$(this).find("ul li").length>10?($(this).find("ul").stop().animate({height:250}),$(".second-nav-bg").height("250px")):($(this).find("ul").stop().animate({height:140}),$(".second-nav-bg").height("140px"))))},function(){$(".second-nav-bg").hide(),$(this).find("ul").stop().animate({height:0})}),$("a").click(function(o){var t=$(this).attr("href");if(t&&t.match(/#/g)){o.preventDefault();var i=location.href;i.indexOf("#")>-1&&(i=i.substring(0,i.indexOf("#"))),location.href=i+$(this).attr("href")}}),$("#wechat").on("mouseenter",function(){$(this).find("img").stop().fadeIn()}).on("mouseleave",function(){$(this).find("img").stop().fadeOut()}),$(window).resize(o),o(),$.browser.mobile?$("body").addClass("mobile"):$("body").addClass("pc"),$("[data-href]").click(function(){location.href=$(this).data("href")}),$("#loading").hide(),$(".quick-nav ul a").click(function(o){if(!$(this).parent().hasClass("strap-buy")){var t=$(this).attr("href"),i=$(t).offset().top-60;$("html, body").stop().animate({scrollTop:i},"normal","swing"),o.preventDefault()}})});