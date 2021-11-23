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
          <a href="https://about.facebook.com/meta">Meta</a>
          <a href="https://about.instagram.com/">Información</a>
          <a href="https://about.instagram.com/blog/">Blog</a>
          <a href="https://www.instagram.com/about/jobs/">Empleo</a>
          <a href="https://help.instagram.com/">Ayuda</a>
          <a href="https://developers.facebook.com/docs/instagram">API</a>
          <a href="https://www.instagram.com/legal/privacy/">Privacidad</a>
          <a href="https://www.instagram.com/legal/terms/">Condiciones</a>
          <a href="https://www.instagram.com/directory/profiles/">
            {" "}
            Cuentas destacadas{" "}
          </a>
          <a href="https://www.instagram.com/directory/hashtags/">Hashtags</a>
          <a href="https://www.instagram.com/explore/locations/">Ubicaciones</a>
          <a href="https://www.instagram.com/web/lite/">Instagram Lite</a>
          <a href="https://www.instagram.com/topics/beauty/">Belleza</a>
          <a href="https://www.instagram.com/topics/dance-and-performance/">
            Danza
          </a>
          <a href="https://www.instagram.com/topics/fitness/">Fitness</a>
          <a href="https://www.instagram.com/topics/food-and-drink/">
            Comida y bebida
          </a>
          <a href="https://www.instagram.com/topics/home-and-garden/">
            Casa y jardín
          </a>
          <a href="https://www.instagram.com/topics/music/">Música</a>
          <a href="https://www.instagram.com/topics/visual-arts/">
            Artes visuales
          </a>
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
    justifyContent: "center",
  },
  containerBody: {
    display: "flex",
    flexDirection: "row",
  },
  imgContainerBody:{
      maxWidth: "40vh",
    flex: "2"
  },

  containerFooter: {
    display: "flex",
    marginTop: "30px",

  },
};

export default Login;
