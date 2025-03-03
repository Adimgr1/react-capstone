import { Route, Routes } from 'react-router-dom'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Movie from './Pages/Movie';
import Home from './Pages/Home';
import Sorry from './Pages/Sorry';
import Recommendation from './Pages/Recommendation';
import Profile_dashboard from './Pages/Profile_dashboard';
import { Routing_context, Routing_context_Provider } from './Context/RoutingContext';
import PrivateRouting from './Components/PrivateRouting';

function App() {

  return (
    <Routing_context_Provider>
   <BrowserRouter>
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/movies" element={<Movie/>}/>
      <Route path="/recommendation" element={<Recommendation/>}/>
      <Route path="/sorry" element={<Sorry></Sorry>}/>
      <Route path="/dashboard" element= {<PrivateRouting><Profile_dashboard/></PrivateRouting>}/>
    </Routes>
     
    </>
   
   </BrowserRouter>
   </Routing_context_Provider>
  )
}

export default App
