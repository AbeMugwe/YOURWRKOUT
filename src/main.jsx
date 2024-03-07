import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Landing from './components/Landing/index.jsx'
import Discover from './pages/Discover/Discover.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './pages/auth/LogIn.jsx'
import Register from './pages/auth/Register.jsx'
import { AuthProvider } from './components/Context/authContext.jsx'
import SearchBar from './components/SearchBar/index.jsx'
import WrkoutDetails from './components/HorizontalScroll/WrkoutDetails.jsx'
import Loading from './components/loading/loading.jsx'
import SavedWrkouts from './pages/Saved/index.jsx'


const paths=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/landing',
    element:<Landing/>
  },
  {
    path:'/wrkouts',
    element:<Discover/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/sign-in',
    element:<Register/>
  },
  {
    path:'/search',
    element:<SearchBar/>
  },
  {
    path:'/wrkoutdetail/:id',
    element:<WrkoutDetails/>
  },
  {
    path:'/saved',
    element:<SavedWrkouts/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={paths} />
    </AuthProvider>
  </React.StrictMode>,
)
