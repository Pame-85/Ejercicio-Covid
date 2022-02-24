import React from "react";
import PropTypes from "prop-types";

/*Falta definir el componente  Footer*/

const Footer = (props) => {
  const { style } = props;

  return (
    <div style={{ ...styles.container, ...style }}>
      <span style={{ color: "white" }}>
        Desarrollado por{" "}
        <span
          style={{ color: "white", fontWeight: "bold", fontStyle: "italic" }}
        >
          Francisco
        </span>
      </span>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent:
      "center", /*Se agrego este style para centrar el texto del footer*/
    alignItems: "center",
    width: "100%",
    height:50,
    padding:30,
    backgroundColor: "#535C68",
  },
};

Footer.propTypes = {
  style: PropTypes.any,
};

export default Footer;
