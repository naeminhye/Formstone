/*! formstone v1.1.3 [demo.js] 2016-05-24 | GPL-3.0 License | formstone.it */

/* ==========================================================================
	Demo
============================================================================= */
/* global picturefill */
Site.modules.Demo=function(a,b){function c(){a.cookie({path:"/"}),g(),h("fs-light"),b.onScroll.push(d),b.onResize.push(e),b.onRespond.push(f),b.scroll()}function d(){}function e(){d()}function f(){d()}function g(){a(".demo_container").each(function(b){var c="",d=a(this),e=d.find(".demo_example"),f=d.find(".demo_code");e.attr("id","example-"+b),f.attr("id","code-"+b),c+='<div class="demo_tabs contain">',c+='<a href="#example-'+b+'" class="demo_tab js-demo_tabs" data-tabs-group="demo-'+b+'">Demo</a>',c+='<a href="#code-'+b+'" class="demo_tab js-demo_tabs" data-tabs-group="demo-'+b+'">Code</a>',c+="</div>",d.prepend(c)})}function h(a){var c={theme:a};
// Destroy
b.$body.find(".js-background").background("destroy"),b.$body.find(".js-carousel").carousel("destroy"),b.$body.find(".js-checkbox, .js-radio, input[type=checkbox], input[type=radio]").checkbox("destroy"),b.$body.find(".js-dropdown").dropdown("destroy"),b.$body.find(".js-equalize").equalize("destroy"),b.$body.find(".js-lightbox").lightbox("destroy"),b.$body.find(".js-navigation").navigation("destroy"),b.$body.find("input[type=number]").number("destroy"),b.$body.find(".js-pagination").pagination("destroy"),b.$body.find("input[type=range]").range("destroy"),b.$body.find(".js-scrollbar").scrollbar("destroy"),b.$body.find(".js-swap").swap("destroy"),b.$body.find(".js-tabs").tabs("destroy"),b.$body.find(".js-tooltip").tooltip("destroy"),b.$body.find(".js-upload").upload("destroy"),
// Init
b.$body.find(".js-background").background(c),b.$body.find(".js-carousel").carousel(c),b.$body.find(".js-checkbox, .js-radio, input[type=checkbox], input[type=radio]").checkbox(c),b.$body.find(".js-dropdown").dropdown(c),b.$body.find(".js-equalize").equalize(c),b.$body.find(".js-lightbox").lightbox(c),b.$body.find(".js-navigation").navigation(c),b.$body.find("input[type=number]").number(c),b.$body.find(".js-pagination").pagination(c),b.$body.find("input[type=range]").range(c),b.$body.find(".js-scrollbar").scrollbar(c),b.$body.find(".js-swap").swap(c),b.$body.find(".js-tabs").tabs(c),b.$body.find(".js-tooltip").tooltip(c),b.$body.find(".js-upload").upload(c),
// Demo Tabs
b.$body.find(".js-demo_tabs").off("update.tabs").tabs("destroy"),b.$body.find(".js-demo_tabs").tabs({mobileMaxWidth:"0px"}).on("update.tabs",i)}function i(){var b=a(this),c=a(b.attr("href"));c.find(".js-background").background("resize"),c.find(".js-carousel").carousel("resize")}/* Hook Into Main init Routine */
return b.onInit.push(c),{}}(jQuery,Site);