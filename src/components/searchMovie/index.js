import React from 'react'
import * as S from './styled'

function SearchMovie({value, onChange, onButtonClick}) {
  function handleChange(event){
    onChange(event.target.value)
  }

  return (
    <S.Wrapper>
      <input 
        type="search" 
        placeholder='Digite o nome do Filme'
        value={value}
        onChange={handleChange}
      />
      <button onClick={() => onButtonClick()}>Buscar</button>            
    </S.Wrapper>
  )
}

export default SearchMovie