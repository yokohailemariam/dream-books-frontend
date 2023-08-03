import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Books from './pages/Books'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Books />
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
