(function drawTumble() {
	const canvas = document.getElementById('tumble-canvas');
	const ctx = canvas.getContext('2d');

	// Counter
	let tumbleFrameCounter = 0;

	// Variables
	// Head
	const headCenterX = 100;
	const headCenterY = 100;
	const headRadius = 50;
	const foreheadHeight = headRadius / 5;
	let headRotation = 0;
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

	(function drawTumble() {
		requestAnimationFrame(drawTumble);

		// Background
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Update Variables - Animation
		if (tumbleFrameCounter >= 0 && tumbleFrameCounter < 10) {
			headRotation += 0.02;
		} else if (tumbleFrameCounter >= 10 && tumbleFrameCounter < 30) {
			headRotation -= 0.02;
		} else if (tumbleFrameCounter >= 30 && tumbleFrameCounter < 40) {
			headRotation += 0.02;
		}
		if (tumbleFrameCounter >= 60 && tumbleFrameCounter < 70) {
			headRotation -= 0.03;
		} else if (tumbleFrameCounter >= 70 && tumbleFrameCounter < 90) {
			headRotation += 0.03;
		} else if (tumbleFrameCounter >= 90 && tumbleFrameCounter < 100) {
			headRotation -= 0.03;
		}

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

		// Update Counter
		tumbleFrameCounter++;
		if (tumbleFrameCounter >= 120) {
			tumbleFrameCounter = 0;
		}
	})();
})();
