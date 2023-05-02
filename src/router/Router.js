import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "../components/AdminPanel";
import Main from "../components/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="adminpanel" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
