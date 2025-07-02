import React from "react";
import './Contato.css'

const Contato = () =>{
    return (

        <div className="Content-Contato">
            <h1 className="Title-Contato">Contato</h1>
            <div className="Box-Contato">
                <p className="name-contato"> 
                    Lucas César Nonato de Oliveira
                </p>

                <div className="linkedin-contato">Linkedin: 
                    <p>linkedin.com/in/lucas-césar-a45949236</p>
                </div> 
                    
                <div className="email-contato">E-mail:
                    <p>Lcesar.gamedev@outlook.com</p>
                </div>
                
                <div className="tel-contato">Tel:
                    <p>(31) 97175-6204</p>
                </div> 

                
                
            </div>
        </div>
    );
};

export default Contato;