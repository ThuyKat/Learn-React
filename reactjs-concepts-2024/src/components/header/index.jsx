export default function Header(){

    return(
        <header>
            <div> Home Page</div>
            <ul style={{display: "flex",gap:"20px",listStyle:"none",justifyContent:"center",color:"red"}}> 
                <li>Recipes</li>
                <li>Comments</li>
            </ul>
        </header>
    )
}