// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
};

// 프로퍼티 추가, 수정, 삭제는 가능
animal.age = 2;
animal.name = "까망이";
delete animal.color;

// 2. 메서드
// 값이 함수인 프로퍼티
const person = {
  sayHi: function () {
    console.log("안녕!");
  },
  sayBye() {
    console.log("안녕!");
  },
};

person.sayHi();
