
import React, { useState, useEffect } from 'react';


export default function Users(){

    //store users in a state
    const [usersList, setUsersList] = useState([]);
    const [pending,setPending] = useState(false);

    async function fetchAllUsers(){
        try {
            setPending(true);
            const apiResponse = await fetch('http://dummyjson.com/users');
            const result = await apiResponse.json();//parses the JSON response from the API into a JavaScript object
            console.log(result);
            //if any users exist, set the state of usersList to contain those users
            if(result?.users){
                setUsersList(result?.users);
                setPending(false);
            }else{
                setUsersList([]);
            }
        } catch (error) {
            console.log(error);
            setPending(false);
        }
    };
    // instead of useEffect to fetch users on page load we use button and this function
    // in this case we see the pending state clearer
    function handleFetchListOfUser(){
        fetchAllUsers();
    }
    //render list of users on page load
    /*
When the dependency array is empty [], it means the effect will only run once, after the initial render of the component. This is equivalent to componentDidMount in class components.
If you omit the dependency array entirely, the effect will run after every render, which can lead to unnecessary re-renders and potential infinite loops.
If you include variables in the dependency array, the effect will re-run whenever any of those variables change.
    */
    // useEffect(() => {fetchAllUsers()},[])
    console.log(usersList);
    if(pending) return <h1>Fetching users! Please wait</h1>  // allow sometimes to fetch the data instead of no user found appearance
    return(
        <div>
            <h1>
                All Users List
                
            </h1>
            <button onClick={handleFetchListOfUser}>Fetch Users List</button>
            <ul>
                {
                    //Without key = userItem.id ,the entire list may need to be re-rendered even when only a single item changes, leading to decreased performance.
                    //React will use the array index as the default key. This means each item's position in the array becomes its implicit key.
                    //React uses keys to maintain component identity across re-renders. Without proper keys, React might mistakenly reuse or reset state for list items
                    //React may have difficulty determining which items have changed, been added, or been removed.
                    usersList.length >0 ? (usersList.map((userItem) => 
                        (<li key ={userItem?.id}>
                            <p>{userItem?.firstName} {userItem?.lastName}</p>
                        </li>))) : (<h1> No users found</h1>)
                    
                }
            </ul>
        </div>
    )
}