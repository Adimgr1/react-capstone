import { createContext } from "react";
import { useState } from "react";
let Routing_context= createContext({})

function Routing_context_Provider({children}){
     let [isLoggedIn, setIsLoggedIn]= useState(false);
     return(
          <Routing_context.Provider value={{isLoggedIn, setIsLoggedIn}}>
               {children}
          </Routing_context.Provider>
     )
}
export {Routing_context_Provider,Routing_context}