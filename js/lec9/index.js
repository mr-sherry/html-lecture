let array = [1, 2, 3, 4, 5];

//map

let sum1 = array.map((num) => {
  let sum = 0;
  sum += num;
  return sum;
});

console.log(sum1);

// map filter reduce

let sum2 = array.reduce((acc, num) => {
  acc = acc + num;
  return acc;
});

console.log(sum2);

let data = [
  { name: "ahmed", rollNo: 111 },
  { name: "ali", rollNo: 112 },
  { name: "raza", rollNo: 113 },
  { name: "shafqat", rollNo: 114 },
];

let namesdata = data.map((item) => {
  return item;
});

console.log(namesdata);

let newdata = [1, 2, 3, 8, 8, 8, 8, 8, 4, 5, 6, 7, 8];

let filterdData = newdata.filter((item) => item !== 8);

console.log(filterdData);
