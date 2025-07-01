import React, {useEffect, useState} from "react";
import "./Loja.css";


const Loja = () =>{

    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3001/itens")
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch((err) => console.error("Error: Dados não carregados", err));
    },[]);


    return (
        
        <div className="Loja-Content">
            <h1 className="Loja-Title">Loja</h1>
            {items.map(item =>(
                <div key={item.id} className="store-style">
                    <img src="/gear.png" alt="gearIcon" className="store-gearicon"></img>
                    <div className="store-infobox">
                        <div className="store-name"> 
                            <h2>{item.name}</h2>
                             <p className="store-description">{item.description}</p>
                            <p className="store-price">R$ {item.price.toFixed(2)}</p>
                            <button>Obter</button>
                        </div>
                    </div>
                    
                    <img className="store-image" src={item.image} alt={item.name}></img>
                </div>
            ))}

       
            
        </div>
    );
}

export default Loja;