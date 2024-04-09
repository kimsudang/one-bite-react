// 구조 분해 할당: 객체나 배열의 값들을 각각 다른 변수로 분리하는 과정
// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one, two); // 1, 2

// 2. 객체의 구조 분해 할당
let person = {
    name: "김수연",
    age: 24,
    hobby: "노래 듣기",
}
let {name, age, hobby} = person;
console.log(name, age, hobby);

let  = {
    name,
    age: myAge,
    hobby,
    extra = "hi",
}= person;

console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용햇 함수의 매개변수를 받는 방법
// 객체의 구조 분해 할당은 중괄호 이용
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra)
};

// 객체를 넘긴 경우에만 사용 가능
func(person);