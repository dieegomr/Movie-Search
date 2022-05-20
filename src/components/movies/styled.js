import styled from 'styled-components'

export const Poster = styled.li`
display: flex;
flex-direction: column;
align-items: center;

    img {
        width: 180px;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    span {
        font-weight: bold;
        text-align: center;
    }

    a {
        transition: all 0.3s;
    }

    a:hover {
        transform: scale(1.02);
    }
`;