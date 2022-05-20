import React, { useEffect } from 'react'
import SearchMovie from '../searchMovie'
import { useState } from 'react'
import {APIKey} from '../../config/key'


function Header() {
  const [text, setText] = useState('');
  
  useEffect(() => {
    if(text){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=pt-br&query=${text}&include_adult=false`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);})
    }
  }, [text]);

  return (
    <header>
      <SearchMovie 
        value={text} 
        onChange={(search) => setText(search)} 
      />
      <h1>Filmes</h1>
    </header>
  )
}

export default Header