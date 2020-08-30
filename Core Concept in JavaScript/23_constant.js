// 상수 (constant)
const PI = 3.14;   // 원주율
let radius = 0;  // 반지름

// 원의 넓이를 계산하는 함수
function calculateArea() {
  return PI * radius * radius;
}

// 반지름에 따른 원의 넓이를 출력하는 함수
function printArea() {
  return (`반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`);
}

radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());