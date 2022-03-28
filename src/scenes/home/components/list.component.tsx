import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/system";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import { CircularProgress, TextField, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import { useStore } from "@stores/initializer.store";
import { TextFieldCustom } from "@components/TextField";
import { SkeletonLoader } from "@components/Loader/skeleton.loader";
import { CircularIndeterminate } from "@components/Loader/circular.loader";

export const ListToDo: React.FC<any> = () => {
  const [checked, setChecked] = React.useState([1]);
  const { todos, updateTodoState, deleteTodo, updateTodoText, isLoading } =
    useStore();
  const [edit, setEdit] = React.useState(false);

  const [text, setText] = React.useState("");
  const [currentId, setCurrentId] = React.useState(0);
  const { addTodo } = useStore();

  const handleBtnClick = () => {
    if (text.length > 0) {
      addTodo.mutateAsync(text);
      setText("");
    }
  };

  const handleToggle = (value: number) => () => {
    const newChecked = [...checked];

    setChecked(newChecked);
    updateTodoState.mutateAsync(value);
  };

  const handleEdit = (value: number) => () => {
    setCurrentId(value);
    setEdit(!edit);

    const todo = {
      id: value,
      text: text,
    };
    if (edit && text.length > 0) {
      updateTodoText.mutateAsync(todo);
      setText("");
    }
  };

  if (isLoading) {
    return <SkeletonLoader count={4} height={60} />;
  }

  if (
    updateTodoState.isLoading ||
    addTodo.isLoading ||
    deleteTodo.isLoading ||
    updateTodoText.isLoading
  ) {
    return <CircularIndeterminate />;
  }

  return todos && todos.length > 0 ? (
    <List sx={{ width: "100%", bgcolor: "background.paper", borderRadius: 2 }}>
      {todos?.map((item) => {
        return (
          <ListItem
            key={item.id}
            secondaryAction={
              <>
                <IconButton onClick={handleEdit(item.id)}>
                  {edit && currentId === item.id ? <CheckIcon /> : <EditIcon />}
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTodo.mutateAsync(item.id)}
                >
                  <DeleteIcon color="error" sx={{ cursor: "pointer" }} />
                </IconButton>
              </>
            }
            disablePadding
          >
            <ListItemIcon>
              <Checkbox
                edge="end"
                checked={item.state}
                onClick={handleToggle(item.id)}
                disabled={edit}
              />
            </ListItemIcon>
            {edit && currentId === item.id ? (
              <TextFieldCustom
                loading={addTodo.isLoading}
                setText={setText}
                text={text}
                isEdit={true}
                id={item.id}
              />
            ) : (
              <ListItemText primary={item.text} />
            )}
          </ListItem>
        );
      })}
    </List>
  ) : (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderRadius: 2,
        height: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4">No content</Typography>
    </Box>
  );
};
