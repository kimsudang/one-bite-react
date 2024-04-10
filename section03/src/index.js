// CJM
// const mouduleData = require("./math");
// 구조 분해 할당 이용 시
// const {add, sub} = require("./math");

// console.log(mouduleData.add(1, 3));
// console.log(mouduleData.sub(6, 1));

// EMS, 확장자 필수
import {add, sub} from "./math.js";
// EMS Default값을 불러오는 경우, 동일한 함수명으로 불러오지 않아도 됨
import mult from "./math.js";
// 동일한 경로라면 아래와 같이 사용하는게 좋다
// import mult, {add, sub} from "./math.js";

// console.log(add(1, 3));
// console.log(sub(5, 2));
// console.log(mult(5, 6));

// console.log("안념");

// 라이브러리에서 가져오는 경우, 라이브러리의 이름만 명시해주면 됨
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);