// 6가지 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6); // 6

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop(); // [1, 2]

// shift, unshift는 push, pop보다 느리게 작동

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift(); // [2, 3]

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(4); // (4) [4, 3, 2, 1]

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라서 새로운 배열로 반환
// 원본 배열의 값은 변경되지 않음
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // [3, 4, 5]
let sliced2 = arr5.slice(2);
let sliced3 = arr.slice(-2);

// 6. concat
// 두 개의 가른 배열을 이어 붙여 새로운 배열로 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7); // [1, 2, 3, 4]