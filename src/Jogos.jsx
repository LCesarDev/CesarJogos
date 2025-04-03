import React, { useState } from "react";
import "./Jogos.css";


const Jogos = () =>{
    

        const jogos = [
            { nome: "Dango Kart", Imagem: "/DangoKart.png", Logo: "/Logo_DangoKart.png", descricao: "Salve o mundo de forma RADICAL", preco: "R$ 52,99", link: "https://cesarjogos.itch.io/dango-kart"},
            { nome: "Desespero", Imagem: "/Desespero.png", Logo: "/Desespero.png", descricao: "Você consegue parar Annielise", preco: "Grátis", link: "https://cesarjogos.itch.io/desespero" }

        ];

        const [jogoSelecionado, setJogoSelecionado] = useState(jogos[0]);

        return (
            <main className="container">
                <div className="banner">
                    <img src={jogoSelecionado.Imagem} alt={jogoSelecionado.nome} className="banner-img" />
                    <div className="info">
                        <h1>{jogoSelecionado.nome}</h1>
                        <p>{jogoSelecionado.descricao}</p>
                        <p className="preco">{jogoSelecionado.preco}</p>
                        <button className="comprar-btn" onClick={() => window.open(jogoSelecionado.link, "_blank")}>Obter</button>
                    </div>
                </div>

                <div className="lista-jogos">
                    {jogos.map((jogo, index) => (
                        <button
                            key= {index}
                            onClick={() => setJogoSelecionado(jogo)}
                            className = {`jogo-btn ${jogoSelecionado.nome === jogo.nome ? "selecionado" : ""}`}
                        >
                            <img src={jogo.Logo} alt= {jogo.nome} className="jogo-img" />
                            <p>{jogo.nome}</p>
                        </button>

                    ))}
                </div>

            </main>
    );
};

export default Jogos;