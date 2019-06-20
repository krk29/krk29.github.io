//Defining Table
//Input: get a number from user
//Processing: write a loop that returns all the times tables for that number.
//Output: Display the times table

//INPUT
function times() {
	let num = document.getElementById("num").innerHTML;
	let timesTable = "";

	//PROCESSING
	for (let i = 1; i <= 12; i++) {
		timesTable += num + " x " + i + " = " + num * i + "<br>";
	}
	//OUTPUT
	document.getElementById("output").innerHTML = timesTable;
}
