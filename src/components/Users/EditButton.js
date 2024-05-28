import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';

const style = {
  position: 'absolute',
  top: '50%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  width: '360px',
  height: '600px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
   e.preventDefault();

handleClose();
  }

  return (
    <div>
      <Button onClick={handleOpen}  style={{marginTop :'110px'}} >  <EditIcon/>   </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Profile
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form  >
             
                
                <img className='userImage'  src="https://media-exp1.licdn.com/dms/image/C5603AQEyWoRxZFEEVA/profile-displayphoto-shrink_400_400/0/1637409004760?e=1648684800&v=beta&t=MeZKmPziaqtMzLu6HWWlledaKKMdUf_lhgG5J6fjq8E" alt="err"  style={{height : '100px' , width : '100px'}} />
                <input className='EditInput' type="file" name id="file" accept="image/*" />
                <label  htmlFor="file" className='EditPic' >EDIT PIC</label>
                <input className='EditInput' type="text" name placeholder="Name" />
                <input className='EditInput' type="text" name placeholder="Designation" />
                <input className='EditInput' type="email" name placeholder="Email ID" />
                <input className='EditInput' type="text" name placeholder="PHONE NUMBER" />
                <input className='EditInput' type="text" name placeholder="ADDRESS" />
                <div style={{display : 'flex'}} >
                <button  className='formButton' style={{ margin: ' 10px'}} onClick={handleClose} >CANCEL</button>
                <button  className='formButton' style={{ margin: ' 10px'}} onClick={handleSubmit} >DONE</button>
                </div>
                
        

            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}