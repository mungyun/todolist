import React, { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./Todoitem.css";

interface TodoItemProps {
  item: {
    id: number;
    isDone: boolean;
    content: string;
    date: number;
  };
}

const Todoitem: React.FC<TodoItemProps> = ({ item }) => {
  const context = useContext(TodoDispatchContext);

  if (!context) {
    throw new Error(
      "TodoDispatchContext must be used within a TodoDispatchContext.Provider"
    );
  }

  const { onUpdate, onDelete } = context;

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
};

// Props 비교 함수 정의
const areEqual = (prevProps: TodoItemProps, nextProps: TodoItemProps) => {
  return (
    prevProps.item.id === nextProps.item.id &&
    prevProps.item.isDone === nextProps.item.isDone &&
    prevProps.item.content === nextProps.item.content &&
    prevProps.item.date === nextProps.item.date
  );
};

export default memo(Todoitem, areEqual);
