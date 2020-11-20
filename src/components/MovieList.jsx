import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import ModalMovie from './ModalMovie'
import MoviesRow from './MoviesRow'

export default class MovieList extends Component {
    state = {
        show: false
    }
    componentDidMount = (movie) => {
        
    }
    handleOpenModal = () => {
      this.setState({show:true})
  };
    handleCloseModal = () => {
      this.setState({show:false})
  }
    render() {
      let {show} = this.state
    return (
      <div>
        <MoviesRow handleOpenModal={this.handleOpenModal} query={'Batman'} />
        <ModalMovie handleClose={this.handleCloseModal} show={show} />
      </div>
    );
  }
}
