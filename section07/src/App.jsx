import './App.css'
import {useState, useEffect, useRef} from "react";
import Even from "./components/Even";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 1. mount(탄생): 빈 빈 배열을 넘기면 생성될 때 딱 한번만 실행된다. deps에 있는 값이 변경될 때만 실행되기 때문
  useEffect(()=>{}, [])
  // 2. update(변화, 리렌더링): deps를 주지 않으면 마운트 될 떄 한 번 생성된 뒤 업데이트 될 때마다 실행된다.
  useEffect(()=>{})
  const isMount = useRef(false);
  useEffect(()=>{
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
  })

  useEffect(()=>{
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]) // 의존성 배열 = deps

  // 비동기로 동작하기 때문에 함수의 완료는 뒤늦게 되어서 useEffect를 대체할 수 없다. 아직 count 상태가 변경되지 않았다.
  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className='App'>
    <h1>Simple Counter</h1>
    <section>
      <input value={input} onChange={(e) => {setInput(e.target.value)}}/>
      <Viewer count={count}/>
      {count % 2 === 0 ? <Even /> : null}
      </section>
    <section>
      <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
