import React from 'react'
import Login from './Login/LoginUser';
import ForgotPassword from './Login/ForgotPassword';
import Verification from './Login/Verification';
import ResetPassword from './Login/ResetPassword';
import RegisterUser from './Login/RegisterUser';

const Home = () => {
  return (
    
    <>
      <div className="top_header">
        <div className="container d-flex align-items-center">
          <marquee behavior="" direction="">
            Amania provides a series of service capabilities to help brands
            quickly complete the product intelligent、sales intelligent and
            service intelligent.
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
                  <img src="/img/logo.png" alt="LOGO" />
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
                  <i className="fa fa-cart-shopping" />
                </a>
                <a className="language_sectin" href="javascript:;">
                  <img src="/img/saudi_flag1.png" alt="" />
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
      <div className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-0 order-1 mt-md-0 mt-4">
              <div className="banner_part_left">
                <h1>
                  Always know who's <br /> at the door
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam, explicabo! Animi aperiam ex perferendis, provident
                  doloremque sequi eos repellendus quas incidunt sunt eligendi
                  commodi sint minus aspernatur quod illum ipsam!
                </p>
                <a className="comman_btn shadow" href="javascript:;">
                  <span>Shop Now</span>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner_part_img text-center">
                <img src="/img/product1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="features comman_padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="Comman_heading">
                <h2>Smart Features for a Smarter Life </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, atque id quisquam.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 order_changedd">
              <div className="row">
                <div className="col-lg-6 col-md-4 col-6 d-flex align-items-stretch mb-4">
                  <div className="features_box shadow">
                    <span className="features_icon">
                      <i className="fa fa-battery-three-quarters" />
                    </span>
                    <h3>Battery Powered</h3>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-6 d-flex align-items-stretch mb-4">
                  <div className="features_box shadow">
                    <span className="features_icon">
                      <i className="fa fa-plug" />
                    </span>
                    <h3>Cabel Powered (AC/DC12-24)</h3>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-6 d-flex align-items-stretch mb-4">
                  <div className="features_box shadow">
                    <span className="features_icon">
                      <i className="fa fa-high-definition" />
                    </span>
                    <h3>1080P HD Video</h3>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-6 d-flex align-items-stretch mb-4">
                  <div className="features_box shadow">
                    <span className="features_icon">
                      <i className="fa fa-telescope" />
                    </span>
                    <h3>130 Deg Wide-angel Camera lens</h3>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-6 d-flex align-items-stretch mb-md-0 mb-4">
                  <div className="features_box shadow">
                    <span className="features_icon">
                      <i className="fa fa-umbrella" />
                    </span>
                    <h3>IP65 Waterproof</h3>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-6 d-flex align-items-stretch mb-md-0 mb-4">
                  <div className="features_box shadow">
                    <span className="features_icon">
                      <i className="fa fa-moon" />
                    </span>
                    <h3>Night Vision</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 my-lg-0 my-md-4 mt-0 mb-4">
              <div className="features_imgg text-center">
                <img src="/img/product1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-4 col-6 d-flex align-items-stretch mb-4">
                  <div className="features_box shadow">
                    <span className="features_icon">
                      <i className="fa fa-person-walking-dashed-line-arrow-right" />
                    </span>
                    <h3>PIR Motion Alert</h3>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-6 d-flex align-items-stretch mb-4">
                  <div className="features_box shadow">
                    <span className="features_icon">
                      <i className="fa fa-wifi" />
                    </span>
                    <h3>2.4GHz Wi-fi Compotible</h3>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-6 d-flex align-items-stretch mb-4">
                  <div className="features_box shadow">
                    <span className="features_icon">
                      <i className="fa fa-mobile" />
                    </span>
                    <h3>Mobile Phone Monitoring</h3>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-6 d-flex align-items-stretch mb-4">
                  <div className="features_box shadow">
                    <span className="features_icon">
                      <i className="fa fa-microphone" />
                    </span>
                    <h3>Two-way Audio</h3>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-6 d-flex align-items-stretch">
                  <div className="features_box shadow">
                    <span className="features_icon">
                      <i className="fa fa-play" />
                    </span>
                    <h3>Real Time Video</h3>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-6 d-flex align-items-stretch">
                  <div className="features_box shadow">
                    <span className="features_icon">
                      <i className="fa fa-hammer" />
                    </span>
                    <h3>Anti Theft Design</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutus comman_padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="aboutus_img">
                <img className="shadow" src="/img/about.png" alt="" />
              </div>
            </div>
            <div className="col-md-6 ps-lg-5 mt-md-0 mt-4">
              <div className="aboutus_content">
                <h2 className="aboutus_heading">About Amania</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione facilis inventore suscipit eius explicabo quaerat sit
                  iure sunt voluptatum? Dolor ab optio suscipit. Blanditiis
                  optio error fugiat odio consequuntur atque? Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Id excepturi earum
                  fugit et sequi iusto eaque molestias debitis, quam quae dolore
                  sint explicabo sit nostrum laboriosam? Illum ab voluptatem
                  ullam? Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Veniam, neque? Voluptates labore culpa illo iusto alias
                  odio unde eius totam, illum aliquam voluptatibus debitis error
                  aut? Neque consequatur id ullam.
                </p>
                <a className="comman_btn shadow" href="javascript:;">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product_details comman_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-md-4 mb-4">
              <div className="product_details_left">
                <div
                  id="carouselExampleDark"
                  className="carousel carousel-dark slide"
                  data-bs-interval="false"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to={0}
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    >
                      <img src="/img/product1.png" alt="" />
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to={1}
                      aria-label="Slide 2"
                    >
                      <img src="/img/product2.jpeg" alt="" />
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to={2}
                      aria-label="Slide 3"
                    >
                      <img src="/img/product5.png" alt="" />
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to={3}
                      aria-label="Slide 4"
                    >
                      <img src="/img/product3.jpeg" alt="" />
                    </button>
                  </div>
                  <div className="carousel-inner">
                    <div
                      className="carousel-item active"
                      data-bs-interval="false"
                    >
                      <div className="details_imgg">
                        <img src="/img/product1.png" alt="" />
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="false">
                      <div className="details_imgg">
                        <img src="/img/product2.jpeg" alt="" />
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="details_imgg">
                        <img src="/img/product5.png" alt="" />
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="details_imgg">
                        <img src="/img/product3.jpeg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product_details_main">
                <h3>Wi-Fi Smart Video Doorbell</h3>
                <p className="description_p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Odio iste
                  delectus
                </p>
                <div className="product__details--info__price mb-3">
                  <span className="current__price">$299.00</span>
                  <span className="old__price">
                    <del>$320.00</del>
                  </span>
                </div>
                <div className="color_product">
                  <strong>Color:</strong>
                  <div className="color_part">
                    <a className="select_color" href="javascript:;">
                      <img src="/img/product1.png" alt="" />
                    </a>
                    <a className="select_color" href="javascript:;">
                      <img src="/img/product1.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="product_info">
                  <p className="product__details--info__meta--list">
                    <strong>Min.Order:</strong> <span>1000 Pieces</span>{" "}
                  </p>
                  <p className="product__details--info__meta--list">
                    <strong>Product model:</strong> <span>R4115</span>{" "}
                  </p>
                  <p className="product__details--info__meta--list">
                    <strong>Protocol:</strong> <span>Wi-Fi</span>{" "}
                  </p>
                  <p className="product__details--info__meta--list">
                    <strong>Certification:</strong> <span>FCC</span>{" "}
                  </p>
                  <p className="product__details--info__meta--list">
                    <strong>Max Resolution:</strong> <span>1080P/2MP</span>{" "}
                  </p>
                </div>
                <div className="product_btn mt-3 pt-2">
                  <a className="comman_btn shadow" href="javascript:;">
                    <span>Buy Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="THE_DOORBELL comman_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="Comman_heading">
                <h2>The doorbell you’ve been waiting for.</h2>
                <p>
                  Amania Video Doorbell lets you know who's at the door from
                  wherever you are, so you never miss a thing. It replaces your
                  existing wired doorbell and delivers HD video and bright,
                  crisp images, even at night.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-md-4 mb-4 d-flex align-items-stretch">
              <div className="the_doorbell_box">
                <span className="dorrbell_ico">
                <i class="fa-solid fa-video"></i>
                </span>
                <h3>Always be in the know</h3>
                <p>
                  Get instant video when a visitor rings the doorbell Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
                  est doloremque atque alias exercitationem blanditiis
                  veritatis.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-md-4 mb-4 d-flex align-items-stretch">
              <div className="the_doorbell_box">
                <span className="dorrbell_ico">
                  <i className="fa fa-wifi" />
                </span>
                <h3>Wi-Fi Enabled Front Door Security</h3>
                <p>
                  Scare away the intruders with automatic alarm system. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
                  est doloremque atque alias exercitationem blanditiis
                  veritatis.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="the_doorbell_box">
                <span className="dorrbell_ico">
                  <i className="fa fa-stopwatch" />
                </span>
                <h3>Daily Time Lapse</h3>
                <p>
                  Keep a track of all the visitors with a daily log. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Incidunt, est
                  doloremque atque alias exercitationem blanditiis veritatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how_it_work comman_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="Comman_heading">
                <h2>How It Work</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, atque id quisquam.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-md-4 mb-4">
              <div className="work_box shadow">
                <div className="work_box_img">
                  <img src="/img/Dedect-Motion.png" alt="" />
                </div>
                <h3>Dedect Motion</h3>
                <p>
                  When people come to your property. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Distinctio facere et maxime
                  minus nemo doloremque veritatis dolorum explicabo consectetur
                  animi.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-md-4 mb-4">
              <div className="work_box shadow">
                <div className="work_box_img">
                  <img src="/img/Recive-Notifications.png" alt="" />
                </div>
                <h3>Recive Notifications</h3>
                <p>
                  On Your Phone or tablet Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Distinctio facere et maxime
                  minus nemo doloremque veritatis dolorum explicabo consectetur
                  animi.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="work_box shadow">
                <div className="work_box_img">
                  <img src="/img/See-Hear-and-Speak.png" alt="" />
                </div>
                <h3>See, Hear and Speak</h3>
                <p>
                  to visitor in real time from anywhere. Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Distinctio facere et
                  maxime minus nemo doloremque veritatis dolorum explicabo
                  consectetur animi.
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
                <i className="fa fa-badge" />
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, recusandae suscipit a similique nisi dignissimos, nam
                  aspernatur debitis eum saepe repudiandae,
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
    <Login/>
    <ForgotPassword/>
      <Verification/>
    <ResetPassword/>
   <RegisterUser/>
    </>
 
 )
}

export default Home;
