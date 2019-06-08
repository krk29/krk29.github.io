//INPUT get current day and put into format output to determine subtotals for Tuesdays and Wednesdays
//PROCESSING compute less 10% and added sales tax of 6% onto subtotal.
//OUTPUT display total amount after calculation of sales tax.

//INPUT get day of week
let d = new Date(); 
let dayOfWeek = d.getDay();
let day = new Array(7); 
	day[0] = "Sunday"
	day[1] = "Monday"
	day[2] = "Tuesday"
	day[3] = "Wednesday"
	day[4] = "Thursday"
	day[5] = "Friday"
	day[6] = "Saturday"

//OUTPUT get current day of week.
document.getElementById("wd").innerHTML = day[dayOfWeek];

//PROCESSING compute subtotal less 10%.
function calculate() {
let salestax = .06;
let sub = parseFloat(document.getElementById("subtotal").value);

if ((day[dayOfWeek] == "Tuesday" || day[dayOfWeek] == "Wednesday" ) && sub > 50) {
let disc = .10;
let subdisc = sub * disc;
let newsub = sub - subdisc; 
let taxsub = newsub * salestax;
let fintot = newsub + taxsub;

//OUTPUT
document.getElementById("finalsum").innerHTML = "Total after sales tax: $" + fintot.toFixed(2);
} else {
let taxsub = sub * salestax;
let fintot = sub + taxsub;

//OUTPUT
document.getElementById("finalsum").innerHTML = "Total after sales tax: $" + fintot.toFixed(2);
}
}