this["JST"] = this["JST"] || {};

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a class=\"button board-title\" href=\"#\">My New Board</a><a class=\"button board-starred\" href=\"#\"><span class=\"icon-small icon-star light\"></span></a><a class=\"button board-visibility\" href=\"#\"><span class=\"icon-small icon-private light\"></span><p>Private</p></a><a class=\"button board-menu\" href=\"#\"><span class=\"icon-small icon-more light\"></span><p>Show Menu</p></a>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"card-content\"><a href=\"#\" class=\"card-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"list\"><div class=\"list-header\"><p>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</p><a class=\"button\"><span class=\"icon-small icon-more\"></span></a></div><a href=\"#\" class=\"add-new-card\">Add new...</a></div>";
},"useData":true});

this["JST"]["newCard"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"new-card-form\"><div class=\"card-wrapper\"><div class=\"card-content\"><textarea class=\"new-card-textarea\"></textarea></div></div><div class=\"new-card-controls\"><input type=\"submit\" value=\"Add\" class=\"submit-btn\" /><a href=\"#\" class=\"cancel-btn\"><span class=\"icon-large cancel-btn icon-cancel\"></span></a></div></div>";
},"useData":true});