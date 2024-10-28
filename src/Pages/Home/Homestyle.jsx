import { borderRadius, display, fontSize, height, padding, textTransform, width } from "@mui/system";

export const Homestyle = {
    home: {
        width: '94.7vw',         
        height: '100vh',       
        backgroundColor: '#F0F0F0',    
            
    },
    Teammember:{
        color:'#353448',
        fontWeight:'500',
        fontSize:'20px'
    },
    repoties:{
        color:'#353448',
        fontWeight:'500',
        fontSize:'14px',
      
    },

    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor:'white',
        padding: '5px',
        width: '310px',
        marginRight:'16px'
      },
      searchInput: {
        flex: 1,
        border: 'none',
        outline: 'none',
        paddingLeft: '8px', 
      },
      customInput: {
        border: 'none', 
        outline: 'none',
        flex: 1, 
        fontSize: '16px', 
        '&::placeholder': {
          fontSize: '12px',
          color: '#a0a0a0', 
        },
      },
      searchicon:{
        color:'#ccc'
      },
      Filter:{
        height:'40px',
        borderRadius:'4px',
        width:'44px',
        backgroundColor:'#49C792',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
       


    },
    Print:{
        width:'109px',
        height:'40px',
        borderRadius:'4px',
        border:'1px solid #49C792',
        gap:'8px',
        textTransform:'none',
        '&:focus': {
            outline: 'none', 
            boxShadow: 'none', 
          },

    },
    import:{
        color:'#49C792',
        fontSize:'14px'
    },
    Addmem:{
        width:'136px',
        height:'40px',
        backgroundColor:'#49C792',
        color:'white',
        textTransform:'none',
        fontSize:'12px',
        '&:focus': {
            outline: 'none', // Remove outline on focus
            boxShadow: 'none', // Also remove any box shadow if applicable
          },
    },
    memberadd:{
        fontSize:'14px',
        outline:'none',
        '&:focus': {
            outline: 'none', // Remove outline on focus
            boxShadow: 'none', // Also remove any box shadow if applicable
          },
    },
    lastbutton:{
        gap:'16px',
        display:'flex',
        flexDirection:'row',
        marginLeft:'16px'

    },
    top:{
        display:'flex',
       
        alignItems:'center',
    
        marginTop:'32px',
        paddingBottom:'24px',
        paddingLeft:'2.5%'
       
    },
    checked:{
        display:'flex',
        alignItems:'center',
          marginLeft:'305px',
          marginRight:'24px'
    }
    ,space:{
        paddingRight:'17px',
        borderRight:'1px solid #CACACA',
      
    }
};
