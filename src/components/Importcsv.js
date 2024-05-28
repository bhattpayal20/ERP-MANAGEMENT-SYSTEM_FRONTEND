import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';


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

export default function Importcsv() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

//formdata
const [selectedFile, setSelectedFile] = React.useState();

const changeHandler = (event) => {
  setSelectedFile(event.target.files[0]);
};


const uploadAction= () => {
    const formData = new FormData();
    // console.log(selectedFile);
		formData.append('csv', selectedFile);

		fetch(
			'http://localhost:3800/api/holiday/fileupload',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});

      
  };
  
    return (
    <div>
      <div style={{width: "50px", height: "20px", float: "right"}}>
      <Button onClick={handleOpen} variant="contained" size="small" style={{marginLeft: "-314px", marginTop: "6px"}}>Upload file</Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Upload csv file
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          
         <form encType="multipart/form-data">
          
        <input type="file" name="csv" onChange={changeHandler} id="csv" required/>
        
       
        <div>
				<button onClick={uploadAction} type="submit" className="btn1">Submit</button>
        <button type="button"  className='btn2' onClick={handleClose}>Cancel</button> 
        </div>
			  
        
        </form>
        
         
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
