(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};!function(){if("Promise"in window){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),s=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),i=location.href.replace(/#[^#]+$/,"");o.add(i);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(s){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var i=new XMLHttpRequest;i.open("GET",t,i.withCredentials=!0),i.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},l={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},l),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},l)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src';var e=document.querySelector('.js2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/3-376.png':'images/3-188.png');
var a='data-src';var e=document.querySelector('.js3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/1-376.png':'images/1-188.png');
var a='data-src';var e=document.querySelector('.js4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/1436281700_male3-376.png':'images/1436281700_male3-188.png');
var a='data-src';var e=document.querySelector('.js5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/calmer-head-c-308.png':'images/calmer-head-c-154.png');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/calmer-head-c-314.png':'images/calmer-head-c-157.png');}else if($(window).width()>=960){var a='data-src';var e=document.querySelector('.js2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/3-300.png':'images/3-150.png');
var a='data-src';var e=document.querySelector('.js3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/1-300.png':'images/1-150.png');
var a='data-src';var e=document.querySelector('.js4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/1436281700_male3-300.png':'images/1436281700_male3-150.png');
var a='data-src';var e=document.querySelector('.js5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/calmer-head-c-246.png':'images/calmer-head-c-123.png');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/calmer-head-c-252.png':'images/calmer-head-c-126-1.png');}else if($(window).width()>=768){var a='data-src';var e=document.querySelector('.js2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/3-240.png':'images/3-120.png');
var a='data-src';var e=document.querySelector('.js3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/1-240.png':'images/1-120.png');
var a='data-src';var e=document.querySelector('.js4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/1436281700_male3-240.png':'images/1436281700_male3-120.png');
var a='data-src';var e=document.querySelector('.js5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/calmer-head-c-196.png':'images/calmer-head-c-98.png');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/calmer-head-c-202.png':'images/calmer-head-c-101.png');}else if($(window).width()>=480){var a='data-src';var e=document.querySelector('.js2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/3-312.png':'images/3-156.png');
var a='data-src';var e=document.querySelector('.js3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/1-312.png':'images/1-156.png');
var a='data-src';var e=document.querySelector('.js4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/1436281700_male3-312.png':'images/1436281700_male3-156.png');
var a='data-src';var e=document.querySelector('.js5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/calmer-head-c-124.png':'images/calmer-head-c-62.png');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/calmer-head-c-126.png':'images/calmer-head-c-63.png');}else{var a='data-src';var e=document.querySelector('.js2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/3-208.png':'images/3-104.png');
var a='data-src';var e=document.querySelector('.js3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/1-208.png':'images/1-104.png');
var a='data-src';var e=document.querySelector('.js4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/1436281700_male3-208.png':'images/1436281700_male3-104.png');
var a='data-src';var e=document.querySelector('.js5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/calmer-head-c-82.png':'images/calmer-head-c-41.png');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/calmer-head-c-84.png':'images/calmer-head-c-42.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
initMenu($('#m2')[0]);
initMenu($('#m3')[0]);
ldsrc('.js2');ldsrcset('.js26 source');ldsrc('.js3');ldsrcset('.js27 source');ldsrc('.js4');ldsrcset('.js28 source');ldsrc('.js5');ldsrcset('.js29 source');$('.c25').Stickyfill();

});