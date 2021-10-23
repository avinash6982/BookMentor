import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { useState } from 'react';

import LaunchPage from './container/LaunchPage';
import Navbar from "./container/Navbar";
import Home from './container/Home';

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
      {
        user ?
          <>
            <Navbar setUser={setUser} />
            <Home />
          </> :
          <LaunchPage setUser={setUser} />
      }
    </div>
  );
}

export default App;
