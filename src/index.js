import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import Effect from './components/Lesson/Effect';
import Api from './components/Lesson/Api';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <App />
  //<Effect />

  <Api />
);
