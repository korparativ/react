import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "productList",
    initialState: {
        array: [
            {
                id: 1,
                name: "Product 1",
                description: "Description Product 1",
                price: 20,
                available: true,
            },
            {
                id: 2,
                name: "Product 2",
                description: "Description Product 2",
                price: 30,
                available: false,
            },
            {
                id: 3,
                name: "Product 3",
                description: "Description Product 3",
                price: 60,
                available: true,
            },
        ],
    },
    reducers: {
        addProduct: (state, {payload: newProduct}) => {
            state.array.push(newProduct);
        },
        delProduct: (state, {payload: id}) => {
            const filterState = state.array.filter(el => el.id !== id);
            state.array = filterState;
        },
        redactProduct: (state, {payload: product}) => {
            let index = state.array.findIndex(el => el.id === product.id);
            state.array[index] = product;
        }
    },
});

export const { addProduct, delProduct, redactProduct } = productSlice.actions;

export default productSlice.reducer;