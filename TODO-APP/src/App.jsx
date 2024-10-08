import { useEffect, useState } from "react";
import classes from './style.module.css';
import TodoItem from "./components/todo-item";
import TodoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material";

function App() {
  
  const [loading,setLoading] = useState(false)
  const[todoList,setTodoList] = useState([]);
  const[errorMsg,setErrorMsg] = useState(null);
  const[todoDetails,setTodoDetails] = useState(null);
  const[openDialog,setOpenDialog] = useState(false);
  async function fetchTodoList(){
    try {
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json(); // regular object
      console.log(result);
      // if (Array.isArray(result)) {
      //   console.log("It's an array-like object");
      // } else {
      //   console.log("It's a regular object");
      // }
      if(result?.todos && result?.todos?.length >0){
        setTodoList(result.todos);
        setLoading(false);
        // setErrorMsg(''); Avoid setting errorMsg to an empty string ('') unless you have a specific reason to distinguish between null and an empty string.
        //This will only display the error message when errorMsg is truthy (not null, undefined, or an empty string).
          // {errorMsg && <div className="error">{errorMsg}</div>}
      }else{
        setLoading(false);
        setTodoList([]);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg("Some error occured");
      setLoading(false);
    }
  }

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId){
    console.log(getCurrentTodoId);
    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`);
      const result = await apiResponse.json();
      if(result){
        setTodoDetails(result);
        setOpenDialog(true);
      }else{
        setTodoDetails(null);
        setOpenDialog(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchTodoList()
  },[]);
  // If the loading state is true (i.e., data is still being fetched or processed), render a rectangular skeleton placeholder that is 650x650 pixels in size. This provides a visual indication to the user that content is loading, rather than showing a blank space or a loading spinner.
  if(loading) return <Skeleton variant="rectangular" width={650} height={650}/>
  return (
    
   <div className={classes.mainWrapper}>
    <h1 className={classes.headerTitle}>Simple Todo App Using Material UI</h1>
   <div className={classes.todoListWrapper}>
    {
      todoList && todoList.length > 0 ? todoList.map(todoItem => <TodoItem todo={todoItem} fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}/>) : null
    }
   </div>
   <TodoDetails
   openDialog={openDialog}
   todoDetails={todoDetails}
   setOpenDialog={setOpenDialog}
   setTodoDetails={setTodoDetails}
   />
   </div>
   
  )
}

export default App
