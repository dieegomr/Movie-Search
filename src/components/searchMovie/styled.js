import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    margin: 50px;


input {
    width: 100%;
    font-size: 15px;
}

button {
    margin-left: 10px;
    
    &::hover{
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
}
`