import React from 'react'
import * as S from './styled'

function SearchMovie({value, onChange, onButtonClick}) {
  
  return (
    <S.Wrapper>
      <input 
        type="search" 
        placeholder='Digite o nome do Filme'
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <button onClick={() => onButtonClick()}>Buscar</button>            
    </S.Wrapper>
  )
}

export default SearchMovie