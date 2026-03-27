// src/hotdog.js
import { Family } from "./familypizzadata";
import { Universal } from "./display";
import { bgImage } from './back'; 
import "./import.css";

export function Dis7() {
    return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: 'cover',
        minHeight: '100vh',
       
      }}
    ><br></br>
            <h1 className="huni">FAMILY PIZZA</h1>
            <div className="container-hot">
                {/* Row 1 */}
                <div className="row-hot">
                    <div className="col-hot">
                        <Universal Name={Family[0].Name} price={Family[0].price} pic={Family[0].pic} />
                    </div>
                    <div className="col-hot">
                        <Universal Name={Family[1].Name} price={Family[1].price} pic={Family[1].pic} />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="row-hot">
                    <div className="col-hot">
                        <Universal Name={Family[2].Name} price={Family[2].price} pic={Family[2].pic} />
                    </div>
                    <div className="col-hot">
                        <Universal Name={Family[3].Name} price={Family[3].price} pic={Family[3].pic} />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="row-hot">
                    <div className="col-hot">
                        <Universal Name={Family[4].Name} price={Family[4].price} pic={Family[4].pic} />
                    </div>
                    
                </div>

                {/* Row 4 */}
              </div>
        </div>
    );
}