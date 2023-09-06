import React from 'react'

const ChangePassword = () => {
  return (

<>
  <div className="admin_main">
    <div className="siderbar_section">
      <div className="siderbar_inner">
        <div className="sidebar_logo">
          <a href="javscript:;">
            <img src="assets/img/logo.png" alt="Logo" />{" "}
          </a>
        </div>
        <div className="sidebar_menus">
          <ul className="list-unstyled ps-1 m-0">
            <li>
              <a className="" href="dashboard.html">
                <i className="fal fa-home" />
                Dashboard
              </a>
            </li>
            <li>
              <a className="" href="user-management.html">
                <i className="fal fa-user" />
                User Management
              </a>
            </li>
            <li>
              <a className="" href="product-managemnet.html">
                <i className="fal fa-user" />
                Product Managemnet
              </a>
            </li>
            <li>
              <a className="" href="user-support.html">
                <i className="fal fa-hands-heart" />
                User support
              </a>
            </li>
            <li>
              <a className="" href="transaction-management.html">
                <i className="far fa-repeat-1" />
                Transaction Management
              </a>
            </li>
            <li>
              <a className="" href="content-management.html">
                <i className="fal fa-user-edit" />
                Content Management
              </a>
            </li>
            <li>
              <a className="" href="tutorial-managment.html">
                <i className="fal fa-play-circle" />
                Tutorial Managment
              </a>
            </li>
            <li>
              <a className="" href="login.html">
                <i className="fal fa-sign-out-alt" />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="admin_main_inner">
      <div className="admin_header shadow">
        <div className="row align-items-center mx-0 justify-content-between w-100">
          <div className="col">
            <a className="sidebar_btn" href="javscript:;">
              <i className="far fa-bars" />
            </a>
          </div>
          <div className="col-auto d-flex align-items-center">
            <a className="change_language me-3" href="javascript:;">
              <img src="assets/img/saudi_flag1.png" alt="" /> عربى
            </a>
            <div className="dropdown Profile_dropdown">
              <button
                className="btn btn-secondary"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="assets/img/profile_img1.png" alt="" />
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
      <div className="admin_panel_data height_adjust">
        <div className="row">
          <div className="col-12 editprofile design_outter_comman shadow">
            <div className="row comman_header justify-content-between">
              <div className="col-auto">
                <h2>Change Password</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form className="row form-design justify-content-center position-relative mx-0 p-4">
                  <div className="form-group col-12">
                    <label htmlFor="">Old Password</label>
                    <input
                      type="password"
                      className="form-control"
                      defaultValue="Vishnu Jangid"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="form-group col-12">
                    <label htmlFor="">New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      defaultValue="Vishnu Jangid"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="form-group col-12">
                    <label htmlFor="">Confirm New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      defaultValue="Vishnu Jangid"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="form-group col-12 text-center">
                    <a className="comman_btn" href="javscript:;">
                      <span>Save</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

)
}

export default ChangePassword;