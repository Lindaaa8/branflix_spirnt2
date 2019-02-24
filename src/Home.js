import React, {Component} from 'react';
import './Conversation.css';
import Header from './Header';
import VideoPlay from './VideoPlay';
import VideoInfo from './VideoInfo';
import Comments from './Comments';
import NextVideo from './NextVideo';
import axios from 'axios';
import {videoInfo, video} from './VideoData';
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom';
// import Axios from 'axios';

class Home extends Component {
    state = {
        id:video.id,
        videoData:videoInfo
    }
    componentDidMount() {
        let comment_url = this.props.url + "/videos/" + this.state.id + "?api_key=Linda";
        axios.get(comment_url).then(returnVal=>{
            this.setState({videoData:returnVal.data})

        })
    }
    render() {
        let comment_url = this.props.url + "/videos/" + this.state.id + "?api_key=Linda";
        console.log(comment_url);
        console.log(this.props.videoInfo);
        console.log(this.state.videoData);
        return (
            <div id="Home">
                <Header />
                <VideoPlay videoData={this.state.videoData} />
                <VideoInfo description={this.state.videoData.description} comments={this.state.videoData.comments}/>
                <Comments comments={this.state.videoData.comments} /> 
                <NextVideo id= {this.state.id} videoInfo={this.props.videoInfo} />
            </div>);
    }
}

export default Home;