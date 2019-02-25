import React, {Component} from 'react';
import './Comments.css';
class Comments extends Component {
    render() {
        const {comments} = this.props;
        // let date1 = new Date(comments[0].timestamp).toLocaleDateString("en-US");
        // let date2 = new Date(comments[1].timestamp).toLocaleDateString("en-US");
        // let date3 = new Date (comments[2].timestamp).toLocaleDateString("en-US");
        return (
        <article>
            {comments.map((comment,index)=> 
            <div className="comment" key = {index}>
                <figure>
                    <img src="../Assets/Images/grace.jpg"/>
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
            {/* <div className="comment">
                <figure>
                    <img src="../Assets/Images/grace.jpg"/>
                </figure>
                <section className="comment__info">
                    <div className="user_date">
                        <h1 className="name">{comments[0].name}</h1>
                        <h1 className="date">{date1}</h1>
                    </div>
                    <p>{comments[0].comment}</p>
                </section>
            </div>
            <div className="comment">
                <figure>
                    <img src="../Assets/Images/grace.jpg" />
                </figure>
                <section className="comment__info">
                    <div className="user_date">
                        <h1 className="name">{comments[1].name}</h1>
                        <h1 className="date">{date2}</h1>
                    </div>
                    <p>{comments[1].comment}</p>
                </section>
            </div>
            <div className="comment">
                <figure>
                    <img src="../Assets/Images/grace.jpg" />
                </figure>
                <section className="comment__info">
                    <div className="user_date">
                        <h1 className="name">{comments[2].name}</h1>
                        <h1 className="date">{date3}</h1>
                    </div>
                    <p>{comments[0].comment}</p>
                </section>
            </div> */}
        </article>);
    }
}

export default Comments;