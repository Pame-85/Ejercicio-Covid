import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div className={"container"}>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/register" component={Signup} />
        
      </div>
    </Router>
  );
}

export default App;
