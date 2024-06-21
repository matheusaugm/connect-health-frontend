import React from "react";
import Routers from "./Routers";
import { AppProvider } from "./stores/AppStore";

function App() {
  return (
    <AppProvider>
      <Routers />
    </AppProvider>
  );
}

export default App;
