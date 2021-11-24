import './App.css';
import Login from './components/auth/Login';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Route, Routes
}  from 'react-router-dom';


function App() {
  return (

    <Router> 
    <div className="App">
 
      <Routes>
          <Route path="/" element={ <Login />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/home"  element={ <Home />} />
      </Routes>


    </div>
    </Router>
  );
}



export default App;
