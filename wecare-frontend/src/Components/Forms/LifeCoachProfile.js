import React,{useState,useEffect} from "react";
import axios from 'axios'
import Coachsignup from "../view/Coachsignup";
function LifeCoachProfile() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [gender,setGender]=useState('');
  const [Speciality,setSpeciality]=useState('')
  const [showcoachid, setshowcoachid] = useState(false)
  const [coachId,setcoachId]=useState('');
  const handelcoach=(e)=>{
    e.preventDefault();
    console.log(name,mobile,dob,password,gender,Speciality);
    axios.post('http://localhost:4031/api/v1/users/user/coachRegister',
      {
        name: name,
        phoneNumber: mobile,
        password: password,
        api_key: "registeruser",
        dateofbirth: dob,
        gender: gender,
        speciality:Speciality
      }).then(res => {
        if(res.data.code===200){
          setshowcoachid(true)
          setcoachId(res.data.data.coachid)
        }
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
  }
  return (
    <>
      {!showcoachid ? <div className="img-background">
        <div className="container">
          <br /><br />

          <div className="card-lifecoach">
            <form onSubmit={(e) => { handelcoach(e) }}>
            <div className="row">
              <h4 className='text-center'><img src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png" className='img-size-2' id="icon" alt="User Icon" />Life Coach Profile</h4>
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
                    We'll never share your Name with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Date of Birth</label>
                  <input
                    type="date"
                    class="form-control"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                    placeholder="Enter Date of Birth"
                    name='dob'
                    value={dob}
                    onChange={(e) => { setDob(e.target.value) }}
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your DOB with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Mobile Number</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="exampleInputEmail3"
                    aria-describedby="emailHelp"
                    placeholder="Enter Mobile Number"
                    name='mobile'
                    value={mobile}
                    onChange={(e) => { setMobile(e.target.value) }}
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your Mobile Number with anyone else.
                  </small>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div class="form-group">
                  <label for="exampleInputEmail1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Password"
                    name='password'
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your password with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Speciality</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Speciality"
                    name='Speciality'
                    value={Speciality}
                    onChange={(e) => { setSpeciality(e.target.value) }}
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your Speciality with anyone else.
                  </small>
                </div>
                <div className="form-group mt-2" onChange={(e)=>{setGender(e.target.value)}}>
                  <label for="exampleInputEmail1">Gender</label>
                  <div class="form-check ">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                    value='Male'
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                      value='Female'
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="conatiner">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <button   type="submit" class="btn input-block-level form-control btn-dark">Register</button>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
            </form>
            
          </div>
        </div>
      </div> : <Coachsignup id={coachId}/>}
    </>

  );
}

export default LifeCoachProfile;
