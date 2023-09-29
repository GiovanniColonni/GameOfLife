import { useState, useMemo } from "react";
import { Header } from "../../components/Header";

import "./Create.css"
import { useMatrix } from "../../hooks";


export function Create(props){

    const {nR,nC,cellSize,matrix,setMatrix,savedMatrix,currentPage,setPage,previousPage} = props
    
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
      <>
        <Header setPage={setPage} previousPage={previousPage} savedMatrix={savedMatrix} currentPage={currentPage} matrix={matrix} setMatrix={setMatrix}/>
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
      </>
      )
}