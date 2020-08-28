// 자동 형 변환
console.log('4' - true);   // Error가 아닌 3 출력!

// 산술 연산 (+, -, *, /, %, **) - 일반적으로 연산되어지는 값들을 숫자형으로 변환시킴!
console.log(4 + '2');     // 문자열 연산! (하나라도 문자열 있으면 문자열로 취급)
console.log(4 + 2);
console.log(4 - true);
console.log(4 * false);
console.log(4 / '2');
console.log('4' ** true);
console.log(4 % 'two');

// 관계 비교 연산 (<, <=, >, >=) - 일반적으로 값을 숫자형으로 변환!
console.log(2 < '3');
console.log(2 > true);
console.log('2' <= false);
console.log('two' >= 1);  // 비교가 불가능한 경우도 false 출력!

// 같음 비교 연산 (===, !==, ==, !=)
console.log(1 === '1')    // 일치, 불일치(!==) - 형변환 X
console.log(1 === true) 
console.log(1 == '1')     // 동등, 부등(!=) - 형변환 O
console.log(1 == true) 
// 특별한 경우가 아니라면 두 값이 동등한지 비교하려면 일치, 불일치 연산자 활용하는 것이 좋음!