import React from "react";
import "./Loja.css";
import items from "./StoreItens.js";

const Loja = () =>{
    return (
        
        <div className="Loja-Content">
            <h1 className="Loja-Title">Loja - Em processo - Consumo de API</h1>
            {items.map(item =>(
                <div key={item.id} className="store-style">
                    <div className="store-infobox">
                        <div className="store-name">{item.name}
                            <p>R$ {item.price}</p>
                            <button className="store-pay"> Pay</button>
                        </div>
                    </div>
                    
                    <img className="store-image" src={item.image} alt={item.name}></img>
                </div>
            ))}

       
            
        </div>
    );
}

export default Loja;