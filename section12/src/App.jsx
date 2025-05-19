import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import Header from "./components/Header";

// "/": 모든 일를 조회하는 home
// "/new": 새로운 일기를 작성
// "/diary": 일기를 상세히 조회

function App() {
  return (
    // routes 컴포넌트 안에는 route 컴포넌트만 들어갈 수 있다.
    // routes 밖에 있는 컴포넌트는 라우트에 상관없이 모두에게 렌더링된다.
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
      <Button
        text={"123"}
        type={"DEFAULT"}
        onClick={() => {
          console.log("버튼 클릭");
        }}
      />
      <Button
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("버튼 클릭");
        }}
      />
      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("버튼 클릭");
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
