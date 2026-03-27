import {Sand} from "./sanddata"; // Combined import
import { Universal } from "./display";
import{Frankie} from "./sanddata";
import { bgImage } from './back'; 
import "./import.css";


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
        <h1 className="huni">SANDWICH</h1>
        <div className="container-hot">
            {/* Row 1 */}
            <div className="row-hot">
                <div className="col-hot">
                     <Universal Name={Sand[0].Name} price={Sand[0].price} pic={Sand[0].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Sand[1].Name} price={Sand[1].price} pic={Sand[1].pic} />
                </div>
            </div>

            {/* Row 2 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Sand[2].Name} price={Sand[2].price} pic={Sand[2].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Sand[3].Name} price={Sand[3].price} pic={Sand[3].pic} />
                </div>
            </div><br></br>
            <h1 className="huni">NON-VEG FRANKIE'S</h1>
<br></br>
            {/* Row 3 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Frankie[0].Name} price={Frankie[0].price} pic={Frankie[0].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Frankie[1].Name} price={Frankie[1].price} pic={Frankie[1].pic} />
                </div>
            </div>

            {/* Row 4 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Frankie[2].Name} price={Frankie[2].price} pic={Frankie[2].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Frankie[3].Name} price={Frankie[3].price} pic={Frankie[3].pic} />
                </div>
            </div>

            {/* Row 5 (Sand card - centered) */}
            <div className="row-hot">
                <div className="col-hot">
                   <Universal Name={Frankie[4].Name} price={Frankie[4].price} pic={Frankie[4].pic} />
                </div>
</div><br></br>
<h1 className="huni">VEG FRANKIE</h1>
<br></br>
                <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Frankie[5].Name} price={Frankie[5].price} pic={Frankie[5].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Frankie[6].Name} price={Frankie[6].price} pic={Frankie[6].pic} />
                </div>
            </div>

            {/* Row 4 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Frankie[7].Name} price={Frankie[7].price} pic={Frankie[7].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Frankie[8].Name} price={Frankie[8].price} pic={Frankie[8].pic} />
                </div>
            </div>

            {/* Row 5 (Sand card - centered) */}
            <div className="row-hot">
                <div className="col-hot">
                   <Universal Name={Frankie[9].Name} price={Frankie[9].price} pic={Frankie[9].pic} />
                </div>
                </div>
                
            </div>
        </div>
        </div>
       
    );
}