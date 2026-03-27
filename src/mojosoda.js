import { Mojito } from "./mojodata";
import { Universal } from "./display";
import { bgImage } from './back'; 
import "./import.css";

export function Dis4() {
    return (
        <div
        style={{
                backgroundImage: `url(${bgImage})`, 
                backgroundSize: 'cover',
                minHeight: '100vh',
                
              }}
        
     
    ><br></br>
                     
        
        <div>
            <h1 className="huni">MOJITO'S</h1>
        
        <div className="container-hot">
            {/* Row 1 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Mojito[0].Name} price={Mojito[0].price} pic={Mojito[0].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={Mojito[1].Name} price={Mojito[1].price} pic={Mojito[1].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>

            {/* Row 2 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Mojito[2].Name} price={Mojito[2].price} pic={Mojito[2].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={Mojito[3].Name} price={Mojito[3].price} pic={Mojito[3].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div><br></br>
 <h1 className="huni">SODA'S</h1>
            {/* Row 3 */}<br></br>
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Mojito[4].Name} price={Mojito[4].price} pic={Mojito[4].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={Mojito[5].Name} price={Mojito[5].price} pic={Mojito[5].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}