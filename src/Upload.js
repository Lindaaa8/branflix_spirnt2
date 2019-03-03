import React, {Component} from 'react';
import UploadVideo from './UploadVideo';
import Header from './Header';

export default class Upload extends Component {
    render() {
        return (
            <div>
                <Header />
                <UploadVideo HandleSubmit={this.handleSubmit}/>
            </div>
        );
    }
    
}
