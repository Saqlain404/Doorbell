import React from 'react'

const AboutUs = () => {
  return (
   
<>
  <div className="top_header">
    <div className="container d-flex align-items-center">
      <marquee behavior="" direction="">
        Amania provides a series of service capabilities to help brands quickly
        complete the product intelligent、sales intelligent and service
        intelligent.
      </marquee>
    </div>
  </div>
  <header className="header_main shadow">
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
              <i className="fa-solid fa-bars-sort" />
            </a>
            <div
              className="offcanvas offcanvas-start menuss_canvas"
              tabIndex={-1}
              id="offcanvasExample1"
              aria-labelledby="offcanvasExample1Label"
            >
              <div className="offcanvas-header border-bottom">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                  <img src="assets/img/logo.png" alt="" />
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
                  <a href="index.html">Home</a>
                  <a href="about-us.html">About Us</a>
                  <a href="cart.html">Cart</a>
                  <a href="contact-us.html">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-8 text-center px-0">
          <div className="header_logo">
            <a href="index.html">
              <img src="assets/img/logo.png" alt="LOGO" />
            </a>
          </div>
        </div>
        <div className="col-md-4 col-2">
          <div className="Heder_iconss">
            <a
              data-bs-toggle="modal"
              data-bs-target="#login"
              className="iconn_same"
              href="javascript:;"
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
              <i className="fa-regular fa-cart-shopping" />
            </a>
            <a className="language_sectin" href="javascript:;">
              <img src="assets/img/saudi_flag1.png" alt="" />
            </a>
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
                <img src="assets/img/product1.png" alt="" />
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
                <img src="assets/img/product1.png" alt="" />
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
                <img src="assets/img/product1.png" alt="" />
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
  <div className="comman_banner Themecolor_1">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12">
          <h1>About Us</h1>
          <div className="breadcrumbs mt-2 mb-0">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="javscript:;">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="about-us comman_padding Themecolor_3">
    <div className="container">
      <div className="row border px-md-3 px-2 py-md-4 py-3 bg-white align-items-center">
        <div className="col-md-6">
          <div className="aboutus_img">
            <img className="rounded" src="assets/img/about.png" alt="" />
          </div>
        </div>
        <div className="col-md-6 ps-lg-5 mt-md-0 mt-4">
          <div className="aboutus_content">
            <h2 className="aboutus_heading">Who we Are?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              facilis inventore suscipit eius explicabo quaerat sit iure sunt
              voluptatum? Dolor ab optio suscipit. Blanditiis optio error fugiat
              odio consequuntur atque? Lorem ipsum ? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Veniam, neque? Voluptates labore
              culpa illo iusto alias odio unde eius totam, illum aliquam
              voluptatibus debitis error aut? Neque consequatur id ullam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              facilis inventore suscipit eius explicabo quaerat sit iure sunt
              voluptatum? Dolor ab optio suscipit. Blanditiis optio error fugiat
              odio consequuntur atque? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="why_to_buy">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-6 border-end">
          <div className="why_to_buy_box">
            <i className="fa-light fa-truck-fast" />
            <h3>Free Shipping</h3>
          </div>
        </div>
        <div className="col-md-3 col-6 border-end">
          <div className="why_to_buy_box">
            <i className="fa-light fa-money-bill" />
            <h3>COD Available </h3>
          </div>
        </div>
        <div className="col-md-3 col-6 border-end">
          <div className="why_to_buy_box">
            <i className="fa-light fa-badge-percent" />
            <h3>Exclusive Deals</h3>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="why_to_buy_box">
            <i className="fa-light fa-badge-check" />
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
              <img src="assets/img/logo.png" alt="" />
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
                <img src="assets/img/Visa.png" alt="" />
              </a>
              <a href="javascript:;">
                <img src="assets/img/Mastercard.png" alt="" />
              </a>
              <a href="javascript:;">
                <img src="assets/img/Visa.png" alt="" />
              </a>
              <a href="javascript:;">
                <img src="assets/img/Mastercard.png" alt="" />
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
</>

)
}

export default AboutUs;