// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가한다.
let arr1 = [1, 2, 3];
// 변경된 길이를 반환한다.
const newLength = arr1.push(4, 5, 6);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 반환한다.
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환한다.
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가한다.
let arr4 = [1, 2, 3];
// 변경된 길이를 반환한다.
const newLength2 = arr4.unshift(0);

// 5. slice
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환한다. 원본 배열은 바뀌지 않는다.
let arr5 = [1, 2, 3, 4, 5];
// 두번째 인수는 +1을 해서 전달한다. 끝까지 할거면 생략 가능하다.
let sliced = arr5.slice(2, 5);
// 뒤에서부터 자르고 싶으면 음수를 사용한다.
// 뒤에서부터 하나를 자른다.
let sliced3 = arr5.slice(-1);

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환한다.
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7);
