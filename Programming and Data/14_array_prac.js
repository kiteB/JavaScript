// 배열 (Array)
let colors = ["빨간색", "주황색", "노란색", "초록색", "파란색", "보라색"];

console.log(colors.length);
console.log(colors["length"]);
console.log(colors[colors.length - 1]);

// 배열 요소 추가
colors[6] = "남색";
console.log(colors[6]);

// 배열 요소를 뛰어넘어서 생성하게 되면 'undefined'인 값 생성됨

// 배열 요소 변경
colors[1] = "분홍색";
console.log(colors);
