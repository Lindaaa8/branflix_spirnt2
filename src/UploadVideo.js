import React, {Component} from 'react';
import './UploadVideo.css';

export default class UploadVideo extends Component {
    render() {
        return (
            <div id="upload_div">
                <h1 id='header'>Upload Video</h1>
                <h2>VIDEO THUMBNAIL</h2>
                <figure className='upload'>
                <img id='upload__video' src='../Assets/Images/kushagra-saxena.jpg'/>
                </figure>
                <form>
                    <div className='container1'>
                        <h2>TITLE YOUR VIDEO</h2>
                        <input type='text' id ='title' placeholder='Add a title to your video'></input>
                    </div>
                    <div className='container2'>
                        <h2>ADD A VIDEO DESCRIPTION</h2>
                        <textarea id='description' placeholder='Add a description of your video'></textarea>
                    </div>
                    <button id='bt1'>PUBLISH</button>
                    <button id='bt2'>CANEL</button>
                </form>
            </div>
        );
    }
}