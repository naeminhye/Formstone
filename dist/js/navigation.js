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

!function(a,b,c){"use strict";function d(d){d.enabled=!1,d.open=!1,this.addClass([m.base,d.customClass].join(" ")).wrapInner('<div class="'+m.container+'"></div>'),d.$container=this.find(o.getClassName(m.container)),d.$handle=d.handle?a(d.handle).addClass(m.handle):a('<span class="'+m.handle+'"></span>').prependTo(this),d.label&&d.$handle.text(d.labels.closed),d.$handle.touch({tap:!0}).on(n.tap,d,j),b.support.matchMedia!==c&&(d.mediaQuery=b.$window[0].matchMedia("(max-width:"+(1/0===d.maxWidth?"100000px":d.maxWidth)+")"),d.mediaQuery.addListener(function(){k.call(d.$el,d)}),k.call(this,d))}function e(a){a.$handle.remove(),a.$container.contents().unwrap(),this.removeClass([m.base,m.enabled,m.open,a.customClass].join(" ")).off(n.namespace)}function f(a){a.enabled&&!a.open&&(a.label&&a.$handle.html(a.labels.open),this.addClass(m.open).trigger(n.open),a.open=!0)}function g(a){a.enabled&&a.open&&(a.label&&a.$handle.html(a.labels.closed),this.removeClass(m.open).trigger(n.close),a.open=!1)}function h(a){a.enabled||(this.addClass(m.enabled),a.enabled=!0,a.open=!0,g.call(this,a))}function i(a){a.enabled&&(this.removeClass([m.enabled,m.open].join(" ")),a.enabled=!1)}function j(b){o.killEvent(b);var c=b.data;a(o.getClassName(m.base)).not(c.$el)[l.namespace]("close"),c.open?g.call(c.$el,c):f.call(c.$el,c)}function k(a){a.mediaQuery.matches?h.call(a.$el,a):i.call(a.$el,a)}var l=b.Plugin("navigation",{widget:!0,defaults:{customClass:"",handle:null,label:!0,labels:{closed:"Navigation",open:"Close"},maxWidth:"980px"},classes:["handle","container","enabled","open"],events:["tap"],methods:{_construct:d,_destruct:e,open:f,close:g,enable:h,disable:i}}),m=l.classes,n=l.events,o=l.functions;n.open="open",n.close="close"}(jQuery,Formstone);