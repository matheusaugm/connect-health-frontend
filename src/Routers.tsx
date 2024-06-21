import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainMenu from "./pages/MainMenu";
import Settings from "./pages/Settings";
import Register from "@/pages/Register";
import EditProfile from "@/pages/EditProfile";
import ReportAnIssue from "@/pages/ReportAnIssue";
import ChangePassword from "@/pages/ChangePassword";
import RegisterExam from "@/pages/RegisterExam";

// Set the locale globally for moment
dayjs.locale("pt-br");

const Routers = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <BrowserRouter>
        <Routes>
          <Route path="/" key="home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<MainMenu />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/edit_profile" element={<EditProfile />} />
          <Route path="/report_an_issue" element={<ReportAnIssue />} />
          <Route path="/change_password" element={<ChangePassword />} />
          <Route path="/register_exam" element={<RegisterExam />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
};

export default Routers;
