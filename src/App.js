import React from "react";
import "./AmaniaUser/assets/css/main.css";
import "./index.css";
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
import UserForgotPassword from "./AmaniaUser/Login/UserForgotPassword";
import Home from "./AmaniaUser/Home";
import Cart from "./AmaniaUser/Cart";
import ContactUs from "./AmaniaUser/ContactUs";
import Checkout from "./AmaniaUser/Checkout";
import MyProfile from "./AmaniaUser/MyProfile";
import MySavedAddress from "./AmaniaUser/MySavedAddress";
import MyOrders from "./AmaniaUser/MyOrders";
import Settings from "./AmaniaUser/Settings";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/User/Login" element={<LoginUser />} />
          <Route path="/User/ForgotPassword" element={<UserForgotPassword />} />
          <Route path="/User/Home" element={<Home />} />
          <Route path="/User/Home/About-us" element={<AboutUs />} />
          <Route path="/User/Home/Cart" element={<Cart />} />
          <Route path="/User/Home/Contact-us" element={<ContactUs />} />
          <Route path="/User/Home/Checkout" element={<Checkout />} />
          <Route path="/User/Home/My-profile" element={<MyProfile />} />
          <Route
            path="/User/Home/My-saved-address"
            element={<MySavedAddress />}
          />
          <Route path="/User/Home/My-orders" element={<MyOrders />} />
          <Route path="/User/Home/Settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
