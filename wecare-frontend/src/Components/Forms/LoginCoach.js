import React from 'react'
import axios from 'axios'

function LoginCoach() {
  const [coachid, setCoachid] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handellogin = (e) => {
    e.preventDefault();
    console.log(coachid, password);
    axios.post('http://localhost:4031/api/v1/users/user/coachLogin',
    {
      coachid: coachid,
      password: password,
      api_key: "registeruser",
    }).then(res => {
      console.log(res);
      localStorage.setItem('coachid',coachid );
      localStorage.setItem('token',res.data.data.token );
    }).catch(err => {
      console.log(err);
    })
  }
  return (
    <>
       <form onSubmit={(e) => {handellogin(e)}}>
    <div className="img-background">
        <br /><br />
        <div className='container'>
          
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-6 col-12">
                <div className="card-home-3">
                  
                    <h4 className='text-center  mb-4'><img src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png" className='img-size-2' id="icon" alt="User Icon" />Login As Coach</h4>
                    <div class="form-group">
                      <label for="exampleInputEmail1">User ID</label>
                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter coachid"
                        name='coachid'
                        value={coachid}
                        onChange={(e) => { setCoachid(e.target.value) }}
                      />
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Password</label>
                      <input type="password"

                        class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter password"
                        name='password'
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                      />
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <br />
                    <button type="submit" class="btn input-block-level form-control btn-dark">Login</button>
                 
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
         
        </div>
      </div>
    </form>

    </>

  )
}

export default LoginCoach