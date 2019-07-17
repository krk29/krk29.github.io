//PROCESSING creat an array with a function that finds how many even integers are in the array.
//OUTPUT show results

let list = [38, 20, 3, 60, 11, 45, 98, 29];
document.getElementById("arrayList").innerHTML = list;
document.getElementById("output").innerHTML = countEvens(list);

function countEvens(list) {
	let evenNum = 0;
	for (let i = 0; i < list.length; i++) {
		if (list[i] % 2 == 0) evenNum++;
	}
	return evenNum;
}





