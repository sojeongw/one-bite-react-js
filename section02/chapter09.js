// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링해서 새로운 배열로 반환한다.
let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값을 모아서 새로운 배열로 반환한다.
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => item * 2);

let names = arr1.map((item) => item.name);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
// 단, 숫자는 정상적으로 정렬되지 않는다. 사전순이기 때문.
// 이때는 콜백함수로 정렬 기준을 설정해준다.
// 양수를 반환하면 a, b가 되고 음수를 반환하면 b, a가 된다. 0을 반환하면 자리를 그대로 유지한다.
arr3.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});

// 4. toSorted
// 원본 배열은 그대로 두고 정렬한 새로운 배열을 반환한다.
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSroted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 반환한다.
let arr6 = ["hi", "im", "winterlood"];
// 기본 구분자는 ,이지만 매개변수에 원하는 구분자를 추가할 수 있다.
const joined = arr6.join();
