import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Sidebar = ({ slide, getBarClick, getBar }) => {
    const navigate = useNavigate();
    const [SlideState, setSlideState] = useState("");
    const width = window.innerWidth;
    const [sideBar, setSideBar] = useState(width < 768 ? false : true);
  
    useEffect(() => {
      setSlideState(slide);
    }, []);
  
    let token = localStorage.getItem("token-admin");
    
    if (token === null) {
      Swal.fire({
        title: "PLease Login to Continue!",
        text: "Login Expired!",
        icon: "warning",
        confirmButtonText: "Login",
        confirmButtonColor: "#e25829",
      }).then((res) => {
        navigate("/Admin/Login");
      });
    }
    console.log(width);
  
    const Logout = () => {
      localStorage.removeItem("token-admin");
      navigate("/Admin/Login");
      window.location.reload()
    };
  return (
    <>
    <div className={sideBar ? "siderbar_section" : " d-none"}>
      <div className="siderbar_inner">
      
              <a
                className="sidebar_btn_resp"
                onClick={() => {
                  setSideBar(!sideBar);
                  getBarClick("close");
                }}
              >
                <i class="fa fa-close "></i>
              </a>
          
        <div className="sidebar_logo">
          <a href="javscript:;">
            <img src="/img-admin/logo.png" alt="Logo" />{" "}
          </a>
        </div>
        <div className="sidebar_menus">
          <ul className="list-unstyled ps-1 m-0">
            <li>
            <Link
                    className={SlideState === "Dash" ? "active" : ""}
                    to="/Admin/Dashboard"
                    onClick={() => {
                      setSlideState("Dash");
                      if (width < 768) {
                        setSideBar(!sideBar);
                      }
                    }}
                  >
                    <i className="fas fa-home" />
                    Dashboard
                  </Link>
            </li>
            <li>
            <Link
                    className={SlideState === "UserM" ? "active" : ""}
                    to="/Admin/Dashboard/User-Management"
                    onClick={() => {
                      setSlideState("UserM");
                      if (width < 768) {
                        setSideBar(!sideBar);
                      }
                    }}
                  >
                    <i className="fa fa-user" />
                    User Management
                  </Link>
            </li>
            <li>
            <Link
                    className={SlideState === "ProM" ? "active" : ""}
                    to="/Admin/Dashboard/Product-Management"
                    onClick={() => {
                      setSlideState("ProM");
                      if (width < 768) {
                        setSideBar(!sideBar);
                      }
                    }}
                  >
                     <i className="fa fa-box-open" />
                Product Managemnet
                  </Link>
            </li>
            <li>
            <Link
                    className={SlideState === "UserS" ? "active" : ""}
                    to="/Admin/Dashboard/User-Support"
                    onClick={() => {
                      setSlideState("UserS");
                      if (width < 768) {
                        setSideBar(!sideBar);
                      }
                    }}
                  >
                      <i className="fa fa-hands-heart" />
                User support
                  </Link>
            </li>
            <li>
            <Link
                    className={SlideState === "TransM" ? "active" : ""}
                    to="/Admin/Dashboard/Transaction-Management"
                    onClick={() => {
                      setSlideState("TransM");
                      if (width < 768) {
                        setSideBar(!sideBar);
                      }
                    }}
                  >
                     <i className="far fa-repeat-1" />
                Transaction Management
                  </Link>
            </li>
            <li>
            <Link
                    className={SlideState === "ContentM" ? "active" : ""}
                    to="/Admin/Dashboard/Content-Management"
                    onClick={() => {
                      setSlideState("ContentM");
                      if (width < 768) {
                        setSideBar(!sideBar);
                      }
                    }}
                  >
                     <i className="fa fa-user-edit" />
                Content Management
                  </Link>
            </li>
            <li>
            <Link
                    className={SlideState === "TutM" ? "active" : ""}
                    to="/Admin/Dashboard/Tutorial-Management"
                    onClick={() => {
                      setSlideState("TutM");
                      if (width < 768) {
                        setSideBar(!sideBar);
                      }
                    }}
                  >
                     <i className="fa fa-play-circle" />
                Tutorial Managment
                  </Link>
            </li>
            <li>
            <Link className="" onClick={Logout}>
            <i className="fa fa-sign-out-alt" />
                Logout
                  </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="admin_header shadow">
            <div className="row align-items-center mx-0 justify-content-between w-100">
              <div className="col">
                <a className="sidebar_btn" href="javscript:;">
                  <i className="fa fa-bars" />
                </a>
              </div>
              <div className="col-auto d-flex align-items-center">
                <a className="change_language me-3" href="javascript:;">
                  <img src="/img-admin/saudi_flag1.png" alt="" /> عربى
                </a>
                <div className="dropdown Profile_dropdown">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="/img-admin/profile_img1.png" alt="" />
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="edit-profile.html">
                        Edit Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="change-password.html">
                        Change Password
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="login.html">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>  
      </div>
      
    </>
  )
}

export default Sidebar;