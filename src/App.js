import './App.css';
import { BrowserRouter as Router,Route, Routes, Navigate } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import LandingPage from './pages/landing-page/LandingPage';
import Home from './pages/Home/Home';
import setProjectsToStorage from './setToStorage/setProjectsToStorage';
import setBusinessesToStorage from './setToStorage/setBusinessesToStorage';
import updateStoredUserInfo from './setToStorage/updateStoredUserInfo';
import ViewClickedProject from './components/ViewClickedProject/ViewClickedProject';
import PaymentsSuccess from './components/PaymentsSuccess/PaymentsSuccess';
import setMyBusinessesToStorage from './setToStorage/setMyBusinessesToStorage';
import MapWithAllProjects from './components/MapWithAllProjects';
import Rewards from './components/Rewards/Rewards';
import RegisterBusiness from './components/RegisterBusiness/RegisterBusiness';
import ListAProject from './components/ListAProject/ListAProject';
import AppBar from './components/Appbar/Appbar';
import categoriesNotInLocalStorage from './helpers/categoriesNotInLocalStorage';
import setCategoriesToLocalStorage from './setToStorage/setCategoriesToLocalStorage';
import ViewClickedCategory from './components/ViewClickedCategory/ViewClickedCategory';

function App() {  
  setProjectsToStorage()
  setBusinessesToStorage()
  updateStoredUserInfo()
  setMyBusinessesToStorage()

  if (categoriesNotInLocalStorage()){ setCategoriesToLocalStorage() }

  return (
    <div className="App">
      <Router>
        <AnimatePresence exitBeforeEnter>
          <AppBar />
          <Routes>
    
              <Route path="/" exact element={<LandingPage />}/>
              <Route path="/signup" exact element={<SignUp />}/>
              <Route path="/signin" exact element={<SignIn />}/>
              <Route path="/home" exact element={<Home />}/>
              <Route path="/projects/:id" exact element={<ViewClickedProject />}/>
              <Route path="/payments-success" exact element={<PaymentsSuccess />}/>
              <Route path="/projects-map" exact element={<MapWithAllProjects />} />
              <Route path="/my-rewards" exact element={<Rewards />} />
              <Route path="/register-a-business" exact element={<RegisterBusiness />} />
              <Route path="/list-a-project" exact element={<ListAProject />} />
              <Route path="/categories/:category" exact element={<ViewClickedCategory />} />

          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
