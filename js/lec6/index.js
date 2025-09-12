// for loop , while loop , do while loop

// for loop
// for (let i = 10; i <= 20; i++) {
//   console.log("kkka", i);
//   if (i === 16) {
//     break;
//   }
// }

// for loop
for (let i = 10; i <= 20; i++) {
  if (i === 16) {
    continue;
  }
  //   console.log("kkka", i);
}

// for (let index = 0; index <= 10; index++) {
//   console.log(index);
//   for (let index2 = 11; index2 <= 20; index2++) {
//     console.log("innerloop", index2);
//   }
// }

//while loop
// let user = false;
// let a = 0;
// while (user === true) {
//   console.log(a);
//   a++;
// }

// //do while loop

// do {
//   console.log(a);
//   a++;
//   console.log(a);
// } while (user === true);

for (let i = 1; i <= 10; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "*";
  }
  console.log(row);
}
