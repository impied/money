window.Money.GameModel = Backbone.Model.extend({
	
});

window.Money.Hole = Backbone.Model.extend({
	defaults:{
		index:0,
		holeNumber:0,
		par:4
	}
});

window.Money.Course = Backbone.Collection.extend({
	model:window.Money.Hole
});

