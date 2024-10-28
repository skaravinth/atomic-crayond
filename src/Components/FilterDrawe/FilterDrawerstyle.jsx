export const FilterDrawerstyles = {
    base: {
      border: '1px solid #EBEBEB',
      backgroundColor: 'white',
      color: 'black',
      width: '89px',
      height: '40px',
      textTransform: 'none',
      margin: '0 5px', 
      '&:focus': {
        outline: 'none', 
        boxShadow: 'none', 
      },'&:hover':{
        outline:'none',
        border:'none'
      }
    },
    selected: {
      backgroundColor: 'rgba(0, 128, 0, 0.1)',
      borderColor: 'green',
      color: 'black',  
      '&:focus': {
        outline: 'none',
       
      },'&:hover':{
        outline:'none',
        border:'none'
      }
      
    },
    selecting:{
      textTransform: 'none',
      borderRadius: '4px',
      height:'40px',
      minWidth: '120px',
     
      '&:focus': {
  outline: 'none', 
  boxShadow: 'none', 
    },
    '&:hover':{
     
      border:'1px solid #EBEBEB'
    }
   
  }, default: {
    borderColor: 'grey',
  },mainbox:{
     display: 'flex', flexWrap: 'wrap', gap: '10px' ,marginBottom:'15px'
  },typocontent:{ color: '#484759',paddingBottom:'5px' },
  addmem:{padding:'9px 20px',width:'184px',backgroundColor:'#49C792',textTransform:'none'},
  addcancel:{padding:'9px 20px',width:'184px',border:'1px solid #49C792',color:'#49C792',textTransform:'none'},
  addclose:{
    position: 'absolute',
    top: 25,
    right: 30,
    zIndex: 1300,
    height: '40px',
    width: '40px',
    backgroundColor: 'white',
    marginRight:'430px',
  
  },
  addspacebr:{justifyContent:'center',gap:'24px'},
  mainboxs:{marginTop:'8px'},
  maintypos:{marginBottom:'4px'}
}