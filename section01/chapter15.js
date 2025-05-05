// 1. 객체 생성
// 객체 생성자
let obj1 = new Object();
// 객체 리터럴. 주로 사용.
let obj2 = {};

let person = {
  name: "이정환", // 객체 프로퍼티. 키:값
  age: 27,
  hobby: "테니스",
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1. 특정 프로퍼티 접근
// 존재하지 않는 프로퍼티를 찾으면 undefined가 반환된다.
let name = person.name;
let age = person["age"];

let property = "hobby";
let hobby = person[property];

// 3.2. 새로운 프로퍼티 추가
person.job = "fe developer";
person["food"] = "떡볶이";

// 3.3. 프로퍼티를 수정하는 방법
person.job = "educator";

// 3.4. 프로퍼티를 삭제하는 방법
delete person.job;

// 3.5. 프로퍼티의 존재 유무를 확인하는 방법
let result1 = "name" in person;
