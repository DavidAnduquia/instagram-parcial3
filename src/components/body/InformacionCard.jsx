import React, { useEffect, useState } from "react";
import consultaMenor from "../../services/dataApiDos";

const InformacionCard = () => {


  const [fotos,setPhotos] = useState([]);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    const res = await consultaMenor();
  
    setPhotos(res.data.photos);
  };



  return (
    <div style={_style.maindiv}>
      <div style={_style.perfil}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img style={_style.imgHIstUno} src="/i.jpeg" alt="" />
          <div style={{ marginLeft: "15px" }}>
            <span style={{ fontSize: "1rem", fontWeight: "bold", fontFamily: 'Poppins sans-serif', }}>seedch</span>
            <br />
            <span style={{ color: "#A7A7A7" }}>carlos castillo</span>
          </div>
        </div>
        <a style={_style.link} href="">
          Cambiar
        </a>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "espace-between",
        }}
      >
        <p style={{ margin: "5px" }}>Sugerencias para ti</p>
        <p>Ver todo</p>
      </div>

      {fotos.map((photo) => (
        <div style={_style.perfil}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img style={_style.imgHIst} src={photo.src.large} alt="" />
          <div style={{ marginLeft: "15px" }}>
            <span style={{ fontSize: "1rem", fontWeight: "bold" }}>seedch</span>
            <br />
            <span style={{ color: "#A7A7A7" }}>{photo.photographer}</span>
          </div>
        </div>
        <a style={_style.link} href="">seguir</a>
      </div>

      ))}

      
    </div>
  );
};

const _style = {
  maindiv: {
    margin: "50px 0px 10px 15px",
    padding: "0px 0px 0px 10px",
    borderRadius: "10px 18px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    width: "35%",
    maxWidth: "35%",
  },
  perfil: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10px",
  },

  imgHIst: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
  imgHIstUno: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
  },
  link: {
    textDecoration: "none",
    color: "#0095F6",
    fontWeight: "550",
  },
};

export default InformacionCard;
