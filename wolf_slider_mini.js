wolfslider=function(el,aj,ak,o){var a=document.getElementById(el).children[0],b=document.getElementById(el).children[0].children,c=(b.length-1),f=0,g,h,j,k,l;o ={s:function(){a.insertBefore(a.children[c],a.children[0]);},t:function(){a.insertBefore(a.children[0],a.children[c].nextSibling);},p:function(){m=document.getElementById(el).offsetWidth;n=document.getElementById(el).offsetHeight;},u:function(){o.p();if(wolf_options.vertical_scroll == false){q="translate3d("+m+"px,"+0+"px,0)";r="translate3d(-"+m/2+"px,"+0+"px,0)";} else if(wolf_options.vertical_scroll == true){q="translate3d("+0+"px,"+n+"px,0)";r="translate3d("+0+"px,-"+n/2+"px,0)";};},v:function(){o.p();a.style.width=m+"px";a.style.height=n+"px";for(var i=0;i<b.length;i++){b[i].style.transitionDuration="0s";b[i].style.width=m+"px";b[i].style.height=n+"px";};},w:function(){for(var i=0;i<b.length;i++){b[i].style.zIndex="-1";b[i].style.transform="translate3d(0 ,0,0)";};},init:function(){o.u();b[1].style.zIndex="50";b[2].style.visibility="visible";b[2].style.zIndex="100";b[0].style.transform=r;b[2].style.transform=q;},x:function(){o.u();b[2].style.zIndex="100";b[2].style.transitionDuration=wolf_options.transition_time+"ms";b[2].style.transform="translate3d(0,0,0)";b[1].style.zIndex="50";b[1].style.transitionDuration=wolf_options.transition_time+"ms";b[1].style.transform=r;b[3].style.zIndex="0";b[3].style.transitionDuration="0s";b[3].style.transform=q;o.t();b[c].style.zIndex="0";b[c].style.transitionDuration="0s";b[c].style.transform="translate3d(0,0,0)";},y:function(){o.u();b[1].style.zIndex="100";b[1].style.transitionDuration=wolf_options.transition_time+"ms";b[1].style.transform=q;b[c].style.zIndex="0";b[c].style.transitionDuration="0s";b[c].style.transform=r;b[0].style.zIndex="50";b[0].style.transitionDuration=wolf_options.transition_time+"ms";b[0].style.transform="translate3d(0,0,0)";o.s();b[3].style.zIndex="0";b[3].style.transitionDuration="0s";b[3].style.transform="translate3d(0,0,0)";},aa:function(){var ag=(new Date()).getTime();if(ag > (f + wolf_options.transition_time)){o.x();} else{return;};f=ag;},ab:function(){var ag=(new Date()).getTime();if(ag > (f + wolf_options.transition_time)){o.y();} else{return;};f=ag;}}; ah ={ac:function(){document.getElementById(aj).addEventListener("click",function (e){e.preventDefault();o.aa();},false);},ad:function(){document.getElementById(ak).addEventListener("click",function (e){e.preventDefault();o.ab();},false);},ae:function(){window.addEventListener("resize",function (){o.v();o.w();o.init();},false);},af:function(){a.addEventListener('touchstart',function(e){e.preventDefault();var touchobj=e.changedTouches[0];j=0;g=touchobj.pageX;h=touchobj.pageY;l=new Date().getTime();},false);a.addEventListener('touchmove',function(e){e.preventDefault();},false);a.addEventListener('touchend',function(e){e.preventDefault();var touchobj=e.changedTouches[0];j=touchobj.pageX-g;k=new Date().getTime()-l; if(k <= wolf_options.allowedTime && j >= wolf_options.threshold && (touchobj.pageY-h) <= 100){o.ab();};if(k <= wolf_options.allowedTime && j <= (-wolf_options.threshold) && (touchobj.pageY-h) <= 100){o.aa();};},false);},ai:function(){a.addEventListener('mousewheel',function(e){var wDelta=e.wheelDelta;if(wDelta > 0){o.aa();} else{o.ab();};},false);}};o.v();o.w();o.s();o.init();ah.ac();ah.ad();ah.ae();if(wolf_options.mouse_scrolling == true){ah.ai();};if(wolf_options.touch_scrolling == true){ah.af();}};
