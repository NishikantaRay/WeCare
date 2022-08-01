import axios from "axios";
import React,{useState} from "react";

function Reschedule() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const handelSubmit=(e)=>{
    e.preventDefault();
    console.log(date,time);
    const items = localStorage.getItem('userid');
    axios.post('http://localhost:4031/api/v1/book/bookings/addBooking',{
      userid:items,
      date:date,
      slot:time,
      coachid:'coach1000',
    }).then(res=>{
      console.log(res.data.data);
    }
    ).catch(err=>{
      console.log(err);
    }
    )
  }
  return (
    <>
      <div className="img-background">
        <br /><br />
        <div className="container">
          <form onSubmit={(e) => { handelSubmit(e) }}>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 col-12">
              <div className="card-home-5">
                <h4 className='text-center '><img src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png" className='img-size-2' id="icon" alt="User Icon" />Reschedule your Appointment</h4>
                <div class="form-group">
                  <label for="exampleInputEmail1">Date of Appointment</label>
                  <input
                    type="date"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Date of Birth"
                    name='dob'
                    value={date}
                    onChange={(e) => { setDate(e.target.value) }}
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                  <div className="form-group" onChange={(e)=>{setTime(e.target.value)}}>
                    <br />
                    <label for="exampleInputEmail1">Prefered Slot</label>
                    <div class="">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  value="9 AM to 10 AM"/>
                      <label class="custom-control-label" for="customCheck1">
                        &nbsp; 9 AM to 10 AM
                      </label>
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  value="10 AM to 11 AM"/>
                      <label class="custom-control-label" for="customCheck1">
                      &nbsp;10 AM to 11 AM
                      </label>
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  value="11 AM to 12 AM"/>
                      <label class="custom-control-label" for="customCheck1">
                      &nbsp; 11 AM to 12 AM

                      </label>
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  value="2 PM to 3 PM"/>
                      <label class="custom-control-label" for="customCheck1">
                      &nbsp; 2 PM to 3 PM
                      </label>
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  value="3 PM to 4 PM"/>
                      <label class="custom-control-label" for="customCheck1">
                      &nbsp; 3 PM to 4 PM
                      </label>
                      <br />
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  value="4 PM to 5 PM"/>
                      <label class="custom-control-label" for="customCheck1">
                      &nbsp; 4 PMto5 PM
                      </label>
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn input-block-level form-control btn-dark">Confirm your Appointment</button>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
          </form>
         


        </div>
      </div>
    </>
  );
}

export default Reschedule;
