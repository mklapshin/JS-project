let number1 = '';
let number2 = '';
let operation = 1;

button1.addEventListener("click", () => {
  if (operation % 2 == 1) {
  let value1 = (document.querySelector('#button1')).textContent;
  number1 = number1 + value1;
  document.querySelector(".calculatorScreen").innerHTML = number1;
  } else {
    let value1_2 = (document.querySelector('#button1')).textContent;
  number2 = number2 + value1_2;
  document.querySelector(".calculatorScreen").innerHTML = number2;
  }
});

button2.addEventListener("click", () => {
  if (operation % 2 == 1) {
  let value2 = (document.querySelector('#button2')).textContent;
  number1 = number1 + value2;
  document.querySelector(".calculatorScreen").innerHTML = number1;
} else {
  let value2_2 = (document.querySelector('#button2')).textContent;
number2 = number2 + value2_2;
document.querySelector(".calculatorScreen").innerHTML = number2;
}
});

button3.addEventListener("click", () => {
  if (operation % 2 == 1) {
  let value3 = (document.querySelector('#button3')).textContent;
  number1 = number1 + value3;
  document.querySelector(".calculatorScreen").innerHTML = number1;
} else {
  let value3_2 = (document.querySelector('#button3')).textContent;
number2 = number2 + value3_2;
document.querySelector(".calculatorScreen").innerHTML = number2;
}
});

button4.addEventListener("click", () => {
  if (operation % 2 == 1) {
  let value4 = (document.querySelector('#button4')).textContent;
  number1 = number1 + value4;
  document.querySelector(".calculatorScreen").innerHTML = number1;
} else {
  let value4_2 = (document.querySelector('#button4')).textContent;
number2 = number2 + value4_2;
document.querySelector(".calculatorScreen").innerHTML = number2;
}
});

button5.addEventListener("click", () => {
  if (operation % 2 == 1) {
  let value5 = (document.querySelector('#button5')).textContent;
  number1 = number1 + value5;
  document.querySelector(".calculatorScreen").innerHTML = number1;
} else {
  let value5_2 = (document.querySelector('#button5')).textContent;
number2 = number2 + value5_2;
document.querySelector(".calculatorScreen").innerHTML = number2;
}
});

button6.addEventListener("click", () => {
  if (operation % 2 == 1) {
  let value6 = (document.querySelector('#button6')).textContent;
  number1 = number1 + value6;
  document.querySelector(".calculatorScreen").innerHTML = number1;
} else {
  let value6_2 = (document.querySelector('#button6')).textContent;
number2 = number2 + value6_2;
document.querySelector(".calculatorScreen").innerHTML = number2;
}
});

button7.addEventListener("click", () => {
  if (operation % 2 == 1) {
  let value7 = (document.querySelector('#button7')).textContent;
  number1 = number1 + value7;
  document.querySelector(".calculatorScreen").innerHTML = number1;
} else {
  let value7_2 = (document.querySelector('#button7')).textContent;
number2 = number2 + value7_2;
document.querySelector(".calculatorScreen").innerHTML = number2;
}
});

button8.addEventListener("click", () => {
  if (operation % 2 == 1) {
  let value8 = (document.querySelector('#button8')).textContent;
  number1 = number1 + value8;
  document.querySelector(".calculatorScreen").innerHTML = number1;
} else {
  let value8_2 = (document.querySelector('#button8')).textContent;
number2 = number2 + value8_2;
document.querySelector(".calculatorScreen").innerHTML = number2;
}
});

button9.addEventListener("click", () => {
  if (operation % 2 == 1) {
  let value9 = (document.querySelector('#button9')).textContent;
  number1 = number1 + value9;
  document.querySelector(".calculatorScreen").innerHTML = number1;
} else {
  let value9_2 = (document.querySelector('#button9')).textContent;
number2 = number2 + value9_2;
document.querySelector(".calculatorScreen").innerHTML = number2;
}
});

button0.addEventListener("click", () => {
  if (operation % 2 == 1) {
  let value0 = (document.querySelector('#button0')).textContent;
  number1 = number1 + value0;
  document.querySelector(".calculatorScreen").innerHTML = number1;
} else {
  let value0_2 = (document.querySelector('#button0')).textContent;
number2 = number2 + value0_2;
document.querySelector(".calculatorScreen").innerHTML = number2;
}
});

buttonSum.addEventListener("click", () => {
  number1 = parseFloat(number1);
  operation += 1;
  operationNumber = 1;
  document.querySelector(".calculatorScreen").innerHTML = '';
});

buttonProisvedenie.addEventListener("click", () => {
  number1 = parseFloat(number1);
  operation += 1;
  operationNumber = 2;
  document.querySelector(".calculatorScreen").innerHTML = '';
});

buttonDelenie.addEventListener("click", () => {
  number1 = parseFloat(number1);
  operation += 1;
  operationNumber = 3;
  document.querySelector(".calculatorScreen").innerHTML = '';
});

buttonRasnost.addEventListener("click", () => {
  number1 = parseFloat(number1);
  operation += 1;
  operationNumber = 4;
  document.querySelector(".calculatorScreen").innerHTML = '';
});

buttonOperation.addEventListener("click", () => {
  number2 = parseFloat(number2);
  if (operationNumber == 1) {
  result = number1 + number2;
} else if (operationNumber == 2) {
  result = number1 * number2;
} else if (operationNumber == 3) {
  result = number1 / number2;
} else if (operationNumber == 4) {
  result = number1 - number2; 
}
  document.querySelector(".calculatorScreen").innerHTML = result;
  operation += 1;
  number1 = result;
  number2 = '';
});

stopButton.addEventListener("click", () => {
  number1 = '';
  umber2 = '';
  operation = 1;
  result = 0;
  document.querySelector(".calculatorScreen").innerHTML = '';
});