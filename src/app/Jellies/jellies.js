// src/hotdog.js
import { Jellies } from "./jelliesdata";
import { Universal } from "../display";
import { bgImage } from "../back"; 
import "../import.css";

export function Dis7() {
    return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: 'cover',
        minHeight: '100vh',
       
      }}
    ><br></br>
            <h1 className="huni">Jellies</h1>
            <div className="container-hot">
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {Jellies.map((item, index) => (
                                <div className="col-hot" key={index}>
                                    <Universal Name={item.Name} price={item.price} pic={item.pic} />
                                </div>
                            ))}
                        </div>
                    </div>
        </div>
    );
}