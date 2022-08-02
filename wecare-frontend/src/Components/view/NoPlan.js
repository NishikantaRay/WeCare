import React from 'react'
import axios from 'axios';
export default function NoPlan() {
  const [coach, setCoach] = React.useState([])
  // const [coachId, setCoachId] = React.useState('')
  const dat=localStorage.getItem('coachid');
  React.useEffect(() => {
    axios
      .post(`http://localhost:4031/api/v1/book/bookings/getBookingByCoachId`,{coachid: dat})
      .then(res => {
        console.log(res.data.data.BookingData)
        setCoach(res.data.data.BookingData)
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
      {coach.length !== 0 ? <div className='container'>
        
                    <br /><br />
          {coach.map((coach, index) => {

            return (<div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-6 col-12">
            <div className="card-home-6">
        
            <h4 className='text-center  '>Appointment Date:<br/>{coach.date}</h4>
            <h5 className='text-center  '>Slot:{coach.slot}</h5>
            <h6 className='text-center  '>BookingID:{coach.bookingid}</h6>
            <h6 className='text-center  '>UserID:{coach.userid}</h6>
          </div>
            </div>
            <div className="col-md-2"></div>
          </div>)

            
          })}
          
          

        </div>:
        <>
        <br /><br />
           <h1 className='text-center'>No Planned schedules yet</h1> 
        </>
            
        }

</div>
    </div>
  )
}
