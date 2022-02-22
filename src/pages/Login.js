/*** Se agrega ";" a la sintaxis  Y Capitalcase login x Login y home x Home que es lo que se exporta*/

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LoginForm from "../components/forms/LoginForm";
import { message } from "antd";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const { style } = props;

  const [users] = useState([{ user: "admin", pass: "123123" }]);//Agrega un usestate sin ninguna constante desestructurada sin set...
  const [rememberUserNews] = useState(
    JSON.parse(localStorage.getItem("rememberUserNews"))
  );

  const logged = JSON.parse(localStorage.getItem("logged")) || false;

  let history = useHistory();

  useEffect(() => {
    logged && history.push("/home");
  }, [logged]);

  const Login = (values) => {
    const exist = users.find((x) => {
      return x.user === values.username && x.pass === values.password;
    });
    if (exist) {
      localStorage.setItem("logged", JSON.stringify(true));
      history.push("/home");
    } else {
      message.error("Usuario o contraseña incorrecta!", 5);
    }
  };

  return (
    <div style={style} className={"login-container"}>
      <h1 style={{ marginBottom:"40"}}>NOTICIAS COVID-19</h1>
      <LoginForm
        submit={Login}
        initialValues={{
          username: rememberUserNews ? rememberUserNews.rememberUserNews : "",
          password: rememberUserNews ? rememberUserNews.password : "",
        }}
      />
    </div>
  );
};
/*****Se definen las propTypes*****/
Login.propTypes = {
  style: PropTypes.any,
};

export default Login;
