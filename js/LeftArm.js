var LeftArm = Class.create(Arm, {
	initProperties: function() {
		this.name = 'Left Arm';
		this.xpos = 0;
		this.ypos = 0;
		this.imgPath = '';
	},
	createPoints: function() {
		this.points.push(new Point('Point1', 50, 50));
		this.points.push(new Point('Point2', 100, 50));
	}
});