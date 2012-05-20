var Pincushion = Pincushion || {};

Pincushion.index = {};
(function() {
	var x = Pincushion.index;
	
	x.setup = function() {
		// Create a map of the body
		var bodyMap = new BodyMap();
		$('bodyMap').insert(bodyMap.getDOMElement());
		
		x.attachListeners();
	};
	
	x.attachListeners = function() {
		$('backToBodyMap').observe('click', x.showBodyMap);
		$('togglePreview').observe('click', function(evt) {
			if (!$('pointHistoryContainer').hasClassName('pointHistoryContainer-open')) {
				$('pointHistoryContainer').addClassName('pointHistoryContainer-open');
			} else {
				$('pointHistoryContainer').removeClassName('pointHistoryContainer-open');
			}
		});
	};
	
	x.showBodyMap = function(evt) {
		// Unload any loaded body parts
		x.unloadBodyPart();
		
		// Show the map
		if ($('bodyPartSelector').getStyle('display') == 'none') {
			$('bodyPartSelector').appear({
				duration: 0.25,
				queue: 'end'
			});
		}
	};
	
	x.hideBodyMap = function(evt) {
		if ($('bodyPartSelector').getStyle('display') != 'none') {
			$('bodyPartSelector').fade({
				duration: 0.25,
				queue: 'end'
			});
		}
	};
	
	x.loadBodyPart = function(bodyPartClass) {
		var bodyPartClass = bodyPartClass.toLowerCase(),
			bodyPart,
			points,
			pointsListItem,
			pointsCheckbox,
			i;
		switch (bodyPartClass) {
			case 'head':
				bodyPart = new Head();
				break;
			case 'rightarm':
				bodyPart = new RightArm();
				break;
			case 'torso':
				bodyPart = new Torso();
				break;
			case 'leftarm':
				bodyPart = new LeftArm();
				break;
			case 'rightleg':
				bodyPart = new RightLeg();
				break;
			case 'leftleg':
				bodyPart = new LeftLeg();
				break;
			default:
				throw 'Invalid Body Part specified';
				break;
		}
		
		// Clear the contents of the body container
		x.unloadBodyPart();
		
		// Attach the new body part
		$('body').insert(bodyPart.getDOMElement());
		$('bodyContainer').appear({
			duration: 0.25
			,queue: 'end'
		});
		
		// Attach the list of points
		$('availablePoints').update();
		points = bodyPart.getPoints();
		for (i = 0; i < points.length; i++) {
			pointsListItem = new Element('li', {
				id: 'li_' + points[i].getIndex()
			});
			pointsCheckbox = new Element('input', {
				id: 'cbx_' + points[i].getIndex(),
				type: 'checkbox'
			});
			pointsCheckbox.observe('change', (function(evt) {
				if (this.pointsCheckbox.checked) {
					this.point.selectPoint();
				} else {
					this.point.deselectPoint();
				}
			}).bind({
				point: points[i],
				pointsCheckbox: pointsCheckbox,
				pointsListItem: pointsListItem
			}));
			pointsListItem.insert(pointsCheckbox);
			pointsListItem.insert(new Element('label', {
				'for': 'cbx_' + points[i].getIndex()
			}).update('<span class="bold">' + points[i].name + '</span> ' + points[i].description));
			pointsListItem.observe('mouseover', points[i].onMouseover.bind(points[i]));
			pointsListItem.observe('mouseout', points[i].onMouseout.bind(points[i]));
			$('availablePoints').insert(pointsListItem);
		}
	};
	
	x.unloadBodyPart = function() {
		// Fade out the body part if it's showing
		if ($('bodyContainer').getStyle('display') != 'none') {
			$('bodyContainer').fade({
				duration: 0.25
				,queue: 'end'
			});
		}
		
		// Clear out the contents
		$('body').update();
	};
}());

Event.observe(window, 'load', function(evt) {
	Pincushion.index.setup();
});