//PROCESSING creat an array with a function to multiply all integers in array and return new array
//OUTPUT show new array

let list = [1, 2, 3, 4, 5];
document.getElementById("arrayList").innerHTML = list;
document.getElementById("output").innerHTML = multiply(list);

function multiply(list, x) {
	for (let i = 0; i < list.length; i++) {
		let newlist = new Array(list[i]);
		let x = 5;
		list[i] = list[i] * x;
	}
	return list;
}