//  1. null 병합 연산자
// 존재하는 값을 추려낸다.
// null, undefined가 아닌 값을 찾아낸다.
let var1;
let var2 = 10;
let var3 = 20;

// va1 = undefined이므로 var2 값인 10을 할당한다.
let var4 = var1 ?? var2;
// 둘 다 undefined가 아니라면 맨 처음 값을 할당한다.
let var5 = var2 ?? var3;

// 2. typeof 연산자
// 값의 타입을 문자열로 반환하는 기능
let var7 = 1;
var7 = hello;
let t1 = typeof var7;

// 3. 삼항 연산자
// 항을 3개 사용하는 연산자
// 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환한다.
let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수";
