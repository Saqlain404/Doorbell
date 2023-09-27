import React from 'react'
import Footer from './Footer';
import Header from './Header';

const MySavedAddress = () => {
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
  <Header/>
  <div className="comman_banner Themecolor_1">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12">
          <h1>My Saved Address</h1>
          <div className="breadcrumbs mt-2 mb-0">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="javscript:;">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  My Saved Address
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="myaccount py-5 Themecolor_3">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-4 mb-lg-0 mb-md-4 mb-4">
          <div className="contact_form border bg-white align-items-center shadow p-4">
            <div className="myaccount_profile row mb-4 align-items-center">
              <div className="col">
                <h3 className="top_headd">Home</h3>
              </div>
              <div className="col-auto text-end">
                <a className="comman_btn shadow" href="javascript:;">
                  <span>Edit</span>
                </a>
              </div>
            </div>
            <form className="row ms-0" action="">
              <div className="form-floating mb-4 col-md-6 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  defaultValue="UAE"
                />
                <label htmlFor="name">Your Country</label>
              </div>
              <div className="form-floating mb-4 col-md-6 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  defaultValue="Mohd. Arbab"
                />
                <label htmlFor="number">Full Name</label>
              </div>
              <div className="form-floating mb-4 col-md-6 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue="+966 23423423422"
                />
                <label htmlFor="floatingInput">Mobile Number</label>
              </div>
              <div className="form-floating mb-4 col-md-6 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue={23423}
                />
                <label htmlFor="floatingInput">Pincode</label>
              </div>
              <div className="form-floating mb-4 col-md-12 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue="Lorem ipsum dolor sit amet consectetur"
                />
                <label htmlFor="floatingInput">Address</label>
              </div>
              <div className="form-floating mb-4 col-md-4 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue="ipsum dolor sit"
                />
                <label htmlFor="floatingInput">Landmark</label>
              </div>
              <div className="form-floating mb-4 col-md-4 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue="lorem"
                />
                <label htmlFor="floatingInput">City</label>
              </div>
              <div className="form-floating mb-4 col-md-4 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue="lorem"
                />
                <label htmlFor="floatingInput">State</label>
              </div>
              <div className="form-floating text-center ps-0">
                <a className="comman_btn shadow" href="javascript:;">
                  <span>Use This Address</span>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4 mb-lg-0 mb-md-4 mb-4">
          <div className="contact_form border bg-white align-items-center shadow p-4">
            <div className="myaccount_profile row mb-4 align-items-center">
              <div className="col">
                <h3 className="top_headd">Office</h3>
              </div>
              <div className="col-auto text-end">
                <a className="comman_btn shadow" href="javascript:;">
                  <span>Edit</span>
                </a>
              </div>
            </div>
            <form className="row ms-0" action="">
              <div className="form-floating mb-4 col-md-6 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  defaultValue="UAE"
                />
                <label htmlFor="name">Your Country</label>
              </div>
              <div className="form-floating mb-4 col-md-6 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  defaultValue="Mohd. Arbab"
                />
                <label htmlFor="number">Full Name</label>
              </div>
              <div className="form-floating mb-4 col-md-6 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue="+966 23423423422"
                />
                <label htmlFor="floatingInput">Mobile Number</label>
              </div>
              <div className="form-floating mb-4 col-md-6 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue={23423}
                />
                <label htmlFor="floatingInput">Office Pincode</label>
              </div>
              <div className="form-floating mb-4 col-md-12 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue="Lorem ipsum dolor sit amet consectetur"
                />
                <label htmlFor="floatingInput">Office Address</label>
              </div>
              <div className="form-floating mb-4 col-md-4 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue="ipsum dolor sit"
                />
                <label htmlFor="floatingInput">Landmark</label>
              </div>
              <div className="form-floating mb-4 col-md-4 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue="lorem"
                />
                <label htmlFor="floatingInput">City</label>
              </div>
              <div className="form-floating mb-4 col-md-4 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue="lorem"
                />
                <label htmlFor="floatingInput">State</label>
              </div>
              <div className="form-floating text-center ps-0">
                <a className="comman_btn shadow" href="javascript:;">
                  <span>Use This Address</span>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4 mb-lg-0 mb-md-4 mb-4">
          <div className="contact_form border bg-white align-items-center shadow p-4">
            <div className="myaccount_profile row mb-4 align-items-center">
              <div className="col">
                <h3 className="top_headd">Other</h3>
              </div>
              <div className="col-auto text-end">
                <a className="comman_btn shadow" href="javascript:;">
                  <span>Edit</span>
                </a>
              </div>
            </div>
            <form className="row ms-0" action="">
              <div className="form-floating mb-4 col-md-6 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  defaultValue="UAE"
                />
                <label htmlFor="name">Your Country</label>
              </div>
              <div className="form-floating mb-4 col-md-6 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  defaultValue="Mohd. Arbab"
                />
                <label htmlFor="number">Full Name</label>
              </div>
              <div className="form-floating mb-4 col-md-6 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue="+966 23423423422"
                />
                <label htmlFor="floatingInput">Mobile Number</label>
              </div>
              <div className="form-floating mb-4 col-md-6 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue={23423}
                />
                <label htmlFor="floatingInput">Pincode</label>
              </div>
              <div className="form-floating mb-4 col-md-12 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue="Lorem ipsum dolor sit amet consectetur"
                />
                <label htmlFor="floatingInput">Address</label>
              </div>
              <div className="form-floating mb-4 col-md-4 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue="ipsum dolor sit"
                />
                <label htmlFor="floatingInput">Landmark</label>
              </div>
              <div className="form-floating mb-4 col-md-4 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue="lorem"
                />
                <label htmlFor="floatingInput">City</label>
              </div>
              <div className="form-floating mb-4 col-md-4 ps-0">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  defaultValue="lorem"
                />
                <label htmlFor="floatingInput">State</label>
              </div>
              <div className="form-floating text-center ps-0">
                <a className="comman_btn shadow" href="javascript:;">
                  <span>Use This Address</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
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
  <div
    className="modal fade login_modal_main"
    id="logout"
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
            <h2 className="mb-3">Logout</h2>
            <p>
              After logging out of your account you will be not able to access.
            </p>
            <div className="pt-2">
              <a
                href="javascript:;"
                className="comman_btn shadow mb-3"
                data-bs-dismiss="modal"
                type="submit"
              >
                <span>Confirm</span>
              </a>
              <a
                className="forgot_password w-100"
                data-bs-dismiss="modal"
                href="javascript:;"
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

)}

export default MySavedAddress;