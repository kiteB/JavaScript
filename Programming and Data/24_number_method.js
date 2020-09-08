// Number
let myNumber = 0.3591;
let myNumber2 = 255;

// toFixed(0 ~ 100)
console.log(myNumber.toFixed(3)); // 0.359
console.log(typeof myNumber.toFixed(3)); // string

// 수정된 값을 숫자형으로 사용하고 싶다면 Number 이용하기
console.log(Number(myNumber.toFixed(7))); // 0.359
console.log(typeof Number(myNumber.toFixed(7))); // string

// 어떤 값 앞에 + 기호를 붙여주면 Number와 같은 효과를 얻을 수 있음.
console.log(+myNumber.toFixed(2));

// toString(2 ~ 36)
console.log(myNumber2.toString(2));
console.log(myNumber2.toString(8));
console.log(myNumber2.toString(16));

// 정수에 바로 .을 찍게되면 소수점으로 인식하게 됨.
// 점 두 개를 사용하거나 괄호 사용하기
console.log((255).toString(16));
