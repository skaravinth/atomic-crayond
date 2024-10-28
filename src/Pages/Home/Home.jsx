import { Box,Typography,InputBase,Button } from '@mui/material'
import {useState} from 'react'
import {Homestyle} from './Homestyle.jsx'
import Table from '../../Components/Tabel/Tabel'
import Checkbox from '@mui/material/Checkbox';
import SearchIcon from '@mui/icons-material/Search';
import Filter from '../../assets/Filter.jsx';
import Print from '../../assets/Print.jsx';
import Drawer from '../../Components/Drawer/Drawer';
import Filterdrawer from '../../Components/FilterDrawe/Filterdrawer.jsx' ;
import { useLocation } from 'react-router-dom';
import Close from '@mui/icons-material/Close';
const Home = () => {
  const location = useLocation();
const { LoginMessage } = location.state || {};
    const [open, setOpen] = useState(false); 
    const [openfilter,setopenfilter] =useState(false)
    const handleOpenDrawer = () => {
      setOpen(true); 
    };
  
    const handleCloseDrawer = () => {
      setOpen(false); 
    };
    const handleopenfilter=()=>{
        setopenfilter(true);
    }
    const handleclosefilter=()=>{
        setopenfilter(false);
    }

  const [showLoginMessage, setShowLoginMessage] = useState(true);
  const handleCloseMessage = () => {
    setShowLoginMessage(false);
  };
  return (
   <Box sx={Homestyle.home}>
         {showLoginMessage && (
                 <Box sx={Homestyle.alert}>
            <Box sx={Homestyle.msg} severity="success">
               
                Welcome have a nice day
                <Box sx={Homestyle.closeBox} onClick={handleCloseMessage}>
                    <Close sx={Homestyle.alertclose}/>
                </Box>
            </Box>
            </Box> 

        )}
        <Box sx={Homestyle.top}>
            <Box><Typography  sx={Homestyle.Teammember}>Team Members</Typography></Box>
            <Box sx={Homestyle.checked}>  <Checkbox defaultChecked   sx={{color: '#49C792','&.Mui-checked': {color: '#49C792',},}}/>
            <Typography sx={Homestyle.repoties}>Show only my reportees</Typography> </Box>
            <Box style={Homestyle.searchContainer}>
      <SearchIcon style={Homestyle.searchicon} /> 
      <InputBase
        type="text"
        placeholder="Search by name, email"
        style={Homestyle.searchInput}
        sx={Homestyle.customInput}
      />
    </Box>
    <Box sx={Homestyle.space}>
    <Box sx={Homestyle.Filter} onClick={handleopenfilter}>
        <Filter />
    </Box>
    </Box>
    <Box sx={Homestyle.lastbutton}>
        <Box>
        <Button sx={Homestyle.Print}>
            <Print />
            <Typography  sx={Homestyle.import}>Import</Typography>
        </Button>
        </Box>
        <Box>
        <Button sx={Homestyle.Addmem} onClick={handleOpenDrawer}>
              <Typography sx={Homestyle.memberadd}>Add Member</Typography>
            </Button>
        </Box>
    </Box>
        </Box>
        <Table />
        <Drawer open={open} onClose={handleCloseDrawer}/>
        <Filterdrawer openfilter={openfilter} onClosefilter={handleclosefilter}/>
   </Box>

  )
}

export default Home
