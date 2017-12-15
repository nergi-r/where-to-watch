import {
  MOVIE_SELECT
} from './types';

export const selectMovie = (id) => {
  return {
    type: MOVIE_SELECT,
    payload: id
  };
}