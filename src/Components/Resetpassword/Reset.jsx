import React from 'react'
import { Box,Typography} from '@mui/material';
import Logo from '../../assets/Signuplogo';
import Inputfield from '../Button/Inputfield/Inputfield' ;
import Login from '../Button/LoginButton/Login'
import { ResetPassStyles } from './Resetstyle';
import { useNavigate } from 'react-router-dom';

const Reset = () => {
    const navigate=useNavigate();
    const handlereset=()=>{
       
        navigate('/Signin', { state: { alertMessage: "Password reset successfully!" } })
    }
  return (
<Box sx={ResetPassStyles.Resetpass}>
      <Box sx={ResetPassStyles.Signinlogo}>
        <Logo />
      </Box>
      <Box sx={ResetPassStyles.Resetbox}>
        <Typography sx={ResetPassStyles.resetheading} variant='h6'>
          Reset Password
        </Typography>
      </Box>
      <Box sx={ResetPassStyles.signincontentbox}>
        <Typography sx={ResetPassStyles.resetcontent} variant='body2'>
          Please provide a new password for your account.
        </Typography>
      </Box>
      <Box sx={ResetPassStyles.Emailfield}>
        <Typography sx={ResetPassStyles.signinpassword}>
          New password<span style={{ color: 'red' }}>*</span>
        </Typography>
        <Inputfield type="password" placeholder="Enter your new password" sx={ResetPassStyles.inputfield} />
      </Box>
      <Box sx={ResetPassStyles.Passwordfield}>
        <Typography sx={ResetPassStyles.signinpasswords} >
          Confirm new Password<span style={{ color: 'red' }}>*</span>
        </Typography>
        <Inputfield type="password" placeholder="Confirm your new password" sx={ResetPassStyles.inputfield} />
      </Box>
      <Box sx={ResetPassStyles.Loginbutton}>
        <Login text="Reset Password" onClick={handlereset}/>
      </Box>
    </Box>
  )
}

export default Reset
