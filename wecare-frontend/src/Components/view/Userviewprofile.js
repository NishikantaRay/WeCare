import React, { useEffect,useState } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
export default function Userviewprofile() {
    const [data,setData]=useState({});
    const items = localStorage.getItem('userid');
    useEffect(() => {
        axios.post('http://localhost:4031/api/v1/users/user/userDetailsbyuserid', { userid: items })

            .then(res => {
                console.log(res.data.data.userData[0]);
                setData(res.data.data.userData[0])
            }
            )
            .catch(err => {
                console.log(err)
            }
            )

    }
        , [])
  return (
    <div>
        <div className="img-background">
                <br /><br />
                <div className='container'>
                <div className="row">
                        <div className="col-md-6">
                            <Link to="/userappointments">
                            <button type="button"  class="btn input-block-level form-control btn-dark">My Appointments</button>
                            </Link>
                        
                        </div>
                        <div className="col-md-6">
                            <Link to="/userprofile">

                        <button type="button"  class="btn input-block-level form-control btn-dark">My Profile</button>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-12">
                        </div>
                        <div className="col-md-7 col-12">
                            <div className="card-home-7">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="text-center mb-3">
                                            <img src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png" className='img-size' id="icon" alt="User Icon" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h3>{data.name}</h3>
                                        <h6 >Email id:{data.email}</h6>
                                        <h6 >Date of Birth:{data.dateofbirth}</h6>
                                        <h6 >Mobile No:{data.phoneNumber}</h6>
                                        <h6 >Address:{data.city},{data.country}</h6>
                                        <h6>Pin:{data.pincode}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
    </div>
  )
}
