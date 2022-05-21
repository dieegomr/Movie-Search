import React from 'react'
import * as S from './styled'
import { useState, useEffect } from 'react'
import { APIKey } from '../../config/key'

function Movies() {

  const [movies, setMovies] = useState([])
  const image_path = "https://image.tmdb.org/t/p/w500";
  const movie_name = "pantera negra"
  

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=pt-br&query=${movie_name}&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);})
  }, [])
  
  return ( 
    <ul>
    {movies.map(movie => {
      return (
        <S.Poster key={movie.id}>
          <a href="https://google.com.br">
          <img src={`${image_path}${movie.poster_path}`} alt="imagem do filme"></img></a>
          <span>{movie.title}</span>
        </S.Poster>
      )
    })}
    </ul>
  )
}

export default Movies


