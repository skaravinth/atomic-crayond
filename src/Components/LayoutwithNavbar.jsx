import React from 'react'
import Navbar from './Navbar/Navbar'
import {Navbarlayout} from './LayoutwithNavbarstyle'
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const LayoutwithNavbar = () => {
  return (
    <Box sx={Navbarlayout.Navbarstruc}>
        <Navbar />
        <Outlet />
    </Box>
  )
}

export default LayoutwithNavbar
