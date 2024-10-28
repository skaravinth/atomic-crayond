import React, { useState } from 'react';
import { Box,Divider } from '@mui/material';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Avatar,Typography,Switch,Button,IconButton
} from '@mui/material';
import Edits from '../../assets/Edit'
import { tableStyles } from './Tablestyle';
import GaugeChart from 'react-gauge-chart';
import { styled } from '@mui/material/styles';



const BasicTable = () => {
  
  const handleSwitchChange = (event, row) => {

    console.log(`Switch for ${row.name} changed to ${event.target.checked}`);
  };
  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 40, // Set the width to 40px
    height: 22, // Set the height to 22px
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 0,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(17px)', 
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#49C792',
          opacity: 1,
          border: 0,
          ...theme.applyStyles('dark', {
            backgroundColor: '#2ECA45',
          }),
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff', // Focus effect
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.grey[100],
        ...theme.applyStyles('dark', {
          color: theme.palette.grey[600],
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.7,
        ...theme.applyStyles('dark', {
          opacity: 0.3,
        }),
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 18, 
      height: 18, 
      top: '50%', 
      marginTop: '2px',
      transition: 'transform 300ms', 
      transform: 'translateX(3px)', 
    },
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2, 
      backgroundColor: '#808080', 
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
      ...theme.applyStyles('dark', {
        backgroundColor: '#39393D',
      }),
    },
  }));
  
  
  

  const rows = [
    { 
      id: 1, 
      name: 'Alice', 
      Designation: 'Senior Engineer', 
      Department: 'Engineering', 
      Signals: ['C', 'E', 'T', 'D', 'U'],
      OverallPerformance: 70, 
      Reporting: ['John'], 
      Role: 'Employee', 
      Email: 'aravinth@gmail.com', 
      Experience: '3Y 4months', 
      Status: 'Active' ,
      image: 'https://example.com/path/to/bob-image.jpg',
      reporterImg:'https://example.com/path/to/bob-image.jpg'
    },
    { 
      id: 2, 
      name: 'Bob', 
      Designation: 'Designer', 
      Department: 'Design', 
      Signals: ['C', 'E', 'T', 'D', 'U'],
      OverallPerformance: 85, 
      Reporting: ['Mary', 'Steve'], 
      Role: 'Employee', 
      Email: 'bob@example.com', 
      Experience: '2Y 6months', 
      Status: 'Active' ,
      image: 'https://example.com/path/to/bob-image.jpg'
    },
    { 
      id: 3, 
      name: 'Charlie', 
      Designation: 'Teacher', 
      Department: 'Education', 
      Signals: ['C', 'E', 'T', 'D', 'U'],
      OverallPerformance: 92, 
      Reporting: ['Anna'], 
      Role: 'Employee', 
      Email: 'charlie@example.com', 
      Experience: '5Y 1month', 
      Status: 'Inactive' ,
      image: 'https://example.com/path/to/bob-image.jpg'
    },
    { 
      id: 4, 
      name: 'Diana', 
      Designation: 'Project Manager', 
      Department: 'Management', 
      Signals: ['C', 'E', 'T', 'D', 'U'],
      OverallPerformance: 78, 
      Reporting: ['John', 'Alice'], 
      Role: 'Manager', 
      Email: 'diana@example.com', 
      Experience: '4Y 5months', 
      Status: 'Active' ,
      image: 'https://example.com/path/to/bob-image.jpg'
    },
    { 
      id: 5, 
      name: 'Ethan', 
      Designation: 'Software Developer', 
      Department: 'IT', 
      Signals: ['C', 'E', 'T', 'D', 'U'],
      OverallPerformance: 88, 
      Reporting: ['Bob'], 
      Role: 'Employee', 
      Email: 'ethan@example.com', 
      Experience: '1Y 8months', 
      Status: 'Active' ,
      image: 'https://example.com/path/to/bob-image.jpg'

    },
    { 
      id: 6, 
      name: 'Fiona', 
      Designation: 'HR Specialist', 
      Department: 'Human Resources', 
      Signals: ['C', 'E', 'T', 'D', 'U'], 
      OverallPerformance: 75, 
      Reporting: ['Diana'], 
      Role: 'Employee', 
      Email: 'fiona@example.com', 
      Experience: '3Y 2months', 
      Status: 'Active' ,
      image: 'https://example.com/path/to/bob-image.jpg'
    },
    { 
      id: 7, 
      name: 'George', 
      Designation: 'Data Analyst', 
      Department: 'Data Science', 
      Signals: ['C', 'E', 'T', 'D', 'U'],
      OverallPerformance: 90, 
      Reporting: ['John', 'Alice'], 
      Role: 'Employee', 
      Email: 'george@example.com', 
      Experience: '2Y 4months', 
      Status: 'Active' ,
      image: 'https://example.com/path/to/bob-image.jpg'
    },
    { 
      id: 8, 
      name: 'Hannah', 
      Designation: 'Quality Assurance', 
      Department: 'IT', 
      Signals: ['C', 'E', 'T', 'D', 'U'],
      OverallPerformance: 80, 
      Reporting: ['Ethan'], 
      Role: 'Employee', 
      Email: 'hannah@example.com', 
      Experience: '3Y 9months', 
      Status: 'Active' ,
      image: 'https://example.com/path/to/bob-image.jpg'
    },
    { 
      id: 9, 
      name: 'Ian', 
      Designation: 'Marketing Specialist', 
      Department: 'Marketing', 
      Signals: ['C', 'E', 'T', 'D', 'U'],
      OverallPerformance: 77, 
      Reporting: ['Bob'], 
      Role: 'Employee', 
      Email: 'ian@example.com', 
      Experience: '1Y 11months', 
      Status: 'Active',
      image: 'https://example.com/path/to/bob-image.jpg' 
    },
    { 
      id: 10, 
      name: 'Julia', 
      Designation: 'Graphic Designer', 
      Department: 'Design', 
      Signals: ['C', 'E', 'T', 'D', 'U'],
      OverallPerformance: 82, 
      Reporting: ['Charlie', 'Diana'], 
      Role: 'Employee', 
      Email: 'julia@example.com', 
      Experience: '2Y 3months', 
      Status: 'Active' ,
      image: 'https://example.com/path/to/bob-image.jpg'},
    { 
      id: 11, 
      name: 'Kevin', 
      Designation: 'Business Analyst', 
      Department: 'Business Development', 
      Signals: ['C', 'E', 'T', 'D', 'U'],
      OverallPerformance: 86, 
      Reporting: ['Alice'], 
      Role: 'Employee', 
      Email: 'kevin@example.com', 
      Experience: '4Y 8months', 
      Status: 'Active' ,
      image: 'https://example.com/path/to/bob-image.jpg'
    },
    { 
      id: 12, 
      name: 'Laura', 
      Designation: 'Front-end Developer', 
      Department: 'IT', 
      Signals: ['C', 'E', 'T', 'D', 'U'], 
      OverallPerformance: 89, 
      Reporting: ['Diana'], 
      Role: 'Employee', 
      Email: 'laura@example.com', 
      Experience: '2Y 5months', 
      Status: 'Active' ,
      image: 'https://example.com/path/to/bob-image.jpg'
    },
    { 
      id: 13, 
      name: 'Michael', 
      Designation: 'Data Scientist', 
      Department: 'Data Science', 
      Signals: ['C', 'E', 'T', 'D', 'U'], 
      OverallPerformance: 91, 
      Reporting: ['Bob', 'Steve'], 
      Role: 'Employee', 
      Email: 'michael@example.com', 
      Experience: '3Y 1month', 
      Status: 'Inactive' ,
      image: 'https://example.com/path/to/bob-image.jpg'
    },
    { 
      id: 14, 
      name: 'Nina', 
      Designation: 'Operations Manager', 
      Department: 'Operations', 
      Signals: ['C', 'E', 'T', 'D', 'U'],
      OverallPerformance: 83, 
      Reporting: ['John'], 
      Role: 'Manager', 
      Email: 'nina@example.com', 
      Experience: '5Y 3months', 
      Status: 'Active' ,
      image: 'https://example.com/path/to/bob-image.jpg'
    },
    { 
      id: 15, 
      name: 'Oscar', 
      Designation: 'Cybersecurity Analyst', 
      Department: 'IT Security', 
      Signals: ['C', 'E', 'T', 'D', 'U'], 
      OverallPerformance: 78, 
      Reporting: ['George'], 
      Role: 'Employee', 
      Email: 'oscar@example.com', 
      Experience: '4Y 0months', 
      Status: 'Active' ,
      image: 'https://example.com/path/to/bob-image.jpg'
    }
  ];

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Change rows per page to show more data

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); 
  };

  const displayedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const getSignalColor = (signal) => {
    switch (signal) {
      case 'C':
        return '#4CAF50'; 
      case 'E':
      case 'T':
        return '#FFC107'; 
      case 'D':
        return '#4CAF50'; 
      case 'U':
        return '#F44336'; 
      default:
        return '#757575'; 
    }
  
  
  };
  return (
    <Paper sx={tableStyles.paper}>
      <TableContainer sx={tableStyles.tableContainer}>
      <Box
          sx={tableStyles.liner}
        />
        <Table  sx={tableStyles.tabler}>
          <TableHead sx={tableStyles.header}>
            <TableRow>
   
              <TableCell sx={tableStyles.tableName} padding="none">Name</TableCell>
              <TableCell sx={tableStyles.tableDesig} padding="none">Designation</TableCell>
              <TableCell sx={tableStyles.tableDep} padding="none">Department</TableCell>
              <TableCell sx={tableStyles.tablesignal} padding="none">Signals</TableCell>
              <TableCell sx={tableStyles.tableOP} padding="none">Overall Performance</TableCell>
              <TableCell sx={tableStyles.tableReportto} padding="none">Reporting to</TableCell>
              <TableCell sx={tableStyles.tableEm} padding="none">Role</TableCell>
              <TableCell sx={tableStyles.tableEm} padding="none">Email</TableCell>
              <TableCell sx={tableStyles.tableExp} padding="none">Experience</TableCell>
              <TableCell sx={tableStyles.tableStatus} padding="none">Status</TableCell>
              
              
              <Box sx={tableStyles.fixedColumnBoxs}>
                <TableCell sx={{ ...tableStyles.fixedColumn, minWidth: '180px' }}>
                  Fixed Column
                </TableCell>
              </Box>
            </TableRow>
          </TableHead>
          <TableBody sx={tableStyles.tableBody}>
            {displayedRows.map((row) => (
              <TableRow key={row.id} sx={tableStyles.tableRow}>
           
                <TableCell sx={tableStyles.tableNames}>  <Box sx={tableStyles.namein} >
      <Avatar 
        src={row.image || ''}
        alt={row.name} 
        sx={tableStyles.nameavat} 
      />
      <Typography variant="body1" sx={tableStyles.typoname}>
        {row.name}
      </Typography></Box></TableCell>
                <TableCell sx={tableStyles.tableDesigs} padding="none">{row.Designation}</TableCell>
                <TableCell sx={tableStyles.tableDeps} padding="none">{row.Department}</TableCell>
                <TableCell sx={tableStyles.tablesignals} padding="none">
                  <Box sx={tableStyles.tablesigns}>
                    {row.Signals.map((signal, index) => (
                      <Box
                        key={index}
                        sx={{
                         ...tableStyles.signalsconte, backgroundColor: getSignalColor(signal),
                        }}
                      >
                        {signal}
                      </Box>
                    ))}
                  </Box>
                </TableCell>
                <TableCell sx={tableStyles.tableOPs} padding="none">
        <GaugeChart
          id={`gauge-chart-${row.id}`} 
          nrOfLevels={6} 
          percent={row.OverallPerformance / 100}
          arcPadding={0}
          cornerRadius={0}
          textColor={"#000000"} 
          needleColor={"#000000"} 
          colors={["#FF0000", "#FFA500", "#008000"]} 
          style={tableStyles.graph} 
          hideText={true}
        />
      </TableCell>
      <TableCell sx={tableStyles.tableEms}>
  <Box sx={tableStyles.tableReporting}>
   
    {row.Reporting.length > 0 && (
      <>
        <Avatar src={row.reporterImg} alt={row.Reporting[0]}  sx={tableStyles.rptImg}/>
        <Typography variant="body2" sx={tableStyles.repttowho} padding="none">
          {row.Reporting[0]}
          {row.Reporting.length > 1 && (
  <span style={tableStyles.span}>
    +{row.Reporting.length - 1}
  </span>
)}
        </Typography>
      </>
    )}
  </Box>
</TableCell > <TableCell sx={tableStyles.tableEms} padding="none">{row.Role}</TableCell>
                <TableCell sx={tableStyles.tableEms} padding="none">{row.Email}</TableCell>
                <TableCell sx={tableStyles.tableExps} padding="none">{row.Experience}</TableCell>
                <TableCell sx={tableStyles.tableStatuss} padding="none">
                  <IOSSwitch 
                    checked={row.Status === 'Active'}
                    onChange={(event) => handleSwitchChange(event, row)}
                    color="primary"
                  />
                </TableCell>
                <Divider orientation="vertical" flexItem />
                <Box sx={tableStyles.fixedColumnBoxs}>
                <TableCell sx={tableStyles.fixedColumns} >
              <Box sx={tableStyles.iconsbox}>
              <Button sx={tableStyles.addlab}> Add Feedback</Button>
             <Box sx={tableStyles.iconeditbox}><Edits sx={tableStyles.iconsedit}/> </Box>
                 </Box>
                </TableCell>
                </Box>
              </TableRow>
            ))}
          </TableBody>
         
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={tableStyles.pagination}
      />
    </Paper>
  );
};

export default BasicTable;
