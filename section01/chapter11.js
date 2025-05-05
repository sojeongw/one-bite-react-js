// 함수 선언
function greeting() {
  console.log("안녕하세요!");
}

// 함수 호출
greeting();

function getArea(width, height) {
  // 중첩 함수
  function another() {
    console.log("another");
  }
  another();
  let area = width * height;
  return area;
}

let area = getArea(10, 20);

// 호이스팅 = 끌어올리다.
// 함수가 아래에 선언되어 있어도 최상단으로 끌어올려서 실행시킨다.
