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
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>DJ</h1>
          <h3>and</h3>
          <h1>Monique</h1>
        </Route>
        <Route path="/*">
          <h1>DJ / Monique</h1> 
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
        <Route path="/weddingparty">
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
