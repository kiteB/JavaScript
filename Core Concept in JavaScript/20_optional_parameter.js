// 옵셔널 파라미터 (Optional Parameters)
// 옵셔널 파라미터는 항상 맨 뒤에 선언해주기!
function introduce(name, age, nationality = '한국') {
  console.log(`제 이름은 ${name}입니다.`);
  console.log(`나이는 ${age}살 이고,`);
  console.log(`국적은 ${nationality}입니다.`);
}

introduce('배연주', 22, '미국');
console.log('');
introduce('배연주', 22);