import React, { Component } from "react";
import { Row, Button, Carousel, Col, Card } from "react-bootstrap";
import "../styles/MovieRow.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default class MoviesRow extends Component {
  state = {
    movies: [],
  };
  componentDidMount = async () => {
    await this.fetchMovies(this.props.query);
    console.log(this.state.movies);
  };

  fetchMovies = async (q) => {
    let baseUrl = `http://www.omdbapi.com/?`;
    let apiKey = `apikey=e88d2a55&`;
    try {
      let res = await fetch(`${baseUrl}s=${q}&${apiKey}`, {
        method: "GET",
      });
      if (res.ok) {
        let data = await res.json();
        this.setState({ movies: data.Search });
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 3,
    //   slidesToScroll: 3,
    // };
    let { movies } = this.state;
    return (
      <Row className="my-4 mx-4 no-gutters">
        <Row>
          <h3 className="mx-3 movieRowTitle text-capitalize text-white">
            {this.props.query}
          </h3>
        </Row>
        <Row>
          {movies.map((movie) => (
            <Col
              xs={12}
              md={4}
              lg={3}
              xl={2}
              className="my-4"
              key={movie.imdbID}
            >
              <Card style={{ width: "15rem" }}>
                <a onClick={() => this.props.handleOpenModal(movie.imdbID)}>
                  <Card.Img variant="top" src={movie.Poster} />{" "}
                </a>
              </Card>
            </Col>
          ))}
        </Row>
        {/* <Carousel
          className="movieCarousel"
          style={{ heigth: "300px" }}
          indicators="false"
          controls="true"
        >
          {movies.map((movie) => (
            <Col md={4} style={{ height: "300px" }}>
              <Carousel.Item key={movie.imdbID}>
                <img
                  className="d-flex img-fluid"
                  src={movie.Poster}
                  alt="movie-poster"
                ></img>
                <Carousel.Caption>
                  <h3>
                    <a onClick={() => this.props.handleOpenModal(movie.imdbID)}>
                      {movie.Title} ({movie.Year})
                    </a>
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Col>
          ))}
        </Carousel> */}

        {/* <Slider {...settings}>
          {movies.map((movie) => (
            <div style={{ height: "300px" }}>
              //{" "}
              <h3>
                {movie.Title} ({movie.Year})
              </h3>
              <img
                className="img-fluid"
                src={movie.Poster}
                alt="movie-poster"
              />
            </div>
          ))}
        </Slider>*/}
      </Row>
    );
  }
}
