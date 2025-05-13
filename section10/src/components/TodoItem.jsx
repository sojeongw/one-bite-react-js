import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        readOnly
        onChange={onChangeCheckbox}
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// 함수 props를 전달할 때마다 객체를 새로 생성하고, 주소가 달라져서 업데이트라고 생각하고 계속 리렌더링 한다.
export default memo(TodoItem);

// 콜백 함수를 전달하면 부모 컴포넌트가 리렌더링 될 때마다 매개변수로 받는 과거와 현재 props를 비교해서 바뀌었는지 판단한다. true를 반환하면 바뀌지 않았다고 판단하고 리렌더링 하지 않는다.
// memo 같은 컴포넌트는 고차 컴포넌트, HOC라고 부른다.
// export default memo(TodoItem, (prevProps, nextProps) => {
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   return true;
// });
