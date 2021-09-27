import React from 'react';
import { NavLink } from 'react-router-dom';

import d3 from '../src/images/2.jpg';
import d4 from '../src/images/1.jpg';
import d2 from '../src/images/5.jpg';

import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';

const Home=()=>{
  return(
    <> 
      <section id="header" className=" d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                    <div className="col-md-6 pt-3 pr-lg-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                       <h1>
                          Welcome to <strong className="brand-name">Adani Food Park</strong>
                       </h1>
                       <h2 className="my-3 font-weight-bolder">
                          From FRESH to FOOD, We are Here For You!
                        </h2>
                        <div className="mt-3">
                           <NavLink to="/product" className="btn-get-started font-weight-bolder">Browse Products</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">


                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={d4} className="w-75 h-50" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={d3} className="w-75 h-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={d2} className="w-75 h-50" alt="..."/>
    </div>
  </div>
  
  <br/>
  <button className="btn-get-started2" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <strong>Previous</strong>
  </button>
  <button className="btn-get-started2 ml-5" data-bs-target="#carouselExampleControls" data-bs-slide="next">
         <strong>Next</strong>
  </button>
</div>
                    

                    </div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        <footer className="text-center">
           <p>Made with  <EmojiEmotionsRoundedIcon /> by Rakshit Pandey & Adarsh Kumar Singh</p>
           <p>Students of VIT University, Vellore</p>
        </footer>

    </>
  );
};

export default Home;