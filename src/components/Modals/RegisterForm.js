import * as React from 'react';
import { makeStyles,Box,RadioGroup ,FormLabel,FormControlLabel,Radio,InputAdornment,IconButton,Button} from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { color, style } from '@mui/system';





const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
      '& .MuiButtonBase-root': {
        // margin: theme.spacing(2),
        margin: '13px',
      },
      '& .MuiOutlinedInput-input':{
        height:"30px"
      },
     
  
    },
    radiobtn:{
      color:"blue"
    },
    inputs:{
      padding:'10px',
      marginTop:"20px",
      height:"50px"

    }
  }));

export default function InputAdornments({ handleClose }) {
    const classes = useStyles();
    // const [geterror , setError] = React.useState(false)
    let inputProps = {};
    const [Alert , setAlert] = React.useState(false);
  const [values, setValues] = React.useState({
    fullName: '',
    address:'',
    email:'',
    phone:'',
    password: '',
    confirmPassword:'',
    gender: '',
    role: '',
    status:'',
    department: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
const handleconfirmPass=(event)=>{
    if (values.confirmPassword !== values.password) {

        console.log('error');
        // setError(true)
        // this.setState({confirmPassword: event.target.value})
      }
      else{
          console.log("ok")
      }
}
  const handleSubmit = e => {
    e.preventDefault();
    const body={
        name:values.fullName,
        email:values.email,
        gender:values.gender,
        role:values.role,
        department:values.department,
        phone:values.phone,
        address:values.address,
        password:values.password,
        status:values.status
    }
    if (values.confirmPassword !== values.password) {
      
      console.log('error');
      alert("Passwords do not match")
      // setError(true)
      // this.setState({confirmPassword: event.target.value})
    }
    else{
      console.log(body);
      try {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
      };
      let resp =  fetch('http://localhost:8000/api/users/add', requestOptions);
      resp.json()
      .then(resp=>{
        console.log(resp)
        if(resp.ok){
          handleClose(true)
          setAlert(true)
        }
      })
        
      } catch (error) {
        
      }
    }
    // handleClose();
  };

  return (
    // <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
    <form className={classes.root} onSubmit={handleSubmit}>

    <div style={{marginTop:"23px"}}>
        <TextField
        
        sx={{
          '.MuiOutlinedInput-input':{
            paddingLeft:'10px'
          },
          '.MuiFormLabel-root':{
            padding:"7px",
            border:'none'
          },
         
        }}
        style={{position:'relative',top:"24px",left: '-10px'
      }}
        className={classes.inputs}
        label="Full Name"
        variant="outlined"
        required
        value={values.fullName}
        onChange={handleChange('fullName')}
        />

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
                  required
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            style={{height: '0px'}}
          >
            <FormControlLabel  style={{marginLeft: '-45px'
          }} name ="gender" value="Female"onChange={handleChange('gender')}   control={<Radio required className={classes.radiobtn} color='blue' />} label="Female" />
            <FormControlLabel
              style={{ marginLeft: '-45px'
              }}
               name ="gender"value="Male" onChange={handleChange('gender')} control={<Radio  className={classes.radiobtn}color='blue' />} label="Male" />
            <FormControlLabel  style={{ marginLeft: '-45px'
              }} name ="gender" value="Others"onChange={handleChange('gender')} control={<Radio className={classes.radiobtn}color='blue'  />} label="Other" />
          </RadioGroup>
      </FormControl>

      
    <TextField
    sx={{
      '.MuiOutlinedInput-input':{
        paddingLeft:'10px'
      },
      '.MuiFormLabel-root':{
        padding:"7px"
      },
      '.css-18jb1yl-MuiFormControl-root-MuiTextField-root ' :{
        padding: '0px'
    },
    '.MuiFormLabel-root':{
      padding: '0px'

    }
     
    }}
        label="Email"
        variant="outlined"
        type="email"
        required
        value={values.email}
        onChange={handleChange('email')}
      />

    <TextField
     sx={{
      '.MuiOutlinedInput-input':{
        paddingLeft:'10px'
      },
      '.MuiFormLabel-root':{
        padding:"7px"
      },
     
    }}
          id="outlined-number"
          required
          label="Phone"
          type="number"
          value={values.phone}
        onChange={handleChange('phone')}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        

<div style={{display:'flex'}}>
        <FormControl sx={{
      '.MuiOutlinedInput-input':{
        paddingLeft:'10px'
      },
      '.MuiFormLabel-root':{
        padding:"7px"
      },
     
    }} sx={{ m: 1, width: '35ch', }} style={{margin:"7px",marginRight: '7px'}}  variant="outlined"  >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
                  required
            id="outlined-adornment-password"

            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Box  sx={{ minWidth: 120 }} style={{margin:"8px",marginBottom: '16px'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
        sx={{
          '.MuiOutlinedInput-input':{
            paddingTop:"12px",
            paddingLeft:'20px'
          },
          '.MuiFormLabel-root':{
            padding:"7px"
          },}}
                required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.role}
          label="Age"
          onChange={handleChange('role')}
          >
          <MenuItem value="employee" style={{width: "100%"}}>Employee</MenuItem>
          <MenuItem value="admin" style={{width: "100%"}}>Admin</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box  sx={{ minWidth: 120 }} style={{margin:"8px",marginBottom: '16px'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
        sx={{
          '.MuiOutlinedInput-input':{
            paddingTop:"12px",
            paddingLeft:'20px'
          },
          '.MuiFormLabel-root':{
            padding:"7px"
          },}}
                required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.status}
          label="Age"
          onChange={handleChange('status')}
          >
          <MenuItem value="Active" style={{width: "100%"}}>Active</MenuItem>
          <MenuItem value="Inactive" style={{width: "100%"}}>Inactive</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>

      <div style={{display:'flex'}}>
        <FormControl 
         sx={{
          '.MuiOutlinedInput-input':{
            paddingLeft:'10px'
          },
          '.MuiFormLabel-root':{
            padding:"7px"
          },
          '.css-rcuawu-MuiFormLabel-root-MuiInputLabel-root':{
            left: '-16px',
            top: '-10px'
          },
          '.css-18jb1yl-MuiFormControl-root-MuiTextField-root ' :{
            padding: '0px'
        },
        '.MuiFormLabel-root':{
          padding: '0px'

        },
     
    }} style={{margin:"8px"}}  variant="outlined">
          <InputLabel
          helperText="Incorrect entry."
           sx={{ m: 1, width: '25ch',margin: '8px',
         '.MuiFormControl-root':{
          margin: '8px',

        }
      }}  
      htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
          error={false}
          helperText="Incorrect entry."
                  required
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.confirmPassword}
            onChange={handleChange('confirmPassword')}
            onClick={handleconfirmPass()}
            endAdornment={
              <InputAdornment position="end">

                <IconButton
         helperText="Incorrect entry."
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>


        <Box  sx={{ minWidth: 205 }} style={{margin:"8px"}}>
      <FormControl fullWidth>
        <InputLabel  id="demo-simple-select-label">Department</InputLabel>
        <Select
        sx={{
          '.MuiOutlinedInput-input':{
            paddingTop:"8px",
            paddingLeft:'20px',
            marginTop:'5px'
          },
          '.MuiFormLabel-root':{
            padding:"7px"
          },}}
        
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.department}
          label="Department"
          onChange={handleChange('department')}
          >
          <MenuItem value="Web Development" style={{width: "100%"}}>Web Development</MenuItem>
          <MenuItem value="Game Development" style={{width: "100%"}}>Game Development</MenuItem>
          <MenuItem value="App Development" style={{width: "100%"}}>App Development</MenuItem>

        </Select>
      </FormControl>
    </Box>
        </div>
        
        <TextField
        sx={{
          '.MuiOutlinedInput-input':{
            paddingLeft:'10px'
          },
          '.MuiFormLabel-root':{
            padding:"7px"
          },
          '.css-18jb1yl-MuiFormControl-root-MuiTextField-root ' :{
            padding: '0px'
        },
        '.MuiFormLabel-root':{
          padding: '0px'

        }
         
        }}
        label="Address"
        variant="outlined"
        type="text"
        required
        value={values.address}
        onChange={handleChange('address')}
      />
      

    
    </div>
    <div>
        
        <Button type="submit" variant="contained" color="primary" style={{position: 'absolute',
    left: '35%'}}>
          Register
        </Button>
    </div>
</form>
    // </Box>
  );
}
