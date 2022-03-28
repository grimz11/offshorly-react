import * as React from "react";
import { useStore } from "@stores/initializer.store";
import { TextFieldCustom } from "@components/TextField";

export const AddTodo: React.FC<any> = () => {
  const [text, setText] = React.useState("");
  const { addTodo } = useStore();

  const handleBtnClick = () => {
    if (text.length > 0) {
      addTodo.mutateAsync(text);
      setText("");
    }
  };

  return (
    <TextFieldCustom
      loading={addTodo.isLoading}
      onClick={handleBtnClick}
      setText={setText}
      text={text}
    />
  );
};
