import { Route, Routes } from 'react-router-dom'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Movie from './Pages/Movie';
import Home from './Pages/Home';

function App() {

  return (
   <BrowserRouter>
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/movies" element={<Movie/>}/>
    </Routes>
     
    </>
   
   </BrowserRouter>
  )
}

export default App
