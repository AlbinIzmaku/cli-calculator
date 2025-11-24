#CLI Calculator

A simple command-line calculator built using **pure Node.js** 
The user can choose an operation and enter two operands. The program validates the inputs and performs the calculation.

## Features

-Pure Node.js(no frameworks, no external packages)
-Interactive CLI using `readline/promises`
-Validates:
  -Incorrect operations
  -Non-numeric input
-Supports operations:
  -Addition
  -Subtraction
  -Multiplication
  -Division

## How It works

The program:
1. Asks the user which operation to perform.
2. Validates the operation.
3. Asks for two operands.
4. Validates that both operands are valid numbers.
5. Performs the calculation.
6. Shows the result.
  
## Requirements

-Node.js v18+
-Terminal / Command Prompt

## Installation

Clone the project:
git clone https://github.com/AlbinIzmaku/cli-calculator.git

Navigate:
cd cli-calculator

run:
node index.js
