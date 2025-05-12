import './App.css';
import Register from "./components/Register";
import HookExam from "./components/HookExam";

// 리렌더링 조건: 자신이 관리하는 state, props가 변경되었을때, 부모 컴포넌트가 리렌더링 될때 -> state를 컴포넌트별로 분리해준다.
function App() {

  return (
<>
{/* <Register/> */}
<HookExam/>
</>
  )
}

export default App
