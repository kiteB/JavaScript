// for...of
let colors = ["빨간색", "주황색", "노란색", "초록색", "파란색", "보라색"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

for (let element of colors) {
  console.log(element);
}

// 일반적인 객체에 최적화되어있기 때문에, 배열에는 사용하지 않는 것이 좋음!
for (let index in colors) {
  console.log(colors[index]);
}
