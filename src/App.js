import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";
import Rsvp from "./components/rsvp/rsvp";
import Photos from "./components/photos/photos";
import Events from "./components/events/events";
import WeddingParty from "./components/wedding-party/weddingParty";
import Travel from "./components/travel/travel";
import "./App.css";
import yellowSlash from "./assets/yellow-slash.png";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="heading">
            <h1>DJ</h1>
            <p>AND</p>
            <h1>MONIQUE</h1>
          </div>
        </Route>
        <Route path="/*">
          <div className="heading heading-secondary">
            <h1 className="alt-heading">DJ</h1>
            <img className="yellow-slash" src={yellowSlash} alt="heading split"/>
            <h1 className="alt-heading">MONIQUE</h1> 
          </div>
        </Route>
      </Switch>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/rsvp">
          <Rsvp />
        </Route>
        <Route path="/photos">
          <Photos />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/wedding-party">
          <WeddingParty />
        </Route>
        <Route path="/travel">
          <Travel />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
