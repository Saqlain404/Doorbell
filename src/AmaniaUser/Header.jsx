import { Dropdown, Space, message } from "antd";
import React from "react";
// import type { MenuProps } from "antd";

import { Link, useNavigate } from "react-router-dom";
import LoginUser from "./Login/LoginUser";
import RegisterUser from "./Login/RegisterUser";
import ResetPassword from "./Login/ResetPassword";
import UserForgotPassword from "./Login/UserForgotPassword";
import Verification from "./Login/Verification";
import SidebarCart from "./SidebarCart";

const Header = () => {
  const navigate = useNavigate();

  const OnClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("token-user");
    window.location.reload();
  };
  const onClick = ({ key }) => {
    navigate(`/User/Home/${key}`);
  };
  const items = [
    {
      label: "SignUp",
      key: "1",
    },
    {
      label: "My Profile",
      key: "My-profile",
    },
    {
      label: "Orders",
      key: "My-orders",
    },
    {
      label: "My Address",
      key: "My-saved-address",
    },
    {
      label: "Settings",
      key: "Settings",
    },
  ];
  

  return (
    <>
      <div
        className="modal fade login_modal_main"
        id="logout"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0">
            <div className="modal-body border-0">
              <div className="login_modal">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <h2 className="mb-3">Logout</h2>
                <p>
                  After logging out of your account you will be not able to
                  access.
                </p>
                <div className="pt-2">
                  <a
                    className="comman_btn shadow mb-3"
                    data-bs-dismiss="modal"
                    type="submit"
                    onClick={OnClick}
                  >
                    <span>Confirm</span>
                  </a>
                  <a className="forgot_password w-100" data-bs-dismiss="modal">
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed-top mb-4">
        <div className="top_header">
          <div className="container d-flex align-items-center">
            <marquee behavior="" direction="">
              Amania provides a series of service capabilities to help brands
              quickly complete the product intelligent、sales intelligent and
              service intelligent.
            </marquee>
          </div>
        </div>
        <header className="header_main shadow bg-white ">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-4 col-2">
                <div className="Header_menuss text-start">
                  <a
                    className="canvas_toggle"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample1"
                    role="button"
                    aria-controls="offcanvasExample1"
                  >
                    <i className="fa fa-bars" />
                  </a>
                  <div
                    className="offcanvas offcanvas-start menuss_canvas"
                    tabIndex={-1}
                    id="offcanvasExample1"
                    aria-labelledby="offcanvasExample1Label"
                  >
                    <div className="offcanvas-header border-bottom">
                      <h5
                        className="offcanvas-title"
                        id="offcanvasExampleLabel"
                      >
                        <img src="/img/logo.png" alt="" />
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                    <div className="offcanvas-body px-0 pt-0">
                      <div className="offcanvas-menus">
                        <Link
                          to={"/User/Home"}
                          className="text-decoration-none"
                        >
                          Home
                        </Link>
                        <Link
                          to={"/User/Home/About-us"}
                          className="text-decoration-none"
                        >
                          About Us
                        </Link>
                        <Link
                          to={"/User/Home/Cart"}
                          className="text-decoration-none"
                        >
                          Cart
                        </Link>
                        <Link
                          to={"/User/Home/Contact-us"}
                          className="text-decoration-none"
                        >
                          Contact Us
                        </Link>
                        <Link
                          data-bs-toggle="modal"
                          data-bs-target="#logout"
                          className="text-decoration-none"
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-8 text-center px-0">
                <div className="header_logo">
                  <a href="index.html">
                    <img src="/img/logo.png" alt="LOGO" />
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-2">
                <div className="Heder_iconss">
                  {/* <Link >
                    <a className="comman_btn shadow" onClick={OnClick}>
                      <span>Logout</span>
                    </a>
                    </Link> */}
                  <Dropdown menu={{ items, onClick }}>
                    {/* <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Hover me, Click menu item
                        <DownOutlined />
                      </Space>
                    </a> */}
                    <a
                      onClick={(e) => e.preventDefault()}
                      data-bs-toggle="modal"
                      data-bs-target="#login"
                      className="iconn_same"
                      id="modal_click"
                    >
                      <Space>
                        <i className="fa-regular fa-user" />
                      </Space>
                    </a>
                  </Dropdown>

                  <a
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                    className="iconn_same d-md-block d-none"
                  >
                    <i className="fa fa-cart-shopping" />
                  </a>
                  <Link to={"/User/Home/My-profile"}>
                    <a className="language_sectin">
                      <img src="/img/saudi_flag1.png" alt="" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <SidebarCart />
        </header>
      </div>
      <LoginUser/>
      <UserForgotPassword/>
      <Verification />
      <ResetPassword />
      <RegisterUser/>
    </>
  );
};

export default Header;
