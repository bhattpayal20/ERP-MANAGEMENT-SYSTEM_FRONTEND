import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const style = {
  position: 'absolute',
  top: '50%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  height: '400px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

                        const Alert = React.forwardRef(function Alert(props, ref) {
                          return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
                        });

export default function EditButton({data}) {
  console.log("In Application Modal => ",data)

  

                        const [opened, setOpened] = React.useState(false);
                        const [op, setOp] = React.useState(false);


                        const handleClick = () => {
                          setOpened(true);
                        };
                        const handleClicked = () => {
                          setOp(true);
                        };

                        
                        // const handlingClose = (event , reason) => {
                        //   if(reason === 'cliclaway') {
                        //     return ;
                        //   }
                        // }

                        const handleClosed = (event, reason) => {
                          if (reason === 'clickaway') {
                            return;
                          }

                          setOpened(false);
                          setOp(false);
                        };





  const [values , setValues] = React.useState({
    sub: '',
    reason: '',
    fromDate: '',
    toDate: '',
    userId: '',
  })

  const handleChange = (prop) => (event) => {
    setValues({...values , [prop]: event.target.value});
  }

  const handleSubmit= async (event)=>{
    event.preventDefault();
    const body = {
      sub:values.sub,
      reason:values.reason,
      fromDate:values.fromDate,
      toDate:values.toDate,
      userId:data,
    
  }
  console.log(body);
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  
  
  try{
      const rep1 = await fetch('http://localhost:3800/userSend', requestOptions)
        if(rep1.ok){

           handleClick();

        }
        else {
          handleClicked();
        }
   
  }
  catch(err){
    // console.log("Err ", err);
    handleClicked();
  }
  handleClose();
handleClosing();
  }



  





  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [opening, setOpening] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpening(true);
  };

  const handleClosing = () => {
    setOpening(false);
   
   
  };


  return (
    <>

                  
                      
                  <Snackbar open={opened} autoHideDuration={3000} onClose={handleClosed} style={{color : 'green' ,top : '50' , right : '10px' , left : 'auto', bottom : 'auto'}} >
                    <Alert onClose={handleClosed}  severity="success"  style = {{backgroundColor : '#27c427' , color: 'white'}} sx={{ width: '100%' }}>
                      Application sent Successfully !
                       </Alert>
                       </Snackbar>

                       <Snackbar open={op} autoHideDuration={3000} onClose={handleClosed} style={{color : 'red' ,top : '50' , right : '10px' , left : 'auto', bottom : 'auto'}} >
                    <Alert onClose={handleClosed} style={{backgroundColor :'#e81d1d' , color : 'white'}}  severity="error" sx={{ width: '100%' }}>
                      Error : Application not submitted !
                       </Alert>
                       </Snackbar>
                          


     <div>

      <Dialog
        fullScreen={fullScreen}
        open={opening}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Alert"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure ! , that you want to submit this Application
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClosing}>
            Not Sure
          </Button>
          <Button onClick={handleSubmit} autoFocus>
           Sure
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    
   
    <div>
      <Button onClick={handleOpen}  style={{marginLeft :'90px' , color : 'blue'}} > New Application  </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Leave Application
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            <br />
            <br />
            <form  >


             <label  style={{marginLeft : '25px'}} htmlFor="">From Date</label>
               <input style={{marginLeft : '10px'}} type="date" name="From Date" id="" value = {values.fromDate} onChange={handleChange('fromDate')}/> <br />
               <br />

               <label style={{marginLeft : '25px'}} htmlFor="">To Date</label>
               <input style={{marginLeft : '30px'}} type="date" name="To Date" id="" value = {values.toDate} onChange={handleChange('toDate')} /> <br />
              

                <TextField sx={{".MuiInputLabel-root":{paddingLeft : '20px' , paddingTop : '10px'} }} style={{margin : '5px' ,paddingTop: '20px'}} id="filled-basic" label="Subject" variant="filled" value = {values.sub} onChange={handleChange('sub')} />
                <TextField sx={{".MuiInputLabel-root":{paddingLeft : '20px' , paddingTop : '10px'} }} style={{margin : '5px',paddingTop: '20px'}} id="filled-basic" label="Reason" variant="filled" value = {values.reason} onChange={handleChange('reason')} />


                <div style={{display : 'flex' , margin : '20px'}} >
                <Button style={{padding : '5px' ,color : 'white', backgroundColor : 'blue'}} variant="contained" onClick={handleClickOpen}> Send  </Button>
      <Button  className = 'closeButton' variant="outlined" onClick={handleClose} >Close</Button>

                </div>
                
        

            </form>
          </Typography>
        </Box>
      </Modal>
    </div>

    </>
  );
}