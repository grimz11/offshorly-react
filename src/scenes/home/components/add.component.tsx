import { LoadingButton } from "@mui/lab";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export const AddTodo: React.FC<any> = () => {
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
        />
        <LoadingButton
          variant="contained"
          color="primary"
          sx={{ mt: 1 }}
          fullWidth
        >
          Add
        </LoadingButton>
      </Box>
    </Stack>
  );
};
