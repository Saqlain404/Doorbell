import React from 'react'
import Sidebar from '../Sidebar';

const TutorialManagment = () => {
  return (
    
<>
  <div className="admin_main">
    <Sidebar/>
    <div className="admin_main_inner">
      <div className="admin_header shadow">
        <div className="row align-items-center mx-0 justify-content-between w-100">
          <div className="col">
            <a className="sidebar_btn" >
              <i className="fa fa-bars" />
            </a>
          </div>
          <div className="col-auto d-flex align-items-center">
            <a className="change_language me-3" >
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
                  <a className="dropdown-item" >
                    Edit Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" >
                    Change Password
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" >
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

)
}

export default TutorialManagment;