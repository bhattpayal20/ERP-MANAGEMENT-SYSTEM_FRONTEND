import React, { useState } from 'react'
import RegisterModal from './Modals/RegisterModal'
import AllUsers from './Tables/AllUsers'
import UserProfile from './Users/UserProfile'
import {Button,makeStyles} from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';
const Input = styled('input')({
    display: 'none',
  });
  const useStyles = makeStyles(theme => ({
    root: {
  '.css-1rwt2y5-MuiButtonBase-root-MuiButton-root': {
    display: 'inline-flex',

    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
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
    color: '#1976d2'
  }
}
}))


export default function EmployeeProfile() {
  const [file , setfile] = useState();

  const handleCsv = ()=>{
    const fromData = new FormData();
    fromData.append('csv',file)
    console.log("addinf csv",file)
    const requestOptions = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      body: fromData,
  };
    fetch('http://localhost:8000/api/users/csv',requestOptions)
    .then((response)=>response.json())
    .then((resp)=>{
      console.log("csv resp => ",resp)
    })
  }
    const classes=useStyles();

    return (
                    <div className='MainDiv' >
         <h1 className='WorkingTeams'  >Working Teams</h1>
            <div style={{
                position: "relative", textAlign: "center",
                left: '70%',
                margin: '0px',
                width: '291px',
                top: '-27px',
                    }}>

            <RegisterModal/>
            {/* <Button variant='contained'   >Add CSV</Button> */}
           <label htmlFor="contained-button-file" className='registerUploaddBtn' style={{position:'absolute', 
    top: '7px',
    width: '11vw'}}>
      <form   type= 'submit' onClick={handleCsv} encType='multipart/form-data'>
            <Input accept="csv/*" id="contained-button-file" name='csv' multiple type="file" onChange={(event)=>{setfile(event.target.files[0])}} />
            <Button variant="outlined" 
            type="file" accept=".csv"
            style={{
                border: '1px solid rgba(25, 118, 210, 0.5)',
                color: '#1976d2'

            }}
            className={classes.root} component="span">
                Upload CSV
            </Button>
            </form>
            </label>
         
            </div>
        
       <div></div>
    
      <AllUsers/>
        </div>
    )
}
