import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import { CartList } from './httpServices/dashHttpService';

const Cart = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("user_id");

  const [count, setCount] = useState(1);

  
  const [product, setProduct] = useState([]);

  const Products = async () => {
    const { data } = await CartList(user);
    if (!data.error) {
      setProduct(data.results?.listing);
    }
  };

  

  useEffect(() => {
   Products()
  }, [])

  return (
    
<>
    <Header/>
  <div className="comman_banner Themecolor_1">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12">
          <h1>Cart</h1>
          <div className="breadcrumbs mt-2 mb-0">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="javscript:;">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Cart
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="cart_page py-5 Themecolor_3">
    <div className="container">
      <div className="row align-items-start">
        <div className="col-lg-8 mb-lg-0 mb-md-4 mb-4">
          <div className="cart_table border px-md-4 px-2 py-md-4 py-2 bg-white">
            <div className="table-responsive">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>Product Details</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                
                <tbody>
                {product?.map((item,index)=> (

                  <tr>
                    <td>
                      <div className="row align-items-center flex-lg-wrap flex-md-nowrap flex-nowrap">
                        <div className="col-auto">
                          <span className="cart_product">
                            <img src="/img/product1.png" alt="" />
                          </span>
                        </div>
                        <div className="col">
                          <div className="cart_content">
                            <h3>{item?.products[0]?.products_Id?.productName}</h3>
                            <p>
                              {item?.products[0]?.products_Id?.description}
                            </p>
                            <a className="remove_btn" >
                              Remove
                            </a>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="number">
                        <span className="minus" onClick={() => 
                          {
                            if(count>1)
                            setCount(count - 1)}}>-</span>
                        <input type="text" value={count} />
                        <span className="plus" onClick={() => setCount(count + 1)}>+</span>
                      </div>
                    </td>
                    <td>
                      <span className="pricetext">${item?.products[0]?.products_Id?.Price * count}
                      </span>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-4 position_sett">
        {product?.map((item,index)=> (
          <div className="product_summry border px-3 py-3 bg-white">
            <div className="sumry_head Themecolor_1 mb-4">Summary</div>
            <div className="row justify-content-between pb-2">
              <div className="col-auto">
                <div className="sumry_left">Subtotal :</div>
              </div>
              <div className="col-auto">
                <div className="sumry_right">${item?.products[0]?.products_Id?.Price * count}.00</div>
              </div>
            </div>
            <div className="row justify-content-between pb-2">
              <div className="col-auto">
                <div className="sumry_left">Shipping (Free) :</div>
              </div>
              <div className="col-auto">
                <div className="sumry_right">$0.00</div>
              </div>
            </div>
            <div className="row justify-content-between pb-2">
              <div className="col-auto">
                <div className="sumry_left">Discount :</div>
              </div>
              <div className="col-auto">
                <div className="sumry_right">$0.00</div>
              </div>
            </div>
            <div className="row justify-content-between pb-2">
              <div className="col-auto">
                <div className="sumry_left">Order Total :</div>
              </div>
              <div className="col-auto">
                <div className="sumry_right">${item?.products[0]?.products_Id?.Price * count}.00</div>
              </div>
            </div>
            <form className="row mx-0 border-top mt-3 pt-3">
              <div className="form-floating col-12 px-0 mb-3">
                {/* <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter Promo Code"
                />
                <label htmlFor="floatingInput">Enter Promo Code</label>
                <a className="comman_btn shadow" href="javascript:;">
                  <span>Apply</span>
                </a> */}
              </div>
            </form>
            <div className="row">
              <div className="col-12 mb-3">
                <p className="Summary_parra">
                  If you wish to add your GST details for this transaction,
                  please contact customer care on 2134234234 before completing
                  your purchase.
                </p>
              </div>
              <div className="col-12">
                <Link to={"/User/Home/Checkout"}
                state={{qty: count}} className="text-decoration-none">
                <a
                  className="comman_btn shadow d-flex justify-content-center shadow-none  px-0"
                >
                  <span className='text-decoration-none'>Procced To Checkout</span>
                </a>
                </Link>
              </div>
            </div>
          </div>
                ))}

        </div>
      </div>
    </div>
  </div>
  <div className="why_to_buy">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-6 border-end">
          <div className="why_to_buy_box">
            <i className="fa fa-truck-fast" />
            <h3>Free Shipping</h3>
          </div>
        </div>
        <div className="col-md-3 col-6 border-end">
          <div className="why_to_buy_box">
            <i className="fa fa-money-bill" />
            <h3>COD Available </h3>
          </div>
        </div>
        <div className="col-md-3 col-6 border-end">
          <div className="why_to_buy_box">
            <i className="fa fa-badge-percent" />
            <h3>Exclusive Deals</h3>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="why_to_buy_box">
            <i className="fa fa-badge-check" />
            <h3>Secured Payment</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer">
    <div className="container pb-5 border-bottom">
      <div className="row">
        <div className="col-md-4 mb-md-0 mb-4">
          <div className="footer_comapny">
            <a href="javascript:;">
              <img src="/img/logo.png" alt="" />
            </a>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              recusandae suscipit a similique nisi dignissimos, nam aspernatur
              debitis eum saepe repudiandae,
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-md-0 mb-4 d-flex justify-content-md-center">
          <div className="footer_comman">
            <h2>THE BASIC</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about-us.html">About Us</a>
              </li>
              <li>
                <a href="contact-us.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-md-center">
          <div className="footer_comman">
            <h2>BORING LEGAL STUFF</h2>
            <ul>
              <li>
                <a href="refund-policy.html">Refund Policy</a>
              </li>
              <li>
                <a href="privacy-policy.html">Privacy Policy</a>
              </li>
              <li>
                <a href="terms-of-service.html">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copy-right py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="cards_footer">
              <a href="javascript:;">
                <img src="/img/Visa.png" alt="" />
              </a>
              <a href="javascript:;">
                <img src="/img/Mastercard.png" alt="" />
              </a>
              <a href="javascript:;">
                <img src="/img/Visa.png" alt="" />
              </a>
              <a href="javascript:;">
                <img src="/img/Mastercard.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-md-4 my-md-0 my-3">
            <div className="copy-right-text">
              <p>© Amania All Rights Reserved 2023</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="social_media text-md-end text-center">
              <a href="javascript:;">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="javascript:;">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="javascript:;">
                <i className="fa-brands fa-twitter" />
              </a>
              <a href="javascript:;">
                <i className="fa-brands fa-tiktok" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
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
</>

)
}

export default Cart;