import React from 'react';
import { Card, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const NewsCard = (props) => {

   const { style, id, img, title, description, published } = props

   return (
      <Tooltip placement="topLeft" title={title}>
         <Link to={`news/${id}`}>
            <Card
               style={{ ...{ width: 383 }, ...style }}
               cover={<div style={{ height: 200, overflow: "hidden" }}>{img}</div>}
            >
               <Meta
                  title={title}
                  description={
                     <div>
                        <p>{`${description.substr(0, 300)}... `}</p>
                        <p style={styles.dateText}>{moment(published).format('L')}</p>
                     </div>}
               />
            </Card>
         </Link>
      </Tooltip>
   )
}

const styles = {
   dateText: {
      position: "absolute",
      bottom: 0,
      right: 20,
      fontWeight: "bold"
   }
}
/*****Se definen las propTypes*****/
NewsCard.propTypes = {
   style: PropTypes.any
}
export default NewsCard;
