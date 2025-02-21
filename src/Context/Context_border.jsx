import { createContext, useContext, useState } from "react";

let Context_border= createContext({})
function Context_border_provider({children}){
     let [changed, setChanged]= useState(false)
     return(
          <Context_border.Provider value={{changed,setChanged}}>
               {children}

          </Context_border.Provider>
     )

}
export {Context_border, Context_border_provider}