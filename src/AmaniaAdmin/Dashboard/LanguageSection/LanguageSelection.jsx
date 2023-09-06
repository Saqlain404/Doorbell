import React from 'react';
import { useNavigate } from 'react-router';
import { useForm } from "react-hook-form";
 

const LanguageSelection = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/Admin/Dashboard");
  }
  return (
    
<>
  <section className="login_page">
    <div className="container-fluid px-0">
      <div className="row justify-content-start">
        <div className="col-4">
          <div className="login_page_form shadow">
            <div className="row">
              <div className="col-12 formheader mb-4 text-center">
                <img src="/img-admin/logo.png" alt="" />
                <h1>Choose Your Language</h1>
              </div>
              <div className="col-12">
                <form className="row form-design" 
                      onSubmit={handleSubmit(onSubmit)}
                      >
                  <div className="language">
                    <div id="google_translate_element" />
                    <div className="language_bax">
                      <div className="flag-lists translation-links d-flex justify-content-center p-0 w-100">
                        <div className="flag-lists_in active">
                          <a
                            className="english shadow text-decoration-none"
                            data-lang="English"
                           
                          >
                            <img
                              className="mr-md-2 ml-md-0 ml-1 flag_img"
                              src="/img-admin/united-kingdom.png"
                            />
                            <span>English</span>
                          </a>
                        </div>
                        <div className="flag-lists_in">
                          <a
                            className="arabic shadow text-decoration-none"
                            data-lang="Arabic"
                            
                          >
                            <img
                              className="mr-md-2 ml-md-0 ml-1 flag_img"
                              src="/img-admin/saudi_flag1.png"
                            />
                            <span>Arabic</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div id="google_translate_element" />
                  </div>
                  <div className="form-group col-12 text-center mt-4 pt-3">
                    <button className="comman_btn" type='submit'>
                      <span>Continue</span>
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
  <div id="google_translate_element" />
  {/* Flag click handler */}
</>

)
}

export default LanguageSelection;