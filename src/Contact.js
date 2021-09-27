import React from 'react';

import { NavLink } from 'react-router-dom';

const Contact=()=>{
  return(
    <>
        <div className="my-5">
           <h1 className="text-center">Reach US</h1>
        </div>
        <div className="container contact_div mb-4">
           <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                  <form>
                  <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Full Name" required/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Contact No.</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Mobile Number" required/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Your Queries</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
</div>
 <div className="col-12 pt-2 pb-3">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div className="col-12">
   <button className="btn btn-success text-center" type="submit"><NavLink to="/" className="text-white">Submit form</NavLink></button>
    </div>
                  </form>
              </div>
           </div>
        </div>
    </>
  );
};

export default Contact;