import { useEffect,useState } from "react";

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