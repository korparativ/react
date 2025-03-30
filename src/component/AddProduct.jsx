import { useState } from "react";
import { addProduct } from "../reducers/ProductSlice";
import { useDispatch } from "react-redux";

export default function AddProduct({prods}) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [description, setDesc] = useState("");
    const [price, setPrice] = useState("");

    function inputName(e) {
        setName(e.target.value);
    }
    function inputDesc(e) {
        setDesc(e.target.value);
    }
    function inputPrice(e) {
        setPrice(e.target.value);
    }

    function addNewProd() {
        dispatch(addProduct({id: prods[prods.length - 1].id + 1, name: `${name}`, description: `${description}`, price: `${price}`, available: true}));
        setName("");
        setDesc("");
        setPrice("");
    }
    return (
        <div style = {{border: 'thick double rgb(218, 62, 179)', width: '300px'}}>
            <h2>Добавить новый товар</h2>
            <label htmlFor="name">Введите название</label>
            <input id="name"
            name="text"
            value={name}
            onChange={(e) => inputName(e)} />
            <br/>
            <label htmlFor="description">Введите описание</label>
            <input id="description"
            description="text"
            value={description}
            onChange={(e) => inputDesc(e)}  />
            <br/>
            <label htmlFor="price">Введите цену</label>
            <input id="price"
            name="text"
            value={price}
            onChange={(e) => inputPrice(e)} />
            <br/>
            <button onClick={() => addNewProd()}>Добавить продукт</button>

        </div>
    );
};
