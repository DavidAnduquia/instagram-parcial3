import React from 'react'; 
import LoginForm from './LoginForm';
 
  
const Login = () => {
  return (
      <>
       <div> 
    
            <div  style={_loginStyle.containerBody}> 
            <img src="/backgroundimagenes.png"  ></img> 


            {/* Formulario

                        https://apps.apple.com/app/instagram/id389801252?vt=lo
                        https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=CE1FDF68-0026-474F-8AA7-58D11D1557F6&utm_content=lo&utm_medium=badge
                        */} 

            <LoginForm />
            </div>

            <div>
                <a href="https://about.facebook.com/meta">Meta</a>
                <a href="https://about.instagram.com/">Información</a>
                <a href="https://about.instagram.com/blog/">Blog</a>
                <a href="https://www.instagram.com/about/jobs/">Empleo</a>
                <a href="https://help.instagram.com/">Ayuda</a>
                <a href="https://developers.facebook.com/docs/instagram">API</a>
                <a href="https://www.instagram.com/legal/privacy/">Privacidad</a>
                <a href="https://www.instagram.com/legal/terms/">Condiciones</a>
                <a href="https://www.instagram.com/directory/profiles/"> Cuentas destacadas </a>
                <a href="https://www.instagram.com/directory/hashtags/">Hashtags</a>
                <a href="https://www.instagram.com/explore/locations/">Ubicaciones</a>v
                <a href="https://www.instagram.com/web/lite/">Instagram Lite</a>
                <a href="https://www.instagram.com/topics/beauty/">Belleza</a>
                <a href="https://www.instagram.com/topics/dance-and-performance/">Danza</a>
                <a href="https://www.instagram.com/topics/fitness/">Fitness</a> 
                <a href="https://www.instagram.com/topics/food-and-drink/">Comida y bebida</a>
                <a href="https://www.instagram.com/topics/home-and-garden/">Casa y jardín</a>
                <a href="https://www.instagram.com/topics/music/">Música</a>
                <a href="https://www.instagram.com/topics/visual-arts/">Artes visuales</a> 

            </div>            

        </div>

       
    </>
  );
}

const _loginStyle = {
        containerBody:{
            display:'flex',
            flexDirection:'row'

        },

        containerFooter:{

        }
}


export default Login;