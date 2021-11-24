import React from "react";

const InformacionCard = () => {
  return (
    <div style={_style.maindiv}>
      <div style={_style.perfil}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}} >
          <div  style={_style.divImg} >
            <img style={_style.imgHIst} src="/i.jpeg" alt="" />
          </div>
        </div>
        <div>
          seedcharlie
          carlos castillo
        </div>
        <a href="">Cambiar</a>
      </div>

      <div style={{display: "flex", alignItems: "center", alignContent: "espace-between"}}>
        <p style={{margin:'5px'}}>Sugerencias para ti</p>
        <p>Ver todo</p>
      </div>

      <div style={_style.perfil}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}} >
          <div   >
            <img style={_style.imgHIst} src="/i.jpeg" alt="" />
          </div>
        </div>
        <div>
          seedcharlie
          carlos castillo
        </div>
        <a href="">seguir</a>
      </div>
      <div style={_style.perfil}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}} >
          <div  >
            <img style={_style.imgHIst} src="/i.jpeg" alt="" />
          </div>
        </div>
        <div>
          seedcharlie
          carlos castillo
        </div>
        <a href="">seguir</a>
      </div>
      <div style={_style.perfil}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}} >
          <div   >
            <img style={_style.imgHIst} src="/i.jpeg" alt="" />
          </div>
        </div>
        <div>
          seedcharlie
          carlos castillo
        </div>
        <a href="">seguir</a>
      </div>

    </div>
  );
};

const _style = {
  maindiv: {
    margin: "14px 30px",
    padding: "10px 30px",
    borderRadius: "10px 18px",
    backgroundColor: "white",
  },
  perfil:{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent : 'space-between',
    
  },
  divImg: {
    maxWidth: "70px",
    maxHeight: "70px",
    margin: "0px 15px",
    padding: "3px",
    borderRadius: "50%",
    background: "rgb(255,188,0)",
    background:
      "linear-gradient(90deg, rgba(255,188,0,1) 0%, rgba(227,2,237,1) 41%, rgba(255,0,56,1) 100%)",
    display: "flex",
    alignItems: "center",
  },
  imgHIst: {
    maxWidth: "60px",
    maxHeight: "60px",
    borderRadius: "50%",
  },
};

export default InformacionCard;
