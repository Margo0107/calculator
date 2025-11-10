let firstNum = "";
let secondNum = "";
let sing = "";
let finish = false;

const operator = ["+", "-", "*", "/", "%"];
const digit = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

const out = document.querySelector(".calc-screen p");
const clear = document.querySelector(".clear");
const buttons = document.querySelector(".buttons");

function clearAll() {
  firstNum = "";
  secondNum = "";
  sing = "";
  finish = false;
  out.textContent = "0";
}
clear.addEventListener("click", clearAll());

buttons.addEventListener("click", (event) => {
  if (!event.target.classList.contains("btn")) return;
  out.textContent = "";
  const key = event.target.textContent;
  if (digit.includes(key)) {
    firstNum += key;
    out.textContent = firstNum;
    console.log(firstNum, secondNum, sing);
  }
  if (operator.includes(key)) {
  }
});
