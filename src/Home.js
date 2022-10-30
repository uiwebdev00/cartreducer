import React, { useContext, useEffect, useState } from 'react'
import { cartcontext } from './Cartcontext';
import Products from './Products';

export default function Home() {
    
   
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    useEffect(()=>{

        fetch('http://localhost:8000/products')
            .then((res)=>{
                if(!res.ok){
                    throw new Error(`error => ${res.status}`)
                }
                return res.json()
            })
            .then((data)=>{
                setData(data);
                setIsPending(false)

            })
            .catch((err)=>{
                setError(err.message);
                setIsPending(false)
            })

    },[])
  return (
    <>
       {data &&<Products data={data} ></Products>}
    </>
  )
}
