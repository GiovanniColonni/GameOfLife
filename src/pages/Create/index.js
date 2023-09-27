import { useState } from "react";
import { initializeMatrix } from "../../utils"
const cellSize = 50;

const nR = Math.round(window.innerHeight / cellSize);
const nC = Math.round(window.innerWidth / cellSize);

export function Create(){

    const [matrix,setMatrix] = useState(initializeMatrix(nR,nC))

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