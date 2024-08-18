import { TodoDispatchContext } from "../App";
import "./Todoitem.css";
import { memo, useContext } from "react";

function Todoitem({ item }) {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(item.id);
  };

  const deleteClick = () => {
    onDelete(item.id);
  };
  return (
    <div className="Todoitem">
      <input
        onChange={onChangeCheckbox}
        checked={item.isDone}
        type="checkbox"
      />
      <div className="content">{item.content}</div>
      <div className="date">{new Date(item.date).toLocaleDateString()}</div>
      <button onClick={deleteClick}>삭제</button>
    </div>
  );
}
// export default memo(Todoitem, (prevProps, nextProps) => {
//   //반환값에 따라, Props가 바뀌었는지 안 바뀌었는지 판단
//   //T -> Props가 바뀌지 않음 -> 리렌더링 x
//   //F -> Props가 바뀜 -> 리렌더링 o

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

export default memo(Todoitem);
