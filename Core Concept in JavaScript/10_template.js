// 템플릿 문자열 (template strings)
// template: 일정한 틀, 형식
let year = 2020;
let month = 8;
let day = 29;
let myNumber = 3;

function getTwice(x) {
  return x * 2;
}
console.log('생년월일은 ' + year + '년 ' + month + '월 ' + day + '일 입니다.');
console.log(`생년월일은 ${year}년 ${month}달 ${day}일 입니다.`);

console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`);