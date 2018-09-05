setInterval ( function() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var munites = currentTime.getMinutes();
	var  seconds = currentTime.getSeconds();
	var periods = "AM";
	if (hours >= 12){
		periods = "PM";
	}
	if (hours > 12){
		hours = hours - 12;
	}
	if (hours == 0){
		hours = 12;
	}	
	if (hours  < 10){
		hours = "0" + hours ;
	}
	if (munites < 10){
		munites = "0" + munites;
	}
	if (seconds < 10){
		seconds = "0" + seconds;
	}
		var clockTime = hours + ":" + munites + ":" + seconds + " " + periods;
	
	var clock = document.getElementById('clock');
	clock.innerText = clockTime;
}, 1000);
