let a = new Date('2022-03-25');
console.log(a);

let b = new Date(24 * 3600 * 1000);
let b1 = new Date(0);
console.log(b);
console.log(b1);
console.log(a.toString());

let date = new Date();
console.log(date.getFullYear());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

console.log(date.getTime());

let now = Date.now();
let now1 = Date.parse('March 21, 2012');
console.log(now1);

console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
