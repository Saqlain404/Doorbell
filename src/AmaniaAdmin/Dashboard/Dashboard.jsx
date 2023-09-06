import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="admin_main">
       <Sidebar/>
        <div className="admin_main_inner">
         
          <div className="admin_panel_data height_adjust">
            <div className="row dashboard_part justify-content-center">
              <div className="col-12">
                <div className="row ms-0 mb-3 justify-content-start">
                  <div className="col-4 d-flex align-items-stretch mb-4">
                    <a
                      href="javascript:;"
                      className="row dashboard_box box_design w-100"
                    >
                      <div className="col-auto px-0">
                        <span className="dashboard_icon">
                          <i className="fa fa-user" />
                        </span>
                      </div>
                      <div className="col pe-0">
                        <div className="dashboard_boxcontent">
                          <h2>Total Users</h2>
                          <span>200</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-4 d-flex align-items-stretch mb-4">
                    <a
                      href="javascript:;"
                      className="row dashboard_box box_design w-100"
                    >
                      <div className="col-auto px-0">
                        <span className="dashboard_icon">
                          <i className="fa fa-dollar-sign" />
                        </span>
                      </div>
                      <div className="col pe-0">
                        <div className="dashboard_boxcontent">
                          <h2>Total Revenue</h2>
                          <span>2000</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-4 d-flex align-items-stretch mb-4">
                    <a
                      href="javascript:;"
                      className="row dashboard_box box_design w-100"
                    >
                      <div className="col-auto px-0">
                        <span className="dashboard_icon">
                          <i className="fa fa-file-alt" />
                        </span>
                      </div>
                      <div className="col pe-0">
                        <div className="dashboard_boxcontent">
                          <h2>Open Support Tickets</h2>
                          <span>500</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Recent Orders</h2>
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
                                <th>User NAME</th>
                                <th>Mobile Number</th>
                                <th>Order Date</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Mohd. Arbab</td>
                                <td>+966 9876543210</td>
                                <td>10/10/2022</td>
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
                                <td>+966 9876543210</td>
                                <td>10/10/2022</td>
                                <td>
                                  <a
                                    className="comman_btn table_viewbtn"
                                    href="javascript:;"
                                  >
                                    <span>
                                      <span>View</span>
                                    </span>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Mohd. Arbab</td>
                                <td>+966 9876543210</td>
                                <td>10/10/2022</td>
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
                                <td>+966 9876543210</td>
                                <td>10/10/2022</td>
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
  );
};

export default Dashboard;
