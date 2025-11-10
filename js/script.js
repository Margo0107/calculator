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

function clearAll() {
  firstNum = "";
  secondNum = "";
  sing = "";
  finish = false;
  out.textContent = "0";
  console.log("clearAll");
}
clear.addEventListener("click", clearAll);

function deleteSecondNum() {
  secondNum = "";
  out.textContent = "";
  console.log("delete two number");
}

btnDelete.addEventListener("click", deleteSecondNum);

buttons.addEventListener("click", (event) => {
  if (!event.target.classList.contains("btn")) return;
  //первое число
  const key = event.target.textContent;
  if (digit.includes(key)) {
    if (secondNum === "" && sing === "") {
      firstNum += key;
      out.textContent = firstNum;
      console.log("первое число", firstNum);
    } else if (firstNum !== "" && secondNum !== "" && finish) {
      secondNum = key;
      finish = false;
      out.textContent = secondNum;
    } else {
      secondNum += key;
      out.textContent = secondNum;
      console.log("второе число", secondNum);
    }
    return;
  }
  //знак +-/ знаки
  if (operator.includes(key)) {
    sing = key;
    out.textContent = sing;
    console.log(sing);
    return;
  }
  //click equal
  if (key === "=") {
    if (secondNum === "") secondNum = firstNum;
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
    console.log(firstNum);
  }
});
