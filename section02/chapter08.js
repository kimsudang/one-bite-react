// 5가지 요소 순회 및 탐색 메서드
// 1. foreach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr){
    console.log(idx, item); // 0 1 \n 1 2 \n 2 3
});

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

console.log(doubledArr); // [2, 4, 6]

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isIncludes = arr2.includes(10); // false
let isIncludes1 = arr2.includes(2); // true

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 3, 2, 3, 4 ,3];
let index = arr3.indexOf(20); // 존재하지 않는 값의 인덱스를 찾으라고 함 = -1
let index2 = arr3.indexOf(3); // indexOf는 괄호 안의 값이 존재하기 때문에 해당하는 (가장 처음)위치의 인덱스 반환 = 1

// indexOf만 있으면 된거지 왜 findIndex도 있냐?
let objectArr = [
    {name: "김수연"},
    {name: "집갈래"},
];

// indexOf는 얕은 복사라서 참조값 기반으로 비교. 따라서 아래 콘솔을 출력하면 -1 반환
console.log(objectArr.indexOf({name: "김수연"})); // -1
// findIndex는 콜백함수 이용, 직접 프로퍼티 비교
console.log(objectArr.findIndex((item) => item.name === "김수연")); // 0


// 4. findIndex
// 모든 요소를 순회하면서, 콜백 함수를 만족하는 그런 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item % 2 !== 0); // 배열의 0번째 인덱스 값인 1이 해당함 => return 0
const findedIndex1 = arr4.findIndex((item) => item % 2 === 1000); // 배열에서 해당하는 값이 없음 => return -1

// 5. find
// 모든 요소를 순회하면서 콜백 함수를 만족하는 요소를 찾는데, 요소를 그대로 반환 (인덱스 아님)
let objectArr1 = [
    {name: "김수연"},
    {name: "집갈랭"},
];

const finded = arr5.find((item) => item.name === "집갈랭"); // {name: 집갈랭}
