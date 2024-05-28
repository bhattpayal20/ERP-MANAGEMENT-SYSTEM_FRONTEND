import React from 'react'
import MaterialTable from 'material-table'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Taskmodal from '../Modals/Taskmodal';
import { Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

//alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Tasktable() {
  const { useState,useEffect } = React;
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3800/api/task/showTask")
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        setData(resp)
      })
  }, [])

//select


const handleSubmit = (user_id, value, startdate, enddate) => {
  
  // let select = document.getElementById('selected');
  // let value = select.options[select.selectedIndex].value;
  // console.log("selected value=>", value);
  console.log("data", user_id, value, startdate, enddate);

  const body = JSON.stringify({
    approval: value,
  start_date_time: startdate,
  due_date_time: enddate}); 
  
   fetch(`http://localhost:3800/api/task/admin/updateTask/${user_id}`,{
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
         fetch("http://localhost:3800/api/task/showTask")
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
            <h1 className='TaskManagerHead' >Displaying Task</h1>
            <div style={{width: "100%", marginLeft: "-17px"}}>
              <Taskmodal/>
              
            <MaterialTable
            columns={[
            { title: 'Name', field: 'user.name'//,headerStyle: {
              //backgroundColor: '#039be5',
              //}
            },
            { title: 'Task', field: 'task' },
            { title: 'Start_date_time', field: 'start_date_time', type: 'numeric' },
            { title: 'Due_date_time', field: 'due_date_time', type: 'numeric' },
            { title: 'Status', field: 'status' },
            { title: 'Approval', render:(rowData) =>(
              <>
              <div style={{display: "flex"}}>
              {/* {console.log("ydeye",rowData)} */}
              {/* {console.log("title=>",approval)}; */}
              <Button variant="contained" style={{backgroundColor: "#008000",margin: "10px", color: "white",padding: "5px 20px", borderRadius: "5px"}} size="small" type= "submit" onClick={(event)=>{handleSubmit(rowData.user.id,event.target.value, rowData.start_date_time, rowData.due_date_time)}} value='APPROVED'>APPROVED</Button>
              <Button variant="contained" style={{backgroundColor: "#C21807",margin: "10px", color: "white",padding: "5px 20px", borderRadius: "5px"}} size="small" type= "submit" onClick={(event)=>{handleSubmit(rowData.user.id,event.target.value, rowData.start_date_time, rowData.due_date_time)}} value='REJECTED'>REJECTED</Button>

           
         </div>
         </>)
          },
            
          ]}
          data={data}
            
                  onRowClick={((evt, data) => setData(data.tableData.id))}
         options={{
        rowStyle: rowData => ({
          backgroundColor: (data === rowData.tableData.id) ? '#EEE' : '#FFF'
                              }),
        headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF'
                    }

                  }}
            

         //options= {{
            //filtering: true,
            //exportButton: true
            
         // }}
          title="Task"
        
        />
        <Snackbar open={opening} autoHideDuration={6000} onClose={handleClosing} style={{backgroundColor : 'green', top: "50px", right: "10px", left: "auto", bottom: "auto"}} >
        <Alert onClose={handleClosing} severity="success"style={{backgroundColor : "green" , color : 'white'}}  sx={{ width: '100%'}}>
          Task updated Successfully!!
        </Alert>
      </Snackbar>

            </div>
            </>
    )
}
