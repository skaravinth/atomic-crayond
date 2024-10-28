// styles.js
const drawerStyles = {
    container: {
      width: '400px',
      paddingLeft: '30px',
      paddingRight: '30px',
      display: 'flex',
      paddingTop:'14px',
      flexDirection: 'column',
      gap: '7.3px',
    },
    sectionContainer: {
      marginBottom: '7.5px', // space between each field
      width: '100%', // full width for consistency
    },
    header: {
      display: 'flex',
    
      alignItems: 'center',
      fontSize:'18px'
    },
    sectionLabel: {
      color: '#484759',
      fontSize: '12px',
      marginBottom: '4px',
    },
    textField: {
      '& .MuiInputBase-root': {
        height: '40px',
      },
      '& .MuiInputBase-input': {
        padding: '5px',
        fontSize: '10px',
      },
      '& .MuiInputBase-input::placeholder': {
        fontSize: '14px',
        textAlign: 'left',
        paddingLeft: '7px',
      },
    },
    dateField: {
        height: '40px',
        width: '100%', // or any specific width value like '300px'
        '& .MuiInputBase-input': {
          padding: '14px',
          fontSize: '12px',
          paddingLeft: '7px',
        },
      },selectField: {
      height: '40px',
      paddingLeft: '10px',
      '& .MuiSelect-select': {
        fontSize: '14px',
        paddingLeft: '10px',
      },
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginTop: '1.5rem',
    },
    chip: {
      borderRadius: '16px',
      height: '36px',
      padding: '0 8px',
      '& .MuiChip-avatar': {
        width: '24px',
        height: '24px',
      },
      '& .MuiChip-deleteIcon': {
        fontSize: '16px',
      },
      backgroundColor: '#f5f5f5',
    },
    closeButton: {
      position: 'absolute',
      top: 20,
      right: 16,
      zIndex: 1300,
      marginRight: '470px',
      height: '40px',
      width: '40px',
      backgroundColor: 'white',
      '&:hover':{
        backgroundColor:'white'
      }
    },
  };
  
  export default drawerStyles;
  