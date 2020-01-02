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
		document.getElementById('clock').innerHTML = timeString;
		document.getElementById('clock').textContent = timeString;

		setTimeout(updateClock, 1000);
	}