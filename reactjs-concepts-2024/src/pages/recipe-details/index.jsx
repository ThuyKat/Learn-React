import { useParams } from "react-router-dom";



function RecipeDetailPage() {
    //key is id what we passed to BrowserRouter and value is what we typed in url
    const params = useParams(); // get the value of id from url
    const{id} = params;
    return (
        <div>
           <h1> Recipe details of recipe item {id}</h1>
            </div>
    )
}
export default RecipeDetailPage;