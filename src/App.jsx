import "./App.css";
import Home from "./components/contextApi/Home";
import ThemeProvider from "./components/contextApi/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
