document.addEventListener("DOMContentLoaded", () => {
  const btnTheme = document.querySelector(".icon-theme"); //консоль показывает проблема тут
  const calcBox = document.querySelector(".calc");
  const calcScreen = document.querySelector(".calc-screen");
  const buttons = document.querySelectorAll(".btn");
  const btnFirstRow = document.querySelectorAll(".bg-gray");
  const btnSecondRow = document.querySelectorAll(".bg-violet");
  const secondaryDisplay = document.querySelector(".secondary_display");

  btnTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    calcBox.classList.toggle("light-bg");
    calcScreen.classList.toggle("screen-light");

    buttons.forEach((btn) => btn.classList.toggle("buttons-light"));

    btnFirstRow.forEach((btn) => btn.classList.toggle("bg-light-gray"));
    btnSecondRow.forEach((btn) => btn.classList.toggle("bg-lilac"));
    
    if (document.body.classList.contains("dark")) {
      secondaryDisplay.style.setProperty("--color-span", "#7c6d97ff");
    } else {
      secondaryDisplay.style.setProperty("--color-span", "#a2a2ad");
    }
  });
});
