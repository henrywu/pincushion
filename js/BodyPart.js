var BodyPart = Class.create({
	name: '',
	xpos: 0,
	ypos: 0,
	imgPath: '',
	points: [],
	initialize: function() {
		this.points = [];
		this.initProperties();
		this.createPoints();
	},
	initProperties: function() {
		this.name = '';
		this.xpos = 0;
		this.ypos = 0;
		this.imgPath = '';
	},
	createPoints: function() {
		// Subclasses should implement this
	},
	getXPos: function() {
		return this.xpos;
	},
	getYPos: function() {
		return this.ypos;
	},
	getDOMElement: function() {
		var bodyPartContainer,
			bodyPartImgContainer,
			pointsContainer,
			i;
		
		bodyPartContainer = new Element('div', {
			class: 'bodyPartContainer',
			style: 'left:' + this.getXPos() + 'px;top:' + this.getYPos() + 'px;'
		});
		bodyPartImgContainer = new Element('div', {
			class: 'bodyPartImgContainer'
		});
		bodyPartImgContainer.insert(new Element('img', {
			src: this.imgPath
		}));
		pointsContainer = new Element('div', {
			class: 'pointsContainer'
		});
		for (i = 0; i < this.points.length; i++) {
			pointsContainer.insert(this.points[i].getDOMElement());
		}
		bodyPartContainer.insert(bodyPartImgContainer);
		bodyPartContainer.insert(pointsContainer);
		return bodyPartContainer;
	},
	getPoints: function() {
		return this.points;
	}
});