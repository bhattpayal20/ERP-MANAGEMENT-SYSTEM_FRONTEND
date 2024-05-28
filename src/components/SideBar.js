import React ,  {useState} from "react";
import { Link } from "react-router-dom";
import image from "./AdminImg.jpg";
import power from "./power.jpg";
import GridViewIcon from "@mui/icons-material/GridView";
import PeopleIcon from "@mui/icons-material/People";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArticleIcon from "@mui/icons-material/Article";
import ReceiptIcon from "@mui/icons-material/Receipt";
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
// import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import { RiMenuLine } from "react-icons/ri";
import AdminDropdown from "./AdminDropdown"
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

export default function SideBar() {

  const [isExpanded, setIsExpanded] = useState(true);

  const handlingToggler = () => {
    const mediaSidebar =  document.getElementsByClassName('sidebar')[0] ;
    mediaSidebar.classList.remove('sidebarMedia')
};
  
  const handleToggler = () => {

    if (isExpanded) {
      setIsExpanded(false);
      document.getElementsByClassName('divExpand')[0].style.width="90%";
      document.getElementsByClassName('divExpand')[0].style.paddingLeft = "10px";
    }
    else{
      setIsExpanded(true);
      document.getElementsByClassName('divExpand')[0].style.width="75%"
      document.getElementsByClassName('divExpand')[0].style.paddingLeft = "250px"
    }

  };


  return (

    <div>

    <div className= {isExpanded ? "sidebar" : "sidebar collapsed"}>
    <br />
    <div className="sidebar-heading"  >
      <RiMenuLine className="sidebar-icon" style={{marginTop : '20px' , marginLeft : '16px'}} onClick={handleToggler} />
      {/* <h1
        style={{ color: "white", textAlign: "center" }}
        className="sidebar-content">
        Hello Admin
      </h1> */}

      <img src="https://i1.wp.com/ineptstudio.com/wp-content/uploads/2021/07/logo-light.png?w=836&ssl=1" alt="logo" className="sidebar-content"  style={{width : '220px' , height : '15px' ,marginTop : '20px' , marginLeft : '10px'}}  />
      </div>

      

      <hr className="line" style={{width : '100%'}} />
      <br />

<div className="sidebar-items" >  

<Tooltip title="Dashboard" TransitionComponent={Zoom} placement="right">
<Link to="/admin" style={{ textDecoration: "none" , color : 'white'}}>

      <div   key={"1"}  className="item" onClick={handlingToggler} >
        <GridViewIcon className="sidebar-icon" />
          <span className="sidebar-text">Dashboard</span>{" "}
      </div>
      </Link>
      </Tooltip>

<br />

<Tooltip title="Employees" TransitionComponent={Zoom} placement="right">

<Link style={{ textDecoration: "none" , color : 'white'}} to="/admin/EmployeeProfile">

      <div key={"2"} className="item" onClick={handlingToggler} >
        <PeopleIcon className="sidebar-icon" />
          {" "}
          <span className="sidebar-text">Employees</span>{" "}
      </div>
      </Link>
      </Tooltip>

<br />
<Tooltip title="Attendance" TransitionComponent={Zoom} placement="right">

<Link style={{ textDecoration: "none" , color : 'white' }} to="/admin/Attendence">

      <div key={"3"} className="item" onClick={handlingToggler} >
        <AccountBoxIcon className="sidebar-icon" />
          {" "}
          <span className="sidebar-text">Attendance</span>{" "}
      </div>
      </Link>
      </Tooltip>

<br />
<Tooltip title="Task Manager" TransitionComponent={Zoom} placement="right">

<Link style={{ textDecoration: "none" , color : 'white' }} to="/admin/TaskManager">

      <div key={"4"} className="item" onClick={handlingToggler} >
        <TaskAltIcon className="sidebar-icon" />
          {" "}
          <span className="sidebar-text">Task Manager</span>{" "}
      </div>
      </Link>
      </Tooltip>


<br />
<Tooltip title="Applications" TransitionComponent={Zoom} placement="right">

<Link style={{ textDecoration: "none" , color : 'white' }} to="/admin/Application">

      <div key={"5"} className="item" onClick={handlingToggler} >
        <ArticleIcon className="sidebar-icon" onClick={handlingToggler} />
          {" "}
          <span className="sidebar-text">Applications</span>{" "}
      </div>
      </Link>
      </Tooltip>

<br />
<Tooltip title="Invoices" TransitionComponent={Zoom} placement="right">

<Link style={{ textDecoration: "none" , color : 'white' }} to="/admin/invoices">

      <div key={"6"} className="item" onClick={handlingToggler} >
        <ReceiptIcon className="sidebar-icon" />
          {" "}
          <span className="sidebar-text">Invoices</span>{" "}
      </div>
      </Link>
      </Tooltip>


      {/* <div  style={{display : 'flex'}}>
       <NotificationsActiveIcon  style={{marginTop: '26px' , marginLeft: '26px'}}/>
     <Link  style={{textDecoration : "none"}} to="/notification">   <h3  className='sidebar-text'>Notifications</h3> </Link>
     </div> */}

<br />
<Tooltip title="Holidays" TransitionComponent={Zoom} placement="right">

<Link style={{ textDecoration: "none" , color : 'white'}} to="/admin/holidays">

      <div key={"7"} className="item" onClick={handlingToggler}  >
        <HolidayVillageIcon className="sidebar-icon" />
          {" "}
          <span className="sidebar-text">Holidays</span>{" "}
      </div>
      </Link>
      </Tooltip>
<br />

      {/* <div  style={{marginTop : '50px' , marginLeft : '60px'}}>

           <span className="sidebar-text" >    <AdminDropdown/>  </span>


      </div>  */}

        {/* <div className="item" >
              <AccountCircleIcon className="sidebar-icon" />
             {" "}
             <span className="sidebar-text">Admin</span>{" "}
        </div> */}
 

      </div>

    </div>

    </div>
  );
}

