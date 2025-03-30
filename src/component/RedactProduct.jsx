import { useState } from "react";
import {redactProduct} from "../reducers/ProductSlice";
import { useDispatch } from "react-redux";

export default function RedactProduct({prods}) {
    const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDesc] = useState('');
    const [price, setPrice] = useState();
    const [checked, setChecked] = useState(true);

    function inputId(e) {
        setId(e.target.value);
    }
    function inputName(e) {
        setName(e.target.value);
    }
    function inputDesc(e) {
        setDesc(e.target.value);
    }
    function inputPrice(e) {
        setPrice(e.target.value);
    }

    function updateProd() {
        dispatch(redactProduct({id: parseInt(id), name: `${name}`, description: `${description}`, price: parseInt(price), available: checked}));
        setName("");
        setDesc("");
        setPrice("");
    }
    return (
        <div style = {{border: 'thick double rgb(218, 62, 179)', width: '300px'}}>
            <h2>Обновить товар</h2>
            <label htmlFor="id">Выберите Id товара</label>
            <input id="id"
            name="text"
            value={id}
            onChange={(e) => inputId(e)} />
            <br/>
            <label htmlFor="name">Обновить название</label>
            <input id="name"
            name="text"
            value={name}
            onChange={(e) => inputName(e)} />
            <br/>
            <label htmlFor="description">Обновить описание</label>
            <input id="description"
            description="text"
            value={description}
            onChange={(e) => inputDesc(e)}  />
            <br/>
            <label htmlFor="price">Обновить цену</label>
            <input id="price"
            name="text"
            value={price}
            onChange={(e) => inputPrice(e)} />
            <br/>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}></input>
            <label>{checked ? "Товар доступен" : "Товар не доступен"}</label>
                        <br/>
            <button onClick={(e) => updateProd()}>Обновить продукт</button>

        </div>
    );
};