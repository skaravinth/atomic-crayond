import { BorderLeft } from "@mui/icons-material";
import { borderLeft, borderRight, display, fontSize, fontWeight, height, maxWidth, padding, textAlign, textTransform, width } from "@mui/system";

export const tableStyles = {
  paper: {
    width: '95%',
    height: '80%',
    marginLeft: '2.5%',
  },
  tableContainer: {
    width: '100%',
    height: '90%',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  },
  header: {
    borderBottom: '1px solid #ccc',
    height:'50px'
  },

  fixedColumn: {
    position: 'sticky',
    right: 0,
    zIndex: 1,
    
    minWidth: '180px',
   
    textAlign:'center' ,

  },
  fixedColumns: {
    position: 'sticky',
    right: 0,
    zIndex: 1,
    backgroundColor: '#ffffff',
    minWidth: '180px',
  
    height:'30px',
    border:'none'
    
  },
  fixedColumnBox: {
    position: 'absolute',
    right: 0,
    zIndex: 1000,
    marginRight:'37px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    minWidth: '200px',
    
    
  },
  fixedColumnBoxs: {
    position: 'sticky',
    right: 0,
    zIndex: 1,
    padding:'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    minWidth: '200px',
    
    
  },
  pagination: {
    borderTop: '1px solid #E3E3E3',
  },

  tableBody:{
    height:'20px',
     width:'140px'
  },
  tableName: {
    minWidth: '110px',
    width: '110px', 
    border:'none',
    fontSize:'18px',
    fontweight:500,
    paddingLeft:'30px'
  },
  tableDesig: {
    minWidth: '200px',
    width: '200px', 
    
    border:'none',
    fontSize:'18px',
    fontweight:500
  },
  tableOP: {
    minWidth: '230px', 
    width: '200px', 
    border:'none',
    fontSize:'18px',
    fontweight:500
  },tableReportto:{
    minWidth: '200px',
    width: '200px', 
    border:'none',
    fontSize:'18px',
    fontweight:500
  } ,
  tableRow:{
    height:'20px'
  }
  , tableExp: {
    minWidth: '200px',
    border:'none', 
    width: '200px', 
   
    fontSize:'18px',
    fontweight:500
  }, tableDep: {
    minWidth: '170px', 
    width: '200px', 
   
    border:'none',
    fontSize:'18px',
    fontweight:500
  },
  tableEm: {
  minWidth: '200px',
    width: '200px', 
  
    border:'none',
    fontSize:'18px',
    fontweight:500
  },
  tableStatus: {
    minWidth: '130px',
    width: '100px', 
    
    border:'none',
    fontSize:'18px',
    fontweight:500
  },tablesignal:{
    minWidth: '140px',
    width: '200px', 
    
    border:'none',
    fontSize:'18px',
    fontweight:500
  },
   tableNames: {
    minWidth: '200px',
    width: '200px', 
    paddingLeft:'30px',
    border:'none',

  },
  tableDesigs: {
    minWidth: '220px',
    width: '240px', 
   fontSize:'16px',
    border:'none',
   
  },
  tableOPs: {
    minWidth: '150px', 
    width: '200px', 
   display:'flex',
   alignItems:'center',
   justifyContent:'center',
    border:'none',
   
  }, tableExps: {
    minWidth: '200px',
    border:'none', 
    width: '200px', 
  

  }, tableDeps: {
    minWidth: '100px', 
    width: '200px', 
  
    border:'none',
   
  },
  tableEms: {
  minWidth: '200px',
    width: '200px', 
  
    border:'none',
  
  },
  tableStatuss: {
    minWidth: '100px',
    width: '100px', 
   
    border:'none',
   
  },signalsconte:{
    width: 24,
    height: 24,
    borderRadius: '50%',
   
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 'bold'
  },tablesignals:{
    minWidth: '200px',
    width: '200px', 
    textAlign:'center',
    border:'none',
    
  },
  tableReporting:{
    display:'flex',
  
    alignItems:'center'
  },
  rptImg:{
    height:'40px',
    width:'40px',
    marginRight:1.5
  },
  addlab:{
    marginLeft:'20px',
    height:'35px',
    width:'140px',
    backgroundColor:'#49C792',
    textTransform:'none',
    color:'white',
    fontSize:'14px',
     '&:focus': {
      outline: 'none', // Remove outline on focus
      boxShadow: 'none', // Also remove any box shadow if applicable
    },
  },
  edit:{
    paddingRight:0,
    
   
    '&:focus': {
      outline: 'none', // Remove outline on focus
      boxShadow: 'none', // Also remove any box shadow if applicable
    },
  },symb:{
fontSize:'1.1rem',

  },tabler:{
    maxWidth:'100%',
    overflowX:'auto'
  },
  namein:{
    display:'flex',
    alignItems:'center'
  },nameavat:{
    width:40,
    height:40,
    marginRight:2
  }
  ,typoname:{
    color:'black',
  },tablesigns:{
    display:'flex',gap:'4px'
  },
  graph:{
    width:'70px',height:'40px'
  },
  repttowho:{
    marginLeft:1,
  },addheader:{
    fontWeight:500,fontSize:'20px'
  },iconsbox:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  liner:{
    position: 'absolute',
    zIndex:'1000',
    top:'13.7%',
    left: '82.95%', // Adjust `left` as needed
    width: '1px', // Thin vertical line
    height: '71.9%', // Full height of the container
    borderRight: '1px solid #ccc'
  },
  span:{
    color:'#49C792',
    marginLeft:'6px'
  },
  iconsedit:{
    paddingLeft:'10px'
  },
  iconeditbox:{
    marginLeft:'19px'
  },tooltip: {
    backgroundColor: '#fff',
    color: 'black',
    fontSize: '14px',
    gap:'10px',
    padding: '8px',
    width: '150px',
    height:'85px', // Maximum width, but no fixed width or height
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
}, arrow: {
    color: '#fff',           // Match tooltip background color
  },
  tablebot:{ display: 'flex', alignItems: 'center' }
,reporterisimg:{ width: 24, height: 24, marginRight: 1 },
tableEmss: {
  minWidth: '200px',
    width: '200px', 
  textAlign:'start',
    border:'none',
  
  },moreplace:{ marginLeft: 4, color: '#49C792', cursor: 'pointer' },
  statuscheck:{
    display:'flex',
    gap:'8px'
  }
  };
  