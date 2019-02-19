import React, {Component} from 'react';
import './header.css';
class Header extends Component {
    render() {
        return (
            <div className="header">
                <figure className="logo">
                    <img id='logoImage' src='../Assets/Logo/Logo-brainflix.svg' alt="logo"/>
                </figure>

                <div className="form">
                    <div className="form__search">
                        <input id="search" type="text" placeholder="Search" required/>
                    </div>
                    <div className="form__submit">
                        <button className="upload">+ UPLOAD</button>
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