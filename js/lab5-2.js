// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;


//INPUT: get regular hrs and wage per hour to find gross pay
//PROCESSING: compute net pay after taxes are taken out
//OUTPUT: display net pay

function getNetPay() {

//INPUT
let rh = parseInt(document.getElementById("rh").value);
let ew = parseInt(document.getElementById("ew").value);   
   		
//PROCESSING
    let net = "$" + (rh * ew) * 0.85;

//OUTPUT
document.getElementById("output").innerHTML = net;
}
