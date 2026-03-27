import { Toco } from "./tocodata";
import { Universal } from "./display";
import {Lava} from "./tocodata";
import { bgImage } from './back';
import "./import.css";


export function Dis3() {
    return (
          <div
                        style={{
                        backgroundImage: `url(${bgImage})`, 
                        backgroundSize: 'cover',
                        minHeight: '100vh',
                       
                     }}
                    ><br></br>
        <div>
        <h1 className="huni">TOCO'S</h1>
        <div className="container-hot">
            {/* Row 1 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Toco[0].Name} price={Toco[0].price} pic={Toco[0].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={Toco[1].Name} price={Toco[1].price} pic={Toco[1].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>

            {/* Row 2 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Toco[2].Name} price={Toco[2].price} pic={Toco[2].pic} /> {/* Changed Headhot to Universal */}
                </div>
                
            </div>
<br></br>
            {/* Row 3 */}<h1 className="huni">LAVA CAKE'S</h1>
            <br></br>
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Lava[0].Name} price={Lava[0].price} pic={Lava[0].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={Lava[1].Name} price={Lava[1].price} pic={Lava[1].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>

            {/* Row 4 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Lava[2].Name} price={Lava[2].price} pic={Lava[2].pic} /> {/* Changed Headhot to Universal */}
                </div>
                
            </div>
            </div>
            </div>

            
        </div>
    );
}