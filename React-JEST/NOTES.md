# Notes about Github
1. Standard clone operation fetches all branches from the remote repository and creates local tracking branches from them
2. To clone from a specific branch: 
```bash
git clone -b <branch-name> --single-branch <remote-repo-url>
```
3. We can clone a specific branch, work on it locally and push the changes back to the same branch on the remote repository. If it's first time pushing to the branch, we need to set the upstream:
```bash
git push --set-upstream origin <branch_name>
```
# To-do list
1. Deal with HTTP request, delay when loading
2. Testing steps
-  Functionalities to test: ability to type input, change of count, style
-  Manual test + React test to automate the test to assert certain expectation
3. Why React testing Lib?
- Ability to catch bugs easily, especially when updating the application -> ability to test the integration with other component not just individual updated component, especially in big application -> harder to make sure everything is working perfectly
- Increase confidence in production phase
- Speedy, dont have to do single thing one by one
- Working in team: look in test and see ultimately what the team is trying to do
4. Type of tests
- Unit Tests : test code in isolation
- Integration Tests: tests interaction between components
- End-to-end Tests
5. Test libs: already installed when React apps installed
6. Test script -> run the script: npm run test
7. App.test.js file -> copy and post in components folder, rename it as Component.test.js -> to make it clear that this test file is meant for the component that the test is named after. In this file, you can test the component’s functionality, user interactions, or rendering behavior.
8. Structure of a test: 
- Test block, started with "test()" - 1st parameter: describing what we are going to test; 2nd param: callback function to execute the test
- Insde the test block: 
    - Render the component into the virtual DOM of the test using "render" from @testing-library/react
    - Find/get the element we want to interact with: look into element we rendered -> linkElement, divElement, etc using "screen"
    - Interact with that specific element that we got: Type in, click, 
    - Assert the results are as expected : expect().toBeInTheDocument().
9. How do we get all elements that we need??
