import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from './components/Navigation';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

interface AppProps {}
interface AppState {}
 
class App extends React.Component<AppProps, AppState> {
  render() { 
    return ( 
      <Router>
        <div className="app">
          {/*---- NAVIGATION ----*/}
          <Navigation />
          {/*---- END NAVIGATION ----*/}

          {/*---- ROUTER ----*/}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact component={NotFound} />
          </Switch>
          {/*---- END ROUTER ----*/}

        </div>
      </Router>
     );
  }
}
 
export default App;
