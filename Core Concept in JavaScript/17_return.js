// return문의 역할
// 1. 결과값 돌려주기
// 2. 함수의 실행 중단시키기
function square(x) {
  console.log('return 전');
  return x * x;
  console.log('return 후'); // DeadCode
}

console.log(square(3));