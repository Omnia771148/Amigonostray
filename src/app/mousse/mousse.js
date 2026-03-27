
import { mousse } from "./moussedata";
import { Universal } from "../display"; 
import { bgImage } from "../back"; 
import "../import.css"; 

export function Dis9() {
    return (
         <div
              style={{
                backgroundImage: `url(${bgImage})`, 
                backgroundSize: 'cover',
                minHeight: '100vh',
             
              }}
            >
        <div><br></br>
        <h1 className="huni">MOUSSE</h1>
                            <div className="container-hot">
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                            {mousse.map((item, index) => (
                                                <div className="col-hot" key={index}>
                                                    <Universal Name={item.Name} price={item.price} pic={item.pic} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
       
        </div>
        </div>
        
        
    );
}