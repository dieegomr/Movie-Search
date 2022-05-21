
import SearchMovie from '../searchMovie'
import { useState } from 'react'
import {APIKey} from '../../config/key'
import * as S from '../movies/styled'



function Header() {
  const [text, setText] = useState('');
  const [movie, setMovie] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";



  function onButtonClick() {
    if(text){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=pt-br&query=${text}&include_adult=false`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setMovie(response.results)
      })
    }
  }

  return (
    <>
    <header>
      <SearchMovie 
        value={text} 
        onChange={(search) => setText(search)}
        onButtonClick={onButtonClick} 
      />
      <h1>Filmes</h1>
    </header>
    <ul>
    {movie.map(movie => {
      return (
        <S.Poster key={movie.id}>
          <a href="https://google.com.br">
          <img src={`${image_path}${movie.poster_path}`} alt="imagem do filme"></img></a>
          <span>{movie.title}</span>
        </S.Poster>
      )
    })}
    </ul>
    </>
  )
}

export default Header




