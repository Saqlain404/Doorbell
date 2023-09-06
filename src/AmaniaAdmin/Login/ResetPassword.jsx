import React from 'react';
// import { useNavigate } from 'react-router';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { adminResetPassword } from "../httpServices/LoginHttpService";

const ResetPassword = () => {
  let email = localStorage.getItem("email")
  console.log(email);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    if (
      data?.confirmPassword !== data?.newPassword &&
      data?.newPassword !== data?.confirmPassword
    ) {
      Swal.fire({
        title: "Error",
        text: "Confirm password should be same as New password",
        icon: "warning",
        button: "ok",
        confirmButtonColor: "#e25829",
      });
    }
    if (
      data?.confirmPassword === data?.newPassword &&
      data?.newPassword === data?.confirmPassword
    ) {
      let formData = {
        userEmail: email,
        newPassword: data?.newPassword,
        confirmPassword: data?.confirmPassword,
      };
      const res = await adminResetPassword(formData);
      if (!res?.data?.error) {
        navigate("/Admin/Login");
      }
    }
  };




  return (
   
<>
  <section className="login_page">
    <div className="container-fluid px-0">
      <div className="row justify-content-start">
        <div className="col-4">
          <div className="login_page_form shadow">
            <div className="row">
              <div className="col-12 formheader mb-4">
                <div className="text-center">
                  <img src="assets/img/logo.png" alt="" />
                </div>
                <h1>Reset Password</h1>
                <p>Enter New Password</p>
              </div>
              <div className="col-12">
                <form className="row form-design" 
                onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group col-12">
                    <label htmlFor="">New Password</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="**********"
                      name="newPassword"
                      id="namee"
                      {...register("newPassword", {
                        required: "Please Enter New Password",
                        // pattern: {
                        //   value:
                        //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        //   message:
                        //     "Password must be 8 characters including one uppercase letter, one special character and alphanumeric characters (example:anasa123@)",
                        // },
                      })}
                    />
                  
                  </div>
                  <div className="form-group col-12">
                    <label htmlFor="">Confirm New Password</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="**********"
                      name="confirmPassword"
                      id="name"
                      {...register("confirmPassword", {
                        required: "Please Enter Confirm Password",
                        // pattern: {
                        //   value:
                        //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        //   message:
                        //     "Password must be 8 characters including one uppercase letter, one special character and alphanumeric characters (example:anasa123@)",
                        // },
                      })}
                    />
                     
                  </div>
                  <div className="form-group col-12">
                    <button className="comman_btn" type='submit'>
                      <span>Save</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

)
}

export default ResetPassword;