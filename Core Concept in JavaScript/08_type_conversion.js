// 형 변환 (type Conversion)
console.log('10' + '5');
console.log(10 + 5);

// 문자로 바꾸고 싶을 때는 String, 숫자로 바꾸고 싶을 때는 Number, Boolean으로 바꾸고 싶을 때는 Boolean 이용!
console.log(Number('10') + Number('5'));
console.log(String(10) + String(5));

// 숫자 -> 문자
let x = 123;
console.log(x);
console.log(String(x));
console.log(typeof x);
console.log(typeof String(x));
console.log('');

// 불린 -> 문자
let y = true;
console.log(y);
console.log(String(y));
console.log(typeof y);
console.log(typeof String(y));

// 문자 -> 숫자
x = '문자';
console.log(x);
console.log(Number(x));
console.log(typeof x);
console.log(typeof Number(x));
console.log('');

// 불린 -> 숫자
y = true;
console.log(y);
console.log(Number(y));
console.log(typeof y);
console.log(typeof Number(y));

// 문자 -> 불린
x = '';
console.log(x);
console.log(Boolean(x));
console.log(typeof x);
console.log(typeof Boolean(x));
console.log('');

// 숫자 -> 불린
y = NaN;
console.log(y);
console.log(Boolean(y));
console.log(typeof y);
console.log(typeof Boolean(y));

// '', 0, NaN 은 false <- falsy 값!
