// async
// 함수를 비동기 함수로 만들어준다.
// = 함수가 프로미스를 반환하도록 변환한다.
async function getData() {
  return {
    name: "이정환",
    id: "winterlood",
  };
}

// await
// async 함수 내부에서만 사용이 가능하다.
// 비동기 함수가 다 처리되기를 기다리는 역할
async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
