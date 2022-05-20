import { useState, useEffect} from "react"
import axios from 'axios'

import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Filmes () {
    
    const [posters, setPosters] = useState([]);

	useEffect(() => {
        

		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		requisicao.then(resposta => {

            setPosters(resposta.data.map(filme => {
                return {idFilme: filme.id, tituloFilme: filme.title, imgFilme: filme.posterURL}
            }))

            console.log(posters)
		});

	}, []);

    console.log(posters)

    const displayFilmes = posters.map( poster => {
        <Link to={`/sessoes/:${poster.idFilme}`}>
            <img src={poster.imgFilme} alt={poster.titulofilme} />
        </Link>
    })

    return (
        <Container>
            <header>Selecione o filme</header>
            <ol>
                {displayFilmes}
            </ol>
        </Container>
    )
}

const Container = styled.div`
	width: 100%;
	height: 67px;

    margin-top: 67px;
    display: flex;
    justify-content: center;

	background-color: #FFFFFF;

    header {
        width: 100%;
        height: 110px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;

        color: #293845;
    }
`;