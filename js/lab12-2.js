//PROCESSING Write a function named getMiddle that returns the value of the middle element in an array. If the array has an even number of elements, then this function must return the average of the two middle elements.
//OUTPUT show results

let list = [38, 20, 3, 60, 11, 45, 98, 29];
document.getElementById("arrayList").innerHTML = list;
document.getElementById("output").innerHTML = getMiddle(list);

function getMiddle(list) {
	if (list.length % 2 !== 0) {
		middle = list[Math.floor(list.length / 2)];
	} else {
		middle = Math.round((list[list.length / 2] + list[(list.length / 2) - 1]) / 2);
	}
	return middle;
}
