/*! formstone v1.2.2 [pagination.js] 2016-10-23 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(b){b.mq="(max-width:"+(b.maxWidth===1/0?"100000px":b.maxWidth)+")";var c="";c+='<button type="button" class="'+[l.control,l.control_previous].join(" ")+'">'+b.labels.previous+"</button>",c+='<button type="button" class="'+[l.control,l.control_next].join(" ")+'">'+b.labels.next+"</button>",c+='<div class="'+l.position+'" aria-hidden="true">',c+='<span class="'+l.current+'">0</span>',c+=" "+b.labels.count+" ",c+='<span class="'+l.total+'">0</span>',c+='<select class="'+l.select+'" tabindex="-1" aria-hidden="true"></select>',c+="</div>",b.thisClasses=[l.base,b.theme,b.customClass],this.addClass(b.thisClasses.join(" ")).wrapInner('<div class="'+l.pages+'" aria-label="pagination"></div>').prepend(c),b.$controls=this.find(k.control),b.$pages=this.find(k.pages),b.$items=b.$pages.children().addClass(l.page),b.$position=this.find(k.position),b.$select=this.find(k.select),b.index=-1,b.total=b.$items.length-1;var d=b.$items.index(b.$items.filter("[data-"+j.namespace+"-active]"));d||(d=b.$items.index(b.$items.filter(k.active))),b.$items.eq(0).addClass(l.first).after('<span class="'+l.ellipsis+'">&hellip;</span>').end().eq(b.total).addClass(l.last).before('<span class="'+l.ellipsis+'">&hellip;</span>'),b.$ellipsis=b.$pages.find(k.ellipsis),i(b),this.on(m.click,k.page,b,g).on(m.click,k.control,b,e).on(m.change,k.select,b,f),a.fsMediaquery("bind",b.rawGuid,b.mq,{enter:function(){b.$el.addClass(l.mobile)},leave:function(){b.$el.removeClass(l.mobile)}}),h(b,d)}function d(b){a.fsMediaquery("unbind",b.rawGuid),b.$controls.remove(),b.$ellipsis.remove(),b.$select.remove(),b.$position.remove(),b.$items.removeClass([l.page,l.active,l.visible,l.first,l.last].join(" ")).unwrap(),this.removeClass(b.thisClasses.join(" ")).off(m.namespace)}function e(b){n.killEvent(b);var c=b.data,d=c.index+(a(b.currentTarget).hasClass(l.control_previous)?-1:1);d>=0&&c.$items.eq(d).trigger(m.raw.click)}function f(b){n.killEvent(b);var c=b.data,d=a(b.currentTarget),e=parseInt(d.val(),10);c.$items.eq(e).trigger(m.raw.click)}function g(b){var c=b.data,d=a(b.currentTarget),e=c.$items.index(d);c.ajax?n.killEvent(b):d[0].click(),h(c,e)}function h(a,b){if(b<0&&(b=0),b>a.total&&(b=a.total),b!==a.index){a.index=b;var c=a.index-a.visible,d=a.index+(a.visible+1);c<0&&(c=0),d>a.total&&(d=a.total),a.$items.removeClass(l.visible).removeClass(l.hidden).filter(k.active).removeClass(l.active).end().eq(a.index).addClass(l.active).end().slice(c,d).addClass(l.visible),a.$items.not(k.visible).addClass(l.hidden),a.$position.find(k.current).text(a.index+1).end().find(k.total).text(a.total+1),a.$select.val(a.index),a.$controls.removeClass(l.visible),b>0&&a.$controls.filter(k.control_previous).addClass(l.visible),b<a.total&&a.$controls.filter(k.control_next).addClass(l.visible),a.$ellipsis.removeClass(l.visible),b>a.visible+1&&a.$ellipsis.eq(0).addClass(l.visible),b<a.total-a.visible-1&&a.$ellipsis.eq(1).addClass(l.visible),a.$el.trigger(m.update,[a.index])}}function i(a){for(var b="",c=0;c<=a.total;c++)b+='<option value="'+c+'"',c===a.index&&(b+='selected="selected"'),b+=">Page "+(c+1)+"</option>";a.$select.html(b)}var j=b.Plugin("pagination",{widget:!0,defaults:{ajax:!1,customClass:"",labels:{count:"of",next:"Next",previous:"Previous"},maxWidth:"740px",theme:"fs-light",visible:2},classes:["pages","page","active","first","last","ellipsis","visible","hidden","control","control_previous","control_next","position","select","mobile","current","total"],events:{update:"update"},methods:{_construct:c,_destruct:d}}),k=j.classes,l=k.raw,m=j.events,n=j.functions});