import React, {Component} from 'react';
import './VideoPlay.css';
// import { DefaultPlayer as Video } from 'react-html5video';
class VideoPlay extends Component {
    constructor() {
        super();
        this.state = {
            play:false
        }
        this.videoPlay = React.createRef();
        console.log(this.videoPlay);
        
    }
    
    play_and_pause =()=>{
        if (!this.state.play) {
            this.videoPlay.current.play();
        } else {
            this.videoPlay.current.pause();
        }
        this.setState({
            play:!this.state.play
        }) 
    }


    render() {
        const {image, video} = this.props.videoData;
        // let date = new Date(timestamp).toLocaleDateString("en-US");
        const api = "?api_key='linda'";
        return (
                <div className="videoplay">
                    {/* / Janet's part*/}
                    {/* <video width="100%" height="100%" controls >
                        <source src={video+api} type="video/mp4"/>
                        <poster src={image} alt="video_page"/>
                    </video> */}
                    
                    <video  ref={this.videoPlay} src={video+api} poster={image} >
                    </video>
                    <div className="control_container">
                        <div className='play' onClick={this.play_and_pause}>
                            <img src = '/Assets/Icons/PNG/Icon-pause.png' alt="play"/>
                        </div>
                        <div className="progress_bar">
                            <div className="progress_line">
                            </div>
                                <label>0:00/0:42</label>
                            </div>
                        <div className="volume_and_zoom">
                            <div className='volume'>
                                <img src="/Assets/Icons/PNG/Icon-volume.png" alt="volume"></img>
                            </div> 
                            <div className='zoom'>
                                <img src = '/Assets/Icons/PNG/Icon-fullscreen.png' alt="zoom"/>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default VideoPlay;