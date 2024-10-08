import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import Clean from "./components/Clean/Clean"

import { BrowserRouter as Router } from "react-router-dom";


//Context
import { createContext } from 'react';

export const FirstContext = createContext("AHEMD")

//before context we have to pass this var as a props 
const name = "Mohamed"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Router >
<App />

</Router>

/*   <FirstContext.Provider value={"Mohamed"}>
      <Clean user={name}/>
   </FirstContext.Provider> */
);
