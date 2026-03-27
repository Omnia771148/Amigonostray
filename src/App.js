import './App.css';
import { Scroll } from "./scroll.js"
import { Dismain } from './mainpage';
import { Dis } from './importspecial';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dis1 } from './milkshake'; 
import { Dis2 } from './sand';
import { Dis3 } from './toco';
import { Dis4 } from './mojosoda';
import { Dis5 } from './french';
import { Dis6 } from './specialpiz';
import { Dis7 } from './familypizza';
import { Dis8 } from './pizza';
import { Dis9 } from './hotdogs';
import { Dis10 } from './egg';
import Header from './Header';
;
function App() {
  return (
    <div>
      <Header>

      </Header><br></br>
      <br></br>
      <br></br>
      
    <BrowserRouter>
    <Scroll/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dismain />} />
          <Route path="/importspecial" element={<Dis />} />
          <Route path="/milkshake" element={<Dis1 />} />
          <Route path="/sand" element={<Dis2 />} />
          <Route path="/toco" element={<Dis3 />} />
          <Route path="/mojosoda" element={<Dis4 />} />
          <Route path="/french" element={<Dis5 />} />
          <Route path="/specialpizza" element={<Dis6 />} />
          <Route path="/familypizza" element={<Dis7 />} />
          <Route path="/pizza" element={<Dis8 />} />
          <Route path="/hotdogs" element={<Dis9 />} />
          <Route path="/egg" element={<Dis10 />} />
          
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
