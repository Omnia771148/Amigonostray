import "./import.css"; 
import Egg from "./eggdata";

export function Dis10({Name,Price,Pic}) {
    return (
   <div className="product-card">
            <img src={Pic} alt={Name} className="product-card-image" />
            <div className="product-card-body">
                <h3 className="product-card-title">{Name}</h3>
               
                <p className="product-card-price">{Price}</p>
                <button className="product-card-button">View Details</button>
            </div>
        </div>

    );
}