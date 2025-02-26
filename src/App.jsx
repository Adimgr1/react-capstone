import { Route, Routes } from 'react-router-dom'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Movie from './Pages/Movie';
import Home from './Pages/Home';
import Sorry from './Pages/Sorry';
import Recommendation from './Pages/Recommendation';

function App() {

  return (
   <BrowserRouter>
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/movies" element={<Movie/>}/>
      <Route path="/recommendation" element={<Recommendation/>}/>
      <Route path="/sorry" element={<Sorry></Sorry>}/>
    </Routes>
     
    </>
   
   </BrowserRouter>
  )
}

export default App
