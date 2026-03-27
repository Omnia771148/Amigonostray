
import { specialpizza } from "./specialpizdata"; 
import { Universal } from "./display"; 
import { bgImage } from './back'; 
import "./import.css"; 

export function Dis6() {
    return (
          <div
                style={{
                backgroundImage: `url(${bgImage})`, 
                backgroundSize: 'cover',
                minHeight: '100vh',
              
             }}
            >
                <br></br>
        <div>
            
        <h1 className="huni">SPECIAL PIZZA'S</h1>
        <div className="container-hot">
            {/* Row 1 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={specialpizza[0].Name} price={specialpizza[0].price} pic={specialpizza[0].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={specialpizza[1].Name} price={specialpizza[1].price} pic={specialpizza[1].pic} />
                </div>
            </div>

            {/* Row 2 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={specialpizza[2].Name} price={specialpizza[2].price} pic={specialpizza[2].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={specialpizza[3].Name} price={specialpizza[3].price} pic={specialpizza[3].pic} />
                </div>
            </div>

            {/* Row 3 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={specialpizza[4].Name} price={specialpizza[4].price} pic={specialpizza[4].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={specialpizza[5].Name} price={specialpizza[5].price} pic={specialpizza[5].pic} />
                </div>
            </div>

            {/* Row 4 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={specialpizza[6].Name} price={specialpizza[6].price} pic={specialpizza[6].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={specialpizza[7].Name} price={specialpizza[7].price} pic={specialpizza[7].pic} />
                </div>
            </div>

            {/* Row 5 (Single card - centered) */}
            <div className="row-hot">
                <div className="col-hot">
                   
                    <Universal Name={specialpizza[8].Name} price={specialpizza[0].price} pic={specialpizza[0].pic} />
                </div>
                 <div className="col-hot">
                    <Universal Name={specialpizza[9].Name} price={specialpizza[9].price} pic={specialpizza[9].pic} />
                </div>
                
            </div>
            <div className="row-hot">
                <div className="col-hot">
                   
                    <Universal Name={specialpizza[10].Name} price={specialpizza[10].price} pic={specialpizza[10].pic} />
                </div>
                 <div className="col-hot">
                    <Universal Name={specialpizza[11].Name} price={specialpizza[11].price} pic={specialpizza[11].pic} />
                </div>
                
            </div>
            <div className="row-hot">
                <div className="col-hot">
                   
                    <Universal Name={specialpizza[12].Name} price={specialpizza[12].price} pic={specialpizza[12].pic} />
                </div>
                 <div className="col-hot">
                    <Universal Name={specialpizza[13].Name} price={specialpizza[13].price} pic={specialpizza[13].pic} />
                </div>
                
            </div>
            <div className="row-hot">
                <div className="col-hot">
                   
                    <Universal Name={specialpizza[14].Name} price={specialpizza[14].price} pic={specialpizza[14].pic} />
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}