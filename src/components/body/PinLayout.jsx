import React from 'react'; 
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const PinLayout = ({photo}) => {
    console.log(photo)

    return (
      <div  style={{..._stylesPinCard.pin_card }} >
         <span> { photo.photographer } </span> 
         <img src = { photo.src.large } style= {_stylesPinCard.imgStyle} alt=""></img>


         <FavoriteBorderOutlinedIcon />

         <span> ICON 2</span>
         <span> ICON 3</span>
         <span> ICON 4</span>


         <span> 40 Me gusta</span>
          
      </div>
    );
  }
 

 const _stylesPinCard =  {
    pin_card: {
        width:'38%',
        height:'100%',
        margin: '14px 10px  ',
        borderRadius: '10px',
        backgroundColor:'white'
    },

    imgStyle:{
        width:'100%',
        height:'100%',
        objectFit:'cover',
        imageRendering:'auto'
    }

 }


  export default PinLayout;
