import * as React from 'react';
import {  useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

//chip code
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// fetch("http://localhost:3800/api/task/admin/showuser")
//  .then((resp) => resp.json())
//  .then((resp)=> {
//    console.log(resp);
//    console.log(resp[0].name);
//    for(var i=0; i < resp.length;i++){
//      names.push(resp[i].name);
//    }
//    console.log(names);
//  });

// const names = [""];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

//alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Taskmodal(props) {
  const [select, setselect] = React.useState('')
  const { useState,useEffect } = React;

  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    handleClosed();
  };

  const handleSubmit = (e) => {
    // alert("Task added Successfully!!")
    //window.location.reload(true);
    e.preventDefault();
    console.log("selected=>",select)
    const body2 = JSON.stringify({
      name: select,
      task: title,
      start_date_time: value,
      due_date_time: value1,
    });
    console.log("body is => ", body2);
     fetch("http://localhost:3800/api/task/admin/addTask", {
       method: 'POST',
       headers: {
         'Content-Type': "application/json"
                },
       body: body2
     }).then( (res) =>{
     res.json()
     console.log(res)
     if(res.ok)
       {
         handleClick();
       }
    })
    .catch(err => console.log("Err =>", err));

    setTitle("");
    setselect('');
    setValue(null);
    setvalue(null);
    handleClose();
   // console.log(personName,title,value,value1);
  };

  //for chip
  // const theme = useTheme();
  // const [personName, setPersonName] = React.useState([]);
  
  //for chip
  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value,
  //   );
  // };

  //select
  const [user, setUser] = React.useState([]);
  
  useEffect(() => {
      fetch("http://localhost:3800/api/task/admin/showuser", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
      .then((resp) => resp.json())
      .then(resp => {
        console.log("user=>",resp)
        setUser(resp)
      })
  }, []);

  //textfield
  const [title, setTitle] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [approval,setApproval] = React.useState('');
  
  //datetimepicker
  const [value, setValue] = React.useState(new Date());
  const [value1, setvalue] = React.useState(null);

  //dialogbox
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
    <div>
      <Button style={{marginLeft: "896px" ,backgroundColor: "#008CBA",color: "white",padding: "5px 10px", marginTop: "-107px"}} onClick={handleOpen} size="small">Assign Task</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Assign Task
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit}>
            <div style={{marginTop: "10px"}}> 
            <label style={{fontWeight: "500", marginLeft: "-15px"}}>Employee name</label>
            <div>
             {/* //select */}
             <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, width: 400 }}>
        <InputLabel id="demo-simple-select-label">Select employee</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select employee"
          value={select}
          onChange={(event)=>{setselect(event.target.value)}}
          required={true}
        >
          
        {user.map((users) => (
          <MenuItem value={users.name} required>{users.name}</MenuItem>
        ))}
{/* {console.log(select)} */}
          
        </Select>
      </FormControl>
    </Box>

              {/* //chip multiple select */}
           {/* <FormControl sx={{ m: 1, width: 300 }}>
           <InputLabel id="demo-multiple-chip-label">Select employee</InputLabel>
            <Select required sx={{paddingBottom: "10px"}}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
            sx={{    width: '190px', float: "left"}}
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
            </Select>
            </FormControl> */}
            </div>
            </div>
       
       
       <div style={{marginTop: "10px"}}>
         <label style={{fontWeight: "500", marginLeft: "-15px"}}>Task</label>
      <Box
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField required id="outlined-basic" size='small' label="Enter task to assign" variant="outlined" value={title} onChange={event => setTitle(event.target.value)} />
       
       </Box>  
       </div>

    <div style={{marginTop: "6px"}}>
      <label style={{fontWeight: "500", marginLeft: "-15px"}}>Start date</label>
      <div>
       <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker required
        renderInput={(props) => <TextField {...props} />}
        label="start_date_time" 
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
    </div>
    </div>

    <div style={{marginTop: "13px"}}   >
    <label style={{fontWeight: "500", marginLeft: "-15px"}}>Due date</label>
    <div >
    <LocalizationProvider dateAdapter={AdapterDateFns}  >
 
      <DateTimePicker required 
        sx={{".css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {top: "-23%"}}}
        renderInput={(props) => <TextField {...props} />} 
        label="due_date_time"
        value={value1}
        onChange={(newValue) => {
          setvalue(newValue);
        }}
      />
    </LocalizationProvider>
    </div>
      </div>

           <div style={{display: "flex"}}>
            <Button variant="contained" style={{backgroundColor: "#01579b",margin: "10px", color: "white",padding: "5px 20px"}} size="small" type= "submit" onClick={handleSubmit}>Assign</Button>
            <Button type="button" variant="contained" style={{backgroundColor: "rgba(128, 128, 128, 0.87)", margin: "10px", color: "white",padding: "5px 20px"}} onClick={handleClickOpen} size="small">Cancel</Button>
            </div>
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
          {"Task"}
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
          Task added Successfully!!
        </Alert>
      </Snackbar>


    </div>
    </>
  );
}