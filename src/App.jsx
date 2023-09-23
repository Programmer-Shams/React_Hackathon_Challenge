import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './RootLayout'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'

const router  = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
