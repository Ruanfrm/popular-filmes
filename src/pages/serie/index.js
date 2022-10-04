import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import  APIKey  from "../../config/key";
import { Container, Title} from "../serie/styles"


function Series() {
// Consumir API Série(tv)

    const imagePath = 'https://image.tmdb.org/t/p/w500'


    const { id } = useParams()
    const [serie, setTv] = useState([])


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${APIKey.Key}&language=pt-BR`)
    .then(response => response.json())
    .then(data => {
      const {name, poster_path, air_date, overview, first_air_date} = data
      const serie = {
        id,
        name,
        image: `${imagePath}${poster_path}`,
        sinopse: overview,
        releaseDate: air_date || first_air_date
      }
      setTv(serie)
    })
  }, [id])



    return(
        <Container>
            <div className="serie">
<img src={serie.image} alt={serie.sinopse}/>
<div className="details">
  <h1>{serie.name}</h1>
  <h3>Nome Original: {serie.name}</h3>

  <span><span className="sinopse">Sinopse: </span>{serie.sinopse}</span>
  <span className='release-date'>Data de Lançamento: {serie.releaseDate}</span>
  <Link to="/"><button>Voltar</button></Link>
  <a href="https://warezcdn.com/listing.php?type=series" target="_blank"><button>Assistir</button></a><br />
  <p>Após redirecionado, busque a serie desejada pelo nome na barra de pesquisa.</p>


</div>
</div>
        </Container>
    )
}

export default Series;


