import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {APIKey} from '../../config/key'
import { Container } from './styled'


function MovieInfo()  {

    const image_path = "https://image.tmdb.org/t/p/w500";
    const {id} = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-br`)
      .then((response) => response.json())
      .then((response) => {

        const { title, original_title, overview, poster_path, release_date} = response
        
            const movie = {
            id,
            title,
            originalTitle: original_title,
            sinopse: overview,
            poster: `${image_path}${poster_path}`,
            releaseDate: release_date,
        }

        setMovie(movie)
        console.log(movie.poster);
      })
    }, [id])
    


    return (
        <Container>
            <div className='imageSide'>
                <img src={movie.poster} alt="poster do filme"></img>
            </div>
            <div className='infoSide'>
                <h1>{movie.title}</h1>
                <h2>{movie.originalTitle}</h2>
                <p className='releaseDate'>Data de lançamento: {movie.releaseDate}</p>
                <p className='sinopse'>Resumo do filme: {movie.sinopse}</p>
                <Link to="/">
                    <button>Página Inicial</button>
                </Link>



                
            </div>

        </Container>
    )

}

export default MovieInfo

