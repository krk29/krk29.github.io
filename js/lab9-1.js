//Defining Table
//Input: get a number from user
//Processing: write a loop that returns all the times tables for that number.
//Output: Display the times table


    function showTable() {
       
    //INPUT
	let num = parseInt(document.getElementById("num").value);
	let timesTable = "";

	//PROCESSING
	for (let i = 1; i <= 12; i++) {
		let result = i * num;
		timesTable += num + " x " + i + " = " + result * i + "<br>";
	}
	//OUTPUT
	document.getElementById("output").innerHTML = timesTable;
}
