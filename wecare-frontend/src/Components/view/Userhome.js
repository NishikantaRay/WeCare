import React, { useEffect } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
export default function Userhome() {
    const [user, setUser] = React.useState([]);
    useEffect(() => {
        axios.post('http://localhost:4031/api/v1/users/user/coachDetails')
            .then(res => {
                console.log(res.data.data)
                setUser(res.data.data)
            })
            .catch(err => {
                console.log(err)
            }
            )
        console.log(user);
    }, [])
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
                    <br /><br /><br />
                    <div className="row">
                    <div className="col-md-1"></div>

                        {
                            user.map((user, index) => {
                               
                                return (
                                    <>
                                        
                                        <div className="col-md-5 col-12">

                                            <div className="card-home-7" key={index}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="text-center mb-3">
                                                            <img src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png" className='img-size' id="icon" alt="User Icon" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4>Coach id:{user.coachid}</h4>
                                                        <h6>Date of Birth:{user.dateofbirth}</h6>
                                                        <h6>Mobile:{user.phoneNumber}</h6>
                                                        <h6>Speciality:{user.speciality}</h6>
                                                        <Link to="/appointments"><button type="button"  class="btn input-block-level form-control btn-dark">Book</button></Link>
                                                        
                                                        
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <br /><br />
                                        
                                    </>
                                )

                            })

                        }

<div className="col-md-1"></div>




                    </div>
                </div>
            </div>
            </div>
            )
}
