import React from 'react'
import {Link} from "react-router-dom"
export default function Coachsignup(props) {
  return (
    <div>
        <div className="img-background">
            <br /><br />
        <h4 className='text-center '><img src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png" className='img-size-3' id="icon" alt="User Icon" /></h4>
        <h4 className='text-center'>
            You are a Coach Now!
        </h4>
        <h6 className='text-center'>Your Coach id is {props.id}</h6>
        <div className="conatiner">
                <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                    <br />
                    <Link to="/coachlogin">
                    <button type="button" class="btn input-block-level form-control btn-dark">Login Now</button>
                    </Link>
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </div>
        </div>
    </div>
  )
}
