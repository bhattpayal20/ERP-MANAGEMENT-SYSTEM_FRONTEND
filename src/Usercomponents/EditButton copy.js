import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '60%',
//   transform: 'translate(-50%, -50%)',
//   width: '600px',
//   height: '600px',
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

export default function EditButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
   e.preventDefault();

handleClose();
handleClosing();
  }

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
          Are you sure ! , that you want to edit your profile
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
      <Button onClick={handleOpen}  style={{marginLeft :'90px' ,backgroundImage: 'linear-gradient(to 45 deg, #fe7d16 , #f95163)' , color : 'white' , borderRadius : '20px' }} >  EDIT PROFILE   </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  className = 'editProfileModal' >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Profile
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form  >
             
                <div style={{display : 'flex' }} >
                <img   src="https://media-exp1.licdn.com/dms/image/C5603AQEyWoRxZFEEVA/profile-displayphoto-shrink_400_400/0/1637409004760?e=1648684800&v=beta&t=MeZKmPziaqtMzLu6HWWlledaKKMdUf_lhgG5J6fjq8E" alt="err"  style={{height : '100px' , width : '100px' , borderRadius : '50px'}} />
                <input style={{margin : '20px' , marginTop : '30px'}} type="file" name id="image" accept="image/*" />
                </div>
                {/* <label  htmlFor="file" className='EditPic' >EDIT PIC</label> */}
                <TextField  style={{margin : '20px'}} id="filled-basic" label="Name" variant="filled" />
                <TextField style={{margin : '20px'}} id="filled-basic" label="Role" variant="filled" />
                <TextField style={{margin : '20px'}} id="filled-basic" label="Department" variant="filled" />
                <TextField style={{margin : '20px'}} id="filled-basic" label="Job Type" variant="filled" />
                <TextField style={{margin : '20px'}} id="filled-basic" label="Phone No." variant="filled" />
                <TextField style={{margin : '20px'}} id="filled-basic" label="Email" variant="filled" />
                <TextField style={{margin : '20px'}} id="filled-basic" label="Address" variant="filled" />

                {/* <input className='EditInput' type="text" name placeholder="Name" /> */}
                {/* <input className='EditInput' type="text" name placeholder="Designation" />
              
                <input className='EditInput' type="email" name placeholder="Email ID" />
                <input className='EditInput' type="text" name placeholder="PHONE NUMBER" />
                <input className='EditInput' type="text" name placeholder="ADDRESS" /> */}
                <div style={{display : 'flex' , margin : '20px'}} >
                <Button variant="contained"  onClick={handleClickOpen}>Submit</Button>
      <Button variant="outlined" onClick={handleClose} >Close</Button>

                </div>
                
        

            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
    </>
  );
}