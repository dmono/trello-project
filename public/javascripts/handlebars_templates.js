this["JST"] = this["JST"] || {};

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a class=\"button board-title\" href=\"#\">My New Board</a><a class=\"button board-starred\" href=\"#\"><span class=\"icon-small icon-star light\"></span></a><a class=\"button board-visibility\" href=\"#\"><span class=\"icon-small icon-private light\"></span><p>Private</p></a><a class=\"button board-menu\" href=\"#\"><span class=\"icon-small icon-more light\"></span><p>Show Menu</p></a>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"list\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><div class=\"list-header\"><p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p><a class=\"button\"><span class=\"icon-small icon-more\"></span></a></div><div class=\"card-container\"></div><div class=\"add-new\"><p>Add new</p></div></div>";
},"useData":true});