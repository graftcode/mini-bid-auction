import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom/";

import Auth from "./Pages/Auth/Auth";
import AuctionListings from "./Pages/Listings/AuctionListings";
import "./App.css";
import { AuthContext } from "./Contexts/AuthContext";
import ProtectedRoutes from "./ProtectedRoutes";
import { Layout } from "./Components/Layout/Layout";

function App() {
  const [authToken, setAuthToken] = useState<any>(null);
  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      <div className="App">
        <h1>Mini Bid Auction Platform</h1>
        <Layout>
        <BrowserRouter>
          <Routes>
            <Route index element={<Auth />} />

            <Route element={<ProtectedRoutes authToken={authToken} />}>
              <Route path="/listings" element={<AuctionListings />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </Layout>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
