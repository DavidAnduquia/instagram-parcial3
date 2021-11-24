import React from "react";
import LoginForm from "./LoginForm";



const Login = () => {


  return (
    <>
      <div style={_loginStyle.containerFlex}>
        <div style={_loginStyle.containerBody}>
          <img style={_loginStyle.imgContainerBody} src="/backgroundimagenes.png"></img>

          <LoginForm />
        </div>

        <div style={_loginStyle.containerFooter}>
          <a style={_loginStyle.linkNoneFotter} href="https://about.facebook.com/meta">Meta</a>
          <a style={_loginStyle.linkNoneFotter} href="https://about.instagram.com/">Información</a>
          <a style={_loginStyle.linkNoneFotter} href="https://about.instagram.com/blog/">Blog</a>
          <a style={_loginStyle.linkNoneFotter} href="https://www.instagram.com/about/jobs/">Empleo</a>
          <a style={_loginStyle.linkNoneFotter} href="https://help.instagram.com/">Ayuda</a>
          <a style={_loginStyle.linkNoneFotter} href="https://developers.facebook.com/docs/instagram">API</a>
          <a style={_loginStyle.linkNoneFotter} href="https://www.instagram.com/legal/privacy/">Privacidad</a>
          <a style={_loginStyle.linkNoneFotter} href="https://www.instagram.com/legal/terms/">Condiciones</a>
          <a style={_loginStyle.linkNoneFotter} href="https://www.instagram.com/directory/profiles/">
            {" "}
            Cuentas destacadas{" "}
          </a>
          <a style={_loginStyle.linkNoneFotter} href="https://www.instagram.com/directory/hashtags/">Hashtags</a>
          <a style={_loginStyle.linkNoneFotter} href="https://www.instagram.com/explore/locations/">Ubicaciones</a>
          <a style={_loginStyle.linkNoneFotter} href="https://www.instagram.com/web/lite/">Instagram Lite</a>
          <a style={_loginStyle.linkNoneFotter} href="https://www.instagram.com/topics/beauty/">Belleza</a>
          <a style={_loginStyle.linkNoneFotter} href="https://www.instagram.com/topics/dance-and-performance/">
            Danza
          </a>
          <a style={_loginStyle.linkNoneFotter} href="https://www.instagram.com/topics/fitness/">Fitness</a>
          <a style={_loginStyle.linkNoneFotter} href="https://www.instagram.com/topics/food-and-drink/">
            Comida y bebida
          </a>
          <a style={_loginStyle.linkNoneFotter} href="https://www.instagram.com/topics/home-and-garden/">
            Casa y jardín
          </a>
          <a style={_loginStyle.linkNoneFotter} href="https://www.instagram.com/topics/music/">Música</a>
          <a style={_loginStyle.linkNoneFotter} href="https://www.instagram.com/topics/visual-arts/">
            Artes visuales
          </a>
        </div>
        <div style={{color:'#8C8C8C'}}>
            <p>Español (España) ^ 
             © 2021 Instagram from Meta</p>
        </div>
      </div>
    </>
  );
};

const _loginStyle = {
  containerFlex: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    fontSize:'0.9rem',
    fontWeight: '500',
    justifyContent: "center",
  },
  containerBody: {
    display: "flex",
    flexDirection: "row",
  },
  imgContainerBody:{
    maxWidth: "40vh",
    margin:'0px 20px'
  },

  containerFooter: {

    display: "flex",
    flexDirection:'row',
    justifyContent: "space-around",
    flexWrap:'wrap',
    marginTop: "40px",
    width:'90vh',
  },
  linkNone:{
    textDecoration:'none' 
 },
 linkNoneFotter:{
    textDecoration:'none',
    margin:'5px',
    color:'#8C8C8C'
 }
};

export default Login;
