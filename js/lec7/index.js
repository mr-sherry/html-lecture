// let data = [1223, 34, 545, 655];

// for (let index = 0; index < data.length; index++) {
//   console.log(data[index]);
//   if (index === 2) {
//     break;
//   }
// }

// for (let index = 0; index < 10; index++) {
//   if (index === 4) {
//     continue;
//   }
//   console.log(index);
// }

let value = "123";
console.log(value);

{
  let value = "192";
  console.log(value);
}

console.log(value);

var a = 991;
console.log(a);

{
  var a = 999;
  console.log(a);
}

console.log(a);

let userLoggedin = true;
let name = "ahmed";

if (userLoggedin) {
  let message = `welcome to dashboard ${name ? name : "User"}  ${name && name}`;
  console.log(message);
} else {
  console.log("please Log In");
}
