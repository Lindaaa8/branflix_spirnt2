import React, {Component} from 'react';
import './VideoInfo.css';
class VideoInfo extends Component {
    render() {
        const {poster, video,title,channel,timestamp,views,likes,description,comments} = this.props.videoInfo;
        return (
        <article>
            <p>{ description }</p>
            <h1>{comments.length} Comments</h1>
            <div id='info'>
                <form id="comment_form">
                    
                    <figure>
                        <img src="../Assets/Images/grace.jpg"/>
                    </figure>
                    <div className="comment">
                        <h2>JOIN THE CONVERSATION</h2>
                        <textarea className='comment__text' type='text' plaveholder="That was easily the most spectacular BMX moment ever."/>
                        <input className='comment__submit' type="submit" value="comment"/>
                    </div>
                </form>
            </div>
            
        </article>);
    }
}

export default VideoInfo;