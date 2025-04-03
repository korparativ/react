import React from "react";
import { useDispatch, useSelector } from "react-redux";


export default function AsyncThunkMiddle(params) {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state);

    const handleClick = () => {
        // setTimeout(dispatch({ type: 'GET_TASK'}), 10000);
        setTimeout(() => {
            dispatch({ type: 'GET_TASK'})
          }, 3000)
    }

    return (
        <div>
            <h2>Middleware THUNK</h2>
            <button onClick={handleClick}>Загрузить tasks</button>
            <ul>
            {tasks.map((task) => (
                <li>
                    <p>id: {task.id} title: {task.title}</p>
                </li>
            ))}
            </ul>
        </div>
    )
};
