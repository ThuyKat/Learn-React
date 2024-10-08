import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import useWindowResize from "../../hooks/use-window-resize";

//useLocalStorage, useCounter,useSessionStorage are custom hooks, useId, useOutsideClick
//useLocalStorage: store and retrieve data from local storage, persisting state accross page reloads and browser sessions
//Local storage has size limitations (usually around 5MB per domain)

function RecipesList(){
    // location.pathname = url. i.e "/recipe-list"
    //location.search = whatever params we typed after ?. ie "...?name=thuy"
    const location = useLocation();
    const {data,loading,error} = useFetch('https://dummyjson.com/recipes');
    const windowSize = useWindowResize();
    if(loading) return(
        <h1>Fetching recipes! Please wait</h1>
    )
    return(
        <div>
            <h1 style={{color:windowSize.width <768 ? "red":"black"}}>Recipe List Page</h1>
            <h3>Current window width is {windowSize.width} and current height is {windowSize.height}</h3>
            <ul>
                {data?.recipes?.length>0?
                data?.recipes.map(recipeItem => <div>
                    <img src={recipeItem.image} style={{maxWidth:"40%",margin:"20px"}}/>
                    <label style={{display:"block"}}>{recipeItem?.name}</label>
                </div>)
                :null
            }
            </ul>
        </div>
    )
}
export default RecipesList;