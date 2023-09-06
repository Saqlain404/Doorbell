import React from 'react'

const Checkout = () => {
  return (
   
<>
  <div className="top_header">
    <div className="container d-flex align-items-center">
      <marquee behavior="" direction="">
        Amania provides a series of service capabilities to help brands quickly
        complete the product intelligent、sales intelligent and service
        intelligent.
      </marquee>
    </div>
  </div>
  <header className="header_main shadow">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-4 col-2">
          <div className="Header_menuss text-start">
            <a
              className="canvas_toggle"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample1"
              role="button"
              aria-controls="offcanvasExample1"
            >
              <i className="fa-solid fa-bars-sort" />
            </a>
            <div
              className="offcanvas offcanvas-start menuss_canvas"
              tabIndex={-1}
              id="offcanvasExample1"
              aria-labelledby="offcanvasExample1Label"
            >
              <div className="offcanvas-header border-bottom">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                  <img src="assets/img/logo.png" alt="" />
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body px-0 pt-0">
                <div className="offcanvas-menus">
                  <a href="index.html">Home</a>
                  <a href="about-us.html">About Us</a>
                  <a href="cart.html">Cart</a>
                  <a href="contact-us.html">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-8 text-center px-0">
          <div className="header_logo">
            <a href="index.html">
              <img src="assets/img/logo.png" alt="LOGO" />
            </a>
          </div>
        </div>
        <div className="col-md-4 col-2">
          <div className="Heder_iconss">
            <a
              data-bs-toggle="modal"
              data-bs-target="#login"
              className="iconn_same"
              href="javascript:;"
            >
              <i className="fa-regular fa-user" />
            </a>
            <a
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
              className="iconn_same d-md-block d-none"
            >
              <i className="fa-regular fa-cart-shopping" />
            </a>
            <a className="language_sectin" href="javascript:;">
              <img src="assets/img/saudi_flag1.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      className="offcanvas offcanvas-end cart_canvas"
      tabIndex={-1}
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          Shopping Cart
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <div className="cart_canvas_inner">
          <div className="row cart_Product border-bottom py-3">
            <div className="col-auto">
              <a className="cart_img" href="javascript:;">
                <img src="assets/img/product1.png" alt="" />
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
                  <a className="delete_product" href="javascript:;">
                    <i className="fa-regular fa-trash-can" />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="cart_pdetails">
                    <div className="number">
                      <span className="minus">-</span>
                      <input type="text" defaultValue={0} />
                      <span className="plus">+</span>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <span className="product_pricee">$24.99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row cart_Product border-bottom py-3">
            <div className="col-auto">
              <a className="cart_img" href="javascript:;">
                <img src="assets/img/product1.png" alt="" />
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
                  <a className="delete_product" href="javascript:;">
                    <i className="fa-regular fa-trash-can" />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="cart_pdetails">
                    <div className="number">
                      <span className="minus">-</span>
                      <input type="text" defaultValue={0} />
                      <span className="plus">+</span>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <span className="product_pricee">$24.99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row cart_Product border-bottom py-3">
            <div className="col-auto">
              <a className="cart_img" href="javascript:;">
                <img src="assets/img/product1.png" alt="" />
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
                  <a className="delete_product" href="javascript:;">
                    <i className="fa-regular fa-trash-can" />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="cart_pdetails">
                    <div className="number">
                      <span className="minus">-</span>
                      <input type="text" defaultValue={0} />
                      <span className="plus">+</span>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <span className="product_pricee">$24.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-footer">
        <div className="cart_bottom row">
          <div className="col-6">
            <h3 className="subtotal">Subtotal (3 item) :</h3>
          </div>
          <div className="col-6 text-end">
            <div className="price_total">$24.99</div>
          </div>
          <div className="col-12 mt-2">
            <a
              className="comman_btn shadow d-flex justify-content-center"
              href="checkout.html"
            >
              <span>Checkout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="comman_banner Themecolor_1">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12">
          <h1>Checkout</h1>
          <div className="breadcrumbs mt-2 mb-0">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="javscript:;">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Checkout
                </li>
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
                <form className="row mx-0" action="">
                  <div className="form-floating mb-3 col-md-6 ps-0">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="name"
                    />
                    <label htmlFor="name">Fist Name</label>
                  </div>
                  <div className="form-floating mb-3 col-md-6 ps-0">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="name"
                    />
                    <label htmlFor="name">Last Name</label>
                  </div>
                  <div className="form-floating mb-3 col-md-12 ps-0">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="name"
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
                    />
                    <label htmlFor="name">Address</label>
                  </div>
                  <div className="form-floating mb-3 col-md-12 ps-0">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="name"
                    />
                    <label htmlFor="name">Town/City</label>
                  </div>
                  <div className="form-floating mb-3 col-md-6 ps-0">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="name"
                    />
                    <label htmlFor="name">Country/Region</label>
                  </div>
                  <div className="form-floating mb-3 col-md-6 ps-0">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="name"
                    />
                    <label htmlFor="name">Postal Code</label>
                  </div>
                  <div className="form-group custom_checkbox mb-3 text-start ps-0">
                    <input
                      type="checkbox"
                      className="d-none"
                      name="check1"
                      id="check1"
                    />
                    <label htmlFor="check1">
                      {" "}
                      Ship to a different address?
                    </label>
                  </div>
                  <div className="form-group custom_checkbox mb-3 text-start ps-0">
                    <input
                      type="checkbox"
                      className="d-none"
                      name="check2"
                      id="check2"
                    />
                    <label htmlFor="check2">
                      {" "}
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
                    />
                    <label htmlFor="name">Order Notes</label>
                  </div>
                  <div className="col-md-4 ps-0">
                    <a
                      className="comman_btn shadow d-flex justify-content-center shadow-none px-0"
                      href="javascript:;"
                    >
                      <span>Return to cart</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 position_sett">
          <div className="product_summry border px-3 py-3 bg-white">
            <div className="sumry_head Themecolor_1 mb-4">Order Summary</div>
            <div className="row cart_Product py-2">
              <div className="col-auto">
                <a className="cart_img" href="javascript:;">
                  <img src="assets/img/product1.png" alt="" />
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
                    <span className="product_pricee">$24.99</span>
                  </div>
                </div>
              </div>
            </div>
            <form className="row mx-0 py-3">
              <div className="form-floating col-12 px-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter Promo Code"
                />
                <label htmlFor="floatingInput">Enter Promo Code</label>
                <a className="comman_btn shadow" href="javascript:;">
                  <span>Apply</span>
                </a>
              </div>
            </form>
            <div className="row justify-content-between pb-2">
              <div className="col-auto">
                <div className="sumry_left">Subtotal :</div>
              </div>
              <div className="col-auto">
                <div className="sumry_right">$11,180.00</div>
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
                <div className="sumry_right">$11,180.00</div>
              </div>
            </div>
            <div className="row payment_mode mb-3">
              <div className="col-12 mb-3">
                <h2 className="checkout_head">Payment</h2>
              </div>
              <div className="col-12 payment_mode_btns">
                <a href="javascript:;">Credit</a>
                <a href="javascript:;">Bank Transfer</a>
                <a href="javascript:;">Paypal</a>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <a
                  className="comman_btn shadow d-flex justify-content-center shadow-none px-0"
                  href="javascript:;"
                >
                  <span>Pay Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="why_to_buy">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-6 border-end">
          <div className="why_to_buy_box">
            <i className="fa-light fa-truck-fast" />
            <h3>Free Shipping</h3>
          </div>
        </div>
        <div className="col-md-3 col-6 border-end">
          <div className="why_to_buy_box">
            <i className="fa-light fa-money-bill" />
            <h3>COD Available </h3>
          </div>
        </div>
        <div className="col-md-3 col-6 border-end">
          <div className="why_to_buy_box">
            <i className="fa-light fa-badge-percent" />
            <h3>Exclusive Deals</h3>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="why_to_buy_box">
            <i className="fa-light fa-badge-check" />
            <h3>Secured Payment</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer">
    <div className="container pb-5 border-bottom">
      <div className="row">
        <div className="col-md-4 mb-md-0 mb-4">
          <div className="footer_comapny">
            <a href="javascript:;">
              <img src="assets/img/logo.png" alt="" />
            </a>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              recusandae suscipit a similique nisi dignissimos, nam aspernatur
              debitis eum saepe repudiandae,
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-md-0 mb-4 d-flex justify-content-md-center">
          <div className="footer_comman">
            <h2>THE BASIC</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about-us.html">About Us</a>
              </li>
              <li>
                <a href="contact-us.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-md-center">
          <div className="footer_comman">
            <h2>BORING LEGAL STUFF</h2>
            <ul>
              <li>
                <a href="refund-policy.html">Refund Policy</a>
              </li>
              <li>
                <a href="privacy-policy.html">Privacy Policy</a>
              </li>
              <li>
                <a href="terms-of-service.html">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copy-right py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="cards_footer">
              <a href="javascript:;">
                <img src="assets/img/Visa.png" alt="" />
              </a>
              <a href="javascript:;">
                <img src="assets/img/Mastercard.png" alt="" />
              </a>
              <a href="javascript:;">
                <img src="assets/img/Visa.png" alt="" />
              </a>
              <a href="javascript:;">
                <img src="assets/img/Mastercard.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-md-4 my-md-0 my-3">
            <div className="copy-right-text">
              <p>© Amania All Rights Reserved 2023</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="social_media text-md-end text-center">
              <a href="javascript:;">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="javascript:;">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="javascript:;">
                <i className="fa-brands fa-twitter" />
              </a>
              <a href="javascript:;">
                <i className="fa-brands fa-tiktok" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
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
                  Didn't receive the OTP? <a href="javascript:;">Resend OTP?</a>
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
                  I agree to <a href="javscript:;">Terms &amp; Conditions</a>.
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

)
}

export default Checkout;