import React from "react";

function HeaderHome() {

    return(
        <header className="header-home">
        <img className="logo" src="/Ativo 5.png" alt="Logo da empresa" />
        
        <nav className="nav-menu" aria-label="Menu principal">
            <button className="home-button">Home</button>
            
            <ul className="nav-links">
                <li><button className="nav-button">Jogos</button></li>
                <li><button className="nav-button">Loja</button></li>
                <li><button className="nav-button">Sobre</button></li>
                <li><button className="nav-button">Contato</button></li>
            </ul>

            <div className="auth-buttons">
                <button className="register-button">Cadastrar</button>
                <button className="login-button">Entrar</button>
            </div>
        </nav>
    </header>
    );

}

export default HeaderHome;