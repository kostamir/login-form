import "./App.css";
import LoginPage from "./components/LoginPage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <LoginPage />
      </div>
    </ThemeProvider>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#e5f0ff",
      main: "#016FFF",
      dark: "#004db2",
    },
  },
  typography: {
    fontFamily: "Roboto, system-ui, sans-serif",
  },
});
