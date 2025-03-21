import CurrentTime from './CurrentTime';
import './Message.css';
function Message(props) {
    return ( 
        <div className="Message">
            <h2>{props.text}</h2>
            <CurrentTime />
        </div>
     );
}

export default Message;