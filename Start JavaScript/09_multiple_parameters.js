// 두 수를 더해서 출력해주는 함수
function printSum(num1, num2) {
  console.log(num1 + num2);
};

// 자기소개 함수
function introduce(name, birth, nationality, job) {
  console.log('안녕하세요! 반갑습니다.');
  console.log('제 이름은 ' + name + ' 입니다.');
  console.log('생년월일은 ' + birth + '이고, ');
  console.log('국적은 ' + nationality + '입니다.');
  console.log('직업은 ' + job + '입니다.');
  console.log('잘 부탁드립니다!');
};

// printSum 함수 호출
printSum(10, 5);
printSum(123, 4);
printSum(56, 7890);

// introduce 함수 호출
introduce('배연주', '99.06.03', '한국', '학생');