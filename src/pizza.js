import { pizza} from "./pizzadata";
import { Universal } from "./display";
import { bgImage } from './back'; 
import "./import.css";

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
        <h1 className="huni">NON-VEG PIZZA</h1>
        <div className="container-hot">
            {/* Row 1 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={pizza[0].Name} price={pizza[0].price} pic={pizza[0].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={pizza[1].Name} price={pizza[1].price} pic={pizza[1].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>

            {/* Row 2 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={pizza[2].Name} price={pizza[2].price} pic={pizza[2].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={pizza[3].Name} price={pizza[3].price} pic={pizza[3].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>

            {/* Row 3 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={pizza[4].Name} price={pizza[4].price} pic={pizza[4].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={pizza[5].Name} price={pizza[5].price} pic={pizza[5].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>

            {/* Row 4 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={pizza[6].Name} price={pizza[6].price} pic={pizza[6].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={pizza[7].Name} price={pizza[7].price} pic={pizza[7].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>

            {/* Row 5 (pizza card - centered) */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={pizza[8].Name} price={pizza[8].price} pic={pizza[8].pic} /> {/* Changed Headhot to Universal */}
                </div>

               
            </div><br></br>
                 <h1 className="huni">VEG PIZZA</h1>
                 <br></br>
            <div className="row-hot">
                 <div className="col-hot">
                    <Universal Name={pizza[9].Name} price={pizza[9].price} pic={pizza[9].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={pizza[10].Name} price={pizza[10].price} pic={pizza[10].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={pizza[11].Name} price={pizza[11].price} pic={pizza[11].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={pizza[12].Name} price={pizza[12].price} pic={pizza[12].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={pizza[13].Name} price={pizza[13].price} pic={pizza[13].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={pizza[14].Name} price={pizza[14].price} pic={pizza[14].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={pizza[15].Name} price={pizza[15].price} pic={pizza[15].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={pizza[16].Name} price={pizza[16].price} pic={pizza[16].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={pizza[17].Name} price={pizza[17].price} pic={pizza[17].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}