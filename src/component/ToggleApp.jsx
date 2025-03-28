import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function ToggleApp() {
    const theme = useSelector(state => state);
    const dispatch = useDispatch();
    const [themeToggle, setTheme] = useState([]);

    const toggle = () => {
        dispatch({ type: 'TOGGLE_THEME'});
    }

    return (
        <div style={{background: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black'}}>
            <h1 >Тoggle Theme action {theme}</h1>
            <button onClick={toggle}>Сменить тему на {theme === 'dark' ? 'light' : 'dark'}</button>
        </div>
     );
}

export default ToggleApp;