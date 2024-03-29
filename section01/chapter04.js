// 1. 변수
let age = 27;
// let은 블록 단위로 사용되기 때문에 재선언이 불가
// let age = 30; (X)
age = 30;

// 2. 변수
const birth = "2001.12.21";

// 3. 변수 명명 규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.

// 4. 변수 명명 가이드
// 의미가 있는 변수명으로 지어야 한다.
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;