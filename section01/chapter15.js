// 1. 객체(object) 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 스코프

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name: "김수연", 
    age: 24,
    hobby: "노래 감상",
    job: "none",
    extra: {},
    10: 20,
    "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근(점 표기법, 괄호 표기법 - 동적 이용)
let name = person.name;

let age = person["age2"]; // undefined


let property = "hobby";
let hobby = person[property]; // 노래 감상

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "FE DEV";
person["favorite food"] = "김밥";

// 3.3 프로퍼티를 수정하는 방법
person.job = "home protector";
person["hobby"] = "none";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["hobby"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법
let result1 = "name" in person;
let result2 = "cat" in person;

console.log(person);