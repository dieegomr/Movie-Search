import React from 'react'
import * as S from './styled';
import { Link } from 'react-router-dom'

function Movie(props) {
  const image_path = "https://image.tmdb.org/t/p/w500";

  const {movie} = props;

  return (
          <S.MoviePoster>
          <Link to={`/MovieList/${movie.id}`}>
            <img src={`${image_path}${movie.poster_path}`} alt="imagem do filme" />
          </Link>
          <span>{movie.title}</span>
          </S.MoviePoster>
  )
}

export default Movie