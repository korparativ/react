import * as React from 'react';
import {useState} from 'react';
import './ToDoList.css';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';

function ToDoList() {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");
    const [count, setCount] = useState(0);

    function addList() {
        let todoArr = Object.assign([], todo);
        setCount(count + 1)
        const obj = {id: count, text: input};
        console.log(obj);
        todoArr.push(obj);
        setTodo(todoArr);
        setInput("");
    }

    function handleRemoveClick(id) {
        setTodo(todo.filter(el => el.id !== id))
      };
    return ( 
        <div className='ToDoList'>
            <div>
                <h2>ToDoList</h2>
            <TextField onChange={(e) => setInput(e.target.value)} id="filled-basic" label="Новая задача" variant="filled" />
            <Button onClick={() => {addList()}} variant="outlined">Добавить</Button>
            </div>

            {todo.map((el) => (
                    <List>
                    <ListItem disablePadding>
                    <p>{el.text}</p>
                    <IconButton onClick={() => handleRemoveClick(el.id)} aria-label="delete"><DeleteIcon /></IconButton>
                    </ListItem>
                    </List>
                ))}

        </div>
     );
}



export default ToDoList;