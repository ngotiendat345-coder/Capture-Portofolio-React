import React from 'react';
import Global from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
import Nav from './components/Nav';

function App() {
  const location = useLocation();
  return (
    <div className="App">
        <Global/> 
        <Nav/>
        <AnimatePresence exitBeforeEnter>
          <Switch key={location.key} location={location}>
            <Route exact path="/">
                <AboutUs/>
            </Route>
            <Route path="/work">
                <OurWork/>
            </Route>
            <Route path="/contact">
                <ContactUs />
            </Route>
          </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;
