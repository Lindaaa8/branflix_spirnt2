import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './Header';
import {videoInfo, video} from './VideoData';
import VideoPlay from './VideoPlay';
import VideoInfo from './VideoInfo';
import Comments from './Comments';
import NextVideo from './NextVideo';
import Conversation from './Conversation';
import Upload from './Upload';
import UploadVideo from './UploadVideo';
import Home from './Home';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

let url = "https://project-2-api.herokuapp.com";
let videos = 'https://project-2-api.herokuapp.com/videos?api_key=Linda';

// let videoInfo = [];
// axios.get(videos).then(res=>{
//   videoInfo = res.data;
//   console.log(res.data);
//   }).catch(err=>{
//     console.log({err});
//   })
class App extends Component {
  state = {
    // videos: [],
    // videoInfo: { 
    //   comments: []
    // },
    url:url,
    video:video,
    videoInfo:videoInfo
  }
  componentDidMount() {
    axios.get(videos).then(res => {
     this.setState({url:url,video:res.data[0],
                  videoInfo:res.data});
    console.log(res.data);
    //  this.setState({video:res.data[0]});
    }).catch(err=>{
      console.log("fail to get video data");
    })
  }
  
  render() {
    console.log(this.state.videoInfo);
    console.log(this.state.videoInfo.comments);
    return (
      <div className="App">
      <Router>
        <Switch>
            <Route path="/" exact render={(props)=>{return <Home {...props} url={this.state.url} video={this.state.video} videoInfo={this.state.videoInfo}/>}}/>
            <Route path="/upload" exact component={Upload} />
            <Route path="/videos/:id" render={(props)=>{return <Home {...props}  url={this.state.url} video={this.state.video} videoInfo={this.state.videoInfo}/>}}/>
        </Switch>
      </Router>
      
      </div>
    );
  }
}

export default App;
