export function Header(props){
    const {currentPage,previousPage,setPage} = props

    return(
        <header className="Header">
            Header for page {currentPage}
            <button onClick={()=>setPage(previousPage)}>Previous page</button>
        </header>
    )
}