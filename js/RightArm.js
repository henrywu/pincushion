var RightArm = Class.create(Arm, {
	initProperties: function() {
		this.name = 'Right Arm';
		this.xpos = 0;
		this.ypos = 0;
		this.imgPath = '';
	},
	createPoints: function() {
		this.points.push(new Point('Point2', 100, 50));
	}
});