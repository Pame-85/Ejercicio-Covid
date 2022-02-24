import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import "./components/styles/styles.css";/*se importa los estilos en App.js*/
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import NoticiaDetalle from "./pages/NoticiaDetalle"


function App() {
  return (
    <Router>
      <div className={"container"}>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/register" component={Signup} />
          <Route path="/home/:idNoticia" component={NoticiaDetalle} />
        
      </div>
    </Router>
  );
}

export default App;
