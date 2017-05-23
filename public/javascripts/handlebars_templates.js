this["JST"] = this["JST"] || {};

this["JST"]["archive"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p><a href=\"#\" class=\"send-to-board\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "><span class=\"icon-refresh icon-small\"></span>Send to Board</a></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"popover-header\"><a href=\"#\" class=\"close-popover\"><span class=\"icon-small icon-cancel\"></span></a>Archive</div><div class=\"popover-content\"><div class=\"archive-wrapper\"><h4>Archived Lists</h4><ul class=\"archived-lists\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><h4>Archived Cards</h4><div class=\"archived-cards\"></div></div></div>";
},"useData":true});

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"board-content\"><div class=\"board-header\"><a class=\"button board-title\" href=\"#\">My New Board</a><a class=\"button board-starred\" href=\"#\"><span class=\"icon-small icon-star light\"></span></a><a class=\"button board-visibility\" href=\"#\"><span class=\"icon-small icon-private light\"></span><p>Private</p></a><a class=\"button board-archive\" href=\"#\"><span class=\"icon-small icon-more light\"></span><p>Show Archive</p></a></div><div class=\"board-lists\"><div id=\"board\"><div class=\"list-wrapper add-list\"><div class=\"add-list-placeholder\"><p>Add a list</p></div><form class=\"add-list-form list\"><input type=\"text\" name=\"name\" placeholder=\"Add a list...\" /><div class=\"add-list-controls\"><input type=\"submit\" value=\"Save\" class=\"submit-btn\" /><a href=\"#\" class=\"cancel-btn\"><span class=\"icon-large cancel-btn icon-cancel\"></span></a></div></form></div></div></div></div>";
},"useData":true});

this["JST"]["card_modal_labels"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#\" class=\"card-modal-label "
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "\"><p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p> </a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h5>Labels</h5><div class=\"label-wrapper\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["JST"]["card_modal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class='modal-archived-msg'><span class=\"icon-archive icon-xlarge\"></span><p>This card is archived.</p></div>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<span class=\"icon-subscribe icon-small\"></span>";
},"5":function(container,depth0,helpers,partials,data) {
    return "<div class=\"card-modal-labels\"></div>";
},"7":function(container,depth0,helpers,partials,data) {
    return "<div class=\"card-modal-due-date\"><h5>Due Date</h5><a href=\"#\"></a></div>";
},"9":function(container,depth0,helpers,partials,data) {
    return "<div><h5>Description</h5><a href=\"#\" class=\"display-edit\">Edit</a></div><div class=\"description-text markdown\"></div>";
},"11":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"empty-description display-edit\"><span class=\"icon-description icon-large\"></span>Edit the description...</a>";
},"13":function(container,depth0,helpers,partials,data) {
    return "<div class=\"subscribe-active\"><span class=\"icon-small icon-check selected-color light\"></span></div>";
},"15":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"modal-button archive-btn\"><span class=\"icon-archive icon-small\"></span>Archive</a>";
},"17":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"modal-button send-to-board-btn\"><span class=\"icon-refresh icon-small\"></span>Send to Board</a><a href=\"#\" class=\"modal-button card-modal-delete\"><span class=\"icon-delete icon-small light\"></span>Delete</a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"header\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<a href=\"#\" class=\"icon-cancel icon-xlarge close-modal\"></a><div class=\"title\"><span class=\"icon-card icon-xlarge modal-header-icon\"></span><textarea>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea></div><div class=\"current-list\"><p>in list</p><a href=\"#\"></a>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div><div class=\"main-content\"><div class=\"card-information\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dueDate : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"description\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "<div class=\"edit-description\"><textarea></textarea><div class=\"description-controls\"><input type=\"submit\" value=\"Save\" class=\"submit-btn save-description\" /><a href=\"#\" class=\"cancel-btn close-description\"><span class=\"icon-xlarge cancel-btn icon-cancel\"></span></a></div></div></div></div><div class=\"card-comments\"><div class=\"comment-header\"><span class=\"icon-comment icon-xlarge\"></span><h3>Add Comment</h3></div><div class=\"new-comment\"><span class=\"icon-member icon-xlarge\"></span><textarea placeholder=\"Write a comment...\" class=\"comment-bg\"></textarea><div class=\"comment-controls\"><input type=\"submit\" value=\"Send\" class=\"submit-btn\" /></div></div></div><div class=\"card-activity\"><div class=\"activity-header\"><span class=\"icon-activity icon-xlarge\"></span><h3>Activity</h3></div><div class=\"activity-content\"></div></div></div><div class=\"sidebar\"><div class=\"add-buttons\"><h3>Add</h3><a class=\"modal-button members-btn disabled-btn\"><span class=\"icon-member icon-small\"></span>Members</a><a href=\"#\" class=\"modal-button labels-btn\"><span class=\"icon-label icon-small\"></span>Labels</a><a class=\"modal-button checklist-btn disabled-btn\"><span class=\"icon-checklist icon-small\"></span>Checklist</a><a href=\"#\" class=\"modal-button duedate-btn\"><span class=\"icon-duedate icon-small\"></span>Due Date</a><a class=\"modal-button attachment-btn disabled-btn\"><span class=\"icon-attachment icon-small\"></span>Attachment</a></div><div class=\"action-buttons\"><h3>Actions</h3><a href=\"#\" class=\"modal-button move-btn\"><span class=\"icon-forward icon-small\"></span>Move</a><a href=\"#\" class=\"modal-button copy-btn\"><span class=\"icon-card icon-small\"></span>Copy</a><a href=\"#\" class=\"modal-button subscribe-btn\"><span class=\"icon-subscribe icon-small\"></span>Subscribe"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a>"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"unless","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><p>Share and more...</p></div>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\""
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + " card-label\" title=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"></div>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<span class=\"icon-subscribe icon-small\"></span>";
},"5":function(container,depth0,helpers,partials,data) {
    return "<span><span class=\"icon-duedate icon-small\"></span><span class=\"icon-text\">"
    + container.escapeExpression((helpers.formatShortDueDate || (depth0 && depth0.formatShortDueDate) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.dueDate : depth0),{"name":"formatShortDueDate","hash":{},"data":data}))
    + "</span></span>";
},"7":function(container,depth0,helpers,partials,data) {
    return "<span class=\"icon-description icon-small\"></span>";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span><span class=\"icon-comment icon-small\"></span><span class=\"icon-text\">"
    + container.escapeExpression(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"comments","hash":{},"data":data}) : helper)))
    + "</span></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"card-content\"><a href=\"/cards/"
    + alias3((helpers.formatCardUrl || (depth0 && depth0.formatCardUrl) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),(depth0 != null ? depth0.title : depth0),{"name":"formatCardUrl","hash":{},"data":data}))
    + "\" class=\"card-title\"><div class=\"card-labels\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "<div class=\"status-icons\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dueDate : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></a></div>";
},"useData":true});

this["JST"]["comment"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"icon-member icon-xlarge\"></span><div class=\"comment-content\"><h4>"
    + alias4(((helper = (helper = helpers.user || (depth0 != null ? depth0.user : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user","hash":{},"data":data}) : helper)))
    + "</h4><div class=\"comment-text comment-bg\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</div><p>"
    + alias4((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias2).call(alias1,(depth0 != null ? depth0.createdAt : depth0),{"name":"formatDateTime","hash":{},"data":data}))
    + " - <a href=\"#\" class=\"delete-comment\">Delete</a></p></div>";
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

  return "<div class=\"popover-header\"><a href=\"#\" class=\"close-popover\"><span class=\"icon-small icon-cancel\"></span></a>Copy Card</div><div class=\"popover-content\"><dl><dt><label for=\"title\"><p>Title</p></label></dt><dd><textarea></textarea></dd></dl><dl><label><p>Copy to...</p></label><dt><label><p>List</p></label></dt><dd><select id=\"list-options\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></dd><dt><label><p>Position</p></label></dt><dd><select id=\"position-options\"></select></dd></dl><div class=\"controls\"><input type=\"submit\" value=\"Create Card\" class=\"submit-btn\" /></div></div>";
},"useData":true});

this["JST"]["due_date"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"popover-header\"><a href=\"#\" class=\"close-popover\"><span class=\"icon-small icon-cancel\"></span></a>Change Due Date</div><div class=\"popover-content\"><input type=\"text\" class=\"due-date-calendar\" name=\"date\" placeholder=\"Enter Date...\" /><input type=\"text\" class=\"due-date-calendar\" name=\"time\" placeholder=\"Enter Time...\" /><div class=\"date-picker\"></div><div class=\"controls\"><input type=\"submit\" value=\"Save\" class=\"submit-btn save-date\" /><input type=\"submit\" value=\"Remove\" class=\"submit-btn delete remove-date\" /></div></div>";
},"useData":true});

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"/\" class=\"header-logo\" alt=\"Trello Home\"><span class=\"header-logo-image\"></span></a><a href=\"#\" class=\"header-button\"><span class=\"icon-large icon-board light\"></span><p>Board</p></a><div class=\"header-search\"><input type=\"text\" name=\"search\" class=\"search-field\" /><span class=\"icon-large icon-search light\"></span><span class=\"icon-large icon-cancel close-search\"></span></div><div class=\"user-info\"><a href=\"#\" class=\"header-button\"><span class=\"icon-large icon-plus light\"></span></a><a href=\"#\" class=\"header-button\"><span class=\"icon-large icon-info light\"></span></a><a href=\"#\" class=\"header-button notifications-btn\"><span class=\"icon-large icon-notification light\"></span></a></div>";
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

this["JST"]["list_actions"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"list-subscribe-active\"><span class=\"icon-small icon-check selected-color light\"></span></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"popover-header\"><a href=\"#\" class=\"close-popover\"><span class=\"icon-small icon-cancel\"></span></a>List Actions</div><div class=\"popover-content\"><div class=\"list-actions-wrapper\"><ul><!-- <li><a href=\"#\" class=\"list-subscribe\">Subscribe</a>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li> --><li><a href=\"#\" class=\"list-archive\">Archive This List</a></li></ul></div></div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"list\"><div class=\"list-header\"><div class=\"list-name\"><textarea>"
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
    return "<div class=\"new-card-form\"><div class=\"card-wrapper\"><div class=\"card-content\"><textarea class=\"new-card-textarea\"></textarea></div></div><div class=\"new-card-controls\"><input type=\"submit\" value=\"Add\" class=\"submit-btn submit-new-card\" /><a href=\"#\" class=\"cancel-btn\"><span class=\"icon-large cancel-btn icon-cancel\"></span></a></div></div>";
},"useData":true});

this["JST"]["notifications"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.activity : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"activity-wrapper\"><span class=\"icon-member icon-xlarge\"></span><div class=\"activity-content\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.listName : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "<span class=\"notification-time\">"
    + container.escapeExpression((helpers.formatActivityTime || (depth0 && depth0.formatActivityTime) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.createdAt : depth0),{"name":"formatActivityTime","hash":{},"data":data}))
    + "</span></div></div>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<strong>"
    + alias4(((helper = (helper = helpers.user || (depth0 != null ? depth0.user : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user","hash":{},"data":data}) : helper)))
    + "</strong> "
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + " the card <a href=\"/cards/"
    + alias4((helpers.formatCardUrl || (depth0 && depth0.formatCardUrl) || alias2).call(alias1,(depth0 != null ? depth0.cardId : depth0),(depth0 != null ? depth0.cardTitle : depth0),{"name":"formatCardUrl","hash":{},"data":data}))
    + "\">"
    + alias4(((helper = (helper = helpers.cardTitle || (depth0 != null ? depth0.cardTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardTitle","hash":{},"data":data}) : helper)))
    + "</a> to "
    + alias4(((helper = (helper = helpers.listName || (depth0 != null ? depth0.listName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listName","hash":{},"data":data}) : helper)))
    + " on My New Board ";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<strong>"
    + alias4(((helper = (helper = helpers.user || (depth0 != null ? depth0.user : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user","hash":{},"data":data}) : helper)))
    + "</strong> "
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + " the card <a href=\"/cards/"
    + alias4((helpers.formatCardUrl || (depth0 && depth0.formatCardUrl) || alias2).call(alias1,(depth0 != null ? depth0.cardId : depth0),(depth0 != null ? depth0.cardTitle : depth0),{"name":"formatCardUrl","hash":{},"data":data}))
    + "\">"
    + alias4(((helper = (helper = helpers.cardTitle || (depth0 != null ? depth0.cardTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardTitle","hash":{},"data":data}) : helper)))
    + "</a> on My New Board ";
},"7":function(container,depth0,helpers,partials,data) {
    return "No notifications at this time.";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"popover-header\"><a href=\"#\" class=\"close-popover\"><span class=\"icon-small icon-cancel\"></span></a>Notifications</div><div class=\"popover-content\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.activity : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
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
    + "</h3></a><p>in <strong>"
    + alias3(((helper = (helper = helpers.listName || (depth0 != null ? depth0.listName : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"listName","hash":{},"data":data}) : helper)))
    + "</strong> on <strong>My New Board</strong></p></li>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<p class=\"no-result\">We couldn't find any cards that matched your search.</p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"popover-content\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.results : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});