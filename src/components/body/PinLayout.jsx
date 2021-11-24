import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const PinLayout = ({ photo }) => {

  return (
    <div style={{ ..._stylesPinCard.pin_card }}>
      <div style={{..._stylesPinCard.infoAutor}}>
        <div style={{ ..._stylesPinCard.divImg}} >
        <img style={{ ..._stylesPinCard.imgHIst}} src="/i.jpeg" alt="" />
        </div>
      <span> {photo.photographer} <br /> Manchester, United Kingdom</span>
      </div>
      
      <img src={photo.src.large} style={_stylesPinCard.imgStyle} alt=""></img>

      <div>
      <FavoriteBorderOutlinedIcon />
      <FavoriteBorderOutlinedIcon />
      <FavoriteBorderOutlinedIcon />
      <FavoriteBorderOutlinedIcon />
      <FavoriteBorderOutlinedIcon />
      </div>
    </div>
  );
};

const _stylesPinCard = {
  pin_card: {
    display:'flex',
    flexDirection:'column',
    height: "100%",
    marginTop:'20px',
    backgroundColor: "white",
    border: "1px solid #D8D8D8",
  },

  imgStyle: {
    width: "100%",
    objectFit: "cover",
    imageRendering: "auto",
  },
  imgHIst: {
    maxWidth: "60px",
    maxHeight: "60px",
    borderRadius: "50%",
  },
  infoAutor:{
    display: "flex",
    padding:'10px',
    alignItems: "center",
  },
  divImg: {
    maxWidth: "70px",
    maxHeight: "70px",
    margin: "0px 15px",
    padding: "3px",
    borderRadius: "50%",
    background: 'rgb(255,188,0)',
    background: 'linear-gradient(90deg, rgba(255,188,0,1) 0%, rgba(227,2,237,1) 41%, rgba(255,0,56,1) 100%)',
    display: "flex",
    alignItems: "center",
  },
};

export default PinLayout;
