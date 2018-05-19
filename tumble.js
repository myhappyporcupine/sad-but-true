(function drawTumble() {
	const canvas = document.getElementById('tumble-canvas');
	const ctx = canvas.getContext('2d');

	// Variables
	// Head
	const headCenterX = 100;
	const headCenterY = 100;
	const headRadius = 50;
	const foreheadHeight = headRadius / 5;
	const headRotation = 0;
	// Eyes
	const browHeight = 2/5 * headRadius;
	const eyeRadius = headRadius / 10;
	// Nose
	const noseWidth = headRadius / 5;
	const noseHeight = noseWidth / 2;
	const noseOffsetFromTop = 3/5 * headRadius;

	// Styles
	ctx.strokeStyle = '#824993';
	ctx.fillStyle = '#edddad';

	// Tumble's Body
	ctx.beginPath();
	ctx.moveTo(20, 200);
	ctx.arc(100, 200, 80, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	// Transform for Tumble's Head
	ctx.save();
	ctx.translate(headCenterX, headCenterY);
	ctx.rotate(headRotation);

	// Tumble's Head
	ctx.beginPath();
	ctx.moveTo(headRadius, 0);
	ctx.arc(0, 0, headRadius, 0, Math.PI);
	ctx.lineTo(-headRadius, -headRadius);
	ctx.lineTo(-headRadius/2, -foreheadHeight);
	ctx.lineTo(headRadius/2, -foreheadHeight);
	ctx.lineTo(headRadius, -headRadius);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	// Tumble's Eyes
	// Transform of Both Eyes
	ctx.save();
	ctx.translate(0, browHeight);
	// Left
	ctx.save();
	ctx.translate(headRadius/2, 0);
	ctx.beginPath();
	ctx.arc(0, 0, eyeRadius, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	// Right
	ctx.save();
	ctx.translate(-headRadius/2, 0);
	ctx.beginPath();
	ctx.arc(0, 0, eyeRadius, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	// Restore from Transform of Both Eyes
	ctx.restore();

	// Tumble's Nose
	ctx.save();
	ctx.translate(0, noseOffsetFromTop);
	ctx.beginPath();
	ctx.moveTo(-noseWidth/2, 0);
	ctx.lineTo(noseWidth/2, 0);
	ctx.lineTo(0, noseHeight);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();

	// Restore from Transform of Tumble's Head
	ctx.restore();
})();
