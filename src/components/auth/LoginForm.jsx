import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import React, {useState} from "react";
import { GoogleLogin , GoogleLogout } from 'react-google-login';

import {
   Link,
   useNavigate
}  from 'react-router-dom';


const LoginForm = () => {

  let navigate  = useNavigate();
 
    
  const onSubmit = (e) => {
    /* login(e.email,e.password).then(data => {
      console.log(data.user);
      navigate(`/home/${data.user.email}`);
    }).catch(error => {
        console.log(error)
    }); 
   */

  }
 
  const onLoginSuccess = (e) => {
    console.log('Login activo bienve' , e.profileObj);
    navigate(`/home`);

  };

  const onFailureSuccess = (e) => {
    console.log('Fallo pailas ñaño' , e.profileObj);

  }

  const logout = () => {
    console.log('porfin te largas');
  }



  return (
    <div style={_LoginForm.containerLoginForm}>
      <div style={_LoginForm.formCtrl}>
        <img style={_LoginForm.imagenInsta} src="/Instagram-Logo.png" alt="" />
        <FormControl style={_LoginForm.formControl}>
          <InputLabel
            style={_LoginForm.labelInput}
            size="small"
            variant="filled"
          >
            Teléfono, usuario o correo electrónico{" "}
          </InputLabel>
          <OutlinedInput style={_LoginForm.input} size="medium" />
        </FormControl>

        <FormControl style={_LoginForm.formControl}>
          <InputLabel
            style={_LoginForm.labelInput}
            size="small"
            variant="filled"
          >
            Contraseña{" "}
          </InputLabel>
          <OutlinedInput
            type="password"
            style={_LoginForm.input}
            size="medium"
          />
        </FormControl>
        <button style={{fontSize:'0.9rem',fontWeight:'600', width:'100%', margin:'10px 0px', height:'35px', color:'#fff', backgroundColor:'#2F95F6', border:'solid 1px', borderRadius:'5px' }}>Iniciar Sesión</button>

        <img style={_LoginForm.imgseparador} src="/separador.png"  />
       
        <GoogleLogin
      clientId="235998716651-ai03rgnjb3r3jrgp4vufhvm6t3kflg0o.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={onLoginSuccess}
      onFailure={onFailureSuccess}
      cookiePolicy={'single_host_origin'}
      > 
      
      <a href="" style={{color:'#0076C3', fontWeight:'800', marginTop:'20px', textDecoration:'none'}}  c>
            Inicia sesión con Google
        </a>
       </GoogleLogin>


        <a type="submit" style={_LoginForm.linkNonePass} href="">¿Has olvidado la contraseña?</a>
      </div>

      <div style={_LoginForm.notienescuenta}>
        <p>
          ¿No tienes una cuenta? <a style={_LoginForm.linkNoneRegister} href="">Regístrate</a>
        </p>
      </div>
      <div style={_LoginForm.descargarapp}>Descargar app</div>
      <img src="/apps.png" alt="" />
   
      <Link to="/home" > aqt </Link>
     

  
   
    </div>
  );
};

const _LoginForm = {
  containerLoginForm: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    maxWidth:'40vh',
  },
  imagenInsta: {
    maxWidth: "180px",
  },
  
  formCtrl: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 30px",
    border: "1px solid #C1C1C1",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom:'30px'
  },
  notienescuenta: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 50px",
    border: "1px solid #C1C1C1",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
  },
  descargarapp: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 50px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
  },
  formControl: {
    width:"100%",
    marginTop: "10px",
  },
  input: {
    fontSize: "14px",
    
  },
  labelInput: {},
  imgseparador:{
    width: "100%"
  },
  linkNone:{
    textDecoration:'none' 
 },
 linkNonePass:{
  textDecoration:'none',
  marginTop: "20px",
  color:'#0D376B'
},
linkNoneRegister:{
  textDecoration:'none',
  fontWeight:'600',
  color:'#2F95F6'
}

};

export default LoginForm;
