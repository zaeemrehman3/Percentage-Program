function Calculate(){
    let num1 = document.querySelector("#english").value;
    let num2 = document.querySelector("#chemistry").value;
    let num3 = document.querySelector("#physics").value;
    let num4 = document.querySelector("#urdu").value;
    let num5 = document.querySelector("#computer").value;
    let result = document.querySelector("#result");

    if (num1 > 100 || num2 > 100 || num3 > 100 || num4 > 100 || num5 > 100) {
        alert("Please enter the Valid Number!");
        return;
    }

    let sum = Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5);
    let percentage = (sum / 500) * 100;

    if(percentage >= 90){
        result.innerHTML = "It's A1 grade percentage: " + percentage + " %";
    }
    else if(percentage >= 80){
        result.innerHTML = "It's A grade percentage: " + percentage + " %";
    }
    else if(percentage >= 70){
        result.innerHTML = "It's B grade percentage: " + percentage + " %";
    }
    else if(percentage >= 60){
        result.innerHTML = "It's C grade percentage: " + percentage + " %";
    }
    else if(percentage >= 50){
        result.innerHTML = "It's D grade percentage: " + percentage + " %";
    }
    else {
        result.innerHTML = "Fail percentage: " + percentage + " %";
    }
}