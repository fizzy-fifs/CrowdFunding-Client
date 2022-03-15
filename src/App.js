import './App.css';
import { BrowserRouter as Router,Route, Routes, Navigate } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import LandingPage from './pages/landing-page/LandingPage';
import Home from './pages/Home/Home';
import projectIsNotInLocalStorage from './helpers/projectIsNotInLocalStorage'
import setProjectsToStorage from './setToStorage/setProjectsToStorage';
import businessIsNotInLocalStorage from './helpers/businessIsNotInLocalStorage';
import setBusinessesToStorage from './setToStorage/setBusinessesToStorage';

if (localStorage.getItem('signedInUser' !== null)) { <Navigate to='/home' /> }

if (localStorage.getItem('signedInUser') !== null && projectIsNotInLocalStorage()) {
    setProjectsToStorage()
}

if (localStorage.getItem('signedInUser') !== null && businessIsNotInLocalStorage()) {
  setBusinessesToStorage()
}

function App() {
  return (
    <div className="App">
      <Router>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            
            <Route path="/" exact element={<LandingPage />}/>
            <Route path="/signup" exact element={<SignUp />}/>
            <Route path="/signin" exact element={<SignIn />}/>
            <Route path="/home" exact element={<Home />}/>

          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
