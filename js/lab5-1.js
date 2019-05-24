// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//INPUT: get height and radius of cylinder
//PROCESSING: compute the volume of a cylinder using V=πr2h
//OUTPUT: display volume cubic units

function getCylinderVolume() {

//INPUT

	let r = parseFloat(document.getElementById("r").value);
    let h = parseFloat(document.getElementById("h").value);   
   		
//PROCESSING

    let volume = Math.PI * Math.pow(r, 2) * h / 61.024;

//OUTPUT
document.getElementById("output").innerHTML = volume.toFixed(2);
}
