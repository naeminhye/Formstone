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

!function(a){"use strict";function b(a){a.formatter=m,this.on(J.click,a,e)}function c(){h(),this.off(J.namespace)}function d(b,c){b instanceof a&&e.apply(L[0],[{data:a.extend({},{$object:b},H,c||{})}])}function e(b){if(!N){var c=b.data,d=c.$el,e=c.$object,f=d&&d[0].href?d[0].href||"":"",i=d&&d[0].hash?d[0].hash||"":"",j=f.toLowerCase().split(".").pop().split(/\#|\?/),l=j[0],m=d?d.data(I.namespace+"-type"):"",o="image"===m||a.inArray(l,c.extensions)>-1||"data:image"===f.substr(0,10),p=f.indexOf("youtube.com/embed")>-1||f.indexOf("player.vimeo.com/video")>-1,r="url"===m||!o&&!p&&"http"===f.substr(0,4)&&!i,s="element"===m||!o&&!p&&!r&&"#"===i.substr(0,1),z="undefined"!=typeof e;if(s&&(f=i),!(o||p||r||s||z))return;if(K.killEvent(b),N=a.extend({},{visible:!1,resizeTimer:null,touchTimer:null,gallery:{active:!1},isMobile:Formstone.isMobile||c.mobile,isAnimating:!0,oldContentHeight:0,oldContentWidth:0},c),N.margin*=2,N.type=o?"image":p?"video":"element",o||p){var A=d.data("gallery");A&&(N.gallery.active=!0,N.gallery.id=A,N.gallery.$items=a("a[data-gallery= "+N.gallery.id+"], a[rel= "+N.gallery.id+"]"),N.gallery.index=N.gallery.$items.index(N.$el),N.gallery.total=N.gallery.$items.length-1)}var B="";N.isMobile||(B+='<div class="'+[I.overlay,N.customClass].join(" ")+'"></div>'),B+='<div class="'+[I.base,I.loading,I.animating,N.customClass].join(" "),N.fixed&&(B+=I.fixed),N.isMobile&&(B+=I.mobile),r&&(B+=I.iframed),(s||z)&&(B+=I.inline),B+='">',B+='<span class="'+I.close+'">'+N.labels.close+"</span>",B+='<span class="'+I.loading_icon+'"></span>',B+='<div class="'+I.container+'">',B+='<div class="'+I.content+'">',(o||p)&&(B+='<div class="'+I.meta+'">',N.gallery.active&&(B+='<div class="'+[I.control,I.control_previous].join(" ")+'">'+N.labels.previous+"</div>",B+='<div class="'+[I.control,I.control_next].join(" ")+'">'+N.labels.next+"</div>",B+='<p class="'+I.position+'"',N.gallery.total<1&&(B+=' style="display: none;"'),B+=">",B+='<span class="'+I.position_current+'">'+(N.gallery.index+1)+"</span> ",B+=N.labels.count,B+=' <span class="'+I.position_total+'">'+(N.gallery.total+1)+"</span>",B+="</p>"),B+='<div class="'+I.caption+'">',B+=N.formatter.call(d,c),B+="</div></div>"),B+="</div></div></div>",M.append(B),N.$overlay=a(K.getClassName(I.overlay)),N.$lightbox=a(K.getClassName(I.base)),N.$close=a(K.getClassName(I.close)),N.$container=a(K.getClassName(I.container)),N.$content=a(K.getClassName(I.content)),N.$meta=a(K.getClassName(I.meta)),N.$position=a(K.getClassName(I.position)),N.$caption=a(K.getClassName(I.caption)),N.$controls=a(K.getClassName(I.control)),N.paddingVertical=N.isMobile?N.$close.outerHeight()/2:parseInt(N.$lightbox.css("paddingTop"),10)+parseInt(N.$lightbox.css("paddingBottom"),10),N.paddingHorizontal=N.isMobile?0:parseInt(N.$lightbox.css("paddingLeft"),10)+parseInt(N.$lightbox.css("paddingRight"),10),N.contentHeight=N.$lightbox.outerHeight()-N.paddingVertical,N.contentWidth=N.$lightbox.outerWidth()-N.paddingHorizontal,N.controlHeight=N.$controls.outerHeight(),k(),N.gallery.active&&u(),L.on(J.resize,g).on(J.keyDown,v),M.on(J.clickTouchStart,[K.getClassName(I.overlay),K.getClassName(I.close)].join(", "),h).on(J.touchMove,K.killEvent),N.gallery.active&&N.$lightbox.on(J.clickTouchStart,K.getClassName(I.control),t),N.$lightbox.transition({property:"opacity"},function(){o?n(f):p?q(f):r?x(f):s?w(f):z&&y(N.$object)}),M.addClass(I.open)}}function f(){N.$lightbox.off(J.namespace),N.$overlay.trigger(J.click)}function g(a){"object"!=typeof a&&(N.targetHeight=arguments[0],N.targetWidth=arguments[1]),"element"===N.type?z(N.$content.find("> :first-child")):"image"===N.type?o():"video"===N.type&&r(),j()}function h(a){K.killEvent(a),N&&(N.$lightbox.transition({property:"opacity"},function(){N.$lightbox.off(J.namespace),N.$container.off(J.namespace),L.off(J.namespace),M.off(J.namespace),N.$overlay.remove(),N.$lightbox.remove(),N=null,L.trigger(J.close)}).addClass(I.animating),M.removeClass(I.open),K.clearTimer(N.resizeTimer))}function i(){{var a=l();N.isMobile?0:N.duration}N.isMobile||N.$controls.css({marginTop:(N.contentHeight-N.controlHeight-N.metaHeight)/2}),!N.visible&&N.isMobile&&N.gallery.active&&N.$content.on(J.touchStart,K.getClassName(I.image),B),(N.isMobile||N.fixed)&&M.addClass(I.open),N.$lightbox.transition({property:"height"},function(){N.$container.transition({property:"opacity"},function(){N.$lightbox.removeClass(I.animating),N.isAnimating=!1}),N.$lightbox.removeClass(I.loading),N.visible=!0,L.trigger(J.open),N.gallery.active&&s()}),N.isMobile||N.$lightbox.css({height:N.contentHeight+N.paddingVertical,width:N.contentWidth+N.paddingHorizontal,top:N.fixed?0:a.top});var b=N.oldContentHeight!==N.contentHeight||N.oldContentWidth!==N.contentWidth;(N.isMobile||!b)&&N.$lightbox.transition("resolve"),N.oldContentHeight=N.contentHeight,N.oldContentWidth=N.contentWidth}function j(){if(N.visible&&!N.isMobile){var a=l();N.$controls.css({marginTop:(N.contentHeight-N.controlHeight-N.metaHeight)/2}),N.$lightbox.css({height:N.contentHeight+N.paddingVertical,width:N.contentWidth+N.paddingHorizontal,top:N.fixed?0:a.top})}}function k(){var a=l();N.$lightbox.css({top:N.fixed?0:a.top})}function l(){if(N.isMobile)return{left:0,top:0};var a={left:(L.width()-N.contentWidth-N.paddingHorizontal)/2,top:N.top<=0?(L.height()-N.contentHeight-N.paddingVertical)/2:N.top};return N.fixed!==!0&&(a.top+=L.scrollTop()),a}function m(){var a=this.attr("title");return void 0!==a&&""!==a.trim()?'<p class="caption">'+a.trim()+"</p>":""}function n(b){N.$image=a("<img>"),N.$image.one(J.load,function(){var a=E(N.$image);N.naturalHeight=a.naturalHeight,N.naturalWidth=a.naturalWidth,N.retina&&(N.naturalHeight/=2,N.naturalWidth/=2),N.$content.prepend(N.$image),""===N.$caption.html()?N.$caption.hide():N.$caption.show(),o(),i()}).error(A).attr("src",b).addClass(I.image),(N.$image[0].complete||4===N.$image[0].readyState)&&N.$image.trigger(J.load)}function o(){var a=0;for(N.windowHeight=N.viewportHeight=L.height()-N.paddingVertical,N.windowWidth=N.viewportWidth=L.width()-N.paddingHorizontal,N.contentHeight=1/0,N.contentWidth=1/0,N.imageMarginTop=0,N.imageMarginLeft=0;N.contentHeight>N.viewportHeight&&2>a;)N.imageHeight=0===a?N.naturalHeight:N.$image.outerHeight(),N.imageWidth=0===a?N.naturalWidth:N.$image.outerWidth(),N.metaHeight=0===a?0:N.metaHeight,0===a&&(N.ratioHorizontal=N.imageHeight/N.imageWidth,N.ratioVertical=N.imageWidth/N.imageHeight,N.isWide=N.imageWidth>N.imageHeight),N.imageHeight<N.minHeight&&(N.minHeight=N.imageHeight),N.imageWidth<N.minWidth&&(N.minWidth=N.imageWidth),N.isMobile?(N.$meta.css({width:N.windowWidth}),N.metaHeight=N.$meta.outerHeight(!0),N.contentHeight=N.viewportHeight-N.paddingVertical,N.contentWidth=N.viewportWidth-N.paddingHorizontal,p(),N.imageMarginTop=(N.contentHeight-N.targetImageHeight-N.metaHeight)/2,N.imageMarginLeft=(N.contentWidth-N.targetImageWidth)/2):(0===a&&(N.viewportHeight-=N.margin+N.paddingVertical,N.viewportWidth-=N.margin+N.paddingHorizontal),N.viewportHeight-=N.metaHeight,p(),N.contentHeight=N.targetImageHeight,N.contentWidth=N.targetImageWidth),N.$meta.css({width:N.contentWidth}),N.$image.css({height:N.targetImageHeight,width:N.targetImageWidth,marginTop:N.imageMarginTop,marginLeft:N.imageMarginLeft}),N.isMobile||(N.metaHeight=N.$meta.outerHeight(!0),N.contentHeight+=N.metaHeight),a++}function p(){var a=N.isMobile?N.contentHeight-N.metaHeight:N.viewportHeight,b=N.isMobile?N.contentWidth:N.viewportWidth;N.isWide?(N.targetImageWidth=b,N.targetImageHeight=N.targetImageWidth*N.ratioHorizontal,N.targetImageHeight>a&&(N.targetImageHeight=a,N.targetImageWidth=N.targetImageHeight*N.ratioVertical)):(N.targetImageHeight=a,N.targetImageWidth=N.targetImageHeight*N.ratioVertical,N.targetImageWidth>b&&(N.targetImageWidth=b,N.targetImageHeight=N.targetImageWidth*N.ratioHorizontal)),(N.targetImageWidth>N.imageWidth||N.targetImageHeight>N.imageHeight)&&(N.targetImageHeight=N.imageHeight,N.targetImageWidth=N.imageWidth),(N.targetImageWidth<N.minWidth||N.targetImageHeight<N.minHeight)&&(N.targetImageWidth<N.minWidth?(N.targetImageWidth=N.minWidth,N.targetImageHeight=N.targetImageWidth*N.ratioHorizontal):(N.targetImageHeight=N.minHeight,N.targetImageWidth=N.targetImageHeight*N.ratioVertical))}function q(b){N.$videoWrapper=a('<div class="'+I.videoWrapper+'"></div>'),N.$video=a('<iframe class="'+I.video+'" seamless="seamless"></iframe>'),N.$video.attr("src",b).addClass(I.video).prependTo(N.$videoWrapper),N.$content.prepend(N.$videoWrapper),r(),i()}function r(){N.windowHeight=N.viewportHeight=N.contentHeight=L.height()-N.paddingVertical,N.windowWidth=N.viewportWidth=N.contentWidth=L.width()-N.paddingHorizontal,N.videoMarginTop=0,N.videoMarginLeft=0,N.isMobile?(N.$meta.css({width:N.windowWidth}),N.metaHeight=N.$meta.outerHeight(!0),N.viewportHeight-=N.metaHeight,N.targetVideoWidth=N.viewportWidth,N.targetVideoHeight=N.targetVideoWidth*N.videoRatio,N.targetVideoHeight>N.viewportHeight&&(N.targetVideoHeight=N.viewportHeight,N.targetVideoWidth=N.targetVideoHeight/N.videoRatio),N.videoMarginTop=(N.viewportHeight-N.targetVideoHeight)/2,N.videoMarginLeft=(N.viewportWidth-N.targetVideoWidth)/2):(N.viewportHeight=N.windowHeight-N.margin,N.viewportWidth=N.windowWidth-N.margin,N.targetVideoWidth=N.videoWidth>N.viewportWidth?N.viewportWidth:N.videoWidth,N.targetVideoWidth<N.minWidth&&(N.targetVideoWidth=N.minWidth),N.targetVideoHeight=N.targetVideoWidth*N.videoRatio,N.contentHeight=N.targetVideoHeight,N.contentWidth=N.targetVideoWidth),N.$meta.css({width:N.contentWidth}),N.$videoWrapper.css({height:N.targetVideoHeight,width:N.targetVideoWidth,marginTop:N.videoMarginTop,marginLeft:N.videoMarginLeft}),N.isMobile||(N.metaHeight=N.$meta.outerHeight(!0),N.contentHeight=N.targetVideoHeight+N.metaHeight)}function s(){var b="";N.gallery.index>0&&(b=N.gallery.$items.eq(N.gallery.index-1).attr("href"),b.indexOf("youtube.com/embed")<0&&b.indexOf("player.vimeo.com/video")<0&&a('<img src="'+b+'">')),N.gallery.index<N.gallery.total&&(b=N.gallery.$items.eq(N.gallery.index+1).attr("href"),b.indexOf("youtube.com/embed")<0&&b.indexOf("player.vimeo.com/video")<0&&a('<img src="'+b+'">'))}function t(b){K.killEvent(b);var c=a(b.currentTarget);N.isAnimating||c.hasClass(I.control_disabled)||(N.isAnimating=!0,N.gallery.index+=c.hasClass(I.control_next)?1:-1,N.gallery.index>N.gallery.total&&(N.gallery.index=N.gallery.total),N.gallery.index<0&&(N.gallery.index=0),N.$container.transition({property:"opacity"},function(){"undefined"!=typeof N.$image&&N.$image.remove(),"undefined"!=typeof N.$videoWrapper&&N.$videoWrapper.remove(),N.$el=N.gallery.$items.eq(N.gallery.index),N.$caption.html(N.formatter.call(N.$el,N)),N.$position.find(K.getClassName(I.position_current)).html(N.gallery.index+1);var a=N.$el.attr("href"),b=a.indexOf("youtube.com/embed")>-1||a.indexOf("player.vimeo.com/video")>-1;b?q(a):n(a),u()}),N.$lightbox.addClass([I.loading,I.animating].join(" ")))}function u(){N.$controls.removeClass(I.control_disabled),0===N.gallery.index&&N.$controls.filter(K.getClassName(I.control_previous)).addClass(I.control_disabled),N.gallery.index===N.gallery.total&&N.$controls.filter(K.getClassName(I.control_next)).addClass(I.control_disabled)}function v(a){!N.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&N.$close.trigger(J.click):(K.killEvent(a),N.$controls.filter(K.getClassName(37===a.keyCode?I.control_previous:I.control_next)).trigger(J.click))}function w(b){var c=a(b).find("> :first-child").clone();y(c)}function x(b){b+=b.indexOf("?")>-1?"&"+N.requestKey+"=true":"?"+N.requestKey+"=true";var c=a('<iframe class="'+I.iframe+'" src="'+b+'"></iframe>');y(c)}function y(a){N.$content.append(a),z(a),i()}function z(a){N.windowHeight=L.height()-N.paddingVertical,N.windowWidth=L.width()-N.paddingHorizontal,N.objectHeight=a.outerHeight(!0),N.objectWidth=a.outerWidth(!0),N.targetHeight=N.targetHeight||(N.$el?N.$el.data(G+"-height"):null),N.targetWidth=N.targetWidth||(N.$el?N.$el.data(G+"-width"):null),N.maxHeight=N.windowHeight<0?N.minHeight:N.windowHeight,N.isIframe=a.is("iframe"),N.objectMarginTop=0,N.objectMarginLeft=0,N.isMobile||(N.windowHeight-=N.margin,N.windowWidth-=N.margin),N.contentHeight=N.targetHeight?N.targetHeight:N.isIframe||N.isMobile?N.windowHeight:N.objectHeight,N.contentWidth=N.targetWidth?N.targetWidth:N.isIframe||N.isMobile?N.windowWidth:N.objectWidth,(N.isIframe||N.isObject)&&N.isMobile?(N.contentHeight=N.windowHeight,N.contentWidth=N.windowWidth):N.isObject&&(N.contentHeight=N.contentHeight>N.windowHeight?N.windowHeight:N.contentHeight,N.contentWidth=N.contentWidth>N.windowWidth?N.windowWidth:N.contentWidth)}function A(){var b=a('<div class="'+I.error+'"><p>Error Loading Resource</p></div>');N.type="element",N.$meta.remove(),N.$image.off(J.namespace),y(b)}function B(a){if(K.killEvent(a),K.clearTimer(N.touchTimer),!N.isAnimating){var b="undefined"!=typeof a.originalEvent.targetTouches?a.originalEvent.targetTouches[0]:null;N.xStart=b?b.pageX:a.clientX,N.leftPosition=0,N.touchMax=1/0,N.touchMin=-1/0,N.edge=.25*N.contentWidth,0===N.gallery.index&&(N.touchMax=0),N.gallery.index===N.gallery.total&&(N.touchMin=0),N.$lightbox.on(J.touchMove,C).one(J.touchEnd,D)}}function C(a){var b="undefined"!=typeof a.originalEvent.targetTouches?a.originalEvent.targetTouches[0]:null;N.delta=N.xStart-(b?b.pageX:a.clientX),N.delta>20&&K.killEvent(a),N.canSwipe=!0;var c=-N.delta;c<N.touchMin&&(c=N.touchMin,N.canSwipe=!1),c>N.touchMax&&(c=N.touchMax,N.canSwipe=!1),N.$image.css({transform:"translate3D("+c+"px,0,0)"}),N.touchTimer=K.startTimer(N.touchTimer,300,function(){D(a)})}function D(a){K.killEvent(a),K.clearTimer(N.touchTimer),N.$lightbox.off([J.touchMove,J.touchEnd].join("")),N.delta&&(N.$lightbox.addClass(I.animating),N.swipe=!1,N.canSwipe&&(N.delta>N.edge||N.delta<-N.edge)?(N.swipe=!0,N.$image.css(N.delta<=N.leftPosition?{transform:"translate3D("+N.contentWidth+"px,0,0)"}:{transform:"translate3D("+-N.contentWidth+"px,0,0)"})):N.$image.css({transform:"translate3D(0,0,0)"}),N.swipe&&N.$controls.filter(K.getClassName(N.delta<=N.leftPosition?I.control_previous:I.control_next)).trigger(J.click),K.startTimer(N.resetTimer,N.duration,function(){N.$lightbox.removeClass(I.animating)}))}function E(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()?(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width}):!1}var F=Formstone.Plugin("lightbox",{widget:!0,defaults:{customClass:"",extensions:["jpg","sjpg","jpeg","png","gif"],fixed:!1,formatter:a.noop,labels:{close:"Close",count:"of",next:"Next",previous:"Previous"},margin:50,minHeight:100,minWidth:100,mobile:!1,retina:!1,requestKey:"boxer",top:0,videoRatio:.5625,videoWidth:600},classes:["loading","animating","fixed","mobile","inline","iframed","open","overlay","close","loading_icon","container","content","image","video","video_wrapper","meta","control","control_previous","control_next","control_disabled","position","position_current","position_total","caption","iframe","error"],methods:{_construct:b,_destruct:c},utilities:{_initialize:d,close:f}}),G=F.namespace,H=F.defaults,I=F.classes,J=F.events,K=F.functions,L=Formstone.$window,M=null,N=null;J.open="open",J.close="close",a(function(){M=Formstone.$body})}(jQuery,window);