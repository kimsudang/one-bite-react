// math 모듈

// CJM
function add(a, b) {
    return a+b;
}
// module.exports = {
// 변수명과 키값이 같은 경우 키값 생략 가능
//     add,
//     sub,
// };

// EMS
export { add };

export function sub(a, b) {
    return a-b;
}

// EMS의 기본값 default
// 모듈을 대표하는 export
export default function multiply(a, b) {
    return a*b;
}