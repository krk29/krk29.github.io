// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// Defining Table
// INPUT: Get width and length to compute total acres
// PROCESSING: compute acres 
// OUTPUT: Display total acres

function insertName() {
	//INPUT
	let name = document.getElementById("fname").value;
	
	//PROCESSING
	let output = ` - Search diligently, pray always, and be believing, and all things shall work together for your good, if ye, ${name}, walk uprightly and remember the covenant wherewith ye, ${name}, have covenanted one with another.`;
	
	//OUTPUT
	let	scripture = document.getElementById('output');
	scripture.innerHTML = output;
}