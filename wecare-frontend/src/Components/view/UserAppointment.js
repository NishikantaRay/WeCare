import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
export default function UserAppointment() {
  const [data,setData] = useState([]);
  let dat=localStorage.getItem('userid');
  console.log(dat);
  useEffect(()=>{
    axios.post('http://localhost:4031/api/v1/book/bookings/getBookingByUserId',{userid:dat})
    .then(res=>{
      console.log(res);
      setData(res.data.data.BookingData)
    }
    )
    .catch(err=>{
      console.log(err)
    }
    )
  }
  ,[])
  const handelDelete = (id) => {
    axios.post('http://localhost:4031/api/v1/book/bookings/deleteBooking',{bookingid:id})
    .then((response) => {
        console.log(response.data);
        
    }
    )
    .catch((error) => {
        console.log(error);
    }
    )
  }
  return (
    <div>
        <div className="img-background">
      <div className='container'>
        <br /><br />
        <h1 className='text-center  mb-4'>We are at the heart of appropriate care</h1>
        <br />
        <div className="row">
          <div className="col-md-2"></div>
          {
            data.map((data,index)=>{
              return (
                <div className="col-md-4 col-12">
                <div className="card card-home">
                  <div className="card-body">
                    <div className="text-center mb-3">
                    <h4 className='text-center  '>Appointment Date:<br/>{data.date}</h4>
                <h5 className='text-center  '>Slot:{data.slot}</h5>
                <h6 className='text-center  '>BookingID:{data.bookingid}</h6>
                <h6 className='text-center  '>UserID:{data.userid}</h6>
                <h6 className='text-center  '>CoachID:{data.coachid}</h6>
                    </div>
    
                    <div className="form-group">
                      <Link to="/reappointments" className="btn input-block-level form-control btn-success">Reschedule Appointment</Link>
                    </div>
                    <br />
                    <div className="form-group">
                      <button  onClick={(e)=>{handelDelete(data.bookingid)}} className="btn input-block-level form-control btn-danger ">Cancel Appointment</button>
                    </div>
    
                  </div>
                </div>
              </div>
              )
            
            })
          }
         
          
          <div className="col-md-2 "></div>
        </div>
      </div>
    </div>
    </div>
  )
}
