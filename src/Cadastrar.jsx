import React from "react";
import './Cadastrar.css'

const Cadastrar = () =>{
    return(
        <div>

            <h2 className="cadastrar-title">Cadastro</h2>
            <div className="cadastrar-content">
             <div className="content-box">
                    <img className="cadastrar-logo" src="/Ativo 5.png" alt="SampleLogo"></img>
                    <input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="E-mail"/>
                    <input type="text" placeholder="Senha"/>
                    <div className="remember">
                        <input type="checkbox" />
                        <label htmlFor="">Lembrar</label>
                    </div>

                    <button className="cadastrar-bnt">Cadastrar</button>
                </div>
            </div>
        </div>
        

    );

};

export default Cadastrar;