import { Box, Typography, Alert, AlertTitle } from '@mui/material';
import Logo from '../../assets/Signuplogo';
import Inputfield from '../Button/Inputfield/Inputfield';
import Logins from '../Button/LoginButton/Login';
import { useNavigate } from 'react-router-dom';
import { SigninStyle } from './Logistyle'; // Adjust the import path as necessary
import { useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { alertMessage } = location.state || {};

    const handleForgotpass = () => {
        navigate('/forgot');
    };
    const handlelogon=()=>{
       
        navigate('/home', { state: { LoginMessage: "Welcome Have a nice day!" } })
    }

    return (
       
       
       
      
        <Box sx={SigninStyle.Signin}>
         
            {alertMessage && (
                 <Box sx={SigninStyle.alert}>
            <Box sx={SigninStyle.msg} severity="success">
               
                {alertMessage}
                <Box sx={SigninStyle.closeBox}>
                    <CloseIcon sx={SigninStyle.alertclose}/>
                </Box>
            </Box>
            </Box> 

        )}
         
            <Box sx={SigninStyle.Signinlogo}>
                <Logo />
            </Box>
            <Box sx={SigninStyle.welcomebox}>
                <Typography sx={SigninStyle.welcome} variant='h6'>Welcome!</Typography>
            </Box>
            <Box sx={SigninStyle.signincontentbox}>
                <Typography sx={SigninStyle.Signincontent} variant='body2'>
                    One positive feedback per day or week can make us grow exponentially.
                </Typography>
            </Box>
            <Box sx={SigninStyle.Emailfield}>
                <Typography sx={SigninStyle.signinemail} variant='body2'>Email<span style={{ color: 'red' }}>*</span></Typography>
                <Inputfield type="email" placeholder="Enter your email" />
            </Box>
            <Box sx={SigninStyle.Passwordfield}>
                <Typography sx={SigninStyle.signinPassword} variant="body2">Password<span style={{ color: 'red' }}>*</span></Typography>
                <Inputfield type="password" placeholder="Enter your password" />
            </Box>
            <Box sx={SigninStyle.forgotpasswordbox}>
                <Typography 
                    sx={SigninStyle.Forgot} 
                    onClick={handleForgotpass} 
                    variant='body2'
                    style={{ cursor: 'pointer' }} 
                >
                    Forgot Password?
                </Typography>
            </Box>
            <Box sx={SigninStyle.Loginbbox}>
                <Logins text="Log In" onClick={handlelogon}/>
            </Box>
        </Box>
   
    );
};

export default Login;
