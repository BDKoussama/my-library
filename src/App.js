import React, { Component } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Profile from './components/profile/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App">
            <Navbar/>
            <Switch>
              <Route  exact path = '/' component={Dashboard}/>
              <Route  path = '/profile' component={Profile}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
