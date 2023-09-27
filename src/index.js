import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import { Board } from './components/Board'
import { Menu } from './components/Menu';
import { Create } from './components/Create';

const pageMap = {
  "Board": <Board/>,
  "Menu":<Menu/>,
  "Create":<Menu/>
}

export function App(){
  const [page,setPage] = useState("Menu")

  return(
    <div className='app'>
      {pageMap[page]}
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
