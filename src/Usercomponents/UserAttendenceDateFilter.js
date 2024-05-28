import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function UserAttendenceDateFilter(id) {
    console.log("props => ",id)
    const [startDate, setStartDate] = React.useState();
  const [EndDate, setEndDate] = React.useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [userAttendence, setUserAttendence]= useState([])

  const handleClose = () =>{ 
    setOpen(false)
    console.log("Dates => ",startDate,EndDate)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({start_date:startDate,End_date:EndDate}),
  };
    fetch(`http://localhost:8000/api/Attendence/userAttendence${id}`,requestOptions)
      .then(resp => resp.json())
      .then(resp => {
        console.log("resp", resp)
        setUserAttendence(resp)

    })
};
console.log("In user Attendence Modal response => ",userAttendence)
  return {
    userAttendence,
      render:(
    <div>
    <Button  style={{marginLeft : '20px ' , background:'green' , color : 'white' ,padding:'5px'}} variant='outlined' onClick={handleOpen}>Search Filter</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className='attendanceModal'>
        <Typography className='modalHeading' id="modal-modal-title" variant="h6" component="h2">
          Date filter
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div style={{display : 'flex'}} >

         <div className='dateDiv1' >
        <label htmlFor="">From Date</label>
          <input type="date" name="From Date" onChange={(event) => setStartDate(event.target.value)} className='date' id=""  />

          </div>

        <div className='dateDiv2' >  
          <label htmlFor="">To Date</label>
          <input type="date" name="To Date" onChange={(event) => setEndDate(event.target.value)} className='date' id="" />

          </div>
          </div>

          <Button className='searchButton' onClick={handleClose} variant="contained">Search</Button>

        </Typography>
      </Box>
    </Modal>
  </div>
      )};
}
