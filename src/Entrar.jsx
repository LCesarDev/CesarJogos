import React from "react";
import './Entrar.css'
import { Navigate, useNavigate } from "react-router-dom";

const Entrar = () =>{

    const navigate = useNavigate();

    return(
        <div>

            <p className="entrar-title">Login</p>
            <div className="entrar-content">
             <div className="entrar-box">
                    <img className="entrar-logo" src="/Ativo 5.png" alt="SampleLogo"></img>
                    <input type="email" placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>
                    <div className="remember">
                        <input type="checkbox" />
                        <label htmlFor="">Lembrar</label>
                    </div>

                    <p>
                        <span className="entrar-cadastrar" onClick={() => navigate("/Cadastrar")}>Não sou cadastrado! {" "}</span>
                    </p>

                    <button className="entrar-bnt">Entrar</button>
                </div>
            </div>
        </div>
        

    );

};

export default Entrar;