// 1. 콜백 함수
// 콜백 함수(Callback Function): 자신이 아닌 다른 함수에 인수로써 전달된 함수
// 메인 함수가 원할 때 실행 가능
function main(value) {
    console.log("1");
    value();
}

main(() => {
    // console.log("i an sub");
});
// 함수도 하나의 값으로 취급할 수 있기 때문에 인수로 사용할 수 있다.


// 2. 콜백 함수의 활용
// 매개변수의 값에 함수도 들어가도 되니까 callback 함수 넣어줌
function repeat(count, callback) {
    for(let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat (5, function(idx) {
    console.log(idx);
});

repeat (5, (idx) => {
    console.log(idx * 2);
});

repeat (5, (idx) => {
    console.log(idx * 3);
});