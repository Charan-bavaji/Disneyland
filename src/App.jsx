import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './components/Home'
import Login from './components/Login';
import Home from './components/Home';
function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Login />
    },
    {
      path: '/home', element: <Home />
    }
  ]);

  return (
    <main className=''>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App
