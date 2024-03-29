// 함수 선언 : 함수를 새롭게 만드는 행위
// function greeting() {
//     console.log("hi");
// }
// console.log("호출 전");
// // 함수 호출
// greeting();
// console.log("호출 후");

// 함수

// 함수에서 인수를 매개변수에 전달
let area2 = getArea(30, 20);
console.log(area2);

getArea(10, 20);

// 호이스팅
// -> 끌어 올리다 라는 뜻, 함수 선언 이전에 함수 호출도 가능
function getArea(width, height) { 
    // let width = 10;
    // let height = 20;
    function another() { // 중첩 함수
        console.log("answer");
    }

    another();

    let area = width * height;

    return area; // 반환값 = 함수의 결과값
}