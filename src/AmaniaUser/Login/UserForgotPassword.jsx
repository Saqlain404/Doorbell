import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { userForgotPass } from '../httpServices/LoginHttpService';


const UserForgotPassword = () => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await userForgotPass(data);
    if (!res?.data?.error) {
      localStorage.setItem("email",data.userEmail)
      // navigate("/Admin/OTP-verify");
    }
  };

  return (
    <> <div
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
            <form action=""
                      onSubmit={handleSubmit(onSubmit)}
                      >
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name='userEmail'
                  {...register("userEmail", {
                    required: "Please Enter Your Email",
                    // pattern: {
                    //   value:
                    //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    //   message: "Invalid email address",
                    // },
                  })}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-group mb-0">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#verify"
                  className="comman_btn shadow"
                  type="submit"
                >
                  <span>Send OTP</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div></>
  )
}

export default UserForgotPassword;