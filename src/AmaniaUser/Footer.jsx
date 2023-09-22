import React from 'react'

const Footer = () => {
  return (
    <>
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
                    <a>Home</a>
                  </li>
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Contact Us</a>
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
                  <a>
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a>
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a>
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a>
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

export default Footer