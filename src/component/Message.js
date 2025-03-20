import './Message.css';
function Message(props) {
    return ( 
        <div className="Message">
            <h2>{props.text}</h2>
        </div>
     );
}

export default Message;