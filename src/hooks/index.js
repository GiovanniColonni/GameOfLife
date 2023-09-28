import { useEffect,useState } from "react";
import { initializeMatrix } from "../utils";

export function usePage(){

    const [currentPage,setCurrentPage] = useState("Menu")
    const [previousPage,setPreviousPage] = useState("")
    
    function setPage(newPage){
        setPreviousPage(currentPage)
        setCurrentPage(newPage)

        console.log("newPage",newPage,currentPage,previousPage)
    }
        
    return {currentPage,previousPage,setPage}
}

export function useMatrix(){
    const cellSize = 50;

    const nR = Math.round(window.innerHeight / cellSize);
    const nC = Math.round(window.innerWidth / cellSize);


    const [matrix,setMatrix] = useState(initializeMatrix(nR,nC));
    
    return {
        nR,nC,
        matrix,setMatrix,        
    }
}