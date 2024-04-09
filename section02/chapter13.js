// Promise: 비동기 작업을 효율적으로 처리할 수 있게 도와주는 자바스크립트 내장 객체
// 비동기 작업을 감싸는 객체
/* 
Promise의 3가지 상태
1. 대기(Pending): 아직 작업이 완료되지 않은 상태
2. 성공(Fulfilled): 비동기 작업이 성공적으로 마무리 된 상태
3. 실패(Rejected): 비동기 작업이 실패한 상태
대기 -> 성공 = 해결(resolve)
대기 -> 실패 = 거부(reject)
*/

function add10(num){
    const promise = new Promise((resolve, reject) => {
        // 인수로는 비동기 작업을 진행하는 콜백 함수 가짐
        // 비동기 작업을 직접 실행하는 함수
        // executor
    
        setTimeout(() => {
            // 비동기 작업을 성공 상태로 바꾸는 함수
            // resolve("안녕"); 
            // Promise {[[PromiseState]]: 'fulfilled', [[PromiseResult]]: '안녕'}
            
            // 비동기 작업을 실패 상태로 바꾸는 함수
            // reject("실패한 이유");
            // Promise {[[PromiseState]]: 'rejected', [[PromiseResult]]: '실패한 이유'}
            
            if(typeof num === "number") {
                resolve(num + 10);
                // Promise {[[PromiseState]]: 'fulfilled', [[PromiseResult]]: 20}
            }else {
                reject("num이 숫자가 아닙니다.");
            }
        }, 2000)
    });

    return promise;
}

add10(0).then((result) => {
    console.log(result);
    return add10(result);
}).then((result) => {
    console.log(result);
    return add10(result);
}).then((result) => {
    console.log(result);
    return add10(result);
}).catch((error) => {
    console.log(error);
});


// // then 메서드
// // -> 그 후에
// // promise의 비동기 작업의 결과값을 활용할 수 있다.
// // 비동기 작업이 성공한 경우만 사용
// promise.then((value) => {
//     console.log(value);
// });

// // catch 메서드
// // 비동기 작업이 실패한 경우 사용하는 then 메서드
// promise.catch((error) => {
//     console.log(error)
// });

// // promise  체이닝
// promise
//     .then((value) => {
//         console.log(value);
//     }).catch((error) => {
//         console.log(error)
//     });