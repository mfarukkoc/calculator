const operate = (num1, num2, op) => {

    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Error";
    }

}

const precedence = {
    "+": 1,
    "-": 1,
    "x": 2,
    "/": 2,
    "^": 3
}

var prevNum="", newNum="";

const screen = document.getElementById("calc-screen");
const operatorButtons = document.querySelectorAll(".calc-op");
const numberButtons = document.querySelectorAll(".calc-num");
const btns = document.querySelectorAll(".calc-op, .calc-btn");


for (element of numberButtons) {
    element.addEventListener("click", (event) => {

        let expression = screen.innerHTML;
        if (expression == "0")
            screen.innerHTML = event.target.innerHTML;
        else
            screen.innerHTML += event.target.innerHTML;
    }
    )
}

for (element of operatorButtons) {
    element.addEventListener("click", (event) => {
        let expression = screen.innerHTML;
        if (expression == "Inf" || expression == "Error") { }
        screen.innerHTML += event.target.innerHTML;
    }
    )
}

document.getElementById("calc-ent").addEventListener("click", () => evaluate(screen.innerHTML))

/*
document.addEventListener("keypress", function(e){ //keyboard button bindings
    let keycode = e.which || e.keycode;
    let valueEntered = String.fromCharCode(keycode);
    console.log(valueEntered,keycode);
    if (valueEntered == "1") document.getElementById("1").click();
    if (valueEntered == "2") document.getElementById("2").click();
    if (valueEntered == "3") document.getElementById("3").click();
    if (valueEntered == "4") document.getElementById("4").click();
    if (valueEntered == "5") document.getElementById("5").click();
    if (valueEntered == "6") document.getElementById("6").click();
    if (valueEntered == "7") document.getElementById("7").click();
    if (valueEntered == "8") document.getElementById("8").click();
    if (valueEntered == "9") document.getElementById("9").click();
    if (valueEntered == "0") document.getElementById("0").click();
    if (valueEntered == "+") document.getElementById("plus").click();
    if (valueEntered == "-") document.getElementById("minus").click();
    if (valueEntered == "*") document.getElementById("times").click();
    if (valueEntered == "/") document.getElementById("divide").click();
    if (valueEntered == "^") document.getElementById("power").click();
    if (valueEntered == ".") document.getElementById("dot").click();
    if (keycode == "13") document.getElementById("result").click();
    if (keycode == "127") document.getElementById("del").click();
    if (keycode == "99") document.getElementById("clr").click();
    if (keycode == "114") document.getElementById("root").click();
})
*/