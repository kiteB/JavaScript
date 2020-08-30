// Scope: 범위, 영역
let x = 3; // 글로벌 변수, 전역 변수 (Global Variable)

function myFunction() {   // 블록문 (Block Statement)
  // let x = 3;    // 로컬 변수, 지역 변수 (Local Variable)
  console.log(x); 
}

myFunction();
console.log(x);