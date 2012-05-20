var Point = Class.create({
	name: '',
	xpos: 0,
	ypos: 0,
	description: '',
	
	initialize: function(name, xpos, ypos, description) {
		this.name = name;
		this.xpos = xpos;
		this.ypos = ypos;
		this.description = description || this.description;
		this.attachListeners();
	},
	attachListeners: function() {
	},
	getName: function() {
		return this.name;
	},
	getXPos: function() {
		return this.xpos;
	},
	getYPos: function() {
		return this.ypos;
	},
	getDOMElement: function() {
		var circle,
			point = new Element('div', {
			class: 'point',
			style: 'left:' + this.getXPos() + 'px;top:' + this.getYPos() + 'px;'
		});
		
		circle = new Element('div', {
			id: this.getIndex(),
			class: 'circle'
		});
		circle.insert(new Element('div', { class: 'outer-circle' }));
		circle.insert(new Element('div', { class: 'middle-circle' }));
		circle.insert(new Element('div', { class: 'inner-circle' }));
		circle.observe('mouseover', this.onMouseover.bind(this));
		circle.observe('mouseout', this.onMouseout.bind(this));
		point.insert(circle);
		return point;
	},
	onMouseover: function(evt) {
		var circleId = this.getIndex();
		if ($(circleId)) {
			$$('#' + circleId + ' div.outer-circle').each(function(e) {
				e.addClassName('hover');
			});
			$$('#' + circleId + ' div.middle-circle').each(function(e) {
				e.addClassName('hover');
			});
		}
	},
	onMouseout: function(evt) {
		var circleId = this.getIndex();
		if ($(circleId)) {
			$$('#' + circleId + ' div.outer-circle').each(function(e) {
				e.removeClassName('hover');
			});
			$$('#' + circleId + ' div.middle-circle').each(function(e) {
				e.removeClassName('hover');
			});
		}
	},
	getIndex: function() {
		return 'point_' + this.name.toLowerCase().replace(' ', '') + '_x' + this.xpos + '_y' + this.ypos
	},
	selectPoint: function() {
		var availablePoints = $('availablePoints'),
			selectedPoints = $('selectedPoints'),
			selectedPoint;
		
		if (availablePoints) {
			$$('#availablePoints #li_' + this.getIndex()).each(function(e) {
				e.addClassName('selected');
			});
			$$('#availablePoints #cbx_' + this.getIndex()).each(function(e) {
				e.checked = true;
			});
		}
		
		if (selectedPoints) {
			selectedPoint = new Element('li', {
				id: 'selectedPoint_' + this.getIndex()
			}).update(this.name);
			selectedPoint.observe('click', (function(evt) {
				this.deselectPoint();
			}).bind(this));
			selectedPoints.insert(selectedPoint);
		}
	},
	deselectPoint: function() {
		$$('#availablePoints #li_' + this.getIndex()).each(function(e) {
				e.removeClassName('selected');
		});
		$$('#availablePoints #cbx_' + this.getIndex()).each(function(e) {
			e.checked = false;
		});
		$$('ul#selectedPoints #selectedPoint_' + this.getIndex()).each(function(e) {
			e.remove();
		});
	}
});