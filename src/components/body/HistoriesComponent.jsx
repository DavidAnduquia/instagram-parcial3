import React, { useEffect, useState } from "react";
import consulta from "../../services/dataApi";

const HistoriesComponent = () => {

  const [fotos,setPhotos] = useState([]);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    const res = await consulta();
  
    setPhotos(res.data.photos);
  };

  return (
    <div style={_style.mainDiv}>
      {fotos.map((photo) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent:'center',
          }}
        >
          <div style={_style.divImg}>
            <div style={_style.divImgdos}>
              <img style={_style.imgHIst} src={photo.src.large} alt="" />
            </div>
          </div>
          <h6 style={{
            maxHeight:'70px', margin:'0px', marginTop: '7px', fontWeight:'500'
          }}>
          {photo.photographer}
          </h6>
        </div>
      ))}
    </div>
  );
};

const _style = {
  mainDiv: {
    display: "flex",
    flexDirection: "row",
    padding: "20px 10px",
    border: "0.5px solid #D8D8D8",
    marginTop: "30px",
    backgroundColor: "white",
    borderRadius: "4px",
    overflow: 'auto',
    whiteSpace: 'nowrap',
    scrollbarHeight: 'none',
  },
  divImg: {
    width: "63px",
    height: "63px",
    margin: "0px 15px",
    padding: "2px",
    borderRadius: "50%",
    background: "rgb(255,188,0)",
    background:
      "linear-gradient(90deg, rgba(255,188,0,1) 0%, rgba(227,2,237,1) 41%, rgba(255,0,56,1) 100%)",
    display: "flex",
    alignItems: "center",
  },
  divImgdos: {
    width: "60px",
    height: "60px",
    padding: "2px",
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  },
  imgHIst: {
    width: "58px",
    height: "58px",
    borderRadius: "50%",
  },
};

export default HistoriesComponent;
