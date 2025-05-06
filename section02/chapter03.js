// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];
// four는 undefined
let [one, two, three, four, five = 5] = arr;

// 2. 객체의 구조 분해 할당
let person = {
  name: "이정환",
  age: 27,
};

// 객체는 중괄호를 이용한다.
// extra는 undefined
// name을 myAge에 할당
let { name: myAge, age, hobby, extra } = person;

// 3. 객체 구조 분해 할당을 이용해 함수의 매개변수를 받는 법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

// 객체가 아닌 값을 넘긴다면 구조 분해 할당이 이루어지지 않는다.
func(person);
