import { maindata } from './mainpagedata';
import { Maindis } from './mainpagedisplay';
import { bgImage } from '../back'; 
import BootstrapCarousel from '../Carousel';
import './main.css';

export function Dismain() {
  return (
    <div>   <BootstrapCarousel/>
    <div
      style={{
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: '20px',
      }}
    ><br></br>
      <div className="main-container">
        {/* Row 1 */}
        <div className="main-row">
          <div className="main-col">
            <Maindis Name={maindata[0].Name} button={maindata[0].button} pic={maindata[0].pic} route={maindata[0].route} />
          </div>
          <div className="main-col">
            <Maindis Name={maindata[1].Name} button={maindata[1].button} pic={maindata[1].pic} route={maindata[1].route} />
          </div>
        </div>

        {/* Row 2 */}
        <div className="main-row">
          <div className="main-col">
            <Maindis Name={maindata[2].Name} button={maindata[2].button} pic={maindata[2].pic} route={maindata[2].route} />
          </div>
          <div className="main-col">
            <Maindis Name={maindata[3].Name} button={maindata[3].button} pic={maindata[3].pic} route={maindata[3].route} />
          </div>
        </div>

        {/* Row 3 */}
        <div className="main-row">
          <div className="main-col">
            <Maindis Name={maindata[4].Name} button={maindata[4].button} pic={maindata[4].pic} route={maindata[4].route} />
          </div>
          <div className="main-col">
            <Maindis Name={maindata[5].Name} button={maindata[5].button} pic={maindata[5].pic} route={maindata[5].route} />
          </div>
        </div>

        {/* Row 4 */}
        <div className="main-row">
          <div className="main-col">
            <Maindis Name={maindata[6].Name} button={maindata[6].button} pic={maindata[6].pic} route={maindata[6].route} />
          </div>
          <div className="main-col">
            <Maindis Name={maindata[7].Name} button={maindata[7].button} pic={maindata[7].pic} route={maindata[7].route} />
          </div>
        </div>
        <div className="main-row">
          <div className="main-col">
            <Maindis Name={maindata[8].Name} button={maindata[8].button} pic={maindata[8].pic} route={maindata[8].route} />
          </div>
          <div className="main-col">
            <Maindis Name={maindata[9].Name} button={maindata[9].button} pic={maindata[9].pic} route={maindata[9].route} />
          </div>
          </div>
          <div className="main-row">
          <div className="main-col">
            <Maindis Name={maindata[10].Name} button={maindata[10].button} pic={maindata[10].pic} route={maindata[10].route} />
          </div>
           </div>
      </div>
    </div>
    </div>
  );
}
