this["JST"] = this["JST"] || {};

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a class=\"button board-title\" href=\"#\">My New Board</a><a class=\"button board-starred\" href=\"#\"><span class=\"icon-small icon-star light\"></span></a><a class=\"button board-visibility\" href=\"#\"><span class=\"icon-small icon-private light\"></span><p>Private</p></a><a class=\"button board-menu\" href=\"#\"><span class=\"icon-small icon-more light\"></span><p>Show Menu</p></a>";
},"useData":true});

this["JST"]["card_modal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"icon-subscribe icon-small\"></span>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<p>Description <a href=\"#\">Edit</a></p><div class=\"description-text markdown\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"empty-description\"><span class=\"icon-description icon-large\"></span>Edit the description...</a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"header\"><span class=\"icon-card icon-xlarge modal-header-icon\"></span><a href=\"#\" class=\"icon-cancel icon-xlarge\"></a><div class=\"title\"><textarea>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea></div><div class=\"current-list\"><p>in list</p><a href=\"#\"></a>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div><div class=\"main-content\"><div class=\"card-information\"><div class=\"description\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "<div class=\"edit-description\"><textarea></textarea><div class=\"description-controls\"><input type=\"submit\" value=\"Save\" class=\"submit-btn\" /><a href=\"#\" class=\"cancel-btn\"><span class=\"icon-xlarge cancel-btn icon-cancel\"></span></a></div></div></div></div><div class=\"card-comments\"><div class=\"comment-header\"><span class=\"icon-comment icon-xlarge\"></span><h3>Add Comment</h3></div><div class=\"new-comment\"><span class=\"icon-member icon-xlarge\"></span><textarea placeholder=\"Write a comment...\" class=\"comment-bg\"></textarea><div class=\"comment-controls\"><input type=\"submit\" value=\"Send\" class=\"submit-btn\" /></div></div></div><div class=\"card-activity\"><div class=\"activity-header\"><span class=\"icon-activity icon-xlarge\"></span><h3>Activity</h3></div><div class=\"activity-content\"></div></div></div><div class=\"sidebar\"><div class=\"add-buttons\"><h3>Add</h3><a href=\"#\" class=\"modal-button members-btn\"><span class=\"icon-member icon-small\"></span>Members</a><a href=\"#\" class=\"modal-button labels-btn\"><span class=\"icon-label icon-small\"></span>Labels</a><a href=\"#\" class=\"modal-button checklist-btn\"><span class=\"icon-checklist icon-small\"></span>Checklist</a><a href=\"#\" class=\"modal-button duedate-btn\"><span class=\"icon-duedate icon-small\"></span>Due Date</a><a href=\"#\" class=\"modal-button attachment-btn\"><span class=\"icon-attachment icon-small\"></span>Attachment</a></div><div class=\"action-buttons\"><h3>Actions</h3><a href=\"#\" class=\"modal-button move-btn\"><span class=\"icon-forward icon-small\"></span>Move</a><a href=\"#\" class=\"modal-button copy-btn\"><span class=\"icon-card icon-small\"></span>Copy</a><a href=\"#\" class=\"modal-button subscribe-btn\"><span class=\"icon-subscribe icon-small\"></span>Subscribe</a><a href=\"#\" class=\"modal-button archive-btn\"><span class=\"icon-archive icon-small\"></span>Archive</a></div><a href=\"#\">Share and more...</a></div>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"card-content\"><a href=\"#\" class=\"card-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></div>";
},"useData":true});

this["JST"]["comment"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"icon-member icon-xlarge\"></span><div class=\"comment-content\"><h4>"
    + alias4(((helper = (helper = helpers.user || (depth0 != null ? depth0.user : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user","hash":{},"data":data}) : helper)))
    + "</h4><div class=\"comment-text comment-bg\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</div><p>"
    + alias4((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias2).call(alias1,(depth0 != null ? depth0.dateTime : depth0),{"name":"formatDateTime","hash":{},"data":data}))
    + " - <a href=\"#\" class=\"edit-comment\">Edit</a> - <a href=\"#\" class=\"delete-comment\">Delete</a></p></div>";
},"useData":true});

this["JST"]["due_date"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"popover-header\"><a href=\"#\"><span class=\"icon-small icon-cancel\"></span></a>Change Due Date</div><div class=\"popover-content\"><input type=\"text\" class=\"due-date-calendar\" name=\"date\" placeholder=\"Enter Date...\" /><input type=\"text\" class=\"due-date-calendar\" name=\"time\" placeholder=\"Enter Time...\" /><div class=\"date-picker\"></div><div class=\"date-picker-controls\"><input type=\"submit\" value=\"Save\" class=\"submit-btn save-date\" /><input type=\"submit\" value=\"Remove\" class=\"submit-btn date-remove\" /></div></div>";
},"useData":true});

this["JST"]["labels"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"popover-header\"><a href=\"#\"><span class=\"icon-small icon-cancel\"></span></a>Labels</div><div class=\"popover-content\"><input type=\"text\" name=\"search-labels\" placeholder=\"Search labels...\" /><div class=\"label-wrapper\"><div class=\"label green\" data-color=\"green\"><span class=\"icon-small icon-check selected-label light\"></span></div><a href=\"#\" class=\"edit-label\"><span class=\"icon-large icon-edit\"></span></a></div><div class=\"label-wrapper\"><div class=\"label yellow\" data-color=\"yellow\"><span class=\"icon-small icon-check selected-label light\"></span></div><a href=\"#\" class=\"edit-label\"><span class=\"icon-large icon-edit\"></span></a></div><div class=\"label-wrapper\"><div class=\"label orange\" data-color=\"orange\"><span class=\"icon-small icon-check selected-label light\"></span></div><a href=\"#\" class=\"edit-label\"><span class=\"icon-large icon-edit\"></span></a></div><div class=\"label-wrapper\"><div class=\"label red\" data-color=\"red\"><span class=\"icon-small icon-check selected-label light\"></span></div><a href=\"#\" class=\"edit-label\"><span class=\"icon-large icon-edit\"></span></a></div><div class=\"label-wrapper\"><div class=\"label purple\" data-color=\"purple\"><span class=\"icon-small icon-check selected-label light\"></span></div><a href=\"#\" class=\"edit-label\"><span class=\"icon-large icon-edit\"></span></a></div><div class=\"label-wrapper\"><div class=\"label blue\" data-color=\"blue\"><span class=\"icon-small icon-check selected-label light\"></span></div><a href=\"#\" class=\"edit-label\"><span class=\"icon-large icon-edit\"></span></a></div></div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"list\"><div class=\"list-header\"><div class=\"header-draggable\"></div><div class=\"list-name\"><textarea>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</textarea></div><a class=\"button\"><span class=\"icon-small icon-more\"></span></a></div><a href=\"#\" class=\"add-new-card\">Add new...</a></div>";
},"useData":true});

this["JST"]["newCard"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"new-card-form\"><div class=\"card-wrapper\"><div class=\"card-content\"><textarea class=\"new-card-textarea\"></textarea></div></div><div class=\"new-card-controls\"><input type=\"submit\" value=\"Add\" class=\"submit-btn\" /><a href=\"#\" class=\"cancel-btn\"><span class=\"icon-large cancel-btn icon-cancel\"></span></a></div></div>";
},"useData":true});