import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import videoInfo from './VideoData';
import VideoPlay from './VideoPlay';
class App extends Component {
  state = {
    videoInfo:videoInfo
  }
  render() {
    return (
      <div className="App">
        <Header />
        <VideoPlay 
        videoInfo={this.state.videoInfo}
        // poster={this.state.videoInfo.image}
        // source={this.state.videoInfo.video}
        // title={this.state.videoInfo.title}
        // channel={this.state.videoInfo.channel}
        // timestamp={this.state.videoInfo.timestamp}
        // views = {this.state.videoInfo.views}
        // likes = {this.state.videoInfo.likes}
        // description = {this.state.videoInfo.description}
        />
      </div>
    );
  }
}

export default App;
