import { useEffect,useState } from 'react';
import './App.css';

const cellSize = 50;
const refreshInterval = 1000 // 2 sec

const nC = Math.round(window.innerWidth / cellSize);
const nR = Math.round(window.innerHeight / cellSize);

function initializeMatrix() {
  
  console.log("Total number of cells", nC * nR);
  const matrix = Array(nR).fill(Array(nC).fill(0));
  
  for (let r = 0; r < nR; r++) {
    for (let c = 0; c< nC; c++) {
      matrix[r][c] = Math.round(Math.random() * 1000) % 3 === 0? 0 : 1;
    }
  }

  return matrix;
}

function getNumNeighs(matrix,r,c){

  const sR = r - 1 < 0 ? r: r-1
  const eR = r + 1 > nR - 1 ? r : r+1
  const sC = c - 1 < 0 ? c: c-1
  const eC = c + 1 > nC - 1 ? c : c+1

  let nn = 0

  for (let i = sR; i <= eR; i++) {
    for(let j = sC; j <= eC; j++){
      nn += matrix[i][j]
    }
  }

  return nn
}

function getDestiny(matrix,r,c){
  
  let nn = getNumNeighs(matrix,r,c);
  const alive = matrix[r][c] === 1

  if(alive){

    nn = nn -1
    let ret = 0
    
    if(nn <= 1) ret = 0
    if(nn >=2 && nn  <=3) ret = 1
    if(nn > 3) ret = 0
    
    //console.log("ALIVE r ",r," c ",c," nn ",nn, " result: ",ret)
    return ret

  }else{
    //console.log("DEAD r ",r," c ",c," nn ",nn)
    return nn === 3? 1 : 0
  
  }

}

function printMatrix(matrix){
  console.warn("M-----------------------")
  matrix.forEach(element => {
      console.log(element,"\n")
  })
  console.warn("M-----------------------")
}

function nextCycle(matrix){
  let nextMatrix = Array(nR).fill(Array(nC))
  printMatrix(matrix)
  console.log("Rerender")
  console.log(nextMatrix)
  for (let r = 0; r < nR; r++) {
    const row = Array(nC)
    for (let c = 0; c< nC; c++) {
      const nv = getDestiny(matrix,r,c);
      nextMatrix[r][c] = nv
      row[c] = nv
    }
    console.log(nextMatrix[r])
    nextMatrix[r] = row
  }
  
  printMatrix(nextMatrix)
  return nextMatrix;
}




function App() {

  const [matrix,setMatrix] = useState(initializeMatrix());
  const [game,setGame] = useState(false)

  useEffect(() => {

    const intervalUpdate = setInterval(() => {setMatrix(preMatrix => nextCycle(preMatrix))},refreshInterval)

    return () => clearInterval(intervalUpdate);

  },[matrix])

  function Board(){
    return (
      <div className="table">
      {
      matrix.map((row, i) => (
        <div key={i} className="row">
          {row.map((cell, j) => {
            const cellClass = cell === 1 ? "cell alive" : "cell dead";
        return(<div key={j} className={cellClass}></div>)
      })}
        </div>
      ))
      }
    </div>
    )
  }

  function Menu(){
    return(
      <div className='app'>
        <h1>Game of life</h1>
      </div>
    )
  }

  return (  
    <Board/>
  );
}

export default App;

/**
 * The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells,
 * each of which is in one of two possible states, live or dead (or populated and unpopulated, respectively).
 * Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent.
 * At each step in time, the following transitions occur:

    Any live cell with fewer than two live neighbours dies, as if by underpopulation.
    Any live cell with two or three live neighbours lives on to the next generation.
    Any live cell with more than three live neighbours dies, as if by overpopulation.
    Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

These rules, which compare the behaviour of the automaton to real life, can be condensed into the following:

    Any live cell with two or three live neighbours survives.
    Any dead cell with three live neighbours becomes a live cell.
    All other live cells die in the next generation. Similarly, all other dead cells stay dead.

The initial pattern constitutes the seed of the system. 
The first generation is created by applying the above rules simultaneously to every cell in the seed,
live or dead; births and deaths occur simultaneously, and the discrete moment at which 
this happens is sometimes called a tick.[nb 1] Each generation is a pure function of the preceding one.
The rules continue to be applied repeatedly to create further generations. 
*/