// String
let myString = "Hi JavaScript";

// 부분 문자열 접근 slice(start, end)
console.log(myString.slice(0, 2));
console.log(myString.slice(3));
console.log(myString.slice());

// 양 끝 공백 제거
console.log(myString.trim());

// 대소문자 변환
console.log(myString.toUpperCase()); // 대문자
console.log(myString.toLowerCase()); // 소문자

// 요소 탐색
console.log(myString.indexOf("i")); // 앞 부터
console.log(myString.lastIndexOf("i")); // 뒤 부터
// 문자열 안에 없는 문자를 인덱스로 주면 -1 출력
console.log(myString.indexOf("a"));

// 요소 접근
console.log(myString[3]); // 대괄호 표기법
console.log(myString.charAt(3)); // charAt 메소드

// 문자열 길이
console.log(myString.length);
