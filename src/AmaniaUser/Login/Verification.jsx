import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { userVerifyOtp } from '../httpServices/LoginHttpService';

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
    const res = await userVerifyOtp(formData);
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
                  maxLength={1}
                  onChange={setValue}
                  placeholder={2}
                />
                <input
                  type="text"
                  className="form-control mx-1 p-1 text-center"
                  id=""
                  maxLength={1}
                  onChange={setValue}
                  placeholder={4}
                />
                <input
                  type="text"
                  className="form-control mx-1 p-1 text-center"
                  id=""
                  maxLength={1}
                  onChange={setValue}
                  placeholder={9}
                />
                <input
                  type="text"
                  className="form-control mx-1 p-1 text-center"
                  id=""
                  maxLength={1}
                  onChange={setValue}
                  placeholder={7}
                />
              </div>
              <div className="form-group mb-3">
                <div className="time_js">
                {counter ? (
                          <span className="count_Sec"> 00:{counter}</span>
                        ) : null}
                </div>
              </div>
              <div className="form-group mb-3">
                <a
                  href="javascript:;"
                  data-bs-toggle="modal"
                  data-bs-target="#changepass"
                  className="comman_btn shadow"
                  type="submit"
                  onClick={VerifyOtp}
                >
                  <span>Submit</span>
                </a>
              </div>
              <div className="form-group mb-0">
                <div className="resend_otp">
                  Didn't receive the OTP? 
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
                          <a href="javascript:;">Resend OTP?</a>
                </div>
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

export default Verification;