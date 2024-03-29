/*
for (초기값; 조건식; 증감식) {
    코드
}
*/

for (let idx = 0; idx < 5; idx++) {
    if (idx % 2 === 0) {
        continue;
        // 아래 코드 넘어가고 다음 반복문으로 진행
    }

    console.log("반복!");
    console.log(idx);
}