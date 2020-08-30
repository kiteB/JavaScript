function printSquare(x) {
  console.log(x * x);
}

function getSquare(x) {
  return x * x;
}

printSquare(3);   // 9 출력됨.
getSquare(3);     // 아무것도 출력되지 않음.

console.log(printSquare(3));  // undefined 출력됨.
console.log(getSquare(3));    // 9 출력됨.