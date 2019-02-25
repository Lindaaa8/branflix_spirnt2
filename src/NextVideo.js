import React, {Component} from 'react';
import './NextVideo.css';
import axios from 'axios';
import {video_info } from './VideoData';
import {Link} from 'react-router-dom';
class NextVideo extends Component {
    state = {
        target_video:{}
    }
    getVideoInfo() {
        let videoData_url = this.props.url + "/videos/" + this.state.id + "?api_key=Linda";
        axios.get(videoData_url).then(returnVal=>{
            this.setState({target_video:returnVal.data})
        })
    }
    render() {
        let target_id = this.props.id;
        let videoData_url = this.props.url + "/videos/" + target_id + "?api_key=Linda";
        let video_list = this.props.videoInfo;
        let targetVideo = video_list.find((video) => video.id === target_id);
        let filteredVideo = video_list.filter((video) => video.id !== target_id);
        return (
            <article>
                <h1 id="next">NEXT VIDEO</h1>
                {filteredVideo.map((video,index)=>
                <Link to={`/videos/${video.id}`} key={index.toString()} onClick={
                    event=>(this.props.onEdit(event,video.id))
                }>
                    <div className="video">
                            <figure>
                                <img src={video.image} />
                            </figure>
                            <div className="video_info">
                                <h1 className="title">{video.title}</h1>
                                <h1 className="author">{video.channel}</h1>
                            </div>
                        </div>
                </Link>)}
            </article>);
    }
}

export default NextVideo;