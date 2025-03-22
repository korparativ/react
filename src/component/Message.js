import CommentsList from './CommentsList';
import CurrentTime from './CurrentTime';
import './Message.css';
import TemperatureConverter from './TemperatureConverter';
import ToDoList from './ToDoList';
function Message(props) {
    return ( 
        <div className="Message">
            <h2>{props.text}</h2>
            <CurrentTime />
            <CommentsList />
            <TemperatureConverter />
            <ToDoList />
        </div>
     );
}

export default Message;