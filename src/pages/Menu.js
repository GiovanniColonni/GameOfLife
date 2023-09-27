import React from "react"
import {Grid,Box} from "@mui/material"
import "./Menu.css"

export function Menu(props){
    
    const {setPage} = props

    return(
        
            <div className="tableMenu">
                <div className="rowMenu">
                    <div onClick={()=>setPage("Board")} className="cellMenu right">Play Game</div>
                    <div onClick={()=>setPage("Create")} className="cellMenu left">Create Playground</div>
                </div>
                <div className="rowMenu">
                    <div onClick={()=>setPage("Setting")} className="cellMenu right">Setting page</div>
                    <div className="cellMenu left">What do I do with this space ?</div>
                </div>
            </div>

    )
}