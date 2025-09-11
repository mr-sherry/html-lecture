let array = ["Apple", "Orange", "Orange", "Apple", "Mango"];

console.log(array.indexOf("Orange"));
console.log(array.lastIndexOf("Orange"));

console.log(array.includes("Apple"));

console.log(array.sort());
console.log(array.reverse());

let data = { name: "ahmed", rollNum: 2010, result: { math: 87, english: 98 } };

data.name = "shafqat";
console.log(data.result.english);

let students = [
  { name: "ahmed", rollNum: 2010 },
  { name: "raza", rollNum: 2011 },
  { name: "ali", rollNum: 2012 },
];

console.log(students[2].name);
