import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  height : 350,
//   borderRadius : '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UserImage(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><Avatar alt="" src={`https://drive.google.com/thumbnail?id=${props.image}`} className='userImage' style={{borderRadius : '50%' , width : '200px' , height : '200px' , marginTop : '20px' , marginLeft : '40px'}} /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div style={{display : 'flex'}} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Profile Pic
          </Typography>
      <Button onClick={handleClose}  style={{marginLeft : '190px'}} >  <CloseIcon/>  </Button>
      </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Avatar src={`https://drive.google.com/thumbnail?id=${props.image}`} alt="pic"   style={{borderRadius : '50%' , width : '300px' ,height : '300px'   }} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

