import '../src/pages/Home.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
      <div className="wrapper">
          <BrowserRouter>
            <Home />
          </BrowserRouter>
      </div>
  );
}

export default App;
