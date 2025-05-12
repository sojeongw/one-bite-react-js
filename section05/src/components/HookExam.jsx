import useInput from "./../hooks/useInput";

// 함수 컴포턴트, 커스텀 훅 내부에서만 호출 가능하다.
// 조건문, 반복문에서 호출될 수는 없다.
// 커스텀 훅을 직접 만들 수 있다.


const HookExam = () => {
    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    return <div>
        <input value ={input} onChange={onChange}/>{input}
        <input value ={input2} onChange={onChange2}/>{input2}
    </div>
};

export default HookExam;