 var BodyMapPart = Class.create({
	name: '',
	xpos: 0,
	ypos: 0,
	initClass: '',
	initialize: function(name, xpos, ypos, initClass) {
		this.initProperties(name, xpos, ypos, initClass);
	},
	initProperties: function(name, xpos, ypos, initClass) {
		this.name = name;
		this.xpos = xpos;
		this.ypos = ypos;
		this.initClass = initClass;
	},
	getXPos: function() {
		return this.xpos;
	},
	getYPos: function() {
		return this.ypos;
	},
	getDOMElement: function() {
		var bodyMapPartContainer = new Element('div', {
			class: 'bodyMapPartContainer',
			style: 'left:' + this.getXPos() + 'px;top:' + this.getYPos() + 'px;'
		});
		var bodyMapPartImgContainer = new Element('div', {	
			class: 'bodyMapPartImgContainer ' + this.initClass
		});
		
		// Attach listeners to the image container
		bodyMapPartImgContainer.observe('mouseover', this.highlight.bind(this));
		bodyMapPartImgContainer.observe('mouseout', this.unhighlight.bind(this));
		bodyMapPartImgContainer.observe('click', this.select.bind(this));
		
		bodyMapPartContainer.insert(bodyMapPartImgContainer);
		return bodyMapPartContainer;
	},
	highlight: function(evt) {
		var ele = evt.element();
		if (!ele.hasClassName(this.initClass + '-hover')) {
			ele.addClassName(this.initClass + '-hover');
		}
	},
	unhighlight: function(evt) {
		var ele = evt.element();
		if (ele.hasClassName(this.initClass + '-hover')) {
			ele.removeClassName(this.initClass + '-hover');
		}
	},
	select: function(evt) {
		var ele = evt.element();
		if (!ele.hasClassName(this.initClass + '-click')) {
			//ele.addClassName(this.initClass + '-click');
		}
		Pincushion.index.hideBodyMap();
		Pincushion.index.loadBodyPart(this.name);
	},
	deselect: function(evt) {
		var ele = evt.element();
		if (ele.hasClassName(this.initClass + '-click')) {
			ele.removeClassName(this.initClass + '-click');
		}
	}
 });