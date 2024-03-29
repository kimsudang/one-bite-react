// 1. if 조건문 ( if ~~ else )
let num = 4;

if (num >= 10) {
    // console.log("num은 10 이상이다.");
    // console.log("조건이 참이다.");
}
else if (num >= 3) {
    // console.log("num은 4 이상이다.");
    // console.log("조건이 참이다.");
}
else {
    // console.log("조건에 만족하지 않는다.");
}

// 2. Switch 문
// -> if문과 기능은 동일
// -> 다수의 조건을 처리할 때 if보다 직관적이다.
let animal = "cat";

switch (animal) {
    case "cat" : {
        console.log("야옹");
        break;
    }
    case "dog" : {
        console.log("멍멍");
        break;
    }
    case "bear" : {
        console.log("크헝");
        break;
    }
    case "tiger" : {
        console.log("어흥");
        break;
    }
    case "snake" : {
        console.log("쉬익");
        break;
    }
    default : {
        console.log("제가 모르는 동물입니다.");
    }
}