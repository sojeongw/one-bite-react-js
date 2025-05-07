// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// 1.2. for of
for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// 2.1. Object.keys
// 객체에서 Key 값들만 뽑아서 새로운 배열로 반환한다.
let keys = Object.keys(person);

for (let key of keys) {
  // 키
  console.log(key);
  // 밸류
  console.log(person[key]);
}

// 2.2. Object.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환한다.
let values = Object.values(person);

for (let value of values) {
  console.log(value);
}

// 2.3. for in
for (let key in person) {
  // 키
  console.log(key);
  // 밸류
  console.log(person[key]);
}
