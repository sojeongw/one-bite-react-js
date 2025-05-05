// 1. 묵시적 형 변환
// 자바스크립트 엔진이 알아서 형 변환 하는 것
let num = 10;
let str = "20";

const result = num + str;

// 2. 명시적 형 변환
// 내장 함수 등을 이용해서 직접 형 변환을 명시하는 것
let str1 = "10";
let strToNum1 = Number(str1);

// 문자로 시작하는 경우는 잘 안될 수 있음
let str2 = "10개";
let strToNum2 = parseInt(str2);

let num1 = 20;
let numToStr1 = String(num1);
