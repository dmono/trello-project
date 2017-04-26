this["JST"] = this["JST"] || {};

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"board-wrapper\"><div class=\"board-content\"><div class=\"board-header\"><a class=\"button board-title\" href=\"#\">My New Board</a><a class=\"button board-starred\" href=\"#\"><span class=\"icon-small icon-star light\"></span></a><a class=\"button board-visibility\" href=\"#\"><span class=\"icon-small icon-private light\"></span><p>Private</p></a><a class=\"button board-menu\" href=\"#\"><span class=\"icon-small icon-more light\"></span><p>Show Menu</p></a></div><div class=\"board-lists\"><div id=\"board\"><div class=\"list-wrapper add-list\"><div class=\"overlay\"></div><div class=\"add-list-placeholder\"><p>Add a list</p></div><form class=\"add-list-form list\"><input type=\"text\" name=\"name\" placeholder=\"Add a list...\" /><div class=\"add-list-controls\"><input type=\"submit\" value=\"Save\" class=\"submit-btn\" /><a href=\"#\" class=\"cancel-btn\"><span class=\"icon-large cancel-btn icon-cancel\"></span></a></div></form></div></div></div></div></div>";
},"useData":true});

this["JST"]["card_modal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"icon-subscribe icon-small\"></span>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<p>Description <a href=\"#\">Edit</a></p><div class=\"description-text markdown\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"empty-description\"><span class=\"icon-description icon-large\"></span>Edit the description...</a>";
},"7":function(container,depth0,helpers,partials,data) {
    return "<div class=\"subscribe-active\"><span class=\"icon-small icon-check selected-color light\"></span></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"header\"><span class=\"icon-card icon-xlarge modal-header-icon\"></span><a href=\"#\" class=\"icon-cancel icon-xlarge close-modal\"></a><div class=\"title\"><textarea>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea></div><div class=\"current-list\"><p>in list</p><a href=\"#\"></a>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div><div class=\"main-content\"><div class=\"card-information\"><div class=\"description\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "<div class=\"edit-description\"><textarea></textarea><div class=\"description-controls\"><input type=\"submit\" value=\"Save\" class=\"submit-btn save-description\" /><a href=\"#\" class=\"cancel-btn close-description\"><span class=\"icon-xlarge cancel-btn icon-cancel\"></span></a></div></div></div></div><div class=\"card-comments\"><div class=\"comment-header\"><span class=\"icon-comment icon-xlarge\"></span><h3>Add Comment</h3></div><div class=\"new-comment\"><span class=\"icon-member icon-xlarge\"></span><textarea placeholder=\"Write a comment...\" class=\"comment-bg\"></textarea><div class=\"comment-controls\"><input type=\"submit\" value=\"Send\" class=\"submit-btn\" /></div></div></div><div class=\"card-activity\"><div class=\"activity-header\"><span class=\"icon-activity icon-xlarge\"></span><h3>Activity</h3></div><div class=\"activity-content\"></div></div></div><div class=\"sidebar\"><div class=\"add-buttons\"><h3>Add</h3><a href=\"#\" class=\"modal-button members-btn\"><span class=\"icon-member icon-small\"></span>Members</a><a href=\"#\" class=\"modal-button labels-btn\"><span class=\"icon-label icon-small\"></span>Labels</a><a href=\"#\" class=\"modal-button checklist-btn\"><span class=\"icon-checklist icon-small\"></span>Checklist</a><a href=\"#\" class=\"modal-button duedate-btn\"><span class=\"icon-duedate icon-small\"></span>Due Date</a><a href=\"#\" class=\"modal-button attachment-btn\"><span class=\"icon-attachment icon-small\"></span>Attachment</a></div><div class=\"action-buttons\"><h3>Actions</h3><a href=\"#\" class=\"modal-button move-btn\"><span class=\"icon-forward icon-small\"></span>Move</a><a href=\"#\" class=\"modal-button copy-btn\"><span class=\"icon-card icon-small\"></span>Copy</a><a href=\"#\" class=\"modal-button subscribe-btn\"><span class=\"icon-subscribe icon-small\"></span>Subscribe"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a><a href=\"#\" class=\"modal-button archive-btn\"><span class=\"icon-archive icon-small\"></span>Archive</a></div><a href=\"#\">Share and more...</a></div>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"card-content\"><a href=\"/cards/"
    + alias3((helpers.formatCardUrl || (depth0 && depth0.formatCardUrl) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),(depth0 != null ? depth0.title : depth0),{"name":"formatCardUrl","hash":{},"data":data}))
    + "\" class=\"card-title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
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

this["JST"]["copy_card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"popover-header\"><a href=\"#\" class=\"close-popover\"><span class=\"icon-small icon-cancel\"></span></a>Move Card</div><div class=\"popover-content\"><dl><dt><label for=\"list\"><p>List</p></label></dt><dd><select id=\"list-options\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></dd></dl><dl><dt><label for=\"position\"><p>Position</p></label></dt><dd><select id=\"position-options\"></select></dd></dl><div class=\"controls\"><input type=\"submit\" value=\"Move\" class=\"submit-btn\" /></div></div>";
},"useData":true});

this["JST"]["due_date"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"popover-header\"><a href=\"#\" class=\"close-popover\"><span class=\"icon-small icon-cancel\"></span></a>Change Due Date</div><div class=\"popover-content\"><input type=\"text\" class=\"due-date-calendar\" name=\"date\" placeholder=\"Enter Date...\" /><input type=\"text\" class=\"due-date-calendar\" name=\"time\" placeholder=\"Enter Time...\" /><div class=\"date-picker\"></div><div class=\"controls\"><input type=\"submit\" value=\"Save\" class=\"submit-btn save-date\" /><input type=\"submit\" value=\"Remove\" class=\"submit-btn delete\" /></div></div>";
},"useData":true});

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"/\" class=\"header-logo\" alt=\"Trello Home\"><span class=\"header-logo-image\"></span></a><a href=\"#\" class=\"header-button\"><span class=\"icon-large icon-board light\"></span><p>Board</p></a><div class=\"header-search\"><input type=\"text\" name=\"search\" class=\"search-field\" /><span class=\"icon-large icon-search light\"></span><span class=\"icon-large icon-cancel close-search\"></span></div><div class=\"user-info\"><a href=\"#\" class=\"header-button\"><span class=\"icon-large icon-plus light\"></span></a><a href=\"#\" class=\"header-button\"><span class=\"icon-large icon-info light\"></span></a><a href=\"#\" class=\"header-button\"><span class=\"icon-large icon-notification light\"></span></a></div>";
},"useData":true});

this["JST"]["labels_edit"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"popover-header\"><a href=\"#\" class=\"popover-back\"><span class=\"icon-small icon-back\"></span></a><a href=\"#\" class=\"close-popover\"><span class=\"icon-small icon-cancel\"></span></a>Change Label</div><div class=\"popover-content\"><div class=\"label-wrapper\"><div class=\"edit-name\"><label for=\"name\"><p>Name</p></label><input type=\"text\" name=\"name\" /></div><div class=\"select-color\"><label><p>Select a color</p></label><div class=\"color-picker green\" data-color=\"green\"><span class=\"icon-small icon-check selected-color light\"></span></div><div class=\"color-picker yellow\" data-color=\"yellow\"><span class=\"icon-small icon-check selected-color light\"></span></div><div class=\"color-picker orange\" data-color=\"orange\"><span class=\"icon-small icon-check selected-color light\"></span></div><div class=\"color-picker red\" data-color=\"red\"><span class=\"icon-small icon-check selected-color light\"></span></div><div class=\"color-picker purple\" data-color=\"purple\"><span class=\"icon-small icon-check selected-color light\"></span></div><div class=\"color-picker blue\" data-color=\"blue\"><span class=\"icon-small icon-check selected-color light\"></span></div><div class=\"color-picker sky\" data-color=\"sky\"><span class=\"icon-small icon-check selected-color light\"></span></div><div class=\"color-picker lime\" data-color=\"lime\"><span class=\"icon-small icon-check selected-color light\"></span></div><div class=\"color-picker pink\" data-color=\"pink\"><span class=\"icon-small icon-check selected-color light\"></span></div><div class=\"color-picker black\" data-color=\"black\"><span class=\"icon-small icon-check selected-color light\"></span></div><div class=\"color-picker none\" data-color=\"none\"><span class=\"icon-small icon-check selected-color light\"></span></div><p>No color.<br /> This won't show up on the front of cards.</p></div><div class=\"controls\"><input type=\"submit\" class=\"submit-btn\" value=\"Save\" name=\"save\" /></div></div></div>";
},"useData":true});

this["JST"]["labels"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"label-wrapper\"><div class=\"label "
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\" data-color=\""
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p><span class=\"icon-small icon-check selected-label light\"></span></div><a href=\"#\" class=\"edit-label\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span class=\"icon-large icon-edit\"></span></a></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"popover-header\"><a href=\"#\" class=\"close-popover\"><span class=\"icon-small icon-cancel\"></span></a>Labels</div><div class=\"popover-content\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"list\"><div class=\"list-header\"><div class=\"header-draggable\"></div><div class=\"list-name\"><textarea>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</textarea></div><a class=\"button\"><span class=\"icon-small icon-more\"></span></a></div><a href=\"#\" class=\"add-new-card\">Add new...</a></div>";
},"useData":true});

this["JST"]["move_card_positions"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<option>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.positions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["move_card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"popover-header\"><a href=\"#\" class=\"close-popover\"><span class=\"icon-small icon-cancel\"></span></a>Move Card</div><div class=\"popover-content\"><dl><dt><label for=\"list\"><p>List</p></label></dt><dd><select id=\"list-options\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></dd></dl><dl><dt><label for=\"position\"><p>Position</p></label></dt><dd><select id=\"position-options\"></select></dd></dl><div class=\"controls\"><input type=\"submit\" value=\"Move\" class=\"submit-btn\" /></div></div>";
},"useData":true});

this["JST"]["newCard"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"new-card-form\"><div class=\"card-wrapper\"><div class=\"card-content\"><textarea class=\"new-card-form\"></textarea></div></div><div class=\"new-card-controls\"><input type=\"submit\" value=\"Add\" class=\"submit-btn\" /><a href=\"#\" class=\"cancel-btn\"><span class=\"icon-large cancel-btn icon-cancel\"></span></a></div></div>";
},"useData":true});

this["JST"]["search"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"search-results\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<li><a href=\"/cards/"
    + alias3((helpers.formatCardUrl || (depth0 && depth0.formatCardUrl) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),(depth0 != null ? depth0.title : depth0),{"name":"formatCardUrl","hash":{},"data":data}))
    + "\"><h3>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3></a><p>in <h4>"
    + alias3(((helper = (helper = helpers.list || (depth0 != null ? depth0.list : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"list","hash":{},"data":data}) : helper)))
    + "</h4> on <h4>"
    + alias3(((helper = (helper = helpers.board || (depth0 != null ? depth0.board : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"board","hash":{},"data":data}) : helper)))
    + "</h4></p></li>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<p class=\"no-result\">We couldn't find any cards that matched your search.</p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"popover-content\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.results : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});