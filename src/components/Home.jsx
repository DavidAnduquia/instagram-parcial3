import React from 'react'; 
import InformacionCard from './body/InformacionCard';
import PinCard from './body/PinCard';
import Header from './header/Header';
 
  
const Home = () => {
  return (
    <div style={_HomeStyle.container}>
    
        <Header/>
        <div style={_HomeStyle.bodyHome}>
          <PinCard />  
          <InformacionCard />
        </div> 
        
      
    </div>
    
  );
}


const _HomeStyle = {

    container:{
      width: '100%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems: 'center',
      
    },
    bodyHome:{
      display:'flex',
      width: '950px',
      maxWidth:'1100px',
      
    }



}



export default Home;