import React from "react";

function HeaderHome() {

    return(
        <header className="header-home">
        <img className="logo" src="/Ativo 5.png" alt="Logo da empresa" />
        
        <nav className="nav-menu" aria-label="Menu principal">
           
            
        <button className="home-button">Home</button><ul className="nav-links">
                <li><button className="nav-button">Jogos</button></li>
                <li><button className="nav-button">Loja</button></li>
                <li><button className="nav-button">Sobre</button></li>
                <li><button className="nav-button">Contato</button></li>
            </ul>

            <ul className="auth-buttons">
                <li><button className="auth-button">Cadastrar</button></li>
                <li><button className="auth-button">Entrar</button></li>
            </ul>
        </nav>
    </header>
    );

}

export default HeaderHome;