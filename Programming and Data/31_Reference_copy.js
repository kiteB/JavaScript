// 참조형 복사하기 (Reference Type Copy)
function cloneObject(object) {
  let temp = {};

  for (let key in object) {
    temp[key] = object[key];
  }

  return temp;
}

let course1 = {
  title: "파이썬 프로그래밍 기초",
  language: "Python",
};

let course2 = {};

course2.title = "자료 구조";

console.log(course1);
console.log(course2);
