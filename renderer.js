const { remote } = require('electron');
const mainWin = remote.getCurrentWindow();
let display;

// mainWin.blur();
// mainWin.focus();

window.addEventListener('DOMContentLoaded', updateClock, false);
	function updateClock() {
		let now = new Date();
		let hours = now.getHours();
		let minutes = now.getMinutes();
		//let seconds = now.getSeconds();
		//let timeOfDay = (hours < 12 ? 'AM' : 'PM');

		hours = (hours == 0) ? 12 : hours;
		minutes = (minutes < 10 ? '0' : '') + minutes;
		//seconds = (seconds < 10 ? '0' : '') + seconds;

		let timeString = hours + ':' + minutes;// + ':' + seconds;
		//document.getElementById('clock').innerHTML = timeString;
		display = document.getElementById('clock');
		display.textContent = timeString;

		setTimeout(updateClock, 1000);
	}

	//window.addEventListener('mouseover', showClock);
	//window.addEventListener('mouseout', hideClock);

	function showClock() {
		mainWin.setBackgroundColor('#618f83');
		display.fontColor('#618f83');
	}

	function hideClock() {
		mainWin.setBackgroundColor('#00FFFFFF');
		display.textContent.fontColor('#00FFFFFF');
		
	}