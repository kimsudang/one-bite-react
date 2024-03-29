// 자바스크립트는 변수에 함수를 담을 수 있다
function funA() {
    // console.log("funA");
}

let varA = funA;
varA();

// 변수에 함수를 담은 경우, 함수 이름으로 호출 불가능
// -> 함수 이름 생략 가능 = 익명 함수
// 함수 표현식으로 만든 경우 호이스팅 안됨
let varB = function () { 
    // console.log("funB");
};

// 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1
};

console.log(varC());