import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './Home.css'

function Home() {

    const navigate = useNavigate();

    return(
       <main className="HomeContent">

        


        <h1 className="TitleHome_Animation">Bem-vindo a César Jogos!</h1>
        <p className="TextHome_Animation">Aqui, a diversão e a criatividade estão sempre em alta. Explore nossos jogos e divirta-se!</p>
        <nav className=""><button className="Jogar-HomeButton" onClick={()=> navigate("/Jogos")}>Quero Jogar!</button></nav>

        <img src="./AnimationDango.gif" alt="DangoGIf" className="dangogif"></img>

       </main>
    );
}

export default Home;