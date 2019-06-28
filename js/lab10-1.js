//INPUT
//PROCESSING
//OUTPUT
// Defining Table
//Input: get temperature and windchill from user in farenheit.
//Processing: create functions and variables to calculate the stored values from user and return windchill factor.
//Output: Display the windchill factor with "if" statement of true or false return

function doInputOutput() {
	let temp = parseInt(document.getElementById("tempF").value);
	let sp = parseInt(document.getElementById("speed").value);
	let output = windChill(temp, sp);
	document.getElementById("output").innerHTML = output;
}
	//PROCESSING
	function windChill(temp, sp) {
	if (temp > 50 || sp < 3) {
		return "Not Applicable";
	} else {
	let output = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(sp, 0.16)) + (0.4275 * (temp * Math.pow(sp, 0.16)));
	    return Math.round(output);
}
}

