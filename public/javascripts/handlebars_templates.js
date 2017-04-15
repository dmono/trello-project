this["JST"] = this["JST"] || {};

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a class=\"button board-title\" href=\"#\">My New Board</a><a class=\"button board-starred\" href=\"#\"><span class=\"icon-small icon-star light\"></span></a><a class=\"button board-visibility\" href=\"#\"><span class=\"icon-small icon-private light\"></span><p>Private</p></a><a class=\"button board-menu\" href=\"#\"><span class=\"icon-small icon-more light\"></span><p>Show Menu</p></a>";
},"useData":true});

this["JST"]["card_modal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"icon-subscribe icon-small\"></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"header\"><span class=\"icon-card icon-xlarge modal-header-icon\"></span><a href=\"#\" class=\"icon-cancel icon-xlarge\"></a><div class=\"title\"><textarea>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea></div><div class=\"current-list\"><p>in list</p><a href=\"#\">"
    + alias4(((helper = (helper = helpers.listId || (depth0 != null ? depth0.listId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listId","hash":{},"data":data}) : helper)))
    + "</a>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div><div class=\"main-content\"><div class=\"card-information\"><div class=\"description\"><a href=\"#\" class=\"empty-description\"><span class=\"icon-description icon-large\"></span>Edit the description...</a><div class=\"edit-description\"><textarea></textarea><div class=\"description-controls\"><input type=\"submit\" value=\"Save\" class=\"submit-btn\" /><a href=\"#\" class=\"cancel-btn\"><span class=\"icon-xlarge cancel-btn icon-cancel\"></span></a></div></div></div></div><div class=\"card-comments\"><div class=\"comment-header\"><span class=\"icon-comment icon-xlarge\"></span><h3>Add Comments</h3></div><div class=\"new-comment\"><span class=\"icon-member icon-xlarge\"></span><textarea placeholder=\"Write a comment...\" class=\"comment-bg\"></textarea><div class=\"comment-controls\"><input type=\"submit\" value=\"Send\" class=\"submit-btn\" /></div></div></div><div class=\"card-activity\"><div class=\"activity-header\"><span class=\"icon-activity icon-xlarge\"></span><h3>Activity</h3></div><div class=\"activity-content\"><div class=\"comment-single\"><span class=\"icon-member icon-xlarge\"></span><div class=\"comment-content\"><h4>Bailey Cat</h4><div class=\"comment-text comment-bg\">Adding a comment</div><p>Apr 7 at 11:00 PM</p></div></div></div></div></div><div class=\"sidebar\"><div class=\"add-buttons\"><h3>Add</h3><a href=\"#\" class=\"modal-button\"><span class=\"icon-member icon-small\"></span>Members</a><a href=\"#\" class=\"modal-button\"><span class=\"icon-label icon-small\"></span>Labels</a><a href=\"#\" class=\"modal-button\"><span class=\"icon-checklist icon-small\"></span>Checklist</a><a href=\"#\" class=\"modal-button\"><span class=\"icon-duedate icon-small\"></span>Due Date</a><a href=\"#\" class=\"modal-button\"><span class=\"icon-attachment icon-small\"></span>Attachment</a></div><div class=\"action-buttons\"><h3>Actions</h3><a href=\"#\" class=\"modal-button\"><span class=\"icon-forward icon-small\"></span>Move</a><a href=\"#\" class=\"modal-button\"><span class=\"icon-card icon-small\"></span>Copy</a><a href=\"#\" class=\"modal-button\"><span class=\"icon-subscribe icon-small\"></span>Subscribe</a><a href=\"#\" class=\"modal-button\"><span class=\"icon-archive icon-small\"></span>Archive</a></div><a href=\"#\">Share and more...</a></div>";
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