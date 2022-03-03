import React from "react";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";

import Home from './pages/Home';
import Theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  );
}

export default App;
