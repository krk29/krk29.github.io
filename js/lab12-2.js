//INPUT enter various integers to use in an array
//PROCESSING Write a function named getMiddle that returns the value of the middle element in an array. If the array has an even number of elements, then this function must return the average of the two middle elements.
//OUTPUT show results

let list = new Array(8);
let alist = [15, 26, 33, 67, 91, 22, 67, 28, 40];
document.getElementById('arrayList').innerHTML = "Array:" + [alist];
let mid = alist[4];

function getMiddle(alist) {
document.getElementById("outputMid").innerHTML = mid;
}

let sum = 0;
for (let i = 0; i < alist.length; i++) {
    sum += alist[0] + alist[8] / 9;
   }
   function getAve(alist) {
document.getElementById("outputAve").innerHTML = sum.toFixed(0);
   }
