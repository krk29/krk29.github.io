function fifteen() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let sum = num1 + num2;
    let output;

    if (sum >= 15) {
        output = true;
    } else {
        output = false;
    }

    document.getElementById("output").textContent = output;
}
