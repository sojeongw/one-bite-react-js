// 1. Date 객체 생성
// 매개 변수가 없으면 현재 시간을 출력한다.
let date1 = new Date();
let date2 = new Date("1997-01-07-10:10:10");

// 2. 타임스탬프
// 특정 시간이 1970.01.01. 00-00-00으로부터 몇 ms가 지났는지 의미하는 숫자값
let ts1 = date1.getTime();
let date3 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
// 자바스크립트의 월은 0부터 시작한다.
let month = date1.getMonth() + 1;
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();

// 4. 시간 수정하기
date1.setFullYear(2023);
// 0부터 시작하므로 실제로는 3월이 된다.
date1.setMonth(2);

// 5. 시간을 여러 포맷으로 출력하기
// 날짜만 출력
console.log(date1.toDateString());
// 현지화된 포맷
console.log(date1.toLocaleString());
