import { useState, useMemo } from "react";

import "./Create.css"

const cellSize = 50;

const nR = Math.round(window.innerHeight / cellSize);
const nC = Math.round(window.innerWidth / cellSize);

export function Create(props){

    const {matrix,setMatrix} = props

    const flip = (i,j) => {
      console.log("Flip",i,j)
      //const newMatrix = structuredClone({matrix:matrix},{transfer:[matrix]})
      let newMatrix = Array(nR)
      
      matrix.forEach((clm,index)=>{
          newMatrix[index] = Array.from(clm)
      })

      newMatrix[i][j] = newMatrix[i][j] === 0? 1:0 
      
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