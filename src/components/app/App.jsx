import React from 'react';
import AllCharacters from '../app/characters/AllCharacters';
import Character from '../app/characters/Character';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';



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
                path="/details"
                exact
                component = { Character }
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}
