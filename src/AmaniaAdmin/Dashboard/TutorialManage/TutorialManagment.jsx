<>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Dashboard</title>
  <meta content="" name="description" />
  <meta content="" name="keywords" />
  {/* Favicons */}
  <link href="assets/img/favicon.png" rel="icon" />
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
  {/* Vendor CSS Files */}
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link
    href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
    rel="stylesheet"
  />
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
  <link href="assets/vendor/owl/owl.carousel.min.css" rel="stylesheet" />
  <link
    rel="stylesheet"
    href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css"
  />
  <link href="assets/css/style.css" rel="stylesheet" />
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
              <a className="active" href="tutorial-managment.html">
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
        <div className="row tutorial_management justify-content-center">
          <div className="col-12 px-0">
            <div className="row mx-0">
              <div className="col-6">
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto ps-0">
                        <h2>Tutorial Managment (En)</h2>
                      </div>
                      <div className="col-auto pe-0">
                        <button className="comman_btn">
                          <span>Add New</span>
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 comman_table_design px-0">
                        <div className="table-responsive">
                          <table className="table mb-0">
                            <thead>
                              <tr>
                                <th>S.No.</th>
                                <th>Tutorial name</th>
                                <th>Added On </th>
                                <th>Tutorial</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Lorem ipsum</td>
                                <td>01/07/2022</td>
                                <td>
                                  <img
                                    className="product_immg"
                                    src="assets/img/product3.jpeg"
                                    alt=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Lorem ipsum</td>
                                <td>01/07/2022</td>
                                <td>
                                  <img
                                    className="product_immg"
                                    src="assets/img/product3.jpeg"
                                    alt=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Lorem ipsum</td>
                                <td>01/07/2022</td>
                                <td>
                                  <img
                                    className="product_immg"
                                    src="assets/img/product3.jpeg"
                                    alt=""
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto ps-0">
                        <h2>Tutorial Managment (Ar)</h2>
                      </div>
                      <div className="col-auto pe-0">
                        <button className="comman_btn">
                          <span>Add New</span>
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 comman_table_design px-0">
                        <div className="table-responsive">
                          <table className="table mb-0">
                            <thead>
                              <tr>
                                <th>S.No.</th>
                                <th>Tutorial name</th>
                                <th>Added On </th>
                                <th>Tutorial</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>لوريم إيبسوم</td>
                                <td>01/07/2022</td>
                                <td>
                                  <img
                                    className="product_immg"
                                    src="assets/img/product3.jpeg"
                                    alt=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>لوريم إيبسوم</td>
                                <td>01/07/2022</td>
                                <td>
                                  <img
                                    className="product_immg"
                                    src="assets/img/product3.jpeg"
                                    alt=""
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>لوريم إيبسوم</td>
                                <td>01/07/2022</td>
                                <td>
                                  <img
                                    className="product_immg"
                                    src="assets/img/product3.jpeg"
                                    alt=""
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
