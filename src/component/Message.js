import CommentsList from './CommentsList';
import CurrentTime from './CurrentTime';
import './Message.css';
function Message(props) {
    return ( 
        <div className="Message">
            <h2>{props.text}</h2>
            <CurrentTime />
            <CommentsList />
        </div>
     );
}

export default Message;