import React, { createContext, useState } from "react"

export const Store=createContext();
const ContextApi = (props) => {
  const [data,setData] = useState([

  ]);
  
  return (
    <>
      <Store.Provider value={[data,setData]}>
        {props.children}
      </Store.Provider>
    </>
  )
}

export default ContextApi


