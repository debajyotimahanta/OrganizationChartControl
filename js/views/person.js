var app = app || {};
$(function() {

	'use strict';

	//The view should reneder the document, only persons in the following order
	/*
	<ol id="slide">
        <li class="box">1</li>
        <li class="box">2</li>
        
    </ol>
	*/
	app.PersonView = Backbone.View.extend({
		tagName: 'div',

		initialize: function(param) {
			
			this._person = new app.Person();
			this._person=param.person;
			

		},
		template: _.template($('#item-template').html()),
		render: function() {
			
			// Clear out this element.
			$(this.el).empty();

			var renderedContent = this.template(this._person.toJSON());
			console.log(renderedContent);
    		$(this.el).html(renderedContent);
    		return this;

			
		}

	});


})