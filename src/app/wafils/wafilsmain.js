import { Wafils } from "./wafilsdata";
import { Universal } from "../display";
import { bgImage } from "../back"; 
import "../import.css";

export function Dis4() {
    return (
        <div
        style={{
                backgroundImage: `url(${bgImage})`, 
                backgroundSize: 'cover',
                minHeight: '100vh',
                
              }}>

                <h1 className="huni">WAFFLES</h1>
        
        <div className="container-hot">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {Wafils.map((item, index) => (
                    <div className="col-hot" key={index}>
                        <Universal Name={item.Name} price={item.price} pic={item.pic} />
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}