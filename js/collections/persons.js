var app = app || {};
$(function() {
	//this is a collection of the person object
	app.Persons = Backbone.Collection.extend({
		model: app.Person

	});


})