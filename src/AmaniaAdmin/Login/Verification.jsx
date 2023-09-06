import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { adminVerifyOtp } from "../httpServices/LoginHttpService";
import { useForm } from "react-hook-form";
import OtpInput from "react-otp-input";


const Verification = () => {
   const navigate = useNavigate();
 

  const [value, setValue] = useState("");
  const [counter, setCounter] = useState(0);
  let location = useLocation();
  console.log(location?.state?.email);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const VerifyOtp = async (e) => {
    e.preventDefault();
    const formData = {
      email: location?.state?.email?.email,
      otp: value,
    };
    const res = await adminVerifyOtp(formData);
    if (!res?.data?.error) {
      navigate("/Admin/Reset-password", {
        state: { email: location?.state?.email?.email },
      });
    }
  };
  const ResendOtp = async (e) => {
    setCounter(60);
    e.preventDefault();
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
                  <img src="img-admin/logo.png" alt="" />
                </div>
                <h1>Verification</h1>
                <p>Please enter the OTP received on your Email Address </p>
              </div>
              <div className="col-12">
                <form className="row form-design">
                  <div className="form-group col-12 otp_input d-flex">
                    <input
                      type="text"
                      className="form-control me-3 px-1 text-center"
                      maxLength={1}
                      onChange={setValue}
                      placeholder={2}
                      name="name"
                      id="name"
                    />
                    <input
                      type="text"
                      className="form-control me-3 px-1 text-center"
                      maxLength={1}
                      onChange={setValue}
                      placeholder={4}
                      name="name"
                      id="name"
                    />
                    <input
                      type="text"
                      className="form-control me-3 px-1 text-center"
                      onChange={setValue}
                      maxLength={1}
                      placeholder={6}
                      name="name"
                      id="name"
                    />
                    <input
                      type="text"
                      className="form-control me-3 px-1 text-center"
                      onChange={setValue}
                      maxLength={1}
                      placeholder={8}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="form-group col-12 text-center">
                  {counter ? (
                          <span className="count_Sec"> 00:{counter}</span>
                        ) : null}
                  </div>
                  <div className="form-group col-12 text-center">
                  <label className="text-center" htmlFor="">
                          Didn't received the OTP?
                          {counter ? (
                            <span
                              className="otp-sec mx-1 text-dark"
                              id="resendOTP"
                              onClick={ResendOtp}
                            >
                              Check Your Email.
                            </span>
                          ) : (
                            <span
                              className="otp-sec mx-1 text-primary"
                              id="resendOTP"
                              onClick={ResendOtp}
                              style={{ cursor: "pointer" }}
                            >
                              Request again
                            </span>
                          )}
                        </label>
                  </div>
                  <div className="form-group col-12">
                    <button className="comman_btn" onClick={VerifyOtp}>
                      <span>Confirm</span>
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

export default Verification;