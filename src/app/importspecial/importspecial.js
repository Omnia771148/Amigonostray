import { Single } from "../data";
import { Universal } from "../display";
import {Special} from "../data";
import { bgImage } from '../back'; 

import "../import.css";


export function Dis() {
    return (
          <div
            style={{
            backgroundImage: `url(${bgImage})`, 
            backgroundSize: 'cover',
            minHeight: '100vh',
          
     }}
    ><br></br>
        
        <div>
        <h1 className="huni">SINGLE FLAVOUR</h1>
        <div className="container-hot">
            {/* Row 1 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Single[0].Name} price={Single[0].price} pic={Single[0].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={Single[1].Name} price={Single[1].price} pic={Single[1].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>

            {/* Row 2 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Single[2].Name} price={Single[2].price} pic={Single[2].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={Single[3].Name} price={Single[3].price} pic={Single[3].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>

            {/* Row 3 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Single[4].Name} price={Single[4].price} pic={Single[4].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={Single[5].Name} price={Single[5].price} pic={Single[5].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>

            {/* Row 4 */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Single[6].Name} price={Single[6].price} pic={Single[6].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={Single[7].Name} price={Single[7].price} pic={Single[7].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>

            {/* Row 5 (Single card - centered) */}
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Single[8].Name} price={Single[8].price} pic={Single[8].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={Single[9].Name} price={Single[9].price} pic={Single[9].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>
<br></br>
           <h1 className="huni">SPECIAL FLAVOUR</h1>
           <br></br>
             <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Special[0].Name} price={Special[0].price} pic={Special[0].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={Special[1].Name} price={Special[1].price} pic={Special[1].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Special[2].Name} price={Special[2].price} pic={Special[2].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={Special[3].Name} price={Special[3].price} pic={Special[3].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Special[4].Name} price={Special[4].price} pic={Special[4].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={Special[5].Name} price={Special[5].price} pic={Special[5].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Special[6].Name} price={Special[6].price} pic={Special[6].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={Special[7].Name} price={Special[7].price} pic={Special[7].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Special[8].Name} price={Special[8].price} pic={Special[8].pic} /> {/* Changed Headhot to Universal */}
                </div>
                <div className="col-hot">
                    <Universal Name={Special[9].Name} price={Special[9].price} pic={Special[9].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>
            <div className="row-hot">
                <div className="col-hot">
                    <Universal Name={Special[10].Name} price={Special[10].price} pic={Special[10].pic} /> {/* Changed Headhot to Universal */}
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}