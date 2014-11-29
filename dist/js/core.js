/*! 
 * Formstone v0.0.1 - 2014-11-29 
 * Library of modular javascript components. 
 * http://formstone.it/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */

/*! 
 * Formstone v0.0.1 - 2014-11-29 
 * Library of modular javascript components. 
 * http://formstone.it/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */

/*! 
 * Formstone v0.0.1 - 2014-11-29 
 * Library of modular javascript components. 
 * http://formstone.it/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */

/*! 
 * Formstone v0.0.1 - 2014-11-29 
 * Library of modular javascript components. 
 * http://formstone.it/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */

var Formstone=this.Formstone=function(a,b,c){"use strict";function d(a,b,c,d){var e,f={};d=d||{};for(e in d)d.hasOwnProperty(e)&&("classes"===a?f[d[e]]=b+"-"+d[e]:f[e]=d[e]+"."+b);for(e in c)c.hasOwnProperty(e)&&(f[e]=c[e].replace(/{ns}/g,b));return f}function e(){var a={transition:"transitionend",MozTransition:"transitionend",OTransition:"otransitionend",WebkitTransition:"webkitTransitionEnd"},b="transitionend",d=c.createElement("div");for(var e in a)a.hasOwnProperty(e)&&e in d.style&&(b=a[e],g.support.transition=!0);return b}var f=function(){this.Plugins={},this.$window=a(b),this.$document=a(c),this.$body=null,this.userAgent=b.navigator.userAgent||b.navigator.vendor||b.opera,this.isFirefox=/Firefox/i.test(this.userAgent),this.isChrome=/Chrome/i.test(this.userAgent),this.isSafari=/Safari/i.test(this.userAgent)&&!this.isChrome,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent),this.isFirefoxMobile=this.isFirefox&&this.isMobile,this.support={file:!!(b.File&&b.FileList&&b.FileReader),history:!!(b.history&&b.history.pushState&&b.history.replaceState),matchMedia:!(!b.matchMedia&&!b.msMatchMedia),raf:!(!b.requestAnimationFrame||!b.cancelAnimationFrame),touch:!!("ontouchstart"in b||b.DocumentTouch&&c instanceof b.DocumentTouch),transition:!1}},g=new f,h={base:"{ns}",element:"{ns}-element"},i={namespace:".{ns}",blur:"blur.{ns}",change:"change.{ns}",click:"click.{ns}",dblClick:"dblclick.{ns}",drag:"drag.{ns}",dragEnd:"dragend.{ns}",dragEnter:"dragenter.{ns}",dragLeave:"dragleave.{ns}",dragOver:"dragover.{ns}",dragStart:"dragstart.{ns}",drop:"drop.{ns}",error:"error.{ns}",focus:"focus.{ns}",focusIn:"focusin.{ns}",focusOut:"focusout.{ns}",input:"input.{ns}",keyDown:"keydown.{ns}",keyPress:"keypress.{ns}",keyUp:"keyup.{ns}",load:"load.{ns}",mouseDown:"mousedown.{ns}",mouseEnter:"mouseenter.{ns}",mouseLeave:"mouseleave.{ns}",mouseMove:"mousemove.{ns}",mouseOut:"mouseout.{ns}",mouseOver:"mouseover.{ns}",mouseUp:"mouseup.{ns}",resize:"resize.{ns}",scroll:"scroll.{ns}",select:"select.{ns}",touchCancel:"touchcancel.{ns}",touchEnd:"touchend.{ns}",touchLeave:"touchleave.{ns}",touchMove:"touchmove.{ns}",touchStart:"touchstart.{ns}"};return f.prototype.Plugin=function(e,f){return g.Plugins[e]=function(e,f){function g(b){var c="object"===a.type(b);b=a.extend(!0,{},f.defaults,c?b:{});for(var d=this,g=0,h=d.length;h>g;g++){var i=d.eq(g);if(!l(i)){var j=a.extend(!0,{$el:i},b,i.data(e+"-options"));f.methods._construct.apply(i,[j].concat(Array.prototype.slice.call(arguments,c?1:0))),i.addClass(f.classes.element).data(t,j)}}return d}function j(){p.apply(this,[f.methods._destruct].concat(Array.prototype.slice.call(arguments,1))),this.removeClass(f.classes.element).removeData(t)}function k(a){try{a.preventDefault(),a.stopPropagation()}catch(b){}}function l(a){return a.data(t)}function m(a,b,c){return n(a),setTimeout(c,b)}function n(a){a&&(clearTimeout(a),a=null)}function o(a){return"."+a}function p(a){for(var b=this,c=0,d=b.length;d>c;c++){var e=b.eq(c),f=l(e)||{};f&&a.apply(e,[f].concat(Array.prototype.slice.call(arguments,1)))}return b}function q(b){if(this instanceof a){var c=f.methods[b];return"object"!==a.type(b)&&b?c&&0!==b.indexOf("_")?p.apply(this,[c].concat(Array.prototype.slice.call(arguments,1))):this:g.apply(this,arguments)}}function r(c){var d=f.utilities[c]||f.utilities._initialize||!1;d&&d.apply(b,Array.prototype.slice.call(arguments,"object"===a.type(c)?0:1))}function s(b){f.defaults=a.extend(!0,f.defaults,b||{})}var t="fs-"+e;return f.initialized=!1,f.classes=d("classes",t,h,f.classes),f.events=d("events",t,i,f.events),f.functions=a.extend({getData:l,startTimer:m,clearTimer:n,getClassName:o,killEvent:k,iterate:p},f.functions),f.methods=a.extend(!0,{_setup:a.noop,_construct:a.noop,_destruct:a.noop,destroy:j},f.methods),f.utilities=a.extend(!0,{_initialize:!1,_delegate:!1,defaults:s},f.utilities),f.widget&&(a.fn[e]=q),a[e]=f.utilities._delegate||r,f.namespace=e,a(function(){f.initialized||(f.methods._setup.call(c),f.initialized=!0)}),f}(e,f),g.Plugins[e]},a(function(){g.$body=a("body")}),i.transitionEnd=e()+".{ns}",i.clickTouchStart=i.click+" "+i.touchStart,g}(jQuery,this,document);