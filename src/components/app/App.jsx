import React from 'react';
import AllCharacters from '../app/characters/AllCharacters';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import SingleCharacter from './characters/SingleCharacter';



export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="home">
          <Router>
            <Switch>
              <Route 
                path="/"
                exact
                component = { AllCharacters }
              />
              <Route 
                path="/details/:id"
                exact
                component = { SingleCharacter }
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}
