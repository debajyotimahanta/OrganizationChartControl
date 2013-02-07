var app = app || {};
$(function() {

	//This is a model for the person
	app.Person = Backbone.Model.extend({

		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		//Id is the id of the person its his domain id
		defaults: {
			Id:null,
			_manager: null
			

		},
		//this is the getter setter  method is used to set the manager of the person

		SetManager: function(manager) {
			this._manager = manager;
		},
		GetManager: function() {
			return this._manager;
		}
	});



})