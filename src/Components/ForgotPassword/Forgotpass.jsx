import { Box,Typography } from '@mui/material'
import React from 'react'
import './Forgotpass.css';
import Logo from '../../assets/Signuplogo';
import Input from '../../Components/Button/Inputfield/Inputfield'
import Button from '../Button/LoginButton/Login';
import { useNavigate } from 'react-router-dom';
import {ForgotPassStyle} from './Forgotpassstyle'
const Forgotpass = () => {
const navigate=useNavigate();
    const handlefg =()=>{
        navigate('/resetpass');
    }
  return (
    <Box sx={ForgotPassStyle.Forgotpass}>
            <Box sx={ForgotPassStyle.fglogo}>
                <Logo />
            </Box>
            <Box sx={ForgotPassStyle.fgheading}>
                <Typography sx={ForgotPassStyle.ForgotpasswordHeading} variant='h6'>
                    Forgot Password
                </Typography>
            </Box>
            <Box sx={ForgotPassStyle.fgsubheading}>
                <Typography variant='body2'>
                    Provide us the registered email to reset your password.
                </Typography>
            </Box>
            <Box sx={ForgotPassStyle.fgemail}>
                <Typography sx={ForgotPassStyle.ForgotpasswordSubheading} variant='caption'>
                    Email
                </Typography>
                <Input type="email" placeholder="Email" />
            </Box>
            <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                <Button text="Get Link" onClick={handlefg} />
            </Box>
            <Box sx={ForgotPassStyle.fgrememberbox}>
                <Typography variant="body2">
                    Remember the Password?
                    <span sx={ForgotPassStyle.fgremember} onClick={() => navigate('/login')}>
                        Log in
                    </span>
                </Typography>
            </Box>
        </Box>
  )
}

export default Forgotpass
