/*
Quiz 2. 소수 판별기 (에라토스테네스의 체)

다음 요구사항을 만족하는 isPrimeNumber함수를 완성하세요

함수 isPrimeNumber는 한개의 매개변수 num을 제공받아 소수인지 판별합니다.
num이 소수라면 true를, 아니라면 false를 반환합니다.
특별히 1도 소수로 판정합니다.

// 출력 결과 :
// true
// false
// true
// false
*/

/*
풀이 과정
소수가 뭐가있지? 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, ...
소수의 정의가 뭐지? 1과 자기 자신 외에는 인수를 갖지 않는 수

[에라토스테네스의 체]
1. 2부터 N까지의 모든 자연수를 나열한다
2. 남은 수 중에서 아직 처리하지 않은 가장 작은 수 i를 찾는다
3. 남은 수 중에서 i의 배수를 모두 제거한다(i는 제거하지 않는다)
4. 더 이상 반복할 수 없을 때까지 2번과 3번 과정을 반복한다.
*/

// 제시 코드
function isPrimeNumber(num) {
    // 작성 코드
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));
