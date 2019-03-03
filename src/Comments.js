import React, {Component} from 'react';
import './Comments.css';
class Comments extends Component {
    render() {
        const {comments} = this.props;
        return (
        <article className="comments_part">
            {comments.map((comment,index)=> 
            <div className="comment" key = {index}>
                <figure>
                    <img src="../Assets/Images/grace.jpg" alt="me"/>
                </figure>
                <section className="comment__info">
                    <div className="user_date">
                        <h1 className="name">{comment.name}</h1>
                        <h1 className="date">{new Date(comment.timestamp).toLocaleDateString("en-US")}</h1>
                    </div>
                    <p>{comment.comment}</p>
                </section>
            </div>
            )}
        </article>);
    }
}

export default Comments;