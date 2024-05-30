let numbers = ["0", "1" ,"2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
let operators = ["/", "%","*", "+", "-", ""];
let first = "";
let operator = "";
let second = "";

let display = document.querySelector("p");
console.log(display)
document.querySelectorAll('.col').forEach(col => {
    col.addEventListener('click', () => {
        let pressed = col.textContent;
            console.log(pressed)
            if(pressed === "AC") {
                display.textContent = "0";
            }
            else if (pressed === "+/-") {
                let displayNum = parseFloat(display.textContent);
                console.log(displayNum);
                display.textContent = String(displayNum * -1);
            }
            else if(numbers.includes(pressed)) {
                if(display.textContent == "0" || operators.includes(display.textContent)) {
                    display.textContent = "";
                    display.textContent = pressed;              //To get rid of initial Zero
                }
                else if ( display.textContent.length < 9) {         //Concentatenates numbers
                    display.textContent += pressed;
                }
            }   
            else if (operators.includes(pressed)) {                 // Pressed operator
                first = parseFloat(display.textContent);            // Save input 1
                operator = pressed;                                 // Save operator
                display.textContent = operator
                console.log(`First is ${first}, operator is ${operator}`)
            }
            else if (pressed === "=") {                             // Pressed =
                second = parseFloat(display.textContent);           // save input 2
                display.textContent = calculate(operator);
                console.log(`Second is ${second}`)
                console.log(`Result is ${calculate(operator)}`)
            }
        });
    })

function calculate(operator) {
    if (operator === "+") {
        return add(first, second)
    }
    else if (operator === "-") {
        return minus(first, second)
    }
    else if (operator === "*") {
        return multiply(first, second)
    }
    else if (operator === "/") {
        return divide(first, second)
    }
    else if (operator === "%") {
        return remainder(first, second)
    }
}

function add(a, b) {
    return String(a + b);
}
function minus(a, b) {
    return String(a - b);
}
function multiply(a, b) {
    return String(a * b);
}
function divide(a, b) {
    return String(a / b);
}
function remainder(a, b) {
    return String(a % b);
}