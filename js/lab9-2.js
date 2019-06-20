//Defining Table
//Input: set let statements to pull from correct rows and cells of table
//Processing: construct for loop to find the lowest number in row 1 
//Output: 

	//INPUT
	let table = document.getElementById("templeData")
	let lowestyear = parseInt(table.rows[1].cells[1].innerHTML);
	let temple = table.rows[1].cells[0].innerHTML;
    parseInt(table.rows[1].cells[1].innerHTML);
//PROCESSING
for (let i = 1; i < table.rows.length; i++) { 
	let year = parseInt(table.rows[i].cells[1].innerHTML);
if (lowestyear > year) {
	lowestyear = year
	temple = table.rows[i].cells[0].innerHTML;
	
	
//OUTPUT
document.getElementById("output").innerHTML = temple;
}
}

