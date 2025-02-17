import { Route, Routes } from 'react-router-dom'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Movie from './Movie'

function App() {

  return (
   <BrowserRouter>
    <>
    <Routes>
      <Route path="/movies" element={<Movie/>}/>
    </Routes>
     
    </>
   
   </BrowserRouter>
  )
}

export default App
