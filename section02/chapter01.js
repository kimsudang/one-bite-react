// Truthy & Falsy : 참/거짓으로 나눌 수 없는 값도 참/거짓처럼 표현
// Truthy: 참 같은 값
// Falsy: 거짓 같은 값

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // BigInt


// 2. Truthy 한 값
// -> 7가지 Falsy 한 값을 제외한 나머지 모든 값
let t1 = "dd";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
// 객체를 받는 함수의 경우, 객체에 값이 없어 undefined인 경우도 있으므로 조건문 
function printName(person) {
    // person의 값이 falsy 한 값이라면 아래 조건문이 거짓으로 평가, ! 사용으로 조건문은 참이 된다.
    // 따라서 아래 if문은 falsy 한 값인 경우 동작
    if(!person){
        console.log("person 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = null;
printName(person);
