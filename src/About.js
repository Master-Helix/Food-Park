import React from 'react';
import { NavLink } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import p1 from '../src/images/Adani-Greenfeatured_.jpg';
import p2 from '../src/images/IMG_20200103_225040-1024x574.jpg';

import web from "../src/adani Group Corporate Film 2020.mp4";


const About=()=>{
  return(
    <>
      <section id="header2" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                    <div className="col-md-6 pt-3 pr-lg-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                       <h1>
                        About <strong className="brand-name"> Adani & Adani Wilmar</strong></h1>
                          <br/>
                          <h5> We are one of the few large FMCG food companies in India to offer most of the essential kitchen commodities for Indian consumers, including edible oil, wheat flour, rice, pulses and sugar. Our products are offered under a diverse range of brands across a broad price spectrum and cater to different customer groups. 
                       <br/></h5>
                       <h6 className="my-3 pt-3 pb-3 font-weight-bold">
                       As of the date, we have 22 plants across 10 states in India. In addition, as of March 31, 2021, to cater to the excess demand and ensure our presence across different locations in proximity to end customers, we utilized 28 tolling units across India.
                        </h6>
                        <div className="mt-1">
                           <a href="https://www.adani.com/" target="_bl" alt="adani" className="btn-get-started2 mr-4">Learn More About us</a>
                           <NavLink to="/contact" className="btn-get-started2">Need Help?</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                          <video src={web} alt="video" controls controlsList="nodownload"/>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        <h3 className="text-center font-weight-bold">
                         Our Sectors <br/>
                         </h3>
                         <div className=" text-center">

                         <img src={p1} alt="img1" height="50%" width="50%" /> <img src={p2} alt="img1" height="50%" width="50%" />
           </div>

        <h3 className="text-center font-weight-bold mt-lg-5"> Connect with Us  
            <div className="about_btn mt-4 mb-5 ml-4">
               <a href="https://in.linkedin.com/company/adani-wilmar-limited" target="_bla"><button className="btn3 btn-outline-warning mr-4"><LinkedInIcon/></button></a>
               <a href="https://www.instagram.com/adanionline/" target="_bla"><button className="btn3 btn-outline-warning mr-4"><InstagramIcon/></button></a>
               <a href="mailto:info@adaniwilmar.in" target="_bla"><button className="btn3 btn-outline-warning mr-4"><EmailIcon/></button></a>
               
           </div>
          </h3>
    </>
  );
};

export default About;