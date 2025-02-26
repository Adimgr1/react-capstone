import { createContext, useState } from "react";

let Loading_context= createContext({})

function Loading_Provider({children}){
     let [loading, setLoading]= useState(true);
     let [error, setError]= useState(false);

     return(
          <Loading_context.Provider value={{loading, setLoading,error,setError}}>
               {children}
          </Loading_context.Provider>
     )

}
export {Loading_Provider,Loading_context}