/*******Se arregla el tabulado y se completa con ";" y Uppercase */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Input, Tooltip } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { ControlOutlined } from "@ant-design/icons";
import RegularSeparator from "./RegularSeparator";
import { useHistory, Link } from "react-router-dom";

const { Search } = Input;
const Header = (props) => {
  const searcherShow =
    props.searcher !== null && props.searcher !== undefined
      ? props.searcher
      : true;

  const [filterModalVisible, setFilterModalVisible] = useState(false);

  let history = useHistory();

  const logout = () => {
    localStorage.removeItem("logged");
    history.push("/");
  };
  const searcher = searcherShow;
  return (
    <div style={props.style} className={"header-container"}>
      <div className={"header-content"}>
        <Link to={`/home`} className={"logo-button"}>
          <img
            alt={"logo"}
            height={"100%"}
            src={
              "https://i.ya-webdesign.com/images/news-transparent-white-1.png"
            }
          />
        </Link>

        {searcher && (
          <div style={styles.searcherContainer}>
            <Search
              placeholder="Buscar"
              onSearch={(value) => props.onSearch(value)}
              size={"large"}
            />

            <RegularSeparator />
          </div>
        )}

        {props.title && <span className={"header-title"}>{props.title}</span>}

        <Button
          type="default"
          onClick={logout}
          ghost
          style={{ fontWeight: "bold" }}
          loading={false}
          shape="round"
          icon={<LoginOutlined size={"40"} />}
        >
          <span className={"sesion-button-txt"}>Cerrar sesión</span>
        </Button>

        <Button
          type="default"
          onClick={logout}
          ghost
          style={{ fontWeight: "bold" }}
          loading={false}
          shape="round"
          icon={<ControlOutlined size={"40"} />}
        >
          <span className={"sesion-button-txt"}>Filtros</span>
        </Button>
      </div>
    </div>
  );
};

const styles = {
  searcherContainer: {
    display: "flex",
    alignItems: "center",
    width: "60%",
  },
};
/*****Se definen las propTypes*****/
Header.propTypes = {
  style: PropTypes.any,
};
/*****Se agrega ; a la sintaxis */
export default Header;
