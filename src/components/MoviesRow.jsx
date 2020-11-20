import React, { Component } from 'react'
import {Row,Button } from "react-bootstrap";


export default class MoviesRow extends Component {
    state = {
        movies:[]
    }
    componentDidMount = async () => {
       await this.fetchMovies(this.props.query)
        console.log(this.state.movies)
    }

    fetchMovies = async (q) => {
        let baseUrl = `http://www.omdbapi.com/?`;
        let apiKey = `apikey=e88d2a55&`
        try {
            let res = await fetch(`${baseUrl}s=${q}&${apiKey}`,
                {
                method:'GET'
                })
            if (res.ok) {
                let data = await res.json()
                this.setState({movies:data.Search})
            }
        } catch (e) {
            console.log(e)
        }
    }
    render() {
let {movies} =this.state
        return (
          <Row>
            {movies.map((movie) => (
              <Button
                className="mb-2"
                onClick={() => this.props.handleOpenModal(movie.imdbID)}
              >
                {movie.Title}
              </Button>
              
            ))}
          </Row>
        );
    }
}
