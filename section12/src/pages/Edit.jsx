import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(
    () => {
      const currentDiaryItem = data.find(
        (item) => String(item.id) === String(params.id)
      );

      if (!currentDiaryItem) {
        window.alert("존재하지 않는 일기입니다.");
        nav("/", { replace: true });
      }

      setCurDiaryItem(currentDiaryItem);
    },
    params.id,
    data
  );

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다.")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onClickUpdate = (input) => {
    onUpdate(input.id, input.createdDate, input.emotionId, input.content);
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />
        }
      />
      <Editor onSubmit={onClickUpdate} initData={curDiaryItem} />
    </div>
  );
};

export default Edit;
