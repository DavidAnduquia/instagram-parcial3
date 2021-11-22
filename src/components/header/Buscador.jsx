import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
 
const Buscador = () =>  {
    return (
        <div style={_buscadorStyle.container}>
            <SearchIcon style={_buscadorStyle.iconSearch} />
            <form  style={_buscadorStyle.form}>
            <input placeholder="Buscar" style={_buscadorStyle.input} type="text" /> 
            <button style={_buscadorStyle.btn} type="submit"></button> 
            </form>
        </div>
    );
};

const _buscadorStyle = {

    container:{
        backgroundColor:'#fafafa',
        borderRadius:4,
        display: 'flex',
        alignItems:'center',
        border: 'solid 1px #dbdbdb',
        width: '28%',
        height:30,
  
    },

    form:{
        display:'flex', 
        flex:1,
    },

    iconSearch:{
        paddingLeft:10,  
        fontSize:20,
        color: '#767676',
        stroke: "#767676",
        strokeWidth:2,
    },

    input:{
     
        backgroundColor: 'transparent',
        border:'none',
        width: '90%',
        marginLeft: 5,
        fontSize:15,
        outline: 'none',
    },

    btn:{
        display:'none',
    }


}

export default Buscador;
