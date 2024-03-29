// 1. 상수 객체 : 상수에 저장한 객체
const animal = {
    type: "고양이",
    name: "나비",
    coloer: "삼색이",
};

// 객체 자체를 변경할 수는 없지만 프로퍼티는 변경 가능하다.
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.coloer // 삭제


// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person ={
    name: "김수연", 
    // 메서드 선언 = 동작 정의
    sayHi() {
        console.log("안녕");
    },
};

person.sayHi();
person["sayHi"]();