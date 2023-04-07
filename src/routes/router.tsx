import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

import { url } from './urls'

// pages
const Home = lazy(() => import('@/pages/Home'))
const List = lazy(() => import('@/pages/List'))

const Router = () => {
  let routes = useRoutes([
    {
      path: url.HOME,
      element: <Home />
    },
    {
      path: url.LIST,
      element: <List />
    },
    {
      path: '*',
      element: <Navigate to={url.HOME} />
    }
  ])

  return routes
}

export default Router
