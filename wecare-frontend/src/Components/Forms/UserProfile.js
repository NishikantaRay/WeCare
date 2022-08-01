import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Usersignup from '../view/Usersignup';
function UserProfile() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [showuserid, setshowuserid] = useState(false);
  const [userId,setuserId]=useState('')
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(name, mobile, dob, pincode, state, password, email, city, country, gender);
    axios.post('http://localhost:4031/api/v1/users/user/userRegister',
      {
        name: name,
        email: email,
        phoneNumber: mobile,
        password: password,
        api_key: "registeruser",
        dateofbirth: dob,
        gender: gender,
        pincode: pincode,
        city: city,
        country: country,
        state: state
      }).then(res => {
        if(res.data.code===200){
          setshowuserid(true)
          setuserId(res.data.data.userid)
        }
        console.log(res);
      }).catch(err => {
        console.log(err);
      })

  }
  return (
    <>
      {(!showuserid) ? <div className="img-background">
        <br />
        <div className="container">
          <div className="card-home-4">
            <h4 className='text-center'><img src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png" className='img-size-2' id="icon" alt="User Icon" />User Profile</h4>
            <form onSubmit={(e) => { handelSubmit(e) }}>
              <div className="row">
                <div className="col-md-6 col-12">

                  <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Name"
                      name='name'
                      value={name}
                      onChange={(e) => { setName(e.target.value) }}
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Mobile Number</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="exampleInputEmail2"
                      aria-describedby="emailHelp"
                      placeholder="Enter Mobile Number"
                      name='mobile'
                      value={mobile}
                      onChange={(e) => { setMobile(e.target.value) }}
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Date of Birth</label>
                    <input
                      type="date"
                      class="form-control"
                      id="exampleInputEmail3"
                      aria-describedby="emailHelp"
                      placeholder="Enter Date of Birth"
                      name='dob'
                      value={dob}
                      onChange={(e) => { setDob(e.target.value) }}
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Pincode</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail4"
                      aria-describedby="emailHelp"
                      placeholder="Enter Pincode"
                      name='Pincode'
                      value={pincode}
                      onChange={(e) => { setPincode(e.target.value) }}
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">State</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail5"
                      aria-describedby="emailHelp"
                      placeholder="Enter State"
                      name='state'
                      value={state}
                      onChange={(e) => { setState(e.target.value) }}
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputEmail6"
                      aria-describedby="emailHelp"
                      placeholder="Enter Password"
                      name='password'
                      value={password}
                      onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail7"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      name='email'
                      value={email}
                      onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group mt-2" onChange={(e) => { setGender(e.target.value) }}>
                    <label for="exampleInputEmail1">Gender</label>
                    <div class="form-check ">
                      <input class="form-check-input" type="radio" value="Male" name="flexRadioDefault" id="flexRadioDefault1"

                      />
                      <label class="form-check-label" htmlFor="flexRadioDefault1">
                        Male
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" value="Female" name="flexRadioDefault" id="flexRadioDefault2" />
                      <label class="form-check-label" htmlFor="flexRadioDefault2">
                        Female
                      </label>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">City</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail8"
                      aria-describedby="emailHelp"
                      placeholder="Enter City"
                      name='city'
                      value={city}
                      onChange={(e) => { setCity(e.target.value) }}

                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Country</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail9"
                      aria-describedby="emailHelp"
                      placeholder="Enter Country"
                      name='country'
                      value={country}
                      onChange={(e) => { setCountry(e.target.value) }}
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                </div>

                <div className="conatiner">
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                      <br />
                      <button  type="submit" class="btn input-block-level form-control btn-dark">Register</button>
                    </div>
                    <div className="col-md-2"></div>
                  </div>
                </div>
              </div>
            </form>

          </div>

        </div>
        <br />
      </div> : <Usersignup id={userId}/>}
    </>

  )
}

export default UserProfile