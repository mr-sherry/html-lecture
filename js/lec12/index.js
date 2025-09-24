let num = 23.56;

let value = Math.ceil(num / 100) * 100;
console.log(value);

let value1 = Math.floor(num);
console.log(value1);

let value2 = Math.round(num);
console.log(value2);

let value3 = Math.trunc(num);
console.log(value3);

let numbers = [23, 45, 67, 12, 89, 90];
console.log(Math.max(...numbers));
console.log(Math.min(-12, -90, 23, 45, 67, 12, 89, 90));
console.log(Math.min(...numbers));

Math.random();
console.log(Math.floor(Math.random() * 100));
console.log(Math.random());
console.log(Math.random());

//generate 5 random numbers between 1 to 10 and use them in switch case and print results like greator then 10 lesten 20 and so on use floor method
