/*! formstone v1.2.2 [asap.js] 2016-08-27 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./analytics"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(c){!q&&b.support.history&&(o=b.$body,q=a.extend(s,c),q.render===a.noop&&(q.render=i),q.transitionOut===a.noop&&(q.transitionOut=function(){return a.Deferred().resolve()}),history.state?(A=history.state.id,z=history.state.url):(z=window.location.href,m(A,z)),t.on(w.popState,f),d())}function d(){o&&!o.hasClass(x.base)&&o.on(w.click,q.selector,e).addClass(x.base)}function e(a){var b=a.currentTarget;a.which>1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||window.location.protocol!==b.protocol||window.location.host!==b.host||"_blank"===b.target||(!b.hash||b.href.replace(b.hash,"")!==window.location.href.replace(location.hash,"")&&b.href!==window.location.href+"#")&&(b.href.match(q.ignoreTypes)||(v.killEvent(a),a.stopImmediatePropagation(),b.href!==z&&g(b.href,!0)))}function f(a){p&&p.abort();var b=a.originalEvent.state;b&&(A=b.id,b.url!==z&&g(b.url,!1))}function g(b,c){p&&p.abort(),t.trigger(w.requested,[c]),q.transitionOutDeferred=q.transitionOut.apply(u,[!1]);var d=n(b),e=d.params,f=d.hash,g=d.clean,i="User error",j=null,k=a.Deferred();e[q.requestKey]=!0,p=a.ajax({url:g,data:e,dataType:"json",cache:q.cache,xhr:function(){var a=new u.XMLHttpRequest;return a.addEventListener("progress",function(a){if(a.lengthComputable){var b=a.loaded/a.total;t.trigger(w.progress,[b])}},!1),a},success:function(c,e,g){j="string"===a.type(c)?a.parseJSON(c):c,c.location&&(b=c.location,d=n(b),f=d.hash),k.resolve()},error:function(a,b,c){i=c,k.reject()}}),a.when(k,q.transitionOutDeferred).done(function(){h(d,j,c)}).fail(function(){t.trigger(w.failed,[i])})}function h(b,c,d){t.trigger(w.loaded,[c]),void 0!==a.fsAnalytics&&a.fsAnalytics("pageview"),q.render.call(this,c,b.hash),z=b.url,d&&(A++,l(A,z)),t.trigger(w.rendered,[c]);var e=!1;if(""!==b.hash){var f=a(b.hash);f.length&&(e=f.offset().top)}e!==!1&&t.scrollTop(e)}function i(b,c){if("undefined"!==a.type(b)){var d;for(var e in b)b.hasOwnProperty(e)&&(d=a(e),d.length&&d.html(b[e]))}}function j(a){q&&b.support.history?a&&g(a,!0):window.location.href=a}function k(a){var b=history.state;z=a,m(b.id,a)}function l(a,b){history.pushState({id:a,url:b},y+a,b)}function m(a,b){history.replaceState({id:a,url:b},y+a,b)}function n(a){var b=a.indexOf("?"),c=a.indexOf("#"),d={},e="",f=a;return c>-1&&(e=a.slice(c),f=a.slice(0,c)),b>-1&&(d=v.parseQueryString(a.slice(b+1,c>-1?c:a.length)),f=a.slice(0,b)),{hash:e,params:d,url:a,clean:f}}var o,p,q,r=b.Plugin("asap",{utilities:{_initialize:c,load:j,replace:k},events:{failed:"failed",loaded:"loaded",popState:"popstate",progress:"progress",requested:"requested",rendered:"rendered"}}),s={cache:!0,ignoreTypes:/\.(jpg|sjpg|jpeg|png|gif|zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,render:a.noop,requestKey:"fs-asap",selector:"a",transitionOut:a.noop},t=b.$window,u=t[0],v=r.functions,w=r.events,x=r.classes.raw,y="asap-",z="",A=1});