import {use, useContext, useEffect} from 'react';
import {Routing_context} from '../Context/RoutingContext';
import { useNavigate } from 'react-router-dom';
import Home from '../Pages/Home';
export default function PrivateRouting(prop){
     let navigate= useNavigate();
     let {isLoggedIn}= useContext(Routing_context);
     useEffect(()=>{
          
          if(!isLoggedIn){
               navigate('/')
          }
     },[])
     return(
          <>
          {isLoggedIn ? prop.children : null}
          </>
     )
}