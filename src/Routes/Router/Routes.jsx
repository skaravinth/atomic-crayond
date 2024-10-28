import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box'
import '../../App.css'
import '../../font.css'

import Signup from '../../Components/Signup/Signup'
import Signin from '../../Components/Login/Login'
import Forgot from '../../Components/ForgotPassword/Forgotpass'
import Reset from '../../Components/Resetpassword/Reset'
import theme from '../../Theme/Theme'
import { ThemeProvider } from '@mui/material/styles';
import NavbarLayout from '../../Components/LayoutwithNavbar';
import Home from '../../Pages/Home/Home'
const Routing = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Box className="backgroundimage">
              <Signup />
            </Box>
          }
        />
        <Route
          path="/signin"
          element={
            <Box className="backgroundimage">
              <Signin />
            </Box>
          }
        />
        <Route
          path="/forgot"
          element={
            <Box className="backgroundimage">
              <Forgot />
            </Box>
          }
        />
        <Route
          path="/resetpass"
          element={
            <Box className="backgroundimage">
              <Reset />
            </Box>
          }
        />
        <Route element={<NavbarLayout />}>
            <Route path="/home" element={<Home/>}/>
        </Route>
  
      </Routes>
    </Router>
  </ThemeProvider>
  );
}

export default Routing;
