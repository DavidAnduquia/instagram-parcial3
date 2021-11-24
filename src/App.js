import './App.css';
import Login from './components/auth/Login';
import Header from './components/header/Header';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Route,
  Routes 
}  from 'react-router-dom';


function App() {
  return (
    <div >
   {/*     <Header /> */}
    {/*    <Home /> */}

      <Home />
    </div>
  );
}

const _AppStyle = {

  container:{
    with:'100%'
  }



}


export default App;
