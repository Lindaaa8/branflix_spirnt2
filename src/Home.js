import React, {Component} from 'react';
import './Conversation.css';
import Header from './Header';
import VideoPlay from './VideoPlay';
import VideoInfo from './VideoInfo';
import Comments from './Comments';
import NextVideo from './NextVideo';
import axios from 'axios';
import {videoInfo, video} from './VideoData';
import {Switch} from 'react-router-dom';


class Home extends Component {
    state = {
        id:video.id,
        videoData:videoInfo
    }
    getVideoInfo(new_id) {
        let comment_url = this.props.url + "/videos/" + new_id + "?api_key=Linda";
        axios.get(comment_url).then(returnVal=>{
            this.setState({videoData:returnVal.data})
        })
    }
    componentDidMount() {
        this.getVideoInfo();
    }
    handleEdit(e,new_id) {
        e.preventDefault();
        this.getVideoInfo(new_id);
    }
    render() {
        let comment_url = this.props.url + "/videos/" + this.state.id + "?api_key=Linda";
        console.log(this.state.videoData);
        return (
            <div id="Home">
                <Header />
                <VideoPlay videoData={this.state.videoData} />
                <VideoInfo description={this.state.videoData.description} comments={this.state.videoData.comments}/>
                <Comments comments={this.state.videoData.comments} /> 
                <NextVideo url ={this.props.url} id= {this.state.id} videoInfo={this.props.videoInfo} onEdit={(e,new_id)=>this.handleEdit(e,new_id)}/>
            </div>);
    }
}

export default Home;