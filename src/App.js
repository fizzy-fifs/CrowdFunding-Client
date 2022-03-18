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
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect } from 'react';





// const stripePromise = loadStripe("pk_test_51KeDy4FkYRYTO3iFfudn4MjPO8k3oblu2cLUq0fTok8ZlLaOLMi7BNLndoErshtYIPKpT368914rXzi5fO7oTUk400q7JO4AWy");

function App() {
  // const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   axios.post("http:localhost:8080/api/v1.0/payments/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  // const appearance = {
  //   theme: 'stripe',
  // };
  // const options = {
  //   clientSecret,
  //   appearance,
  // };
  
  useEffect(() => {
    setProjectsToStorage()
    setBusinessesToStorage()
    updateStoredUserInfo()
  }, [])

  return (
    <div className="App">
      <Router>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            
            <Route path="/" exact element={<LandingPage />}/>
            <Route path="/signup" exact element={<SignUp />}/>
            <Route path="/signin" exact element={<SignIn />}/>
            <Route path="/home" exact element={<Home />}/>
            <Route path="/projects/:id" exact element={<ViewClickedProject />}/>

          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
