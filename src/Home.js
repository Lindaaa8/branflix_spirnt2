import React, {Component} from 'react';
import './Conversation.css';
import './Home.css';
import Header from './Header';
import VideoPlay from './VideoPlay';
import VideoInfo from './VideoInfo';
import Comments from './Comments';
import NextVideo from './NextVideo';
import axios from 'axios';
import {videoInfo, video} from './VideoData';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';



// http://localhost:8080/videos;
// let url = 'http://localhost:8080';
let url = "https://project-2-api.herokuapp.com";
let videos = 'https://project-2-api.herokuapp.com/videos?api_key=Linda';
// let videos = 'http://localhost:8080/videos';


class Home extends Component {
    state = {
        url:url,
        video: false,
        videoInfo:[]
      }

      componentDidMount() {
          // videos
        axios.get('http://localhost:8080/videos').then(res => {
         this.setState({
           url:url,
           videoInfo:res.data});
        }).catch(err=>{
          console.log("fail to get video data");
        })
        this.getVideoInfo(this.props.match.params.id)
      }
    
    // state = {
    //     id:video.id,
    //     videoData:videoInfo
    // }
    getVideoInfo = (new_id) => {
        let comment_url = "http://localhost:8080/videos/";
        // let comment_url = url + "/videos/" + new_id + "?api_key=Linda";
        axios.get(comment_url).then(returnVal=>{
            let new_video = false;
            for (let v of returnVal.data) {
                if (v.id === new_id) {
                    new_video = v;
                    break;
                }
            }
            this.setState({
                videoInfo:returnVal.data,
                video:new_video
            })
        }).catch(err=>{
            console.log('getting video info...');
        })
    }
    // componentDidMount() {
    //     this.getVideoInfo();
    // }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.getVideoInfo(this.props.match.params.id);
        }
    }

    handleSubmit(newSubmit){
        // this.handleSubmit.
        axios(newSubmit)
        .then(retval=>{
            console.log(retval.data);
            console.log("it worked.")
        })
        .catch(err=>console.log("We're fixing the issue of uploading Videos",err));
        
    }

    render() {
        if(!this.state.video) {
            return "loading"
          } else {
            return (
                <div id="Home">
                    <Header />
                    <VideoPlay videoData={this.state.video} />
                    <div className="Bottom">
                        <div className="Bottom-left">
                            <VideoInfo videoData={this.state.video} />
                            <Comments comments={this.state.video.comments} />
                        </div>
                        <div className="Bottom-right">
                            <NextVideo videoInfo={this.state.videoInfo} vidId={this.props.match.params.id}/>
                        </div>
                    </div> 
                </div>
                );
          }
    }
}

export default Home;