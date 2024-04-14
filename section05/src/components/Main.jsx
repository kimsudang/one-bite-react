// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 자바스크립트 표현식 = 한 줄의 코드가 특정한 값이 되는 식
// for문, if문 같이 여러 문장이 필요한 코드는 자바스크립트의 표현식이 아니다.
// 2. 숫자, 문자열, 배열만 렌더링 된다. (불린, null, undefiend는 렌더링 안됨)
// Object는 오류로 나오는데 점표기법으로 값을 불러오면 사용 가능
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.
// 딱히 최상위 태그를 설정하지 않아도 된다면 <></>이렇게 비워도 괜찮다.
import "./Main.css";

const Main = () => {
    const user = {
        name: "김수연",
        isLogin: true,
    };

    if(user.isLogin){
        return <div className="logout">Logout</div>
    } else {
        return <div>Login</div>
    }

    // return (
    //     <>
    //         {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    //     </>
    // );
};

export default Main;