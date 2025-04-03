import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App.jsx';
import reportWebVitals from './reportWebVitals';
import Message from './component/Message';
import { store } from './store/storeThunk.js';
import { Provider } from 'react-redux';
import ToggleApp from './component/ToggleApp.jsx';
import ProductList from './component/ProductList.jsx';
import AsyncThunkMiddle from './component/AsyncThunkMiddle.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ToggleApp /> */}
      {/* <ProductList /> */}
      <AsyncThunkMiddle />
    </Provider>
    {/* <App/>
    <App />
    <Message text="Начинаем работать с React"/> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
