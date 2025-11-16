document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (digit.includes(key)) {
    if (sing === "" && secondNum === "") {
      firstNum += key;
      out.textContent = firstNum;

      if (!fitText()) {
        firstNum = firstNum.slice(0, -1);
        out.textContent = firstNum;
        return;
      }
      console.log("первое число было нажато на клавиатуре", firstNum);
    } else if (firstNum !== "" && secondNum !== "" && finish === true) {
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
      console.log("второе число было нажато на клавиатуре", secondNum);
    }
    return;
  }
  //rounding numbers
  function fix(num) {
    return Number(num.toFixed(10));
  }
  //delete the second number with Backspace
  if (key === "Backspace") {
    secondNum = "";
    out.textContent = "";
    console.log("the second number was deleted via Backspace");
  }
  //symbol: +-/
  if (operator.includes(key)) {
    sing = key;
    out.textContent = sing;
    console.log(sing);
    return;
  }
  //event on equals when Enter button is pressed
  if (key === "Enter") {
    if (secondNum === "") secondNum = firstNum;
    secondaryDisplay.textContent = `${firstNum} ${sing} ${secondNum}`;
    fitSecondaryNumber();
    switch (sing) {
      case "+":
        firstNum = fix(+firstNum + +secondNum);
        break;
      case "-":
        firstNum = fix(+firstNum - +secondNum);
        break;
      case "*":
        firstNum = fix(+firstNum * +secondNum);
        break;
      case "/":
        firstNum = fix(+firstNum / +secondNum);
        if (+secondNum === 0) {
          out.textContent = "errr";
          firstNum = "";
          secondNum = "";
          sing = "";
          finish = false;
          return;
        }
        break;
      case "%":
        firstNum = fix((+firstNum * +secondNum) / 100);
        break;
      default:
        out.textContent = "error";
    }
    finish = true;
    out.textContent = firstNum;
    fitText();
    console.log("финальное число", firstNum);
  }

  //event to clear all on Escape
  if (key === "Escape") {
    firstNum = "";
    secondNum = "";
    sing = "";
    finish = false;
    out.textContent = "0";
    clearSecondaryDisplay();
    resetFont();
    console.log("очистка через искапе");
  }
});
