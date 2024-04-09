// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자 (현재 시간)
console.log(date1); // Sat Apr 06 2024 16:08:18 GMT+0900 (한국 표준시)

let date2 = new Date("1997/01/07/10:10:10");
console.log(date2); // Tue Jan 07 1997 10:10:10 GMT+0900 (한국 표준시)

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01. 00시 00분 00초"(UTC)로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1); // 1712387472095

let date4 = new Date(ts1);
console.log(date4); // 1712387472095

// 3. 시간 요소들을 추출하는 방법
let years = date1.getFullYear();
let month = date1.getMonth(); // +1 해줘야 현재의 월과 동일
let date = date1.getDate();

let hours = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
    years,
    month, 
    date,
    hours,
    minute,
    seconds
); // 현재 날짜: 2024 04 06 16 14 46, 결과: 2024 3 6 16 14 46 => JS에서 month는 0부터 시작

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(4);
date1.setDate(27);
date1.setHours(1);
date1.setMinutes(30);
date1.setSeconds(0);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // Sat May 27 2023
console.log(date1.toLocaleString()); //2023. 5. 27. 오전 1:30:00