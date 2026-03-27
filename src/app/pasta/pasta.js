import {Pasta} from "./pastadata"; // Combined import
import { Universal } from "../display";
import { bgImage } from "../back"; 
import "../import.css";


export function Dis2() {
    return (
        <div
                style={{
                backgroundImage: `url(${bgImage})`, 
                backgroundSize: 'cover',
                minHeight: '100vh',
               
             }}
            >
        <div><br></br>
        <h1 className="huni">PASTA </h1>
                                    <div className="container-hot">
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                                    {Pasta.map((item, index) => (
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