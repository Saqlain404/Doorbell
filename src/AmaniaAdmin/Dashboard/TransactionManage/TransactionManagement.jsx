import React from 'react'
import Sidebar from '../Sidebar';

const TransactionManagement = () => {
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
        <div className="row user-management justify-content-center">
          <div className="col-12">
            <div className="row mx-0">
              <div className="col-12 design_outter_comman shadow">
                <div className="row comman_header justify-content-between">
                  <div className="col-auto">
                    <h2>Transaction Management</h2>
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
                            <th>Customer name</th>
                            <th>Transaction Date &amp; Time</th>
                            <th>Vendor Name</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Mohd. Arbab</td>
                            <td>
                              01/01/2020 <br /> 10:00PM
                            </td>
                            <td>Rizwan</td>
                            <td>100 SAR</td>
                            <td>Paid</td>
                            <td>
                              <a
                                className="comman_btn table_viewbtn"
                                href="javascript:;"
                              >
                                <span>View</span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Mohd. Arbab</td>
                            <td>
                              01/01/2020 <br /> 10:00PM
                            </td>
                            <td>Rizwan</td>
                            <td>100 SAR</td>
                            <td>Paid</td>
                            <td>
                              <a
                                className="comman_btn table_viewbtn"
                                href="javascript:;"
                              >
                                <span>View</span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Mohd. Arbab</td>
                            <td>
                              01/01/2020 <br /> 10:00PM
                            </td>
                            <td>Rizwan</td>
                            <td>100 SAR</td>
                            <td>Refund</td>
                            <td>
                              <a
                                className="comman_btn table_viewbtn"
                                href="javascript:;"
                              >
                                <span>View</span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Mohd. Arbab</td>
                            <td>
                              01/01/2020 <br /> 10:00PM
                            </td>
                            <td>Rizwan</td>
                            <td>100 SAR</td>
                            <td>Cancelled</td>
                            <td>
                              <a
                                className="comman_btn table_viewbtn"
                                href="javascript:;"
                              >
                                <span>View</span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Mohd. Arbab</td>
                            <td>
                              01/01/2020 <br /> 10:00PM
                            </td>
                            <td>Rizwan</td>
                            <td>100 SAR</td>
                            <td>Paid</td>
                            <td>
                              <a
                                className="comman_btn table_viewbtn"
                                href="javascript:;"
                              >
                                <span>View</span>
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
</>

)
}

export default TransactionManagement;