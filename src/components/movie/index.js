import React from 'react'
import * as S from './styled';

function Movie(props) {
  const image_path = "https://image.tmdb.org/t/p/w500";

  const {movie} = props;

  return (
          <S.MoviePoster>
          <a href="https://google.com.br">
          <img src={`${image_path}${movie.poster_path}`} alt="imagem do filme"></img></a>
          <span>{movie.title}</span>
          </S.MoviePoster>
  )
}

export default Movie