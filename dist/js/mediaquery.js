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

!function(a,b){"use strict";function c(b){b=b||{};for(var c in t)t.hasOwnProperty(c)&&(m[c]=b[c]?a.merge(b[c],m[c]):m[c]);m=a.extend(m,b),m.minWidth.sort(h),m.maxWidth.sort(g),m.minHeight.sort(h),m.maxHeight.sort(g);for(var d in t)if(t.hasOwnProperty(d)){s[d]={};for(var f in m[d])if(m[d].hasOwnProperty(f)){var i=window.matchMedia("("+t[d]+": "+(1/0===m[d][f]?1e5:m[d][f])+m.unit+")");i.addListener(e),s[d][m[d][f]]=i}}e()}function d(){q={unit:m.unit};for(var a in t)if(t.hasOwnProperty(a))for(var b in s[a])if(s[a].hasOwnProperty(b)&&s[a][b].matches){var c="Infinity"===b?1/0:parseInt(b,10);a.indexOf("max")>-1?(!q[a]||c<q[a])&&(q[a]=c):(!q[a]||c>q[a])&&(q[a]=c)}}function e(){d(),o.trigger(n.change,[q])}function f(a){var b=i(a.media),c=r[b],d=a.matches?n.enter:n.leave;if(c.active||!c.active&&a.matches){for(var e in c[d])c[d].hasOwnProperty(e)&&c[d][e].apply(c.mq);c.active=!0}}function g(a,b){return b-a}function h(a,b){return a-b}function i(a){return a.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"-")}function j(){return q}function k(a,b){var c=i(a);r[c]||(r[c]={mq:p.matchMedia(a),active:!1,enter:[],leave:[]},r[c].mq.addListener(f));for(var d in b)b.hasOwnProperty(d)&&r[c].hasOwnProperty(d)&&r[c][d].push(b[d]);f(r[c].mq)}function l(a){var b=i(a);r[b]&&(r[b].mq.removeListener(f),r=r.splice(r.indexOf(r[b]),1))}var m=(b.Plugin("mediaquery",{utilities:{_initialize:c,state:j,bind:k,unbind:l}}),{minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"}),n={change:"change",enter:"enter",leave:"leave"},o=b.$window,p=o[0],q=null,r=[],s={},t={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}}(jQuery,Formstone);