import React from "react";
import "./AmaniaUser/assets/css/main.css";
import "./index.css"
// import "./AmaniaAdmin/assets/css/style.css";
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
import ProductManagemnet from "./AmaniaAdmin/Dashboard/ProductManage/ProductManagement";
import ContentManagement from "./AmaniaAdmin/Dashboard/ContentManage/ContentManagement";
import UserManagement from "./AmaniaAdmin/Dashboard/UserManage/UserManagement";
import TransactionManagement from "./AmaniaAdmin/Dashboard/TransactionManage/TransactionManagement";
import UserSupport from "./AmaniaAdmin/Dashboard/Help&Support/UserSupport";
import TutorialManagment from "./AmaniaAdmin/Dashboard/TutorialManage/TutorialManagment";
import UserForgotPassword from "./AmaniaUser/Login/UserForgotPassword";
import Home from "./AmaniaUser/Home";
import Cart from "./AmaniaUser/Cart";
import ContactUs from "./AmaniaUser/ContactUs";
import Checkout from "./AmaniaUser/Checkout";
import MyProfile from "./AmaniaUser/MyProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Admin/Login" element={<LoginAdmin />} />
          <Route path="*" element={<LoginAdmin />} />
          <Route path="/Admin/Forgot-password" element={<ForgotPassword/>} />
          <Route path="/Admin/OTP-verify" element={<Verification/>} />
          <Route path="/Admin/Reset-password" element={<ResetPassword/>} />
          <Route path="/Admin/Language-select" element={<LanguageSelection />} />
          <Route path="/Admin/Dashboard" element={<Dashboard/>} />
          <Route path="/Admin/Dashboard/Product-Management" element={<ProductManagemnet/>} />
          <Route path="/Admin/Dashboard/Content-Management" element={<ContentManagement/>} />
          <Route path="/Admin/Dashboard/User-Management" element={<UserManagement/>} />
          <Route path="/Admin/Dashboard/Transaction-Management" element={<TransactionManagement/>} />
          <Route path="/Admin/Dashboard/Tutorial-Management" element={<TutorialManagment/>} />
          <Route path="/Admin/Dashboard/User-support" element={<UserSupport/>} />
          <Route path="/User/Login" element={<LoginUser />} />
          <Route path="/User/ForgotPassword" element={<UserForgotPassword/>} />
          <Route path="/User/Home" element={<Home />} />
          <Route path="/User/Home/About-us" element={<AboutUs/>} />
          <Route path="/User/Home/Cart" element={<Cart/>} />
          <Route path="/User/Home/Contact-us" element={<ContactUs/>} />
          <Route path="/User/Home/Checkout" element={<Checkout/>} />
          <Route path="/User/Home/My-profile" element={<MyProfile/>} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
