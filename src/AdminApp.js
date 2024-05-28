import React from 'react';
import SideBar from './components/SideBar'
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './components/MainPage';
import EmployeeProfile from './components/EmployeeProfile';
import Attendence from './components/Attendance';
import Application from './components/Application';
import TaskManager from './components/TaskManager';
import Invoices from './components/Invoices';
import TeamAnalysis from './components/TeamAnalysis';
import Holidays from './components/Holidays';
import {useState}  from 'react';
import {RiMenuLine} from 'react-icons/ri' ;
import Button from '@mui/material/Button';
import RefreshButton from './components/RefreshButton';
import ProfilePage from './UserPages/ProfilePage';
import {Navigate } from 'react-router-dom'
import ls from 'localstorage-slim';
import Logout from './components/Logout';

export default function AdminApp() {
 

    
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
  const role = ls.get('role', { decrypt: true });
const auth = localStorage.getItem("isAuthenticated")
if(!auth){
  console.log("Not Authenticated")
  return <Navigate to='/'/>
}
if (role=== 'admin'){
  console.log("Not Role")

  return (
    <>
    <div  className='AdminDivMain'  >



       <SideBar   />

 
       {/* <PrimarySearchAppBar/> */}

     {/* <AdminDropdown/> */}

     <RefreshButton/>
        
     
<div className='divExpand'  >

<div className='responsiveHeader' >

<Button variant="text" onClick={openSidebar} ><RiMenuLine className='menuButt' /></Button>

         
             <img style={{marginLeft : '8px'}} src="https://i2.wp.com/ineptstudio.com/wp-content/uploads/2021/09/logo-dark.png?resize=300%2C26&ssl=1" alt="logo" className="ineptLogo"   />

 </div>
 <Logout/>


      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route path="/EmployeeProfile" element={<EmployeeProfile/>}/>
        <Route path="/Attendence" element={<Attendence/>}/>
        <Route path="/TaskManager" element={<TaskManager/>}/>
        <Route path="/Application" element={<Application/>}/>
        <Route path="/invoices" element={<Invoices/>}/>
        <Route path="/holidays" element={<Holidays/>}/>
        <Route path="/TeamAnalysis" element={<TeamAnalysis/>}/>
        <Route path="/users/:id" element={<ProfilePage  />}/>
      </Routes>


      </div>

      </div>


 </>
);
  }
  else{
    return <Navigate to='/'/>
  }
}
