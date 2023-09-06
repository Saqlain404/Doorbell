import React from 'react'

const RegisterUser = () => {
  return (
    <> <div
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
  </div></>
  )
}

export default RegisterUser;