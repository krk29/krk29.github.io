//INPUT get date of month and dates of holidays, along with weekends
//PROCESSING compute a true or false statement to show if alarm should display sleep in or wake up on holidays and weekends. All other days, alarm will run.
//OUTPUT display current day of alarm status

//INPUT 
let today = new Date();
let day = today.getDay();
let month = today.getMonth();
let date = today.getDate();

	document.getElementById("td").innerHTML = today.toLocaleDateString();
//PROCESSING
	if ( (month = 0 && date == 1) || (month == 6 && date == 4) || (month == 11 && date == 25)	|| day == 6 || day == 0) {
		result = "Sleeping in!";
	}	else {
		result = "Wake up!";
	}
	//OUTPUT
			document.getElementById("alarmstatus").innerHTML = result;

