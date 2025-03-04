import { createBrowserRouter } from 'react-router-dom'
import './index.css'

import { Home } from "./pages/home/home"
import { Admin } from "./pages/admin/admin"
import { Login } from "./pages/login/login"
import { Networks } from "./pages/networks/networks"
import { Private } from "./routes/private"
import { ErrorPage } from "./pages/error/error"

const router = createBrowserRouter(
  [
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin',
    element: <Private><Admin/></Private>
  },
  {
    path: '/admin/social',
    element: <Private><Networks/></Private>
  },
  {
    path: '*',
    element: <ErrorPage/>
  },
  ]
)

export {router}
