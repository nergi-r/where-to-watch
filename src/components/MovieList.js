import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './../styles.css';
import { Container, Row } from 'reactstrap';
import background from './../public/background-image.jpg';

class MovieList extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    const url = 'https://where-to-watch-backend.herokuapp.com/api/movies';
    axios.get(url)
    .then(res => {
      this.setState({ data: res.data });
    })
    .catch(err => console.log(err));
  }

  render() {
    const movies = this.state.data;
    return (
      <div style = {{backgroundImage: `url(${background})`}}>
        <header className="App-header">
          <h1 className="App">Now Playing Movies @ XXI CGV</h1>
        </header>
        <Container>
          <Row>
            <ul className='list'>
              {movies.map((movie) => 
                <Movie movie={movie} key={movie._id} />
              )}
            </ul>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MovieList;
