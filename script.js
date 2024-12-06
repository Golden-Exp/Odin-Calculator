const buttons = document.querySelectorAll("button")
const display = document.querySelector("#display")
const op_disp = document.querySelector("#op_disp")
let no_point = true
let a = ""
let b = ""
let op = ""
let un = ""
function operate(a, b, op) {
    if (op == "+") {
        return a + b
    }
    else if (op == "-") {
        return a - b
    }
    else if (op == "*") {
        return a * b
    }
    else if (op == "/") {
        if (b == 0) {
            return "really bro?"
        }
        return Math.round((a / b) * 100000) / 100000
    }
    else {
        return NaN
    }
}

buttons.forEach((button) => {
    button.addEventListener("click" , ()=> {
        if (button.classList.contains("num")) {
            if (display.classList.contains("result")) {
                display.classList.remove("result")
                display.innerHTML = ""
                op_disp.textContent = ""
            }
            if (display.textContent.length >= 13) {
                display.innerHTML = display.innerHTML
            }
            else {
            display.innerHTML = display.innerHTML.concat(button.textContent)
        }}
        else if (button.classList.contains("op")) {
            if (button.id == "equals") {
                display.classList.add("result")
                if (a == "" && op == "") {
                    a = 0
                    op = "+"
                }
                b = parseInt(display.textContent)
                if (!no_point){
                    b = parseFloat(display.textContent)
                }
                un = ""
                if (operate(a, b, op) < 0) {
                    un = "-"
                }
                display.textContent = operate(a, b, op)
                op_disp.textContent = "="
                a = ""
                b = ""
                op = ""
                
            }
            else {
                if (display.textContent == "" && "dividemul".includes(button.id))
                    display.innerHTML = display.innerHTML
                else if (display.textContent == "+" || display.textContent == "-")
                    display.textContent = button.textContent
                else if (a == "" && b == "") {
                    a = parseInt(display.textContent)
                    if (!no_point){
                        a = parseFloat(display.textContent)
                    }
                    op = button.textContent
                    display.classList.add("result")
                    op_disp.textContent = op
                    un = ""
                }
                else if(a != "" && b == "" && op != "") {
                    b = parseInt(display.textContent)
                    if (!no_point){
                        b = parseFloat(display.textContent)
                    }
                    a = operate(a, b, op)
                    un = ""
                    if (a < 0) {
                        un = "-"
                    }
                    display.textContent = a
                    op = button.textContent
                    op_disp.textContent = op
                    display.classList.add("result")
                }
            }
            no_point = true
        }
        else if (button.id == "clear")
        {
            display.textContent = ""
            no_point = true
            a = ""
            b = ""
            op = ""
        }
        else if(button.id == "back")
        {
            if (a != "" && op != "") {
                op = ""
                op_disp.textContent = ""
                a = ""
                display.classList.remove("result")
            }
            else if(display.textContent[display.textContent.length - 1] == ".") {
                no_point = true
                display.textContent = display.textContent.slice(0, -1)
                display.classList.remove("result")
            }
            else {
                display.textContent = display.textContent.slice(0, -1)
                display.classList.remove("result")
            }
        }
        else if(button.id == "point" && no_point) {
            display.textContent = display.textContent.concat(".")
            no_point = false
            display.classList.remove("result")
        }
        else if (button.id == "unary") {
            if (display.textContent == "") {}
            else if (un == "" ) {
                display.textContent = "-".concat(display.textContent)
                un = "-"
            }
            else if (un == "-"){
                display.textContent = "+".concat(display.textContent.slice(1))
                un = "+"
            }
            else {
                display.textContent = "-".concat(display.textContent.slice(1))
                un = "-"
            }
        }
    })
});