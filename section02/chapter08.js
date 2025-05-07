// 1. forEach
// 배열의 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행한다.
let arr1 = [1, 2, 3];
arr1.forEach((item, idx, arr) => {
  console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인한다.
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환한다.
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
// 같은 값이 중복된다면 맨 처음 찾은 값의 인덱스를 반환한다.
// 존재하지 않는 값은 -1을 반환한다.

// 4. findIndex
// 특정 요소의 인덱스(위치)를 반환한다.
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소만!
let arr4 = [1, 2, 3];
arr4.findIndex((item) => {
  if (item === 2) return true;
});
// 역시 존재하지 않는 값이면 -1을 반환한다.
arr4.findIndex((item) => item === 999);

let objectArr = [{ name: "이정환" }, { name: "홍길동" }];
// 실패. 얕은 복사로 동작하기 때문에 객체 값을 비교할 수 없다.
objectArr.indexOf({ name: 이정환 });
// 이럴 때 findIndex를 이용한다.
objectArr.findIndex((item) => item.name === "이정환");

// 5. find
// 모든 요소를 순회하면서 콜백 함수를 만족하는 요소를 찾고 요소를 그대로 반환한다.
let arr5 = [{ name: "이정환" }, { name: "홍길동" }];
const finded = arr5.find((item) => item.name === "이정환");
console.log(finded);
