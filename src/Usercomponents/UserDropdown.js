import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom'

export default function UserDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        
      <Button

      // sx={{".MuiButtonBase-root" : {left : '800' , top : '32'}}}

        sx={{
        
            // right:' 0px',
            // margin: '10px',
            // top: '0px',
            // position: 'fixed',
            cursor: 'pointer',
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         <div style={{ display : 'flex' ,color : 'white' }} >
              <AccountCircleIcon className="AdminLogin-icon" />
             {" "}
             <span className="AdminLogin-text">User</span>{" "}
        </div>
      </Button>

 
      <Menu
        // sx = {{".MuiPopover-paper" : { top : '32px' , left : '1436px'}}}


        sx={{".MuiButtonBase-root ":{ padding : '5px' , display : 'block'}}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link  to="/ProfilePage" style={{textDecoration : 'none' , color : 'black'}} >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
