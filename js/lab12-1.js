//INPUT create an array of integers
//PROCESSING write code that identifies the first integer in an array list and the last integer and adds the two integers together
//OUTPUT show sum of integers first and last

let list = new Array(8);
let alist = [15, 26, 33, 67, 91, 22, 67, 28, 40];
document.getElementById('arrayList').innerHTML = "Array:" + [alist];

let sum = 0;
for (let i = 0; i < alist.length; i++) {
    sum += alist[0] + alist[8];
   }

   function addEnds(alist) {
       document.getElementById("output").innerHTML = sum;
	}