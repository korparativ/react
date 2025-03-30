import { useSelector, useDispatch } from "react-redux";
import AddProduct from "./AddProduct";
import { delProduct } from "../reducers/ProductSlice";
import RedactProduct from "./RedactProduct";

export default function ProductList() {
    const prods = useSelector(state => state.addList.array);
    const dispatch = useDispatch();
    return (
        <>
        <h1>Каталог продуктов</h1>
        <section style={{display: 'flex', flexWrap: 'wrap'}}>
            {prods.map((prod) => (
                <div style = {{border: 'thick double #32a1ce', width: '300px'}} key={prod.id} >
                    <h2>{prod.name}</h2>
                    <p>{prod.description}</p>
                    <p>{prod.id}</p>
                    <div>
                        <p>Цена: {prod.price}</p>
                        
                        <button onClick={() => {dispatch(delProduct(prod.id));}}>Удалить</button>
                        <input type="checkbox" checked={prod.available}></input>
                        <label>{prod.available ? "" : "Товар не доступе"}</label>
                    </div>
                </div>
            ))}
        </section>
        <div style={{display: 'flex'}}>
        <AddProduct prods={prods} />
        <RedactProduct prod={prods} /></div>
        </>
    )
};
