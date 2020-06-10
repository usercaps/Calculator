'use strict';

let calculator = document.getElementById('calc_form');
let calcDisplay = document.getElementsByTagName('input');
let calcDisplayValue = calcDisplay.value;
let currentCalcMode = calculator.dataset.calcMode;
let equalBtn = document.getElementById('equally');
let clearBtn = document.getElementById('clear');
let dotBtn = document.getElementById('dot');
let percentageBtn = document.getElementById('persent');
// let sinBtn = document.getElementById('sin');
// let cosBtn = document.getElementById('cos');
// let tgBtn = document.getElementById('tg');
// let ctgBtn = document.getElementById('ctg');
let memory = [];
let debug = false;



let numbers = [
  document.getElementsByClassName('one'),
  document.getElementsByClassName('two'),
  document.getElementsByClassName('three'),
  document.getElementsByClassName('four'),
  document.getElementsByClassName('five'),
  document.getElementsByClassName('six'),
  document.getElementsByClassName('seven'),
  document.getElementsByClassName('eight'),
  document.getElementsByClassName('nine'),
  document.getElementsByClassName('zero')
];

let operators = [
  document.getElementById('plus'),
  document.getElementById('minus'),
  document.getElementById('divide'),
  document.getElementById('multiply'),
];

//   click
numbers.forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.preventDefault();
    currentCalcMode = calculator.dataset.calcMode;
    if (currentCalcMode === 'initial') {
      calcDisplay.value = this.value;
      //   memory
      memory.push(calcDisplay.value);
    }
    if (currentCalcMode === 'numrer') {
      calcDisplay.value = calcDisplay.value + this.value;
      memory.pop();
      memory.push(calcDisplay.value);
    }
    if (currentCalcMode === 'operaror') {
      calcDisplay.value = this.value;
      memory.push(calcDisplay.value);
      console.log(memory);
    }
    let currentDisplayEl = document.getElementsByTagName('input');
    calculator.dataset.calcMode = 'number';
    currentCalcMode = calculator.dataset.calcMode;
    let currentDisplayVal = parseInt(currentDisplayEl.value);
    console.log(memory);
  }, false)
});

// click operator
operators.forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.preventDefault();
    let buttonOperator = this.getAttribute('data-operator');
    memory.push({
      'operator': buttonOperator
    });
    calculator.dataset.calcMode = 'operator';
    console.log(memory);
  })
});

// clear click
clearBtn.addEventListener('click', (event) => {
  event.preventDefault();
  calcDisplay.value = "0";
  memory = [];
  calculator.dataset.calcMode = 'initial';
  console.clear();
}, false);

//dot button
dotBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (calcDisplay.value !== '0') {
    calcDisplay.value = calcDisplay.value + '.';
  }
}, false);

// % click

percentageBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (calcDisplay.value !== '0') {
    calcDisplay.value = parseInt(calcDisplay.value) / 100;
  }
  memory = [calcDisplay.value];
  console.log(memory);
}, false);

// = click

equalBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(memory);
  let previousVal = memory[0];
  let operaror = memory[1];
  let currentVal = memory[2];

  let calcMethodToUse = operator.operaror;
  let result = '';

  switch (calcMethodToUse) {
    case 'add':
      result = add(previousVal, currentVal);
      break;
    case 'subtract':
      result = subtract(previousVal, currentVal);
      break;
    case 'multiply':
      result = multiply(previousVal, currentVal);
      break;
    case 'divide':
      result = divide(previousVal, currentVal);
      break;
  }
  calcDisplay.value = result;

  memory = [result];

  console.log(memory);

}, false);

//OPERATOR FUNCTIONS

const add = (a, b) => {
  return (+a + +b)
}
const subtraction = (a, b) => {
  return (a - b)
}
const multiply = (a, b) => {
  return (a * b)
}
const divide = (a, b) => {
  return (a / b)
}


// sin click

// sinBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   if(calcDisplay.value !== '0'){
//     calcDisplay.value = parseInt(math.sin(calcDisplay.value));
//   }
//   memory = [calcDisplay.value];
//   console.log(memory);
// }, false);







// бинд кнопок
window.addEventListener("keyup", checkKeyPressed, false);

function checkKeyPressed(e) {
  console.log('click');
  // If displayfield is in focus, we can type numbers in directly instead of triggering a click
  if (calcDisplayEl.is(':focus')) {
    return;
  }

  // Numbers 0-9
  for (let i = 48; i < 58; i++) {
    console.log(i);

    if (e.keyCode == [i]) {
      $('[data-btn-val="' + ([i] - 48) + '"]').trigger('click');
    }
  }

  // Plus key
  if (e.which == 107) {
    $('[data-operator="add"]').trigger('click');
  }

  // Minus key
  if (e.which == 109) {
    $('[data-operator="subtract"]').trigger('click');
  }

  // Enter (or equals) key
  if (e.which == 13 || e.keyCode == 187) {
    $('[data-operator="equals"]').trigger('click');
  }

  // Clear key (cmd + c)
  if (e.keyCode == 67) {
    console.log('cmd + c');
    $('[data-operator="clear"]').trigger('click');
  }
}