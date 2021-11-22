import React from 'react'; 
import InformacionCard from './body/InformacionCard';
import PinCard from './body/PinCard';
 
  
const Home = () => {
  return (
    <div style={_HomeStyle.container}>
    

        <div> 
        <PinCard />   
        </div>

        <div style={_HomeStyle.infoUser}>
          <InformacionCard />
        </div> 
        
      
    </div>
  );
}


const _HomeStyle = {

    container:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      
    },

    infoUser:{
      width:'20%',
      height:'100%',
      margin: '14px', 
      borderRadius: '10px 18px',
      backgroundColor:'white',
      position: 'fixed', 
    }


}



export default Home;