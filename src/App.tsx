import React from "react";
import Routers from "./Routers";
import { AppProvider } from "./stores/AppStore";
import { UserProvider } from "@/stores/UserStore";
import { ContentProvider } from "@/stores/ContentStore";

function App() {
  return (
    <AppProvider>
      <ContentProvider>
        <UserProvider>
          <Routers />
        </UserProvider>
      </ContentProvider>
    </AppProvider>
  );
}

export default App;
