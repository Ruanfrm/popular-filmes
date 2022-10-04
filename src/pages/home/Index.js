import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import APIKey from '../../config/key';
import { Container, Movie, MovieList, Title, P, Rodape} from './styles';


function Home() {

  const imagePath = 'https://image.tmdb.org/t/p/w500'

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey.Key}&language=pt-BR`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
  }, [])

  // Séries 

  const [Series, setTv] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${APIKey.Key}&language=pt-BR`)
    .then(response => response.json())
    .then(data => {
      setTv(data.results)
    })
  }, [])

  return (
  
    
    <Container>

      <Title>Filmes em Destaques</Title>
      <MovieList>
      {movies.map(movie => {
        return (
          <Movie key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
            </Link>
            <span>{movie.title}</span>
          </Movie>
        )
      })}
      </MovieList>

      <br />
      <hr className='Hr' />
      <br />
      <Title>Séries em Destaques</Title>
      <MovieList>
      {Series.map(serie => {
        return (
          <Movie key={serie.id}>
            <Link to={`/serie/${serie.id}`}>
              <img src={`${imagePath}${serie.poster_path}`} alt={serie.title}/>
            </Link>
            <span>{serie.title}</span>
          </Movie>
        )
      })}
      </MovieList>
      <br />
      <hr className='Hr' />
      <br />
      <Rodape>
        <h3>© Ruan Freire</h3>
      <P>Esse site é apenas um projeto React onde retorna os Filmes e Séries em alta</P>
      </Rodape>
    </Container>
    
  );
}

export default Home;