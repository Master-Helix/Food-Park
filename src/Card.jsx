import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Card=(props)=>{
  return(
    <>
        <div className="col-md-4 col-2 mx-auto mb-5">
          <div className="card border-dark">
              <img src={props.imgsrc}  className="card-img-top w-auto h-25" alt={props.imgsrc}/>
              <div className="card-body text-center">
                 <h3 className="card-title text-center text-capitalize font-weight-bold mt-2">{props.title}</h3>
                 <br/>
                 <h5 className="card-title text-center text-capitalize font-weight-bold mt-2">The price is - Rs. {props.price}</h5>
                 <div className="hello mt-3">
                 <button type="button" class="btn btn-success"><ShoppingCartIcon/>Add in Cart &nbsp;
                 </button>
                 </div>
              </div>
          </div>
        </div>
    </>
  );
};

export default Card;