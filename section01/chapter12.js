// 1. 함수 표현식
// 값으로 함수를 표현하는 것
// 호이스팅이 되지 않는다.
function funcA() {
  console.log("funcA");
}

// 함수 자체를 할당
let varA = funcA;
varA();

// 변수에 할당하는 건 선언식이 아니기 때문에 funcB()로 호출할 수 없다.
let varB = function funcB() {
  // 익명 함수
  console.log("funcB");
};

// 2. 화살표 함수
// 빠르고 간결하게 함수를 생성할 수 있다.
let varC = () => {
  return 1;
};

// 단순 반환할 때는 이렇게도 가능하다.
let varD = () => 1;
let varE = (value) => value + 1;
varE(10);

// 단순 호출이 아닌 로직을 작성하고 싶다면 중괄호를 이용한다.
let varF = (value) => {
  console.log(value);
  return value + 1;
};
