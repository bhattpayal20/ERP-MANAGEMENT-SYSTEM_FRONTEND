import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserApp from './UserApp'
import AdminApp from './AdminApp'
import { BrowserRouter } from 'react-router-dom'; 
import reportWebVitals from './reportWebVitals';
// import '@fortawesome/fontawesome-free/css/all.min.css'; import
// 'bootstrap-css-only/css/bootstrap.min.css'; import
// 'mdbreact/dist/css/mdb.css';
// import UserApp from './UserApp'

ReactDOM.render(
  <BrowserRouter>
    <App />
    {/* <UserApp/> */}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
