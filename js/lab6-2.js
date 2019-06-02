//OUTPUT identify four different types of weather and shoe type for each type
//PROCESSING generate drop down menu for choosing type of weather and generate type of shoe for each type of weather
//INPUT display best choice of shoe to wear for weather type

//INPUT
function shoechoice() {
	var shoe;
		let weather = document.getElementById("weather").value;
//PROCESSING
switch (weather) {
    case "":
      shoe = "error";
      break;
    case "hot": 
      shoe = "sandals";
      break;
    case "rain": 
      shoe = "galoshes";
      break;
    case "snow":
      shoe = "boots";
      break;
    case "cool":
      shoe = "shoes";
  }
//OUTPUT
  if (shoe == "error") {
    let output = "Best shoe for today: ";
    document.getElementById('output').innerHTML = output
  } else {
    let output = "You should wear " + shoe + ".";
    document.getElementById('output').innerHTML = output
  }
}
  