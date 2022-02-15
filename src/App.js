import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
   return (
      <Router>
         <div className={"container"}>
            <Route path="/" exact component={Login}/>
            <Route path="/home" component={Home}/>
         </div>
      </Router>
   )
}

export default App
