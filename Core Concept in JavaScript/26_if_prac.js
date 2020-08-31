// 파라미터 height을 활용하는 checkHeight 함수를 완성하세요.
function checkHeight(height) {
  const LIMIT = 140;
  let passMessage = '탑승이 가능합니다.';
  let failMessage = '탑승이 불가능합니다.';

  if (height >= LIMIT) {
      console.log(passMessage);
  } else {
      console.log(failMessage);
  }
}
