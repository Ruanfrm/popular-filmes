import styled from "styled-components"

 export const Container = styled.div`


`

export const Movielist = styled.ul`
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap: 3rem;
        row-gap: 4rem;

`
export const Serieslist = styled.ul`
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap: 3rem;
        row-gap: 4rem;

`
export const now_playing = styled.ul`
       list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap: 3rem;
        row-gap: 4rem;
`

export const Paragrafo = styled.p`
text-align: center;
margin: 2rem 0;
font-size: 1.3  rem;
`


export const Title = styled.h1`
    font-weight: bold;
    text-align: center;
    margin: 4rem 0;
    color: white;
`


export const Rodape = styled.h3`
    text-align: center;
    margin: 4rem 0;
`
export const Movie = styled.li`
    
        display: flex;
        flex-direction: column;
        align-items: center;
    

    img {
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 1rem;
    }

    span {
        font-weight: bold;
        font-size: 130%;
    }

    a {
        transition: all 0.3s;
    }
    
    a:hover {
        transform: scale(1.1);
    }
`