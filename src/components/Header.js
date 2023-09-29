export function Header(props){
    const {savedMatrix,setMatrix,currentPage,setSavedMatrix,matrix,previousPage,setPage,setStop,stop} = props

    return(
        <header className="Header">
            <button onClick={()=>setPage("Menu")}>Menu</button>
            {currentPage === "Board"?<button onClick={()=>{console.log("here",stop);setStop(!stop)}}>Stop Game</button>:null}
            {currentPage === "Board"?<button onClick={()=>setPage("Create")}>Back to Edit</button>:null}
            {currentPage === "Create"?<button onClick={()=>setPage("Board")}>Back to Game</button>:null}
            {currentPage === "Create"?<button onClick={()=>{
                if(savedMatrix){
                    console.log("her")
                    setMatrix(savedMatrix)
                    return
                } 
                return null
                }}>Load saved frame</button>:null}
            
        </header>
    )
}