import React from 'react';
import UserDropdown from '../Usercomponents/UserDropdown';
import RefreshButton from '../Usercomponents/RefreshButton'
import Table from '../Usercomponents/Table';
import { Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

//alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function TasksPage() {
  const { useState,useEffect } = React;
  const [data, setData] = useState([])

  const columns=[
    { title: 'Task', field: 'task' },
    { title: 'From Date', field: 'start_date_time', type: 'date' },
    { title: 'To Date', field: 'due_date_time', type: 'date' },
    { title: 'Status', render : (rowData) => (
      <div>
        {console.log("row data are=>",rowData)}
      <Button variant="contained" style={{backgroundColor: "#01579b",margin: "10px", color: "white",padding: "5px 20px"}} size="small" type= "submit" onClick={(event)=>{handleSubmit(1,event.target.value, rowData.start_date_time, rowData.due_date_time)}} value='DONE'>DONE</Button>
      </div>) 
     },
    { title: 'Admin Remarks', field: 'approval' },


  
  ]

  useEffect(() => {
    fetch(`http://localhost:3800/api/task/user/showtask/1`)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        setData(resp)
      })
  }, [])


  const handleSubmit = (user_id, value, startdate, enddate) => {
  
    // let select = document.getElementById('selected');
    // let value = select.options[select.selectedIndex].value;
    // console.log("selected value=>", value);
    console.log("data", user_id, value, startdate, enddate);
  
    const body = JSON.stringify({
      status: value,
    start_date_time: startdate,
    due_date_time: enddate}); 
    
     fetch(`http://localhost:3800/api/task/updateStatus/${user_id}`,{
      method: 'PUT',
       headers: {
        'Content-Type': "application/json"
               },
      body: body
    }).then( (res) =>{
    res.json()
    console.log(res)
    if(res.ok)
       {
         handleClick();
         fetch(`http://localhost:3800/api/task/user/showtask/1`)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        setData(resp)
      })
       }
   })
   .catch(err => console.log("Err =>", err));
  }
  
  //alert
const [opening, setOpening] = React.useState(false);

const handleClick = () => {
  setOpening(true);
};

const handleClosing = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpening(false);
};

  return (
  <>
  <div className='Page' >

      {/* <UserDropdown/> */}


   
           <h1 style={{textAlign : 'center' , color : 'darkblue'}} >Tasks</h1>

<br />
<br />
<br />


<div className='TaskRefresh' >
           <RefreshButton/>
           </div>

           {/* <TasksTable/> */}
           <Table title="Your Tasks" columns={columns} data={data}/>
  
  </div>
  
  <Snackbar open={opening} autoHideDuration={6000} onClose={handleClosing} style={{backgroundColor : 'green', top: "50px", right: "10px", left: "auto", bottom: "auto"}} >
        <Alert onClose={handleClosing} severity="success"style={{backgroundColor : "green" , color : 'white'}}  sx={{ width: '100%'}}>
          Status updated Successfully!!
        </Alert>
      </Snackbar>

</>  
  );
}
