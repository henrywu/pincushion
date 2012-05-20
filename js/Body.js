var Body = Class.create({
	bodyParts: [],
	initialize: function() {
		this.bodyParts = [];
		this.createBodyParts();
	},
	createBodyParts: function() {
		this.bodyParts.push(new Temp());
	},
	getDOMElement: function() {
		var bodyContainer = new Element('div', {
			class: 'bodyContainer'
		});
		for (var i = 0; i < this.bodyParts.length; i++) {
			bodyContainer.insert(this.bodyParts[i].getDOMElement());
		}
		return bodyContainer;
	}
});