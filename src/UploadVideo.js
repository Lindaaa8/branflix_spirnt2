import React, {Component} from 'react';
import './UploadVideo.css';

export default class UploadVideo extends Component {
    render() {
        return (
            <div id="upload_div">
                <h1 id='header'>Upload Video</h1>
                <figure className='upload'>
                    <h3>VIDEO THUMBNAIL</h3>
                    <img id='upload__video' src='../Assets/Images/kushagra-saxena.jpg'/>
                </figure>
                <form>
                    <div className='container1'>
                        <h3>TITLE YOUR VIDEO</h3>
                        <input type='text' id ='title' placeholder='   Add a title to your video'></input>
                    </div>
                    <div className='container2'>
                        <h3>ADD A VIDEO DESCRIPTION</h3>
                        <textarea id='description' placeholder='   Add a description of your video'></textarea>
                    </div>
                    <div className="buttons">
                        <button id='bt1'>PUBLISH</button>
                        <button id='bt2'>CANCEL</button>
                    </div>
                    
                </form>
            </div>
        );
    }
}