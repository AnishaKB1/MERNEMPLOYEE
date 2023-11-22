import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography, withTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbaruser = () => {

  const appBarStyle = {
   backgroundColor: 'rgb(7, 189, 82)'
  };
  return (
    <div>
       <Box sx={{ flexGrow: 1 }} >
    <AppBar position="static" style={appBarStyle}>
      <Toolbar >
        <Typography id='react' variant="h5" component="div" sx={{ flexGrow: 1 }}>
        EmployeeApp
        </Typography>
        <Button  color="inherit" size='large'>
          <Link to = {'/userhome'} style={{color:'white',textDecoration:'none'}}> Home
          </Link> 
         </Button>
        <Button  color="inherit" size='large'>
        <Link to = {'/Logout'} style={{color:'white',textDecoration:'none'}}> Logout
          </Link> 
         </Button>
        
      </Toolbar>
    </AppBar>
  </Box>
    </div>
  );
}

export default Navbaruser;
