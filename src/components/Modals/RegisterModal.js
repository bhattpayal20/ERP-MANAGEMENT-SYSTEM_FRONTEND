import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InputAdornments from './RegisterForm';
import {makeStyles} from '@material-ui/core'
import { Stack } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  width: "851px",
  height: "540px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const useStyles = makeStyles(theme => ({
  root: {
    '&.MuiButtonBase-root':{
      justifyContent: "center",
    position: 'relative',
    boxSizing: "border-box",
    backgroundColor: 'transparent',
    outline:' 0',
    border: '0',
    margin: '0',
    borderRadius: '0',
    padding: '0',
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    textDecoration: 'none',
    color: 'inherit',
    fontFamily: "Roboto",
    fontWeight: '500',
    fontSize: '0.875rem',
    lineHeight: '1.75',
    letterSpacing: '0.02857rem',
    textTransform: 'uppercase',
    minWidth: '64px',
    padding: '6px 16px',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor: '#1976d2',
    boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"
    },
  }
}))

    

export default function RegisterModal() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Stack direction="row">
    <Button variant='contained'className={classes.root} style={{margin:"10px"}}  onClick={handleOpen} >Add Employee</Button>
    </Stack>
      <Modal
      sx={{
        '.css-1g8ygb6':{
          borderRadius: '18px',
          border:'none',
          height: '464px'
      }}
    }
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // style={{    width: "751px",
        //   height: "540px"}}
      >
        <Box sx={style}>
        {/* <Form/> */}

        <InputAdornments/>
        <Button variant="contained" style={{position: 'absolute',
    left: '51%',
    top: '80.5%',
    background: '#e0e0e0',
    color: 'black'}} onClick={handleClose}>
          Cancel
        </Button>
        </Box>
      </Modal>
    </>
  );
}
