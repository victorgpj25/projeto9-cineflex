import styled from 'styled-components';
import { Link } from "react-router-dom";


export default function Pedido ({sessaoInfo, assentosSelecionados, nomeComprador, cpfComprador}) {



    const displayAssentos = assentosSelecionados.map( (assento, index) => {
        return (
            <li key={index}><h2>Assento {assento.numAssento}</h2></li>
        )
    })  

    return (
        <Container>
            <header>Pedido feito com sucesso!</header>
            <section>
                <h1>Filme e sessão</h1>
                <h2>{sessaoInfo.filme}</h2>
                <h2>{sessaoInfo.dia} {sessaoInfo.horario}</h2>
            </section>
            <section>
                <h1>Ingressos</h1>
                <ol>
                    {displayAssentos}
                </ol>
            </section>
            <section>
                <h1>Comprador</h1>
                <h2>Nome: {nomeComprador}</h2>
                <h2>CPF: {cpfComprador}</h2>
            </section>
            <StyledLink to="/">Voltar pra Home</StyledLink>
        </Container>
    )
}

const StyledLink = styled(Link)`
    width: 70%;
    height: 42px;

    margin-top: 20%;
    background: #E8833A;
    border-radius: 3px;

    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: 0.04em;

    color: #FFFFFF;
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
        width: 50%;
        height: auto;

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 8% 0 8% 0;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;

        color: #247A6B;
    }
    section {
        width: 87.5%;
        height: auto;
        margin-bottom: 8%;
    }

    h1 {
        width: 100%;
        height: auto;

        margin-bottom: 2%;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: start;
        letter-spacing: 0.04em;

        color: #293845;

    }

    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        text-align: start;
        letter-spacing: 0.04em;

        color: #293845;
    }

    
`;