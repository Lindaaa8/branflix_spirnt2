import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {videoInfo} from './VideoData';
import VideoPlay from './VideoPlay';
import VideoInfo from './VideoInfo';
import Comments from './Comments';
import NextVideo from './NextVideo';

class App extends Component {
  state = {
    videoInfo: videoInfo
  }
  render() {
    return (
      <div className="App">
        <Header />
        <VideoPlay videoInfo={this.state.videoInfo} />
        <VideoInfo videoInfo={this.state.videoInfo} />
        <Comments videoInfo={this.state.videoInfo} />
        <NextVideo videoInfo={this.state.videoInfo} />
      </div>
    );
  }
}

export default App;
