import { HomeScene } from "@scenes/home";
import { ThemeProvider, createTheme } from "@mui/material";
import { ThemeUniverse } from "@core/themes";

import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AppDataProvider, queryClient } from "@stores/initializer.store";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppDataProvider>
        <ThemeProvider theme={createTheme(ThemeUniverse.default)}>
          <HomeScene />
        </ThemeProvider>
      </AppDataProvider>
    </QueryClientProvider>
  );
}

export default App;
