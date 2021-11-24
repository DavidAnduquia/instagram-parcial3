import React,{ useEffect, useState } from "react";
import consulta from "../../services/dataApi";
import HistoriesComponent from "./HistoriesComponent";
import PinLayout from "./PinLayout";

 


const PinCard = () => {

    const [photos,setPhotos] = useState([]);

    useEffect( () => {
      loadImages();
    }, []);
    

    const loadImages = async () => {
      const res = await consulta();
  
      setPhotos(res.data.photos);
    }

    return (
      <div style={_styles.mainDiv}>   
          <HistoriesComponent/>
          <div style={_styles.pindiv}>
          {
            photos.map((photo) => (
                <PinLayout 
                 photo = {photo}
                />
            ))
          } 
          </div>
         

      </div>
    );
  }
  
const _styles = {
  mainDiv : {
    width:'100%'
  },
  pindiv:{
    width:'100%'
  }
}
  
  
export default PinCard;
