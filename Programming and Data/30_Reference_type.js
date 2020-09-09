// 참조형 (Reference Type)
// 변수 = 주소값
let x = { name: "yeonju" };
let y = x;

console.log(x);
console.log(y);
y.birth = 1999;
console.log(x);
console.log(y);
