let name = "ahmed";
let loggedin = false;

if (loggedin === true) {
  console.log(`welcome to website ${name}`);
} else {
  console.log(`please log in.`);
}

let valuea = 20;
let valueb = 30;

let operator = "+";

if (operator === "+") {
  console.log(valuea + valueb);
} else if (operator === "-") {
  console.log(valuea - valueb);
} else {
  console.log("no operator added");
}

switch (operator) {
  case "+":
    console.log(valuea + valueb);

    break;

  case "-":
    console.log(valuea - valueb);

    break;

  case "/":
    console.log(valuea / valueb);

    break;

  case "*":
    console.log(valuea * valueb);

    break;

  default:
    console.log("no operator found");

    break;
}

// home work
// Q1: Write an if/else statement to check if a number is positive or negative.
// let num = -5;

// Q2: Write a switch statement for a variable called day
// that prints "Monday" if day = 1, "Tuesday" if day = 2, and "Other day" otherwise.
