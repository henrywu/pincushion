<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Welcome to Pincushion - an acupuncture tool for tracking needle locations</title>
<link href="index.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/prototype/1.7.0.0/prototype.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/scriptaculous/1.9.0/scriptaculous.js"></script>
<script type="text/javascript" src="js/Point.js"></script>
<script type="text/javascript" src="js/BodyPart.js"></script>
<script type="text/javascript" src="js/Head.js"></script>
<script type="text/javascript" src="js/Torso.js"></script>
<script type="text/javascript" src="js/Arm.js"></script>
<script type="text/javascript" src="js/RightArm.js"></script>
<script type="text/javascript" src="js/LeftArm.js"></script>
<script type="text/javascript" src="js/Leg.js"></script>
<script type="text/javascript" src="js/RightLeg.js"></script>
<script type="text/javascript" src="js/LeftLeg.js"></script>
<script type="text/javascript" src="js/Body.js"></script>
<script type="text/javascript" src="js/BodyMap.js"></script>
<script type="text/javascript" src="js/BodyMapPart.js"></script>
<script type="text/javascript" src="js/index.js"></script>
</head>

<body>
	<div class="headerContainer">
		<div class="content">
			<div class="logo">
				Welcome to Pincushion
			</div>
		</div>
	</div>
	<div class="content">
		<?php /** Point Selector **/ ?>
		<div id="bodyContainer" style="display: none;">
			<div class="leftPane">
				<div id="backToBodyMap">
					<img src="img/icons/bodymap.png" />
					Pick a different body area
				</div>
				<div id="body"></div>
			</div>
			<div class="rightPane">
				<div class="promptContainer" style="margin-top: 80px;">
					<h1>Select your points</h1><br />
					<h2>A list of all points available in this region of the body is below.  Please check off the ones that you've used for your patient.</h2>
					<ul id="availablePoints"></ul>
				</div>
			</div>
		</div>
		
		<?php /** Body Map **/ ?>
		<div id="bodyPartSelector">
			<div class="leftPane">
				<div id="bodyMap"></div>
			</div>
			<div class="rightPane">
				<div class="promptContainer" style="margin-top: 250px;">
					<h1>Choose a body area</h1>
				</div>
			</div>
		</div>
	</div>
	<div id="pointHistoryContainer" class="pointHistoryContainer">
		<div class="togglePreviewContainer right">
			<button id="togglePreview">Toggle Points Review</button>
		</div>
		<div class="content">
			<h1>Selected Points<h1>
			<h3>These are points that you have needled for this patient.  Tap any point to remove it.  When have you selected all your points, press Next to proceed.<h3>
			<div class="selectedPointsContainer">
				<ul id="selectedPoints"></ul>
				<button id="btn_next" class="action">Next</button>
			</div>
		</div>
	</div>
	<!--
	<div class="footerContainer">
	</div>
	-->
</body>
</html>
