import React, { useRef } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' 
import Importcsv from './Importcsv';
import Addholiday from './Addholiday';

export default function Showholiday() {

      const [events, setEvents] = React.useState([]);
      const calendarRef = useRef(null);

     

     
      const handleDatesSet = () => {
        fetch("http://localhost:3800/api/holiday/holidaydetail")
        .then((resp) => resp.json())
        .then((resp)=> {
          console.log("events are=>", resp)
           setEvents(resp)
        })
        .catch(err => console.log("Err =>", err));
      };
    return (
        <>
             

             <div style={{position: "relative", zIndex: 0, width: "97%", marginTop:"30px" ,backgroundImage: 'linear-gradient(lightBlue, #9d00ff)' , padding : '10px' , borderRadius : '20px'}}>         
               <Addholiday/>
              

             <Importcsv/>
             <FullCalendar 
         ref={calendarRef}
         events = {events}
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      //  eventAdd={(event) => handleEventAdd(event)}
        datesSet = {(date) => handleDatesSet(date)}
         />
             </div>
         
         
         
         </>   
    )
}
