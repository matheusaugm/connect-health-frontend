import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import "moment/locale/pt-br";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainMenu from "./pages/MainMenu";
import Settings from "./pages/Settings";
import Register from "@/pages/Register";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" key="home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={
            <LocalizationProvider
              dateAdapter={AdapterMoment}
              adapterLocale="pt-br"
            >
              <Register />
            </LocalizationProvider>
          }
        />
        <Route path="/home" element={<MainMenu />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
