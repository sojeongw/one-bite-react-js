import "./Main.css";

// jsx 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. 값으로 평가될 수 없는 if, for 등은 사용할 수 없다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. boolean, undefined, null은 렌더링 되지 않는다. 객체를 그대로 추가해도 안된다. 점 표기법으로 문자나 숫자를 반환하도록 해야 한다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야 한다. return 소괄호 안에 있는 태그. 필요하다면 빈 태그로 묶으면 된다.
const Main = () => {
    const user = {
        name : "이정환",
        isLogin : true
    }
    if(user.isLogin) {
        return <div className="logout">로그아웃</div>
    } else {
        return <div>로그인</div>
    }
    // return <>
    // {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    // </>
};

export default Main;