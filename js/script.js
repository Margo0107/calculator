let firstNum = "";
let secondNum = "";
let sing = "";
let finish = false;

const operator = ["+", "-", "*", "/", "%"];
const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

const out = document.querySelector(".calc-screen p");
const clear = document.querySelector(".clear");
const buttons = document.querySelector(".buttons");
const btnDelete = document.querySelector(".del");
const secondaryDisplay = document.querySelector(".secondary_display");

function clearAll() {
  firstNum = "";
  secondNum = "";
  sing = "";
  finish = false;
  out.textContent = "0";
  clearSecondaryDisplay();
  resetFont();
  console.log("clearAll");
}
clear.addEventListener("click", clearAll);

// clearing the second screen
function clearSecondaryDisplay() {
  secondaryDisplay.textContent = "";
}
function deleteSecondNum() {
  secondNum = "";
  out.textContent = "";
  console.log("delete two number");
}
//reset to original font
function resetFont() {
  out.style.fontSize = "40px";
}

//reducing text size when there is a large set of numbers
function fitText() {
  const maxWidth = 240;
  let fontSize = parseInt(getComputedStyle(out).fontSize);

  while (out.scrollWidth > maxWidth && fontSize > 12) {
    fontSize--;
    out.style.fontSize = fontSize + "px";
  }
  if (out.scrollWidth > maxWidth) {
    return false;
  }
  return true;
}

btnDelete.addEventListener("click", deleteSecondNum);

buttons.addEventListener("click", (event) => {
  if (!event.target.classList.contains("btn")) return;
  //first number
  const key = event.target.textContent;
  if (digit.includes(key)) {
    if (secondNum === "" && sing === "") {
      firstNum += key;
      out.textContent = firstNum;

      if (!fitText()) {
        firstNum = firstNum.slice(0, -1);
        out.textContent = firstNum;
        return;
      }

      console.log("первое число", firstNum);
    } else if (firstNum !== "" && secondNum !== "" && finish) {
      secondNum = key;
      finish = false;
      out.textContent = secondNum;
    } else {
      secondNum += key;
      out.textContent = secondNum;
      if (!fitText()) {
        secondNum = secondNum.slice(0, -1);
        out.textContent = secondNum;
        return;
      }
      console.log("второе число", secondNum);
    }
    return;
  }
  //symbol: +-/
  if (operator.includes(key)) {
    sing = key;
    out.textContent = sing;
    console.log(sing);
    return;
  }
  //click equal
  if (key === "=") {
    if (secondNum === "") secondNum = firstNum;
    secondaryDisplay.textContent = `${firstNum} ${sing} ${secondNum}`;
    switch (sing) {
      case "+":
        firstNum = +firstNum + +secondNum;
        break;
      case "-":
        firstNum = +firstNum - +secondNum;
        break;
      case "*":
        firstNum = +firstNum * +secondNum;
        break;
      case "/":
        if (+secondNum === 0) {
          out.textContent = "error";
          firstNum = "";
          secondNum = "";
          sing = "";
          finish = true;
          return;
        }
        firstNum = +firstNum / +secondNum;
        break;
      case "%":
        firstNum = (+firstNum * +secondNum) / 100;
        break;
      default:
        out.textContent = "error";
    }
    finish = true;
    out.textContent = firstNum;
    fitText();
    console.log(firstNum);
  }
});
