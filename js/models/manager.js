var app = app || {};
$(function() {
	app.Manager = app.Person.extend({
		initialize: function(options) {
			app.Person.prototype.initialize.call(this, [options]);
			
		}
	})

})