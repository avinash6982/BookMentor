import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

import Navbar from "./container/Navbar";
import Footer from './container/Footer';
import { useAuth } from './AuthContext';

function App() {

  const auth = useAuth()

  return (
    <div className="App">
      {auth.user.userType && <Navbar />}
      <Router>
        <Routes />
      </Router>
      {auth.user.userType && <Footer />}
    </div>
  );
}

export default App;
