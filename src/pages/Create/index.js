import { useState } from "react";
import { printMatrix } from "../../utils";

import "./Create.css"

const cellSize = 200;

const nR = Math.round(window.innerHeight / cellSize);
const nC = Math.round(window.innerWidth / cellSize);

export function Create(){
    const initialMatrix = Array(nR).fill(Array(nC).fill(0))
    const [matrix,setMatrix] = useState(initialMatrix)
    
    const flip = (i,j) => {
      console.log("flip",i,j)
      printMatrix(matrix)
      
      //const newMatrix = window.structuredClone({matrix:matrix},{transfer:[matrix]})
      let newMatrix = Array(nR)
      
      matrix.forEach((clm,index)=>{
          newMatrix[index] = Array.from(clm)
      })

      newMatrix[i][j] = newMatrix[i][j] === 0? 1:0 
      
      console.log(newMatrix[i][j])

      setMatrix(newMatrix)
    }


    return (
        <div className="tablePG">
          {
          matrix.map((row, i) => (
            <div key={i} className="rowPG">
              {row.map((cell, j) => {
                const cellClass = cell === 1 ? "cellPG alive" : "cellPG dead";
            return(<div style={{width:cellSize,height:cellSize}} onClick={()=>flip(i,j)} key={j} className={cellClass}></div>)
          })}
            </div>
          ))
          }
        </div>      
    )
}