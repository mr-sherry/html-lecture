let name = "";
name = "ahmed";

let mathNum = 88;

let students = ["ahmed", "ali", "raza", "shafqat"];
let rollnumber = [1, 2, 3, 4];

// console.log(name);
// console.log(students[2]);
// console.log(rollnumber[2]);

let array = [];
array[1] = "ahmed";
array[0] = "ali";
array[2] = "ahmedlast";
array[3] = "ahmedlast22";
// console.log(array);

// console.log(array.length);

// console.log(array.toString());
// console.log(array.at(2));
// console.log(array[2]);
// console.log(array.join(""));
// console.log(array.pop());
// console.log(array);

// console.log("hello", array.push("ali"));
// console.log(array);

// console.log(array.shift());
// console.log(array);

// console.log("hello", array.unshift("raza"));
// console.log(array);

let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
let array3 = [9, 10, 11, 12];
let array4 = [13, 14, 15, 16];

let newArray = array1.concat(array2);
console.log(newArray);

// spread operator = ...
let fullArray = [...array, ...array1, ...array3, ...array4];
console.log(fullArray);

let nestedarray = [
  1,
  2,
  3,
  [345, 546, 87],
  4,
  [34, 54, 67, [92, 234, 4353, 221, [324, 456, 876, 879]]],
];

console.log(nestedarray.flat(Infinity));
