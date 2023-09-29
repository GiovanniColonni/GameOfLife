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
import { useMatrix } from './hooks';


// TODO: 1 .remove scrolling table
// 2. centralize dimensions and try also 5%
// 3. pagina Setting
// 4. Grafica app 
// 5. implementare il tieni premuto per l'edit

export function App(){
  
  const {currentPage,previousPage,setPage} = usePage()
  const {matrix,setMatrix,setSavedMatrix,nR,nC,refInt,cellSize} = useMatrix()

  const pageMap = {
    "Board": <Board nR={nR} nC={nC} refInt={refInt} cellSize={cellSize} setSavedMatrix={setSavedMatrix} matrix={matrix} setMatrix={setMatrix} currentPage={currentPage} previousPage={previousPage} setPage={setPage}/>,
    "Menu":<Menu nR={nR} nC={nC} refInt={refInt} cellSize={cellSize} currentPage={currentPage} previousPage={previousPage} setPage={setPage}/>,
    "Create":<Create nR={nR} nC={nC} refInt={refInt} cellSize={cellSize} currentPage={currentPage} previousPage={previousPage} setPage={setPage} matrix={matrix} setMatrix={setMatrix}/>,
    "Setting":<Setting nR={nR} nC={nC} refInt={refInt} cellSize={cellSize}/>
  }

  return(
    <div className='App'>
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
