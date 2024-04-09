// // 단락 평가 (Short-circuit Evaluation): 앞에서 값을 얻을 수 있는 경우 뒤에는 접근하지 않는 자바스크립트의 특징
// // 특정한 조건에 맞춰서 함수의 실행을 조절할 수 있음
// function returnFalse() {
//     console.log("False 함수");
//     return false;
// }

// function returnTrue() {
//     console.log("True 함수");
//     return true;
// }
//  //returnFalse()이 false여서 바로 답이 나옴 =  뒤에는 접근 안함 = 단락평가 사용됨
// console.log(returnFalse() && returnTrue());


// // Truthy, Falsy 한 값으로도 단락 평가 구현 가능
// function returnFalse() {
//     console.log("False 함수");
//     return undefined;
// }

// function returnTrue() {
//     console.log("True 함수");
//     return 10;
// }

// console.log(returnTrue() || returnFalse());

// 단락 평가 활용 사례
function printName(person){
    const name = person && person.printName
    console.log(name || "person의 값이 없음");
}

printName();
printName({name: "김수연"});