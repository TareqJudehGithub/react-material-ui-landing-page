import React from 'react';
import Header from "./Components/UI/header";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Components/UI/theme";
function App() {
  return (
    // <div className="App">
    <ThemeProvider theme={theme}>
      <Header />
      Hello from App.js
    </ThemeProvider>
    // </div>
  );
}

export default App;
