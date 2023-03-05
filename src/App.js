import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../src/components/Home';

function App() {
  return (
      <div className="container">
          <BrowserRouter>
            <Home />
          </BrowserRouter>
      </div>
  );
}

export default App;
