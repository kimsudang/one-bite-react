// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 반환해주는 키워드
// 동기 함수를 비동기 함수처럼 사용 => 애초에 promise면 작동하지 않음

async function getData() {
    return {
        name: "김수연",
        id: "sudang",
    };
}

console.log(getData()); // Promise {[[PromiseState]]: 'fulfilled', [[PromiseResult]]: {…}}


// await
// async 함수(async 키워드를 사용한 함수) 내부에서만 사용 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
// then 메서드 사용하지 않아도 됨

async function printData(){
    const data = await getData();
    console.log(data);
}

printData();