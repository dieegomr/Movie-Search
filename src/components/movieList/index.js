
import SearchMovie from '../searchMovie'
import { useState } from 'react'
import {APIKey} from '../../config/key'
import Movie from '../movie';
import * as S from './styled';



function MovieList() {
  const [text, setText] = useState('');
  const [movies, setMovies] = useState([]);
  



  function onButtonClick() {
    if(text){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=pt-br&query=${text}&include_adult=false`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setMovies(response.results)
      })
    }
  }

  return (
    <>
      <header>
        <SearchMovie value={text} 
        onChange={(search) => setText(search)} onButtonClick={onButtonClick}/>
        <h1>Filmes</h1>
        <S.MovieList>
        {movies.map((movie) => <Movie key={movie.id} movie={movie}/>)}
        </S.MovieList>
      </header>

    </>
  )
}

export default MovieList




