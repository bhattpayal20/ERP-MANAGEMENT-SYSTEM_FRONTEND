import React from 'react';
import Showholiday from '../Usercomponents/Showholiday';
import UserDropdown from '../Usercomponents/UserDropdown';

export default function HolidayPage() {
  return (
  
  <div className='Page' >


        {/* <UserDropdown/> */}


   
           <h1 style={{textAlign : 'center' , color : 'darkblue'}} >Holiday</h1>


           <Showholiday/>
  
  </div>
  
  
  );
}
