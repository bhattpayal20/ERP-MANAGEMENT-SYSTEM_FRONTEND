import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {  useTheme } from '@mui/material/styles';
import { RiNeteaseCloudMusicFill } from 'react-icons/ri';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

//form



//alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Addholiday() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    handleClosed();
  };

  const handleSubmit = (e) => {
    
    //window.location.reload(true);
    e.preventDefault();
    const body = JSON.stringify({
      title: title,
      date: date
    });
    console.log("body is => ", body);
     fetch("http://localhost:3800/api/holiday/addHoliday", {
       method: 'POST',
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
       }
    })
    .catch(err => console.log("Err =>", err));

    console.log(body);
    setTitle('');
    setDate(null);
    handleClose();
  };


  //textfield
  const [title, setTitle] = React.useState('');

  //datepicker
  const [date, setDate] = React.useState(new Date());

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

////dialogbox
const [opened, setOpened] = React.useState(false);
const theme = useTheme();
const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

const handleClickOpen = () => {
 setOpened(true);
};

const handleClosed = () => {
 setOpened(false);
 // handleClose();
 
};

  return (
    <>
    <div>
      <Button onClick={handleOpen} style={{marginLeft: "481px", top: "38px"}}>Add holiday</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Event
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form onSubmit={handleSubmit}>
          <div>
      {/* <Box
      // required={true}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  rules={{required: true}} id="outlined-basic" label="Enter holiday name"  variant="outlined" value={title} onChange={event => setTitle(event.target.value)} />
       
       </Box>   */}
       <div style={{marginTop: "1px"}}>
       <label style={{fontWeight: "500", marginLeft: "-15px"}}>Title</label>
       </div>
      
      <div >
      <input placeholder='Enter holiday name' type="text" style={{height: "33px", width: "238px", marginBottom: "18px"}} value={title} onChange={event => setTitle(event.target.value)} required/>
      </div>
       </div>

    <div>
       {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker required
        renderInput={(props) => <TextField {...props} />}
        label="date"
        value={date}
        onChange={(newValue) => {
          setDate(newValue);
        }}
      />
    </LocalizationProvider> */}
    <div style={{marginTop: "1px"}}>
       <label style={{fontWeight: "500", marginLeft: "-15px"}}>Date</label>
       </div>
      
      <div >
      <input placeholder='Enter date' type="date" style={{height: "34px", width: "238px", marginBottom: "18px"}} value={date} onChange={(event) => setDate(event.target.value)} required/>
      </div>
    </div>
    <Button variant="contained" type="submit">Assign</Button>
            <button type="button"  className='btn2' onClick={handleClickOpen}>Cancel</button>
            
          </form>
          </Typography>
        </Box>
      </Modal>

      <Dialog
        fullScreen={fullScreen}
        open={opened}
        onClose={handleClosed}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Holiday"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to cancel?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClosed}>
            No
          </Button>
          <Button onClick={handleClose} autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>


      <Snackbar open={opening} autoHideDuration={6000} onClose={handleClosing} style={{backgroundColor : 'green', top: "50px", right: "10px", left: "auto", bottom: "auto"}} >
        <Alert onClose={handleClosing} severity="success"style={{backgroundColor : "green" , color : 'white'}}  sx={{ width: '100%'}}>
          Holiday added Successfully!!
        </Alert>
      </Snackbar>

    </div>
    </>
  );
}