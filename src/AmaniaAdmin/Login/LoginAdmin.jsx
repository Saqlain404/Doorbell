import React from 'react';
import { useNavigate } from 'react-router';
import { useForm } from "react-hook-form";
import { adminLogin } from '../httpServices/LoginHttpService';
 

const LoginAdmin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  const onClick = (data) => {
    navigate("/Admin/Forgot-password");
  }

  const onSubmit = async(info) => {
     await adminLogin(
      {
        userName: info.name,
        password: info.password,
      }
    ).catch((error)=> {
      console.log(error)
     
    }).then((res)=> {
      if(!res.data?.error){
        navigate("/Admin/Language-select");
    }
    })
    
  }
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
                <h1>Login for Admin Panel</h1>
                <p>Please enter your email and password</p>
              </div>
              <div className="col-12">
                <form className="row form-design" 
                onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form-group col-12">
                    <label htmlFor="">User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="User@gmail.com"
                      name="name"
                      id="name"
                      {...register("name", {
                        required: "Please Enter Your Username",
                        // pattern: {
                        //   value:
                        //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        //   message: "Invalid email address",
                        // },
                      })}
                    />
                      
                  </div>
                  <div className="form-group col-12">
                    <label htmlFor="">Password</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="**********"
                      name="password"
                      id="name"
                      {...register("password", {
                        required: "Please Enter Your Password",
                        // pattern: {
                        //   value:
                        //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        //   message: "Invalid Password",
                        // },
                      })}
                    />
                     
                  </div>
                  <div className="form-group col-12">
                    <a className="for_got" onClick={onClick}>
                      Forgot Password?
                    </a>
                  </div>
                  <div className="form-group col-12">
                    <button className="comman_btn" type='submit'
                    >
                      <span>Submit</span>
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

export default LoginAdmin;