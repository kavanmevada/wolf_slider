wolf_options={vertical_scroll:!1,transition_time:900,mouse_scrolling:!0,touch_scrolling:!1,threshold:150,allowedTime:500},wolfslider=function(a,b,c,d){for(var i,j,k,l,m,e=document.getElementById(a).children[0],f=document.getElementById(a).children[0].children,g=f.length-1,h=0,n=1;n<f.length;n++)for(var o=0;o<f[n].children.length;o++)f[n].children[o].style.opacity="0";d={movefirst_last:function(){e.insertBefore(e.children[g],e.children[0])},movelast_first:function(){e.insertBefore(e.children[0],e.children[g].nextSibling)},reset_dimen:function(){slide_w=document.getElementById(a).offsetWidth,slide_h=document.getElementById(a).offsetHeight},check_sliding_dir:function(){d.reset_dimen(),0==wolf_options.vertical_scroll?(ini_slide_position="translate3d("+slide_w+"px, 0px, 0)",end_slide_position="translate3d(-"+slide_w/2+"px, 0px, 0)"):1==wolf_options.vertical_scroll&&(ini_slide_position="translate3d(0px, "+slide_h+"px, 0)",end_slide_position="translate3d(0px, -"+slide_h+"px, 0)")},setupFrame:function(){d.reset_dimen(),e.style.width=slide_w+"px",e.style.height=slide_h+"px";for(var a=0;a<f.length;a++)f[a].style.transitionDuration="0s",f[a].style.width=slide_w+"px",f[a].style.height=slide_h+"px"},arrangeSlides:function(){for(var a=0;a<f.length;a++)f[a].style.zIndex="-1",f[a].style.transform="translate3d(0 , 0, 0)"},init:function(){d.check_sliding_dir(),f[1].style.zIndex="50",f[2].style.visibility="visible",f[2].style.zIndex="100",f[0].style.transform=end_slide_position,f[2].style.transform=ini_slide_position},next_slide:function(){d.check_sliding_dir(),f[2].style.zIndex="100",f[2].style.transitionDuration=wolf_options.transition_time+"ms",f[2].style.transform="translate3d(0, 0, 0)",setTimeout(function(){f[1].classList.add("active");for(var a=0;a<f[1].children.length;a++)f[1].children[a].style.opacity="1"},wolf_options.transition_time),f[1].style.zIndex="50",f[1].style.transitionDuration=wolf_options.transition_time+"ms",f[1].style.transform=end_slide_position,f[1].classList.remove("active");for(var a=0;a<f[1].children.length;a++)f[1].children[a].style.opacity="0";f[3].style.zIndex="0",f[3].style.transitionDuration="0s",f[3].style.transform=ini_slide_position,d.movelast_first(),f[g].style.zIndex="0",f[g].style.transitionDuration="0s",f[g].style.transform="translate3d(0, 0, 0)"},prev_slide:function(){d.check_sliding_dir(),f[1].style.zIndex="100",f[1].style.transitionDuration=wolf_options.transition_time+"ms",f[1].style.transform=ini_slide_position,f[1].classList.remove("active");for(var a=0;a<f[1].children.length;a++)f[1].children[a].style.opacity="0";f[g].style.zIndex="0",f[g].style.transitionDuration="0s",f[g].style.transform=end_slide_position,f[0].style.zIndex="50",f[0].style.transitionDuration=wolf_options.transition_time+"ms",f[0].style.transform="translate3d(0, 0, 0)",setTimeout(function(){f[1].classList.add("active");for(var a=0;a<f[1].children.length;a++)f[1].children[a].style.opacity="1"},wolf_options.transition_time),d.movefirst_last(),f[3].style.zIndex="0",f[3].style.transitionDuration="0s",f[3].style.transform="translate3d(0, 0, 0)"},next_pause:function(){var a=(new Date).getTime();a>h+wolf_options.transition_time&&(d.next_slide(),h=a)},prev_pause:function(){var a=(new Date).getTime();a>h+wolf_options.transition_time&&(d.prev_slide(),h=a)}},defaults={slide_next:function(){document.getElementById(b).addEventListener("click",function(a){a.preventDefault(),d.next_pause()},!1)},slide_prev:function(){document.getElementById(c).addEventListener("click",function(a){a.preventDefault(),d.prev_pause()},!1)},r_set:function(){window.addEventListener("resize",function(){d.setupFrame(),d.arrangeSlides(),d.init()},!1)},touch_func:function(){e.addEventListener("touchstart",function(a){a.preventDefault();var b=a.changedTouches[0];k=0,i=b.pageX,j=b.pageY,m=(new Date).getTime()},!1),e.addEventListener("touchmove",function(a){a.preventDefault()},!1),e.addEventListener("touchend",function(a){a.preventDefault();var b=a.changedTouches[0];k=b.pageX-i,l=(new Date).getTime()-m,l<=wolf_options.allowedTime&&k>=wolf_options.threshold&&b.pageY-j<=100&&d.prev_pause(),l<=wolf_options.allowedTime&&k<=-wolf_options.threshold&&b.pageY-j<=100&&d.next_pause()},!1)},mouse_wheel_func:function(){e.addEventListener("mousewheel",function(a){var b=a.wheelDelta;b>0?d.next_pause():d.prev_pause()},!1)}},d.setupFrame(),d.arrangeSlides(),d.movefirst_last(),d.init(),defaults.slide_next(),defaults.slide_prev(),defaults.r_set(),1==wolf_options.mouse_scrolling&&defaults.mouse_wheel_func(),1==wolf_options.touch_scrolling&&defaults.touch_func()};
