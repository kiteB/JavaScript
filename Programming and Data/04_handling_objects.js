let codeit = {
  name: "코드잇",
  bornYear: 2017,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: {
    titla: "자바스크립트 프로그래밍 기초",
    language: "JavaScript",
  },
};

// 객체 property 추가
console.log(codeit.ceo);
codeit.ceo = "강영훈";
console.log(codeit.ceo);

// 객체 property 삭제
console.log(codeit.worstCourse);
delete codeit.worstCourse;
console.log(codeit.worstCourse);

// property 존재여부 확인하기
console.log(codeit.worstCourse !== undefined);
console.log("worstCourse" in codeit); // 짧아서 이해하기 쉽고, 실수로 더 안전하게 확인하기 위해서 사용함!

// in 연산자 활용
if ("name" in codeit) {
  console.log(`name 값은 ${codeit.name}입니다.`);
} else {
  console.log("name 프로퍼티는 존재하지 않습니다.");
}
