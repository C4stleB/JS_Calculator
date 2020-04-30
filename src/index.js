// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const formula = document.getElementById("js-formula");
const display = document.getElementById("js-display");
const container = document.getElementById("js-container");
const btns = container.querySelectorAll("input");
let afterCalcFlag = false;

function reset() {
  formula.innerText = "";
  display.innerText = "0";
}

function addNum(num) {
  if (afterCalcFlag) {
    reset();
    afterCalcFlag = false;
  }

  if (display.innerText === "0") {
    display.innerText = num;
  } else {
    display.innerText = display.innerText + num;
  }
}

function addForm(form) {
  if (afterCalcFlag) {
    formula.innerText = display.innerText + form;
    display.innerText = "0";
    afterCalcFlag = false;
  } else {
    formula.innerText = formula.innerText + display.innerText + form;
    display.innerText = "0";
  }
}

function calculate() {
  if (afterCalcFlag) {
  } else {
    formula.innerText = formula.innerText + display.innerText;
    const result = eval(formula.innerText);
    display.innerText = result;
    afterCalcFlag = true;
  }
}

function handleClick(e) {
  e.preventDefault();
  const inputValue = e.target.value;
  if (inputValue === "C") {
    reset();
  } else if (
    inputValue === "+" ||
    inputValue === "-" ||
    inputValue === "*" ||
    inputValue === "/"
  ) {
    addForm(inputValue);
  } else if (inputValue === "=") {
    calculate();
  } else {
    addNum(inputValue);
  }
}

btns.forEach(function(btn) {
  btn.addEventListener("click", handleClick);
});
