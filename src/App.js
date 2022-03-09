import './App.css';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import SignUp from './components/SignUp/SignUp';
import LandingPage from './pages/landing-page/LandingPage';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            
            <Route path="/" exact element={<LandingPage />}/>
            <Route path="/signup" exact element={<SignUp />}/>
            <Route path="/home" exact element={<Home />}/>

          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
