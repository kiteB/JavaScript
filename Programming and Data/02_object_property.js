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

// 점 표기법 (objectName.propertyName)
console.log(codeit.bornYear);

// 대괄호 표기법 (objectName['propertyName'])
console.log(codeit["born" + "Year"]);

let propertyName = "name";
console.log(codeit[propertyName]);

// 객체 안에 있는 객체에 접근하는 방법
console.log(codeit.bestCourse["title"]);

// 객체 안에 존재하지 않는 property에 접근하려고 하면 error가 발생하는 것이 아니라 undefined가 출력됨!
// console.log(codeit[teacher]);  // undefined
