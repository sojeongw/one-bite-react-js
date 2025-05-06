// 1. Spread 연산자
// 객체, 배열에 저장된 값을 개별로 흩뿌려준다.
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
  a: 1,
  b: 2,
  c: 5,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

function funcA(p1, p2, p3) {}
funcA(...arr1);

// 2. Rest 매개변수
function funcB(...rest) {
  console.log(rest);
}
funcB(...arr1);

// 첫번째 인수는 one에 저장한다.
function funcB(one, ...rest) {
  console.log(one, rest);
}
