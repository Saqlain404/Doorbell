import { async } from 'q';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../httpServices/LoginHttpService';

const LoginUser = () => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  const onClick = (data) => {
    // navigate("/User/Forgot-password");
  }

  const onSubmit = async(info) => {
    console.log(info)
     await userLogin(
      {
        userEmail: info.email,
        password: info.password,
      }
    ).catch((error)=> {
      console.log(error)
     
    }).then((res)=> {
      if(!res.data?.error){
        navigate("");
    }
    })
    console.log(localStorage)
  }
  return (
    <>
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
            <form action=""
                onSubmit={handleSubmit(onSubmit)}
                >
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name='email'
                  {...register("email", {
                    // required: "Please Enter Your Username",
                    // pattern: {
                    //   value:
                    //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    //   message: "Invalid email address",
                    // },
                  })}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="xxxxxxxx"
                  name="password"
                  {...register("password", {
                    required: "Please Enter Your Password",
                    // pattern: {
                    //   value:
                    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    //   message: "Invalid Password",
                    // },
                  })}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="form-floating mb-3 text-start">
                <a
                  className="forgot_password"
                  data-bs-toggle="modal"
                  data-bs-target="#rest"
                  onClick={onClick()}
                >
                  Forgot Your Password?
                </a>
              </div>
              <div className="form-group mb-3">
                <button
                  type='submit'
                  className="comman_btn shadow"
                  data-bs-dismiss="modal"
                  
                >
                  <span>Sign In</span>
                </button>
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
  </div></>
  )
}

export default LoginUser;