import React, {Component} from 'react';
import './UploadVideo.css';
import axios from 'axios';
export default class UploadVideo extends Component {
    constructor() {
        super();
        this.UploadVideo = React.createRef();
    }
    submitForm = (e)=> {
        // use prevent default to stop page from refreshing
        e.preventDefault();
        // grab the data from the form
        let description = this.UploadVideo.current.videoDes.value;
        let title = this.UploadVideo.current.videoTitle.value;

        // use that data to make a new video object (this is what we want to send in POST request to our srever)
        let upload_video = {
            title:title,
            description:description
        }
        // create config object to give to axios
        let newUpload = {
            method:'POST',
            url:'http://localhost:8080/videos',
            data:upload_video,
            headers:{
                'content-type':'application/json'
            }
        }

        // call axios and pass it the config object
        axios(newUpload)
        .then(retval=>
            console.log("it worked."))
        .catch(err=>console.log("We're fixing the issue of uploading Videos",err));
        document.getElementById("create-submit-form").reset();
    }
    render() {
        return (
            <div id="upload_div">
                <h1 id='header'>Upload Video</h1>
                <figure className='upload'>
                    <h3>VIDEO THUMBNAIL</h3>
                    <img id='upload__video' src='../Assets/Images/kushagra-saxena.jpg' alt="upload_video"/>
                </figure>
                <form id ="create-submit-form" ref={this.UploadVideo} >
                    <div className='container1'>
                        <h3>TITLE YOUR VIDEO</h3>
                        <input type='text' id ='title' placeholder='   Add a title to your video' name='videoTitle' />
                    </div>
                    <div className='container2'>
                        <h3>ADD A VIDEO DESCRIPTION</h3>
                        <textarea id='description' placeholder='   Add a description of your video' name='videoDes'/>
                    </div>
                    <div className="buttons">
                        <button id='bt1' onClick={this.submitForm}>PUBLISH</button>
                        <button id='bt2'>CANCEL</button>
                    </div>  
                </form>
            </div>
        );
    }
}