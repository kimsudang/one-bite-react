/*
Quiz 1. 모든 약수찾기

다음 요구사항을 만족하는 코드를 작성하세요

변수 num의 모든 약수를 다 찾아서 출력하세요
*/

// 제시 코드
let num = 100;

// 작성 코드
let res = [];

for (let i = 0; i <= num; i++) {
  if (num % i === 0) {
    res.push(i);
  }
}

console.log(res);