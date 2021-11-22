import React from 'react'; 
import SendIcon from '@material-ui/icons/Send'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const MenuDerecho = () => {
  return (
    <div className="App" style={_HeaderStyle.container}>
 
        <HomeIcon />
        <SendIcon /> 
        <AddBoxOutlinedIcon />
        <ExploreOutlinedIcon/>
        <FavoriteBorderIcon />
        <CircleOutlinedIcon />
     </div>
  );
}

const _HeaderStyle = {

  container:{
    display: 'flex',
    flex: 1 ,
    
  }
}


export default MenuDerecho;