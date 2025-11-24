import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });
let operation;
while (true) {
  operation = await rl.question(
    "What operation do you want (sum, substract, multiply, divide): "
  );

  if (["sum", "substract", "multiply", "divide"].includes(operation)) {
    break;
  }
  console.log("Invalid operation! Try again. \n");
}

async function askNumber(promptText) {
  while (true) {
    const value = await rl.question(promptText);

    const number = Number(value);
    if (!isNaN(number)) {
      return number;
    }
    console.log("Invalid number! Try again. \n");
  }
}

const first = await askNumber("First operand: ");
const second = await askNumber("Second operand: ");

function calculate(a, b) {
  if (operation === "sum") {
    return a + b;
  } else if (operation === "substract") {
    return a - b;
  } else if (operation === "multiply") {
    return a * b;
  } else if (operation === "divide") {
    return a / b;
  }
}

console.log(calculate(first, second));

rl.close();