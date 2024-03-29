/*
연산자(Operator): 프로그래밍에서 다양한 연산을 위한 기호, 키워드
*/

// 1. 대입 연산자 (=)
let var1 = 1;

// 2. 산술 연산자 (우선 순위는 수학과 동일)
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10; //30

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 4. 증감 연산자
let num8 = 10;
// 후위 연산
num8++;
num8--;
// 전위 연산
++num8;
--num8;

// 5. 논리 연산자
let or = true || false; // true
let and = true && false; // false
let not = !true; // false

// 6. 비교 연산자
let comp1 = 1 === 2; // false
let comp2 = 1 !== 2; // true

let comp3 = 2 > 1; // true
let comp4 = 2 < 1; // false

let comp5 = 2 >= 2; // true
let comp6 = 2 <= 2; // true 