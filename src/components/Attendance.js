import React, { useState, useEffect } from "react";
import MaterialTable from 'material-table'

import Checkbox from "@mui/material/Checkbox";
import { red } from "@mui/material/colors";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import {Button,makeStyles} from '@material-ui/core';



  // Material Ui Button Styling
  const useStyles = makeStyles(theme => ({
    root: {
  '.css-1rwt2y5-MuiButtonBase-root-MuiButton-root': {
    display: 'inline-flex',

    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    outline: '0',
    margin: '0',
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    textDecoration: 'none',
    fontFamily: "Roboto",
    fontWeight: '500',
    fontSize: '0.875rem',
    lineHeight: '1.75',
    letterSpacing:' 0.02857em',
    textTransform: 'uppercase',
    minWidth: '64px',
    padding: '5px 15px',
    borderRadius: '4px',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    border: '1px solid rgba(25, 118, 210, 0.5)',
    backgroundColor: '#1976d2',
    color: '#fff'  }
}
}))

export default function Attendance() {




  // let masterObj = {};
  const [data, setData] = useState([]);
  const [masterObj, setMasterObj] = useState({});
  const [isNewAttendance, setIsNewAttendance] = useState();

  function getAttendance(date){
    let url = "http://localhost:8000/api/Attendence/att";
    if(date){ 
     url = url+`?date=${date}`;
    } 
    fetch(url)
    .then(resp => resp.json())
    .then(resp => {
      console.log("final rsp", resp);
      setIsNewAttendance(resp.isNewAttendance);
      console.log('new att ', isNewAttendance);
      setData(resp.data);
      let bj={}
      resp.data.forEach(d=>{
        bj[d.id]=d.status;
      });
      setMasterObj(bj);
    });
  }

  useEffect(() => {
    getAttendance()
  }, []);
 const [checked, setChecked] = useState(false)

 const handleSubmit=()=>{
              console.log("Submit object",masterObj)
                //  get current date
              let dateObj = new Date();
               let month = String(dateObj.getMonth() + 1).padStart(2, '0');
               let day = String(dateObj.getDate()).padStart(2, '0');
               let year = dateObj.getFullYear();
               let output = year + '-' + month + '-' + day;
               console.log(output)

   //             // cuurent day
              const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
              const d = new Date();
              let getday = weekday[d.getDay()]
              console.log(getday)

              let finalData = [];
          for (const [uid, status] of Object.entries(masterObj)) {
            let obj={};
            obj['user_id'] = uid;
            obj['date'] = output;
            obj['day']=getday
            obj['status'] = status;
            finalData.push(obj);
          }
          console.log("backend data => ",finalData)
          const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(finalData)
                    };
                        let resp =  fetch('http://localhost:8000/api/Attendence/MarkAttendence/', requestOptions);


        // try {
      //         const requestOptions = {
      //             method: 'POST',
      //             headers: { 'Content-Type': 'application/json' },
      //             body: finalData,
      //         };
      //         let resp = await fetch('http://localhost:8000/api/users', requestOptions);
      //       // }
      //   // catch (err) {
      //   //   console.log(err);
      //   // }
      // };
}

  const columns = [
    { title: "Name", field: "name" },
    { title: "Department", field: "department" },
    {
      title: "status",
      field: "status",
      render: (rowData) => (
        <div>
          <input type="radio" id="1" value="Present" name={"status"+rowData.id} checked = {masterObj[rowData.id]==='Present'?true:false}
            className="Present chk"
            onClick={(event)=>{
              changeStatus(rowData.id,event)
            }}
            />
            <label className="attLabel">Present</label>
          <input type="radio" id="2" value="Absent" name={"status"+rowData.id} className="Absent chk" checked = {masterObj[rowData.id]==='Absent'?true:false}
            onClick={(event)=>{
              changeStatus(rowData.id,event)
            }}
            />
            <label className="attLabel">Absent</label>
          <input type="radio" id="3" value="Half Day" name={"status"+rowData.id}  checked = {masterObj[rowData.id] ==='Half Day' ? true : false} className="Half Day chk "
            // onClick={changeStatus(rowData.id)=>}
            onClick={(event)=>{
              changeStatus(rowData.id,event)
            }}
          />
          <label className="attLabel">Half Day</label>
          </div>
      ),
    },
  ];

  function changeStatus(userId, event){
      //  get current date
              let dateObj = new Date();
               let month = String(dateObj.getMonth() + 1).padStart(2, '0');
               let day = String(dateObj.getDate()).padStart(2, '0');
               let year = dateObj.getFullYear();
               let output = year + '-' + month + '-' + day;
               console.log(output)
                // cuurent day
              const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
              const d = new Date();
              let getday = weekday[d.getDay()]
              console.log(getday)
    console.log(event.target.value)
    // document.getElementsByclassName(event.target.className).checked='true'
    let newMasterObj = {...masterObj}
    if(newMasterObj[userId]){  
      newMasterObj[userId] = event.target.value;
    }
    else{
      console.log(event.target.value)
      newMasterObj[userId] = event.target.value;
    }
    setMasterObj(newMasterObj);
  }

const filterDate =()=>{
const date=document.getElementsByClassName("date")[0].value;
  getAttendance(date);
  }

  const classes=useStyles();

  return (
    <>
      <div className="AttendenceDiv">
        <h1 className="AttendenceHead"> Attendence Page </h1>
        <div>
          <input type="date" className="date"
          // value={(event)=>{
          //   console.log("date filter",event.target.value)
          // }}
          ></input>
          <button className="getAttendenceBtn" onClick={filterDate}>Submit</button>
        </div>
        <div className="App" style={{ width: "100%" }}>
        { console.log("mastII => ",masterObj)}
          <MaterialTable
            title="Employee Data"
            data={data}
            columns={columns}
            options={{
              exportButton: true,
            }}
          />
          {isNewAttendance?
          <Button  style={{    backgroundColor: '#1976d2',
          color: '#fff',float:'right', marginTop:'5px',    marginRight: '10px'}} className={classes.root}variant="contained" onClick={handleSubmit}>Submit</Button>
          :
          <Button style={{    backgroundColor: '#1976d2',
          color: '#fff',float:'right', marginTop:'5px',marginRight: '10px'}}  className={classes.root} variant="contained" onClick={handleSubmit}>Update</Button>
          }
        </div>
      </div>
    </>
  )
}
