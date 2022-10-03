import {Container, Hr, Movie, Movielist, Paragrafo, Rodape, Serieslist, Title } from "./styles";
import APIKey from "../../config/key"
import { useState, useEffect } from "react";




    function Cartaz() {
        
        
        const [Movies, setMovies] = useState([])

        const image_path = 'https://image.tmdb.org/t/p/w500'

    //consumir api Filmes
        useEffect(() => {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey.Key}&language=pt-BR&page=2`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
        }, [])

/*
        // Consumir api de filmes em cartaz

        const [Now, setNow] = useState([])

        const image_path = 'https://image.tmdb.org/t/p/w500'


        useEffect(() => [
            fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey.Key}&language=pt-BR&page=1 `)
            .then(response => response.json())
            .then(data => setNow(data.results))
        ], [])
    */


        return(
            <Container>
              
            <Movielist>

                {Movies.map(filmes => {
                    return(
                        <Movie >
                             <a href="https://warezcdn.com/listing.php?type=movies"><img src={`${image_path}${filmes.poster_path}`} alt={filmes.title} /></a>
                    <span>{filmes.title}</span>
                        </Movie>
                    )
                })}
            </Movielist>
          </Container>
        )
    }

export default Cartaz;