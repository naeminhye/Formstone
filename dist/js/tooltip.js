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

!function(a,b){"use strict";function c(a){this.on(n.mouseEnter,a,e)}function d(){j(),this.off(n.namespace)}function e(a){j();var b=a.data;b.left=a.pageX,b.top=a.pageY,h(b)}function f(a){var b=a.data;o.clearTimer(b.timer),j()}function g(a){i(a.pageX,a.pageY)}function h(c){j();var d="";d+='<div class="',d+=[m.base,m[c.direction]].join(" "),d+='">',d+='<div class="'+m.content+'">',d+=c.formatter.call(c.$el,c),d+='<span class="'+m.caret+'"></span>',d+="</div>",d+="</div>",p={$tooltip:a(d),$el:c.$el},b.$body.append(p.$tooltip);var e=p.$tooltip.find(o.getClassName(m.content)),h=p.$tooltip.find(o.getClassName(m.caret)),k=c.$el.offset(),l=c.$el.outerHeight(),q=c.$el.outerWidth(),r=0,s=0,t=0,u=0,v=!1,w=!1,x=h.outerHeight(!0),y=h.outerWidth(!0),z=e.outerHeight(!0),A=e.outerWidth(!0);"right"===c.direction||"left"===c.direction?(w=(z-x)/2,u=-z/2,"right"===c.direction?t=c.margin:"left"===c.direction&&(t=-(A+c.margin))):(v=(A-y)/2,t=-A/2,"bottom"===c.direction?u=c.margin:"top"===c.direction&&(u=-(z+c.margin))),e.css({top:u,left:t}),h.css({top:w,left:v}),c.follow?c.$el.on(n.mouseMove,c,g):(c.match?"right"===c.direction||"left"===c.direction?(s=c.top,"right"===c.direction?r=k.left+q:"left"===c.direction&&(r=k.left)):(r=c.left,"bottom"===c.direction?s=k.top+l:"top"===c.direction&&(s=k.top)):"right"===c.direction||"left"===c.direction?(s=k.top+l/2,"right"===c.direction?r=k.left+q:"left"===c.direction&&(r=k.left)):(r=k.left+q/2,"bottom"===c.direction?s=k.top+l:"top"===c.direction&&(s=k.top)),i(r,s)),c.timer=o.startTimer(c.timer,c.delay,function(){p.$tooltip.addClass(m.visible)}),c.$el.one(n.mouseLeave,c,f)}function i(a,b){p&&p.$tooltip.css({left:a,top:b})}function j(){p&&(p.$el.off([n.mouseMove,n.mouseLeave].join(" ")),p.$tooltip.remove(),p=null)}function k(){return this.data("title")}var l=b.Plugin("tooltip",{widget:!0,defaults:{delay:0,direction:"top",follow:!1,formatter:k,margin:15,match:!1},classes:["content","caret","visible","top","bottom","right","left"],methods:{_construct:c,_destruct:d}}),m=l.classes,n=l.events,o=l.functions,p=null}(jQuery,Formstone);