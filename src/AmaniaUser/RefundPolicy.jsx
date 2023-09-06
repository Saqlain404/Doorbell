import React from 'react'

const RefundPolicy = () => {
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
          <h1>Refund Policy</h1>
          <div className="breadcrumbs mt-2 mb-0">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="javscript:;">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Refund Policy
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="content_pagess comman_padding Themecolor_3">
    <div className="container">
      <div className="row border px-md-3 px-2 py-md-4 py-3 bg-white">
        <div className="col-12 content_pagess_main">
          <p>
            By using this website or downloading &amp; using the app, these
            terms will automatically apply to you – you should make sure
            therefore that you read them carefully before using the app.
          </p>
          <p>
            You’re not allowed to copy or modify the app, any part of the app,
            or our trademarks in any way. You’re not allowed to attempt to
            extract the source code of the app, and you also shouldn’t try to
            translate the app into other languages or make derivative versions.
            The app itself, and all the trademarks, copyright, database rights,
            and other intellectual property rights related to it, still belong
            to Star Importers. This app is allowed to sell Tobacco Licenced
            Products..Please upload proper documents and licences for valid
            purchase. Star Importers is committed to ensuring that the app is as
            useful and efficient as possible. For that reason, we reserve the
            right to make changes to the app or to charge for its services, at
            any time and for any reason. We will never charge you for the app or
            its services without making it very clear to you exactly what you’re
            paying for.
          </p>
          <p>
            The Star Importers app stores and processes personal data that you
            have provided to us, to provide our Service. It’s your
            responsibility to keep your phone and access to the app secure. We
            therefore recommend that you do not jailbreak or root your phone,
            which is the process of removing software restrictions and
            limitations imposed by the official operating system of your device.
            It could make your phone vulnerable to malware/viruses/malicious
            programs, compromise your phone’s security features and it could
            mean that the Star Importers app won’t work properly or at all. Link
            to Terms and Conditions of third-party service providers used by the
            app
          </p>
          <h2>Firebase Crashlytics</h2>
          <p>
            You should be aware that there are certain things that Star
            Importers will not take responsibility for. Certain functions of the
            app will require the app to have an active internet connection. The
            connection can be Wi-Fi or provided by your mobile network provider,
            but Star Importers cannot take responsibility for the app not
            working at full functionality if you don’t have access to Wi-Fi, and
            you don’t have any of your data allowance left.
          </p>
          <p>
            If you’re using the app outside of an area with Wi-Fi, you should
            remember that the terms of the agreement with your mobile network
            provider will still apply. As a result, you may be charged by your
            mobile provider for the cost of data for the duration of the
            connection while accessing the app, or other third-party charges. In
            using the app, you’re accepting responsibility for any such charges,
            including roaming data charges if you use the app outside of your
            home territory (i.e. region or country) without turning off data
            roaming. If you are not the bill payer for the device on which
            you’re using the app, please be aware that we assume that you have
            received permission from the bill payer for using the app.
          </p>
          <p>
            Along the same lines, Star Importers cannot always take
            responsibility for the way you use the app i.e. You need to make
            sure that your device stays charged – if it runs out of battery and
            you can’t turn it on to avail the Service, Star Importers cannot
            accept responsibility.
          </p>
          <p>
            With respect to Star Importers’s responsibility for your use of the
            app, when you’re using the app, it’s important to bear in mind that
            although we endeavor to ensure that it is updated and correct at all
            times, we do rely on third parties to provide information to us so
            that we can make it available to you. Star Importers accepts no
            liability for any loss, direct or indirect, you experience as a
            result of relying wholly on this functionality of the app.
          </p>
          <p>
            At some point, we may wish to update the app. The app is currently
            available on Android &amp; iOS – the requirements for the both
            systems(and for any additional systems we decide to extend the
            availability of the app to) may change, and you’ll need to download
            the updates if you want to keep using the app. Star Importers does
            not promise that it will always update the app so that it is
            relevant to you and/or works with the Android &amp; iOS version that
            you have installed on your device. However, you promise to always
            accept updates to the application when offered to you, We may also
            wish to stop providing the app, and may terminate use of it at any
            time without giving notice of termination to you. Unless we tell you
            otherwise, upon any termination, (a) the rights and licenses granted
            to you in these terms will end; (b) you must stop using the app, and
            (if needed) delete it from your device.
          </p>
          <p>
            We may update our Terms and Conditions from time to time. Thus, you
            are advised to review this page periodically for any changes. We
            will notify you of any changes by posting the new Terms and
            Conditions on this page.
          </p>
          <p>
            If you have any questions or suggestions about our Terms and
            Conditions, do not hesitate to contact us at amania@gmail.com
          </p>
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

export default RefundPolicy;
