import React from 'react'
import axios from 'axios';
export default function CoachviewProfile() {
    const [coach, setCoach] = React.useState([])
  // const [coachId, setCoachId] = React.useState('')
  const dat=localStorage.getItem('coachid');
  React.useEffect(() => {
    axios
      .post(`http://localhost:4031/api/v1/users/user/coachDetailsbycoachid`,{coachid: dat})
      .then(res => {
        console.log(res.data.data)
        setCoach(res.data.data[0])
      }
      )
      .catch(err => {
        console.log(err)
      }
      )
  }, [])
    return (
        <div>
            <div className="img-background">
                <br /><br />
                <div className='container'>
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
                                        <h4 >Coach id:{coach.coachid}</h4>
                                        <h6 >Date of Birth:{coach.dateofbirth}</h6>
                                        <h6 >Mobile No:{coach.phoneNumber}</h6>
                                        <h6 >Speciality:{coach.speciality}</h6>
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
