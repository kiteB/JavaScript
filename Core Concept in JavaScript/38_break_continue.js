// break와 continue
// 홀수만 출력하기
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

let i = 1;

while (i <= 10) {
  if (i % 2 !== 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
