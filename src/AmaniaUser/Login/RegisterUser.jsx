import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userRegisteration } from "../httpServices/LoginHttpService";

const RegisterUser = () => {
  const [userRegister, setUserRegister] = useState({
    username: "",
    useremail: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegister({ ...userRegister, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { ...userRegister };
    console.log(userData);

    await userRegisteration({
      userName: userData.username,
      userEmail: userData.useremail,
      password: userData.password,
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
  return (
    <>
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
                <form action="" autoComplete="off" onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      autoComplete="off"
                      placeholder="User Name"
                      name="username"
                      value={userRegister.username}
                      onChange={handleChange}
                    />
                    <label htmlFor="username">User Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="test"
                      className="form-control"
                      id="floatingInput"
                      autoComplete="off"
                      placeholder="name@example.com"
                      name="useremail"
                      value={userRegister.useremail}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      autoComplete="off"
                      placeholder="xxxxxxxx"
                      name="password"
                      value={userRegister.password}
                      onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="form-group mb-4 text-start">
                    <input
                      type="checkbox"
                      className=" form-check-input  me-2"
                      name="check"
                      id="check"
                      autoComplete="off"
                    />
                    <label htmlFor="check" className="form-check-label">
                      {"  "}
                       I agree to{" "}
                      <a href="">Terms &amp; Conditions</a>.
                    </label>
                  </div>
                  <div className="form-group mb-0">
                    <button
                      className="comman_btn shadow"
                      data-bs-dismiss="modal"
                      type="submit"
                    >
                      <span>Sign Up</span>
                    </button>
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

export default RegisterUser;
