import './App.css';
import Login from './components/auth/Login';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Route, Routes
}  from 'react-router-dom';


function App() {
  return (
<<<<<<< HEAD
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

=======

    <Router> 
    <div className="App">
 
      <Routes>
          <Route path="/" element={ <Login />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/home"  element={ <Home />} />
      </Routes>
>>>>>>> 7ef1ecfa30d9799fb9c1d3def5bf778f308488ea


    </div>
    </Router>
  );
}



export default App;
