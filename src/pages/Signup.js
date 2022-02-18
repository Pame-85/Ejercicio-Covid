import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { message } from "antd";
import { useHistory } from "react-router-dom";
import SignupForm from "../components/forms/SignupForm";

const Signup = (props) => {
  const { style } = props;
  const [usersNews] = useState([
    { email: "admin@hotmail.com", pass: "123123" },
  ]);
  const [rememberUserNews] = useState(
    JSON.parse(localStorage.getItem("rememberUserNews"))
  );
  const logged = JSON.parse(localStorage.getItem("logged")) || false;

  let history = useHistory();

  useEffect(() => {
    logged && history.push("/home");
  }, [logged]);

  const Signup = (values) => {
    const exist = usersNews.find((x) => {
      return x.email === values.email && x.pass === values.password;
    });
    if (exist) {
          localStorage.setItem("logged", JSON.stringify(true));
          history.push("/home");
      
    
    } else {
      message.error("email o contraseña incorrecta!", 5);
    }
  };

  return (
    <div style={style} className={"signup-container"}>
      <h1 style={{ marginBottom: 40, justifyContent: "center" }}>
        NOTICIAS COVID-19
      </h1>
      <SignupForm
        submit={Signup}
        initialValues={{
          email: rememberUserNews ? rememberUserNews.rememberUserNews : "",
          password: rememberUserNews ? rememberUserNews.password : "",
        }}
      />
    </div>
  );
};
Signup.propTypes = {
  style: PropTypes.any,
};

export default Signup;
