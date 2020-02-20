const mainScreen = document.getElementById("main-screen");
const upperScreen = document.getElementById("upper-screen");
const operatorButtons = document.querySelectorAll(".calc-op");
const numberButtons = document.querySelectorAll(".calc-num");

let result = 0;

for (element of numberButtons) {
    element.addEventListener("click", (event) => {

        let expression = mainScreen.innerHTML;
        if (expression == "0" || result === 1) {
            mainScreen.innerHTML = event.target.innerHTML;
            result = 0;
        }
        else
            mainScreen.innerHTML += event.target.innerHTML;
        result = 0;
    }
    )
}

for (element of operatorButtons) {
    element.addEventListener("click", (event) => {
        result = 0;
        let expression = mainScreen.innerHTML;
        if (expression == "Inf" || expression == "Error")
            mainScreen.innerHTML = "0 " + event.target.innerHTML;
        else
            mainScreen.innerHTML += " " + event.target.innerHTML + " ";
    }
    )
}

document.getElementById("calc-equal").addEventListener("click", () => {
    upperScreen.innerHTML = mainScreen.innerHTML + " ="
    mainScreen.innerHTML = evaluate(mainScreen.innerHTML)
    result = 1;
    upperScreen.classList.remove("upper-screen-animation");
    void upperScreen.offsetWidth;
    upperScreen.classList.add("upper-screen-animation");

})

document.getElementById("btn-clear").addEventListener("click", () => {
    upperScreen.innerHTML = "&#8203"
    mainScreen.innerHTML = "0";
})

document.getElementById("btn-del").addEventListener("click", () => {
    if (mainScreen.innerHTML == "Error" || mainScreen.innerHTML == "Inf" || mainScreen.innerHTML.length == 1) {
        upperScreen.innerHTML = "&#8203";
        mainScreen.innerHTML = "0";
    }
    else {
        let exp = mainScreen.innerHTML.split(" ");
        exp[exp.length - 1] = exp[exp.length - 1].slice(0, -1);
        mainScreen.innerHTML = exp.join(" ");
    }
})

const precedence = {
    "+": 1,
    "-": 1,
    "X": 2,
    "/": 2,
    "^": 3
}


const evaluate = (exp) => {
    let operand = new Array()
    let operator = new Array()
    exp = exp.split(" ")
    for (x of exp) {
        if (!isNaN(x)) {
            operand.push(x)
        }
        else if (precedence[x] !== undefined) {
            while (operator.length != 0 && precedence[operator[operator.length - 1]] >= precedence[x]) {
                operand.push(operate(operand.pop(), operand.pop(), operator.pop()))
            }
            operator.push(x)
        }
    }
    while (operator.length != 0) {
        operand.push(operate(operand.pop(), operand.pop(), operator.pop()))
    }
    if (operand.length > 1 || isNaN(operand[0])) return "Error";
    return operand[0];
}

const operate = (num2, num1, op) => {
    console.log(num1 + " " + op + " " + num2)
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "X":
            return num1 * num2;
        case "/":
            return num1 / num2;
        case "^":
            return num1 ** num2;
        default:
            return "Error";
    }
}



document.addEventListener("keypress", function (e) { //keyboard button bindings
    let keycode = e.which || e.keycode;
    let valueEntered = String.fromCharCode(keycode);
    console.log(valueEntered, keycode);
    if (valueEntered == "1") document.getElementById("num-1").click();
    if (valueEntered == "2") document.getElementById("num-2").click();
    if (valueEntered == "3") document.getElementById("num-3").click();
    if (valueEntered == "4") document.getElementById("num-4").click();
    if (valueEntered == "5") document.getElementById("num-5").click();
    if (valueEntered == "6") document.getElementById("num-6").click();
    if (valueEntered == "7") document.getElementById("num-7").click();
    if (valueEntered == "8") document.getElementById("num-8").click();
    if (valueEntered == "9") document.getElementById("num-9").click();
    if (valueEntered == "0") document.getElementById("num-0").click();
    if (valueEntered == "+") document.getElementById("op-sum").click();
    if (valueEntered == "-") document.getElementById("op-sub").click();
    if (valueEntered == "*") document.getElementById("op-mult").click();
    if (valueEntered == "/") document.getElementById("op-div").click();
    if (valueEntered == "/") document.getElementById("op-perc").click();
    if (valueEntered == "^") document.getElementById("op-pow").click();
    if (valueEntered == ".") document.getElementById("btn-decimal").click();
    if (keycode == "13") document.getElementById("calc-equal").click();
    if (keycode == "127") document.getElementById("btn-del").click();
    if (keycode == "99") document.getElementById("btn-clear").click();
})
