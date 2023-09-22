import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const OnClick = (e) => {
        e.preventDefault();
        localStorage.removeItem("token-user")
        window.location.reload()
      };

  return (
    <>
    <div className='fixed-top mb-4'>
     <div className="top_header">
        <div className="container d-flex align-items-center">
          <marquee behavior="" direction="">
            Amania provides a series of service capabilities to help brands
            quickly complete the product intelligent、sales intelligent and
            service intelligent.
          </marquee>
        </div>
      </div>
      <header className="header_main shadow bg-white ">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 col-2">
              <div className="Header_menuss text-start">
                <a
                  className="canvas_toggle"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample1"
                  role="button"
                  aria-controls="offcanvasExample1"
                >
                  <i className="fa fa-bars" />
                </a>
                <div
                  className="offcanvas offcanvas-start menuss_canvas"
                  tabIndex={-1}
                  id="offcanvasExample1"
                  aria-labelledby="offcanvasExample1Label"
                >
                  <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                      <img src="/img/logo.png" alt="" />
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="offcanvas-body px-0 pt-0">
                    <div className="offcanvas-menus">
                      <Link to={"/User/Home"}>Home</Link>
                      <Link to={"/User/Home/About-us"}>About Us</Link>
                      <Link to={"/User/Home/Cart"}>Cart</Link>
                      <Link to={"/User/Home/Contact-us"}>Contact Us</Link>
                      <Link data-bs-toggle="modal"
                    data-bs-target="#logout"
                    // onClick={OnClick}
                    >
                    Logout
                  </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-8 text-center px-0">
              <div className="header_logo">
                <a href="index.html">
                  <img src="/img/logo.png" alt="LOGO" />
                </a>
              </div>
            </div>
            <div className="col-md-4 col-2">
              <div className="Heder_iconss">
              {/* <Link >
                    <a className="comman_btn shadow" onClick={OnClick}>
                      <span>Logout</span>
                    </a>
                    </Link> */}
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#login"
                  className="iconn_same"
                  id="modal_click"
                >
                  <i className="fa-regular fa-user" />
                </a>
                <a
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                  className="iconn_same d-md-block d-none"
                >
                  <i className="fa fa-cart-shopping" />
                </a>
                <Link to={"/User/Home/My-profile"}>
                <a className="language_sectin" >
                  <img src="/img/saudi_flag1.png" alt="" />
                </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="offcanvas offcanvas-end cart_canvas"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Shopping Cart
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <div className="cart_canvas_inner">
              <div className="row cart_Product border-bottom py-3">
                <div className="col-auto">
                  <a className="cart_img" href="javascript:;">
                    <img src="/img/product1.png" alt="" />
                  </a>
                </div>
                <div className="col ps-0">
                  <div className="row mb-2">
                    <div className="col">
                      <div className="cart_pdetails">
                        <a href="javascript:;" className="cart_pname">
                          Wi-Fi Smart Video Doorbell
                        </a>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className="col-auto">
                      <a className="delete_product" href="javascript:;">
                        <i className="fa-regular fa-trash-can" />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="cart_pdetails">
                        <div className="number">
                          <span className="minus">-</span>
                          <input type="text" defaultValue={0} />
                          <span className="plus">+</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <span className="product_pricee">$24.99</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row cart_Product border-bottom py-3">
                <div className="col-auto">
                  <a className="cart_img" href="javascript:;">
                    <img src="/img/product1.png" alt="" />
                  </a>
                </div>
                <div className="col ps-0">
                  <div className="row mb-2">
                    <div className="col">
                      <div className="cart_pdetails">
                        <a href="javascript:;" className="cart_pname">
                          Wi-Fi Smart Video Doorbell
                        </a>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className="col-auto">
                      <a className="delete_product" href="javascript:;">
                        <i className="fa-regular fa-trash-can" />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="cart_pdetails">
                        <div className="number">
                          <span className="minus">-</span>
                          <input type="text" defaultValue={0} />
                          <span className="plus">+</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <span className="product_pricee">$24.99</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row cart_Product border-bottom py-3">
                <div className="col-auto">
                  <a className="cart_img" href="javascript:;">
                    <img src="/img/product1.png" alt="" />
                  </a>
                </div>
                <div className="col ps-0">
                  <div className="row mb-2">
                    <div className="col">
                      <div className="cart_pdetails">
                        <a href="javascript:;" className="cart_pname">
                          Wi-Fi Smart Video Doorbell
                        </a>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className="col-auto">
                      <a className="delete_product" href="javascript:;">
                        <i className="fa-regular fa-trash-can" />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="cart_pdetails">
                        <div className="number">
                          <span className="minus">-</span>
                          <input type="text" defaultValue={0} />
                          <span className="plus">+</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <span className="product_pricee">$24.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offcanvas-footer">
            <div className="cart_bottom row">
              <div className="col-6">
                <h3 className="subtotal">Subtotal (3 item) :</h3>
              </div>
              <div className="col-6 text-end">
                <div className="price_total">$24.99</div>
              </div>
              <div className="col-12 mt-2">
                <a
                  className="comman_btn shadow d-flex justify-content-center"
                  href="checkout.html"
                >
                  <span>Checkout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      </div>
    </>
  )
}

export default Header;