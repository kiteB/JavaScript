// 배열의 메소드 (Array's Method)
let colors = ["빨간색", "주황색", "노란색", "초록색", "파란색", "보라색"];

console.log(colors);

// splice(startIndex, deleteCount, item)
// deleteCount 없이 전달하면 startIndex 외에 모든 값 삭제!
// deleteCount에 0을 넣으면, 그 자리에 값 추가
colors.splice(1, 0, "청록색");
console.log(colors);
