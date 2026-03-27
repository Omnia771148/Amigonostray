import { maindata } from './mainpagedata';
import { Maindis } from './mainpagedisplay';
import { bgImage } from '../back'; 
import BootstrapCarousel from '../Carousel';
import './main.css';

export function Dismain() {
  return (
    <div>   
      <BootstrapCarousel/>
      <div
        style={{
          backgroundImage: `url(${bgImage})`, 
          backgroundSize: 'cover',
          minHeight: '100vh',
          padding: '20px',
        }}
      ><br></br>
        <div className="main-container">
          {/* Automatically Map all main data items */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {maindata.map((item, index) => (
              <div className="main-col" key={index}>
                <Maindis 
                  Name={item.Name} 
                  button={item.button} 
                  pic={item.pic} 
                  route={item.route} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
