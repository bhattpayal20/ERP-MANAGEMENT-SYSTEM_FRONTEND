import React from 'react'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import  Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

// Dialog box
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';    


import {Navigate } from 'react-router-dom'
export default function Logout() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("isAuthenticated");
      console.log("In Log Out");
      window.location.reload(); 

        };
    const handleLogout = ()=>{
        setOpen(true)

    }
  return (
      <>
    <div className='navbar'>
    <div className='logout'>
    <Tooltip title="Exit" TransitionComponent={Zoom} placement="bottom">
        <button className='btnlogout' onClick={handleLogout}>
        <ExitToAppRoundedIcon fontSize='large'/>
        </button>
        </Tooltip>
        </div>
</div>
<Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={
            ()=>{
                setOpen(false)
            }
        }
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Exit"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are Sure Want To Logout.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>{setOpen(false)}}>
              Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>

      </>
  );
}
