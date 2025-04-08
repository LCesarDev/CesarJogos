import React, { useState } from "react";
import "./Jogos.css";


const Jogos = () =>{
    

        const jogos = [
            { nome: "Dango Kart", Imagem: "/DangoKart.png", Logo: "/Logo_DangoKart.png", descricao: "Salve o mundo de forma RADICAL", preco: "R$ 52,99", link: "https://cesarjogos.itch.io/dango-kart"},
            { nome: "Desespero", Imagem: "/Desespero.png", Logo: "/Desespero.png", descricao: "Você consegue parar Annielise", preco: "Grátis", link: "https://cesarjogos.itch.io/desespero" },
            { nome: "Rodas Pesadas", Imagem: "/RodasPesadas.png", Logo: "/RodasPesadas.png", descricao: "Se revolte pilotando um transporte publico irado", preco: "Grátis", link: "https://gatocalvojogos.itch.io/rodas-pesadas"},
            { nome: "Flesh N' Bunnies", Imagem: "/Bunnies.png", Logo: "/Bunnies.gif", descricao: "Destrua todos os animais satânicos \n que rondam esse celeiro.", preco: "Grátis", link: "https://gatocalvojogos.itch.io/flesh-n-bunnies"}
        ];

        const [jogoSelecionado, setJogoSelecionado] = useState(jogos[0]);

        return (
            <div>
                <h1 className="titulojogos">Jogos</h1>
            <main className="container">
                <div className="info">
                        <h2>{jogoSelecionado.nome}</h2>
                        <p>
                        {jogoSelecionado.descricao.split('\n').map((linha, index) => (
                            <React.Fragment key={index}>
                            {linha}
                            <br />
                            </React.Fragment>
                        ))}
                        </p>
                        <p className="preco">{jogoSelecionado.preco}</p>
                        <button className="comprar-btn" onClick={() => window.open(jogoSelecionado.link, "_blank")}>Obter</button>
                    </div>
                <div className="banner">  
                    
                    <img src={jogoSelecionado.Imagem} alt={jogoSelecionado.nome} className="banner-img" />
                </div>
                

                <div className="lista-jogos">
                    {jogos.map((jogo, index) => (
                        <button
                            key= {index}
                            onClick={() => setJogoSelecionado(jogo)}
                            className = {`jogo-btn ${jogoSelecionado.nome === jogo.nome ? "selecionado" : ""}`}
                        >
                            <img src={jogo.Logo} alt= {jogo.nome} className="jogo-img" />
                            <h2 className="ListFont">{jogo.nome}</h2>
                        </button>

                    ))}
                </div>

            </main>
            </div>
    );
};

export default Jogos;