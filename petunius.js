(function drawPetunius() {
	const canvas = document.getElementById('petunius-canvas');
	const ctx = canvas.getContext('2d');

	// Styles
	ctx.strokeStyle = 'black';
	ctx.fillStyle = 'white';

	// Petunius' Head
	ctx.fillRect(50, 150, 100, 50);
	ctx.strokeRect(50, 150, 100, 50);

	// Petunius' Glasses
	// Left
	ctx.fillRect(120, 160, 20, 20);
	ctx.strokeRect(120, 160, 20, 20);
	// Right
	ctx.fillRect(60, 160, 20, 20);
	ctx.strokeRect(60, 160, 20, 20);

	// Petunius' Eyes
	// Left
	ctx.beginPath();
	ctx.arc(75, 175, 5, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	// Right
	ctx.beginPath();
	ctx.arc(125, 175, 5, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	// Petunius' Nose
	// Nostrils
	// Left
	ctx.beginPath();
	ctx.arc(90, 175, 5, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	// Right
	ctx.beginPath();
	ctx.arc(110, 175, 5, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	// Bridge
	ctx.beginPath();
	ctx.arc(100, 175, 10, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	// Petunius' Hat
	ctx.beginPath();
	ctx.moveTo(170, 150);
	ctx.lineTo(25, 150);
	ctx.lineTo(50, 125);
	ctx.lineTo(100, 0);
	ctx.lineTo(150, 125);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
})();
