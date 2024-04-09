// 배열 변형 메소드
// 1. filter
// 기존 베열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name: "김수연", hobby: "배드민턴"},
    {name: "김수연1", hobby: "배드민턴"},
    {name: "김수연2", hobby: "테니스"},
];

const badPeople = arr1.filter((item) => (item.hobby === "배드민턴"));
console.log(badPeople); // (2) [{name: "김수연", hobby: "배드민턴"}, {name: "김수연1", hobby: "배드민턴"}]

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행학고 그 결과값을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapReuslt1 = arr2.map((item, idx, arr) => {
    return item * 2;
});
console.log(mapReuslt1); //  (3) [2, 4, 6]

// arr1에서 name값만으로 새로운 배열 생성
let names = arr1.map((item) => item.name);
console.log(names); // (3) ['김수연', '김수연1', '김수연2']

//  3. sort
// 배열을 사전 순으로 정리하는 메서드, 원본 배열 변경
// 숫자의 대소비교로 정리하지 않기 때문에 문자열일 때는 콜백함수 없어도 괜찮지만, 아니라면 콜백함수 있어야한다.
let arr3 = ['w', 'x', 'h'];
arr3.sort();
console.log(arr3); // (3) ['h', 'w', 'x']

let arrr3 = [3, 5, 10];
arrr3.sort();
console.log(arrr3); // (3) [10, 3, 5]
// 오름차순
arrr3.sort((a, b) => {
    if(a > b){
        // b가 a 앞에 와라
        return 1; // -> b, a
    }
    else if(a < b) {
        // a가  b 앞에 와라
        return -1; // -> a, b
    }
    else {
        // 두 값의 자리를 바꾸지 마라
        return 0; // a, b 자리를 그대로 유지
    }
});
console.log(arrr3); // (3) [3, 5, 10]
// 내림차순
arrr3.sort((a, b) => {
    if(a > b){
        // a가 b 앞에 와라
        return -1; // -> a, b
    }
    else if(a < b) {
        // b가  a 앞에 와라
        return 1; // -> b, a
    }
    else {
        // 두 값의 자리를 바꾸지 마라
        return 0; // a, b 자리를 그대로 유지
    }
});
console.log(arrr3); // (3) [10, 5, 3]

// 4. toSorted (가장 최근에 추가됨)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5); // (3) ['c', 'a', 'b']
console.log(sorted); // (3) ['a', 'b', 'c']

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "suyeon"];
const joined = arr6.join();

console.log(joined); // hi,im,suyeon