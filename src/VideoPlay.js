import React, {Component} from 'react';
import { DefaultPlayer as Video } from 'react-html5video';

class VideoPlay extends Component {
    render() {
        const {poster, video,title,channel,timestamp,views,likes,description} = this.props.videoInfo;
        let date = new Date(timestamp).toLocaleDateString("en-US");
        const api = "?api_key='linda'";
        return (
            <div>
                <div className="video">
                    {/*/ Janet's part*/}
                    <video src={video+api} poster={poster} controls />
                    {/* <Video loop muted 
                    controls={['PlayPause', 'Seek','Time','Volume','Fullscreen']}
                    poster={ poster }>
                    <source src={video+api} type="video/web"/>
                    </Video> */}
                </div>
                <section className="videoIntro">
                    <h1>{ title }</h1>
                    <div id="channel_date">
                        <h2>{ channel }</h2>
                        <h2>{ date }</h2>
                    </div>
                    <div id="view">
                        <h2>{ views }</h2>
                    </div>
                    <div id="likes">
                        <h2>{ likes }</h2>
                    </div>
                </section>
                <article>
                    <p>{ description }</p>
                    <form id="comment_form">
                        <h1>{}</h1>
                    </form>
                </article>
            </div>
            
            
        );
    }
}

export default VideoPlay;