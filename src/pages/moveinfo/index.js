import { useParams } from 'react-router-dom'

function MovieInfo()  {

    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <h1>Informação do filme</h1>
            <p>Info</p>
        </div>
    )

}

export default MovieInfo