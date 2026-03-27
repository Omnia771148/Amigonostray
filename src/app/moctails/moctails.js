import { moctails} from "./moctailsdata";
import { Universal } from "../display";
import { bgImage } from "../back"; 
import "../import.css";

export function Dis8() {
    return (
         <div
        style={{
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: 'cover',
        minHeight: '100vh',
       
     }}
    ><br></br>
        <div>
        <h1 className="huni">MOCTAILS</h1>
                    <div className="container-hot">
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {moctails.map((item, index) => (
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