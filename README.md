# Learn-React

- React: library to create UI working with multiple libraries to manage different functions to create single page application
- single-page application: rewrite current web page with dynamic data
- comparison to angular or vuejs: web framework --> not need any extra library
- option+shift+0: erase unused components
- need to understand more about deployment: vps+ domain setting+ngix+heroku(only react deployment)
- <> </>: react fragment - used to wrap multiple HTML elements in return statement in replace ment for parent div tag
- vite: react + environment setup ( typescripe, js)
- need to udnerstand deeper about react/processor/webpack --> no need to use create-react-app command but still can setup react apps
- babel: transform a js file into another js file. HTML inside JS - JSX(JavaScript-XML)
## create React project: npm create vite@latest -> project name -> open vs code ( code.) -> npm run dev

1. overview about file structure: strict mode, create root, app
2. The React component lifecycle refers to the series of phases and methods that a component goes through from its creation to its removal from the DOM
3. class-based component: state object, componentDidMount, componentDidUpdate,componentWillUnmount, destructuring inside render() function
4. function-based component: 
    - useState: cornerstone of morden react, called at the top level of component("Top level" refers to the immediate body of the function component, outside of any conditions, loops, or nested functions),
            
            ---> manage state in functional components -> module, reuseable code: declare state variables + update them -> return an array of 2 elements : the current state value and a function to update it
            
            --> multiple uses for different state variables, preserves states between re-renders
            
            --> the update function takes new state value as its argument and return a new state -> trigger re-render of the component
            
    -  useEffect(callBack, [ dependencies]) , list of individual components
5. embedding JS expression: curly bracket
6. passing props to component: existing props/ new props -> receive as object entity -> destructuring
7. parent-child relationship in React vs nested functions
8.  use CSS : import css path/ inline(style={{}})/ import styles from css_path
            // effect learned so far: increase count, change text color, toggle between texts, hide text
            //print out a list of nested components
9. global state: other ways to pass props to multiple components  
10.  useReducer :
 What's happening behind the scenes:
-  The useReducer hook creates the dispatch function and links it internally to the reducer function you provide. This linkage is not visible in your code, but it's handled by React.
-  The dispatch function:
 When you call dispatch(action), React does the following:
* It takes the action object you passed to dispatch
* It retrieves the current state
* It calls your reducer function with these arguments: reducer(currentState, action)
* It updates the state with the value returned by the reducer
* It triggers a re-render of your component with the new state
* The "magic" connection:The connection between dispatch and reducer is maintained internally by React. When you call dispatch, React knows which reducer to use because of how useReducer was set up. 

11. simple form : attributes of input tag, useState for each input -> useState for whole form -> event object destructuring
12. dynamic form: generate all input tags using single formular so that we can use to generate different forms: login/register form
13. react-hook-form: install hook-form -> useForm hook returns object which can be destructured into 3 variables: formData(register,login), handleSubmit(prevend default submit, validate, call custom onSubmit funciton once validation passed, )

   ---> in each input tag, just need to declare input type, remaining just call register('name_of_input'). Register is a function that return an objects, use spread operator to spread all properties of this object onto input tag

   ---> properties of object returned by register function: refs(the ref provides a way to interact with the input programmatically), onChange, name, onBlur
14. react-router-dom: install the router-dom-> provides Routers component which contains individual Router(path, component) + useNavigate hook which returns function navigate -> button's onClick property
- react-router-dom: no useNavigate -> Link tag which has 'to' property which url path can be passed
- custom-router component -> useRoutes hook which takes array of route objects. Each route objects has properties: path, component,children
- dynamic routing /:id -> useParam hook which returns object contains id property
-  extract url path and params -> useLocation.pathname/useLocation.search
15. enhance performance with useMemo hook: data is fetched -> filter -> map: multiple expensive computing steps 
        // state changed -> trigger re-rendering of function -> slow down the apps

        // useMemo: save the cache / memorize return results of the function

        //useMemo: takes 2 arguments- synchronous function and dependencies list, only re-compute result if values of dependencies change, triggered during rendering 

        // different to useEffect: create side effects, can handle asynchronous function , trigger after elements are rendered

16. enhance performance with useCallback hook: decides if components should be re-rendered. If props havent been changed, return the same components without re-rendering it.
        // useCallback: save the cach/memorize the callback function, not its return result

        // useCallback returns the same function reference if dependencies are the same

        // allows comparing properties of reference type being passed to nested components

        // comparision is manged by memo function wrapping around exported child component, decides if this component should be re-rendered when there is state chagne in parents component

- for other type of reference data type being passed to child component, we use useMemo hook to maintain stable references for arrays and objects. it memoizes the result of a computation
```js
const memoizedArray = useMemo(() => [1, 2, 3, ...data], [data]);
  const memoizedObject = useMemo(() => ({ key: 'value', ...data }), [data]);
```
17. useQuery: command: npm i @tanstack/react-query -> create new QueryClient() instance in main where root element is --> wrap Apps with QueryClientProvider tag and pass client= queryClient instance
-  useQuery: provided by ReactQuery, used for data fetching, caching, updating, handling loading, error state
- use Query takes an object as its argument with properties: queryKey - identifier for the query, queryFn - function used to fetch the data
-  useQuery returns object contains data, isLoading,error, isError, status(idle,loading,error,success)
- useQuery Offers automatic background refetching, refetching on window focus, and interval-based refetching.
-  To create new data, update to db, refetch -> button - onClick: pass a function that trigger a function
        //this function does 2 things: trigger mutationAsync/mutation + clear the input field

        // the mutationAsync is the return of useMutation provided by ReactQuery. 

        //useMutation: takes object as argument with properties: mutationFn - the function to be called once triggered, onSuccess: toast, getClientQuery.invalidateQueries([query-key]) to refresh the data

18. toast is popsup message lib provided by ReactToastify -> install this lib -> include ToastContainer component in Apps -> download css of the toast -> import toast in components where it is used
19.  css-tailwind install
20.  shopping cart: npm i react-router-dom -> 3 pages: product list, product detail, cart



