import React from 'react'; 
import Buscador from './Buscador';
 
import MenuDerecho from './MenuDerecho';

const Header = () => {
  return (
    <div className="App" style={_HeaderStyle.container}>
        <div  >
           {/*  <img src="/logoInstagram.png" width="200" height="50"></img> */}
        </div>
        
        <Buscador />
        <MenuDerecho />
     </div>
  );
}

const _HeaderStyle = {

  container:{
    display: "flex",
    alignItems: 'center',
    height: '50px',
    paddingTop:2,
    paddingBottom:2,
 
    color:'black',
    backgroundColor: '#fff',
    justifyContent : 'space-evenly',
    borderBottom: "1px solid rgb(212, 212, 212)"
  }
}


export default Header;