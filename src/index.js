import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'

import { Header } from './components/Header';


import { Board } from './pages/Board/index'
import { Menu } from './pages/Menu/index';
import { Create } from './pages/Create';
import { Setting } from './pages/Setting';
import { usePage } from './hooks';



// TODO: set dimension of the inner DIV out of the header

export function App(){
  
  const {currentPage,previousPage,setPage} = usePage()

  const pageMap = {
    "Board": <Board/>,
    "Menu":<Menu setPage={setPage}/>,
    "Create":<Create/>,
    "Setting":<Setting/>
  }

  return(
    <div className='App'>
      <Header currentPage={currentPage} previousPage={previousPage} setPage={setPage}/>
      <main>
      {pageMap[currentPage]}
      </main>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
