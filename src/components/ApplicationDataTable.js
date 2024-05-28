import React from 'react';
import MaterialTable from 'material-table';

import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ApplicationDataTable() {

  const [opened, setOpened] = React.useState(false);
  const [op, setOp] = React.useState(false);
  const [openUp, setOpenUp] = React.useState(false);



  const handleClick = () => {
    setOpened(true);
  };
  const handleClicked = () => {
    setOp(true);
  };
  const handleClickUp = () => {
    setOpenUp(true);
  };

  
  

  const handleClosed = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpened(false);
    setOp(false);
    setOpenUp(false);
  };



  const [values , setValues] = React.useState({
    remarks: '',
    user_id: '',
    fromDate: '',
    toDate: '',
    
  })
  

  
  const handleSubmit = async (event , rowData)=>{
    event.preventDefault()
    if(event.target.value == 'Accepted'){
      handleClick();
    }
    else{
      handleClicked();
    }
    const body = {
      remarks: event.target.value,
      user_id: rowData.user_id,
      fromDate : rowData.fromDate,
      toDate : rowData.toDate,
  }
  console.log(body);
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  
  try{
   const resp1 = await fetch('http://localhost:3800/adminSend', requestOptions)
          if(resp1.ok){
            //alert('sent')
            }
            
   else
      handleClickUp(); 
  }
  catch(err){
    console.log("Err ", err);
   handleClickUp();
  }
  };
  





  const { useState,useEffect } = React;
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3800/getLeaveApp')
      .then(resp => resp.json())
      .then(resp => {
        console.log("resp", resp) 
        setData(resp)
      })
  }, [])

    return (

<>    
      <Snackbar open={opened} autoHideDuration={3000} onClose={handleClosed} style={{color : 'green' ,top : '50' , right : '10px' , left : 'auto', bottom : 'auto'}} >
      <Alert onClose={handleClosed}  severity="success"  style = {{backgroundColor : '#27c427' , color: 'white'}} sx={{ width: '100%' }}>
        Accepted !
         </Alert>
         </Snackbar>

         <Snackbar open={op} autoHideDuration={3000} onClose={handleClosed} style={{color : 'red' ,top : '50' , right : '10px' , left : 'auto', bottom : 'auto'}} >
      <Alert onClose={handleClosed} style={{backgroundColor :'#e81d1d' , color : 'white'}}  severity="error" sx={{ width: '100%' }}>
        Rejected !
         </Alert>
         </Snackbar>

         <Snackbar open={openUp} autoHideDuration={3000} onClose={handleClosed} style={{color : 'red' ,top : '50' , right : '10px' , left : 'auto', bottom : 'auto'}} >
      <Alert onClose={handleClosed} style={{backgroundColor :'#e81d1d' , color : 'white'}}  severity="error" sx={{ width: '100%' }}>
        Status could not sent !!
         </Alert>
         </Snackbar>

        <div className='tables'>
          <MaterialTable
            // style={{backgroundColor : 'blue'}}
            columns={[
            
              { title: 'User Id', field: 'user_id'},
              { title: 'Name', field: 'user.name'},
              { title: 'Department', field: 'user.department'  },
              { title: 'Subject', field: 'sub' },
              { title: 'Reason', field: 'reason'},
              { title: 'From Date', field: 'fromDate', type: 'date' },
              { title: 'To Date', field: 'toDate', type: 'date' },
              { title: 'Remarks', render : rowData => 
              <>
              <div className='Buttons' >   
                 <Button variant="outlined" color="success" value='Accepted' onClick={(event)=>
                 { handleSubmit(event,rowData)
                }}>
             
              Accept
            </Button>
              <Button variant="outlined" color="error" value='Rejected' onClick={(event)=>{
                handleSubmit(event,rowData)
               }} 
              >
              Reject
            </Button>
  </div>

      

         </>

            },

            ]}
   data = {data.data}

     

            // style={{backgroundImage: 'linear-gradient(lightBlue, blue)'}}
            title="Leave Applications"
          />
        </div>
        </>  
      )
}
