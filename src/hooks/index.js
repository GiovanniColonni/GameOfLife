import { useEffect,useState } from "react";
import { initializeMatrix } from "../utils";

export function usePage(){

    const [currentPage,setCurrentPage] = useState("Menu")
    const [previousPage,setPreviousPage] = useState("")
    
    function setPage(newPage){
        if(!newPage) return
        setPreviousPage(currentPage)
        setCurrentPage(newPage)

        console.log("newPage",newPage,"currentPage",currentPage,"previousPage",previousPage)
    }
        
    return {currentPage,previousPage,setPage}
}


export function useMatrix(){


    
    const [savedMatrix,setSavedMatrix] = useState();
    const [refInt,setRefInt] = useState(1000)
    const [cellSizePerc,setCellSizePerc] = useState(0.02)
    const cellSize = Math.round(window.innerHeight * 0.8 * cellSizePerc)

    const nR = Math.round(window.innerHeight * 0.8 / cellSize);
    const nC = Math.round(window.innerWidth * 0.8 / cellSize);
    
    const [matrix,setMatrix] = useState(initializeMatrix(nR,nC));
    
    return {
        refInt,setRefInt,
        cellSize,cellSizePerc,setCellSizePerc,
        nR,nC,
        matrix,setMatrix,    
        savedMatrix,setSavedMatrix    
    }
}

