import React, { createContext, useContext, useState } from 'react'
import { useReducer } from 'react';
import reduce from './Reducer';

export const cartcontext = createContext();

export default function Cartcontext({children}) {
    const [total, dispatch] =useReducer(reduce,"")
    const [cart, setcart] = useState([])
  return (
    <cartcontext.Provider value={{cart,setcart,total,dispatch}}>{children}</cartcontext.Provider>
  )
}

