import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";

const LoginForm = () => {
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
        <button>Iniciar Sesión</button>
        <img src="/separador.png" alt="" />
        <p>
          <img src="" alt="" /> Inicia sesión con Google
        </p>
        <a href="">¿Has olvidado la contraseña?</a>
      </div>

      <div style={_LoginForm.notienescuenta}>
        <p>
          ¿No tienes una cuenta? <a href="">Regístrate</a>
        </p>
      </div>
      <div style={_LoginForm.descargarapp}>Descargar app</div>
      <img src="/apps.png" alt="" />
    </div>
  );
};

const _LoginForm = {
  containerLoginForm: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    maxWidth:'45vh'
  },
  imagenInsta: {
    maxWidth: "300px",
  },
  formCtrl: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 50px",
    border: "1px solid #C1C1C1",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: "12px",
  },
  input: {
    fontSize: "14px",
    width: "280px",
  },
  labelInput: {},

};

export default LoginForm;
