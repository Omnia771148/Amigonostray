import { Milk, Thick } from "./milkshakedata"; 
import { Universal } from "../display"; 
import { bgImage } from '../back'; 
import "../import.css";

export function Dis1() {
    return (
         <div
              style={{
                backgroundImage: `url(${bgImage})`, 
                backgroundSize: 'cover',
                minHeight: '100vh',
               
              }}
            ><br></br>
             
        <h1 className="huni">MILK SHAKES </h1>
      
        <div className="container-hot">
            {/* Row 1 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Milk[0].Name} price={Milk[0].price} pic={Milk[0].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Milk[1].Name} price={Milk[1].price} pic={Milk[1].pic} />
                </div>
            </div>

            {/* Row 2 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Milk[2].Name} price={Milk[2].price} pic={Milk[2].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Milk[3].Name} price={Milk[3].price} pic={Milk[3].pic} />
                </div>
            </div>

            {/* Row 3 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Milk[4].Name} price={Milk[4].price} pic={Milk[4].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Milk[5].Name} price={Milk[5].price} pic={Milk[5].pic} />
                </div>
            </div>

            {/* Row 4 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Milk[6].Name} price={Milk[6].price} pic={Milk[6].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Milk[7].Name} price={Milk[7].price} pic={Milk[7].pic} />
                </div>
            </div>
            <br></br>
           <h1 className="huni">THICK SHAKES </h1>
           <br></br>
            {/* Row 5 (Single card - centered) */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Thick[0].Name} price={Thick[0].price} pic={Thick[0].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Thick[1].Name} price={Thick[1].price} pic={Thick[1].pic} />
                </div>
            </div>
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Thick[2].Name} price={Thick[2].price} pic={Thick[2].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Thick[3].Name} price={Thick[3].price} pic={Thick[3].pic} />
                </div>
            </div>
             </div>
        </div>
        
    );
}