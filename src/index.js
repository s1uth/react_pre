import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter03/Library';
import Clock from './chapter04/Clock';
import CommentList from './chapter05/CommentList';
import NotificationList from './chapter06/NotificationList';
import Accommodate from './chapter07/Accommodate';
import ConfirmButton from './chapter08/ConfirmButton';
import LendingPage from './chapter09/LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LendingPage/>
  </React.StrictMode>
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
