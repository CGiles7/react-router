import React from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';

function NoMatch() {
  const location = useLocation();

  return (
    <h1>
      404 Not Found<code>{location.pathname}</code>
    </h1>
  );
}

function Home() {
  return <h1>Welcome to the home page</h1>;
}

function About() {
  return <h1>You are on the about page</h1>;
}

function Contact() {
  return <h1>Please feel free to email us</h1>;
}

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
