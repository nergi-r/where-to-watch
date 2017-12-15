import {
  MOVIE_SELECT
} from '../actions/types';

const INITIAL_STATE = {
  selectedMovieId: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case MOVIE_SELECT:
      return { ...state, selectedMovieId: action.payload };

    default:
      return state;
  }
};