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
import Exams from "@/pages/Exams";
import PrivateRoute from "@/components/PrivateRoute";
import MedicalAppointment from "@/pages/MedicalAppointment";
import MedicalAppointments from "@/pages/MedicalAppointment";

// Set the locale globally for dayjs
dayjs.locale("pt-br");

const Routers = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <BrowserRouter>
        <Routes>
          <Route path="/" key="home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <MainMenu />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit_profile"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/report_an_issue"
            element={
              <PrivateRoute>
                <ReportAnIssue />
              </PrivateRoute>
            }
          />
          <Route
            path="/change_password"
            element={
              <PrivateRoute>
                <ChangePassword />
              </PrivateRoute>
            }
          />
          <Route
            path="/register_exam"
            element={
              <PrivateRoute>
                <RegisterExam />
              </PrivateRoute>
            }
          />
          <Route
            path="/exams"
            element={
              <PrivateRoute>
                <Exams />
              </PrivateRoute>
            }
          />
          <Route path="/appointments" element={<MedicalAppointments />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
};

export default Routers;
