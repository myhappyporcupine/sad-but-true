(function drawPetunius() {
	const canvas = document.getElementById('petunius-canvas');
	const ctx = canvas.getContext('2d');

	// Counter
	let petuniusFrameCounter = 0;

	// Variables
	// Eyes
	let leftEyeX = 70;
	let leftEyeY = 170;
	let rightEyeX = 130;
	let rightEyeY = 170;

	// Styles
	ctx.strokeStyle = '#317089';
	ctx.fillStyle = '#edddad';

	(function run() {
		requestAnimationFrame(run);

		// Background
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Update Variables - Animation
		if (petuniusFrameCounter >= 0 && petuniusFrameCounter < 10) {
			leftEyeX += 0.5;
			rightEyeX -= 0.5;
		} else if (petuniusFrameCounter >= 10 && petuniusFrameCounter < 30) {
			leftEyeY += 0.2;
			rightEyeY += 0.2;
		} else if (petuniusFrameCounter >= 30 && petuniusFrameCounter < 40) {
			leftEyeX -= 0.5;
			rightEyeX += 0.5;
		}
		if (petuniusFrameCounter >= 60 && petuniusFrameCounter < 70) {
			leftEyeY -= 0.4;
			rightEyeY -= 0.4;
		}

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
		ctx.arc(leftEyeX, leftEyeY, 5, 0, 2*Math.PI);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		// Right
		ctx.beginPath();
		ctx.arc(rightEyeX, rightEyeY, 5, 0, 2*Math.PI);
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

		// Update Counter
		petuniusFrameCounter++;
		if (petuniusFrameCounter >= 120) {
			petuniusFrameCounter = 0;
		}
	})();
})();
