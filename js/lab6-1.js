//INPUT get two random numbers 
//PROCESSING generate the input answer to show feedback of correct or not correct
//OUTPUT display feedback
function generateQues(max, min) {
	min = Math.ceil(1);
	max = Math.floor(101);
 let x = Math.floor(Math.random() * (max - min)) + min;
	let y = Math.floor(Math.random() * (max - min)) + min;
//OUTPUT 
	document.getElementById("x").value = x;
	document.getElementById("y").value = y;
	let output = "Good Luck!"
	document.getElementById("output").innerHTML = output;
	let ans = ""
	document.getElementById("ans").value = ans;
}
//PROCESSING 
function checkSum() {
	let ans =	parseInt(document.getElementById("ans").value);
	let x = parseInt(document.getElementById("x").value);
	let y = parseInt(document.getElementById("y").value);
	if (x + y == ans) {		
		let output = "Correct! Good job."
		document.getElementById("output").innerHTML = output;
		} else {
		let output = "Nope, try again."
	document.getElementById("output").innerHTML = output;
	}
}
