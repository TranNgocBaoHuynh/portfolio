import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Profile from './components/pages/Profile';

function App() {
  return (
      <>
        <Router>
          <Navbar />
            <Switch>
              <Route path='/' exact component= {Home}/>
              <Route path='/resume' component={Resume} />
              <Route path='/profile' component={Profile} />
            </Switch>
        </Router>
      </>
  );
}

export default App;
