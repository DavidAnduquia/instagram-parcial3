import React from "react";

const HistoriesComponent = () => {
  return (
    <div style={_style.mainDiv}>
      <div
        style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={_style.divImg}>
          <img style={_style.imgHIst} src="/i.jpeg" alt="" />
        </div>
        carlos
      </div>
      <div
        style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={_style.divImg}>
          <img style={_style.imgHIst} src="/i.jpeg" alt="" />
        </div>
        carlos
      </div>
      <div
        style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={_style.divImg}>
          <img style={_style.imgHIst} src="/i.jpeg" alt="" />
        </div>
        carlos
      </div>
    </div>
  );
};

const _style = {
  mainDiv: {
    display: "flex",
    flexDirection: "row",
    padding: "10px",
    border: "1px solid #D8D8D8",
    width: "100%",
    marginTop: "20px",
  },
  divImg: {
    maxWidth: "90px",
    maxHeight: "90px",
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
    maxWidth: "80px",
    maxHeight: "80px",
    borderRadius: "50%",
  },
};

export default HistoriesComponent;
