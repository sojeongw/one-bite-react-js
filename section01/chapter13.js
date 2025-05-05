// 1. 콜백 함수
// 인수로 전달된 함수
function main(value) {
  value();
}

// 콜백 함수
function sub() {
  console.log("I am sub");
}

main(sub);
main(() => {
  console.log("I am sub");
});

// 2. 콜백 함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx * 2);
});
