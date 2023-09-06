import React from "react";
import "./index.css";
import "./AmaniaAdmin/assets/css/style.css";
import Index from "./AmaniaUser/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css.map";
import AboutUs from "./AmaniaUser/AboutUs";
import LoginUser from "./AmaniaUser/Login/LoginUser";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import ForgotPassword from "./AmaniaAdmin/Login/ForgotPassword";
import LoginAdmin from "./AmaniaAdmin/Login/LoginAdmin";
import LanguageSelection from "./AmaniaAdmin/Dashboard/LanguageSection/LanguageSelection";
import Dashboard from "./AmaniaAdmin/Dashboard/Dashboard";
import Verification from "./AmaniaAdmin/Login/Verification";
import ResetPassword from "./AmaniaAdmin/Login/ResetPassword";
import ProductManagemnet from "./AmaniaAdmin/Dashboard/ProductManage/ProductManagemnet";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/User/Login" element={<LoginUser />} />
          <Route path="/Admin/Login" element={<LoginAdmin />} />
          <Route path="/Admin/Forgot-password" element={<ForgotPassword/>} />
          <Route path="/Admin/OTP-verify" element={<Verification/>} />
          <Route path="/Admin/Reset-password" element={<ResetPassword/>} />
          <Route path="/Admin/Language-select" element={<LanguageSelection />} />
          <Route path="/Admin/Dashboard" element={<Dashboard/>} />
          <Route path="/Admin/Dashboard/Product-Management" element={<ProductManagemnet/>} />
          <Route path="/User/Index" element={<Index />} />
          <Route path="/User/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
