// Locate video element in DOM
var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

// When the page loads, initialize the video element.
window.addEventListener("load", function init() {
	// Turn off autoplay
	video.autoplay = false;
	console.log("Auto play is set to false");
	// Turn off looping
	video.loop = false;
	console.log("Loop is set to false");
});

// Play the video and update the volume information when play button clicked.
document.querySelector("#play").addEventListener("click", function playVid() {
	console.log("Play Video");
	// Start playing the video
	video.play();
	// Update the volume information
	let volume = document.getElementById("slider").value;
	// Write this value to the HTML
	document.getElementById("volume").innerHTML = volume + "%";
	// Set volume of the video (takes a value between 0 and 1)
	video.volume = volume / 100;
});

// Pause the video and update the volume information when pause button clicked.
document.querySelector("#pause").addEventListener("click", function pauseVid() {
	console.log("Pause Video");
	// Pause the video
	if (!video.paused) {
		video.pause();
	} // if
});

// Slow down CURRENT video speed by 10%.
document.querySelector("#slower").addEventListener("click", function slowDown() {
	// Log slow down button was clicked
	console.log("Slow down video");
	
	// Slow down speed by 10% and log the new speed.
	var currRate = video.playbackRate;
	var newRate = currRate * (.90);
	video.playbackRate = newRate;
	console.log("Speed is " + video.playbackRate);
});

// Increase the CURRENT video speed by 10%.
document.querySelector("#faster").addEventListener("click", function speedUp() {
	// Log speed up button was clicked
	console.log("Speed up video");
	
	// Slow down speed by 10% and log the new speed.
	var currRate = video.playbackRate;
	var newRate = currRate / 0.90;
	video.playbackRate = newRate;
	console.log("Speed is " + video.playbackRate);
});

// Advance current video by 10 seconds.
document.querySelector("#skip").addEventListener("click", function skipTen() {
	// Get the current playback position in the video.
	var currTime = video.currentTime;

	// Set new playback position to be 10 seconds ahead.
	var newTime = currTime + 10;
	// If the new time is past the video length, go back to the start. 
	if (newTime > video.duration) {
		video.currentTime = 0;
	} // if
	else {
		video.currentTime = newTime;
	} // else

	// Log current playback location of the video.
	console.log("Video current time is " + video.currentTime);
});

// Mute/unmute the video.
document.querySelector("#mute").addEventListener("click", function updateSound() {
	let muteButton = document.getElementById("mute");
	if (video.muted) {
		video.muted = false;
		// Change button to say mute.
		muteButton.innerHTML = "Mute";
		console.log("Unmute");
	} // if
	else {
		video.muted = true;
		// Change button to say unmute.
		muteButton.innerHTML = "Unmute";
		console.log("mute");
	} // else
});

// Change volume based on the slider.
document.querySelector("#slider").addEventListener("change", function(){
	// Get value of volume.
	let volObj = document.getElementById("slider");
	let volVal = volObj.value;
	document.getElementById("volume").innerHTML = volVal + "%";
	console.log("The current value is " + (volVal / 100));
});

// Utilize existing oldSchool class on the video element.
document.querySelector("#vintage").addEventListener("click", function oldSchool() {
	// Add the .oldSchool class to the video element to show vintage styling.
	video.classList.add("oldSchool");
});

// Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function normal() {
	// Remove the .oldSchool class to the video element to remove the vintage styling.
	video.classList.remove("oldSchool");
});