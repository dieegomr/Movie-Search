import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
padding: 50px 200px;
justify-content: space-between;

.infoSide {
    display: Flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-widht: 50%;
    padding: 25px;
}

img {
    max-widht: 50%;
    height: 600px;
    border-radius: 50px;
    padding: 25px;
}

h1 {
    margin-bottom: 2px;
}

h2 {
    margin-top: 2px;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 2px;
}

.releaseDate{
    opacity: 0.5;
    font-size: 15px;
    margin-top: 2px;
}

.sinopse{
    line-height: 130%;
}


button {
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%
}
`
