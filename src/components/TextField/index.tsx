import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React from "react";

interface IProps {
  text: string;
  setText: (text: string) => void;
  onClick?: () => void;
  loading: boolean;
  isEdit?: boolean;
  id?: number;
}

export const TextFieldCustom: React.FC<IProps> = (props) => {
  const { loading, setText, onClick, text, isEdit, id } = props;

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
          rows={!isEdit ? 8 : 1}
          multiline={!isEdit}
          fullWidth
          sx={{ bgcolor: "background.paper" }}
          onChange={(e: any) => setText(e.target.value)}
          value={text}
          key={id}
        />
        {!isEdit && (
          <LoadingButton
            variant="contained"
            color="primary"
            sx={{ mt: 1 }}
            fullWidth
            onClick={onClick}
            loading={loading}
          >
            Add
          </LoadingButton>
        )}
      </Box>
    </Stack>
  );
};
