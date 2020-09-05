// 메소드 (Method)
let greetings = {
  sayHello: function (name) {
    console.log(`Hello ${name}`);
  },
  sayHi: function () {
    console.log("Hi!");
  },
  sayBye: function () {
    console.log("Bye!");
  },
};

greetings["sayHello"]("Yeonju!");
