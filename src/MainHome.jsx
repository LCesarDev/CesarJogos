import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function MainHome() {

    const navigate = useNavigate();

    return(
       <main className="MainHome">

        <h1 className="TituloHome_Animation">Bem-vindo a César Jogos!</h1>
        <p className="TextHome_Animation">Aqui, a diversão e a criatividade estão sempre em alta. Explore nossos jogos e divirta-se!</p>
        <nav className=""><button className="JogarButtonMain" onClick={()=> navigate("/Jogos")}>Quero Jogar!</button></nav>

       </main>
    );
}

export default MainHome;