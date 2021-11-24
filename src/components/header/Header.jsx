import React from 'react'; 
import Buscador from './Buscador';
 
import MenuDerecho from './MenuDerecho';

const Header = () => {
  return (
    <div style={_HeaderStyle.containermain} >
        <div style={_HeaderStyle.container}>
        <div >
           <img src="/logoInstagram.png" width="200" height="50"></img> 
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
    width:'950px',
    maxWidth: '1100px',
  }
}


export default Header;