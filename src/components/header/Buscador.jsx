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
        borderRadius:'3px',
        display: 'flex',
        alignItems:'center',
        border: 'solid 1px #dbdbdb',
        height:'25px',
        
    },

    form:{
        display:'flex', 
        flex:1,
    },

    iconSearch:{
        paddingLeft:10,  
        fontSize:20,
        color: '#CDCDCD',
        stroke: "#CDCDCD",
        strokeWidth:1,
        maxWidth:'15px'
    },

    input:{
     
        backgroundColor: 'transparent',
        border:'none',
        marginLeft: 5,
        fontSize:15,
        outline: 'none',
    },

    btn:{
        display:'none',
    }


}

export default Buscador;
