// import React from 'react';
import ApplicationModal from '../Usercomponents/ApplicationModal';
import UserDropdown from '../Usercomponents/UserDropdown';
import RefreshButton from '../Usercomponents/RefreshButton';
import Table from '../Usercomponents/Table';


import React, { useState, useEffect,useLayoutEffect,useParams } from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

export default function ApplicationPage(props) {
  console.log("In Application Page =>",props.data.id)

  const [data, setData] = useState([])
  const columns=[
    { title: 'Subject', field: 'sub' },
    { title: 'Reason', field: 'reason'},
    { title: 'From Date', field: 'fromDate', type: 'date' },
    { title: 'To Date', field: 'toDate', type: 'date' },
    { title: 'Status', field: 'remarks' },

  
  ]

  useEffect(() => {
    fetch(`http://localhost:8000/api/application/getUserAppli${props.data.id}`)
      .then(resp => resp.json())
      .then(resp => {
        console.log("resp", resp) 
        setData(resp.data)
      })
  }, [props.data.id])
  
  return (
  
  <div className='Page' >
          {/* <UserDropdown/> */}


   
           <h1 style={{textAlign : 'center' , color : 'darkblue'}} >Application</h1>

           <ApplicationModal data={props.data.id}/>

           <br />
           <br />
           <br />

           <div className='ApplicationRefresh' >
           <RefreshButton/>
           </div>
               
            

            <div  >
           {/* <ApplicationTable/> */}
           <Table title = "Past Applications"  columns={columns} data={data}  />
           </div>
  
  </div>
  
  
  );
}
