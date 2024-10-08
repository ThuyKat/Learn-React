import { Link } from "react-router-dom";


export default function NotFoundPage(){
    return(
        <div>
        <h3> This page doesn't exist</h3>
        <Link to={'/home/recipe-list'}>Go to Recipe List</Link>
        </div>
    )
}