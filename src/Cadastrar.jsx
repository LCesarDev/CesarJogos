import React from "react";
import './Cadastrar.css'
import { Navigate, useNavigate } from "react-router-dom";

const Cadastrar = () =>{

    const navigate = useNavigate();

    return(
        <div>

            <p className="cadastrar-title">Cadastro</p>
            <div className="cadastrar-content">
             <div className="content-box">
                    <img className="cadastrar-logo" src="/Ativo 5.png" alt="SampleLogo"></img>
                    <input type="text" placeholder="Nome"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>
                

                    <p>
                        <span className="cadastrar-login" onClick={() => navigate("/Entrar")}>Já sou cadastrado! {" "}</span>
                    </p>

                    <button className="cadastrar-bnt">Cadastrar</button>
                </div>
            </div>
        </div>
        

    );

};

export default Cadastrar;