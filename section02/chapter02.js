function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

// 단락 평가: 첫 번째 피연산자만으로 결과를 확정할 수 있다면 다음 피연산자에는 접근조차 하지 않는다.
console.log(returnFalse() && returnTrue());
// 단락 평가가 작동하지 않아 둘 다 실행된다.
console.log(returnTrue() && returnFalse());

// 단락 평가 활용
function printName(person) {
  consname = person && person.name;
  console.log(name || "person의 값이 없음");
}
