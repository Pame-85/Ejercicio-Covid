import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import Header from "../components/Header";
import MainNews from "../components/MainNews";
import NewsCard from "../components/NewsCard";
import InfiniteScroll from "react-infinite-scroller";
import LineSeparator from "../components/LineSeparator";
import IdleTimerContainer from "../components/IdleTimerContainer";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";


const Home = (props) => {
  const { style } = props;
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [newsToShow, setNewsToShow] = useState(10);
  const [loading, setLoading] = useState(true);
  const logged = JSON.parse(localStorage.getItem("logged")) || false;
  const history = useHistory();

  

  useEffect(() => {
    
    if (logged) {
      // Mediante llamada axios obtenemos data de la Api
      axios
        .get("http://localhost:8000/api/noticias")
        .then((res) => {
          let data = res.data.posts; //Guardamos posts en constante data

          // Ordenamos data por relevancia
          const orderedData = data.sort(function (a, b) {
            return b.thread.domain_rank - a.thread.domain_rank;
          });

          setData(orderedData); //Guardamos data original en estado
          setFilteredData(orderedData);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      history.push("/");
    }
  }, [history, logged]);

  // Render de Noticias
  function renderNews() {
    //Retornamos resto de noticias obviando primeras 5. newsToShow irá aumentando al realizar scroll

    const news = filteredData.filter((x, idx) => idx > 4 && idx <= newsToShow);

    return news.map((x, idx) => (
      <NewsCard
        key={idx}
        style={{ marginBottom: 2, height: 450 }}
        id={x.uuid}
        img={
          <img
            alt={"News"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={x.thread.main_image}
          />
        }
        title={x.title}
        description={x.text}
        published={x.published}
      />
    ));
  }

  function _onSearch(value) {
    //Filtramos por título y texto
    let newData = data.filter(
      (x) => x.title.includes(value) || x.text.includes(value)
    );

    setFilteredData(newData);
  }

  const numberOfNews = filteredData.length;

  return loading ? (
    <div className={"spin-container"}>
      <Spin size="large" />
    </div>
  ) : (
    <div style={style}>
      <IdleTimerContainer />{" "}
      {/*Componente encargado de cerrar sesión por inactividad*/}
      <Header onSearch={(value) => _onSearch(value)} />
      <div className={"body-home"}>
        {numberOfNews > 0 && (
          <div>
            <MainNews
              data={filteredData} //Datos a renderizar (unicamente primeros 5)
            />

            <LineSeparator size={"small"} />

            {numberOfNews > 5 ? (
              <div>
                <h2>Más Noticias</h2>
                <InfiniteScroll
                  className={"news-container"}
                  key={0}
                  pageStart={0}
                  loadMore={() => setNewsToShow(newsToShow + 10)}
                  hasMore={newsToShow <= filteredData.length}
                  loader={
                    <div className={"spin-loader-more-container"}>
                      <Spin size="large" />
                    </div>
                  }
                >
                  {renderNews()}
                </InfiniteScroll>
              </div>
            ) : (
              <h2>
                Modifique los patrones de búsqueda para obtener más resultados
              </h2>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
