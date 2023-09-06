import React, { useState } from 'react'
import Sidebar from '../Sidebar';

const ProductManagemnet = () => {
  const [slide, setSlide] = useState("ProdM");
  const [sideBar, setSideBar] = useState();


  const getBarClick = (val) => {
    console.log(val);
    setSideBar(val);
  };
  return (
    
<>
  <div className={sideBar === "click" ? "expanded_main" : "admin_main"}>
    <Sidebar slide={slide} getBarClick={getBarClick}/>
    <div className="admin_main_inner">
      <div className="admin_header shadow">
        <div className="row align-items-center mx-0 justify-content-between w-100">
          <div className="col">
            <a className="sidebar_btn">
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
                    <h2>Product Managemnet</h2>
                  </div>
                </div>
                <form
                  className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                  action=""
                >
                  <div className="form-group mb-0 col">
                    <label htmlFor="">From</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="form-group mb-0 col">
                    <label htmlFor="">To</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="form-group mb-0 col-auto">
                    <button className="comman_btn">
                      <span>Add New</span>
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
                            <th>Product Name</th>
                            <th>Model Number</th>
                            <th>Description</th>
                            <th>Multiple images</th>
                            <th>Price</th>
                            <th>Discounted price</th>
                            <th>Colour</th>
                            <th>Minimum orders quantity</th>
                            <th>Certification</th>
                            <th>Max Resolution</th>
                            <th>action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>
                              Wi-Fi Smart <br /> Video Doorbell{" "}
                            </td>
                            <td>R4115</td>
                            <td>
                              Lorem ipsum dolor sit, amet <br /> consectetur
                              adipisicing elit.
                            </td>
                            <td>
                              <img
                                className="product_immg"
                                src="/img-admin/product1.png"
                                alt=""
                              />
                            </td>
                            <td> 100 SAR </td>
                            <td>10 SAR</td>
                            <td>Black</td>
                            <td>1000 Pieces</td>
                            <td>1080P/2MP</td>
                            <td>FCC</td>
                            <td>
                              <button
                                className="comman_btn table_viewbtn"
                              >
                                <span>Edit</span>
                              </button>
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

export default ProductManagemnet;