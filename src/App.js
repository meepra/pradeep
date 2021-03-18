import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <div className="App">
         <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
             
            <Route exact path="/about" component={About} />
             
            <Route exact path="/contact" component={Contact} />
             
            <Route exact path="/service" component={Service} />
              <Redirect to="/" />
          </Switch>
      
       
    </div>
    </>
  );
}


export default App;
