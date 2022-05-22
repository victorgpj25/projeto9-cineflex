import { useState, useEffect} from "react"
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios"

import Assento from "./Assento.js"

export default function Assentos ({statusAssento, sessaoInfo, setSessaoInfo, finalizarPedido, nomeComprador, setNomeComprador, cpfComprador, setCpfComprador, assentosSelecionados, setAssentosSelecionados}) {

    const { idSessao } = useParams()
    const [assentos, setAssentos] = useState([])
   
	useEffect(() => {
        setAssentosSelecionados([])
        setNomeComprador([])
        setCpfComprador([])
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

		requisicao.then(resposta => {

            setSessaoInfo({filme: resposta.data.movie.title, imgFilme: resposta.data.movie.posterURL, diaSemana: resposta.data.day.weekday, dia: resposta.data.day.date , horario: resposta.data.name})
            setAssentos(resposta.data.seats.map( assento => {
                return {id: assento.id, numero: assento.name, livre: assento.isAvailable}
            }))

		});

	}, []);



    const displayAssentos = assentos.map( assento => {
        return (
            <Assento status={assento.livre} key={assento.id} id={assento.id} numero={assento.numero} statusAssento={statusAssento}/>
        )
    })


    return (
        <Container>
            <header>Selecione o(s) assento(s)</header>
            <ol>
                {displayAssentos}
            </ol>
            <Section>
                <div>
                    <StyledDiv cor="#8DD7CF"></StyledDiv>
                    <p>Selecionado</p>
                </div>
                <div>  
                    <StyledDiv cor="#C3CFD9"></StyledDiv>
                    <p>Disponível</p>
                </div>
                <div>
                    <StyledDiv cor="#F7C52B"></StyledDiv>
                    <p>Indisponível</p>
                </div>
            </Section>
            <form onSubmit={finalizarPedido}>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..." value={nomeComprador} onChange={e => setNomeComprador(e.target.value)} />
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..." value={cpfComprador} onChange={e => setCpfComprador(e.target.value)} />
                <button type="submit" disabled={!(nomeComprador && cpfComprador && assentosSelecionados.length > 0)}>Reservar assento(s)</button>
            </form>
            <footer>
                <div>
                    <img src={sessaoInfo.imgFilme} alt={sessaoInfo.filme} />
                </div>
                <div>
                    <p>{sessaoInfo.filme}</p>
                    <p>{sessaoInfo.diaSemana} - {sessaoInfo.horario}</p>
                </div>
                
            </footer>
        </Container>
    )
}



const StyledDiv = styled.div`
    width: 24px;
    height: 24px;
    margin-bottom: 8%;

    background: ${props => props.cor};
    border: 1px solid ${props => props.cor};
    border-radius: 17px;


`;


const Section = styled.div`
    width: 87.5%;
    display: flex;
    justify-content: space-around;


    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;

        color: #4E5A65;
    }
`;


const Container = styled.div`
    background: ${props => props.cor};
	width: 100%;
    height:100%;

    margin: 67px 0 250px 0;
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
        flex-wrap: wrap;
    }

    form {
        width: 87.5%;
        height: auto;
        margin-top: 10%;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    form p {
        width: 100%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        text-align: start;

        color: #293845;
    }

    form input::placeholder {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #AFAFAF;
    }

    form input {
        width: 100%;
        height: 51px;

        margin: 2% 0 4% 0;
        padding: 0 0 0 10px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
    }

    form button {

        width: 70%;
        height: 42px;
        margin-top: 10%;

        background: #E8833A;
        border-radius: 3px;
        border: 0;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.04em;
        text-decoration: none;

        color: #FFFFFF;
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

    footer div:first-child {
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

    footer  p {
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