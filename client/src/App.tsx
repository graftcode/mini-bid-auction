import React, { Context, useState } from "react";

import Auth from "./Pages/Auth/Auth";
import "./App.css";
import { AuthContext } from "./Contexts/AuthContext";

function App() {
  const [authToken, setAuthToken] = useState(null);
  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      <div className="App">
        <h1>APP COMponent</h1>
        <Auth />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
