// // 비동기 작업을 하는 함수의 결과값을 함수 외부에서 사용하고 싶으면 콜백함수를 사용해서 밖에서 호출
// function add(a, b, callback){
//     setTimeout(() => {
//         const sum = a+ b;
//         callback(sum)
//     }, 3000);
// }

// add(1, 2, (value) => {
//     console.log(value);
// });

// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(() => {
        const food = "쪽파크림치즈베이글";
        callback(food);
    }, 3000)
}

function cooldownFood(food, callback){
    setTimeout(() => {
        const cooldownFood = `식은 ${food}`;
        callback(cooldownFood);
    }, 2000)
}

function freezeFood(food, callback){
    setTimeout(() => {
        const freezeFood = `냉동된 ${food}`;
        callback(freezeFood);
    }, 1500);
}

orderFood((food) => {
    console.log(food)

    cooldownFood(food, (cooldownFood) => {
        console.log(cooldownFood);

        freezeFood(food, (freezeFood) => {
            console.log(freezeFood);
        });
        
    });

});