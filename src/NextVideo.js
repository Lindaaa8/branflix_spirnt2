import React, {Component} from 'react';
import './NextVideo.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
class NextVideo extends Component {
    render() {
        let video_list = this.props.videoInfo;
        let filteredVideo = video_list.filter((video) => video.id !== this.props.vidId);
        return (
            <article>
                <h1 id="next">NEXT VIDEO</h1>
                {filteredVideo.map((video,index)=>
                <Link to={`/videos/${video.id}`} key={index.toString()} style={{textDecoration:'none'}} >
                    <div className="video">
                            <figure>
                                <img src={video.image} alt={index.toString()} />
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