function add() {
    let firstValue = Number(document.getElementById("firstValue").value);
    let secondValue = Number(document.getElementById("secondValue").value);
    let result = firstValue + secondValue;
    document.getElementById("result").value = result;

    document.getElementById("firstValue").value = "";
    document.getElementById("secondValue").value = "";

}

function sub() {
    let firstValue = Number(document.getElementById("firstValue").value);
    let secondValue = Number(document.getElementById("secondValue").value);
    let result = firstValue - secondValue;
    document.getElementById("result").value = result;
    
    document.getElementById("firstValue").value = "";
    document.getElementById("secondValue").value = "";

}

function mul() {
    let firstValue = Number(document.getElementById("firstValue").value);
    let secondValue = Number(document.getElementById("secondValue").value);
    let result = firstValue * secondValue;
    document.getElementById("result").value = result;

    document.getElementById("firstValue").value = "";
    document.getElementById("secondValue").value = "";

}
function div() {
    let firstValue = Number(document.getElementById("firstValue").value);
    let secondValue = Number(document.getElementById("secondValue").value);
    let result = firstValue / secondValue;
    document.getElementById("result").value = result;

    document.getElementById("firstValue").value = "";
    document.getElementById("secondValue").value = "";

}
