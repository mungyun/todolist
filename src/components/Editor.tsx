import React, {
  useState,
  useRef,
  useContext,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import "./Editor.css";
import { TodoDispatchContext } from "../App";

const Editor: React.FC = () => {
  const dispatchContext = useContext(TodoDispatchContext);

  if (!dispatchContext) {
    throw new Error(
      "TodoDispatchContext must be used within a TodoDispatchContext.Provider"
    );
  }

  const { onCreate } = dispatchContext;

  const [content, setContent] = useState<string>("");
  const contentRef = useRef<HTMLInputElement>(null);

  const onChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (!content) {
      if (contentRef.current) {
        contentRef.current.focus();
      }
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        placeholder="새로운 todo..."
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
