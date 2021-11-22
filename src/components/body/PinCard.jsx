import React,{ useEffect, useState } from "react";
import consulta from "../../services/dataApi";
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
      <div>   
         {
            photos.map((photo) => (
                <PinLayout 
                 photo = {photo}
                />
            ))
          } 

      </div>
    );
  }
  
 
  
  
  export default PinCard;
