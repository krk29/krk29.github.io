
//PROCESSING create a function and an array list to return the sum of the first integer [0] and the last integer in an array [list - 1].
//OUTPUT show sum of integers first and last.

let list = [38, 20, 3, 60, 11, 45, 98, 29];
document.getElementById("aList").innerHTML = list;
document.getElementById("output").innerHTML = addEnds(list);

function addEnds(list) {
return list [0] + list[list.length - 1];
}