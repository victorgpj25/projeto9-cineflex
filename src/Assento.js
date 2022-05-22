import { useState } from "react"
import styled from 'styled-components';


export default function Assento ({status, id, numero, statusAssento}) {

    const [selecionado, setSelecionado] = useState(false)
    

    function selecionarAssento () {
        if (status) {
            if (!selecionado) {
                setSelecionado(true)
                statusAssento(numero, id)
                
            } else {
                setSelecionado(false)
                statusAssento(numero, id)
            }
        } else {
            alert("Esse assento não está disponível")
        }
        
    }

    return (
        <StyledItem selected={selecionado} status={status} key={id} onClick={selecionarAssento}>{numero}</StyledItem>
    )
}

const StyledItem = styled.li`
    width: 8%;
    height: 26px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${props => props.selected ? "#8DD7CF" : props.status ? "#C3CFD9" : "#F7C52B"};
    border: 1px solid ${props => props.selected ? "#8DD7CF" : props.status ? "#C3CFD9" : "#F7C52B"};
    border-radius: 12px;

    margin: 0 7px 7px 0;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.04em;

    :nth-child(10n) {
        margin: 0;
    }

    
`;