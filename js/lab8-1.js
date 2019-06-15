//INPUT get integer from user of number between 0 and 20
//PROCESSING compute the sum of all the odd integers between 1 and the integer user inputted.
//OUTPUT display all totals


//INPUT  get integer from user and set range of numbers allowed
function oddSum() {
    let n = parseInt(document.getElementById("n").value);

//PROCESSING calculate the user number and find all odd numbers less than user number. If number is more than 100, send alert to user. Create a counting loop and Add odd numbers and 		user number together for sum or total.	
    let sum = 0;
    for(let i = 1; i <= n; i += 2) {
            sum += i;
    }
    //OUTPUT display total number for user.
document.getElementById("output").innerHTML = sum;
}

