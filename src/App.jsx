import './App.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home'
import Login from './components/Login';
import Home from './components/Home';
import Details from './components/Details';
import NavBar from './components/NavBar';
import FloatHam from './components/FloatHam';
function App() {
  // if any component is using
  // const router = createBrowserRouter([
  //   {
  //     path: '/', element: <Login />
  //   },
  //   {
  //     path: '/home', element: <Home />
  //   }
  //   , {
  //     path: '/detail/:id', element: <Details />
  //   }
  // ]);

  return (
    <main className=''>
      <Router>
        <NavBar />
        <FloatHam />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
