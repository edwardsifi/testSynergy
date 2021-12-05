import React from 'react';
import Home from './screens/Home/Home';
import Collections from './screens/Collections/Collections';
import SendEmail from './screens/SendEmail/SendEmail';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/collections" exact component={Collections} />
          <Route path="/sendemail/:id" exact component={SendEmail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
