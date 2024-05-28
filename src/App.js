import React from 'react';

// import SideBar from './components/SideBar'


import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './components/MainPage';
import EmployeeProfile from './components/EmployeeProfile';
import Attendence from './components/Attendance';
import Application from './components/Application';
import TaskManager from './components/TaskManager';
import Invoices from './components/Invoices';
// import Notification from './components/Notification';
import Holidays from './components/Holidays';
// import reactDom from 'react-dom';
import TeamAnalysis from './components/TeamAnalysis';
// import PrimarySearchAppBar from './components/NavBar';
import AdminDropdown from './components/AdminDropdown';
import {useState}  from 'react';
import {RiMenuLine} from 'react-icons/ri' ;
import Button from '@mui/material/Button';
import RefreshButton from './components/RefreshButton';
import ProfilePage from './UserPages/ProfilePage';

import Login from './Login/Login';
import UserApp from './UserApp';
import AdminApp from './AdminApp';
import routes from '../src/Routes';
import { useRoutes,  } from 'react-router-dom';




function App() {

  // const [isopned, setIsopened] = useState(false);
  
  // const openSidebar = () => {
  //   const mediaSidebar =  document.getElementsByClassName('sidebar')[0] ;
  
  
  //   if (isopned) {
  //     setIsopened(false);
  //      mediaSidebar.classList.remove('sidebarMedia')
  //   }
  //   else{
  //     setIsopened(true);
  //     mediaSidebar.classList.add('sidebarMedia')
  
  //   }
  
  // };


  const routing = useRoutes(routes);

  return (
 <>
    {/* <div  className='AdminDivMain'  >
       <SideBar   />

     <RefreshButton/>
        
     
<div className='divExpand'  >

<div className='responsiveHeader' >

<Button variant="text" onClick={openSidebar} ><RiMenuLine className='menuButt' /></Button>

         
             <img style={{marginLeft : '8px'}} src="https://i2.wp.com/ineptstudio.com/wp-content/uploads/2021/09/logo-dark.png?resize=300%2C26&ssl=1" alt="logo" className="ineptLogo"   />

 </div>


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

      </div> */}
{routing}
{/* <Routes>
<Route path='/' element={<Login/>}/>
<Route path='/users' element={<UserApp/>}/>
<Route path='/admin' element={<AdminApp/>}/>
</Routes> */}

 </>

  );
}

export default App;
