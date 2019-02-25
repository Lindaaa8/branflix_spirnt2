import React, {Component} from 'react';
import './VideoInfo.css';
class VideoInfo extends Component {
    render() {
        const {comments, description} = this.props;
        return (
            <div>
                <article>
                    <p>{ description }</p>
                    <h1>{comments.length} Comments</h1>

                </article>
                <div id="user_comment">
                    <figure>
                        <img src="../Assets/Images/grace.jpg"/>
                    </figure>
                    <form id="comment_form">
                    <h2>JOIN THE CONVERSATION</h2>
                        <div className="comment">
                            <textarea className='comment__text' type='text' plaveholder="That was easily the most spectacular BMX moment ever."/>
                            <input className='comment__submit' type="submit" value="comment"/>
                        </div>
                    </form>
                </div>
            </div>);
    }
}

export default VideoInfo;