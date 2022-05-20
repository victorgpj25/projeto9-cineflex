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

		});

	}, []);

    const displayFilmes = posters.map( (poster, index) => {
        return (
            <StyledLink to={`/sessoes/:${poster.idFilme}`} key={index} >
                <img src={poster.imgFilme} alt={poster.titulofilme} />
            </StyledLink>
        )
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

const StyledLink = styled(Link)`
    width: 44%;
    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom: 5%;

    img {
        width: 90%;
        height: 90%;
    }
    :nth-child(odd) {
        margin-right: 12%;
    }
`;

const Container = styled.div`
	width: 100%;
    height:100%;

    margin-top: 67px;
    display: flex;
    flex-direction: column;
    align-items:center;


	background-color: #FFFFFF;

    header {
        width: 100%;
        height: 90px;

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

    ol {
        width: 87.5%;
        display: flex;
        flex-wrap: wrap;
    }


`;

