import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {video, video_info} from './VideoData';
import Upload from './Upload';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


// let videoInfo = [];
// axios.get(videos).then(res=>{
//   videoInfo = res.data;
//   console.log(res.data);
//   }).catch(err=>{
//     console.log({err});
//   })

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
