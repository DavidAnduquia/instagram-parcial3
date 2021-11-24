import React from 'react'; 
import Buscador from './Buscador';
 
import MenuDerecho from './MenuDerecho';

const Header = () => {
  return (
    <div style={_HeaderStyle.containermain} >
        <div style={_HeaderStyle.container}>
        <div >
           <img src="/logoInstagram.png" width="110" ></img> 
        </div>
        <div >
        <Buscador />
        </div>
        <div>
        <MenuDerecho />
        </div>
        </div>
        
     </div>
  );
}

const _HeaderStyle = {
  containermain:{
    borderBottom: "1px solid rgb(212, 212, 212)",
    display: "flex",
    justifyContent: "center",
    width: "100%",

    backgroundColor:'white'
  },
  container:{
    display: "flex",
    alignItems: 'center',
    height: '50px',
    paddingTop:2,
    paddingBottom:2,
    color:'black',
    backgroundColor: '#fff',
    justifyContent : 'space-between',
    flexBasis: '60%',
  }
}


export default Header;