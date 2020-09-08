let sum = 0.1 + 0.2;
console.log(sum); // 0.3이 아닌 0.30000000000000004 출력됨

// solve_1. toFixed 이용하기
console.log(sum.toFixed(1)); // 문자열 출력 -> 형변환 필요
console.log(Number(sum.toFixed(1)));
console.log(+sum.toFixed(1));

// solve_2. Math.round 이용하기
console.log(Math.round(sum * 10) / 10);
