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

!function(a,b){"use strict";function c(a){a.touches=[],m(this,"none"),a.tap?(a.pan=!1,a.scale=!1,this.on(p.touchStart,a,f).on(p.click,a,i)):(a.pan||a.scale)&&(a.tap=!1,this.on([p.touchStart,p.pointerDown].join(" "),a,e),a.pan&&this.on(p.mouseDown,a,f))}function d(){m(this.off(p.namespace),"")}function e(a){a.preventManipulation&&a.preventManipulation(),q.killEvent(a);var b=a.data,c=a.originalEvent;if(c.type.match(/(up|end)$/i))return void h(a);if(c.pointerId){var d=!1;for(var e in b.touches)b.touches[e].id===c.pointerId&&(d=!0,b.touches[e].pageX=c.clientX,b.touches[e].pageY=c.clientY);d||b.touches.push({id:c.pointerId,pageX:c.clientX,pageY:c.clientY})}else b.touches=c.touches;c.type.match(/(down|start)$/i)?f(a):c.type.match(/move$/i)&&g(a)}function f(b){b.stopPropagation();var c=b.data,d="undefined"!==a.type(b.originalEvent.touches)?b.originalEvent.touches[0]:null;if(c.startE=b.originalEvent,c.startX=d?d.pageX:b.pageX,c.startY=d?d.pageY:b.pageY,c.scaleD=1,c.tap)c.clicked=!1,c.$el.on(p.touchMove,c,g).on([p.touchEnd,p.touchCancel].join(" "),c,h);else if(c.pan||c.scale){q.killEvent(b);var f=j(c.scale?p.scaleStart:p.panStart,b,c.startX,c.startY,c.scaleD,0,0);if(c.scale&&c.touches&&c.touches.length>=2){var i=c.touches;c.pinch={startX:k(i[0].pageX,i[1].pageX),startY:k(i[0].pageY,i[1].pageY),startD:l(i[1].pageX-i[0].pageX,i[1].pageY-i[0].pageY)},f.pageX=c.startX=c.pinch.startX,f.pageY=c.startY=c.pinch.startY}c.pan&&r.on(p.mouseMove,c,g).on(p.mouseUp,c,h),r.on([p.touchMove,p.touchEnd,p.touchCancel,p.pointerMove,p.pointerUp,p.pointerCancel].join(" "),c,e),c.$el.trigger(f)}}function g(b){var c=b.data,d="undefined"!==a.type(b.originalEvent.touches)?b.originalEvent.touches[0]:null,e=d?d.pageX:b.pageX,f=d?d.pageY:b.pageY,g=e-c.startX,h=f-c.startY;if(c.tap&&(Math.abs(e-c.startX)>10||Math.abs(f-c.startY)>10))c.$el.off([p.touchMove,p.touchEnd,p.touchCancel].join(" "));else if(c.pan||c.scale){var i=!0,m=j(c.scale?p.scale:p.pan,b,e,f,c.scaleD,g,h);if(c.scale)if(c.touches&&c.touches.length>=2){var n=c.touches;c.pinch.endX=k(n[0].pageX,n[1].pageX),c.pinch.endY=k(n[0].pageY,n[1].pageY),c.pinch.endD=l(n[1].pageX-n[0].pageX,n[1].pageY-n[0].pageY),c.scaleD=c.pinch.endD/c.pinch.startD,m.pageX=c.pinch.endX,m.pageY=c.pinch.endY,m.scale=c.scaleD,m.deltaX=c.pinch.endX-c.pinch.startX,m.deltaY=c.pinch.endY-c.pinch.startY}else c.pan||(i=!1);i&&c.$el.trigger(m)}}function h(b){var c=b.data;if(c.tap)c.$el.off([p.touchMove,p.touchEnd,p.touchCancel,p.mouseMove,p.mouseUp].join(" ")),c.startE.preventDefault(),i(b);else if(c.pan||c.scale){var d="undefined"!==a.type(b.originalEvent.touches)?b.originalEvent.touches[0]:null,e=d?d.pageX:b.pageX,f=d?d.pageY:b.pageY,g=e-c.startX,h=f-c.startY,k=j(c.scale?p.scaleEnd:p.panEnd,b,e,f,c.scaleD,g,h);r.off([p.touchMove,p.touchEnd,p.touchCancel,p.mouseMove,p.mouseUp,p.pointerMove,p.pointerUp,p.pointerCancel].join(" ")),c.$el.trigger(k),c.touches=[],c.scale}}function i(a){q.killEvent(a);var b=a.data;if(!b.clicked){"click"!==a.type&&(b.clicked=!0);var c=b.startE?b.startX:a.pageX,d=b.startE?b.startY:a.pageY,e=j(p.tap,a.originalEvent,c,d,1,0,0);b.$el.trigger(e)}}function j(b,c,d,e,f,g,h){return a.Event(b,{pageX:d,pageY:e,scale:f,deltaX:g,deltaY:h,originalEvent:c,bubbles:!0})}function k(a,b){return(a+b)/2}function l(a,b){return Math.sqrt(a*a+b*b)}function m(a,b){a.css({"-ms-touch-action":b,"touch-action":b})}var n=!window.PointerEvent,o=b.Plugin("touch",{widget:!0,defaults:{pan:!1,scale:!1,tap:!1},methods:{_construct:c,_destruct:d},events:{pointerDown:n?"MSPointerDown":"pointerdown",pointerUp:n?"MSPointerUp":"pointerup",pointerMove:n?"MSPointerMove":"pointermove",pointerCancel:n?"MSPointerCancel":"pointercancel"}}),p=o.events,q=o.functions,r=b.$window;p.tap="tap",p.pan="pan",p.panStart="panstart",p.panEnd="panend",p.scale="scale",p.scaleStart="scalestart",p.scaleEnd="scaleend"}(jQuery,Formstone);