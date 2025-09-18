// console.log("welcome to website ahmed");
// console.log("welcome to website ali");
// console.log("welcome to website raza");

function myFunction(name) {
  if (name) {
    console.log(`welcome to website ${name}`);
  } else {
    console.log(`welcome to website user`);
  }
}

// myFunction("ahmed");
// myFunction("raza");
// myFunction("ali");
// myFunction();
// myFunction(89892);

function calculator(a, b, op) {
  switch (op) {
    case "+":
      return a + b;

      break;
    case "-":
      return a - b;

      break;
    case "/":
      return a / b;

      break;
    case "*":
      return a * b;

      break;

    default:
      return "invalid op";

      break;
  }
}
console.log(calculator(40, 110, "--"));

// console.log(nmu);
// let nmu = 109202;

// calc(12, 34, "+");
let calc = function (a, b, op) {
  switch (op) {
    case "+":
      console.log(a + b);

      break;
    case "-":
      console.log(a - b);

      break;
    case "/":
      console.log(a / b);

      break;
    case "*":
      console.log(a * b);

      break;

    default:
      console.log("invalid op");

      break;
  }
};

let user = (value) => {
  if (value === true) {
    return "ahmed";
  } else {
    return "";
  }
};

if (user(false) === "ahmed") {
  console.log("ahmed");
} else {
  console.log("nothing returned");
}

function name(params) {}

(params) => {};
