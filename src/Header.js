import React, {Component} from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import './header.css';
class Header extends Component {
    // linkto = () => {
    //     <Link to='./upload'></Link>
    // }
    render() {
        return (
            <div className="header">
                <figure className="logo">
                    <Link to="./">
                    <img id='logoImage' src='../Assets/Logo/Logo-brainflix.svg' alt="logo"/>
                    </Link>
                </figure>

                <div className="form">
                    <div className="form__search">
                        <input id="search" type="text" placeholder="Search" required/>
                    </div>
                    <div className="form__submit">
                        <Link to="/upload">
                            <button className="upload" onClick={this.linkto}>+ UPLOAD</button>
                        </Link>
                        <figure>
                            <img id="face" src="../Assets/Images/grace.jpg" alt="user_headshot"/>
                        </figure>
                    </div>
                    
                </div>
            </div>
        );
    }
    
}

export default Header;