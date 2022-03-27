import * as React from "react";
import { LoadingButton } from "@mui/lab";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useStore } from "@stores/initializer.store";

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
    <Stack>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Enter todo..."
          variant="outlined"
          rows={8}
          multiline
          fullWidth
          sx={{ bgcolor: "background.paper" }}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <LoadingButton
          variant="contained"
          color="primary"
          sx={{ mt: 1 }}
          fullWidth
          onClick={handleBtnClick}
          loading={addTodo.isLoading}
        >
          Add
        </LoadingButton>
      </Box>
    </Stack>
  );
};
