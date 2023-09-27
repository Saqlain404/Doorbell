import React, { useEffect, useState } from "react";
import Login from "./Login/LoginUser";
// import ForgotPassword from './Login/UserForgotPassword';
import Verification from "./Login/Verification";
import ResetPassword from "./Login/ResetPassword";
import RegisterUser from "./Login/RegisterUser";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ProductList, AddToCart } from "./httpServices/dashHttpService";
import Swal from "sweetalert2";
import Header from "./Header";
import Footer from "./Footer";


const Home = () => {
  const navigate = useNavigate();

  const userId = localStorage.getItem("user_id");

  const [product, setProduct] = useState([]);

  const Products = async () => {
    const { data } = await ProductList();
    if (!data.error) {
      setProduct(data.results?.productList);
    }
  };
  console.log(product);

  useEffect(() => {
    Products();
  }, []);

  const AddCart = async (p_id, price,u_id) => {
     await AddToCart({
      product_Id: p_id,
      quantity: 1,
      Price: price,
      user_Id: userId,
    }).then((res) => {
      console.log(res?.error?.response?.data?.message);
      if (!res?.error?.response?.data?.error) {
        Swal.fire({
          title: "Added to Cart",
          icon: "success",
          confirmButtonText: "Go To Cart",
          
          confirmButtonColor: "#014a7f",
          showConfirmButton: true,
      }).then((result) => {
        navigate("/User/Home/Cart");
        });
      }else if (res?.error?.response?.data?.message === "Access Denied. No token provided."){
        document.getElementById("modal_click").click()
      }
    }).catch((err) => {
      console.log(err)
      Swal.fire({
        title: "Please login to continue",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#014a7f",
      });
    })
   
  };

  const AddCart1 = async (p_id, price,u_id) => {
    await AddToCart({
     product_Id: "64faa9ef14cd13676823a2e9",
     quantity: "2",
     Price: "244",
     user_Id: "64faa9d714cd13676823a2e7",
   }).then((res) => {
     console.log(res?.error?.response?.data?.message);
     if (!res?.error?.response?.data?.error) {
     }else if (res?.error?.response?.data?.message === "Access Denied. No token provided."){
       document.getElementById("modal_click").click()
     }
   }).catch((err) => {
     console.log(err)
     Swal.fire({
       title: "Please login to continue",
       icon: "error",
       confirmButtonText: "Okay",
       confirmButtonColor: "#014a7f",
     });
   })
  
 };

 

  return (
    <>
     <Header/>
      <div className="banner_part mt-6">
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

                <HashLink className="comman_btn shadow" to="#product" smooth>
                  <span>Shop Now</span>
                </HashLink>
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
                  {product?.map((item, index) => (
                    <div className="carousel-inner">
                      <div
                        className="carousel-item active"
                        data-bs-interval="false"
                      >
                        <div className="details_imgg">
                          <img src={item.productImage[3]} alt="" />
                        </div>
                      </div>
                      <div className="carousel-item" data-bs-interval="false">
                        <div className="details_imgg">
                          <img src={item.productImage[2]} alt="" />
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="details_imgg">
                          <img src={item.productImage[1]} alt="" />
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="details_imgg">
                          <img src={item.productImage[0]} alt="" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {product?.map((item, index) => (
              <div className="col-lg-6">
                <div className="product_details_main" id="product">
                  <h3>{item.productName}</h3>
                  <p className="description_p">{item.description}</p>
                  <div className="product__details--info__price mb-3">
                    <span className="current__price">${item.Price}</span>
                    <span className="old__price">
                      <del>${item.oldPrice}</del>
                    </span>
                  </div>
                  <div className="color_product">
                    <strong>Color:</strong>{"  "} <span>{item.color}</span>
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
                      <strong>Min.Order:</strong>{" "}
                      <span>{item.quantity} Pieces</span>{" "}
                    </p>
                    <p className="product__details--info__meta--list">
                      <strong>Product model:</strong>{" "}
                      <span>{item.productModel}</span>{" "}
                    </p>
                    <p className="product__details--info__meta--list">
                      <strong>Protocol:</strong> <span>{item.protocol}</span>{" "}
                    </p>
                    <p className="product__details--info__meta--list">
                      <strong>Certification:</strong>{" "}
                      <span>{item.certification}</span>{" "}
                    </p>
                    <p className="product__details--info__meta--list">
                      <strong>Max Resolution:</strong>{" "}
                      <span>{item.maxResolution}</span>{" "}
                    </p>
                  </div>
                  <div className="product_btn mt-3 pt-2">
                    <a className="comman_btn shadow me-4" onClick={() => AddCart(
                      item._id, item.Price, item.user_Id
                    )}>
                      <span>Add To Cart</span>
                    </a>
                    <Link to={"/User/Home/Checkout"}>
                    <a className="comman_btn shadow" onClick={() => AddCart1(
                      item._id, item.Price, item.user_Id
                    )}>
                      <span>Buy Now</span>
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
      <Footer/>
      <Login />
      {/* <ForgotPassword/> */}
      <Verification />
      <ResetPassword />
      <RegisterUser />
    </>
  );
};

export default Home;
