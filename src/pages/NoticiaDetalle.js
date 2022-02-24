import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { Card } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

const NoticiaDetalle = () => {
  const params = useParams() 
  const [noticiaDetalle,setNoticiaDetalle] = useState([])

  console.table([params.idNoticia])

  useEffect(() => {
    axios.get (`http://localhost:8000/api/noticias/uuid/${params.idNoticia}`)
    .then(res => res.json())
    .then(data => setNoticiaDetalle(data))
  }, [params.idNoticia])

  console.log(noticiaDetalle)

  const { Meta } = Card;
  const Card = (props) => {
  const { style,id, img, title, description, published } = props;

  return (
      <div>
    <Link to={`noticia/${params.id}`}>
    <Card
      style={{ ...{ width: 383 }, ...style }}
      cover={<div style={{ height: 200, overflow: "hidden" }}>{img}</div>}
    >
      <Meta
        title={title}
        description={
          <div>
            <p>{`${description.substr(0, 300)}... `}</p>
            <p style={style.dateText}>{moment(published).format("L")}</p>
          </div>
        }
      />
    </Card>
  </Link>
  </div>
  )
  }
}
NoticiaDetalle.propTypes = {
  style: PropTypes.any,
};

export default NoticiaDetalle;
