import React, {Component} from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import './VideoPlay.css';
class VideoPlay extends Component {
    render() {
        const {image, video,title,channel,timestamp,views,likes} = this.props.videoData;
        let date = new Date(timestamp).toLocaleDateString("en-US");
        const api = "?api_key='linda'";
        return (
            <div className="main">
                <div className="videoplay">
                    {/*/ Janet's part*/}
                    <video src={video+api} poster={image} controls />
                    {/* <Video loop muted 
                    controls={['PlayPause', 'Seek','Time','Volume','Fullscreen']}
                    poster={ poster }>
                    <source src={video+api} type="video/web"/>
                    </Video> */}
                </div>
                <section className="videoIntro">
                    <h1>{ title }</h1>
                    <div id="channel_date">
                        <h3 className="person">{ channel }</h3>
                        <h3 id="date">{ date }</h3>
                    </div>
                    <div className="buttons">
                        <div className="containers">
                            <img className="btn" src="../assets/Icons/PNG/Icon-views.png" />
                            <h3 className="nums">{ views }</h3>
                        </div>
                        <div id="ct2" className="containers">
                            <img className="btn" src="../assets/Icons/PNG/Icon-likes.png" />
                            <h3 className="nums">{ likes }</h3>
                        </div>
                    </div>
                    
                </section> 
            </div>
            
            
        );
    }
}

export default VideoPlay;