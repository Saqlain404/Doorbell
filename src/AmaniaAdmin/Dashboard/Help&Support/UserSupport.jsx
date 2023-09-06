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
              <a className="active" href="user-support.html">
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
        <div className="row user-management justify-content-center">
          <div className="col-12">
            <div className="row mx-0">
              <div className="col-12 design_outter_comman shadow">
                <div className="row comman_header justify-content-between">
                  <div className="col-auto">
                    <h2>Users Support</h2>
                  </div>
                </div>
                <form
                  className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                  action=""
                >
                  <div className="form-group mb-0 col-5">
                    <label htmlFor="">From</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="form-group mb-0 col-5">
                    <label htmlFor="">To</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="form-group mb-0 col-auto">
                    <button className="comman_btn">
                      <span>Search</span>
                    </button>
                  </div>
                </form>
                <div className="row">
                  <div className="col-12 comman_table_design px-0">
                    <div className="table-responsive">
                      <table className="table mb-0">
                        <thead>
                          <tr>
                            <th>S.No.</th>
                            <th>User Name</th>
                            <th>E-mail</th>
                            <th>Subject</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Mohd. Arbab</td>
                            <td>xyz@gmail.com</td>
                            <td>Lorem ipsum</td>
                            <td>Lorem ipsum dolor sit amet</td>
                            <td>10/10/2022</td>
                            <td>
                              <form className="table_btns d-flex align-items-center">
                                <div className="check_toggle">
                                  <input
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop2"
                                    defaultChecked=""
                                    type="checkbox"
                                    name="check1"
                                    id="check1"
                                    className="d-none"
                                  />{" "}
                                  <label htmlFor="check1" />
                                </div>
                              </form>
                            </td>
                            <td>
                              <a
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                className="comman_btn table_viewbtn"
                                href="javscript:;"
                              >
                                <span>View</span>
                              </a>
                              <a
                                className="comman_btn bg-danger table_viewbtn"
                                href="javscript:;"
                              >
                                Delete
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Mohd. Arbab</td>
                            <td>xyz@gmail.com</td>
                            <td>Lorem ipsum</td>
                            <td>Lorem ipsum dolor sit amet</td>
                            <td>10/10/2022</td>
                            <td>
                              <form className="table_btns d-flex align-items-center">
                                <div className="check_toggle">
                                  <input
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop2"
                                    defaultChecked=""
                                    type="checkbox"
                                    name="check2"
                                    id="check2"
                                    className="d-none"
                                  />{" "}
                                  <label htmlFor="check2" />
                                </div>
                              </form>
                            </td>
                            <td>
                              <a
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                className="comman_btn table_viewbtn"
                                href="javscript:;"
                              >
                                <span>View</span>
                              </a>
                              <a
                                className="comman_btn bg-danger table_viewbtn"
                                href="javscript:;"
                              >
                                Delete
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Mohd. Arbab</td>
                            <td>xyz@gmail.com</td>
                            <td>Lorem ipsum</td>
                            <td>Lorem ipsum dolor sit amet</td>
                            <td>10/10/2022</td>
                            <td>
                              <form className="table_btns d-flex align-items-center">
                                <div className="check_toggle">
                                  <input
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop2"
                                    defaultChecked=""
                                    type="checkbox"
                                    name="check3"
                                    id="check3"
                                    className="d-none"
                                  />{" "}
                                  <label htmlFor="check3" />
                                </div>
                              </form>
                            </td>
                            <td>
                              <a
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                className="comman_btn table_viewbtn"
                                href="javscript:;"
                              >
                                <span>View</span>
                              </a>
                              <a
                                className="comman_btn bg-danger table_viewbtn"
                                href="javscript:;"
                              >
                                Delete
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Mohd. Arbab</td>
                            <td>xyz@gmail.com</td>
                            <td>Lorem ipsum</td>
                            <td>Lorem ipsum dolor sit amet</td>
                            <td>10/10/2022</td>
                            <td>
                              <form className="table_btns d-flex align-items-center">
                                <div className="check_toggle">
                                  <input
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop2"
                                    defaultChecked=""
                                    type="checkbox"
                                    name="check4"
                                    id="check4"
                                    className="d-none"
                                  />{" "}
                                  <label htmlFor="check4" />
                                </div>
                              </form>
                            </td>
                            <td>
                              <a
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                className="comman_btn table_viewbtn"
                                href="javscript:;"
                              >
                                <span>View</span>
                              </a>
                              <a
                                className="comman_btn bg-danger table_viewbtn"
                                href="javscript:;"
                              >
                                Delete
                              </a>
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
  <div
    className="modal fade reply_modal"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex={-1}
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title" id="staticBackdropLabel">
            DESCRIPTION
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body py-4">
          <div className="chatpart_main">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ut
              soluta, debitis provident reiciendis architecto. Reprehenderit et
              labore saepe, dolor ullam commodi fugiat dolorum tempora
              voluptatem explicabo delectus ducimus quibusdam.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
