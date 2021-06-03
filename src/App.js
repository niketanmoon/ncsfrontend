import React from "react";
import "./App.css";
import Search from "./components/Search";
import MovieItem from "./components/MovieItem";
import { Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { selectMovieList } from "./features/movieSlice";

function App() {
  const movieList = useSelector(selectMovieList);
  return (
    <div className="app">
      <div className="app__container">
        <Search />
        <div className="app__searchContainer">
          <Row>
            {[]
              .concat(movieList)
              .sort((a, b) =>
                a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
              )
              .map((item, i) => (
                <Col xs="3">
                  <MovieItem item={item} />
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
