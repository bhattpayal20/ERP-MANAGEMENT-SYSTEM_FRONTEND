// import logo from './logo.svg';
import React, { useLayoutEffect } from 'react';
import './UserApp.css';
import SideBar from './Usercomponents/SideBar';
// import AdminDropdown from './components/AdminDropdown'
import MainPage from './Usercomponents/MainPage'
import TasksPage from './UserPages/TasksPage'
import ApplicationPage from './UserPages/ApplicationPage'
import AttendancePage from './UserPages/AttendancePage'
import HolidayPage from './UserPages/HolidayPage'
import ProfilePage from './UserPages/ProfilePage'
import {RiMenuLine} from 'react-icons/ri' ;
import UserDropdown from './Usercomponents/UserDropdown'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Navigate } from 'react-router-dom'
import ls from 'localstorage-slim';
import Logout from './components/Logout';



function UserApp() {

  const [data,setData] = useState([])
  useLayoutEffect(() => {
    const token = localStorage.getItem("token")
    fetch("http://localhost:8000/api/users/getUserByToken",{

      // method: 'POST', 
    headers: new Headers({
        'Authorization': 'Basic '+ token, 
        'Content-Type': 'application/x-www-form-urlencoded'
    })
      
    })
      .then(resp => resp.json())
      .then(resp => {
          console.log("get user by token resp => ",resp)
          // console.log("state => ",data)

          setData(resp)
        })
  }, [])

const [isopned, setIsopened] = useState(false);
  
const openSidebar = () => {
  const mediaSidebar =  document.getElementsByClassName('sidebar')[0] ;


  if (isopned) {
    setIsopened(false);
     mediaSidebar.classList.remove('sidebarMedia')
  }
  else{
    setIsopened(true);
    mediaSidebar.classList.add('sidebarMedia')

  }

};
// const auth = localStorage.getItem("isAuthenticated")
// const role = ls.get('Role', { decrypt: true }); // { a: "currentdate", b: "null", c: false, d: 'superman', e: 1234 }
// const token = localStorage.getItem("token")
// if(!auth && token){
//   console.log("In redirect")
//   return <Navigate  to='/'/>
// }
const role = ls.get('role', { decrypt: true });
console.log(role)
// if(!role){
//   console.log('In user Condition')
//   return <Navigate to='/'/>
// }

const auth = localStorage.getItem("isAuthenticated")
if(!auth){
  console.log("Not Authenticated")
  return <Navigate to='/'/>
}
if (role=== 'employee'){
  console.log("Not Role")

  return (
    <div className="Major">

              < SideBar />

            
              
       <div className='divExpand'  >

       <div className='responsiveHeader' >

       <Button variant="text" onClick={openSidebar} ><RiMenuLine className='menuButt' /></Button>

                
        <img style={{marginLeft : '8px'}} src="https://i2.wp.com/ineptstudio.com/wp-content/uploads/2021/09/logo-dark.png?resize=300%2C26&ssl=1" alt="logo" className="ineptLogo"   />

        </div>
        <Logout/>

         {/* <UserDropdown/> */}
                    <Routes>
                      <Route exact path="/" element={<MainPage data={data}/>}/>
                      <Route path="/Dashboard" element={<MainPage data={data}/>}/>
                      <Route path="/TasksPage" element={<TasksPage data={data}/>}/>
                      <Route path="/ApplicationPage" element={<ApplicationPage data={data}/>}/>
                      <Route path="/AttendancePage" element={<AttendancePage data={data}/>}/>
                      <Route path="/HolidayPage" element={<HolidayPage/>}/>
                      <Route path="/ProfilePage" element={<ProfilePage data={data}/>}/>


                      
                    </Routes>

      </div>
 
      
    </div>
  );
}
else{
  return <Navigate to='/'/>
}
}

export default UserApp;
