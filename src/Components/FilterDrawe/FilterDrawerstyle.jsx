export const FilterDrawerstyles = {
    base: {
      border: '1px solid #333',
      backgroundColor: 'white',
      color: 'black',
      width: '89px',
      height: '40px',
      textTransform: 'none',
      margin: '0 5px', 
      '&:focus': {
        outline: 'none', // Remove outline on focus
        boxShadow: 'none', // Also remove any box shadow if applicable
      },'&:hover':{
        outline:'none',

      }
    },
    selected: {
      backgroundColor: 'rgba(0, 128, 0, 0.1)',
      borderColor: 'green',
      color: 'black',  
      '&:focus': {
        outline: 'none', // Remove outline on focus
       
      },
      
    },
    default: {
      borderColor: 'grey',
    },
  };
  