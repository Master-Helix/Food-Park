import React from 'react';
import { NavLink } from 'react-router-dom';


const Account=()=>{

  return(

    <>  

         <div className="my-5">
           <h1 className="text-center">Login</h1>
          </div>
        <div className="container contact_div mb-4">
           <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                  <form>
                  <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">First Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your First Name" required/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Last Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Last Name" required/>
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
  <label for="exampleFormControlInput1" className="form-label">Password</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Password" required/>
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
  <button className="btn btn-danger text-center" type="submit"><NavLink to="/product" className="text-white">Login</NavLink></button>
    </div>
                  </form>
              </div>
           </div>
        </div>
    </>
  );
};

export default Account;


