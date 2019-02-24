import React, {Component} from 'react';
import './Conversation.css';
class Conversation extends Component {
    render() {
        const {poster, video,title,channel,timestamp,views,likes,description,comments} = this.props.videoInfo;
        return (
                <div id="user_comment">
                    <h2>JOIN THE CONVERSATION</h2>
                    <form id="comment_form">
                        <figure>
                        <img src="../Assets/Images/grace.jpg"/>
                        </figure>
                        <div className="comment">
                            <textarea className='comment__text' type='text' plaveholder="That was easily the most spectacular BMX moment ever."/>
                            <input className='comment__submit' type="submit" value="comment"/>
                        </div>
                    </form>
                </div>);
    }
}

export default Conversation;