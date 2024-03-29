/* 
형 변환(Type Casting): 어떤 값의 타입을 다른 타입으로 변경하는 것
- 묵시적 형 변환: 자바스크립트 엔진이 알아서 형 변환
- 명시적 형 변환: 개발자가 직접 내장합수 등을 통해 형 변환
*/

// 1. 묵시적 형 변환
let num = 10;
let str = "20";

const result = num + str;

// 2. 명시적 형 변환
let str1 = "10";
// Number() 숫자만
let strToNum1 = Number(str1);

let str2 = "10개";
// parseInt() 숫자값이 아닌 값도 형 변환 가능, 숫자가 앞에 있는게 좋다.
let strToNum2 = parseInt(str2);

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + " 입니다.");