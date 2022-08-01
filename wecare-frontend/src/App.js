import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Nav/Navbar';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Home/Homepage';
import LifeCoachProfile from './Components/Forms/LifeCoachProfile';
import LoginCoach from './Components/Forms/LoginCoach';
import UserProfile from './Components/Forms/UserProfile';
import Userlogin from './Components/Forms/Userlogin';
import Appointment from './Components/Forms/Appointment';
import Reschedule from './Components/Forms/Reschedule';
import Coachsignup from './Components/view/Coachsignup';
import Usersignup from './Components/view/Usersignup';
import Coachhome from './Components/view/Coachhome';
import CoachviewProfile from './Components/view/CoachviewProfile';
import NoPlan from './Components/view/NoPlan';
import Userhome from './Components/view/Userhome';
import Userviewprofile from './Components/view/Userviewprofile';
import UserAppointment from './Components/view/UserAppointment';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useState } from 'react';
function App() {
  
  return (
      <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path="/userlogin" element={<Userlogin/>}/>
        <Route exact path="/usersignup" element={<UserProfile/>}/>
        <Route exact path='/usersignup' element={<Usersignup/>} />
        <Route exact path="/coachlogin" element={<LoginCoach/>}/>
        <Route exact path="/coachsignup" element={<LifeCoachProfile/>}/>
        <Route exact path='/coachsignup' element={<Coachsignup/>} />
        <Route exact path='/coachhome' element={<Coachhome/>} />
        <Route exact path="/coachviewprofile" element={<CoachviewProfile/>}/>
        <Route exact path='/coachschedules' element={<NoPlan/>} />
        <Route exact path='/userhome' element={<Userhome/>} />
        <Route exact path='/userappointments' element={<UserAppointment/>} />
        <Route exact path='/reappointments' element={<Reschedule/>} />
        <Route exact path='/appointments' element={<Appointment/>} />
        <Route exact path='/userprofile' element={<Userviewprofile/>} />
      </Routes>
    
      
      
      
      {/* <Appointment/> */}
      {/* <Reschedule/> */}
      {/* <Coachsignup/> */}
      {/* <Usersignup/> */}
      
      {/* <Userhome/> */}
      {/* <Userviewprofile/> */}
      {/* <UserAppointment/> */}
      <Footer/>
      </BrowserRouter>
     </>
    
  );
}

export default App;
