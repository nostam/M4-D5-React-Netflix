import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";



export default class ModalMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currenntMovie: {},
        currentMovieId:props.currenntMovie
  };
    };


//   componentDidMount = async (props) => {
//     console.log(this.state.currenntMovieId);
//     console.log(this.props.currenntMovie);
//   };
    
    componentDidUpdate = async (prevProp,prevState) => {
        if (prevProp.currentMovie !== this.props.currentMovie) {
            let query = (this.props.currentMovie.join(''))
                await this.fetchMovies(query);
        }
    }

  fetchMovies = async (q) => {
    let baseUrl = `http://www.omdbapi.com/?`;
    let apiKey = `apikey=e88d2a55&`;
    try {
      let res = await fetch(`${baseUrl}i=${q}&${apiKey}`, {
        method: "GET",
      });
      if (res.ok) {
        let data = await res.json();
        console.log(data);
        console.log(typeof data);
        this.setState({ currentMovie: data });
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
      let { show, handleClose } = this.props;
      let {currentMovie} = this.state
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{currentMovie?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}


