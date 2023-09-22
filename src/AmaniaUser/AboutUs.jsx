import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const AboutUs = () => {
  const navigate = useNavigate();
  
  return (
   
<>
  <Header/>
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
            <img className="rounded" src="/img/about.png" alt="" />
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
  <Footer/>
</>

)
}

export default AboutUs;