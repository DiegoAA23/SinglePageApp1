import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';
import { Documentation } from './pages/Documentation';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={ <About /> } />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/pricing" element={<Pricing/>} />
      </Routes>
     </Router>
  )
}

export default App
