import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegistrationForm from "./forms/registrationForm";
import Users from "./users/Users";
import MainPage from "./MainPage";

const YodlrRoutes = ({ usersData }) => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/register" element={<RegistrationForm />} />
        <Route exact path="/users" element={<Users usersData={usersData} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default YodlrRoutes;
