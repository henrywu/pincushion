var Head = Class.create(BodyPart, {
	initProperties: function() {
		this.name = 'Head';
		this.xpos = 18;
		this.ypos = 0;
		this.imgPath = 'img/head_left.png';
	},
	createPoints: function() {
		this.points.push(new Point('Point 1', 95, 190, 'Description 1'));
		this.points.push(new Point('Point 2', 95, 200, 'Description 2'));
		this.points.push(new Point('Point 3', 95, 230, 'Description 3'));
		this.points.push(new Point('Point 4', 95, 270, 'Description 4'));
		this.points.push(new Point('Point 5', 115, 300, 'Description 5'));
		this.points.push(new Point('Point 6', 145, 290, 'Description 6'));
		this.points.push(new Point('Point 7', 145, 220, 'Description 7'));
		this.points.push(new Point('Point 8', 145, 150, 'Description 8'));
	}
});