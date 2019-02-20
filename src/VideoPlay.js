import React, {Component} from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import './VideoPlay.css';
class VideoPlay extends Component {
    render() {
        const {poster, video,title,channel,timestamp,views,likes,description,comments} = this.props.videoInfo;
        let date = new Date(timestamp).toLocaleDateString("en-US");
        const api = "?api_key='linda'";
        return (
            <div className="main">
                <div className="videoplay">
                    {/*/ Janet's part*/}
                    <video src={video+api} poster="../Assets/Images/video-list-0.jpg" controls />
                    {/* <Video loop muted 
                    controls={['PlayPause', 'Seek','Time','Volume','Fullscreen']}
                    poster={ poster }>
                    <source src={video+api} type="video/web"/>
                    </Video> */}
                </div>
                <section className="videoIntro">
                    <h1>{ title }</h1>
                    <div id="channel_date">
                        <h2 className="person">{ channel }</h2>
                        <h2 id="date">{ date }</h2>
                    </div>
                    <div className="buttons">
                        <div className="containers">
                            <img className="btn" src="../assets/Icons/PNG/Icon-views.png" />
                            <h2 className="nums">{ views }</h2>
                        </div>
                        <div className="containers">
                            <img className="btn" src="../assets/Icons/PNG/Icon-likes.png" />
                            <h2 className="nums">{ likes }</h2>
                        </div>
                    </div>
                    
                </section> 
            </div>
            
            
        );
    }
}

export default VideoPlay;