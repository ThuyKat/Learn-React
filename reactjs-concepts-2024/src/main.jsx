import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalState from './context/index.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App/>
  // </StrictMode>

  //call the global state
  // <GlobalState>
  //   <App/>
  // </GlobalState> 
  // this will receive  children which are components that you are having

  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
  <App/>
  </QueryClientProvider>
  </BrowserRouter>
)
//QueryClient provides a unified interface to interact with your data fetching logic.