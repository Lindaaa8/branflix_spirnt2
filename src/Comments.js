import React, {Component} from 'react';
import './Comments.css';
class Comments extends Component {
    render() {
        const {comments} = this.props.videoInfo;
        let date1 = new Date(comments[0].timestamp).toLocaleDateString("en-US");
        let date2 = new Date(comments[1].timestamp).toLocaleDateString("en-US");
        let date3 = new Date (comments[2].timestamp).toLocaleDateString("en-US");
        return (
        <article>
            <div className="comment">
                <figure>
                    <img src="../Assets/Images/grace.jpg"/>
                </figure>
                    <div className="user_date">
                        <h1 className="name">{comments[0].name}</h1>
                        <h1 className="date">{date1}</h1>
                    </div>
                    <p>{comments[0].comment}</p>
                <div className="comment">
                    <figure>
                        <img src="../Assets/Images/grace.jpg" />
                    </figure>
                    <div className="user_date">
                        <h1 className="name">{comments[1].name}</h1>
                        <h1 className="date">{date2}</h1>
                    </div>
                    <p>{comments[1].comment}</p>
                </div>
                <div className="comment">
                    <figure>
                        <img src="../Assets/Images/grace.jpg" />
                    </figure>
                    <div className="user_date">
                        <h1 className="name">{comments[2].name}</h1>
                        <h1 className="date">{date3}</h1>
                    </div>
                    <p>{comments[0].comment}</p>
                </div>

                
            </div>
        </article>);
    }
}

export default Comments;