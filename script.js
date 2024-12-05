const buttons = document.querySelectorAll("button")
const display = document.querySelector("#display")
let no_point = true

buttons.forEach((button) => {
    button.addEventListener("click" , ()=> {
        if (button.classList.contains("num")) {
            if (display.classList.contains("result")) {
                display.classList.remove("result")
                display.innerHTML = ""
            }
            display.innerHTML = display.innerHTML.concat(button.textContent)
        }
        else if (button.classList.contains("op")) {
            if (button.id == "equals") {
                display.classList.add("result")
                display.textContent = ""
            }
            else {
                if (display.textContent == "" && "dividemul".includes(button.id))
                    display.innerHTML = display.innerHTML
                else if (display.textContent == "+" || display.textContent == "-")
                    display.textContent = button.textContent
                else
                    display.innerHTML = display.innerHTML.concat(button.textContent)
            }
            no_point = true
        }
        else if (button.id == "clear")
        {
            display.textContent = ""
            no_point = true
        }
        else if(button.id == "back")
        {
            display.textContent = display.textContent.slice(0, -1)
        }
        else if(button.id == "point" && no_point) {
            display.textContent = display.textContent.concat(".")
            no_point = false
        }
    })
});