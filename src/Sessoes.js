import { useState, useEffect} from "react"
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import axios from "axios"


export default function Sessoes () {

    const { idFilme } = useParams()

    const [sessoes, setSessoes] = useState([])
    const [filmeInfo, setFilmeInfo] = useState({})
    
	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

		requisicao.then(resposta => {
            setFilmeInfo({filme: resposta.data.title, imgFilme: resposta.data.posterURL,})
            setSessoes(resposta.data.days.map(sessao => {
                return {diaSemana: sessao.weekday, data: sessao.date, horarios: sessao.showtimes}
            }))

		});

	}, []);

    const displaySessoes = sessoes.map( (sessao, index) => {
        return (
            <StyledItem key={index}>
                <header>{sessao.diaSemana} - {sessao.data}</header>
                <ol>
                    {sessao.horarios.map( (horario, idx) => {
                        return (
                            <StyledLink to={`/assentos/${horario.id}`} key={idx}>
                                {horario.name}
                            </StyledLink>
                        )
                    } )} 
                </ol>
            </StyledItem>
        )
    })
    
    return (
        <Container>
            <header>Selecione o horário</header>
            <ol>
                {displaySessoes}
            </ol>
            <footer>
                <div>
                    <img src={filmeInfo.imgFilme} alt={filmeInfo.filme} />
                </div>
                <p>{filmeInfo.filme}</p>
            </footer>
        </Container>
    )
}

const StyledLink = styled(Link)`
    width: 25%;
    height: 43px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2.5%;

    background-color: #E8833A;
    border-radius: 3px;

    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;

    color: #FFFFFF;

`;

const StyledItem = styled.li`
    width: 100%;
    height: auto;
    

    header {
        width: 100%;
        height: auto;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        text-align: left;
        letter-spacing: 0.02em;

        color: #293845;
    }

    ol {
        display: flex;
        margin: 10% 0;
    }
`;


const Container = styled.div`
	width: 100%;
    height:100%;

    margin: 67px 0 150px 0;
    display: flex;
    flex-direction: column;
    align-items:center;


	background-color: #FFFFFF;

    > header {
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

    > ol {
        width: 87.5%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    footer {
        width: 100%;
        height: auto;

        display: flex;
        align-items: center;
        padding: 5% 0 3% 3%;

        position: fixed;
        bottom: 0;
        left: 0;

        background-color: #DFE6ED;
        border: 1px solid #9EADBA;
    }

    footer > div {
        width: 20%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2%;
        margin-right: 4%;

        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
    }

    footer > div img {
        width: 100%;
    }

    footer > p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;

        color: #293845;
    }
`;