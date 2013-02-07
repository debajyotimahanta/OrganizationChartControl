module('Test cases for Person, Manager model and collection', {
  setup: function() {

  	this.deba = new app.Person({Id:"aonus1\\9dmahant",Name:"Debajyoti Mahanta",Designation:"Team Lead"});
  	var manager = new app.Person({Id:"aonus1\\dsullivan",Name:"Dave Sullivan",Designation:"Manager"});
  	var jim = new app.Person({Id:"aonus1\\jwittie",Name:"Debajyoti Mahanta",Designation:"Team Lead"});
	var manager = new app.Person({Id:"aonus1\\dsullivan",Name:"Dave Mahanta",Designation:"Team Lead"});
	jim.SetManager(manager);
	var oriel = new app.Person({Id:"aonus1\\omaxima",Name:"Oriel Maxima",Designation:"Developer"});
	oriel.SetManager(manager);
	var mike = new app.Person({Id:"aonus1\\fullton",Name:"Mike Fluton",Designation:"Manager"});
	mike.SetManager(manager);
    
  },
  teardown: function() {
    //teardown for Test cases for Person, Manager model and collection
  }
});

test("Can be created with default values for its attributes.", function() {
	//We will need to check for 3 properties, check for naviation
	//properties manager to navigate to your manager
	expect(5);


	//test case for deba constructor
	
	equal(this.deba.get("Id"), "aonus1\\9dmahant");
	equal(this.deba.get("Name"), "Debajyoti Mahanta");
	equal(this.deba.get("Designation"), "Team Lead");

	//set value for manager and make sure it links up
	var manager = new app.Manager();

	
	
	this.deba.SetManager(this.manager);

	equal(this.deba.GetManager(),this.manager);

	

	var all=new app.Persons([this.deba,this.jim,this.oriel,this.mike]);
	equal(all.length,4);


});

module('Test cases for person controller', {
	setup: function() {
		var deba = new app.Person({Id:"aonus1\\9dmahant",Name:"Debajyoti Mahanta",Designation:"Team Lead"});
		var manager = new app.Person({Id:"aonus1\\dsullivan",Name:"Dave Sullivan",Designation:"Manager"});
		var jim = new app.Person({Id:"aonus1\\jwittie",Name:"Debajyoti Mahanta",Designation:"Team Lead"});

		jim.SetManager(manager);
		var oriel = new app.Person({Id:"aonus1\\omaxima",Name:"Oriel Maxima",Designation:"Developer"});
		oriel.SetManager(manager);
		var mike = new app.Person({Id:"aonus1\\fullton",Name:"Mike Fluton",Designation:"Manager"});
		mike.SetManager(manager);

		this.all = new app.Persons([deba,jim,oriel,mike]);
		
	},
	teardown: function() {
	//teardown for Test cases for person controller
}
});
	
test('test cases for person controller', 1, function() {
	var f1=this.all.first();
	
  	var view = new app.PersonView({person: f1});
	var result=view.render();
	console.log(result.el);
	equal(result.el,"");

});