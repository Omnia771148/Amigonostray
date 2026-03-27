
import { French } from "./frenchdata"; 
import { Universal } from "./display";
import { bgImage } from './back'; 
import "./import.css"; 

 
export function Dis5() {
    return (
        <div
              style={{
                backgroundImage: `url(${bgImage})`, 
                backgroundSize: 'cover',
                minHeight: '100vh',
                
              }}
            >
        <div><br></br>
        <b><p className="huni">FRENCH FRIES</p></b>
        <div className="container-hot">
            {/* Row 1 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={French[0].Name} price={French[0].price} pic={French[0].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={French[1].Name} price={French[1].price} pic={French[1].pic} />
                </div>
            </div>

            {/* Row 2 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={French[2].Name} price={French[2].price} pic={French[2].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={French[3].Name} price={French[3].price} pic={French[3].pic} />
                </div>
            </div><br></br>
       <b><p className="huni">NON-VEG BURGERS</p></b><br></br>
            {/* Row 3 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={French[4].Name} price={French[4].price} pic={French[4].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={French[5].Name} price={French[5].price} pic={French[5].pic} />
                </div>
            </div>

            {/* Row 4 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={French[6].Name} price={French[6].price} pic={French[6].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={French[7].Name} price={French[7].price} pic={French[7].pic} />
                </div>
            </div>

            {/* Row 5 (Single card - centered) */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={French[8].Name} price={French[8].price} pic={French[8].pic} />
                </div>
               
           
             <div className="col-hot">
                    <Universal Name={French[9].Name} price={French[9].price} pic={French[9].pic} />
                </div>
                </div><br></br>
                <b><p className="huni">VEG - BURGERS</p></b><br></br>
            {/* Row 3 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={French[10].Name} price={French[10].price} pic={French[10].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={French[11].Name} price={French[11].price} pic={French[11].pic} />
                </div>
            </div>

            {/* Row 4 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={French[12].Name} price={French[12].price} pic={French[12].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={French[13].Name} price={French[13].price} pic={French[13].pic} />
                </div>
            </div>

            {/* Row 5 (Single card - centered) */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={French[14].Name} price={French[14].price} pic={French[14].pic} />
                </div>
               </div>
        </div>
        </div>
        </div>
    );
}