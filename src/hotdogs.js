
import { Hot,Quick } from "./hotdatadogs";
import { Universal } from "./display"; 
import { bgImage } from './back'; 
import "./import.css"; 

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
        <h1 className="huni">HOT DOGS</h1>
        <div className="container-hot">
            {/* Row 1 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Hot[0].Name} price={Hot[0].price} pic={Hot[0].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Hot[1].Name} price={Hot[1].price} pic={Hot[1].pic} />
                </div>
            </div>

            {/* Row 2 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Hot[2].Name} price={Hot[2].price} pic={Hot[2].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Hot[3].Name} price={Hot[3].price} pic={Hot[3].pic} />
                </div>
            </div>

            {/* Row 3 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Hot[4].Name} price={Hot[4].price} pic={Hot[4].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Hot[5].Name} price={Hot[5].price} pic={Hot[5].pic} />
                </div>
            </div>

            {/* Row 4 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Hot[6].Name} price={Hot[6].price} pic={Hot[6].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Hot[7].Name} price={Hot[7].price} pic={Hot[7].pic} />
                </div>
            </div>

            {/* Row 5 (Single card - centered) */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Hot[8].Name} price={Hot[8].price} pic={Hot[8].pic} />
                </div>
            
             <div className="col-hot">
                    <Universal Name={Hot[9].Name} price={Hot[9].price} pic={Hot[9].pic} />
                </div>
                </div><br></br>
                 <h1 className="huni">QUICK BITES</h1>
                 <br></br>
               <div className="container-hot">
                <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Quick[0].Name} price={Quick[0].price} pic={Quick[0].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Quick[1].Name} price={Quick[1].price} pic={Quick[1].pic} />
                </div>
            </div>

            {/* Row 2 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Quick[2].Name} price={Quick[2].price} pic={Quick[2].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Quick[3].Name} price={Quick[3].price} pic={Quick[3].pic} />
                </div>
            </div>

            {/* Row 3 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Quick[4].Name} price={Quick[4].price} pic={Quick[4].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Quick[5].Name} price={Quick[5].price} pic={Quick[5].pic} />
                </div>
            </div>

            {/* Row 4 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Quick[6].Name} price={Quick[6].price} pic={Quick[6].pic} />
                </div>
                <div className="col-hot">
                    <Universal Name={Quick[7].Name} price={Quick[7].price} pic={Quick[7].pic} />
                </div>
            </div>

            {/* Row 5 (Single card - centered) */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Quick[8].Name} price={Quick[8].price} pic={Quick[8].pic} />
                </div>
            
             <div className="col-hot">
                    <Universal Name={Quick[9].Name} price={Quick[9].price} pic={Quick[9].pic} />
                </div>
                </div>
        </div>
        </div>
        </div>
        </div>
        
        
    );
}