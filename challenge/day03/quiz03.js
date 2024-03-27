/* 
Quiz 3. 계산기 만들기

콜백함수를 이용하여 다음 요구사항을 만족하는 코드를 작성하세요

두 수를 덧셈하는 함수 add, 뺄셈하는 함수 sub를 각각 구현하세요

2개의 매개변수 num1, num2를 제공받습니다.
연산의 결과를 반환합니다.
다음 조건을 만족하는 함수 calc를 구현하세요

3개의 매개변수 num1, num2, callback을 제공받습니다.

num1, num2 : 연산에 활용될 숫자
callback : 실제로 연산을 수행할 함수
callback 함수로 전달된 연산의 결과값을 콘솔에 출력하세요

// 출력 결과 :
// 8
// 2
*/

// 제시 코드
function add(num1, num2) {
    // 작성 코드
    console.log(num1 + num2);
}

function subtract(num1, num2) {
    // 작성 코드
    console.log(num1 - num2);
}

function calculate(num1, num2, operation) {
    // 작성 코드
    operation(num1, num2);
}

calculate(5, 3, add);
calculate(5, 3, subtract);


