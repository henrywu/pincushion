var BodyMap = Class.create({
	bodyMapParts: [],
	initialize: function() {
		this.bodyMapParts = [];
		this.createBodyMapParts();
	},
	createBodyMapParts: function() {
		this.bodyMapParts.push(new BodyMapPart('Head', 0, 0, 'bodyMapHead'));
		this.bodyMapParts.push(new BodyMapPart('RightArm', 0, 88, 'bodyMapRightArm'));
		this.bodyMapParts.push(new BodyMapPart('Torso', 45, 88, 'bodyMapTorso'));
		this.bodyMapParts.push(new BodyMapPart('LeftArm', 150, 88, 'bodyMapLeftArm'));
		this.bodyMapParts.push(new BodyMapPart('RightLeg', 45, 292, 'bodyMapRightLeg'));
		this.bodyMapParts.push(new BodyMapPart('LeftLeg', 98, 292, 'bodyMapLeftLeg'));
	},
	getDOMElement: function() {
		var bodyContainer = new Element('div', {
			class: 'bodyMapContainer'
		});
		for (var i = 0; i< this.bodyMapParts.length; i++) {
			bodyContainer.insert(this.bodyMapParts[i].getDOMElement());
		}
		return bodyContainer;
	}
});