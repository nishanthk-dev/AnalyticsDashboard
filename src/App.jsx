
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'

import Home from './pages/Home'
import Users from './pages/Users'
import Products from './pages/Products'
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Login from './pages/Login';

function App() {

  const Layout = () => {
    return(
      <main>
        <Navbar/>
        <div className='flex bg-main-bg'>
          <div>
            <Menu/>
          </div>
          <div>
            <Outlet/>
          </div>
        </div>
      </main>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
      {
          path: "users",
          element: <Users/>,
        },
        {
          path: "products",
          element: <Products/>,
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
