// Date 객체

// 객체를 생성한 순간 출력!
let myDate = new Date();
console.log(myDate);

// 원하는 날짜 생성 (숫자 이용)
let myDate1 = new Date(1000); // 1970년 1월 1일 00:00:00 UTC + 1000밀리초
console.log(myDate1);

// 원하는 날짜 생성 (문자열 이용)
// new Date('YYYY-MM-DD')
let myDate2 = new Date("2020-09-04");
console.log(myDate2);

// new Date('YYYY-MM-DDThh:mm:ss')
let myDate3 = new Date("2020-09-04T17:58:44");
console.log(myDate3);

// new Date(YYYY, MM, DD, hh, mm, ss, ms) -> YYYY, MM만 필수!
// month는 0부터 시작함!
let myDate4 = new Date(2020, 5, 10);
console.log(myDate4);

// Date.getTime()
// myDate객체가 1970년 1월 1일 00:00:00 UTC부터 몇 밀리초 지났는지 알려줌 (타임스탬프)
let myDate5 = new Date(2017, 4, 18, 19, 11, 16);
console.log(myDate5);

// Date는 일자, Day는 요일
