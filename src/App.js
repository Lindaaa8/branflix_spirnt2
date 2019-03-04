import React, { Component } from 'react';
import './App.css';
import Upload from './Upload';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    
    return (
      <div className="App">
      <Router>
        <Switch>
            <Route path="/" exact render={() => <Redirect to="/videos/1af0jruup5gu" /> }/>}} />
            <Route path="/upload" exact component={Upload} HandleSubmit={this.handleSubmit}/>
            <Route path="/videos/:id" render={(props)=>{
              return <Home {...props} />}} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
