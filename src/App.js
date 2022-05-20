import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./globalStyles"
import Header from "./Header.js"
import Filmes from "./Filmes.js"
import Sessoes from "./Sessoes.js"
import Assentos from "./Assentos.js"


export default function App () {


    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Header />
            <Routes>
                <Route path="/" element={<Filmes />} />
                <Route path="/sessoes/:idFilme" element={<Sessoes />} />
                <Route path="/assentos/:idSessao" element={<Assentos />} />
            </Routes>
            </BrowserRouter>
        </>
    )
}