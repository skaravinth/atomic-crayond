import { useState } from 'react';
import {
  Box,
  Drawer,
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  IconButton,
  FormControl,
  
} from '@mui/material';
import Close from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import {FilterDrawerstyles} from './FilterDrawerstyle'

export default function RightDrawer({ openfilter, onClosefilter }) {
  const [selectedPerformance, setSelectedPerformance] = useState('Impactful');
  const [role, setRole] = useState('Employee');

  const handlePerformanceChange = (option) => {
    setSelectedPerformance(option);
  };

 

  const performanceOptions = [
    'Impactful',
    'Spectacular',
    'Very good',
    'Good',
    'Need to improve',
    'Need to improve a lot',
    'Completely away'
  ];

  const filterContent = () => (
    <Box sx={{ width: 380, padding: 3 }} role="presentation">
      <Typography variant="h6" sx={{ marginBottom: 2, }}>Filters</Typography>
      <Divider  sx={{marginBottom:2}}/>
      <Typography variant="subtitle1" gutterBottom>
        Overall performance
      </Typography>
      <Box sx={FilterDrawerstyles.mainbox}>
        {performanceOptions.map((option) => (
          <Button
            key={option}
            variant={selectedPerformance === option ? 'contained' : 'outlined'}
            color={selectedPerformance === option ? 'success' : 'default'}
            onClick={() => handlePerformanceChange(option)}
            sx={
              {...FilterDrawerstyles.selecting, backgroundColor: selectedPerformance === option ? '#E6F4EA' : 'transparent',
                color: selectedPerformance === option ? '#1E8449' : '#000',
                borderColor: selectedPerformance === option ? '#1E8449' : '#ccc',}}
          >
            {option}
          </Button>
        ))}
      </Box>
<Box><Box sx={FilterDrawerstyles.maintypos}>
      <Typography variant="caption" sx={FilterDrawerstyles.typocontent}>Department</Typography></Box>
      <TextField
        placeholder="Select department"
        fullWidth
        sx={{
          '& .MuiInputBase-root': {
            height: '45px',
          },
          '& .MuiInputBase-input': {
            padding: '5px',
            fontSize: '14px',
          },
        }}
      />
</Box>
<Box  sx={FilterDrawerstyles.mainboxs}>
<Box sx={FilterDrawerstyles.maintypos}>  <Typography variant="caption" sx={FilterDrawerstyles.typocontent}>Designation</Typography></Box>

      <FormControl
  fullWidth
  required
  sx={{
    '& .MuiInputBase-root': {
      height: '40px'
    },
    '& .MuiInputBase-input': {
      padding: '5px'
    }
  }}
>
  
  <Select
    displayEmpty
    defaultValue=""
    inputProps={{ 'aria-label': 'Without label' }}
    sx={{
      '& .MuiSelect-select': {
        fontSize: '14px',
        paddingLeft:'10px',
      }
    }}
  >
    <MenuItem value="" disabled sx={{color:'#484759'}}>
      Select designation
    </MenuItem>
    <MenuItem value='Manager'>Manager</MenuItem>
    <MenuItem value='Developer'>Developer</MenuItem>
    <MenuItem value='Designer'>Designer</MenuItem>
  </Select>
</FormControl>
      </Box>
      <Box sx={FilterDrawerstyles.mainboxs}>
      <Box sx={FilterDrawerstyles.maintypos}> 
      <Typography variant="caption" sx={FilterDrawerstyles.typocontent}>Reporting to</Typography>
      </Box>
      <TextField
        fullWidth
        placeholder="Name"
        sx={{
          '& .MuiInputBase-root': {
            height: '40px',
          },
          '& .MuiInputBase-input': {
            padding: '5px',
            fontSize: '14px',
          },
        }}
      />
</Box>
<Box  sx={FilterDrawerstyles.mainboxs}>
<Box sx={FilterDrawerstyles.maintypos}> 
      <Typography variant="caption" sx={{ }}>Role</Typography>
      </Box>
      
        {['Employee', 'Manager', 'Admin'].map((label) => (
      <Button
        key={label}
        onClick={() => setRole(label)}
        sx={{
          ...FilterDrawerstyles.base,
          ...(role === label ? FilterDrawerstyles.selected : FilterDrawerstyles.default),
        }}
      >
        {label}
      </Button>
    ))}
    </Box>
    <Box display='flex'sx={FilterDrawerstyles.addspacebar} mt={11}>
        <Button variant='contained'  onClick={onClosefilter} sx={FilterDrawerstyles.addmem}>
          Add Member
        </Button>
        <Button variant='outlined' color='error' onClick={onClosefilter} sx={FilterDrawerstyles.addcancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      {openfilter && (
        <IconButton
          onClick={onClosefilter}
          sx={FilterDrawerstyles.addclose}
        >
          <Close />
        </IconButton>
      )}
      <Drawer anchor="right" open={openfilter} onClose={onClosefilter}>
        {filterContent()}
      </Drawer>
    </div>
  );
}
