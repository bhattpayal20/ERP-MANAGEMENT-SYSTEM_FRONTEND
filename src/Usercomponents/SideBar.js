import React, { useState } from 'react';
import {RiMenuLine} from 'react-icons/ri' ;
import GridViewIcon from "@mui/icons-material/GridView";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArticleIcon from "@mui/icons-material/Article";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import UserDropdown from './UserDropdown'
import {Link} from 'react-router-dom'


export default function SideBar() {

  const [isExpanded, setIsExpanded] = useState(true);
  // const [isOpened , setIsOpened] = useState();


  const handlingToggler = () => {
      const mediaSidebar =  document.getElementsByClassName('sidebar')[0] ;
      mediaSidebar.classList.remove('sidebarMedia')
  };
  
  const handleToggler = () => {

    if (isExpanded) {
      setIsExpanded(false);
      // localStorage.setItem("sidebar-collapsed", true);
      document.getElementsByClassName('divExpand')[0].style.width="90%";
      document.getElementsByClassName('divExpand')[0].style.paddingLeft = "10px";
    }
    else{
      setIsExpanded(true);
      // localStorage.removeItem("sidebar-collapsed");
      document.getElementsByClassName('divExpand')[0].style.width="75%"
      document.getElementsByClassName('divExpand')[0].style.paddingLeft = "250px"
    }

  };

  return (
  
  <div>

       <div className= {isExpanded ? "sidebar" : "sidebar collapsed"}>

           <div className='sidebar-header'>
             <RiMenuLine className='sidebar-icon' style={{marginTop : '20px'}}  onClick={handleToggler} />
             {/* <h1 className='sidebar-logo' > LOGO </h1> */}
             <img src="https://i1.wp.com/ineptstudio.com/wp-content/uploads/2021/07/logo-light.png?w=836&ssl=1" alt="logo" className="sidebar-logo"  style={{width : '220px' , height : '15px' ,marginTop : '20px' , marginLeft : '10px'}}  />
           </div>
            <hr style={{width : '100%'}} className = 'line' />
           <br />
          
         <div  className='sidebar-items' >


         <div className='mediaUserImage' onClick={handlingToggler} >
         <Link  to={'/profilePage'} style={{textDecoration : 'none' , color : 'white'}} >

           <img src="https://media-exp1.licdn.com/dms/image/C5603AQEyWoRxZFEEVA/profile-displayphoto-shrink_400_400/0/1637409004760?e=1648684800&v=beta&t=MeZKmPziaqtMzLu6HWWlledaKKMdUf_lhgG5J6fjq8E" alt="" style={{width:'80px' , height : '80px' , borderRadius : '50px' }} /> <br />
           </Link>

           <span>Sahil Rohera</span>

         </div>


          <Link  style={{ textDecoration: "none" , color : 'white' }} to="/user">
           <div className='item' onClick={handlingToggler}>
             <GridViewIcon className='sidebar-icon'/>
             <span className='sidebar-text' > Dashboard </span>
           </div>
           </Link>


          <br />
            

          <Link  style={{ textDecoration: "none" , color : 'white' }} to="/user/AttendancePage" >
           <div className='item' onClick={handlingToggler}>
             <AccountBoxIcon className='sidebar-icon'/>
             <span className='sidebar-text' > Attendance </span>
           </div>
           </Link>


<br />
           
           <Link  style={{ textDecoration: "none" , color : 'white' }} to="/user/ApplicationPage" >
           <div className='item' onClick={handlingToggler}>
             <ArticleIcon className='sidebar-icon'/>
             <span className='sidebar-text' > Application</span>
           </div>
           </Link>


<br />

        <Link  style={{ textDecoration: "none" , color : 'white' }} to="/user/TasksPage" >    
              <div className='item' onClick={handlingToggler} >
                <TaskAltIcon className='sidebar-icon'/>
                <span className='sidebar-text' > Tasks </span>
              </div>
        </Link>


<br />

         <Link  style={{ textDecoration: "none" , color : 'white' }} to="/user/HolidayPage"  >
           <div className='item' onClick={handlingToggler}>
             <HolidayVillageIcon className='sidebar-icon'/>
             <span className='sidebar-text' > Holidays </span>
           </div>
           </Link>



             <div className='userDropdown' >

               <span className = 'sidebar-text' >  <UserDropdown/> </span>
               

             </div>



           </div>

       </div>
 
  </div>
  
  );
}
