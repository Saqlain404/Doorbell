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
    
    // if (token === null) {
    //   Swal.fire({
    //     title: "PLease Login to Continue!",
    //     text: "Login Expired!",
    //     icon: "warning",
    //     confirmButtonText: "Login",
    //     confirmButtonColor: "#e25829",
    //   }).then((res) => {
    //     navigate("/Admin/Login");
    //   });
    // }
    console.log(width);
  
    // const Logout = () => {
    //   localStorage.removeItem("token-admin");
    //   navigate("/Admin/Login");
    //   window.location.reload()
    // };
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
                <i className="fa fa-close "></i>
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
                Product Management
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
            <Link className="" 
            // onClick={Logout}
            >
            <i className="fa fa-sign-out-alt" />
                Logout
                  </Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default Sidebar;