// 1. Spread 연산자 [...n]
// -> 흩뿌리다, 펼치다 라는 의미
// -> 객체나 배열에 저장된 값들을 개별로 뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
    a: 1,
    b: 2,
}

let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
}

// console.log(obj2); {a: 1, b: 2, c: 3, d: 4}

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1); // 1 2 3

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

// rest 매개변수는 매개변수 중 가장 마지막에 위치
function funcB(one, ...rest) { // 매개변수 위치에 사용된 ...임으로 Rest 매개변수다.
    console.log(one); // 1
    console.log(rest); // [2, 3]
}

funcB(...arr1);