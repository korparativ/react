import React from "react";
import { Link } from "react-router-dom";
 
export default function HomePage(){
    return <div>
        <h2>Главная страница</h2>
        <Link to="/about">O нас</Link>
    </div>;
    ;
}