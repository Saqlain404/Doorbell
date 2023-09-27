import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "./Footer";
import Header from "./Header";
import { AddressList, CartList, CreateOrder } from "./httpServices/dashHttpService";

const Checkout = () => {
  const navigate = useNavigate();

  const [saveAdd, setSaveAdd] = useState(true);

  const location = useLocation();
  let qty = location?.state?.qty;

  console.log(qty);

  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    companyname: "",
    address: "",
    city: "",
    country: "",
    postalcode: "",
    ordernotes: "",
  });

  const user = localStorage.getItem("user_id");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserInfo({ ...userInfo, [name]: value });
  };
  const [product, setProduct] = useState([]);

  const Products = async () => {
    const { data } = await CartList(user);
    if (!data.error) {
      setProduct(data.results?.listing);
    }
  };

  const Cart = product?.map((order) => ({
    product_Id: order?.products[0]?.products_Id?._id,
    price: qty * order?.products[0]?.products_Id?.Price,
    quantity: qty,
  }));

  useEffect(() => {
    Products();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { ...userInfo, user: localStorage.getItem("user_id") };
    console.log(userData);

    await CreateOrder({
      firstName: userData.firstname,
      lastName: userData.lastname,
      companyName: userData.companyname,
      address: userData.address,
      city: userData.city,
      country: userData.country,
      postalCode: userData.postalcode,
      orderNotes: userData.ordernotes,
      carts: Cart,
      user_Id: userData.user,
    })
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        if (!res.data?.error) {
          console.log("Success");
          navigate("");
        }
      });
  };

  const OrderNow = () => {
    document.getElementById("order_submit").click();
  };

  const SaveAddress = async (e) => {
    e.preventDefault();
    console.log(e.target.value);

    if(saveAdd){
      await AddressList({
        
      })
    }
  };

  return (
    <>
      <Header />
      <div className="comman_banner Themecolor_1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <h1>Checkout</h1>
              <div className="breadcrumbs mt-2 mb-0">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a>Home</a>
                    </li>
                    <li className="breadcrumb-item active">Checkout</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout_page py-5 Themecolor_3">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-8 mb-lg-0 mb-md-4 mb-4">
              <div className="checkout_main border px-md-4 px-3 py-md-4 py-4 bg-white">
                <div className="row">
                  <div className="col-12 mb-4">
                    <h2 className="checkout_head">Billing Details</h2>
                  </div>
                  <div className="col-12 pe-md-0">
                    <form className="row mx-0" onSubmit={handleSubmit}>
                      <div className="form-floating mb-3 col-md-6 ps-0">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="name"
                          name="firstname"
                          value={userInfo.firstname}
                          onChange={handleChange}
                        />
                        <label htmlFor="name">Fist Name</label>
                      </div>
                      <div className="form-floating mb-3 col-md-6 ps-0">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="name"
                          name="lastname"
                          value={userInfo.lastname}
                          onChange={handleChange}
                        />
                        <label htmlFor="name">Last Name</label>
                      </div>
                      <div className="form-floating mb-3 col-md-12 ps-0">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="name"
                          name="companyname"
                          value={userInfo.companyname}
                          onChange={handleChange}
                        />
                        <label htmlFor="name">Company Name</label>
                      </div>
                      <div className="form-floating mb-3 col-md-12 ps-0">
                        <textarea
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          style={{ height: 100 }}
                          defaultValue={""}
                          name="address"
                          value={userInfo.address}
                          onChange={handleChange}
                        />
                        <label htmlFor="name">Address</label>
                      </div>
                      <div className="form-floating mb-3 col-md-12 ps-0">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="name"
                          name="city"
                          value={userInfo.city}
                          onChange={handleChange}
                        />
                        <label htmlFor="name">Town/City</label>
                      </div>
                      <div className="form-floating mb-3 col-md-6 ps-0">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="name"
                          name="country"
                          value={userInfo.country}
                          onChange={handleChange}
                        />
                        <label htmlFor="name">Country/Region</label>
                      </div>
                      <div className="form-floating mb-3 col-md-6 ps-0">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="name"
                          name="postalcode"
                          value={userInfo.postalcode}
                          onChange={handleChange}
                        />
                        <label htmlFor="name">Postal Code</label>
                      </div>
                      <div className="form-group mb-3 text-start ps-0">
                        <input
                          type="checkbox"
                          className=" form-check-input  me-2"
                          name="check"
                          id="check"
                          autoComplete="off"
                        />
                        <label
                          htmlFor="check"
                          className="form-check-label me-4"
                        >
                          {"  "}
                          Home
                        </label>
                        <input
                          type="checkbox"
                          className=" form-check-input  me-2"
                          name="check"
                          id="check"
                          autoComplete="off"
                        />
                        <label
                          htmlFor="check"
                          className="form-check-label me-4"
                        >
                          {"  "}
                          Office
                        </label>
                        <input
                          type="checkbox"
                          className=" form-check-input  me-2"
                          name="check"
                          id="check"
                          autoComplete="off"
                        />
                        <label
                          htmlFor="check"
                          className="form-check-label me-4"
                        >
                          {"  "}
                          Other
                        </label>
                      </div>
                      <div className="form-group  mb-3 text-start ps-0">
                        <input
                          type="checkbox"
                          className=" form-check-input  me-2"
                          name="save-address"
                          id="check-save"
                          autoComplete="off"
                          onChange={(e) => {
                            SaveAddress(e);
                            setSaveAdd(!saveAdd);
                          }}
                        />
                        <label
                          htmlFor="check-save"
                          className="form-check-label me-4"
                        >
                          {"  "}
                          Save this information for next time
                        </label>
                      </div>
                      <div className="form-floating mb-3 col-md-12 ps-0">
                        <textarea
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          style={{ height: 100 }}
                          defaultValue={""}
                          name="ordernotes"
                          value={userInfo.ordernotes}
                          onChange={handleChange}
                        />
                        <label htmlFor="name">Order Notes</label>
                      </div>
                      <div className="col-md-4 ps-0">
                        <Link
                          to={"/User/Home/Cart"}
                          className="text-decoration-none"
                        >
                          <a className="comman_btn shadow d-flex justify-content-center shadow-none px-0">
                            <span>Return to cart</span>
                          </a>
                        </Link>
                        <button
                          className="comman_btn shadow d-flex justify-content-center shadow-none px-0 d-none"
                          type="submit"
                          id="order_submit"
                          // onClick={() => OrderCreate()}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {product?.map((item, index) => (
              <div className="col-lg-4 position_sett">
                <div className="product_summry border px-3 py-3 bg-white">
                  <div className="sumry_head Themecolor_1 mb-4">
                    Order Summary
                  </div>
                  <div className="row cart_Product py-2">
                    <div className="col-auto">
                      <a className="cart_img" href="javascript:;">
                        <img src="/img/product1.png" alt="" />
                      </a>
                    </div>
                    <div className="col ps-0">
                      <div className="row mb-2">
                        <div className="col">
                          <div className="cart_pdetails">
                            <a href="javascript:;" className="cart_pname">
                              Wi-Fi Smart Video Doorbell
                            </a>
                            <p>Lorem ipsum dolor sit amet.</p>
                          </div>
                        </div>
                        <div className="col-auto">
                          <span className="product_pricee">
                            ${item?.products[0]?.products_Id?.Price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form className="row mx-0 py-3">
                    <div className="form-floating col-12 px-0">
                      {/* <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Enter Promo Code"
                    />
                    <label htmlFor="floatingInput">Enter Promo Code</label>
                    <a className="comman_btn shadow" href="javascript:;">
                      <span>Apply</span>
                    </a> */}
                    </div>
                  </form>
                  <div className="row justify-content-between pb-2">
                    <div className="col-auto">
                      <div className="sumry_left">Subtotal :</div>
                    </div>
                    <div className="col-auto">
                      <div className="sumry_right">
                        ${item?.products[0]?.products_Id?.Price * qty}.00
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between pb-2">
                    <div className="col-auto">
                      <div className="sumry_left">Shipping (Free) :</div>
                    </div>
                    <div className="col-auto">
                      <div className="sumry_right">$0.00</div>
                    </div>
                  </div>
                  <div className="row mx-0 justify-content-between border-top py-3">
                    <div className="col-auto ps-0">
                      <div className="sumry_left">Total</div>
                    </div>
                    <div className="col-auto pe-0">
                      <div className="sumry_right">
                        ${item?.products[0]?.products_Id?.Price * qty}.00
                      </div>
                    </div>
                  </div>
                  <div className="row payment_mode mb-3">
                    <div className="col-12 mb-3">
                      <h2 className="checkout_head">Payment</h2>
                    </div>
                    <div className="col-12 payment_mode_btns">
                      <a>Credit</a>
                      <a>Bank Transfer</a>
                      <a>Paypal</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      {/* <input
                      type="checkbox"
                      className=" form-check-input  me-2"
                      name="check"
                      id="check"
                      autoComplete="off"
                    />
                    <label htmlFor="check" className="form-check-label disabled me-4 mb-1">
                      {"  "}
                      Pay Now
                    </label> */}
                      <br />
                      <input
                        type="checkbox"
                        className=" form-check-input  me-2"
                        name="check"
                        id="check"
                        autoComplete="off"
                      />
                      <label htmlFor="check" className="form-check-label mb-3">
                        {"  "}
                        Cash On Delivery
                      </label>
                      <a
                        className="comman_btn shadow d-flex justify-content-center shadow-none px-0 text-decoration-none"
                        onClick={OrderNow}
                      >
                        <span>Order Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <div
        className="modal fade login_modal_main"
        id="login"
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
                <h2>Account Login</h2>
                <form action="">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="xxxxxxxx"
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="form-floating mb-3 text-start">
                    <a
                      className="forgot_password"
                      data-bs-toggle="modal"
                      data-bs-target="#rest"
                      href="javascript:;"
                    >
                      Forgot Your Password?
                    </a>
                  </div>
                  <div className="form-group mb-3">
                    <a
                      href="javascript:;"
                      className="comman_btn shadow"
                      data-bs-dismiss="modal"
                      type="submit"
                    >
                      <span>Sign In</span>
                    </a>
                  </div>
                  <div className="form-floating text-center">
                    <a
                      className="forgot_password"
                      data-bs-toggle="modal"
                      data-bs-target="#register"
                      href="javascript:;"
                    >
                      Create Account?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade login_modal_main"
        id="rest"
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
                <h2>Forgot your password</h2>
                <p className="heade_p">
                  We will send you an email to reset your password
                </p>
                <form action="">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-group mb-0">
                    <a
                      href="javascript:;"
                      data-bs-toggle="modal"
                      data-bs-target="#verify"
                      className="comman_btn shadow"
                      type="submit"
                    >
                      <span>Send OTP</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade login_modal_main"
        id="verify"
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
                <h2>OTP Verification </h2>
                <p className="heade_p">
                  Please enter the OTP received on your Email address{" "}
                </p>
                <form action="">
                  <div className="form-floating mb-3 d-flex">
                    <input
                      type="text"
                      className="form-control mx-1 p-1 text-center"
                      id=""
                    />
                    <input
                      type="text"
                      className="form-control mx-1 p-1 text-center"
                      id=""
                    />
                    <input
                      type="text"
                      className="form-control mx-1 p-1 text-center"
                      id=""
                    />
                    <input
                      type="text"
                      className="form-control mx-1 p-1 text-center"
                      id=""
                    />
                  </div>
                  <div className="form-group mb-3">
                    <div className="time_js">
                      <span>01:34</span>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <a
                      href="javascript:;"
                      data-bs-toggle="modal"
                      data-bs-target="#changepass"
                      className="comman_btn shadow"
                      type="submit"
                    >
                      <span>Submit</span>
                    </a>
                  </div>
                  <div className="form-group mb-0">
                    <div className="resend_otp">
                      Didn't receive the OTP?{" "}
                      <a href="javascript:;">Resend OTP?</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade login_modal_main"
        id="changepass"
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
                <h2>Reset Your Password</h2>
                <p className="heade_p">Create a new password </p>
                <form action="">
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="password"
                    />
                    <label htmlFor="password">New Password</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="password"
                    />
                    <label htmlFor="password">Confirm New Password</label>
                  </div>
                  <div className="form-group mb-0">
                    <a
                      href="javascript:;"
                      data-bs-dismiss="modal"
                      className="comman_btn shadow"
                      type="submit"
                    >
                      <span>Submit</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade login_modal_main"
        id="register"
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
                <h2>Welcome to Amania!</h2>
                <p className="heade_p">Register Your Account </p>
                <form action="">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="User Name"
                    />
                    <label htmlFor="username">User Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="xxxxxxxx"
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="form-group custom_checkbox mb-4 text-start">
                    <input
                      type="checkbox"
                      className="d-none"
                      name="check"
                      id="check"
                    />
                    <label htmlFor="check">
                      {" "}
                      I agree to{" "}
                      <a href="javscript:;">Terms &amp; Conditions</a>.
                    </label>
                  </div>
                  <div className="form-group mb-0">
                    <a
                      href="javascript:;"
                      className="comman_btn shadow"
                      data-bs-dismiss="modal"
                      type="submit"
                    >
                      <span>Sign Up</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
