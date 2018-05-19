(function drawTumble() {
	const canvas = document.getElementById('tumble-canvas');
	const ctx = canvas.getContext('2d');

	// Styles
	ctx.strokeStyle = 'black';
	ctx.fillStyle = 'white';

	// Tumble's Body
	ctx.beginPath();
	ctx.moveTo(20, 200);
	ctx.arc(100, 200, 80, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	// Tumble's Head
	ctx.beginPath();
	ctx.moveTo(150, 100);
	ctx.arc(100, 100, 50, 0, Math.PI);
	ctx.lineTo(50, 50);
	ctx.lineTo(75, 90);
	ctx.lineTo(125, 90);
	ctx.lineTo(150, 50);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	// Tumble's Eyes
	// Left
	ctx.beginPath();
	ctx.arc(75, 120, 5, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	// Right
	ctx.beginPath();
	ctx.arc(125, 120, 5, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	// Tumble's Nose
	ctx.beginPath();
	ctx.moveTo(95, 130);
	ctx.lineTo(105, 130);
	ctx.lineTo(100, 135);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
})();
