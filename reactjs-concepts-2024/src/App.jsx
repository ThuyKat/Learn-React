
import { Link, Route, Routes, useNavigate, useRoutes } from 'react-router-dom'
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import ContextButtonComponent from './components/context-concept/button'
import ContextTextComponent from './components/context-concept/text'
import FormComponent from './components/form'
import FunctionalComponent from './components/functional-component'
import LoginComponent from './components/login'
import ProductList from './components/products'
import RegisterComponent from './components/register'
import UseReducerExample from './components/use-reducer-example'
import Users from './components/users'
import CommentsList from './pages/comments'
import RecipesList from './pages/recipes'
import RecipeDetailPage from './pages/recipe-details'
import NotFoundPage from './pages/not-found'
import Layout from './components/layout'
import ReactHookFormExamplePage from './pages/react-hook-form-example'
import Hooks from './pages/hooks'
import UseMemoExample from './pages/hooks/use-memo-example'
import UseCallbackExample from './pages/hooks/use-call-back-example'
import ReactQueryDemo from './pages/react-query'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const postcode = 3076;
function CustomRoutes(){
  const element = useRoutes([
    {
      path:'/home',element:<Layout/>,
      children:[
        {path:'recipe-list', element:<RecipesList/>},
        {path:'comment-list',element:<CommentsList/>},
        {path:'recipe-list/:id',element:<RecipeDetailPage/>}
        
      ]
    },
    {
      path:'*',element:<NotFoundPage/>
    },
    {
      path:'/react-hook-form',element:<ReactHookFormExamplePage/>,
    },
    {
      path:'/hooks', element:<Hooks/>
    },
    {
      path:'/use-memo',element:<UseMemoExample/>
    },
    {
      path:'/use-callback',element:<UseCallbackExample/>
    },
    {
      path:'/react-query-demo',element:<ReactQueryDemo/>
    },
  ]);
  return element;
}
function App() {
  const navigate = useNavigate();
  return (
    <>
      <h1>React apps 2024</h1>
      {/* <ClassBasedComponent/> */}
      {/* <FunctionalComponent/> */}
      {/* <ProductList name="Thuy" city="Melbourne" postcode={postcode}/> */}
      {/* <Users /> */}
      {/* <ContextButtonComponent/>
      <ContextTextComponent/> */}
      {/* <UseReducerExample/> */}
      {/* <FormComponent/> */}
      {/* <div style={{display:"flex", gap:"20px"}}>
        <LoginComponent/>
        <RegisterComponent/>
      </div> */}

      <div>
        <h1>React routing, custom hook and more</h1>
        <div>
          <Link to={"/home/recipe-list"}>Alternative way of navigating to recipe list page</Link>
        </div>
        <button onClick={()=>navigate("/home/recipe-list")}style={{background:"blue",color:"white",margin:"10px"}}>Navigate to recipe list page</button>
        <button onClick={()=>navigate("/home/comment-list")}style={{background:"blue",color:"white",margin:"10px"}}>Navigate to comment list page</button>

        {/* <Routes>
          <Route path="/home" element={<Layout/>}>
          <Route path="recipe-list" element={<RecipesList/>}/>
          <Route path="comment-list" element={<CommentsList/>}/>
          <Route path="recipe-list/:id" element={<RecipeDetailPage/>}/>
          </Route>
        
          <Route path="*" element={<NotFoundPage/>}/>


        </Routes> */}
        <CustomRoutes/>
        {/* <RecipesList/>
        <CommentsList/>  */}
        <ToastContainer />
      </div>

    </>
  )
}

export default App
