import { Box,Typography} from '@mui/material'
import {useState}from 'react';
import { Navbarstyles } from './Navbarstyles';
import Logo from '../../assets/Brandlogo'
import User from '../../assets/User'
import People from '../../assets/People.jsx'
import Comment from '../../assets/Comment.jsx'
import Notification from '../../assets/Notification.jsx';
import Settings from '../../assets/Settings.jsx';
import Logout from '../../assets/Logout.jsx'
const Navbar = () => {
    const [selectedIcon, setSelectedIcon] = useState(null); // Track selected icon

  // Function to handle icon selection
  const handleSelect = (iconName) => {
    setSelectedIcon(iconName);
  };

  return (
    <Box sx={Navbarstyles.Navber}>
   
      <Box sx={Navbarstyles.logo}>
        <Logo />
      </Box>
      <Box>
        <Typography sx={Navbarstyles.logoheading} variant="caption">V 1.0.02</Typography>
      </Box>
      
     
      <Box sx={selectedIcon === 'User' ? Navbarstyles.selectedIconUser : Navbarstyles.iconsUser} onClick={() => handleSelect('User')}>
        <User />
     
      </Box>
      <Box><Typography sx={Navbarstyles.iconLabel} variant='caption'>Profile</Typography></Box>
      <Box sx={selectedIcon === 'People' ? Navbarstyles.selectedIconTeam : Navbarstyles.iconsTeam} onClick={() => handleSelect('People')}>
        <People />
      
      </Box>
      <Box><Typography sx={Navbarstyles.iconLabel} variant='caption'>Team</Typography></Box>
      <Box sx={selectedIcon === 'Comment' ? Navbarstyles.selectedIconTeam : Navbarstyles.iconsTeam} onClick={() => handleSelect('Comment')}>
        <Comment />
        
      </Box>
      <Box sx={Navbarstyles.commenttypo}> <Typography sx={Navbarstyles.iconLabel} variant='caption'>Feedback</Typography></Box>
      <Box sx={selectedIcon === 'Settings' ? Navbarstyles.selectedIconbottom : Navbarstyles.iconss} onClick={() => handleSelect('Settings')}>
        <Settings />
      </Box>
      <Box sx={selectedIcon === 'Notification' ? Navbarstyles.selectedIcon : Navbarstyles.iconss} onClick={() => handleSelect('Notification')}>
        <Notification />
      </Box>
      <Box sx={selectedIcon === 'Logout' ? Navbarstyles.selectedIcon : Navbarstyles.iconss} onClick={() => handleSelect('Logout')}>
        <Logout />
      </Box>
    </Box>
  );
}

export default Navbar
