import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const UserStatus = [
  {
    value: 'Not Started',
    label: 'Not Started',
  },
  {
    value: 'Pending',
    label: 'Pending',
  },
  {
    value: 'Done',
    label: 'Done',
  },

];

export default function InputDropdown() {
  const [status, setStatus] = React.useState('Not Started');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Box

      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div  >
        <TextField



          id="outlined-select-currency"
          select
          label="Select"
          value={status}
          onChange={handleChange}
          helperText="Please select the status"

        >
          {UserStatus.map((option) => (
            <MenuItem  
            key={option.value} value={option.value}   >

              {option.label}
            </MenuItem>
          ))}
          
        </TextField>
     
      </div>
    </Box>
  );
}
