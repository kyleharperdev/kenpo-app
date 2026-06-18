import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import EntryForm from './pages/EntryForm'
import StatsDashboard from './pages/StatsDashboard'
import Focus from './pages/Focus'
import Kanban from './pages/Kanban'


const router = createBrowserRouter([
  { path: '/', element: <EntryForm/>},
  { path: '/dashboard', element: <StatsDashboard/>},
  { path: '/focus', element: <Focus/>},
  { path: '/kanban', element: <Kanban/>},
]);


function App() {
  return <RouterProvider router={router}/>
}

export default App;
