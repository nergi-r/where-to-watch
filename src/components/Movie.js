import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';

class Movie extends Component {
  componentDidMount() {
    const parseUrl = this.props.movie.title.replace(' ', '+');
    const imdbUrl = 'http://www.imdb.com/find?ref_=nv_sr_fn&q=' + parseUrl + '&s=all';
    this.setState({ imdbUrl });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.selectMovie(this.props.expanded ? undefined : this.props.movie._id);
  };

  render() {
    return (
      <li style={{marginTop: '50px', marginLeft: '100px'}}>
        <Row>
          <Col>
            <a href='#' onClick={this.handleClick}>
              <h3>{this.props.movie.title}</h3>
            </a>
          </Col>
          <Col>
            {this.props.movie.xxi !== null ?
              <a href={this.props.movie.xxi}>
                <img alt='xxi' src={require('./../public/xxi-logo.png')} width="270px" height="50px" />
              </a> :
              undefined
            }
          </Col>
          <Col>
            {this.props.movie.cgv !== null ?
              <a href={this.props.movie.cgv}>
                <img alt='cgv' src={require('./../public/cgv-logo.png')} width="180px" height="50px" />
              </a> :
              undefined
            }
          </Col>
        </Row>
        {this.props.expanded === true ? 
          <Row style={{marginTop: '50px'}}>
            <Col xs="3">
              <img alt={this.props.movie.title} src={this.props.movie.imgUrl} width="140px" height="200px" />
            </Col>
            <Col xs="6">
              <h4>Description</h4><br />
              <p>{this.props.movie.description}</p>
            </Col>
            <Col xs="2">
              <a href={this.state.imdbUrl}>
                <img alt='imdb' src={require('./../public/imdb-logo.png')} width="205px" height="100px" />
              </a>
            </Col>
          </Row>
          : undefined
        }
      </li>
    );
  }
}

const mapStateToProps = ({movie}, ownProps) => {
  const expanded = movie.selectedMovieId === ownProps.movie._id;
  return { expanded };
};

export default connect(mapStateToProps, {
  selectMovie
})(Movie);

