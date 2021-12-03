/* Previous code
... */

function startRecording(thisButton, otherButton) {

	navigator.mediaDevices.getUserMedia(
		selectedMedia === "vid" ?
		videoMediaConstraints :
		audioMediaConstraints)

	.then(mediaStream => {

		/* New code */
		// Create a new MediaRecorder
		// instance that records the
		// received mediaStream
		const mediaRecorder =
			new MediaRecorder(mediaStream);

		// Make the mediaStream global
		window.mediaStream = mediaStream;

		// Make the mediaRecorder global
		// New line of code
		window.mediaRecorder = mediaRecorder;

		if (selectedMedia === 'vid') {

			// Remember to use the srcObject
			// attribute since the src attribute
			// doesn't support media stream as a value
			webCamContainer.srcObject = mediaStream;
		}

		document.getElementById(
			`${selectedMedia}-record-status`)
			.innerText = "Recording";

		thisButton.disabled = true;
		otherButton.disabled = false;
	});
}

/* Remaining code
...*/
// JavaScript Document