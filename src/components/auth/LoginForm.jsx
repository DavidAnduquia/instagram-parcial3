import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import React from 'react'; 
 
  
const LoginForm = () => {
  return (
    <div style={_LoginForm.containerLoginForm}> 
        <span> Instagram </span>
        <FormControl style={_LoginForm.formControl}> 
           <InputLabel style={_LoginForm.labelInput}  size='small'  variant='filled' >Teléfono, usuario o correo electrónico </InputLabel> 
          < OutlinedInput style={_LoginForm.input} size='medium'  /> 
        </FormControl>

        <FormControl style={_LoginForm.formControl}> 
           <InputLabel style={_LoginForm.labelInput}  size='small'  variant='filled' >Contraseña </InputLabel> 
          < OutlinedInput type="password" style={_LoginForm.input} size='medium'  /> 
        </FormControl>
    </div>
  );
}


const _LoginForm = 
{
  containerLoginForm:{
      display:'flex',
      flexDirection:'column'
  },

  formControl:{
    fontSize:'12px',
    
  },

  input:{
    fontSize:'14px',
    width:'280px'
  },

  labelInput:{
 
  },

}


export default LoginForm; 
  
