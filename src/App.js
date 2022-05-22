import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react"

import GlobalStyle from "./globalStyles"
import Header from "./Header.js"
import Filmes from "./Filmes.js"
import Sessoes from "./Sessoes.js"
import Assentos from "./Assentos.js"
import Pedido from "./Pedido.js"


export default function App () {

    const navigate = useNavigate()
    const [assentosSelecionados, setAssentosSelecionados] = useState([])
    const [sessaoInfo, setSessaoInfo] = useState({})
    const [nomeComprador, setNomeComprador] = useState("")
    const [cpfComprador, setCpfComprador] = useState("")

    function statusAssento (numAssento, idAssento) {
        if (assentosSelecionados.some( assento => {
            if (assento.idAssento === idAssento) {
                return true;
            } else {
                return false;
            }
        })) {
            setAssentosSelecionados(assentosSelecionados.filter( item => item.idAssento !== idAssento))
    
        } else {
            setAssentosSelecionados([...assentosSelecionados, {numAssento, idAssento}])
            console.log(assentosSelecionados)
        }

    }



    function finalizarPedido (event) {
        event.preventDefault();
        navigate("/sucesso")
    }

    return (
        <>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Filmes />} />
                <Route path="/sessoes/:idFilme" element={<Sessoes />} />
                <Route path="/assentos/:idSessao" element={<Assentos statusAssento={statusAssento} sessaoInfo={sessaoInfo} setSessaoInfo={setSessaoInfo} finalizarPedido={finalizarPedido} cpfComprador={cpfComprador} setCpfComprador={setCpfComprador} nomeComprador={nomeComprador} setNomeComprador={setNomeComprador} assentosSelecionados={assentosSelecionados}  setAssentosSelecionados={setAssentosSelecionados}/>} />
                <Route path="/sucesso" element={<Pedido  sessaoInfo={sessaoInfo} assentosSelecionados={assentosSelecionados} nomeComprador={nomeComprador} cpfComprador={cpfComprador}/>} />
            </Routes>
        </>
    )
}