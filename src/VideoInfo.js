import React, {Component} from 'react';
import './VideoInfo.css';
class VideoInfo extends Component {
    render() {
        const {title,channel, timestamp, views,likes, comments, description} = this.props.videoData;
        let date = new Date(timestamp).toLocaleDateString("en-US");
        // const {comments, description} = this.props;
        // console.log('comments',comments)
        return (
        <div className='main'>
            <section className="videoIntro">
                    <h1>{ title }</h1>
                    <div id="channel_date">
                        <h3 className="person">{ channel }</h3>
                        <h3 id="date">{ date }</h3>
                    </div>
                    <div className="buttons">
                        <div className="containers">
                            <img className="btn" src="../assets/Icons/PNG/Icon-views.png" alt="views" />
                            <h3 className="nums">{ views }</h3>
                        </div>
                        <div id="ct2" className="containers">
                            <img className="btn" src="../assets/Icons/PNG/Icon-likes.png" alt="likes" />
                            <h3 className="nums">{ likes }</h3>
                        </div>
                    </div>
                    
                </section> 
            <div id="videoInfo">
                <article>
                    <p>{ description }</p>
                    <h1>{comments.length} Comments</h1>

                </article>
                <div id="user_comment">
                    <figure>
                        <img src="../Assets/Images/grace.jpg" alt="user"/>
                    </figure>
                    <form id="comment_form">
                        <h2>JOIN THE CONVERSATION</h2>
                        <div className="comment">
                            <textarea className='comment__text' type='text' plaveholder="That was easily the most spectacular BMX moment ever."/>
                            <input className='comment__submit' type="submit" value="comment"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>);
    }
}

export default VideoInfo;